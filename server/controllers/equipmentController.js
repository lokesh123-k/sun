const Equipment = require('../models/Equipment');

/**
 * GET /api/equipments
 * Get all active equipments
 */
exports.getAllEquipments = async (req, res) => {
  try {
    const { category, status } = req.query;
    const filter = { isActive: true };
    
    if (category) {
      filter.category = category;
    }
    if (status) {
      filter.status = status;
    }

    const equipments = await Equipment.find(filter).sort({ order: 1 });

    res.status(200).json({
      success: true,
      count: equipments.length,
      data: equipments
    });
  } catch (error) {
    console.error('Get equipments error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch equipments'
    });
  }
};

/**
 * POST /api/equipments
 * Create a new equipment
 */
exports.createEquipment = async (req, res) => {
  try {
    const equipment = new Equipment(req.body);
    await equipment.save();

    res.status(201).json({
      success: true,
      data: equipment
    });
  } catch (error) {
    console.error('Create equipment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create equipment'
    });
  }
};

/**
 * GET /api/equipments/:id
 * Get equipment by ID
 */
exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: 'Equipment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: equipment
    });
  } catch (error) {
    console.error('Get equipment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch equipment'
    });
  }
};

/**
 * PUT /api/equipments/:id
 * Update equipment
 */
exports.updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: 'Equipment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: equipment
    });
  } catch (error) {
    console.error('Update equipment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update equipment'
    });
  }
};

/**
 * DELETE /api/equipments/:id
 * Delete equipment
 */
exports.deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndDelete(req.params.id);

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: 'Equipment not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Equipment deleted successfully'
    });
  } catch (error) {
    console.error('Delete equipment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete equipment'
    });
  }
};
