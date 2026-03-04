const mongoose = require('mongoose');

/**
 * Equipment Schema
 * Stores equipment information owned by the company
 */
const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Equipment name is required'],
    trim: true,
    maxlength: 100
  },
  model: {
    type: String,
    trim: true,
    maxlength: 100
  },
  manufacturer: {
    type: String,
    trim: true,
    maxlength: 100
  },
  quantity: {
    type: Number,
    default: 1,
    min: 0
  },
  specifications: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['operational', 'maintenance', 'under-repair', ' decommissioned'],
    default: 'operational'
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for ordering and filtering
equipmentSchema.index({ order: 1 });
equipmentSchema.index({ category: 1 });
equipmentSchema.index({ status: 1 });
equipmentSchema.index({ isActive: 1 });

module.exports = mongoose.model('Equipment', equipmentSchema);
