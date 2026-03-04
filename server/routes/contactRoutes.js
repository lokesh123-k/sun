const express = require('express');
const router = express.Router();
const { 
  createContact, 
  getAllContacts, 
  getContactById,
  updateContactStatus,
  deleteContact 
} = require('../controllers/contactController');

// Public route - Submit contact form
router.post('/', createContact);

// Protected admin routes (would need authentication in production)
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.patch('/:id', updateContactStatus);
router.delete('/:id', deleteContact);

module.exports = router;
