import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TrekkingPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Group treks by region
  const regions = {
    'Everest Region': [
    {
      id: 'everest-base-camp',
      title: 'Everest Base Camp Trek',
      subtitle: 'Journey to the foot of the world\'s highest mountain',
        overview: 'The Everest Base Camp trek is one of the most iconic treks in the world. Journey through the Khumbu region, home to the Sherpa people, ancient Buddhist monasteries, and breathtaking Himalayan vistas.',
        image: '/images/treks/everest-base-camp.jpg',
      duration: '12-14 Days',
      difficulty: 'Moderate to Challenging',
      maxAltitude: '5,545m',
      bestSeason: 'Mar - May, Oct - Nov',
    },
    {
      id: 'everest-three-pass',
      title: 'Everest Three High Passes Trek',
      subtitle: 'The ultimate Everest region adventure',
        overview: 'Cross three spectacular passes - Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,340m). Visit Everest Base Camp, Kala Patthar, and the stunning Gokyo Lakes.',
        image: '/images/treks/three-passes.jpg',
      duration: '20-22 Days',
      difficulty: 'Challenging',
      maxAltitude: '5,545m',
      bestSeason: 'Mar - May, Oct - Nov',
    },
    {
      id: 'gokyo-ri',
      title: 'Gokyo Lakes Trek',
      subtitle: 'Journey to the world\'s highest freshwater lake system',
        overview: 'Trek to the turquoise Gokyo Lakes, climb Gokyo Ri for panoramic views of four 8,000m peaks, and cross the massive Ngozumpa Glacier.',
        image: '/images/treks/gokyo-lakes.jpg',
      duration: '12-14 Days',
      difficulty: 'Moderate to Challenging',
      maxAltitude: '5,357m',
      bestSeason: 'Mar - May, Oct - Nov',
      },
    ],
    'Annapurna Region': [
      {
        id: 'annapurna-circuit',
        title: 'Annapurna Circuit Trek',
        subtitle: 'The complete journey around Annapurna massif',
        overview: 'Beneath the gaze of Annapurna, every heartbeat echoes with adventure, and every step writes a story of determination and discovery.',
        image: '/images/treks/annapurna-circuit.jpg',
        duration: '14 Days',
        difficulty: 'Moderate to Challenging',
        maxAltitude: '5,416m',
        bestSeason: 'Mar - May, Sep - Nov',
    },
    {
      id: 'khopra-ridge',
      title: 'Khopra Ridge Trek',
      subtitle: 'Off-the-beaten-path Annapurna adventure',
        overview: 'Discovering the Hidden Treasures of the Annapurna Region through pristine forests and traditional villages.',
        image: '/images/treks/khopra-ridge.jpg',
        duration: '11 Days',
      difficulty: 'Moderate',
      maxAltitude: '4,500m',
      bestSeason: 'Mar - May, Oct - Nov',
      },
      {
        id: 'pun-hill',
        title: 'Pun Hill Trek',
        subtitle: 'Spectacular sunrise views of the Annapurna range',
        overview: 'A short but rewarding trek offering panoramic views of the Annapurna and Dhaulagiri ranges.',
        image: '/images/treks/pun-hill.jpg',
        duration: '7 Days',
        difficulty: 'Easy to Moderate',
        maxAltitude: '3,210m',
        bestSeason: 'Year-round',
      },
      {
        id: 'annapurna-north-base-camp',
        title: 'Annapurna North Base Camp',
        subtitle: 'Journey to the heart of Annapurna Sanctuary',
        overview: 'The cradle of Himalayan conquest. Here, where Maurice Herzog first defied the impossible.',
        image: '/images/treks/annapurna-north.jpg',
        duration: '11 Days',
        difficulty: 'Moderate to Challenging',
        maxAltitude: '4,130m',
        bestSeason: 'Mar - May, Oct - Nov',
      },
      {
        id: 'annapurna-south-base-camp',
        title: 'Annapurna South Base Camp',
        subtitle: 'The classic trek to Annapurna Sanctuary',
        overview: 'A journey through diverse landscapes to the amphitheater of giants, surrounded by peaks over 7,000m.',
        image: '/images/treks/annapurna-south.jpg',
        duration: '14 Days',
        difficulty: 'Moderate',
        maxAltitude: '4,130m',
        bestSeason: 'Mar - May, Oct - Nov',
    },
    {
      id: 'mardi-himal',
      title: 'Mardi Himal Trek',
      subtitle: 'Hidden gem in the Annapurna region',
        overview: 'An off-the-beaten-path trek offering close-up views of Machapuchare (Fishtail) and the Annapurna range.',
        image: '/images/treks/mardi-himal.jpg',
        duration: '14 Days',
        difficulty: 'Moderate',
        maxAltitude: '4,500m',
        bestSeason: 'Mar - May, Oct - Dec',
      },
      {
        id: 'gurung-heritage-trail',
        title: 'Gurung Heritage Trail',
        subtitle: 'Cultural immersion in traditional villages',
        overview: 'Experience the rich culture and traditions of the Gurung people while enjoying mountain views.',
        image: '/images/treks/gurung-heritage.jpg',
        duration: '7 Days',
        difficulty: 'Easy',
        maxAltitude: '2,000m',
        bestSeason: 'Year-round',
      },
      {
        id: 'pokhara-poon-hill',
        title: 'Pokhara + Poon Hill Trek',
        subtitle: 'Perfect blend of city comfort and mountain adventure',
        overview: 'Combine the lakeside charm of Pokhara with the spectacular views from Poon Hill.',
        image: '/images/treks/pokhara-poon-hill.jpg',
        duration: '5 Days',
        difficulty: 'Easy to Moderate',
        maxAltitude: '3,210m',
        bestSeason: 'Year-round',
      },
    ],
    'Langtang Region': [
      {
        id: 'langtang-gosaikunda',
        title: 'Langtang Gosaikunda Trek',
        subtitle: 'A Pilgrimage to the Enchanting Alpine Lakes',
        overview: 'Trek to the sacred high-altitude lakes of Gosaikunda, featuring stunning mountain vistas and rich cultural heritage.',
        image: '/images/treks/langtang-gosaikunda.jpg',
        duration: '15 Days',
        difficulty: 'Moderate to Challenging',
        maxAltitude: '4,380m',
        bestSeason: 'Mar - May, Sep - Nov',
      },
      {
        id: 'langtang-valley',
        title: 'Langtang Valley Trek',
        subtitle: 'Valley of glaciers and mountain views',
        overview: 'Experience the incredible "Valley of Glaciers," featuring diverse landscapes from lush forests to high-altitude meadows.',
        image: '/images/treks/langtang-valley.jpg',
        duration: '11 Days',
        difficulty: 'Moderate',
        maxAltitude: '4,984m',
        bestSeason: 'Mar - May, Oct - Nov',
      },
      {
        id: 'langtang-ganja-la',
        title: 'Langtang Ganja La Pass Trek',
        subtitle: 'Journey Through the Hidden Trails of the Himalayas',
        overview: 'An adventurous trek crossing the challenging Ganja La Pass, offering stunning views of the Langtang range.',
        image: '/images/treks/langtang-ganja-la.jpg',
        duration: '11 Days',
        difficulty: 'Challenging',
        maxAltitude: '5,122m',
        bestSeason: 'Mar - May, Oct - Nov',
      },
    ],
    'Manaslu Region': [
      {
        id: 'manaslu-circuit',
        title: 'Manaslu Circuit Trek',
        subtitle: 'Adventure around the eighth highest mountain',
        overview: 'It\'s a voyage into the soul of the Himalayas, circling the majestic Mount Manaslu (8,163m).',
        image: '/images/treks/manaslu-circuit.jpg',
        duration: '16 Days',
        difficulty: 'Challenging',
        maxAltitude: '5,160m',
        bestSeason: 'Mar - May, Sep - Nov',
      },
      {
        id: 'tsum-valley',
        title: 'Tsum Valley Trek',
        subtitle: 'Hidden valley of happiness',
        overview: 'Trekking to Tsum Valley: An Off-the-Path Himalayan Experience through ancient Buddhist culture.',
        image: '/images/treks/tsum-valley.jpg',
        duration: '13 Days',
        difficulty: 'Moderate to Challenging',
        maxAltitude: '3,700m',
        bestSeason: 'Mar - May, Sep - Nov',
      },
      {
        id: 'manaslu-annapurna',
        title: 'Manaslu + Annapurna Circuit',
        subtitle: 'The ultimate high passes adventure',
        overview: 'Combined with the Larkya La Pass (5,160m) and Thorong La pass (5,416m) crossing, this trek offers the ultimate Himalayan experience.',
        image: '/images/treks/manaslu-annapurna.jpg',
        duration: '22 Days',
        difficulty: 'Challenging',
        maxAltitude: '5,416m',
        bestSeason: 'Mar - May, Sep - Nov',
      },
      {
        id: 'tsum-valley-manaslu',
        title: 'Tsum Valley + Manaslu Circuit',
        subtitle: 'Combine two amazing treks',
        overview: 'Experience the best of both worlds: the hidden Tsum Valley and the challenging Manaslu Circuit.',
        image: '/images/treks/tsum-manaslu.jpg',
        duration: '18 Days',
        difficulty: 'Challenging',
        maxAltitude: '5,160m',
        bestSeason: 'Mar - May, Sep - Nov',
      }
    ],
    'Kanchenjunga Region': [
      {
        id: 'kanchenjunga-circuit',
        title: 'Kanchenjunga Circuit Trek',
        subtitle: 'Trek around the world\'s third highest peak',
        overview: 'Kanchenjunga Circuit Trek: Traversing Nepal\'s Lesser-Known Trails through pristine wilderness.',
        image: '/images/treks/kanchenjunga-circuit.jpg',
        duration: '18 Days',
        difficulty: 'Challenging',
        maxAltitude: '5,140m',
        bestSeason: 'Mar - May, Sep - Nov',
      },
      {
        id: 'kanchenjunga-north-base-camp',
        title: 'Kanchenjunga North Base Camp Trek',
        subtitle: 'Journey to the base of Kanchenjunga',
        overview: 'A Remote Adventure to the Foot of the World\'s Third Highest Peak through untouched landscapes.',
        image: '/images/treks/kanchenjunga-north.jpg',
        duration: '20 Days',
        difficulty: 'Challenging',
        maxAltitude: '5,388m',
        bestSeason: 'Mar - May, Sep - Nov',
      }
    ],
    'Mustang Region': [
      {
        id: 'upper-mustang',
        title: 'Upper Mustang Trek',
        subtitle: 'Journey through the hidden kingdom',
        overview: 'A Walk Through Time: Discover Upper Mustang\'s Ancient Heritage in the former Kingdom of Lo.',
        image: '/images/treks/upper-mustang.jpg',
        duration: '16 Days',
      difficulty: 'Moderate',
        maxAltitude: '3,840m',
        bestSeason: 'Jun - Sep',
      },
      {
        id: 'nar-phu-teri-la',
        title: 'Nar Phu + Teri La Pass Trek',
        subtitle: 'Adventure through remote valleys',
        overview: 'Trekking the Isolated Trails of Nar Phu trek with via Kang La Pass and Thorong La pass.',
        image: '/images/treks/nar-phu.jpg',
        duration: '18 Days',
        difficulty: 'Challenging',
        maxAltitude: '5,595m',
        bestSeason: 'Mar - May, Sep - Nov',
      },
      {
        id: 'lupra-valley',
        title: 'Lupra Valley Trek',
        subtitle: 'Explore the hidden gems of Lower Mustang',
        overview: 'Lower Mustang-Jomsom-Phagling-Kagbeni-Jharkot-MuktiNath-Chongur-Lupra Valley Trek through diverse landscapes.',
        image: '/images/treks/lupra-valley.jpg',
        duration: '10 Days',
        difficulty: 'Moderate',
        maxAltitude: '3,800m',
        bestSeason: 'Mar - May, Sep - Nov',
      }
    ],
    'Lower Khumbu': [
    {
      id: 'pikey-peak',
      title: 'Pikey Peak Trek',
      subtitle: 'Best viewpoint of Mount Everest in Lower Khumbu',
        overview: 'The Pikey Peak trek offers one of the finest viewpoints of Mount Everest and the Khumbu region without the crowds.',
        image: '/images/treks/pikey-peak.jpg',
      duration: '5-7 Days',
      difficulty: 'Moderate',
      maxAltitude: '4,065m',
      bestSeason: 'Mar - May, Oct - Nov',
    }
    ],
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl"
          >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Discover Nepal's Finest Treks
            </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                From the iconic Everest Base Camp to hidden gems in Mustang, explore the world's most spectacular mountain trails
            </p>
              <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Plan Your Trek
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Trek Stats */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">5+</div>
                  <div className="text-sm md:text-base">Trekking Regions</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">20+</div>
                  <div className="text-sm md:text-base">Unique Routes</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">8,848m</div>
                  <div className="text-sm md:text-base">Highest Peak</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">15+</div>
                  <div className="text-sm md:text-base">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      {/* Trekking Regions */}
      <div className="container mx-auto px-4 py-16">
        {Object.entries(regions).map(([region, treks]) => (
          <div key={region} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">{region.toUpperCase()} TREKKING</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {treks.map((trek) => (
                <Link
                  key={trek.id}
                  to={`/trekking/${trek.id}`}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-orange-500/10 border border-gray-800 hover:border-orange-500/20"
                >
                  <div className="relative h-56">
                  <img
                    src={trek.image}
                    alt={trek.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">{trek.title}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2">{trek.subtitle}</p>
                    </div>
                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {trek.duration}
                          </div>
                          </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <span className="text-orange-500">⛰️</span>
                        <span>{trek.maxAltitude}</span>
                          </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-orange-500">🏃</span>
                        <span>{trek.difficulty}</span>
                </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-orange-500">🗓️</span>
                        <span>{trek.bestSeason}</span>
                      </div>
                      </div>
                    <div className="pt-3 border-t border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">Best Season</div>
                        <div className="text-white text-sm font-medium group-hover:text-orange-500 transition-colors flex items-center">
                            View Details
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      </div>
                    </div>
                  </div>
                </Link>
            ))}
                </div>
              </div>
        ))}
      </div>
    </div>
  );
};

export default TrekkingPage;