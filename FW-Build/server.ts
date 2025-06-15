import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import cors from 'cors';
import { GridFSBucket } from 'mongodb';

const app = express();
const port = process.env.PORT || 3000;

// Add this near the top, after imports
mongoose.set('strictQuery', false);

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/3d-models';
let gfs: Grid.Grid;
let gridfsBucket: GridFSBucket;

mongoose.connect(mongoURI).then(() => {
    console.log('MongoDB connected successfully');
    
    // Initialize GridFS bucket
    gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'uploads'
    });
    
    // Initialize GridFS stream
    // @ts-ignore
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('uploads');
    
    console.log('GridFS initialized');
}).catch(err => {
    console.error('MongoDB connection error:', err);
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
        console.log('Requested environment file:', filename);

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
            console.error('Environment file stream error:', error);
            if (!res.headersSent) {
                res.status(500).json({ error: 'Error streaming environment file' });
            }
        });

    } catch (error) {
        console.error('Environment file fetch error:', error);
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
        
        console.log(`Found ${envMaps.length} environment maps`);
        
        res.json({
            maps: envMaps,
            count: envMaps.length
        });
    } catch (error) {
        console.error('Error listing environment maps:', error);
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

        console.log('Uploading static asset:', {
            filename: file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
        });

        // Wait for GridFS to finish saving
        await new Promise(resolve => setTimeout(resolve, 1000));

        res.status(201).json({
            message: 'Static asset uploaded successfully',
            filename: file.filename,
            originalname: file.originalname,
            size: file.size
        });
    } catch (error) {
        console.error('Static asset upload error:', error);
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
        console.log('Requested tree image file:', filename);

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
            console.error('Tree image file stream error:', error);
            if (!res.headersSent) {
                res.status(500).json({ error: 'Error streaming tree image file' });
            }
        });

    } catch (error) {
        console.error('Tree image file fetch error:', error);
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

        console.log('Uploading tree image:', {
            filename: file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
        });

        // Wait for GridFS to finish saving
        await new Promise(resolve => setTimeout(resolve, 1000));

        res.status(201).json({
            message: 'Tree image uploaded successfully',
            filename: file.filename,
            originalname: file.originalname,
            size: file.size
        });
    } catch (error) {
        console.error('Tree image upload error:', error);
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
        console.error('Error listing tree images:', error);
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
        console.error('Error listing static assets:', error);
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

        console.log('Uploading file:', {
            filename: file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
            path: file.path
        });

        // Wait a moment for GridFS to finish saving
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Verify the file was saved in GridFS
        if (!gfs) {
            throw new Error('GridFS not initialized');
        }

        const savedFile = await gfs.files.findOne({ filename: file.filename });
        console.log('Saved file in GridFS:', savedFile);

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

        console.log('Created model metadata:', model);
        res.status(201).json(model);
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Error uploading model' });
    }
});

// Get all models
app.get('/api/models', async (req, res) => {
    try {
        const models = await ModelMetadata.find();
        res.json(models);
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ error: 'Error fetching models' });
    }
});

// Get model file
app.get('/api/models/file/:filename', async (req, res) => {
    try {
        if (!gridfsBucket) {
            return res.status(500).json({ error: 'Database connection not ready' });
        }

        console.log('Requested filename:', req.params.filename);

        // List all files in GridFS for debugging
        const allFiles = await gfs.files.find().toArray();
        console.log('All files in GridFS:', allFiles.map(f => f.filename));

        const file = await gfs.files.findOne({ filename: req.params.filename });
        console.log('Found file:', file);

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
            console.error('Stream error:', error);
            res.status(500).json({ error: 'Error streaming file' });
        });
    } catch (error) {
        console.error('File fetch error:', error);
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
        console.error('Delete error:', error);
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
        console.error('Debug endpoint error:', error);
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

// Get all mesh configurations
app.get('/api/mesh-configs', async (req, res) => {
    try {
        const configs = await MeshConfig.find();
        res.json(configs);
    } catch (error) {
        console.error('Error fetching mesh configs:', error);
        res.status(500).json({ error: 'Error fetching mesh configurations' });
    }
});

// Update or create mesh configuration
app.post('/api/mesh-configs', async (req, res) => {
    try {
        const config = req.body;
        
        // Log the incoming configuration
        console.log('Received mesh config update:', config);
        
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
        console.log('Updated mesh config:', updatedConfig);
        
        res.json(updatedConfig);
    } catch (error) {
        console.error('Error updating mesh config:', error);
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
        console.error('Error resetting mesh configs:', error);
        res.status(500).json({ error: 'Error resetting mesh configurations' });
    }
});

// MODEL FLOW API ENDPOINTS
// Get all flows
app.get('/api/flows', async (req, res) => {
    try {
        const flows = await ModelFlow.find();
        res.json(flows);
    } catch (error) {
        console.error('Error fetching flows:', error);
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
        console.error('Error fetching active flow:', error);
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
        console.error('Error saving flow:', error);
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
        console.error('Error activating flow:', error);
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
        console.error('Error deleting flow:', error);
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
    userId: { type: String, default: 'default' }, // For future user management
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now }
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
        console.error('Error fetching widgets:', error);
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
        console.error('Error fetching widget:', error);
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
        console.error('Error saving widget:', error);
        res.status(500).json({ error: 'Error saving widget' });
    }
});

// Delete widget
app.delete('/api/widgets/:id', async (req, res) => {
    try {
        const result = await Widget.deleteOne({ widgetId: req.params.id });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Widget not found' });
        }
        
        res.json({ message: 'Widget deleted successfully' });
    } catch (error) {
        console.error('Error deleting widget:', error);
        res.status(500).json({ error: 'Error deleting widget' });
    }
});

// Delete all widgets (use with caution)
app.delete('/api/widgets', async (req, res) => {
    try {
        const result = await Widget.deleteMany({});
        
        res.json({ 
            message: 'All widgets deleted successfully', 
            count: result.deletedCount 
        });
    } catch (error) {
        console.error('Error deleting all widgets:', error);
        res.status(500).json({ error: 'Error deleting all widgets' });
    }
});

// WIDGET LAYOUT API ENDPOINTS
// Get all widget layouts for a user
app.get('/api/widget-layouts', async (req, res) => {
    try {
        const { userId = 'default' } = req.query;
        
        const layouts = await WidgetLayout.find({ userId }).sort({ updatedAt: -1 });
        
        console.log(`Found ${layouts.length} widget layouts for user: ${userId}`);
        res.json(layouts);
    } catch (error) {
        console.error('Error fetching widget layouts:', error);
        res.status(500).json({ error: 'Error fetching widget layouts' });
    }
});

// Save widget layouts (bulk save/update)
app.post('/api/widget-layouts', async (req, res) => {
    try {
        const { widgets, userId = 'default' } = req.body;
        
        if (!widgets || !Array.isArray(widgets)) {
            return res.status(400).json({ error: 'Invalid widgets array' });
        }
        
        // Delete existing layouts for this user
        await WidgetLayout.deleteMany({ userId });
        
        // Create new layouts
        const layoutsToSave = widgets.map(widget => ({
            id: widget.id,
            componentName: widget.componentName,
            position: widget.position,
            size: widget.size,
            sceneIds: widget.sceneIds || [],
            placement: widget.placement,
            assetwidget: widget.assetwidget || false, // Include assetwidget parameter with default false
            userId,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }));
        
        const savedLayouts = await WidgetLayout.insertMany(layoutsToSave);
        
        console.log(`Saved ${savedLayouts.length} widget layouts for user: ${userId}`);
        res.json(savedLayouts);
    } catch (error) {
        console.error('Error saving widget layouts:', error);
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
        console.error('Error deleting widget layouts:', error);
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
        
        console.log(`Found ${alarms.length} active alarms for LocationKey: ${locationKey}`);
        
        // Add a timestamp to the response
        res.json({
            alarms: alarms,
            timestamp: Date.now()
        });
    } catch (error) {
        console.error('Error fetching alarms by LocationKey:', error);
        res.status(500).json({ error: 'Error fetching alarms' });
    }
});

// Add an endpoint to get all alarms across all models
app.get('/api/mesh-configs/alarms', async (req, res) => {
    try {
        // Find only configurations that have isAlarm explicitly set to true
        const alarms = await MeshConfig.find({ isAlarm: true });
        
        console.log(`Found ${alarms.length} total active alarms across all models`);
        
        // Add a timestamp to the response
        res.json({
            alarms: alarms,
            timestamp: Date.now()
        });
    } catch (error) {
        console.error('Error fetching all alarms:', error);
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
        
        console.log(`Found ${externalAlarms.length} external alarms for current model: ${currentModel}`);
        
        // Add a timestamp to the response to ensure clients have latest data
        res.json({
            alarms: externalAlarms,
            timestamp: Date.now()
        });
    } catch (error) {
        console.error('Error fetching external alarms:', error);
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
        console.error('Error fetching company configuration:', error);
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
        console.error('Error updating company configuration:', error);
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
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Error fetching user profile' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
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
            
            console.log(`Updated existing view for model: ${modelKey}, user: ${userId}`);
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
            
            console.log(`Created new view for model: ${modelKey}, user: ${userId}`);
        }
        
        res.json(savedView);
    } catch (error) {
        console.error('Error saving view:', error);
        res.status(500).json({ error: 'Error saving view' });
    }
});

// Get saved view for a specific model
app.get('/api/saved-views/:modelKey', async (req, res) => {
    try {
        const { modelKey } = req.params;
        const { userId = 'default' } = req.query;
        
        console.log(`Fetching saved view for model: ${modelKey}, user: ${userId}`);
        
        const savedView = await SavedView.findOne({ modelKey, userId });
        
        if (!savedView) {
            return res.status(404).json({ error: 'No saved view found for this model' });
        }
        
        res.json(savedView);
    } catch (error) {
        console.error('Error fetching saved view:', error);
        res.status(500).json({ error: 'Error fetching saved view' });
    }
});

// Get all saved views for a user
app.get('/api/saved-views', async (req, res) => {
    try {
        const { userId = 'default' } = req.query;
        
        console.log(`Fetching all saved views for user: ${userId}`);
        
        const savedViews = await SavedView.find({ userId }).sort({ timestamp: -1 });
        
        res.json(savedViews);
    } catch (error) {
        console.error('Error fetching saved views:', error);
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
                console.error(`Error importing view for ${modelKey}:`, error);
                errors.push(`Failed to import view for ${modelKey}: ${(error as Error).message}`);
            }
        }
        
        console.log(`Imported ${importedViews.length} views for user: ${userId}`);
        if (errors.length > 0) {
            console.log('Import errors:', errors);
        }
        
        res.json({
            imported: importedViews,
            errors: errors,
            totalProcessed: Object.keys(localStorageData).length
        });
    } catch (error) {
        console.error('Error importing saved views:', error);
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

// SKYBOX CONFIGURATION API ENDPOINTS
// Get all skybox configurations
app.get('/api/skybox-configs', async (req, res) => {
    try {
        const configs = await SkyboxConfig.find();
        res.json(configs);
    } catch (error) {
        console.error('Error fetching skybox configs:', error);
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
        console.error('Error fetching skybox config:', error);
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
                console.warn(`Environment file ${config.value} not found in database. Using anyway.`);
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
        console.error('Error updating skybox config:', error);
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
        console.error('Error deleting skybox config:', error);
        res.status(500).json({ error: 'Error deleting skybox configuration' });
    }
}); 