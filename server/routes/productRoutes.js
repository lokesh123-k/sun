const express = require('express');
const router = express.Router();
const { 
  getAllProducts, 
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Public route - Get all products
router.get('/', getAllProducts);

// Protected admin routes
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
