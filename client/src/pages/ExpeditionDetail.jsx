import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function ExpeditionDetail() {
  const { id } = useParams();
  const [expedition, setExpedition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const fetchExpedition = async () => {
      try {
        const { data } = await axios.get(`/api/expeditions/${id}`);
        setExpedition(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchExpedition();
  }, [id]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', {
        ...bookingForm,
        subject: `Booking Inquiry: ${expedition.title}`,
      });
      alert('Thank you for your interest! We will contact you soon.');
      setBookingForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      alert('Error submitting form. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !expedition) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">Error: {error || 'Expedition not found'}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <img
          src={expedition.image}
          alt={expedition.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{expedition.title}</h1>
          <div className="flex flex-wrap gap-4 text-white">
            <span className="bg-primary-600 px-3 py-1 rounded-full text-sm">
              {expedition.difficulty}
            </span>
            <span className="bg-primary-600 px-3 py-1 rounded-full text-sm">
              {expedition.duration}
            </span>
            <span className="bg-primary-600 px-3 py-1 rounded-full text-sm">
              {expedition.altitude}
            </span>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex space-x-8">
              {['overview', 'itinerary', 'includes', 'gear'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="prose max-w-none">
            {activeTab === 'overview' && (
              <div>
                <p className="text-gray-600">{expedition.description}</p>
                <h3 className="text-xl font-semibold mt-6 mb-4">Highlights</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {expedition.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div className="space-y-6">
                {expedition.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
                    <p className="text-gray-600">{day.description}</p>
                    <div className="text-sm text-gray-500 mt-2">
                      <span className="mr-4">Altitude: {day.altitude}</span>
                      <span>Accommodation: {day.accommodation}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'includes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Included</h3>
                  <ul className="space-y-2">
                    {expedition.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {expedition.excludes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'gear' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Required Gear</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expedition.requiredGear.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ${expedition.price.toLocaleString()}
            </h3>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors"
              >
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 