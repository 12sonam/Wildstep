import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const treksData = {
  'everest-base-camp': {
    title: 'Everest Base Camp Trek',
    subtitle: 'Journey to the foot of the world\'s highest mountain',
    overview: 'The Everest Base Camp trek is one of the most famous treks in the world, taking you through stunning Sherpa villages, past Buddhist monasteries, and offering incredible views of Mount Everest and other Himalayan peaks.',
    highlights: [
      'Stand at Everest Base Camp (5,364m)',
      'Sunrise view of Everest from Kala Patthar',
      'Visit the famous Tengboche Monastery',
      'Experience Sherpa culture and hospitality',
      'Trek through the stunning Khumbu region'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Upon arrival at Tribhuvan International Airport, you\'ll be met by our representative and transferred to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Fly to Lukla (2,800m) and trek to Phakding (2,652m)',
        description: 'Early morning flight to Lukla. Begin trek through Dudh Koshi Valley to Phakding.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Challenging ascent through pine forests to the famous Sherpa capital of Namche Bazaar.'
      },
      {
        day: 'Day 4',
        title: 'Acclimatization Day in Namche Bazaar',
        description: 'Rest and acclimatization. Optional hike to Everest View Hotel for first views of Mount Everest.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Tengboche (3,870m)',
        description: 'Trek to Tengboche, home to the region\'s largest monastery with stunning mountain views.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Dingboche (4,360m)',
        description: 'Ascend through rhododendron forests to the village of Dingboche.'
      },
      {
        day: 'Day 7',
        title: 'Acclimatization Day in Dingboche',
        description: 'Second acclimatization day. Optional hike to Nangkartshang Peak for panoramic views.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Lobuche (4,940m)',
        description: 'Trek along the lateral moraine of Khumbu Glacier to Lobuche.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Gorak Shep (5,170m) and EBC (5,364m)',
        description: 'Early morning trek to Gorak Shep, then to Everest Base Camp. Return to Gorak Shep.'
      },
      {
        day: 'Day 10',
        title: 'Kala Patthar (5,545m) and trek to Pheriche (4,280m)',
        description: 'Pre-dawn hike to Kala Patthar for sunrise views of Everest. Descend to Pheriche.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Long descent back to Namche Bazaar.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Lukla (2,800m)',
        description: 'Final day of trekking, returning to Lukla.'
      },
      {
        day: 'Day 13',
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu. Free afternoon for shopping or relaxation.'
      },
      {
        day: 'Day 14',
        title: 'Departure Day',
        description: 'Transfer to airport for your departure flight.'
      }
    ],
    included: [
      'All airport/hotel transfers',
      'Kathmandu-Lukla-Kathmandu flights',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'All necessary permits and fees',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How difficult is the Everest Base Camp Trek?',
        answer: 'The trek is considered moderate to challenging. While no technical climbing is involved, you need good physical fitness and stamina for multiple days of walking at high altitude.'
      },
      {
        question: 'When is the best time to trek?',
        answer: 'The best seasons are pre-monsoon (March to May) and post-monsoon (late September to November). These periods offer stable weather and clear mountain views.'
      },
      {
        question: 'Do I need previous trekking experience?',
        answer: 'While previous trekking experience is helpful, it\'s not mandatory. However, good physical fitness and mental preparation are essential.'
      },
      {
        question: 'What about altitude sickness?',
        answer: 'The trek includes rest days for acclimatization. Our guides are trained to recognize and respond to altitude sickness symptoms. We recommend travel insurance that covers high altitude trekking.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'annapurna-base-camp': {
    title: 'Annapurna Base Camp Trek',
    subtitle: 'Journey to the heart of the Annapurna Sanctuary',
    overview: 'The Annapurna Base Camp trek takes you into the heart of the Annapurna Sanctuary, a natural amphitheater surrounded by some of the world\'s highest peaks. This trek offers a perfect blend of natural and cultural experiences.',
    highlights: [
      'Reach Annapurna Base Camp (4,130m)',
      'Stunning sunrise over the Annapurna range',
      'Trek through diverse landscapes',
      'Experience local Gurung culture',
      'Hot springs at Jhinu Danda'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Drive to Pokhara (820m)',
        description: 'Scenic drive through the Nepalese countryside to Pokhara.'
      },
      {
        day: 'Day 3',
        title: 'Drive to Nayapul and trek to Tikhedhunga (1,540m)',
        description: 'Begin trek through Modi River Valley and traditional villages.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Ghorepani (2,860m)',
        description: 'Challenging ascent through rhododendron forests to Ghorepani.'
      },
      {
        day: 'Day 5',
        title: 'Poon Hill (3,210m) and trek to Tadapani (2,630m)',
        description: 'Pre-dawn hike to Poon Hill for sunrise views. Trek to Tadapani.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Chhomrong (2,170m)',
        description: 'Descend through dense forest to the Gurung village of Chhomrong.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Dovan (2,500m)',
        description: 'Enter the Modi Khola Valley, leading to the Annapurna Sanctuary.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Machhapuchhre Base Camp (3,700m)',
        description: 'Ascend through bamboo and rhododendron forests to MBC.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Annapurna Base Camp (4,130m)',
        description: 'Early morning trek to ABC. Afternoon to explore and enjoy mountain views.'
      },
      {
        day: 'Day 10',
        title: 'Trek to Bamboo (2,310m)',
        description: 'Begin descent with spectacular views of the Annapurna range.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Jhinu Danda (1,780m)',
        description: 'Trek to Jhinu Danda. Optional visit to natural hot springs.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Nayapul and drive to Pokhara',
        description: 'Final trek day and return to Pokhara.'
      },
      {
        day: 'Day 13',
        title: 'Drive to Kathmandu',
        description: 'Return journey to Kathmandu.'
      },
      {
        day: 'Day 14',
        title: 'Departure Day',
        description: 'Transfer to airport for departure.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'TIMS permit and ACAP entry permit',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How difficult is the Annapurna Base Camp Trek?',
        answer: 'The trek is considered moderate in difficulty. Good physical fitness is required, but the altitude is lower than EBC trek.'
      },
      {
        question: 'When is the best time to trek?',
        answer: 'October to November and March to May are the best times, offering stable weather and clear mountain views.'
      },
      {
        question: 'Are there hot showers on the trek?',
        answer: 'Most teahouses offer hot showers (for an additional fee), and there are natural hot springs at Jhinu Danda.'
      },
      {
        question: 'What about internet connectivity?',
        answer: 'Wi-Fi is available at most teahouses up to Chhomrong, though connection quality varies.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1570731617731-fb0aa4d9b9aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  }
};

const TrekkingDetail = () => {
  const { id } = useParams();
  const currentTrek = treksData[id] || treksData['everest-base-camp']; // Fallback to EBC if ID not found

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src={currentTrek.gallery[0]}
            alt={currentTrek.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-gray-900"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {currentTrek.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              {currentTrek.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300">{currentTrek.overview}</p>
              
              <h3 className="text-xl font-bold text-white mt-6 mb-4">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTrek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg className="w-6 h-6 text-[#F28C38] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {currentTrek.itinerary.map((day, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-700 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#F28C38] rounded-full"></div>
                    <h3 className="text-lg font-bold text-white mb-2">{day.day} - {day.title}</h3>
                    <p className="text-gray-300">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included/Excluded */}
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">What's Included</h2>
                  <ul className="space-y-3">
                    {currentTrek.included.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">What's Not Included</h2>
                  <ul className="space-y-3">
                    {currentTrek.excluded.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {currentTrek.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700 last:border-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {currentTrek.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${currentTrek.title} - Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Duration</span>
                    <span className="text-white font-bold">{currentTrek.itinerary.length} Days</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Difficulty</span>
                    <span className="text-white font-bold">Moderate to Challenging</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Max Altitude</span>
                    <span className="text-white font-bold">
                      {id === 'everest-base-camp' ? '5,364m' : '4,130m'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Best Season</span>
                    <span className="text-white font-bold">Oct - Nov</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Accommodation</span>
                    <span className="text-white font-bold">Teahouse</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Start/End Point</span>
                    <span className="text-white font-bold">Kathmandu</span>
                  </div>
                </div>

                <button className="w-full bg-[#F28C38] text-white font-bold py-4 px-6 rounded-lg mt-8 hover:bg-[#E67D29] transition duration-300">
                  Book Your Trek
                </button>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                <p className="text-gray-300 mb-6">Have questions about this trek? Our expert team is here to help you plan your adventure.</p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 mr-3 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +977-1-4123456
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 mr-3 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@wildstep.com
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

export default TrekkingDetail; 