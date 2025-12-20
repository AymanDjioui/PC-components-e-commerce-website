import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAdmin } = useAuth();
  const { cartItemsCount } = useCart();

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-500">PC</span>
            <span className="text-xl font-semibold">Components</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-400 transition">
              Products
            </Link>
            {isAdmin && (
              <Link to="/admin" className="hover:text-blue-400 transition">
                Admin
              </Link>
            )}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="relative hover:text-blue-400 transition">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="hover:text-blue-400 transition flex items-center space-x-1">
                  <UserIcon className="h-6 w-6" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="hover:text-blue-400 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
              {isAdmin && (
                <Link to="/admin" className="hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>
                  Admin
                </Link>
              )}
              <Link to="/cart" className="hover:text-blue-400 transition flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
              </Link>
              {user ? (
                <>
                  <Link to="/profile" className="hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-blue-400 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" className="hover:text-blue-400 transition" onClick={() => setMobileMenuOpen(false)}>
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
