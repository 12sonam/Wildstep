import { useState, useEffect } from 'react';
import { getTreks, deleteTrek } from '../../services/api';
import TrekForm from '../../components/admin/TrekForm';

export default function TrekkingList() {
  const [treks, setTreks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingTrek, setEditingTrek] = useState(null);

  useEffect(() => {
    fetchTreks();
  }, []);

  const fetchTreks = async () => {
    try {
      const { data } = await getTreks();
      setTreks(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleEdit = (trek) => {
    setEditingTrek(trek);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this trek?')) {
      try {
        await deleteTrek(id);
        setTreks(treks.filter((trek) => trek._id !== id));
      } catch (err) {
        alert('Error deleting trek');
      }
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingTrek(null);
  };

  const handleFormSuccess = () => {
    handleFormClose();
    fetchTreks();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F28C38]"></div>
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Manage Treks</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#F28C38] text-white px-4 py-2 rounded-lg hover:bg-[#E67D29] transition duration-300"
        >
          Add New Trek
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treks.map((trek) => (
          <div
            key={trek._id}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={trek.image}
              alt={trek.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{trek.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{trek.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-[#F28C38] font-bold">
                  ${trek.price}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(trek)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(trek._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">
                {editingTrek ? 'Edit Trek' : 'Add New Trek'}
              </h2>
              <button
                onClick={handleFormClose}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <TrekForm
              trek={editingTrek}
              onClose={handleFormClose}
              onSuccess={handleFormSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
} 