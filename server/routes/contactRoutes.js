import express from 'express';
import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { name, email, message, subject, phone } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
      subject,
      phone,
    });

    if (contact) {
      res.status(201).json({ message: 'Contact form submitted successfully' });
    } else {
      res.status(400);
      throw new Error('Invalid contact data');
    }
  })
);

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private/Admin
router.get(
  '/',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  })
);

// @desc    Get single contact submission
// @route   GET /api/contact/:id
// @access  Private/Admin
router.get(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    
    if (contact) {
      contact.status = 'read';
      await contact.save();
      res.json(contact);
    } else {
      res.status(404);
      throw new Error('Contact submission not found');
    }
  })
);

// @desc    Update contact status
// @route   PUT /api/contact/:id
// @access  Private/Admin
router.put(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (contact) {
      contact.status = req.body.status || contact.status;
      const updatedContact = await contact.save();
      res.json(updatedContact);
    } else {
      res.status(404);
      throw new Error('Contact submission not found');
    }
  })
);

// @desc    Delete contact submission
// @route   DELETE /api/contact/:id
// @access  Private/Admin
router.delete(
  '/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (contact) {
      await contact.deleteOne();
      res.json({ message: 'Contact submission removed' });
    } else {
      res.status(404);
      throw new Error('Contact submission not found');
    }
  })
);

// Contact routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Contact routes working' });
});

export default router; 