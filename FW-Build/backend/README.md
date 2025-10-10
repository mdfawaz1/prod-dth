# 3D Viewer Backend

A backend service for the 3D Viewer application that handles model storage, configuration, and API endpoints.

## Docker Setup

### Prerequisites
- Docker
- Docker Compose

## Docker Commands

### Building and Pushing Images

#### 1. Build the Docker image
```bash
# Navigate to the backend directory
cd backend

# Build the image with your Docker Hub username
docker build -t fawaz2705/dth-backend:latest .
```

#### 2. Build for multiple architectures (ARM and AMD64)
```bash
# Set up Docker buildx (if not already set up)
docker buildx create --name mybuilder --use

# Build and push multi-architecture image
docker buildx build --platform linux/amd64,linux/arm64 -t fawaz2705/dth-backend:latest --push .
```

#### 3. Push the image to Docker Hub
```bash
# Push to Docker Hub (requires Docker Hub login)
docker push fawaz2705/dth-backend:latest
```

### Pulling and Running on Another Device

#### 1. Pull the image
```bash
# Pull the latest image from Docker Hub
docker pull fawaz2705/dth-backend:latest
```

#### 2. Run using docker-compose (recommended)
```bash
# Create a docker-compose.yml file on the target system
# Then run:
docker-compose up -d
```

#### 3. Run using docker run (without compose)
```bash
# Run the backend container only
docker run -d -p 3000:3000 --name 3d-viewer-backend fawaz2705/dth-backend:latest

# If you need MongoDB as well:
docker run -d --name mongodb -p 27018:27017 mongo:6
docker run -d -p 3000:3000 -e MONGO_URI=mongodb://mongodb:27017/3d-models --link mongodb:mongodb --name 3d-viewer-backend fawaz2705/dth-backend:latest
```

### Making Changes and Updating

#### 1. Make code changes

#### 2. Rebuild the image with a new tag
```bash
# Build with a version tag (good practice)
docker build -t fawaz2705/dth-backend:v1.1 .
docker build -t fawaz2705/dth-backend:latest .
```

#### 3. Push the updated image
```bash
# Push both tags
docker push fawaz2705/dth-backend:v1.1
docker push fawaz2705/dth-backend:latest
```

#### 4. Update on the target system
```bash
# Pull the latest image
docker pull fawaz2705/dth-backend:latest

# Stop and remove the old container
docker stop 3d-viewer-backend
docker rm 3d-viewer-backend

# Run the new container
docker run -d -p 3000:3000 -e MONGO_URI=mongodb://mongodb:27017/3d-models --name 3d-viewer-backend fawaz2705/dth-backend:latest

# Or with docker-compose:
docker-compose down
docker-compose up -d
```

## Connecting to MongoDB with MongoDB Compass

When running the MongoDB container with docker-compose or the docker run command above, the MongoDB port is mapped to port 27018 on your host machine to avoid conflicts with any local MongoDB installations. This allows you to connect to the containerized MongoDB using MongoDB Compass:

1. Open MongoDB Compass
2. Create a new connection with the following URI:
   ```
   mongodb://localhost:27018/3d-models
   ```
   This connects to the MongoDB running in the Docker container, not your local MongoDB installation.
3. If you've set up authentication for MongoDB in your docker-compose.yml, use:
   ```
   mongodb://username:password@localhost:27018/3d-models
   ```

### Accessing MongoDB in a Remote Docker Installation

If you're running Docker on a remote server, replace `localhost` with the IP address or hostname of that server.

## Environment Variables

- `PORT`: Port on which the server runs (default: 3000)
- `MONGO_URI`: MongoDB connection string (default: mongodb://mongodb:27017/3d-models)

## API Documentation

The API provides endpoints for:
- Model management
- Mesh configurations
- Widget management
- Model flow management
- Environment texture handling 

## Troubleshooting

### Architecture Mismatch Error

If you encounter this error when trying to run the container:
```
docker: no matching manifest for linux/amd64
```

This means the Docker image was built for a different CPU architecture than the one you're trying to run it on. For example, if you built the image on an Apple Silicon Mac (ARM64) and are trying to run it on a Linux server with AMD64 architecture.

To fix this:

1. Rebuild the image using buildx for multiple architectures:
   ```bash
   # Set up Docker buildx (if not already set up)
   docker buildx create --name mybuilder --use

   # Build and push multi-architecture image
   docker buildx build --platform linux/amd64,linux/arm64 -t fawaz2705/dth-backend:latest --push .
   ```

2. Pull the updated image on your target system:
   ```bash
   docker pull fawaz2705/dth-backend:latest
   ```

3. Run the container as usual. 