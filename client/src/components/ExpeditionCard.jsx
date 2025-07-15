import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExpeditionCard = ({ expedition }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handleClick = () => {
    navigate(`/expeditions/${expedition.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-[#1C2632] border border-gray-700 rounded-lg overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-orange-500/30"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-[280px] overflow-hidden border-b border-gray-700">
        <motion.img 
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          src={expedition.image}
          alt={expedition.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2632] via-transparent to-transparent opacity-80" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {expedition.grade}
          </div>
          <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {expedition.success_rate}
          </div>
        </div>

        {/* Quick Info Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm border border-gray-700"
        >
          {expedition.dates}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Title and Description */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-orange-500 text-sm font-medium px-3 py-1 bg-orange-500/10 rounded-lg border border-orange-500/20">
              {expedition.season}
            </span>
            <span className="text-white text-sm font-medium px-3 py-1 bg-gray-700/50 rounded-lg border border-gray-600">
              {expedition.country}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
            {expedition.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-4">
            {expedition.description}
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mb-4 border-b border-gray-700">
            {['overview', 'details', 'requirements'].map((tab) => (
              <button
                key={tab}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab(tab);
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mb-6">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover/item:bg-orange-500/20 transition-colors border border-orange-500/20">
                      <span className="text-orange-500">⏱️</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Duration</div>
                      <div className="text-white text-sm">{expedition.duration} days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover/item:bg-orange-500/20 transition-colors border border-orange-500/20">
                      <span className="text-orange-500">⛰️</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Altitude</div>
                      <div className="text-white text-sm">{expedition.altitude}m</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                  <div className="text-xs text-gray-500 uppercase mb-2">Highlights</div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {expedition.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-orange-500">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Group Size</div>
                    <div className="text-white">{expedition.group_size}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Guide Ratio</div>
                    <div className="text-white">{expedition.guide_ratio}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Base Camp</div>
                    <div className="text-white">{expedition.base_camp_alt}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Success Window</div>
                    <div className="text-white">{expedition.summit_success_window}</div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                  <div className="text-xs text-gray-500 uppercase mb-2">Weather Conditions</div>
                  <div className="text-gray-300 text-sm">
                    <div>Temperature: {expedition.weather_conditions.temperature_range}</div>
                    <div>Best Window: {expedition.weather_conditions.best_weather_window}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                  <div className="text-xs text-gray-500 uppercase mb-2">Required Experience</div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {expedition.required_experience.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-orange-500">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Physical Rating</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`w-4 h-1 rounded ${
                            i < expedition.physical_rating
                              ? 'bg-orange-500'
                              : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Technical Rating</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`w-4 h-1 rounded ${
                            i < expedition.technical_rating
                              ? 'bg-orange-500'
                              : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-6">
          <div>
            <div className="text-xs text-gray-500 uppercase">Starting from</div>
            <div className="text-xl font-bold text-white">
              USD ${expedition.price.toLocaleString()}
            </div>
          </div>
          <motion.button 
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2 border border-orange-600"
          >
            View Details
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
            className="h-full bg-orange-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ExpeditionCard; 