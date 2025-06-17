import { useState, useEffect } from 'react';
import {
  getAnalyticsSummary,
  getBookingTrends,
  getPopularDestinations,
  getRevenueStats,
  getVisitorStats,
} from '../../services/analyticsService';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState(null);
  const [bookingTrends, setBookingTrends] = useState(null);
  const [popularDestinations, setPopularDestinations] = useState(null);
  const [revenueStats, setRevenueStats] = useState(null);
  const [visitorStats, setVisitorStats] = useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const [
        summaryData,
        bookingData,
        destinationsData,
        revenueData,
        visitorsData,
      ] = await Promise.all([
        getAnalyticsSummary(),
        getBookingTrends(),
        getPopularDestinations(),
        getRevenueStats(),
        getVisitorStats(),
      ]);

      setSummary(summaryData.data);
      setBookingTrends(bookingData.data);
      setPopularDestinations(destinationsData.data);
      setRevenueStats(revenueData.data);
      setVisitorStats(visitorsData.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center">
        Error: {error}
      </div>
    );
  }

  const bookingTrendsData = {
    labels: bookingTrends?.labels || [],
    datasets: [
      {
        label: 'Expeditions',
        data: bookingTrends?.expeditions || [],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Treks',
        data: bookingTrends?.treks || [],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
    ],
  };

  const popularDestinationsData = {
    labels: popularDestinations?.labels || [],
    datasets: [
      {
        data: popularDestinations?.data || [],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
        ],
      },
    ],
  };

  const revenueData = {
    labels: revenueStats?.labels || [],
    datasets: [
      {
        label: 'Revenue',
        data: revenueStats?.data || [],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Bookings</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {summary?.totalBookings}
          </p>
          <p className="text-green-600 text-sm mt-2">
            +{summary?.bookingGrowth}% from last month
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            ${summary?.totalRevenue.toLocaleString()}
          </p>
          <p className="text-green-600 text-sm mt-2">
            +{summary?.revenueGrowth}% from last month
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Active Expeditions</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {summary?.activeExpeditions}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {summary?.upcomingExpeditions} upcoming
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Website Visitors</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {summary?.totalVisitors}
          </p>
          <p className="text-green-600 text-sm mt-2">
            +{summary?.visitorGrowth}% from last week
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Booking Trends */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Booking Trends</h3>
          <div className="h-80">
            <Line
              data={bookingTrendsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Destinations</h3>
          <div className="h-80">
            <Doughnut
              data={popularDestinationsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue</h3>
          <div className="h-80">
            <Bar
              data={revenueData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Visitor Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Website Traffic</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Page Views</span>
              <span className="font-medium">{visitorStats?.pageViews}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Time on Site</span>
              <span className="font-medium">{visitorStats?.avgTimeOnSite}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Bounce Rate</span>
              <span className="font-medium">{visitorStats?.bounceRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New Visitors</span>
              <span className="font-medium">{visitorStats?.newVisitors}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Top Source</span>
              <span className="font-medium">{visitorStats?.topSource}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 