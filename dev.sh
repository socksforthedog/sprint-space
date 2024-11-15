#!/bin/bash

# Make the script executable with: chmod +x dev.sh

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Please start Docker first."
    exit 1
fi

# Start the development environment
docker-compose up --build 