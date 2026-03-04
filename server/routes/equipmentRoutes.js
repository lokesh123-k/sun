const express = require('express');
const router = express.Router();
const { 
  getAllEquipments, 
  createEquipment,
  getEquipmentById,
  updateEquipment,
  deleteEquipment
} = require('../controllers/equipmentController');

// Public route - Get all equipments
router.get('/', getAllEquipments);

// Protected admin routes
router.post('/', createEquipment);
router.get('/:id', getEquipmentById);
router.put('/:id', updateEquipment);
router.delete('/:id', deleteEquipment);

module.exports = router;
