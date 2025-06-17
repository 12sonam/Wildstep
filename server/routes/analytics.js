const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const analyticsController = require('../controllers/analyticsController');

router.get('/summary', authenticateToken, analyticsController.getSummary);
router.get('/bookings/trends', authenticateToken, analyticsController.getBookingTrends);
router.get('/destinations/popular', authenticateToken, analyticsController.getPopularDestinations);
router.get('/revenue', authenticateToken, analyticsController.getRevenueStats);
router.get('/visitors', authenticateToken, analyticsController.getVisitorStats);

module.exports = router; 