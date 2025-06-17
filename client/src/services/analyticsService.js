import api from './api';

export const getAnalyticsSummary = () => api.get('/analytics/summary');
export const getBookingTrends = () => api.get('/analytics/bookings/trends');
export const getPopularDestinations = () => api.get('/analytics/destinations/popular');
export const getRevenueStats = () => api.get('/analytics/revenue');
export const getVisitorStats = () => api.get('/analytics/visitors'); 