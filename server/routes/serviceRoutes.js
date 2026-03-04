const express = require('express');
const router = express.Router();
const { 
  getAllServices, 
  createService,
  getServiceById,
  updateService,
  deleteService
} = require('../controllers/serviceController');

// Public route - Get all services
router.get('/', getAllServices);

// Protected admin routes
router.post('/', createService);
router.get('/:id', getServiceById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;
