import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ExpeditionCard({ expedition }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img
          src={expedition.image}
          alt={expedition.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 m-2 rounded-full text-sm">
          {expedition.difficulty}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{expedition.title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {expedition.location}
          </div>
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {expedition.duration}
          </div>
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {expedition.altitude}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-primary-600 font-bold text-lg">
            ${expedition.price.toLocaleString()}
          </span>
          <Link
            to={`/expeditions/${expedition._id}`}
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 