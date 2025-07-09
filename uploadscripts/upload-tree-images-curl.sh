#!/bin/bash

# Tree images upload script using curl
# Usage: ./upload-tree-images-curl.sh

BACKEND_URL="http://localhost:3000"

echo "Tree Image Upload Script (using curl)"
echo "===================================="

# Array of tree image files to upload
TREE_IMAGES=("tree.png" "img.png")

upload_count=0
total_files=${#TREE_IMAGES[@]}

echo "📸 Found ${total_files} tree images to upload"
echo ""

# Upload each tree image
for image_file in "${TREE_IMAGES[@]}"; do
    echo "📁 Processing: $image_file"
    
    # Check if file exists
    if [ ! -f "$image_file" ]; then
        echo "❌ $image_file not found in current directory"
        echo "   Current directory: $(pwd)"
        continue
    fi
    
    # Get file size for display
    file_size=$(du -h "$image_file" | cut -f1)
    echo "📏 File size: $file_size"
    echo "🚀 Uploading to $BACKEND_URL/api/tree-images"
    
    # Upload the file using curl
    response=$(curl -s -w "%{http_code}" -X POST \
        -F "file=@$image_file" \
        "$BACKEND_URL/api/tree-images")
    
    # Extract HTTP status code (last 3 characters)
    http_code="${response: -3}"
    response_body="${response%???}"
    
    if [ "$http_code" = "201" ]; then
        echo "✅ $image_file uploaded successfully"
        ((upload_count++))
    else
        echo "❌ Upload failed for $image_file"
        echo "   HTTP Status: $http_code"
        if [ -n "$response_body" ]; then
            echo "   Response: $response_body"
        fi
    fi
    echo ""
done

echo "📊 Upload Summary:"
echo "=================="
echo "✅ Successful uploads: $upload_count"
echo "❌ Failed uploads: $((total_files - upload_count))"
echo "📁 Total files: $total_files"

if [ $upload_count -eq $total_files ]; then
    echo ""
    echo "🎉 All tree images uploaded successfully!"
    echo "Your frontend will now load tree images from the backend database."
else
    echo ""
    echo "⚠️  Some uploads failed. Please check the error messages above."
    echo "Make sure your backend server is running at $BACKEND_URL"
fi 