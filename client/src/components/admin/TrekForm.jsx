import { useState, useEffect } from 'react';
import { createTrek, updateTrek } from '../../services/api';

export default function TrekForm({ trek, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    region: '',
    difficulty: 'Beginner',
    duration: '',
    bestSeason: '',
    maxAltitude: '',
    image: '',
    price: '',
    highlights: [''],
    includes: [''],
    excludes: [''],
    requiredGear: [''],
    itinerary: [
      {
        day: 1,
        title: '',
        description: '',
        distance: '',
        elevation: '',
        hours: '',
        accommodation: '',
      },
    ],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (trek) {
      setFormData(trek);
    }
  }, [trek]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (trek) {
        await updateTrek(trek._id, formData);
      } else {
        await createTrek(formData);
      }
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving trek');
    } finally {
      setLoading(false);
    }
  };

  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleArrayAdd = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const handleArrayRemove = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleItineraryChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      itinerary: prev.itinerary.map((day, i) =>
        i === index ? { ...day, [field]: value } : day
      ),
    }));
  };

  const handleAddItineraryDay = () => {
    setFormData((prev) => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        {
          day: prev.itinerary.length + 1,
          title: '',
          description: '',
          distance: '',
          elevation: '',
          hours: '',
          accommodation: '',
        },
      ],
    }));
  };

  const handleRemoveItineraryDay = (index) => {
    setFormData((prev) => ({
      ...prev,
      itinerary: prev.itinerary
        .filter((_, i) => i !== index)
        .map((day, i) => ({ ...day, day: i + 1 })),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {trek ? 'Edit Trek' : 'Add New Trek'}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Close</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Region</label>
              <input
                type="text"
                required
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Max Altitude</label>
              <input
                type="text"
                required
                value={formData.maxAltitude}
                onChange={(e) => setFormData({ ...formData, maxAltitude: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Difficulty</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <input
                type="text"
                required
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Best Season</label>
              <input
                type="text"
                required
                value={formData.bestSeason}
                onChange={(e) => setFormData({ ...formData, bestSeason: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              required
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Lists */}
        {['highlights', 'includes', 'excludes', 'requiredGear'].map((field) => (
          <div key={field} className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 capitalize">{field}</h3>
            {formData[field].map((item, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  required
                  value={item}
                  onChange={(e) => handleArrayChange(field, index, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                <button
                  type="button"
                  onClick={() => handleArrayRemove(field, index)}
                  className="text-red-600 hover:text-red-900"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleArrayAdd(field)}
              className="text-primary-600 hover:text-primary-900"
            >
              Add {field.slice(0, -1)}
            </button>
          </div>
        ))}

        {/* Itinerary */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Itinerary</h3>
          {formData.itinerary.map((day, index) => (
            <div key={index} className="border rounded-md p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-md font-medium">Day {day.day}</h4>
                <button
                  type="button"
                  onClick={() => handleRemoveItineraryDay(index)}
                  className="text-red-600 hover:text-red-900"
                >
                  Remove Day
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    required
                    value={day.title}
                    onChange={(e) => handleItineraryChange(index, 'title', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Distance</label>
                  <input
                    type="text"
                    required
                    value={day.distance}
                    onChange={(e) => handleItineraryChange(index, 'distance', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Elevation Gain/Loss</label>
                  <input
                    type="text"
                    required
                    value={day.elevation}
                    onChange={(e) => handleItineraryChange(index, 'elevation', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Walking Hours</label>
                  <input
                    type="text"
                    required
                    value={day.hours}
                    onChange={(e) => handleItineraryChange(index, 'hours', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Accommodation</label>
                  <input
                    type="text"
                    required
                    value={day.accommodation}
                    onChange={(e) => handleItineraryChange(index, 'accommodation', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  required
                  rows={3}
                  value={day.description}
                  onChange={(e) => handleItineraryChange(index, 'description', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddItineraryDay}
            className="text-primary-600 hover:text-primary-900"
          >
            Add Day
          </button>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Trek'}
        </button>
      </div>
    </form>
  );
} 