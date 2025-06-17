import express from 'express';
import asyncHandler from 'express-async-handler';
import Expedition from '../models/expeditionModel.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Expedition routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Expedition routes working' });
});

// @desc    Fetch all expeditions
// @route   GET /api/expeditions
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const expeditions = await Expedition.find({});
    res.json(expeditions);
  })
);

// @desc    Fetch single expedition
// @route   GET /api/expeditions/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const expedition = await Expedition.findById(req.params.id);
    if (expedition) {
      res.json(expedition);
    } else {
      res.status(404);
      throw new Error('Expedition not found');
    }
  })
);

// @desc    Create an expedition
// @route   POST /api/expeditions
// @access  Private/Admin
router.post(
  '/',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const expedition = new Expedition(req.body);
    const createdExpedition = await expedition.save();
    res.status(201).json(createdExpedition);
  })
);

// @desc    Update an expedition
// @route   PUT /api/expeditions/:id
// @access  Private/Admin
router.put(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const expedition = await Expedition.findById(req.params.id);

    if (expedition) {
      Object.assign(expedition, req.body);
      const updatedExpedition = await expedition.save();
      res.json(updatedExpedition);
    } else {
      res.status(404);
      throw new Error('Expedition not found');
    }
  })
);

// @desc    Delete an expedition
// @route   DELETE /api/expeditions/:id
// @access  Private/Admin
router.delete(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const expedition = await Expedition.findById(req.params.id);

    if (expedition) {
      await expedition.deleteOne();
      res.json({ message: 'Expedition removed' });
    } else {
      res.status(404);
      throw new Error('Expedition not found');
    }
  })
);

export default router; 