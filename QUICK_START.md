# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm run install-all
```

### Step 2: Setup Environment
```bash
cd server
cp .env.example .env
# Edit .env file if needed (defaults work fine for local development)
```

### Step 3: Start MongoDB
```bash
# Make sure MongoDB is running on your system
# Ubuntu/Debian
sudo systemctl start mongodb

# macOS
brew services start mongodb-community
```

### Step 4: Seed Database
```bash
cd server
npm run seed
```

### Step 5: Run Application
```bash
# From root directory
npm run dev
```

### Step 6: Access Application
Open your browser to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🔑 Login Credentials

### Admin Account
- Email: `admin@pcshop.com`
- Password: `admin123`

### User Account
- Email: `john@example.com`
- Password: `password123`

## 📦 What's Included

✅ **20 Sample Products** across all categories:
- CPUs (AMD, Intel)
- GPUs (NVIDIA, AMD)
- RAM (Corsair, G.Skill)
- Motherboards (ASUS, MSI)
- Storage (Samsung, WD, Crucial)
- Power Supplies (Corsair, EVGA)
- Cases (NZXT, Lian Li)
- Cooling (Noctua, Corsair)
- Peripherals (Logitech, Razer, SteelSeries)

✅ **Full Features**:
- Product browsing with filters
- Shopping cart
- User authentication
- Order management
- Admin dashboard
- Reviews & ratings
- Wishlist
- Responsive design

## 🛠️ Troubleshooting

### MongoDB not running?
```bash
# Check status
sudo systemctl status mongodb

# Start MongoDB
sudo systemctl start mongodb
```

### Port 3000 or 5000 already in use?
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Kill process on port 5000
kill -9 $(lsof -ti:5000)
```

### Clear everything and start fresh?
```bash
# Remove all node_modules
rm -rf node_modules client/node_modules server/node_modules

# Reinstall
npm run install-all

# Re-seed database
cd server
npm run seed
```

## 📱 Test the Features

1. **Browse Products**: Go to /products
2. **Filter Products**: Use category/price filters
3. **View Details**: Click any product
4. **Add to Cart**: Click shopping cart icon
5. **Login**: Use demo accounts above
6. **Checkout**: Complete an order
7. **Admin Panel**: Login as admin → visit /admin

## 🎯 Next Steps

- Customize the seed data in `server/seed.js`
- Add your own product images
- Configure payment gateway (Stripe)
- Deploy to production
- Add more features!

Enjoy building with this e-commerce platform! 🎉
