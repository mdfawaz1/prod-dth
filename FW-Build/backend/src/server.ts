import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import cors from 'cors';
import { GridFSBucket } from 'mongodb';
import { log, logRequest, showStartupBanner } from './logger';

const app = express();
const port = Number(process.env.PORT) || 3000;

// Add this near the top, after imports
mongoose.set('strictQuery', false);

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/3d-models';
let gfs: Grid.Grid;
let gridfsBucket: GridFSBucket;

mongoose.connect(mongoURI).then(() => {
    log.db('MongoDB connected successfully');
    
    // Initialize GridFS bucket
    gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'uploads'
    });
    
    // Initialize GridFS stream
    // @ts-ignore
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('uploads');
    
    log.gridfs('GridFS initialized successfully');
}).catch(err => {
    log.error(`MongoDB connection error: ${err.message}`);
});

// Create GridFS storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return {
            filename: `${Date.now()}_${file.originalname}`,
            bucketName: 'uploads'
        };
    },
    options: {
        useUnifiedTopology: true
    }
});

const upload = multer({ storage });

// Create a separate storage for static assets like environment textures
const staticStorage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return {
            filename: file.originalname, // Keep original filename for static assets
            bucketName: 'static-assets'
        };
    },
    options: {
        useUnifiedTopology: true
    }
});

const staticUpload = multer({ storage: staticStorage });

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Environment texture endpoint
app.get('/api/environment/:filename', async (req, res) => {
    try {
        if (!mongoose.connection.db) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        const filename = req.params.filename;
        log.download(`Requested environment file: ${filename}`);

        // Create GridFSBucket for static assets
        const staticBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
            bucketName: 'static-assets'
        });

        // Check if file exists in GridFS
        const files = await mongoose.connection.db.collection('static-assets.files').find({ filename }).toArray();
        
        if (files.length === 0) {
            return res.status(404).json({ 
                error: 'Environment file not found',
                requestedFilename: filename
            });
        }

        const file = files[0];
        
        // Set appropriate headers for environment texture
        res.set('Content-Type', 'application/octet-stream');
        res.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
        res.set('Access-Control-Allow-Origin', '*');

        // Stream the file
        const downloadStream = staticBucket.openDownloadStream(file._id);
        downloadStream.pipe(res);

        downloadStream.on('error', (error: Error) => {
            log.error(`Environment file stream error: ${error.message}`);
            if (!res.headersSent) {
                res.status(500).json({ error: 'Error streaming environment file' });
            }
        });

    } catch (error) {
        log.error(`Environment file fetch error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching environment file' });
    }
});

// List available environment maps
app.get('/api/environment/list', async (req, res) => {
    try {
        if (!mongoose.connection.db) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        // Get all files from static-assets collection that end with .env extension
        const files = await mongoose.connection.db.collection('static-assets.files')
            .find({ filename: /\.env$/i })
            .toArray();
        
        // Extract filenames
        const envMaps = files.map(file => file.filename);
        
        log.info(`Found ${envMaps.length} environment maps`);
        
        res.json({
            maps: envMaps,
            count: envMaps.length
        });
    } catch (error) {
        log.error(`Error listing environment maps: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error listing environment maps' });
    }
});

// Upload static asset (like environment textures)
app.post('/api/static-assets', staticUpload.single('file'), async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        log.upload(`Uploading static asset: ${file.originalname} (${(file.size / 1024).toFixed(2)}KB)`);

        // Wait for GridFS to finish saving
        await new Promise(resolve => setTimeout(resolve, 1000));

        res.status(201).json({
            message: 'Static asset uploaded successfully',
            filename: file.filename,
            originalname: file.originalname,
            size: file.size
        });
    } catch (error) {
        log.error(`Static asset upload error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error uploading static asset' });
    }
});

// Tree images endpoint
app.get('/api/tree-images/:filename', async (req, res) => {
    try {
        if (!mongoose.connection.db) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        const filename = req.params.filename;
        log.download(`Requested tree image file: ${filename}`);

        // Create GridFSBucket for tree images
        const treeBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
            bucketName: 'tree-images'
        });

        // Check if file exists in GridFS
        const files = await mongoose.connection.db.collection('tree-images.files').find({ filename }).toArray();
        
        if (files.length === 0) {
            return res.status(404).json({ 
                error: 'Tree image file not found',
                requestedFilename: filename
            });
        }

        const file = files[0];
        
        // Set appropriate headers for tree images
        res.set('Content-Type', file.contentType || 'image/png');
        res.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
        res.set('Access-Control-Allow-Origin', '*');

        // Stream the file
        const downloadStream = treeBucket.openDownloadStream(file._id);
        downloadStream.pipe(res);

        downloadStream.on('error', (error: Error) => {
            log.error(`Tree image file stream error: ${error.message}`);
            if (!res.headersSent) {
                res.status(500).json({ error: 'Error streaming tree image file' });
            }
        });

    } catch (error) {
        log.error(`Tree image file fetch error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching tree image file' });
    }
});

// Upload tree image
app.post('/api/tree-images', multer({
    storage: new GridFsStorage({
        url: mongoURI,
        file: (req, file) => {
            return {
                filename: file.originalname, // Keep original filename for tree images
                bucketName: 'tree-images'
            };
        },
        options: {
            useUnifiedTopology: true
        }
    })
}).single('file'), async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        log.upload(`Uploading tree image: ${file.originalname} (${(file.size / 1024).toFixed(2)}KB)`);

        // Wait for GridFS to finish saving
        await new Promise(resolve => setTimeout(resolve, 1000));

        res.status(201).json({
            message: 'Tree image uploaded successfully',
            filename: file.filename,
            originalname: file.originalname,
            size: file.size
        });
    } catch (error) {
        log.error(`Tree image upload error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error uploading tree image' });
    }
});

// List all tree images
app.get('/api/tree-images', async (req, res) => {
    try {
        if (!mongoose.connection.db) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        const files = await mongoose.connection.db.collection('tree-images.files').find().toArray();
        
        res.json({
            filesCount: files.length,
            files: files.map(f => ({
                filename: f.filename,
                size: f.length,
                uploadDate: f.uploadDate,
                contentType: f.contentType
            }))
        });
    } catch (error) {
        log.error(`Error listing tree images: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error listing tree images' });
    }
});

// List all static assets
app.get('/api/static-assets', async (req, res) => {
    try {
        if (!mongoose.connection.db) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        const files = await mongoose.connection.db.collection('static-assets.files').find().toArray();
        
        res.json({
            filesCount: files.length,
            files: files.map(f => ({
                filename: f.filename,
                size: f.length,
                uploadDate: f.uploadDate,
                contentType: f.contentType
            }))
        });
    } catch (error) {
        log.error(`Error listing static assets: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error listing static assets' });
    }
});

// Upload model
app.post('/api/models', upload.single('file'), async (req, res) => {
    try {
        const { preview } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        log.upload(`Uploading model: ${file.originalname} (${(file.size / 1024 / 1024).toFixed(2)}MB)`);

        // Wait a moment for GridFS to finish saving
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Verify the file was saved in GridFS
        if (!gfs) {
            throw new Error('GridFS not initialized');
        }

        const savedFile = await gfs.files.findOne({ filename: file.filename });
        log.gridfs(`File saved in GridFS: ${savedFile ? 'Success' : 'Failed'}`);

        if (!savedFile) {
            throw new Error('File not saved to GridFS');
        }

        const model = await ModelMetadata.create({
            name: file.originalname,
            preview,
            path: file.filename,
            lastModified: Date.now(),
            locationKey: ''
        });

        log.success(`Created model metadata: ${model.name}`);
        res.status(201).json(model);
    } catch (error) {
        log.error(`Model upload error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error uploading model' });
    }
});

// Get all models
app.get('/api/models', async (req, res) => {
    try {
        const models = await ModelMetadata.find();
        res.json(models);
    } catch (error) {
        log.error(`Fetch models error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching models' });
    }
});

// Get model file
app.get('/api/models/file/:filename', async (req, res) => {
    try {
        if (!gridfsBucket) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        log.download(`Requested model file: ${req.params.filename}`);

        // List all files in GridFS for debugging
        const allFiles = await gfs.files.find().toArray();
        // log.debug(`All files in GridFS: [${allFiles.map(f => f.filename).join(', ')}]`);

        const file = await gfs.files.findOne({ filename: req.params.filename });
        log.debug(`Found file: ${JSON.stringify(file ? {
            filename: file.filename,
            size: file.length,
            contentType: file.contentType,
            uploadDate: file.uploadDate
        } : null, null, 2)}`);

        if (!file) {
            return res.status(404).json({ 
                error: 'File not found',
                requestedFilename: req.params.filename,
                availableFiles: allFiles.map(f => f.filename)
            });
        }

        res.set('Content-Type', file.contentType || 'application/octet-stream');
        res.set('Content-Disposition', `attachment; filename="${file.filename}"`);

        // Use GridFSBucket for streaming with openDownloadStream
        const downloadStream = gridfsBucket.openDownloadStream(file._id);
        downloadStream.pipe(res);

        downloadStream.on('error', (error: Error) => {
            log.error(`File stream error: ${error.message}`);
            res.status(500).json({ error: 'Error streaming file' });
        });
    } catch (error) {
        log.error(`File fetch error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching file' });
    }
});

// Delete model
app.delete('/api/models/:id', async (req, res) => {
    try {
        if (!gfs) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        const model = await ModelMetadata.findById(req.params.id);
        if (!model) {
            return res.status(404).json({ error: 'Model not found' });
        }

        await gfs.files.deleteOne({ filename: model.path });
        await ModelMetadata.deleteOne({ _id: req.params.id });

        res.status(200).json({ message: 'Model deleted successfully' });
    } catch (error) {
        log.error(`Delete model error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting model' });
    }
});

// Debug endpoint to list all files in GridFS
app.get('/api/debug/files', async (req, res) => {
    try {
        if (!gfs) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        const files = await gfs.files.find().toArray();
        res.json({
            filesCount: files.length,
            files: files.map(f => ({
                filename: f.filename,
                size: f.length,
                uploadDate: f.uploadDate
            }))
        });
    } catch (error) {
        log.error(`Debug endpoint error: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error listing files' });
    }
});

// MongoDB Model Schema
const ModelMetadataSchema = new mongoose.Schema({
    name: String,
    preview: String,
    path: String,
    lastModified: Number,
    LocationKey: String
});

const ModelMetadata = mongoose.model('ModelMetadata', ModelMetadataSchema);

// Model Flow schemas
const ModelNodeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    modelPath: { type: String, required: true },
    label: { type: String, required: true },
    description: String,
    isStartNode: { type: Boolean, default: false },
    LocationKey: String
});

const ModelConnectionSchema = new mongoose.Schema({
    id: { type: String, required: true },
    sourceModelId: { type: String, required: true },
    targetModelId: { type: String, required: true },
    meshTrigger: String,
    label: String
});

const ModelFlowSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    nodes: [ModelNodeSchema],
    connections: [ModelConnectionSchema],
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now },
    isActive: { type: Boolean, default: false }
});

const ModelFlow = mongoose.model('ModelFlow', ModelFlowSchema);

// Default mesh configurations
const defaultConfigurations = [
    {
        meshName: 'G-__559191_G-__559191_Material',
        capsuleColor: '#10B981',
        glowColor: '#00FF00',
        buildingLabel: 'Building',
        category: 'fire-safety',
        LocationKey: '3',
        modelPath: '174423185069_Building with site.glb'
    },
    {
        meshName: 'DPA_GM_Cat Ladder with Cage_CT-1 Cat Ladder with Cage [2960668]',
        capsuleColor: 'red',
        glowColor: 'red',
        buildingLabel: 'ESS - Substation',
        category: 'safety',
        isAlarm: true,
        alarmType: 'Structural',
        alarmSeverity: 'high',
        alarmId: 'ALM-FLOOR-001',
        alarmDescription: 'Floor slab structural integrity compromised',
        isAsset: false,
        assetId: '',
        LocationKey: '1',
        modelPath: '1744231385069_Building with site.glb',
        showModal: true
    }
    // {
    //     meshName: 'G-__564663_G-__564663_Material',
    //     capsuleColor: '#EF4444',
    //     glowColor: '#FF0000',
    //     buildingLabel: 'Factory',
    //     category: 'acmv',
    //     isAlarm: true,
    //     alarmType: 'fault',
    //     alarmSeverity: 'high',
    //     alarmId: 'ALM001',
    //     alarmDescription: 'High temperature detected in main transformer',
    //     LocationKey: '2',
    //     modelPath: '1744231385069_Building with site.glb'
    // },

];

// MeshConfig Schema
const MeshConfigSchema = new mongoose.Schema({
    meshName: { type: String, required: true, unique: true },
    capsuleColor: { type: String, required: true },
    glowColor: { type: String, required: true },
    buildingLabel: { type: String, required: true },
    category: { type: String, required: true },
    isAlarm: { type: Boolean, default: false },
    alarmType: { type: String },
    alarmSeverity: { type: String, enum: ['low', 'medium', 'high'] },
    alarmId: { type: String },
    alarmDescription: { type: String },
    isAsset: { type: Boolean, default: false },
    assetId: { type: String },
    LocationKey: { type: String },
    modelPath: { type: String },
    showModal: { type: Boolean, default: false },
    lastUpdated: { type: Number, default: () => Date.now() }
});

const MeshConfig = mongoose.model('MeshConfig', MeshConfigSchema);

// Get all mesh configurations (without location filter)
app.get('/api/mesh-configs/all', async (req, res) => {
    try {
        const meshConfigs = await MeshConfig.find();
        res.json(meshConfigs);
    } catch (error) {
        log.error(`Error fetching all mesh configs: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching all mesh configurations' });
    }
});

// Get mesh configurations by locationKey (required parameter)
app.get('/api/mesh-configs/:locationKey', async (req, res) => {
    try {
        const { locationKey } = req.params;
        
        if (!locationKey) {
            return res.status(400).json({ error: 'LocationKey parameter is required' });
        }
        
        log.api(`Fetching mesh configs for LocationKey: ${locationKey}`);
        
        const configs = await MeshConfig.find({ LocationKey: locationKey });
        
        log.info(`Found ${configs.length} mesh configs for LocationKey: ${locationKey}`);
        res.json(configs);
    } catch (error) {
        log.error(`Error fetching mesh configs: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching mesh configurations' });
    }
});

// Keep the old endpoint for backward compatibility but log deprecation warning
app.get('/api/mesh-configs', async (req, res) => {
    log.warn('DEPRECATED: /api/mesh-configs endpoint called without locationKey. Please use /api/mesh-configs/:locationKey');
    return res.status(400).json({ 
        error: 'LocationKey is required. Use /api/mesh-configs/:locationKey endpoint instead.' 
    });
});

// Update or create mesh configuration
app.post('/api/mesh-configs', async (req, res) => {
    try {
        const config = req.body;
        
        // Log the incoming configuration
        log.config(`Received mesh config update for: ${config.meshName}`);
        
        // Ensure isAlarm is a proper boolean if present
        if (config.isAlarm !== undefined) {
            config.isAlarm = Boolean(config.isAlarm);
        }
        
        // Ensure isAsset is a proper boolean if present
        if (config.isAsset !== undefined) {
            config.isAsset = Boolean(config.isAsset);
        }
        
        // Ensure showModal is a proper boolean if present
        if (config.showModal !== undefined) {
            config.showModal = Boolean(config.showModal);
        }
        
        // Process alarm-related fields
        if (config.isAlarm === true) {
            // If it's an alarm, ensure all required alarm fields are present
            if (!config.alarmType) config.alarmType = 'fault';
            if (!config.alarmSeverity) config.alarmSeverity = 'medium';
            if (!config.alarmId) config.alarmId = `ALM${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
            if (!config.alarmDescription) config.alarmDescription = 'Alarm detected on this asset';
            // Ensure LocationKey is set for alarms
            if (!config.LocationKey) config.LocationKey = '1';
            // Ensure modelPath is set for alarms
            // if (!config.modelPath) config.modelPath = '1744231385069_Building with site.glb';
        }
        
        // Process asset-related fields
        if (config.isAsset && !config.assetId) {
            config.assetId = `AST${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
        }
        
        // Ensure LocationKey has a default value
        if (!config.LocationKey) {
            config.LocationKey = '1';
        }
        
        // Always update the lastUpdated timestamp
        config.lastUpdated = Date.now();
        
        const updatedConfig = await MeshConfig.findOneAndUpdate(
            { meshName: config.meshName },
            config,
            { new: true, upsert: true }
        );
        
        // Log the updated configuration
        log.success(`Updated mesh config: ${updatedConfig.meshName}`);
        
        res.json(updatedConfig);
    } catch (error) {
        log.error(`Error updating mesh config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating mesh configuration' });
    }
});

// Reset to default configurations
app.post('/api/mesh-configs/reset', async (req, res) => {
    try {
        await MeshConfig.deleteMany({});
        await MeshConfig.insertMany(defaultConfigurations);
        const configs = await MeshConfig.find();
        res.json(configs);
    } catch (error) {
        log.error(`Error resetting mesh configs: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error resetting mesh configurations' });
    }
});

// Update mesh configuration by assetId
app.post('/api/mesh-configs/by-asset/:assetId', async (req, res) => {
    try {
        const { assetId } = req.params;
        const updateData = req.body;
        
        log.config(`Updating mesh config for assetId: ${assetId}`);
        
        // Find the mesh config by assetId
        const existingConfig = await MeshConfig.findOne({ assetId: assetId });
        
        if (!existingConfig) {
            return res.status(404).json({ 
                error: `No mesh configuration found for assetId: ${assetId}` 
            });
        }
        
        // Process boolean fields
        if (updateData.isAlarm !== undefined) {
            updateData.isAlarm = Boolean(updateData.isAlarm);
        }
        
        if (updateData.isAsset !== undefined) {
            updateData.isAsset = Boolean(updateData.isAsset);
        }
        
        if (updateData.showModal !== undefined) {
            updateData.showModal = Boolean(updateData.showModal);
        }
        
        // Process alarm-related fields if setting isAlarm to true
        if (updateData.isAlarm === true) {
            if (!updateData.alarmType) updateData.alarmType = existingConfig.alarmType || 'fault';
            if (!updateData.alarmSeverity) updateData.alarmSeverity = updateData.alarmSeverity || 'medium';
            if (!updateData.alarmId) updateData.alarmId = existingConfig.alarmId || `ALM${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
            if (!updateData.alarmDescription) updateData.alarmDescription = existingConfig.alarmDescription || 'Alarm detected on this asset';
        }
        
        // Always update the lastUpdated timestamp
        updateData.lastUpdated = Date.now();
        
        // Update the existing configuration
        const updatedConfig = await MeshConfig.findOneAndUpdate(
            { assetId: assetId },
            { $set: updateData },
            { new: true }
        );
        
        log.success(`Updated mesh config by assetId: ${updatedConfig?.assetId}`);
        res.json(updatedConfig);
        
    } catch (error) {
        log.error(`Error updating mesh config by assetId: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating mesh configuration by assetId' });
    }
});

// Update mesh configuration by buildingLabel (for levels)
app.post('/api/mesh-configs/by-level/:levelLabel', async (req, res) => {
    try {
        const { levelLabel } = req.params;
        const updateData = req.body;
        
        log.config(`Updating mesh config for level: ${levelLabel}`);
        
        // Find the mesh config by buildingLabel
        const existingConfig = await MeshConfig.findOne({ buildingLabel: levelLabel });
        
        if (!existingConfig) {
            return res.status(404).json({ 
                error: `No mesh configuration found for level: ${levelLabel}` 
            });
        }
        
        // Process boolean fields
        if (updateData.isAlarm !== undefined) {
            updateData.isAlarm = Boolean(updateData.isAlarm);
        }
        
        if (updateData.isAsset !== undefined) {
            updateData.isAsset = Boolean(updateData.isAsset);
        }
        
        // Always set showModal to true for floors
        updateData.showModal = true;
        
        // Process alarm-related fields if setting isAlarm to true
        if (updateData.isAlarm === true) {
            if (!updateData.alarmType) updateData.alarmType = existingConfig.alarmType || 'fault';
            if (!updateData.alarmSeverity) updateData.alarmSeverity = updateData.alarmSeverity || 'medium';
            if (!updateData.alarmId) updateData.alarmId = existingConfig.alarmId || `ALM${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
            if (!updateData.alarmDescription) updateData.alarmDescription = existingConfig.alarmDescription || `Alarm detected on ${levelLabel}`;
        }
        
        // Always update the lastUpdated timestamp
        updateData.lastUpdated = Date.now();
        
        // Update the existing configuration
        const updatedConfig = await MeshConfig.findOneAndUpdate(
            { buildingLabel: levelLabel },
            { $set: updateData },
            { new: true }
        );
        
        log.success(`Updated mesh config for level: ${updatedConfig?.buildingLabel}`);
        res.json(updatedConfig);
        
    } catch (error) {
        log.error(`Error updating mesh config by floor: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating mesh configuration by floor' });
    }
});

// MODEL FLOW API ENDPOINTS
// Get all flows
app.get('/api/flows', async (req, res) => {
    try {
        const flows = await ModelFlow.find();
        res.json(flows);
    } catch (error) {
        log.error(`Error fetching flows: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching model flows' });
    }
});

// Get active flow
app.get('/api/flows/active', async (req, res) => {
    try {
        const activeFlow = await ModelFlow.findOne({ isActive: true });
        if (!activeFlow) {
            return res.status(404).json({ error: 'No active flow found' });
        }
        res.json(activeFlow);
    } catch (error) {
        log.error(`Error fetching active flow: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching active flow' });
    }
});

// Create or update flow
app.post('/api/flows', async (req, res) => {
    try {
        const flow = req.body;
        flow.updatedAt = Date.now();

        // If the flow is set to active, deactivate all other flows
        if (flow.isActive) {
            await ModelFlow.updateMany({}, { isActive: false });
        }

        const updatedFlow = await ModelFlow.findOneAndUpdate(
            { id: flow.id },
            flow,
            { new: true, upsert: true }
        );
        
        res.json(updatedFlow);
    } catch (error) {
        log.error(`Error saving flow: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error saving model flow' });
    }
});

// Set a flow as active
app.post('/api/flows/:id/activate', async (req, res) => {
    try {
        const flowId = req.params.id;
        
        // Deactivate all flows
        await ModelFlow.updateMany({}, { isActive: false });
        
        // Activate the specified flow
        const activatedFlow = await ModelFlow.findOneAndUpdate(
            { id: flowId },
            { isActive: true, updatedAt: Date.now() },
            { new: true }
        );
        
        if (!activatedFlow) {
            return res.status(404).json({ error: 'Flow not found' });
        }
        
        res.json(activatedFlow);
    } catch (error) {
        log.error(`Error activating flow: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error activating model flow' });
    }
});

// Delete a flow
app.delete('/api/flows/:id', async (req, res) => {
    try {
        const flowId = req.params.id;
        const result = await ModelFlow.deleteOne({ id: flowId });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Flow not found' });
        }
        
        res.json({ message: 'Flow deleted successfully' });
    } catch (error) {
        log.error(`Error deleting flow: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting model flow' });
    }
});

// Widget Schema
const WidgetSchema = new mongoose.Schema({
    widgetId: { type: String, required: true, unique: true },
    bundleJson: { type: String, required: true },
    mainJs: { type: String, required: true },
    name: String,
    description: String,
    timestamp: { type: Number, default: Date.now },
    configuration: {
        props: { type: Object, default: {} },
        layout: {
            w: Number,
            h: Number,
            x: Number,
            y: Number
        }
    }
});

const Widget = mongoose.model('Widget', WidgetSchema);

// Widget Layout Schema - for storing widget positions and configurations
const WidgetLayoutSchema = new mongoose.Schema({
    id: { type: String, required: true },
    componentName: { type: String, required: true },
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true }
    },
    size: {
        width: { type: Number, required: true },
        height: { type: Number, required: true }
    },
    sceneIds: [{ type: String }],
    placement: { type: String, enum: ['left', 'right'] },
    assetwidget: { type: Boolean, default: false }, // Add parameter to mark widgets as asset widgets
    category: { type: String }, // Category for filtering widgets
    userId: { type: String, default: 'default' }, // For future user management
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now },
    version: { type: Number, default: 0 } // Version for optimistic locking
});

// Create compound index for efficient queries
WidgetLayoutSchema.index({ userId: 1 });

const WidgetLayout = mongoose.model('WidgetLayout', WidgetLayoutSchema);

// WIDGET API ENDPOINTS
// Get all widgets
app.get('/api/widgets', async (req, res) => {
    try {
        const widgets = await Widget.find();
        res.json(widgets);
    } catch (error) {
        log.error(`Error fetching widgets: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching widgets' });
    }
});

// Get widget by ID
app.get('/api/widgets/:id', async (req, res) => {
    try {
        const widget = await Widget.findOne({ widgetId: req.params.id });
        if (!widget) {
            return res.status(404).json({ error: 'Widget not found' });
        }
        res.json(widget);
    } catch (error) {
        log.error(`Error fetching widget: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching widget' });
    }
});

// Save or update widget
app.post('/api/widgets', async (req, res) => {
    try {
        const { widgetId, bundleJson, mainJs, name, description } = req.body;
        
        if (!widgetId || !bundleJson || !mainJs) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        const updatedWidget = await Widget.findOneAndUpdate(
            { widgetId },
            { 
                widgetId, 
                bundleJson, 
                mainJs, 
                name, 
                description, 
                timestamp: Date.now() 
            },
            { new: true, upsert: true }
        );
        
        res.json(updatedWidget);
    } catch (error) {
        log.error(`Error saving widget: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error saving widget' });
    }
});

// Delete all widgets (use with caution) - MUST come before wildcard route
app.delete('/api/widgets', async (req, res) => {
    try {
        const result = await Widget.deleteMany({});
        
        res.json({ 
            message: 'All widgets deleted successfully', 
            count: result.deletedCount 
        });
    } catch (error) {
        log.error(`Error deleting all widgets: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting all widgets' });
    }
});

// Delete widget - handle widget IDs with slashes (wildcard route MUST come after specific routes)
app.delete('/api/widgets/*', async (req, res) => {
    try {
        // Extract the full widget ID from the URL path after '/api/widgets/'
        const widgetId = (req.params as any)[0]; // This captures everything after /api/widgets/
        
        log.api(`Attempting to delete widget with ID: ${widgetId}`);
        
        const result = await Widget.deleteOne({ widgetId: widgetId });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ 
                error: 'Widget not found',
                requestedWidgetId: widgetId
            });
        }
        
        log.success(`Successfully deleted widget: ${widgetId}`);
        res.json({ 
            message: 'Widget deleted successfully',
            deletedWidgetId: widgetId
        });
    } catch (error) {
        log.error(`Error deleting widget: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting widget' });
    }
});

// WIDGET LAYOUT API ENDPOINTS
// Get all widget layouts for a user
app.get('/api/widget-layouts', async (req, res) => {
    try {
        const { userId = 'default' } = req.query;
        
        const layouts = await WidgetLayout.find({ userId }).sort({ updatedAt: -1 });
        
        log.info(`Found ${layouts.length} widget layouts for user: ${userId}`);
        res.json(layouts);
    } catch (error) {
        log.error(`Error fetching widget layouts: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching widget layouts' });
    }
});

// Save widget layouts (bulk save/update with atomic operations)
app.post('/api/widget-layouts', async (req, res) => {
    try {
        const { widgets, userId = 'default', timestamp } = req.body;
        const requestId = req.headers['x-request-id'];
        
        if (!widgets || !Array.isArray(widgets)) {
            return res.status(400).json({ error: 'Invalid widgets array' });
        }
        
        log.api(`Saving widget layouts - User: ${userId}, Request ID: ${requestId}, Timestamp: ${timestamp}`);
        
        // Get existing widgets to preserve their data
        const existingWidgets = await WidgetLayout.find({ userId });
        const existingWidgetMap = new Map(existingWidgets.map(w => [w.id, w]));
        
        // Track which widget IDs are in the new update
        const newWidgetIds = new Set(widgets.map(w => w.id));
        
        // Prepare bulk operations
        const bulkOps = [];
        
        // Update or insert widgets
        for (const widget of widgets) {
            const existingWidget = existingWidgetMap.get(widget.id);
            
            // Only update if timestamp is newer (or no timestamp comparison)
            if (!timestamp || !existingWidget || !existingWidget.updatedAt || timestamp > existingWidget.updatedAt) {
                bulkOps.push({
                    updateOne: {
                        filter: { id: widget.id, userId },
                        update: {
                            $set: {
                                componentName: widget.componentName,
                                position: widget.position,
                                size: widget.size,
                                sceneIds: widget.sceneIds || [],
                                placement: widget.placement,
                                assetwidget: widget.assetwidget || false,
                                category: widget.category || (existingWidget?.category), // Preserve category if not provided
                                updatedAt: timestamp || Date.now()
                            },
                            $inc: { version: 1 }
                        },
                        upsert: true
                    }
                });
            }
        }
        
        // Delete widgets that are no longer present
        const widgetsToDelete = existingWidgets
            .filter(w => !newWidgetIds.has(w.id))
            .map(w => w.id);
            
        if (widgetsToDelete.length > 0) {
            bulkOps.push({
                deleteMany: {
                    filter: { id: { $in: widgetsToDelete }, userId }
                }
            });
        }
        
        // Execute bulk operations if any
        if (bulkOps.length > 0) {
            await WidgetLayout.bulkWrite(bulkOps, { ordered: false });
        }
        
        // Return the updated layouts
        const updatedLayouts = await WidgetLayout.find({ userId }).sort({ updatedAt: -1 });
        
        log.success(`Updated ${updatedLayouts.length} widget layouts for user: ${userId}`);
        res.json(updatedLayouts);
    } catch (error) {
        log.error(`Error saving widget layouts: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error saving widget layouts' });
    }
});

// Delete all widget layouts for a user
app.delete('/api/widget-layouts', async (req, res) => {
    try {
        const { userId = 'default' } = req.query;
        
        const result = await WidgetLayout.deleteMany({ userId });
        
        res.json({ 
            message: 'Widget layouts deleted successfully', 
            count: result.deletedCount 
        });
    } catch (error) {
        log.error(`Error deleting widget layouts: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting widget layouts' });
    }
});

// Add a new endpoint to get alarms by LocationKey
app.get('/api/mesh-configs/alarms/:locationKey', async (req, res) => {
    try {
        const locationKey = req.params.locationKey;
        
        // Find only configurations that have isAlarm explicitly set to true
        // and match the specified LocationKey
        const alarms = await MeshConfig.find({
            isAlarm: true,
            LocationKey: locationKey
        });
        
        log.info(`Found ${alarms.length} active alarms for LocationKey: ${locationKey}`);
        
        // Add a timestamp to the response
        res.json({
            alarms: alarms,
            timestamp: Date.now()
        });
    } catch (error) {
        log.error(`Error fetching alarms by LocationKey: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching alarms' });
    }
});

// Add an endpoint to get all alarms across all models
app.get('/api/mesh-configs/alarms', async (req, res) => {
    try {
        // Find only configurations that have isAlarm explicitly set to true
        const alarms = await MeshConfig.find({ isAlarm: true });
        
        log.info(`Found ${alarms.length} total active alarms across all models`);
        
        // Add a timestamp to the response
        res.json({
            alarms: alarms,
            timestamp: Date.now()
        });
    } catch (error) {
        log.error(`Error fetching all alarms: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching alarms' });
    }
});

// Update the endpoint to better handle modelPath comparison
app.get('/api/mesh-configs/external-alarms/:currentModel', async (req, res) => {
    try {
        const currentModel = req.params.currentModel;
        
        // Make sure we have a valid string to compare against
        if (!currentModel) {
            return res.status(400).json({ error: 'Missing current model parameter' });
        }
        
        // Find all active alarms that are in different models
        // Using strict equality check for isAlarm
        const externalAlarms = await MeshConfig.find({
            isAlarm: true,  // Make sure it's an active alarm (as a boolean, not just truthy)
            $or: [
                { modelPath: { $ne: currentModel } }, // Different model path
                { modelPath: { $exists: false } }     // Or model path not set
            ]
        });
        
        log.info(`Found ${externalAlarms.length} external alarms for current model: ${currentModel}`);
        
        // Add a timestamp to the response to ensure clients have latest data
        res.json({
            alarms: externalAlarms,
            timestamp: Date.now()
        });
    } catch (error) {
        log.error(`Error fetching external alarms: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching external alarms' });
    }
});

// Company Configuration Schema
const CompanyConfigSchema = new mongoose.Schema({
    name: { type: String, required: true, default: '3D Building Viewer' },
    logoUrl: { type: String, default: './src/assets/logo.svg' },
    lastUpdated: { type: Number, default: Date.now }
});

const CompanyConfig = mongoose.model('CompanyConfig', CompanyConfigSchema);

// Saved Views Schema
const SavedViewSchema = new mongoose.Schema({
    modelKey: { type: String, required: true },
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true },
        z: { type: Number, required: true }
    },
    target: {
        x: { type: Number, required: true },
        y: { type: Number, required: true },
        z: { type: Number, required: true }
    },
    timestamp: { type: Number, default: Date.now },
    userId: { type: String, default: 'default' }, // For future user management
    name: { type: String }, // Optional name for the view
    description: { type: String } // Optional description
});

// Create compound index for efficient queries
SavedViewSchema.index({ modelKey: 1, userId: 1 });

const SavedView = mongoose.model('SavedView', SavedViewSchema);

// User Profile Schema
const UserProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { 
        type: String, 
        required: true, 
        enum: ['Administrator', 'User', 'Manager', 'Viewer'],
        default: 'User'
    },
    department: { type: String },
    avatar: { type: String },
    lastLogin: { type: Number, default: Date.now },
    createdAt: { type: Number, default: Date.now },
    isActive: { type: Boolean, default: true }
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

// Camera Walkthrough Routes Schema
const WalkthroughRouteSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    modelPath: { type: String, required: true },
    points: [{
        position: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
            z: { type: Number, required: true }
        },
        target: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
            z: { type: Number, required: true }
        },
        timestamp: { type: Number, required: true },
        duration: { type: Number }
    }],
    totalDuration: { type: Number, required: true },
    loop: { type: Boolean, default: false },
    smooth: { type: Boolean, default: true },
    createdAt: { type: Number, default: Date.now },
    createdBy: { type: String, default: 'default' }, // For future user management
    description: { type: String }
});

// Create index for efficient queries
WalkthroughRouteSchema.index({ modelPath: 1, createdBy: 1 });

const WalkthroughRoute = mongoose.model('WalkthroughRoute', WalkthroughRouteSchema);

// COMPANY CONFIGURATION API ENDPOINTS
// Get company configuration
app.get('/api/company-config', async (req, res) => {
    try {
        // Try to get existing configuration or create default if none exists
        let config = await CompanyConfig.findOne();
        
        if (!config) {
            config = await CompanyConfig.create({
                name: '3D Building Viewer',
                logoUrl: './src/assets/logo.svg',
                lastUpdated: Date.now()
            });
        }
        
        res.json(config);
    } catch (error) {
        log.error(`Error fetching company configuration: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching company configuration' });
    }
});

// Update company configuration
app.post('/api/company-config', async (req, res) => {
    try {
        const { name, logoUrl } = req.body;
        
        if (!name) {
            return res.status(400).json({ error: 'Company name is required' });
        }
        
        // Check if config exists, create if it doesn't
        let config = await CompanyConfig.findOne();
        
        if (config) {
            // Update existing config
            config.name = name;
            if (logoUrl) config.logoUrl = logoUrl;
            config.lastUpdated = Date.now();
            await config.save();
        } else {
            // Create new config
            config = await CompanyConfig.create({
                name,
                logoUrl: logoUrl || './src/assets/logo.svg',
                lastUpdated: Date.now()
            });
        }
        
        res.json(config);
    } catch (error) {
        log.error(`Error updating company configuration: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating company configuration' });
    }
});

// USER PROFILE API ENDPOINTS
// Get current user profile (normally would use authentication)
app.get('/api/user-profile', async (req, res) => {
    try {
        // For demonstration purposes, return the first user or a default one
        let user = await UserProfile.findOne({ isActive: true });
        
        if (!user) {
            // Create a default admin user if none exists
            user = await UserProfile.create({
                name: 'John Doe',
                email: 'admin@example.com',
                role: 'Administrator',
                department: 'Engineering',
                lastLogin: Date.now(),
                createdAt: Date.now(),
                isActive: true
            });
        }
        
        // Update last login time
        user.lastLogin = Date.now();
        await user.save();
        
        res.json(user);
    } catch (error) {
        log.error(`Error fetching user profile: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching user profile' });
    }
});

// IAQ PLAYBACK CONFIG SCHEMA AND API ENDPOINTS
// Schema for IAQ playback configuration
const IAQPlaybackConfigSchema = new mongoose.Schema({
    meshName: { type: String, required: true },
    locationKey: { type: String, required: true, unique: true },
    enabled: { type: Boolean, default: true },
    modelPath: { type: String },
    timestamp: { type: Number, default: Date.now }
});

// Create index for efficient queries
IAQPlaybackConfigSchema.index({ meshName: 1 });
IAQPlaybackConfigSchema.index({ locationKey: 1 });

const IAQPlaybackConfig = mongoose.model('IAQPlaybackConfig', IAQPlaybackConfigSchema);

// Get all IAQ playback configurations
app.get('/api/iaq-playback-configs', async (req, res) => {
    try {
        const configs = await IAQPlaybackConfig.find({ enabled: true });
        
        log.info(`Found ${configs.length} IAQ playback configurations`);
        res.json(configs);
    } catch (error) {
        log.error(`Error fetching IAQ playback configs: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching IAQ playback configurations' });
    }
});

// Get IAQ playback configuration by location key
app.get('/api/iaq-playback-configs/:locationKey', async (req, res) => {
    try {
        const { locationKey } = req.params;
        
        const config = await IAQPlaybackConfig.findOne({ locationKey });
        
        if (!config) {
            return res.status(404).json({ error: 'IAQ playback configuration not found' });
        }
        
        res.json(config);
    } catch (error) {
        log.error(`Error fetching IAQ playback config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching IAQ playback configuration' });
    }
});

// Create or update IAQ playback configuration
app.post('/api/iaq-playback-configs', async (req, res) => {
    try {
        const configData = req.body;
        
        if (!configData.meshName || !configData.locationKey) {
            return res.status(400).json({ error: 'meshName and locationKey are required' });
        }
        
        // Update timestamp
        configData.timestamp = Date.now();
        
        const updatedConfig = await IAQPlaybackConfig.findOneAndUpdate(
            { locationKey: configData.locationKey },
            configData,
            { new: true, upsert: true }
        );
        
        log.success(`Updated IAQ playback config for mesh: ${updatedConfig.meshName}, location: ${updatedConfig.locationKey}`);
        res.json(updatedConfig);
    } catch (error) {
        log.error(`Error saving IAQ playback config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error saving IAQ playback configuration' });
    }
});

// Delete IAQ playback configuration
app.delete('/api/iaq-playback-configs/:locationKey', async (req, res) => {
    try {
        const { locationKey } = req.params;
        
        const result = await IAQPlaybackConfig.deleteOne({ locationKey });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'IAQ playback configuration not found' });
        }
        
        log.success(`Deleted IAQ playback config for location: ${locationKey}`);
        res.json({ message: 'IAQ playback configuration deleted successfully' });
    } catch (error) {
        log.error(`Error deleting IAQ playback config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting IAQ playback configuration' });
    }
});

app.listen(port, () => {
    showStartupBanner(port);
});

// SAVED VIEWS API ENDPOINTS
// Save a view to the database
app.post('/api/saved-views', async (req, res) => {
    try {
        const { modelKey, position, target, name, description, userId = 'default' } = req.body;
        
        if (!modelKey || !position || !target) {
            return res.status(400).json({ error: 'Missing required fields: modelKey, position, target' });
        }
        
        // Validate position and target structure
        if (!position.x && position.x !== 0 || !position.y && position.y !== 0 || !position.z && position.z !== 0) {
            return res.status(400).json({ error: 'Invalid position coordinates' });
        }
        
        if (!target.x && target.x !== 0 || !target.y && target.y !== 0 || !target.z && target.z !== 0) {
            return res.status(400).json({ error: 'Invalid target coordinates' });
        }
        
        // Check if a view already exists for this model and user
        const existingView = await SavedView.findOne({ modelKey, userId });
        
        let savedView;
        if (existingView) {
            // Update existing view
            existingView.position = position;
            existingView.target = target;
            existingView.timestamp = Date.now();
            if (name) existingView.name = name;
            if (description) existingView.description = description;
            savedView = await existingView.save();
            
            log.success(`Updated existing view for model: ${modelKey}, user: ${userId}`);
        } else {
            // Create new view
            savedView = await SavedView.create({
                modelKey,
                position,
                target,
                userId,
                name,
                description,
                timestamp: Date.now()
            });
            
            log.success(`Created new view for model: ${modelKey}, user: ${userId}`);
        }
        
        res.json(savedView);
    } catch (error) {
        log.error(`Error saving view: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error saving view' });
    }
});

// Get saved view for a specific model
app.get('/api/saved-views/:modelKey', async (req, res) => {
    try {
        const { modelKey } = req.params;
        const { userId = 'default' } = req.query;
        
        log.api(`Fetching saved view for model: ${modelKey}, user: ${userId}`);
        
        const savedView = await SavedView.findOne({ modelKey, userId });
        
        if (!savedView) {
            return res.status(404).json({ error: 'No saved view found for this model' });
        }
        
        res.json(savedView);
    } catch (error) {
        log.error(`Error fetching saved view: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching saved view' });
    }
});

// Get all saved views for a user
app.get('/api/saved-views', async (req, res) => {
    try {
        const { userId = 'default' } = req.query;
        
        log.api(`Fetching all saved views for user: ${userId}`);
        
        const savedViews = await SavedView.find({ userId }).sort({ timestamp: -1 });
        
        res.json(savedViews);
    } catch (error) {
        log.error(`Error fetching saved views: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching saved views' });
    }
});

// Import saved views from localStorage format (migration utility)
app.post('/api/saved-views/import', async (req, res) => {
    try {
        const { localStorageData, userId = 'default' } = req.body;
        
        if (!localStorageData || typeof localStorageData !== 'object') {
            return res.status(400).json({ error: 'Invalid localStorage data format' });
        }
        
        const importedViews = [];
        const errors = [];
        
        for (const [modelKey, viewData] of Object.entries(localStorageData)) {
            try {
                // Validate the view data structure
                if (!viewData || typeof viewData !== 'object') {
                    errors.push(`Invalid data for model ${modelKey}`);
                    continue;
                }
                
                const { position, target, timestamp } = viewData as any;
                
                if (!position || !target) {
                    errors.push(`Missing position or target for model ${modelKey}`);
                    continue;
                }
                
                // Check if view already exists
                const existingView = await SavedView.findOne({ modelKey, userId });
                
                if (existingView) {
                    // Update existing view
                    existingView.position = position;
                    existingView.target = target;
                    existingView.timestamp = timestamp || Date.now();
                    await existingView.save();
                    importedViews.push({ modelKey, action: 'updated' });
                } else {
                    // Create new view
                    await SavedView.create({
                        modelKey,
                        position,
                        target,
                        userId,
                        timestamp: timestamp || Date.now()
                    });
                    importedViews.push({ modelKey, action: 'created' });
                }
            } catch (error) {
                log.error(`Error importing view for ${modelKey}: ${(error as Error).message}`);
                errors.push(`Failed to import view for ${modelKey}: ${(error as Error).message}`);
            }
        }
        
        log.success(`Imported ${importedViews.length} views for user: ${userId}`);
        if (errors.length > 0) {
            log.warn(`Import errors: ${JSON.stringify(errors)}`);
        }
        
        res.json({
            imported: importedViews,
            errors: errors,
            totalProcessed: Object.keys(localStorageData).length
        });
    } catch (error) {
        log.error(`Error importing saved views: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error importing saved views' });
    }
});

// SkyboxConfig Schema
const SkyboxConfigSchema = new mongoose.Schema({
    modelPath: { type: String, required: true, unique: true },
    type: { type: String, required: true, enum: ['environmentMap', 'color'] },
    value: { type: String, required: true }, // Environment file name or color hex
    intensity: { type: Number, default: 1.0 },
    exposure: { type: Number },
    contrast: { type: Number },
    lastUpdated: { type: Number, default: Date.now }
});

const SkyboxConfig = mongoose.model('SkyboxConfig', SkyboxConfigSchema);

// HeatmapData Schema
const HeatmapDataSchema = new mongoose.Schema({
    modelPath: { type: String, required: true },
    meshName: { type: String, required: true }, // Bind to specific mesh
    sensorId: { type: String, required: true },
    sensorType: { 
        type: String, 
        required: true, 
        enum: ['temperature', 'humidity', 'occupancy', 'pressure', 'airQuality', 'noise', 'light'],
        default: 'temperature'
    },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true },
    value: { type: Number, required: true }, // Sensor value
    unit: { type: String, required: true, default: '°C' }, // Unit of measurement
    label: { type: String },
    minValue: { type: Number, default: 0 }, // Minimum expected value for this sensor type
    maxValue: { type: Number, default: 100 }, // Maximum expected value for this sensor type
    timestamp: { type: Number, default: Date.now },
    isActive: { type: Boolean, default: true }
});

// Create compound index for efficient queries
HeatmapDataSchema.index({ modelPath: 1, meshName: 1, isActive: 1 });
HeatmapDataSchema.index({ modelPath: 1, meshName: 1, sensorId: 1 });

const HeatmapData = mongoose.model('HeatmapData', HeatmapDataSchema);

// SKYBOX CONFIGURATION API ENDPOINTS
// Get all skybox configurations
app.get('/api/skybox-configs', async (req, res) => {
    try {
        const configs = await SkyboxConfig.find();
        res.json(configs);
    } catch (error) {
        log.error(`Error fetching skybox configs: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching skybox configurations' });
    }
});

// Get skybox configuration for a specific model
app.get('/api/skybox-configs/:modelPath', async (req, res) => {
    try {
        const { modelPath } = req.params;
        
        // URL decode the model path
        const decodedPath = decodeURIComponent(modelPath);
        
        const config = await SkyboxConfig.findOne({ modelPath: decodedPath });
        
        if (!config) {
            return res.status(404).json({ error: 'No skybox configuration found for this model' });
        }
        
        res.json(config);
    } catch (error) {
        log.error(`Error fetching skybox config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching skybox configuration' });
    }
});

// Create or update skybox configuration
app.post('/api/skybox-configs', async (req, res) => {
    try {
        const config = req.body;
        
        if (!config.modelPath || !config.type || !config.value) {
            return res.status(400).json({ error: 'Missing required fields: modelPath, type, value' });
        }
        
        // Validate type
        if (config.type !== 'environmentMap' && config.type !== 'color') {
            return res.status(400).json({ error: 'Invalid type: must be "environmentMap" or "color"' });
        }
        
        // If type is environmentMap, check if the environment file exists
        if (config.type === 'environmentMap') {
            const files = await mongoose.connection.db.collection('static-assets.files')
                .find({ filename: config.value })
                .toArray();
            
            if (files.length === 0) {
                log.warn(`Environment file ${config.value} not found in database. Using anyway.`);
                // We'll still save the config, but warn that the file wasn't found
            }
        }
        
        // Always update the lastUpdated timestamp
        config.lastUpdated = Date.now();
        
        const updatedConfig = await SkyboxConfig.findOneAndUpdate(
            { modelPath: config.modelPath },
            config,
            { new: true, upsert: true }
        );
        
        res.json(updatedConfig);
    } catch (error) {
        log.error(`Error updating skybox config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating skybox configuration' });
    }
});

// Delete a skybox configuration
app.delete('/api/skybox-configs/:modelPath', async (req, res) => {
    try {
        const { modelPath } = req.params;
        
        // URL decode the model path
        const decodedPath = decodeURIComponent(modelPath);
        
        const result = await SkyboxConfig.deleteOne({ modelPath: decodedPath });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Skybox configuration not found' });
        }
        
        res.json({ message: 'Skybox configuration deleted successfully' });
    } catch (error) {
        log.error(`Error deleting skybox config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting skybox configuration' });
    }
});

// HEATMAP DATA API ENDPOINTS
// Get heatmap data for a specific model and mesh
app.get('/api/heatmap-data/:modelPath/:meshName', async (req, res) => {
    try {
        const { modelPath, meshName } = req.params;
        
        // URL decode the paths
        const decodedModelPath = decodeURIComponent(modelPath);
        const decodedMeshName = decodeURIComponent(meshName);
        
        log.api(`Fetching heatmap data for model: ${decodedModelPath}, mesh: ${decodedMeshName}`);
        
        const heatmapData = await HeatmapData.find({ 
            modelPath: decodedModelPath,
            meshName: decodedMeshName,
            isActive: true 
        }).sort({ timestamp: -1 });
        
        // Transform data to match frontend format
        const formattedData = heatmapData.map(data => ({
            x: data.x,
            y: data.y,
            z: data.z,
            value: data.value,
            sensorType: data.sensorType || 'temperature',
            unit: data.unit || '°C',
            minValue: data.minValue || 0,
            maxValue: data.maxValue || 100,
            label: data.label || `${(data.sensorType || 'temperature').charAt(0).toUpperCase() + (data.sensorType || 'temperature').slice(1)} ${data.sensorId}: ${data.value}${data.unit || '°C'}`
        }));
        
        log.info(`Found ${formattedData.length} heatmap data points for model: ${decodedModelPath}, mesh: ${decodedMeshName}`);
        
        res.json(formattedData);
    } catch (error) {
        log.error(`Error fetching heatmap data: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching heatmap data' });
    }
});

// Get heatmap data for a specific model (all meshes) - backward compatibility
app.get('/api/heatmap-data/:modelPath', async (req, res) => {
    try {
        const { modelPath } = req.params;
        
        // URL decode the model path
        const decodedPath = decodeURIComponent(modelPath);
        
        log.api(`Fetching all heatmap data for model: ${decodedPath}`);
        
        const heatmapData = await HeatmapData.find({ 
            modelPath: decodedPath, 
            isActive: true 
        }).sort({ timestamp: -1 });
        
        // Group by mesh name and transform data
        const groupedData = heatmapData.reduce((acc: any, data) => {
            if (!acc[data.meshName]) {
                acc[data.meshName] = [];
            }
            acc[data.meshName].push({
                x: data.x,
                y: data.y,
                z: data.z,
                value: data.value,
                sensorType: data.sensorType || 'temperature',
                unit: data.unit || '°C',
                minValue: data.minValue || 0,
                maxValue: data.maxValue || 100,
                label: data.label || `${(data.sensorType || 'temperature').charAt(0).toUpperCase() + (data.sensorType || 'temperature').slice(1)} ${data.sensorId}: ${data.value}${data.unit || '°C'}`
            });
            return acc;
        }, {});
        
        log.info(`Found ${heatmapData.length} total heatmap data points for model: ${decodedPath} across ${Object.keys(groupedData).length} meshes`);
        
        res.json(groupedData);
    } catch (error) {
        log.error(`Error fetching heatmap data: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching heatmap data' });
    }
});

// Create or update heatmap data points
app.post('/api/heatmap-data', async (req, res) => {
    try {
        const { modelPath, meshName, dataPoints } = req.body;
        
        if (!modelPath || !meshName || !dataPoints || !Array.isArray(dataPoints)) {
            return res.status(400).json({ error: 'Missing required fields: modelPath, meshName, dataPoints (array)' });
        }
        
        log.config(`Updating heatmap data for model: ${modelPath}, mesh: ${meshName} with ${dataPoints.length} points`);
        
        // Delete existing data for this model and mesh
        await HeatmapData.deleteMany({ modelPath, meshName });
        
        // Insert new data points
        const heatmapEntries = dataPoints.map((point: any, index: number) => ({
            modelPath,
            meshName,
            sensorId: point.sensorId || `sensor_${index + 1}`,
            sensorType: point.sensorType || 'temperature',
            x: point.x,
            y: point.y,
            z: point.z,
            value: point.value,
            unit: point.unit || '°C',
            minValue: point.minValue || 0,
            maxValue: point.maxValue || 100,
            label: point.label,
            timestamp: Date.now(),
            isActive: true
        }));
        
        const savedData = await HeatmapData.insertMany(heatmapEntries);
        
        log.success(`Saved ${savedData.length} heatmap data points for model: ${modelPath}, mesh: ${meshName}`);
        
        res.json({
            message: 'Heatmap data updated successfully',
            count: savedData.length,
            modelPath,
            meshName
        });
    } catch (error) {
        log.error(`Error updating heatmap data: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating heatmap data' });
    }
});

// Update sensor value only (simplified API for external systems)
app.post('/api/heatmap-data/update-value', async (req, res) => {
    try {
        const { sensorId, value } = req.body;
        
        if (!sensorId || value === undefined || value === null) {
            return res.status(400).json({ error: 'Missing required fields: sensorId, value' });
        }
        
        log.config(`Updating sensor value for sensor: ${sensorId}, value: ${value}`);
        
        // Find and update the existing sensor data by sensorId only
        const existingSensor = await HeatmapData.findOne({
            sensorId,
            isActive: true
        });
        
        if (!existingSensor) {
            return res.status(404).json({ 
                error: 'Sensor not found. Please create the sensor first using the full heatmap-data endpoint.',
                sensorId
            });
        }
        
        // Update only the value, label, and timestamp
        const updatedLabel = `${(existingSensor.sensorType || 'temperature').charAt(0).toUpperCase() + (existingSensor.sensorType || 'temperature').slice(1)} ${sensorId}: ${value}${existingSensor.unit || '°C'}`;
        
        const updatedSensor = await HeatmapData.findOneAndUpdate(
            {
                sensorId,
                isActive: true
            },
            {
                $set: {
                    value: parseFloat(value),
                    label: updatedLabel,
                    timestamp: Date.now()
                }
            },
            { new: true }
        );
        
        if (!updatedSensor) {
            return res.status(404).json({ error: 'Failed to update sensor value' });
        }
        
        log.success(`Successfully updated sensor value: ${sensorId} = ${value}`);
        
        res.json({
            message: 'Sensor value updated successfully',
            sensorId,
            oldValue: existingSensor.value,
            newValue: parseFloat(value),
            modelPath: updatedSensor.modelPath,
            meshName: updatedSensor.meshName,
            timestamp: updatedSensor.timestamp
        });
    } catch (error) {
        log.error(`Error updating sensor value: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating sensor value' });
    }
});

// Batch update sensor values (for multiple sensors at once)
app.post('/api/heatmap-data/batch-update-values', async (req, res) => {
    try {
        const { sensorUpdates } = req.body;
        
        if (!sensorUpdates || !Array.isArray(sensorUpdates)) {
            return res.status(400).json({ error: 'Missing required field: sensorUpdates (array)' });
        }
        
        log.config(`Batch updating ${sensorUpdates.length} sensor values`);
        
        const results = [];
        const errors = [];
        
        for (const update of sensorUpdates) {
            try {
                const { sensorId, value } = update;
                
                if (!sensorId || value === undefined || value === null) {
                    errors.push({ sensorId: sensorId || 'unknown', error: 'Missing sensorId or value' });
                    continue;
                }
                
                // Find the existing sensor by sensorId only
                const existingSensor = await HeatmapData.findOne({
                    sensorId,
                    isActive: true
                });
                
                if (!existingSensor) {
                    errors.push({ sensorId, error: 'Sensor not found' });
                    continue;
                }
                
                // Update the sensor
                const updatedLabel = `${(existingSensor.sensorType || 'temperature').charAt(0).toUpperCase() + (existingSensor.sensorType || 'temperature').slice(1)} ${sensorId}: ${value}${existingSensor.unit || '°C'}`;
                
                const updatedSensor = await HeatmapData.findOneAndUpdate(
                    {
                        sensorId,
                        isActive: true
                    },
                    {
                        $set: {
                            value: parseFloat(value),
                            label: updatedLabel,
                            timestamp: Date.now()
                        }
                    },
                    { new: true }
                );
                
                if (updatedSensor) {
                    results.push({
                        sensorId,
                        oldValue: existingSensor.value,
                        newValue: parseFloat(value),
                        modelPath: updatedSensor.modelPath,
                        meshName: updatedSensor.meshName,
                        updated: true
                    });
                } else {
                    errors.push({ sensorId, error: 'Failed to update' });
                }
                
            } catch (sensorError) {
                log.error(`Error updating sensor ${update.sensorId}: ${(sensorError as Error).message}`);
                errors.push({ sensorId: update.sensorId || 'unknown', error: (sensorError as Error).message });
            }
        }
        
        log.success(`Batch update completed: ${results.length} successful, ${errors.length} errors`);
        
        res.json({
            message: 'Batch update completed',
            successful: results.length,
            errorCount: errors.length,
            results,
            errors: errors.length > 0 ? errors : undefined
        });
    } catch (error) {
        log.error(`Error in batch update: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error in batch sensor value update' });
    }
});

// Get all heatmap data (for debugging)
app.get('/api/heatmap-data', async (req, res) => {
    try {
        const allData = await HeatmapData.find({ isActive: true }).sort({ timestamp: -1 });
        
        // Group by model path
        const groupedData = allData.reduce((acc: any, data) => {
            if (!acc[data.modelPath]) {
                acc[data.modelPath] = [];
            }
            acc[data.modelPath].push({
                sensorId: data.sensorId,
                sensorType: data.sensorType,
                x: data.x,
                y: data.y,
                z: data.z,
                value: data.value,
                unit: data.unit,
                minValue: data.minValue,
                maxValue: data.maxValue,
                label: data.label,
                timestamp: data.timestamp
            });
            return acc;
        }, {});
        
        res.json({
            totalCount: allData.length,
            models: Object.keys(groupedData),
            data: groupedData
        });
    } catch (error) {
        log.error(`Error fetching all heatmap data: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching all heatmap data' });
    }
});

// Delete heatmap data for a specific model and mesh
app.delete('/api/heatmap-data/:modelPath/:meshName', async (req, res) => {
    try {
        const { modelPath, meshName } = req.params;
        
        // URL decode the paths
        const decodedModelPath = decodeURIComponent(modelPath);
        const decodedMeshName = decodeURIComponent(meshName);
        
        const result = await HeatmapData.deleteMany({ 
            modelPath: decodedModelPath, 
            meshName: decodedMeshName 
        });
        
        res.json({ 
            message: 'Heatmap data deleted successfully',
            deletedCount: result.deletedCount,
            modelPath: decodedModelPath,
            meshName: decodedMeshName
        });
    } catch (error) {
        log.error(`Error deleting heatmap data: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting heatmap data' });
    }
});

// Delete heatmap data for a specific model (all meshes)
app.delete('/api/heatmap-data/:modelPath', async (req, res) => {
    try {
        const { modelPath } = req.params;
        
        // URL decode the model path
        const decodedPath = decodeURIComponent(modelPath);
        
        const result = await HeatmapData.deleteMany({ modelPath: decodedPath });
        
        res.json({ 
            message: 'Heatmap data deleted successfully for all meshes',
            deletedCount: result.deletedCount,
            modelPath: decodedPath
        });
    } catch (error) {
        log.error(`Error deleting heatmap data: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting heatmap data' });
    }
});

// CalloutMeshMetadata Schema
const CalloutMeshMetadataSchema = new mongoose.Schema({
    meshName: { type: String, required: true },
    locationKey: { type: String },
    assetKey: { type: String },
    equipmentId: { type: String },
    systemId: { type: String },
    tags: [{ type: String }],
    modelPath: { type: String },
    defaultConfig: {
        title: { type: String },
        subtitle: { type: String },
        description: { type: String },
        status: { type: String, enum: ['online', 'warning', 'error', 'maintenance'] },
        value: { type: String },
        unit: { type: String },
        placement: { type: String, enum: ['left', 'right'] },
        showTarget: { type: Boolean, default: true },
        showLine: { type: Boolean, default: true }
    },
    metadata: { type: Object },
    isActive: { type: Boolean, default: true },
    lastUpdated: { type: Number, default: Date.now }
});

// Create compound indexes for efficient queries
CalloutMeshMetadataSchema.index({ meshName: 1, modelPath: 1 });
CalloutMeshMetadataSchema.index({ locationKey: 1 });
CalloutMeshMetadataSchema.index({ assetKey: 1 });
CalloutMeshMetadataSchema.index({ equipmentId: 1 });
CalloutMeshMetadataSchema.index({ systemId: 1 });
CalloutMeshMetadataSchema.index({ tags: 1 });

const CalloutMeshMetadata = mongoose.model('CalloutMeshMetadata', CalloutMeshMetadataSchema);

// CALLOUT MESH METADATA API ENDPOINTS
// Get all callout metadata
app.get('/api/callout-metadata', async (req, res) => {
    try {
        const { locationKey, assetKey, equipmentId, systemId, tag, modelPath } = req.query;
        
        // Build query based on provided filters
        const query: any = { isActive: true };
        
        if (locationKey) query.locationKey = locationKey;
        if (assetKey) query.assetKey = assetKey;
        if (equipmentId) query.equipmentId = equipmentId;
        if (systemId) query.systemId = systemId;
        if (tag) query.tags = tag;
        if (modelPath) query.modelPath = modelPath;
        
        const metadata = await CalloutMeshMetadata.find(query).sort({ lastUpdated: -1 });
        
        log.info(`Found ${metadata.length} callout metadata entries with filters: ${JSON.stringify(query)}`);
        res.json(metadata);
    } catch (error) {
        log.error(`Error fetching callout metadata: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching callout metadata' });
    }
});

// Get callout metadata by mesh name
app.get('/api/callout-metadata/mesh/:meshName', async (req, res) => {
    try {
        const { meshName } = req.params;
        const { modelPath } = req.query;
        
        const query: any = { meshName };
        if (modelPath) query.modelPath = modelPath;
        
        const metadata = await CalloutMeshMetadata.findOne(query);
        
        if (!metadata) {
            return res.status(404).json({ error: 'Callout metadata not found for this mesh' });
        }
        
        res.json(metadata);
    } catch (error) {
        log.error(`Error fetching callout metadata: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching callout metadata' });
    }
});

// Get callout metadata by various keys
app.get('/api/callout-metadata/lookup', async (req, res) => {
    try {
        const { locationKey, assetKey, equipmentId, systemId } = req.query;
        
        if (!locationKey && !assetKey && !equipmentId && !systemId) {
            return res.status(400).json({ error: 'At least one lookup key is required' });
        }
        
        // Build OR query to find by any of the provided keys
        const orConditions = [];
        if (locationKey) orConditions.push({ locationKey });
        if (assetKey) orConditions.push({ assetKey });
        if (equipmentId) orConditions.push({ equipmentId });
        if (systemId) orConditions.push({ systemId });
        
        const metadata = await CalloutMeshMetadata.find({
            $or: orConditions,
            isActive: true
        });
        
        log.info(`Found ${metadata.length} callout metadata entries for lookup keys`);
        res.json(metadata);
    } catch (error) {
        log.error(`Error looking up callout metadata: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error looking up callout metadata' });
    }
});

// Create or update callout metadata
app.post('/api/callout-metadata', async (req, res) => {
    try {
        const metadata = req.body;
        
        if (!metadata.meshName) {
            return res.status(400).json({ error: 'meshName is required' });
        }
        
        // Ensure at least one identifier is provided
        if (!metadata.locationKey && !metadata.assetKey && !metadata.equipmentId && !metadata.systemId) {
            return res.status(400).json({ 
                error: 'At least one identifier (locationKey, assetKey, equipmentId, or systemId) is required' 
            });
        }
        
        // Update timestamp
        metadata.lastUpdated = Date.now();
        
        // Find and update or create new
        const query: any = { meshName: metadata.meshName };
        if (metadata.modelPath) query.modelPath = metadata.modelPath;
        
        const updatedMetadata = await CalloutMeshMetadata.findOneAndUpdate(
            query,
            metadata,
            { new: true, upsert: true }
        );
        
        log.success(`Updated callout metadata: ${updatedMetadata.meshName}`);
        res.json(updatedMetadata);
    } catch (error) {
        log.error(`Error updating callout metadata: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating callout metadata' });
    }
});

// Bulk create/update callout metadata
app.post('/api/callout-metadata/bulk', async (req, res) => {
    try {
        const { metadata } = req.body;
        
        if (!metadata || !Array.isArray(metadata)) {
            return res.status(400).json({ error: 'metadata array is required' });
        }
        
        const bulkOps = metadata.map(item => ({
            updateOne: {
                filter: { 
                    meshName: item.meshName,
                    modelPath: item.modelPath || { $exists: false }
                },
                update: {
                    $set: {
                        ...item,
                        lastUpdated: Date.now()
                    }
                },
                upsert: true
            }
        }));
        
        const result = await CalloutMeshMetadata.bulkWrite(bulkOps);
        
        log.success(`Bulk updated ${result.modifiedCount} and created ${result.upsertedCount} callout metadata entries`);
        
        res.json({
            message: 'Bulk operation completed',
            modified: result.modifiedCount,
            created: result.upsertedCount
        });
    } catch (error) {
        log.error(`Error bulk updating callout metadata: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error bulk updating callout metadata' });
    }
});

// Delete callout metadata
app.delete('/api/callout-metadata/:meshName', async (req, res) => {
    try {
        const { meshName } = req.params;
        const { modelPath } = req.query;
        
        const query: any = { meshName };
        if (modelPath) query.modelPath = modelPath;
        
        const result = await CalloutMeshMetadata.deleteOne(query);
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Callout metadata not found' });
        }
        
        res.json({ message: 'Callout metadata deleted successfully' });
    } catch (error) {
        log.error(`Error deleting callout metadata: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting callout metadata' });
    }
}); 

// Crowd System Configuration Schema
const CrowdSystemConfigSchema = new mongoose.Schema({
    modelPath: { type: String, required: true, unique: true },
    groundMeshName: { type: String, required: true },
    obstaclePatterns: [{ type: String }],
    crowdSize: { type: Number, default: 10 },
    useSimpleAgents: { type: Boolean, default: false },
    agentModelPath: { type: String, default: "https://raw.githubusercontent.com/RazaGR/babylon/master/male3.babylon" },
    isEnabled: { type: Boolean, default: true },
    lastUpdated: { type: Number, default: Date.now }
});

// Create indexes for efficient queries
CrowdSystemConfigSchema.index({ modelPath: 1 });

const CrowdSystemConfig = mongoose.model('CrowdSystemConfig', CrowdSystemConfigSchema);

// Asset Callout Mappings Schema
const AssetCalloutMappingSchema = new mongoose.Schema({
    mappingId: { type: String, required: true, unique: true },
    mappingName: { type: String, required: true },
    description: { type: String },
    isEnabled: { type: Boolean, default: true },
    trigger: {
        type: { type: String, enum: ['ASSET_ALARM'], default: 'ASSET_ALARM' },
        triggerAssetId: { type: String, required: true },
        triggerLocationKey: { type: String, required: true }
    },
    target: {
        type: { type: String, enum: ['CREATE_CALLOUT'], default: 'CREATE_CALLOUT' },
        targetAssetKey: { type: String, required: true },
        targetLocationKey: { type: String, required: true }, // Scene where callout appears (e.g., "1" for site view)
        targetCalloutLocationKey: { type: String, default: '' }, // Location key for finding callout metadata
        targetCalloutAssetKey: { type: String, default: '' }, // Asset key for finding callout metadata
        calloutLookupMethod: { type: String, enum: ['locationKey', 'assetKey'], default: 'locationKey' } // Indicates which method to use for metadata lookup
    },
    lastUpdated: { type: Number, default: Date.now }
});

// Create indexes for efficient queries
AssetCalloutMappingSchema.index({ 'trigger.triggerAssetId': 1, 'trigger.triggerLocationKey': 1 });
AssetCalloutMappingSchema.index({ 'target.targetLocationKey': 1 });
AssetCalloutMappingSchema.index({ isEnabled: 1 });

const AssetCalloutMapping = mongoose.model('AssetCalloutMapping', AssetCalloutMappingSchema);

// ASSET CALLOUT MAPPING API ENDPOINTS
// Create a new mapping rule
app.post('/api/assetCalloutMappings', async (req, res) => {
    try {
        const mappingData = req.body;
        
        // Generate unique ID if not provided
        if (!mappingData.mappingId) {
            mappingData.mappingId = `MAP_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        }
        
        mappingData.lastUpdated = Date.now();
        
        const mapping = await AssetCalloutMapping.create(mappingData);
        log.success(`Created asset callout mapping: ${mapping.mappingId}`);
        res.status(201).json(mapping);
    } catch (error) {
        log.error(`Error creating asset callout mapping: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error creating asset callout mapping' });
    }
});

// Get all mapping rules or filter by targetLocationKey
app.get('/api/assetCalloutMappings', async (req, res) => {
    try {
        const { targetLocationKey } = req.query;
        
        // Build query based on provided filters
        const query: any = {};
        
        if (targetLocationKey) {
            query['target.targetLocationKey'] = targetLocationKey;
        }
        
        const mappings = await AssetCalloutMapping.find(query);
        res.json(mappings);
    } catch (error) {
        log.error(`Error fetching asset callout mappings: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching asset callout mappings' });
    }
});

// Get a single mapping rule by ID
app.get('/api/assetCalloutMappings/:mappingId', async (req, res) => {
    try {
        const { mappingId } = req.params;
        const mapping = await AssetCalloutMapping.findOne({ mappingId });
        
        if (!mapping) {
            return res.status(404).json({ error: 'Mapping not found' });
        }
        
        res.json(mapping);
    } catch (error) {
        log.error(`Error fetching asset callout mapping: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching asset callout mapping' });
    }
});

// Update an existing mapping rule
app.put('/api/assetCalloutMappings/:mappingId', async (req, res) => {
    try {
        const { mappingId } = req.params;
        const updateData = req.body;
        
        updateData.lastUpdated = Date.now();
        
        const mapping = await AssetCalloutMapping.findOneAndUpdate(
            { mappingId },
            { $set: updateData },
            { new: true }
        );
        
        if (!mapping) {
            return res.status(404).json({ error: 'Mapping not found' });
        }
        
        log.success(`Updated asset callout mapping: ${mapping.mappingId}`);
        res.json(mapping);
    } catch (error) {
        log.error(`Error updating asset callout mapping: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating asset callout mapping' });
    }
});

// Delete a mapping rule
app.delete('/api/assetCalloutMappings/:mappingId', async (req, res) => {
    try {
        const { mappingId } = req.params;
        
        const result = await AssetCalloutMapping.deleteOne({ mappingId });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Mapping not found' });
        }
        
        log.success(`Deleted asset callout mapping: ${mappingId}`);
        res.json({ message: 'Mapping deleted successfully' });
    } catch (error) {
        log.error(`Error deleting asset callout mapping: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting asset callout mapping' });
    }
});

// CROWD SYSTEM CONFIGURATION API ENDPOINTS
// Get crowd system configuration for a specific model
app.get('/api/crowd-system-config/:modelPath', async (req, res) => {
    try {
        const { modelPath } = req.params;
        
        // URL decode the model path
        const decodedPath = decodeURIComponent(modelPath);
        
        const config = await CrowdSystemConfig.findOne({ modelPath: decodedPath });
        
        if (!config) {
            return res.status(404).json({ error: 'Crowd system configuration not found' });
        }
        
        res.json(config);
    } catch (error) {
        log.error(`Error fetching crowd system config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching crowd system configuration' });
    }
});

// Get all crowd system configurations
app.get('/api/crowd-system-config', async (req, res) => {
    try {
        const configs = await CrowdSystemConfig.find();
        res.json(configs);
    } catch (error) {
        log.error(`Error fetching crowd system configs: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching crowd system configurations' });
    }
});

// Create or update crowd system configuration
app.post('/api/crowd-system-config', async (req, res) => {
    try {
        const config = req.body;
        
        if (!config.modelPath || !config.groundMeshName) {
            return res.status(400).json({ error: 'Missing required fields: modelPath, groundMeshName' });
        }
        
        // Ensure obstaclePatterns is an array
        if (!Array.isArray(config.obstaclePatterns)) {
            config.obstaclePatterns = [];
        }
        
        // Always update the lastUpdated timestamp
        config.lastUpdated = Date.now();
        
        const updatedConfig = await CrowdSystemConfig.findOneAndUpdate(
            { modelPath: config.modelPath },
            config,
            { new: true, upsert: true }
        );
        
        log.success(`Updated crowd system config for model: ${config.modelPath}`);
        res.json(updatedConfig);
    } catch (error) {
        log.error(`Error updating crowd system config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating crowd system configuration' });
    }
});

// Delete crowd system configuration
app.delete('/api/crowd-system-config/:modelPath', async (req, res) => {
    try {
        const { modelPath } = req.params;
        
        // URL decode the model path
        const decodedPath = decodeURIComponent(modelPath);
        
        const result = await CrowdSystemConfig.deleteOne({ modelPath: decodedPath });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Crowd system configuration not found' });
        }
        
        log.success(`Deleted crowd system config for model: ${decodedPath}`);
        res.json({ message: 'Crowd system configuration deleted successfully' });
    } catch (error) {
        log.error(`Error deleting crowd system config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting crowd system configuration' });
    }
});

// CAMERA WALKTHROUGH ROUTES API ENDPOINTS
// Get all walkthrough routes for a specific model
app.get('/api/walkthrough-routes/:modelPath', async (req, res) => {
    try {
        const { modelPath } = req.params;
        const decodedPath = decodeURIComponent(modelPath);
        const { userId = 'default' } = req.query;
        
        log.api(`Fetching walkthrough routes for model: ${decodedPath}, user: ${userId}`);
        
        const routes = await WalkthroughRoute.find({ 
            modelPath: decodedPath,
            createdBy: userId 
        }).sort({ createdAt: -1 });
        
        res.json(routes);
    } catch (error) {
        log.error(`Error fetching walkthrough routes: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching walkthrough routes' });
    }
});

// Get a specific walkthrough route by ID
app.get('/api/walkthrough-routes/route/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const route = await WalkthroughRoute.findOne({ id });
        
        if (!route) {
            return res.status(404).json({ error: 'Walkthrough route not found' });
        }
        
        res.json(route);
    } catch (error) {
        log.error(`Error fetching walkthrough route: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching walkthrough route' });
    }
});

// Create a new walkthrough route
app.post('/api/walkthrough-routes', async (req, res) => {
    try {
        const routeData = req.body;
        const { userId = 'default' } = req.query;
        
        if (!routeData.id || !routeData.name || !routeData.modelPath || !routeData.points || routeData.points.length < 2) {
            return res.status(400).json({ 
                error: 'Missing required fields: id, name, modelPath, and points (minimum 2)' 
            });
        }
        
        // Add metadata
        routeData.createdBy = userId;
        routeData.createdAt = Date.now();
        
        const newRoute = await WalkthroughRoute.create(routeData);
        
        log.success(`Created walkthrough route: ${routeData.name} for model: ${routeData.modelPath}`);
        res.json(newRoute);
    } catch (error) {
        if ((error as any).code === 11000) {
            // Duplicate key error
            res.status(409).json({ error: 'A route with this ID already exists' });
        } else {
            log.error(`Error creating walkthrough route: ${(error as Error).message}`);
            res.status(500).json({ error: 'Error creating walkthrough route' });
        }
    }
});

// Update an existing walkthrough route
app.put('/api/walkthrough-routes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const routeData = req.body;
        
        const updatedRoute = await WalkthroughRoute.findOneAndUpdate(
            { id },
            routeData,
            { new: true }
        );
        
        if (!updatedRoute) {
            return res.status(404).json({ error: 'Walkthrough route not found' });
        }
        
        log.success(`Updated walkthrough route: ${updatedRoute.name}`);
        res.json(updatedRoute);
    } catch (error) {
        log.error(`Error updating walkthrough route: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating walkthrough route' });
    }
});

// Delete a walkthrough route
app.delete('/api/walkthrough-routes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await WalkthroughRoute.deleteOne({ id });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Walkthrough route not found' });
        }
        
        log.success(`Deleted walkthrough route: ${id}`);
        res.json({ message: 'Walkthrough route deleted successfully' });
    } catch (error) {
        log.error(`Error deleting walkthrough route: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting walkthrough route' });
    }
});

// CARPET HEATMAP CONFIGURATION API ENDPOINTS
// Schema for carpet heatmap configuration
const CarpetHeatmapConfigSchema = new mongoose.Schema({
    modelPath: { type: String, required: true },
    meshName: { type: String, required: true },
    enabled: { type: Boolean, default: false },
    dataType: { 
        type: String, 
        enum: ['temperature', 'humidity', 'occupancy', 'airQuality', 'custom'],
        default: 'temperature'
    },
    radius: { type: Number, default: 40 },
    maxOpacity: { type: Number, default: 0.8 },
    minOpacity: { type: Number, default: 0 },
    blur: { type: Number, default: 0.75 },
    gradient: { type: mongoose.Schema.Types.Mixed },
    valueRange: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 }
    },
    unit: { type: String, default: '' },
    data: [{
        sensorId: { type: String, required: true },
        x: { type: Number, required: true },
        y: { type: Number, required: true },
        value: { type: Number, required: true }
    }],
    lastUpdated: { type: Number, default: Date.now }
});

// Create compound index for unique model-mesh combination
CarpetHeatmapConfigSchema.index({ modelPath: 1, meshName: 1 }, { unique: true });

const CarpetHeatmapConfig = mongoose.model('CarpetHeatmapConfig', CarpetHeatmapConfigSchema);

// Get carpet heatmap configuration for a specific model and mesh
app.get('/api/carpet-heatmap/:modelPath/:meshName', async (req, res) => {
    try {
        const { modelPath, meshName } = req.params;
        const decodedModelPath = decodeURIComponent(modelPath);
        const decodedMeshName = decodeURIComponent(meshName);
        
        log.api(`Fetching carpet heatmap config for model: ${decodedModelPath}, mesh: ${decodedMeshName}`);
        
        const config = await CarpetHeatmapConfig.findOne({ 
            modelPath: decodedModelPath,
            meshName: decodedMeshName
        });
        
        if (!config) {
            return res.status(404).json({ error: 'Carpet heatmap configuration not found' });
        }
        
        res.json(config);
    } catch (error) {
        log.error(`Error fetching carpet heatmap config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error fetching carpet heatmap configuration' });
    }
});

// Create or update carpet heatmap configuration
app.post('/api/carpet-heatmap', async (req, res) => {
    try {
        const configData = req.body;
        
        if (!configData.modelPath || !configData.meshName) {
            return res.status(400).json({ error: 'modelPath and meshName are required' });
        }
        
        // Update lastUpdated timestamp
        configData.lastUpdated = Date.now();
        
        const updatedConfig = await CarpetHeatmapConfig.findOneAndUpdate(
            { 
                modelPath: configData.modelPath,
                meshName: configData.meshName
            },
            configData,
            { new: true, upsert: true }
        );
        
        log.success(`Updated carpet heatmap config for model: ${configData.modelPath}, mesh: ${configData.meshName}`);
        res.json(updatedConfig);
    } catch (error) {
        log.error(`Error updating carpet heatmap config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating carpet heatmap configuration' });
    }
});

// Update specific sensor data
app.patch('/api/carpet-heatmap/:modelPath/:meshName/sensor/:sensorId', async (req, res) => {
    try {
        const { modelPath, meshName, sensorId } = req.params;
        const { value, x, y } = req.body;
        const decodedModelPath = decodeURIComponent(modelPath);
        const decodedMeshName = decodeURIComponent(meshName);
        const decodedSensorId = decodeURIComponent(sensorId);
        
        // Find the configuration
        const config = await CarpetHeatmapConfig.findOne({ 
            modelPath: decodedModelPath,
            meshName: decodedMeshName
        });
        
        if (!config) {
            return res.status(404).json({ error: 'Carpet heatmap configuration not found' });
        }
        
        // Find and update the specific sensor
        const sensorIndex = config.data.findIndex(sensor => sensor.sensorId === decodedSensorId);
        
        if (sensorIndex === -1) {
            return res.status(404).json({ error: `Sensor ${decodedSensorId} not found` });
        }
        
        // Update sensor data
        if (value !== undefined) config.data[sensorIndex].value = value;
        if (x !== undefined) config.data[sensorIndex].x = x;
        if (y !== undefined) config.data[sensorIndex].y = y;
        
        config.lastUpdated = Date.now();
        await config.save();
        
        log.success(`Updated sensor ${decodedSensorId} for model: ${decodedModelPath}, mesh: ${decodedMeshName}`);
        res.json({
            message: 'Sensor data updated successfully',
            sensor: config.data[sensorIndex]
        });
    } catch (error) {
        log.error(`Error updating sensor data: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating sensor data' });
    }
});

// Update sensor data by sensorId only
app.patch('/api/carpet-heatmap/sensor/:sensorId', async (req, res) => {
    try {
        const { sensorId } = req.params;
        const { value, x, y } = req.body;
        const decodedSensorId = decodeURIComponent(sensorId);
        
        // Find any configuration that contains this sensorId
        const config = await CarpetHeatmapConfig.findOne({
            'data.sensorId': decodedSensorId
        });
        
        if (!config) {
            return res.status(404).json({ error: `Sensor ${decodedSensorId} not found in any configuration` });
        }
        
        // Find the sensor in the data array
        const sensorIndex = config.data.findIndex(d => d.sensorId === decodedSensorId);
        if (sensorIndex === -1) {
            return res.status(404).json({ error: `Sensor ${decodedSensorId} not found` });
        }
        
        // Update sensor data
        if (value !== undefined) config.data[sensorIndex].value = value;
        if (x !== undefined) config.data[sensorIndex].x = x;
        if (y !== undefined) config.data[sensorIndex].y = y;
        
        config.lastUpdated = Date.now();
        await config.save();
        
        log.success(`Updated sensor ${decodedSensorId} in model: ${config.modelPath}, mesh: ${config.meshName}`);
        res.json({
            message: 'Sensor data updated successfully',
            sensor: config.data[sensorIndex],
            modelPath: config.modelPath,
            meshName: config.meshName
        });
    } catch (error) {
        log.error(`Error updating sensor data by ID: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error updating sensor data' });
    }
});

// Delete carpet heatmap configuration
app.delete('/api/carpet-heatmap/:modelPath/:meshName', async (req, res) => {
    try {
        const { modelPath, meshName } = req.params;
        const decodedModelPath = decodeURIComponent(modelPath);
        const decodedMeshName = decodeURIComponent(meshName);
        
        const result = await CarpetHeatmapConfig.deleteOne({ 
            modelPath: decodedModelPath,
            meshName: decodedMeshName
        });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Carpet heatmap configuration not found' });
        }
        
        log.success(`Deleted carpet heatmap config for model: ${decodedModelPath}, mesh: ${decodedMeshName}`);
        res.json({ message: 'Carpet heatmap configuration deleted successfully' });
    } catch (error) {
        log.error(`Error deleting carpet heatmap config: ${(error as Error).message}`);
        res.status(500).json({ error: 'Error deleting carpet heatmap configuration' });
    }
});