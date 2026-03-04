const express = require('express');
const router = express.Router();
const { 
  getAllClients, 
  createClient,
  getClientById,
  updateClient,
  deleteClient
} = require('../controllers/clientController');

// Public route - Get all clients
router.get('/', getAllClients);

// Protected admin routes
router.post('/', createClient);
router.get('/:id', getClientById);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;
