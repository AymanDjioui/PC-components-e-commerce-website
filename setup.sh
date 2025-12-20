#!/bin/bash

# PC Components E-commerce - Complete Setup Script
# This script will guide you through the setup process

echo "============================================"
echo "PC Components E-commerce - Setup Script"
echo "============================================"
echo ""

# Check if MongoDB is installed
if command -v mongod &> /dev/null; then
    echo "✓ MongoDB is installed"
    
    # Check if MongoDB is running
    if pgrep -x mongod > /dev/null; then
        echo "✓ MongoDB is already running"
    else
        echo "⚠ MongoDB is not running. Starting..."
        sudo systemctl start mongod || sudo systemctl start mongodb
        sleep 2
        echo "✓ MongoDB started"
    fi
else
    echo "✗ MongoDB is NOT installed"
    echo ""
    echo "Please choose an installation method:"
    echo "1. Install MongoDB locally (Ubuntu/Debian)"
    echo "2. Use Docker (if Docker is installed)"
    echo "3. Use MongoDB Atlas (Cloud - Free)"
    echo "4. Skip MongoDB setup (I'll set it up manually)"
    echo ""
    read -p "Enter your choice (1-4): " choice
    
    case $choice in
        1)
            echo "Installing MongoDB..."
            echo "Follow the instructions in INSTALL_MONGODB.md"
            exit 1
            ;;
        2)
            if command -v docker &> /dev/null; then
                echo "Starting MongoDB with Docker..."
                docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db mongo:latest
                sleep 3
                echo "✓ MongoDB started in Docker"
            else
                echo "✗ Docker is not installed"
                echo "Please install Docker first or choose another option"
                exit 1
            fi
            ;;
        3)
            echo "Please follow these steps:"
            echo "1. Go to https://www.mongodb.com/cloud/atlas"
            echo "2. Create a free account and cluster"
            echo "3. Get your connection string"
            echo "4. Update server/.env with your connection string"
            exit 1
            ;;
        4)
            echo "⚠ Skipping MongoDB setup"
            echo "You'll need to install and start MongoDB manually"
            ;;
    esac
fi

echo ""
echo "============================================"
echo "Installing Dependencies..."
echo "============================================"

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install server dependencies
echo "Installing server dependencies..."
cd server
npm install

# Install client dependencies
echo "Installing client dependencies..."
cd ../client
npm install

cd ..

echo ""
echo "✓ All dependencies installed!"
echo ""

# Setup environment file
if [ ! -f server/.env ]; then
    echo "Creating .env file..."
    cp server/.env.example server/.env
    echo "✓ .env file created"
else
    echo "✓ .env file already exists"
fi

echo ""
echo "============================================"
echo "Seeding Database..."
echo "============================================"

cd server
npm run seed
cd ..

echo ""
echo "============================================"
echo "Setup Complete!"
echo "============================================"
echo ""
echo "To start the application, run:"
echo "  npm run dev"
echo ""
echo "Then open your browser to:"
echo "  Frontend: http://localhost:3000"
echo "  Backend:  http://localhost:5000"
echo ""
echo "Demo accounts:"
echo "  Admin: admin@pcshop.com / admin123"
echo "  User:  john@example.com / password123"
echo ""
