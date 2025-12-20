import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

// Add auth token to requests
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
  getMe: () => API.get('/auth/me'),
};

// Products API
export const productsAPI = {
  getAll: (params) => API.get('/products', { params }),
  getById: (id) => API.get(`/products/${id}`),
  create: (data) => API.post('/products', data),
  update: (id, data) => API.put(`/products/${id}`, data),
  delete: (id) => API.delete(`/products/${id}`),
  addReview: (id, data) => API.post(`/products/${id}/reviews`, data),
  getCategories: () => API.get('/products/categories'),
};

// Cart API
export const cartAPI = {
  get: () => API.get('/cart'),
  add: (data) => API.post('/cart', data),
  update: (itemId, data) => API.put(`/cart/${itemId}`, data),
  remove: (itemId) => API.delete(`/cart/${itemId}`),
  clear: () => API.delete('/cart'),
};

// Orders API
export const ordersAPI = {
  create: (data) => API.post('/orders', data),
  getMyOrders: () => API.get('/orders/myorders'),
  getById: (id) => API.get(`/orders/${id}`),
  updateToPaid: (id, data) => API.put(`/orders/${id}/pay`, data),
  updateStatus: (id, data) => API.put(`/orders/${id}/status`, data),
  getAll: () => API.get('/orders'),
};

// Users API
export const usersAPI = {
  getProfile: () => API.get('/users/profile'),
  updateProfile: (data) => API.put('/users/profile', data),
  addToWishlist: (productId) => API.post(`/users/wishlist/${productId}`),
  removeFromWishlist: (productId) => API.delete(`/users/wishlist/${productId}`),
  getAll: () => API.get('/users'),
  delete: (id) => API.delete(`/users/${id}`),
  updateRole: (id, data) => API.put(`/users/${id}/role`, data),
};

export default API;
