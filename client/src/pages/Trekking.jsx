import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrekkingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const treks = [
    {
      id: 1,
      category: 'TREK',
      title: 'Everest Base Camp',
      description: 'The trek to Everest Base Camp is the world\'s most famous multi-day adventure hike for a reason.',
      image: 'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 2900,
      season: 'Oct - Nov',
      duration: '12-14 days',
      difficulty: 'Moderate',
      altitude: '5,364m',
      link: '/trekking/everest-base-camp'
    },
    {
      id: 2,
      category: 'TREK',
      title: 'Annapurna Base Camp',
      description: 'The 67km long trek to Annapurna Base Camp is a Himalayan classic. Demanding, but not too demanding, this epic itinerary gives you the perfect mountain experience.',
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 2500,
      season: 'Oct - Nov',
      duration: '10-12 days',
      difficulty: 'Moderate',
      altitude: '4,130m',
      link: '/trekking/annapurna-base-camp'
    },
    {
      id: 3,
      category: 'TREK',
      title: 'Everest Three Pass Trek',
      description: 'Short of climbing the mountain itself, the Three Pass Trek is the ultimate Mount Everest trekking experience.',
      image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 4300,
      season: 'Apr - Apr',
      duration: '18-20 days',
      difficulty: 'Challenging',
      altitude: '5,535m',
      link: '/trekking/everest-three-pass'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Everest Base Camp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-gray-900" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative h-full flex flex-col justify-center items-center text-white px-4"
        >
          <span className="inline-block bg-[#F28C38] text-white px-4 py-1 rounded-full text-sm mb-6">
            TREKKING
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
          >
            Trek Everest Base Camp
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center max-w-3xl mb-8"
          >
            Experience the heart of the Himalayas and trek to the world's highest basecamp
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#F28C38] hover:bg-[#E67D29] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Enquire now
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center"
          >
            <motion.div className="w-1 h-1 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation/Filter */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm z-40 py-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`text-lg font-medium ${
                selectedCategory === 'ALL' 
                  ? 'text-[#F28C38] border-b-2 border-[#F28C38]' 
                  : 'text-white hover:text-[#F28C38]'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setSelectedCategory('TREKKING')}
              className={`text-lg font-medium ${
                selectedCategory === 'TREKKING' 
                  ? 'text-[#F28C38] border-b-2 border-[#F28C38]' 
                  : 'text-white hover:text-[#F28C38]'
              }`}
            >
              TREKKING
            </button>
          </div>
        </div>
      </div>

      {/* Trek Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <motion.div
              key={trek.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F28C38] text-white px-3 py-1 rounded-full text-sm">
                    {trek.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{trek.title}</h3>
                <p className="text-gray-300 mb-4">{trek.description}</p>
                
                {/* Trek Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                    </svg>
                    {trek.season}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" />
                    </svg>
                    {trek.duration}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                    {trek.difficulty}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    {trek.altitude}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-[#F28C38] font-bold text-xl">
                    USD ${trek.price}
                  </div>
                  <Link
                    to={trek.link}
                    className="bg-[#F28C38] text-white px-6 py-2 rounded-full hover:bg-[#E67D29] transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrekkingPage; 