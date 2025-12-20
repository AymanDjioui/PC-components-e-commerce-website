const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getCategories
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/auth');
const { productValidation, reviewValidation, validate } = require('../middleware/validation');

router.route('/')
  .get(getProducts)
  .post(protect, admin, productValidation, validate, createProduct);

router.get('/categories', getCategories);

router.route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.post('/:id/reviews', protect, reviewValidation, validate, createProductReview);

module.exports = router;
