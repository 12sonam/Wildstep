import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ExpeditionCard from '../components/ExpeditionCard';

export default function Expeditions() {
  const [expeditions, setExpeditions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    difficulty: '',
    priceRange: '',
  });

  useEffect(() => {
    const fetchExpeditions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/expeditions');
        // Ensure we're setting an array, even if empty
        setExpeditions(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching expeditions:', err);
        setError(err.message);
        setExpeditions([]); // Set empty array on error
        setLoading(false);
      }
    };

    fetchExpeditions();
  }, []);

  // Only filter if expeditions is an array
  const filteredExpeditions = Array.isArray(expeditions) ? expeditions.filter((expedition) => {
    if (filters.difficulty && expedition.difficulty !== filters.difficulty) {
      return false;
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (expedition.price < min || expedition.price > max) {
        return false;
      }
    }
    return true;
  }) : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          High-Altitude Expeditions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of challenging expeditions led by experienced guides.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <select
          value={filters.difficulty}
          onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
          className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="">All Difficulties</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>

        <select
          value={filters.priceRange}
          onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
          className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="">All Prices</option>
          <option value="0-5000">$0 - $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000-20000">$10,000 - $20,000</option>
          <option value="20000-999999">$20,000+</option>
        </select>
      </div>

      {/* Expeditions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExpeditions.map((expedition) => (
          <ExpeditionCard key={expedition._id} expedition={expedition} />
        ))}
      </div>

      {/* No Results */}
      {filteredExpeditions.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No expeditions found</h3>
          <p className="mt-2 text-gray-500">
            Try adjusting your filters to find more options.
          </p>
        </div>
      )}
    </div>
  );
} 