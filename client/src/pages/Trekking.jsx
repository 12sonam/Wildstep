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
  
  const treks = [
    {
      id: 'everest-base-camp',
      title: 'Everest Base Camp Trek',
      subtitle: 'Journey to the foot of the world\'s highest mountain',
      overview: 'The Everest Base Camp trek is one of the most iconic treks in the world. Journey through the Khumbu region, home to the Sherpa people, ancient Buddhist monasteries, and breathtaking Himalayan vistas. Walk in the footsteps of legendary mountaineers to reach the base of Mount Everest (8,848m) while experiencing the rich cultural heritage of the Sherpa people.',
      highlights: [
        'Stand at Everest Base Camp (5,364m)',
        'Sunrise view from Kala Patthar (5,545m)',
        'Visit the historic Tengboche Monastery',
        'Experience authentic Sherpa culture',
        'Trek through the stunning Khumbu region',
        'Views of Mt. Everest, Lhotse, and Ama Dablam',
        'Explore Namche Bazaar, the gateway to Everest'
      ],
      image: 'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '12-14 Days',
      difficulty: 'Moderate to Challenging',
      maxAltitude: '5,545m',
      bestSeason: 'Mar - May, Oct - Nov',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Lukla',
      price: 2900
    },
    {
      id: 'annapurna-base-camp',
      title: 'Annapurna Base Camp Trek',
      subtitle: 'Journey to the heart of the Annapurna Sanctuary',
      overview: 'The Annapurna Base Camp trek leads you into the heart of the Annapurna Sanctuary, a natural amphitheater surrounded by peaks over 7,000m. Trek through diverse landscapes from lush rhododendron forests to glacial basins, experiencing the rich Gurung culture while witnessing some of the most spectacular mountain scenery in Nepal.',
      highlights: [
        'Reach Annapurna Base Camp (4,130m)',
        'Sunrise over the Annapurna massif',
        'Trek through diverse ecosystems',
        'Experience Gurung culture and villages',
        'Relax in Jhinu Danda hot springs',
        'Views of Machapuchare (Fish Tail)',
        'Explore traditional mountain villages'
      ],
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '10-12 Days',
      difficulty: 'Moderate',
      maxAltitude: '4,130m',
      bestSeason: 'Mar - May, Oct - Nov',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Pokhara',
      price: 2500
    },
    {
      id: 'everest-three-pass',
      title: 'Everest Three High Passes Trek',
      subtitle: 'The ultimate Everest region adventure',
      overview: 'The Three High Passes Trek is the ultimate Himalayan adventure, designed for experienced trekkers seeking the most comprehensive Everest experience. This challenging route takes you across three spectacular passes - Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,340m), while also including Everest Base Camp, Kala Patthar, and the stunning Gokyo Lakes.',
      highlights: [
        'Cross three challenging passes over 5,300m',
        'Summit Kala Patthar (5,545m) for sunrise',
        'Visit Everest Base Camp and Gokyo Lakes',
        'Trek through remote Nangpa Valley',
        'Climb Gokyo Ri for panoramic views',
        'Experience authentic Sherpa culture',
        'Visit ancient Tengboche Monastery'
      ],
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '20-22 Days',
      difficulty: 'Challenging',
      maxAltitude: '5,545m',
      bestSeason: 'Mar - May, Oct - Nov',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Lukla',
      price: 4300
    },
    {
      id: 'manaslu-circuit',
      title: 'Manaslu Circuit Trek',
      subtitle: 'Adventure around the eighth highest mountain',
      overview: 'The Manaslu Circuit Trek is a spectacular journey around Mount Manaslu (8,163m), the eighth highest mountain in the world. This restricted area trek offers pristine mountain views, rich Buddhist culture, and a challenging pass crossing. Experience the beauty of a less-traveled route that combines the best of Nepal\'s natural and cultural heritage.',
      highlights: [
        'Cross the challenging Larkya La Pass (5,160m)',
        'Circuit around Mt. Manaslu (8,163m)',
        'Experience authentic Tibetan culture',
        'Trek through remote villages',
        'Visit ancient Buddhist monasteries',
        'Diverse landscapes and ecosystems',
        'Less crowded alternative to popular treks'
      ],
      image: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '14-16 Days',
      difficulty: 'Challenging',
      maxAltitude: '5,160m',
      bestSeason: 'Mar - May, Oct - Nov',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Soti Khola',
      price: 3200
    },
    {
      id: 'langtang-valley',
      title: 'Langtang Valley Trek',
      subtitle: 'Valley of glaciers and mountain views',
      overview: 'The Langtang Valley Trek offers an incredible experience in a valley known as the "Valley of Glaciers." Located close to Kathmandu, this trek features diverse landscapes, from lush forests to high-altitude meadows, and provides insights into the unique Tamang culture while showcasing spectacular views of the Langtang range.',
      highlights: [
        'Visit Kyanjin Gompa (3,870m)',
        'Climb Kyanjin Ri (4,773m)',
        'Experience Tamang culture',
        'View stunning glaciers',
        'Trek through rhododendron forests',
        'Visit traditional villages',
        'Optional climb to Tserko Ri (4,984m)'
      ],
      image: 'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '7-10 Days',
      difficulty: 'Moderate',
      maxAltitude: '4,984m',
      bestSeason: 'Mar - May, Oct - Nov',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Syabrubesi',
      price: 1800
    },
    {
      id: 'upper-mustang',
      title: 'Upper Mustang Trek',
      subtitle: 'Journey through the hidden kingdom',
      overview: 'Upper Mustang, the former Kingdom of Lo, is a restricted area that preserves one of the last vestiges of traditional Tibetan Buddhist culture. Trek through an arid landscape of colorful rock formations, ancient cave monasteries, and walled cities. This unique trek offers insights into a preserved medieval Tibetan kingdom.',
      highlights: [
        'Explore the walled city of Lo Manthang',
        'Visit ancient Buddhist monasteries',
        'Witness preserved Tibetan culture',
        'See dramatic desert landscapes',
        'Discover ancient cave dwellings',
        'Experience traditional festivals',
        'View the Annapurna and Dhaulagiri ranges'
      ],
      image: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '14-16 Days',
      difficulty: 'Moderate',
      maxAltitude: '3,840m',
      bestSeason: 'Jun - Sep',
      accommodation: 'Basic Teahouse/Lodge',
      startEndPoint: 'Jomsom',
      price: 3500
    },
    {
      id: 'gokyo-ri',
      title: 'Gokyo Lakes Trek',
      subtitle: 'Journey to the world\'s highest freshwater lake system',
      overview: 'The Gokyo Lakes Trek takes you to the world\'s highest freshwater lake system, offering a spectacular alternative to the classic Everest Base Camp route. Witness the turquoise Gokyo Lakes, climb Gokyo Ri for panoramic views of four 8,000m peaks, and cross the massive Ngozumpa Glacier, the longest glacier in Nepal.',
      highlights: [
        'Visit the pristine Gokyo Lakes (4,700-5,000m)',
        'Climb Gokyo Ri (5,357m)',
        'Cross Ngozumpa Glacier',
        'View four 8,000m peaks',
        'Trek through Sherpa villages',
        'Visit Tengboche Monastery',
        'Experience unique mountain culture'
      ],
      image: 'https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '12-14 Days',
      difficulty: 'Moderate to Challenging',
      maxAltitude: '5,357m',
      bestSeason: 'Mar - May, Oct - Nov',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Lukla',
      price: 2600
    },
    {
      id: 'khopra-ridge',
      title: 'Khopra Ridge Trek',
      subtitle: 'Off-the-beaten-path Annapurna adventure',
      overview: 'The Khopra Ridge Trek (also known as Khopra Danda) is a hidden gem in the Annapurna region, offering a less crowded alternative with spectacular views of the Annapurna and Dhaulagiri ranges. This trek combines traditional villages, pristine forests, and high alpine ridges with the opportunity to visit sacred Khayer Lake.',
      highlights: [
        'Panoramic views from Khopra Ridge',
        'Visit sacred Khayer Lake (4,500m)',
        'Authentic village experiences',
        'Pristine rhododendron forests',
        'Views of Annapurna South',
        'Traditional Gurung culture',
        'Less crowded trail experience'
      ],
      image: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '8-10 Days',
      difficulty: 'Moderate',
      maxAltitude: '4,500m',
      bestSeason: 'Mar - May, Oct - Nov',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Nayapul',
      price: 1900
    },
    {
      id: 'mardi-himal',
      title: 'Mardi Himal Trek',
      subtitle: 'Hidden gem in the Annapurna region',
      overview: 'The Mardi Himal Trek is an off-the-beaten-path adventure that takes you to the base camp of Mardi Himal (5,587m), located east of the Annapurna Base Camp. This hidden gem offers stunning close-up views of Mardi Himal, Machapuchare (Fishtail), Annapurna South, and Hiunchuli. The trail winds through charming villages, rhododendron forests, and high alpine terrain.',
      highlights: [
        'Spectacular views of Machapuchare (Fishtail)',
        'Less crowded alternative trek',
        'Beautiful rhododendron forests',
        'Traditional Gurung villages',
        'High Camp sunrise views',
        'Close-up mountain panoramas',
        'Authentic local experiences'
      ],
      image: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '8-9 Days',
      difficulty: 'Moderate',
      maxAltitude: '4,500m (High Camp)',
      bestSeason: 'Mar - May, Oct - Dec',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Pokhara',
      price: 1200
    },
    {
      id: 'pikey-peak',
      title: 'Pikey Peak Trek',
      subtitle: 'Best viewpoint of Mount Everest in Lower Khumbu',
      overview: 'The Pikey Peak trek offers one of the finest viewpoints of Mount Everest and the Khumbu region without the crowds. Sir Edmund Hillary himself considered the view from Pikey Peak to be the best of Everest. This short but rewarding trek takes you through authentic Sherpa villages, ancient monasteries, and pristine forests while providing spectacular panoramic views of the Himalayan range.',
      highlights: [
        'Panoramic views of Everest and Khumbu range',
        'Less crowded authentic experience',
        'Rich Sherpa culture and monasteries',
        'Beautiful rhododendron forests',
        'Sunrise view from Pikey Peak',
        'Traditional mountain villages',
        'Short but rewarding trek'
      ],
      image: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      duration: '5-7 Days',
      difficulty: 'Moderate',
      maxAltitude: '4,065m',
      bestSeason: 'Mar - May, Oct - Nov',
      accommodation: 'Teahouse/Lodge',
      startEndPoint: 'Dhap',
      price: 1100
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Nepal Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/70"></div>
        </motion.div>

        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Discover Nepal's Finest Treks
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              From classic routes to hidden gems, explore the world's most spectacular mountain trails
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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
          <div className="flex justify-center">
            <div className="text-lg font-medium text-[#F28C38] border-b-2 border-[#F28C38]">
              TREKKING
            </div>
          </div>
        </div>
      </div>

      {/* Trek Cards */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="trek-swiper !pb-12"
          >
            {treks.map((trek) => (
              <SwiperSlide key={trek.id} className="h-auto flex">
                <Link to={`/trekking/${trek.id}`} className="block w-full">
                  <div className="bg-gray-800 rounded-lg overflow-hidden h-[600px] flex flex-col">
                    <div className="relative h-[200px] flex-shrink-0">
                      <img
                        src={trek.image}
                        alt={trek.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F28C38] transition-colors">
                          {trek.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">{trek.subtitle}</p>
                        <p className="text-gray-300 mb-4 text-sm line-clamp-3">{trek.overview}</p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-[#F28C38] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="truncate">{trek.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-[#F28C38] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            <span className="truncate">{trek.maxAltitude}</span>
                          </div>
                          <div className="flex items-center text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-[#F28C38] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="truncate">{trek.difficulty}</span>
                          </div>
                          <div className="flex items-center text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-[#F28C38] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="truncate">{trek.bestSeason}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="border-t border-gray-700 pt-3">
                          <h4 className="text-base font-semibold text-white mb-2">Highlights</h4>
                          <ul className="text-gray-300 text-sm space-y-1.5">
                            {trek.highlights.slice(0, 3).map((highlight, index) => (
                              <li key={index} className="flex items-center">
                                <svg className="w-3.5 h-3.5 text-[#F28C38] mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="line-clamp-1">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <span className="text-xl font-bold text-white">
                            ${trek.price}
                          </span>
                          <button className="bg-[#F28C38] text-white px-4 py-1.5 rounded-lg hover:bg-[#E67D29] transition duration-300 text-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TrekkingPage;