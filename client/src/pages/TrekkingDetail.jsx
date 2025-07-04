import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TrekkingDetail = () => {
  const [activeTab, setActiveTab] = useState('itinerary');

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Everest Base Camp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Trek Category Badge */}
            <span className="inline-block bg-[#F28C38] text-white px-4 py-1 rounded-full text-sm">
              TREKKING
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl">
              Trek Everest Base Camp
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Experience the heart of the Himalayas and trek to the world's highest basecamp
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Link
                to="/enquire"
                className="inline-flex items-center bg-[#F28C38] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E67D29] transition-colors group"
              >
                Enquire now
                <svg
                  className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
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
              </Link>
            </motion.div>
          </motion.div>
        </div>

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

      {/* Trek Details Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg prose-invert">
                <h2 className="text-3xl font-bold text-white">Overview</h2>
                <p>
                  The trek to Everest Base Camp is the world's most famous high-altitude trek. 
                  Following in the footsteps of climbing legends like Edmund Hillary and Tenzing Norgay, 
                  you will journey through the heart of the Khumbu region, experiencing Sherpa culture 
                  and witnessing the majesty of Mount Everest up close.
                </p>
                <p>
                  Starting from Lukla, the trek winds through rhododendron forests, traditional Sherpa 
                  villages, and dramatic suspension bridges. As you ascend, the landscape transforms 
                  into a high-altitude wilderness of moraines, glaciers, and towering peaks.
                </p>
              </div>

              {/* Trek Highlights */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Trek Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Stand at the foot of Mount Everest (8,848m)',
                    'Visit the bustling Sherpa town of Namche Bazaar',
                    'Explore ancient Buddhist monasteries',
                    'Witness sunrise over Everest from Kala Patthar',
                    'Trek through the stunning Khumbu Valley',
                    'Experience authentic Sherpa culture'
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <svg
                        className="w-6 h-6 text-[#F28C38] flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trek Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-6 space-y-6">
                <h3 className="text-xl font-bold text-white">Trek Information</h3>
                
                {/* Trek Details */}
                {[
                  { label: 'Duration', value: '12-14 days', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { label: 'Difficulty', value: 'Moderate to Challenging', icon: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' },
                  { label: 'Max Altitude', value: '5,364m', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
                  { label: 'Season', value: 'Mar-May & Sep-Nov', icon: 'M20 4a1 1 0 011 1v2a1 1 0 01-1 1h-8v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V8H4a1 1 0 01-1-1V5a1 1 0 011-1h16z' }
                ].map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white">
                    <svg className="w-5 h-5 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={detail.icon} />
                    </svg>
                    <div>
                      <span className="block text-sm text-gray-400">{detail.label}</span>
                      <span className="block font-medium">{detail.value}</span>
                    </div>
                  </div>
                ))}

                {/* Price */}
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Price from</span>
                    <span className="text-2xl font-bold text-[#F28C38]">$2,900</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/enquire"
                  className="mt-6 block w-full bg-[#F28C38] text-white text-center px-6 py-3 rounded-full hover:bg-[#E67D29] transition-colors"
                >
                  Book Your Trek
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-16 border-b border-gray-800">
            <nav className="flex space-x-8">
              {['itinerary', 'included', 'expect', 'faqs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${
                    activeTab === tab 
                      ? 'border-[#F28C38] text-[#F28C38]'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {/* Itinerary Tab */}
            {activeTab === 'itinerary' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white">Day by Day Itinerary</h2>
                <div className="space-y-6">
                  {[
                    {
                      day: 1,
                      title: 'Arrival in Kathmandu (1,400m)',
                      description: 'Welcome to Nepal! Upon arrival at Tribhuvan International Airport, you will be met by our representative and transferred to your hotel in Kathmandu.',
                      altitude: '1,400m',
                      accommodation: 'Hotel in Kathmandu',
                      meals: 'Welcome Dinner'
                    },
                    {
                      day: 2,
                      title: 'Fly to Lukla (2,800m) & Trek to Phakding (2,652m)',
                      description: 'Early morning flight to Lukla, known for its dramatic mountain runway. Begin trek through Sherpa villages to Phakding.',
                      altitude: '2,652m',
                      distance: '8km',
                      duration: '3-4 hours',
                      accommodation: 'Tea House',
                      meals: 'B, L, D'
                    },
                    {
                      day: 3,
                      title: 'Trek to Namche Bazaar (3,440m)',
                      description: 'Challenging ascent through pine forests, crossing suspension bridges over the Dudh Kosi River. First views of Everest possible.',
                      altitude: '3,440m',
                      distance: '10km',
                      duration: '6-7 hours',
                      accommodation: 'Tea House',
                      meals: 'B, L, D'
                    }
                  ].map((day) => (
                    <div key={day.day} className="bg-gray-900 rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-[#F28C38] text-white rounded-full w-12 h-12 flex items-center justify-center">
                          Day {day.day}
                        </div>
                        <div className="ml-6">
                          <h3 className="text-xl font-bold text-white">{day.title}</h3>
                          <p className="mt-2 text-gray-300">{day.description}</p>
                          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {day.altitude && (
                              <div>
                                <span className="block text-sm text-gray-400">Altitude</span>
                                <span className="text-white">{day.altitude}</span>
                              </div>
                            )}
                            {day.distance && (
                              <div>
                                <span className="block text-sm text-gray-400">Distance</span>
                                <span className="text-white">{day.distance}</span>
                              </div>
                            )}
                            {day.duration && (
                              <div>
                                <span className="block text-sm text-gray-400">Duration</span>
                                <span className="text-white">{day.duration}</span>
                              </div>
                            )}
                            {day.accommodation && (
                              <div>
                                <span className="block text-sm text-gray-400">Accommodation</span>
                                <span className="text-white">{day.accommodation}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included Tab */}
            {activeTab === 'included' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Included */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Included in the Price</h3>
                    {[
                      'All ground transportation as per itinerary',
                      'Experienced English-speaking trek guide',
                      'Porter service (2 trekkers: 1 porter)',
                      'All necessary trekking permits and fees',
                      'All accommodation during the trek (tea houses/lodges)',
                      'All meals during the trek (breakfast, lunch, dinner)',
                      'Welcome and farewell dinners in Kathmandu',
                      'Emergency medical kit and oxygen cylinder',
                      'All government and local taxes'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Not Included */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Not Included</h3>
                    {[
                      'International airfare to/from Kathmandu',
                      'Nepal entry visa fee',
                      'Travel and rescue insurance',
                      'Personal expenses (phone calls, laundry, bar bills, etc.)',
                      'Tips for guides and porters',
                      'Extra nights accommodation in Kathmandu',
                      'Personal trekking equipment',
                      'Meals in Kathmandu (except welcome/farewell dinners)',
                      'Additional costs due to unforeseen circumstances'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* What to Expect Tab */}
            {activeTab === 'expect' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Physical Requirements */}
                  <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">Physical Requirements</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Good level of fitness required</li>
                      <li>• Ability to walk 5-7 hours per day</li>
                      <li>• Previous hiking experience recommended</li>
                      <li>• Comfortable with high altitudes</li>
                      <li>• Basic balance and coordination skills</li>
                    </ul>
                  </div>

                  {/* Weather Conditions */}
                  <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">Weather Conditions</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Temperatures range from -10°C to 20°C</li>
                      <li>• Clear mornings, cloudy afternoons</li>
                      <li>• Possibility of snow at higher altitudes</li>
                      <li>• Varying conditions by season</li>
                      <li>• Proper gear essential</li>
                    </ul>
                  </div>

                  {/* Accommodation */}
                  <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">Accommodation</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Basic but comfortable tea houses</li>
                      <li>• Shared bathroom facilities</li>
                      <li>• Limited electricity for charging</li>
                      <li>• Simple but nutritious meals</li>
                      <li>• Warm sleeping bags required</li>
                    </ul>
                  </div>

                  {/* Cultural Considerations */}
                  <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">Cultural Considerations</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Respect local customs and traditions</li>
                      <li>• Dress modestly in villages</li>
                      <li>• Basic Nepali phrases helpful</li>
                      <li>• Photography etiquette important</li>
                      <li>• Support local communities</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: 'What is the best time to trek to Everest Base Camp?',
                      answer: 'The best seasons are pre-monsoon (March to May) and post-monsoon (September to November). These periods offer stable weather conditions and clear mountain views.'
                    },
                    {
                      question: 'Do I need previous trekking experience?',
                      answer: 'While previous trekking experience is beneficial, it is not mandatory. However, good physical fitness and mental preparation are essential for this challenging trek.'
                    },
                    {
                      question: 'How do I prevent altitude sickness?',
                      answer: 'Our itinerary includes proper acclimatization days. Additionally, walk slowly, stay hydrated, avoid alcohol, and inform your guide if you experience any symptoms.'
                    },
                    {
                      question: 'What type of accommodation can I expect?',
                      answer: 'You will stay in comfortable tea houses/lodges along the trail. These offer basic but clean rooms, usually with shared bathroom facilities and common dining areas.'
                    },
                    {
                      question: 'Is it safe to trek solo?',
                      answer: 'While it is possible to trek solo, we strongly recommend going with a guide for safety, navigation, cultural insights, and emergency assistance if needed.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                      <p className="mt-2 text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekkingDetail; 