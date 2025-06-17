import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import * as analyticsController from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/summary', authenticateToken, analyticsController.getSummary);
router.get('/bookings/trends', authenticateToken, analyticsController.getBookingTrends);
router.get('/destinations/popular', authenticateToken, analyticsController.getPopularDestinations);
router.get('/revenue', authenticateToken, analyticsController.getRevenueStats);
router.get('/visitors', authenticateToken, analyticsController.getVisitorStats);

export default router; 