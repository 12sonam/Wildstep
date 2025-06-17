import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Trekking() {
  const [treks, setTreks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTreks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/treks');
        // Ensure we're setting an array, even if empty
        setTreks(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching treks:', err);
        setError(err.message);
        setTreks([]); // Set empty array on error
        setLoading(false);
      }
    };

    fetchTreks();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Trekking Adventures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treks.map((trek) => (
          <Link
            key={trek._id}
            to={`/trekking/${trek._id}`}
            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={trek.images[0]}
                alt={trek.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-600">
                {trek.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{trek.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{trek.duration} days</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{trek.difficulty}</span>
                </div>
                <span className="text-lg font-bold text-primary-600">
                  ${trek.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 