import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function TrekkingDetail() {
  const { id } = useParams();
  const [trek, setTrek] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrek = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/treks/${id}`);
        setTrek(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTrek();
  }, [id]);

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

  if (!trek) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Trek not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={trek.images[0]}
              alt={trek.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {trek.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${trek.title} ${index + 2}`}
                className="object-cover w-full h-24 rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{trek.title}</h1>
          <p className="text-gray-600">{trek.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Duration</h3>
              <p className="mt-1 text-lg font-semibold">{trek.duration} days</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Difficulty</h3>
              <p className="mt-1 text-lg font-semibold">{trek.difficulty}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Max Altitude</h3>
              <p className="mt-1 text-lg font-semibold">{trek.maxAltitude}m</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Group Size</h3>
              <p className="mt-1 text-lg font-semibold">Max {trek.maxGroupSize}</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <div className="space-y-4">
              {trek.itinerary.map((day) => (
                <div key={day.day} className="border-b pb-4">
                  <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
                  <p className="text-gray-600 mt-2">{day.description}</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <span>Altitude: {day.altitude}m</span>
                    <span>Distance: {day.distance}km</span>
                    <span>Stay: {day.accommodation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Price per person</p>
                <p className="text-3xl font-bold text-primary-600">${trek.price}</p>
              </div>
              <button className="btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 