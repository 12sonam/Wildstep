import express from 'express';
import asyncHandler from 'express-async-handler';
import Trekking from '../models/trekkingModel.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Fetch all treks
// @route   GET /api/trekking
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const treks = await Trekking.find({});
    res.json(treks);
  })
);

// @desc    Fetch single trek
// @route   GET /api/trekking/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const trek = await Trekking.findById(req.params.id);
    if (trek) {
      res.json(trek);
    } else {
      res.status(404);
      throw new Error('Trek not found');
    }
  })
);

// @desc    Create a trek
// @route   POST /api/trekking
// @access  Private/Admin
router.post(
  '/',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const trek = new Trekking(req.body);
    const createdTrek = await trek.save();
    res.status(201).json(createdTrek);
  })
);

// @desc    Update a trek
// @route   PUT /api/trekking/:id
// @access  Private/Admin
router.put(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const trek = await Trekking.findById(req.params.id);

    if (trek) {
      Object.assign(trek, req.body);
      const updatedTrek = await trek.save();
      res.json(updatedTrek);
    } else {
      res.status(404);
      throw new Error('Trek not found');
    }
  })
);

// @desc    Delete a trek
// @route   DELETE /api/trekking/:id
// @access  Private/Admin
router.delete(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const trek = await Trekking.findById(req.params.id);

    if (trek) {
      await trek.deleteOne();
      res.json({ message: 'Trek removed' });
    } else {
      res.status(404);
      throw new Error('Trek not found');
    }
  })
);

// @desc    Search treks by region
// @route   GET /api/trekking/search/:region
// @access  Public
router.get(
  '/search/:region',
  asyncHandler(async (req, res) => {
    const treks = await Trekking.find({
      region: { $regex: req.params.region, $options: 'i' },
    });
    res.json(treks);
  })
);

export default router; 