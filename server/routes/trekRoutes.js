import express from 'express';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Trek routes will be implemented here
router.get('/', (req, res) => {
  res.json({ message: 'Trek routes working' });
});

export default router; 