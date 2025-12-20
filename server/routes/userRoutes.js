const express = require('express');
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  addToWishlist,
  removeFromWishlist,
  getUsers,
  deleteUser,
  updateUserRole
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/wishlist/:productId')
  .post(protect, addToWishlist)
  .delete(protect, removeFromWishlist);

router.get('/', protect, admin, getUsers);

router.route('/:id')
  .delete(protect, admin, deleteUser);

router.put('/:id/role', protect, admin, updateUserRole);

module.exports = router;
