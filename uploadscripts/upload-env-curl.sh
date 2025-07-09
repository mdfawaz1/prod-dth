#!/bin/bash

# Environment file upload script using curl
# Usage: ./upload-env-curl.sh

BACKEND_URL="http://localhost:3000"
ENV_FILE="./ex.env"

echo "Environment file upload script (using curl)"
echo "==========================================="

# Check if dfa.env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ .env file not found in current directory"
    echo "Please place your dfa.env file in the same directory as this script"
    echo "Current directory: $(pwd)"
    exit 1
fi

echo "📁 Found .env file"
echo "🚀 Uploading to $BACKEND_URL/api/static-assets"

# Upload the file using curl
response=$(curl -s -w "%{http_code}" -X POST \
    -F "file=@$ENV_FILE" \
    "$BACKEND_URL/api/static-assets")

# Extract HTTP status code (last 3 characters)
http_code="${response: -3}"
response_body="${response%???}"

echo "📡 HTTP Status: $http_code"

if [ "$http_code" -eq 201 ]; then
    echo "✅ Upload successful!"
    echo "📄 Response: $response_body"
    
    echo ""
    echo "🔍 Verifying upload..."
    
    # List static assets to verify
    curl -s "$BACKEND_URL/api/static-assets" | python3 -m json.tool 2>/dev/null || echo "Could not format JSON response"
    
else
    echo "❌ Upload failed!"
    echo "📄 Response: $response_body"
    
    if [ "$http_code" -eq 000 ]; then
        echo "💡 Make sure your backend server is running on $BACKEND_URL"
    fi
fi

echo ""
echo "Done!" 