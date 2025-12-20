# PC Components E-Commerce Platform

A full-stack e-commerce web application for PC components built with React, Express.js, MongoDB, and Tailwind CSS.

## Features

### Frontend
- ✅ Modern, responsive design with Tailwind CSS
- ✅ Product browsing with advanced filtering (category, price, search)
- ✅ Product detail pages with reviews and ratings
- ✅ Shopping cart with quantity management
- ✅ User authentication (login/register)
- ✅ User profile with order history
- ✅ Wishlist functionality
- ✅ Checkout process with address management
- ✅ Admin dashboard for managing products, orders, and users
- ✅ Fully responsive mobile design

### Backend
- ✅ RESTful API with Express.js
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ MongoDB database with Mongoose ODM
- ✅ Input validation with express-validator
- ✅ CORS configuration
- ✅ Error handling middleware
- ✅ Admin authorization middleware

### Database Collections
- **Users**: User accounts with roles (user/admin)
- **Products**: PC components with specifications, images, ratings
- **Orders**: Order history with status tracking
- **Cart**: User shopping carts
- **Reviews**: Product reviews embedded in products

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios
- Tailwind CSS
- Heroicons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- CORS

## Project Structure

```
pc-components-ecommerce/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── ProductCard.js
│   │   │   ├── Loading.js
│   │   │   └── PrivateRoute.js
│   │   ├── pages/          # Page components
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Products.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── Cart.js
│   │   │   ├── Checkout.js
│   │   │   ├── Profile.js
│   │   │   └── AdminDashboard.js
│   │   ├── context/        # React Context
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── utils/
│   │   │   └── api.js      # API client
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                 # Express backend
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── models/            # Mongoose models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── controllers/       # Route controllers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── routes/            # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/        # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── seed.js            # Database seeder
│   ├── server.js          # Express app
│   ├── package.json
│   └── .env.example
│
├── package.json           # Root package.json
└── README.md

```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd js-project
```

### 2. Install Dependencies

Install all dependencies (root, client, and server):
```bash
npm run install-all
```

Or install separately:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 3. Environment Variables

Create a `.env` file in the `server` directory:
```bash
cd server
cp .env.example .env
```

Edit the `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pc-components-ecommerce
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:
```bash
# On Linux
sudo systemctl start mongodb

# On macOS with Homebrew
brew services start mongodb-community

# Or run directly
mongod
```

### 5. Seed the Database

Populate the database with sample data (20 PC components + 2 users):
```bash
cd server
npm run seed
```

This will create:
- **Admin user**: email: `admin@pcshop.com`, password: `admin123`
- **Regular user**: email: `john@example.com`, password: `password123`
- 20 sample PC components across all categories

### 6. Start the Application

#### Development Mode (Recommended)

Run both frontend and backend concurrently from the root directory:
```bash
npm run dev
```

This will start:
- Backend API server on `http://localhost:5000`
- Frontend React app on `http://localhost:3000`

#### Run Separately

**Backend:**
```bash
cd server
npm run dev
```

**Frontend:**
```bash
cd client
npm start
```

### 7. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: See API Endpoints section below

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)
- `POST /api/products/:id/reviews` - Add review (Protected)
- `GET /api/products/categories` - Get all categories

### Cart
- `GET /api/cart` - Get user cart (Protected)
- `POST /api/cart` - Add item to cart (Protected)
- `PUT /api/cart/:itemId` - Update cart item (Protected)
- `DELETE /api/cart/:itemId` - Remove from cart (Protected)
- `DELETE /api/cart` - Clear cart (Protected)

### Orders
- `POST /api/orders` - Create order (Protected)
- `GET /api/orders/myorders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `PUT /api/orders/:id/pay` - Update order to paid (Protected)
- `GET /api/orders` - Get all orders (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### Users
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update user profile (Protected)
- `POST /api/users/wishlist/:productId` - Add to wishlist (Protected)
- `DELETE /api/users/wishlist/:productId` - Remove from wishlist (Protected)
- `GET /api/users` - Get all users (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)
- `PUT /api/users/:id/role` - Update user role (Admin only)

## Default Accounts

### Admin Account
- **Email**: admin@pcshop.com
- **Password**: admin123
- **Access**: Full admin dashboard access

### User Account
- **Email**: john@example.com
- **Password**: password123
- **Access**: Regular user access

## Features Guide

### User Features
1. **Browse Products**: Filter by category, price range, search by name
2. **Product Details**: View specifications, reviews, and ratings
3. **Shopping Cart**: Add items, adjust quantities, view total
4. **Checkout**: Enter shipping address, complete order
5. **User Profile**: Manage account details, view order history
6. **Wishlist**: Save favorite products
7. **Reviews**: Rate and review purchased products

### Admin Features
1. **Product Management**: Create, edit, delete products
2. **Order Management**: View all orders, update order status
3. **User Management**: View users, manage user accounts
4. **Dashboard**: Centralized admin control panel

## Available Scripts

### Root Directory
- `npm run dev` - Run both client and server concurrently
- `npm run client` - Run frontend only
- `npm run server` - Run backend only
- `npm run install-all` - Install all dependencies

### Client Directory
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Server Directory
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

## Development Notes

### Frontend Development
- React with functional components and hooks
- Context API for state management (Auth, Cart)
- Axios for API requests with interceptors
- Tailwind CSS for styling
- React Router for navigation

### Backend Development
- Express.js with MVC architecture
- JWT authentication with Bearer tokens
- MongoDB with Mongoose ODM
- Input validation and sanitization
- Error handling middleware
- CORS enabled for cross-origin requests

### Security Features
- Password hashing with bcrypt
- JWT token authentication
- Protected routes with middleware
- Input validation
- Admin role authorization

## Production Deployment

### Frontend Deployment
1. Build the React app:
```bash
cd client
npm run build
```

2. Serve the `build` folder using a static server or deploy to:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - GitHub Pages

### Backend Deployment
1. Set environment variables on your hosting platform
2. Deploy to:
   - Heroku
   - Railway
   - DigitalOcean
   - AWS EC2

### Database
- Use MongoDB Atlas for cloud-hosted database
- Update `MONGODB_URI` in production environment

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `sudo systemctl status mongodb`
- Check connection string in `.env` file
- Verify MongoDB port (default: 27017)

### Port Already in Use
- Frontend: Change port in `client/package.json` (add `"start": "PORT=3001 react-scripts start"`)
- Backend: Change `PORT` in `server/.env`

### CORS Issues
- Verify `proxy` in `client/package.json` points to backend URL
- Check CORS configuration in `server/server.js`

### JWT Token Issues
- Clear browser localStorage
- Ensure `JWT_SECRET` is set in `.env`
- Check token expiration (default: 30 days)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For issues or questions, please open an issue on GitHub or contact the development team.

## Acknowledgments

- React team for the amazing framework
- Express.js for the robust backend framework
- MongoDB for the flexible database
- Tailwind CSS for the utility-first CSS framework
- Heroicons for the beautiful icons
