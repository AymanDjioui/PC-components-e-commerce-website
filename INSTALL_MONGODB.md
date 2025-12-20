# MongoDB Installation Guide

## For Ubuntu/Debian

### Install MongoDB Community Edition

```bash
# Import the public key
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor

# Create list file
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Reload packages
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod

# Enable MongoDB to start on boot
sudo systemctl enable mongod

# Check status
sudo systemctl status mongod
```

## Alternative: Use Docker (Easier)

If you have Docker installed:

```bash
# Run MongoDB in Docker
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  mongo:latest

# Check if running
docker ps
```

## Alternative: MongoDB Atlas (Cloud - Free Tier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a free cluster
4. Get your connection string
5. Update `server/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pc-components-ecommerce
   ```

## Verify Installation

```bash
# Check MongoDB is running
mongosh --version

# Or
mongo --version
```

## After Installation

Once MongoDB is installed and running, continue with:

```bash
# From project root
cd /home/ayman/Desktop/ENSA/IRIC-2/Android/js-project

# Seed the database
cd server
npm run seed

# Run the application
cd ..
npm run dev
```
