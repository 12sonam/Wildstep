import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Expeditions
export const getExpeditions = () => api.get('/expeditions');
export const getExpedition = (id) => api.get(`/expeditions/${id}`);
export const createExpedition = (data) => api.post('/expeditions', data);
export const updateExpedition = (id, data) => api.put(`/expeditions/${id}`, data);
export const deleteExpedition = (id) => api.delete(`/expeditions/${id}`);

// Trekking
export const getTreks = () => api.get('/trekking');
export const getTrek = (id) => api.get(`/trekking/${id}`);
export const getTrekById = (id) => api.get(`/trekking/${id}`);
export const createTrek = (data) => api.post('/trekking', data);
export const updateTrek = (id, data) => api.put(`/trekking/${id}`, data);
export const deleteTrek = (id) => api.delete(`/trekking/${id}`);

// Authentication
export const login = (credentials) => api.post('/users/login', credentials);
export const register = (userData) => api.post('/users', userData);
export const getProfile = () => api.get('/users/profile');
export const updateProfile = (data) => api.put('/users/profile', data);

// Contact
export const submitContact = (data) => api.post('/contact', data);
export const getContacts = () => api.get('/contact');
export const updateContactStatus = (id, status) => api.put(`/contact/${id}`, { status });
export const deleteContact = (id) => api.delete(`/contact/${id}`);

export default api; 