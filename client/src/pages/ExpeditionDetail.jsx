import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useExpeditionContext } from '../context/TrekContext';

const ExpeditionDetail = () => {
  const { id } = useParams();
  const { expeditions } = useExpeditionContext();
  const expedition = expeditions.find(exp => exp.id === id);
  const [activeTab, setActiveTab] = useState('overview');

  if (!expedition) {
    return <div>Expedition not found</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'training', label: 'Training' },
    { id: 'services', label: 'Services' }
  ];

  return (
    <div className="min-h-screen bg-[#1C2632]">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={expedition.image}
          alt={expedition.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2632] via-[#1C2632]/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">{expedition.name}</h1>
            <div className="flex items-center justify-center gap-4 text-white">
              <span className="bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-lg">
                {expedition.altitude}m
              </span>
              <span className="bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-lg">
                {expedition.duration} Days
              </span>
              <span className="bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-lg">
                {expedition.grade}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Success Rate', value: expedition.success_rate },
            { label: 'Group Size', value: expedition.group_size },
            { label: 'Guide Ratio', value: expedition.guide_ratio },
            { label: 'Base Camp', value: expedition.base_camp_alt }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
            >
              <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-700 mb-8">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-orange-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300">{expedition.description}</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expedition.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-orange-500 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Weather Conditions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Temperature Range</div>
                      <div className="text-white">{expedition.weather_conditions.temperature_range}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Wind Speeds</div>
                      <div className="text-white">{expedition.weather_conditions.wind_speeds}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Precipitation</div>
                      <div className="text-white">{expedition.weather_conditions.precipitation}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Best Weather Window</div>
                      <div className="text-white">{expedition.weather_conditions.best_weather_window}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'itinerary' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {expedition.itinerary.map((day, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded text-sm font-medium">
                        Day {day.day}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-white mb-2">{day.title}</h4>
                        <p className="text-gray-300 mb-4">{day.description}</p>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400">Altitude</div>
                            <div className="text-white">{day.altitude}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Accommodation</div>
                            <div className="text-white">{day.accommodation}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Meals</div>
                            <div className="text-white">{day.meals}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'requirements' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Required Experience</h3>
                  <ul className="space-y-3">
                    {expedition.required_experience.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-orange-500 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Ratings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Physical Difficulty</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`w-8 h-2 rounded ${
                              i < expedition.physical_rating
                                ? 'bg-orange-500'
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Technical Difficulty</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`w-8 h-2 rounded ${
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
              </motion.div>
            )}

            {activeTab === 'training' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {expedition.training_camps.map((camp, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                  >
                    <h4 className="text-lg font-medium text-white mb-4">{camp.location}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Duration</div>
                        <div className="text-white">{camp.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Focus</div>
                        <div className="text-white">{camp.focus}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'services' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Included Services</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expedition.included_services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-orange-500 mt-1">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Price per person from</div>
                <div className="text-3xl font-bold text-white mb-4">
                  USD ${expedition.price.toLocaleString()}
                </div>
                <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                  Book Now
                </button>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-4">Key Information</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Season</div>
                    <div className="text-white">{expedition.season}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-white">{expedition.duration} days</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Dates</div>
                    <div className="text-white">{expedition.dates}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Difficulty</div>
                    <div className="text-white">{expedition.difficulty}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpeditionDetail; 