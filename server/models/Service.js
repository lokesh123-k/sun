const mongoose = require('mongoose');

/**
 * Service Schema
 * Stores services offered by the company
 */
const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true,
    maxlength: 1000
  },
  icon: {
    type: String,
    trim: true
  },
  detailedDescription: {
    type: String,
    trim: true
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

// Index for ordering
serviceSchema.index({ order: 1 });
serviceSchema.index({ isActive: 1 });

module.exports = mongoose.model('Service', serviceSchema);
