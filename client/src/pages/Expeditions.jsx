import React from 'react';
import { useExpeditionContext } from '../context/TrekContext';
import ExpeditionCard from '../components/ExpeditionCard';
import { motion } from 'framer-motion';

const Expeditions = () => {
  const { expeditions } = useExpeditionContext();

  return (
    <div className="min-h-screen bg-[#1C2632] py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">High Altitude Expeditions</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Challenge yourself with world-class mountaineering expeditions led by experienced guides.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expeditions.map((expedition, index) => (
            <motion.div
              key={expedition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExpeditionCard expedition={expedition} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expeditions; 