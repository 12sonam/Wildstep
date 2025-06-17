import Expedition from '../models/expedition.js';
import Trek from '../models/trek.js';
import Booking from '../models/booking.js';
import User from '../models/user.js';

// Helper function to get date range
const getDateRange = (days) => {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - days);
  return { start, end };
};

export const getSummary = async (req, res) => {
  try {
    const { start, end } = getDateRange(30);
    const lastMonth = new Date(start);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    // Get current period stats
    const currentBookings = await Booking.countDocuments({
      createdAt: { $gte: start, $lte: end }
    });

    // Get previous period stats for comparison
    const previousBookings = await Booking.countDocuments({
      createdAt: { $gte: lastMonth, $lt: start }
    });

    // Calculate growth
    const bookingGrowth = previousBookings === 0 
      ? 100 
      : ((currentBookings - previousBookings) / previousBookings * 100).toFixed(1);

    // Get revenue data
    const currentRevenue = await Booking.aggregate([
      { $match: { createdAt: { $gte: start, $lte: end } } },
      { $group: { _id: null, total: { $sum: "$price" } } }
    ]);

    const previousRevenue = await Booking.aggregate([
      { $match: { createdAt: { $gte: lastMonth, $lt: start } } },
      { $group: { _id: null, total: { $sum: "$price" } } }
    ]);

    const revenueGrowth = !previousRevenue[0]?.total
      ? 100
      : (((currentRevenue[0]?.total || 0) - previousRevenue[0].total) / previousRevenue[0].total * 100).toFixed(1);

    // Get expedition stats
    const activeExpeditions = await Expedition.countDocuments({ 
      startDate: { $lte: end },
      endDate: { $gte: start }
    });

    const upcomingExpeditions = await Expedition.countDocuments({
      startDate: { $gt: end }
    });

    // Mock visitor data (replace with actual analytics integration)
    const totalVisitors = 15000;
    const visitorGrowth = 12.5;

    res.json({
      totalBookings: currentBookings,
      bookingGrowth,
      totalRevenue: currentRevenue[0]?.total || 0,
      revenueGrowth,
      activeExpeditions,
      upcomingExpeditions,
      totalVisitors,
      visitorGrowth
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookingTrends = async (req, res) => {
  try {
    const { start, end } = getDateRange(90); // Last 3 months

    const bookings = await Booking.aggregate([
      { $match: { createdAt: { $gte: start, $lte: end } } },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
            type: "$type"
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } }
    ]);

    // Process data for chart
    const dates = [];
    const expeditionData = [];
    const trekData = [];

    let currentDate = new Date(start);
    while (currentDate <= end) {
      dates.push(currentDate.toISOString().split('T')[0]);
      
      const dayBookings = bookings.filter(b => 
        b._id.year === currentDate.getFullYear() &&
        b._id.month === currentDate.getMonth() + 1 &&
        b._id.day === currentDate.getDate()
      );

      expeditionData.push(dayBookings.find(b => b._id.type === 'expedition')?.count || 0);
      trekData.push(dayBookings.find(b => b._id.type === 'trek')?.count || 0);

      currentDate.setDate(currentDate.getDate() + 1);
    }

    res.json({
      labels: dates,
      expeditions: expeditionData,
      treks: trekData
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPopularDestinations = async (req, res) => {
  try {
    const expeditions = await Expedition.aggregate([
      { $group: { _id: "$destination", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.json({
      labels: expeditions.map(e => e._id),
      data: expeditions.map(e => e.count)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRevenueStats = async (req, res) => {
  try {
    const { start, end } = getDateRange(180); // Last 6 months

    const revenue = await Booking.aggregate([
      { $match: { createdAt: { $gte: start, $lte: end } } },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          total: { $sum: "$price" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);

    const labels = [];
    const data = [];

    let currentDate = new Date(start);
    while (currentDate <= end) {
      const monthYear = `${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getFullYear()}`;
      labels.push(monthYear);

      const monthRevenue = revenue.find(r => 
        r._id.year === currentDate.getFullYear() &&
        r._id.month === currentDate.getMonth() + 1
      );
      data.push(monthRevenue?.total || 0);

      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    res.json({ labels, data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVisitorStats = async (req, res) => {
  // Mock data - replace with actual analytics integration
  res.json({
    pageViews: 25000,
    avgTimeOnSite: "3m 45s",
    bounceRate: 45,
    newVisitors: 65,
    topSource: "Google"
  });
}; 