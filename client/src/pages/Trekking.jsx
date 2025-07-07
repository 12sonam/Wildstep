import React, { useState, useEffect } from 'react';
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
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const treks = [
    {
      id: 'everest-base-camp',
      category: 'TREK',
      title: 'Everest Base Camp',
      description: 'The trek to Everest Base Camp is the world\'s most famous Himalayan adventure, offering stunning views of Mount Everest and surrounding peaks.',
      image: 'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 2900,
      season: 'Oct - Nov',
      duration: '12-14 days',
      difficulty: 'Moderate',
      altitude: '5,364m'
    },
    {
      id: 'annapurna-base-camp',
      category: 'TREK',
      title: 'Annapurna Base Camp',
      description: 'The trek to Annapurna Base Camp is a classic Himalayan journey, offering a perfect blend of mountain views and cultural experiences.',
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 2500,
      season: 'Oct - Nov',
      duration: '10-12 days',
      difficulty: 'Moderate',
      altitude: '4,130m'
    },
    {
      id: 'everest-three-pass',
      category: 'TREK',
      title: 'Everest Three Pass',
      description: 'Challenge yourself with the ultimate high-altitude trek in the Everest region, crossing three passes over 5,000m.',
      image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 4300,
      season: 'Oct - Nov',
      duration: '18-20 days',
      difficulty: 'Challenging',
      altitude: '5,535m'
    },
    {
      id: 'manaslu-circuit',
      category: 'TREK',
      title: 'Manaslu Circuit',
      description: 'Trek around the eighth highest mountain in the world, experiencing pristine landscapes and authentic village life.',
      image: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 3200,
      season: 'Oct - Nov',
      duration: '14-16 days',
      difficulty: 'Challenging',
      altitude: '5,160m'
    },
    {
      id: 'langtang-valley',
      category: 'TREK',
      title: 'Langtang Valley',
      description: 'Discover the valley of glaciers, pristine mountain landscapes, and rich Tamang culture.',
      image: 'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 1800,
      season: 'Oct - Nov',
      duration: '7-9 days',
      difficulty: 'Moderate',
      altitude: '4,380m'
    },
    {
      id: 'upper-mustang',
      category: 'TREK',
      title: 'Upper Mustang',
      description: 'Journey through the hidden kingdom of Lo, featuring dramatic landscapes and preserved Tibetan culture.',
      image: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 3500,
      season: 'Jun - Sep',
      duration: '12-14 days',
      difficulty: 'Moderate',
      altitude: '3,840m'
    },
    {
      id: 'gokyo-lakes',
      category: 'TREK',
      title: 'Gokyo Lakes',
      description: 'Trek to the world\'s highest freshwater lake system, offering spectacular views of four 8,000m peaks.',
      image: 'https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 2600,
      season: 'Oct - Nov',
      duration: '12-14 days',
      difficulty: 'Moderate',
      altitude: '5,357m'
    },
    {
      id: 'khopra-ridge',
      category: 'TREK',
      title: 'Khopra Ridge Trek',
      description: 'A hidden gem offering panoramic views of the Annapurna and Dhaulagiri ranges.',
      image: 'https://images.unsplash.com/photo-1570731617731-fb0aa4d9b9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 1800,
      season: 'Oct - Nov',
      duration: '8-10 days',
      difficulty: 'Moderate',
      altitude: '3,660m'
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
            src="https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Nepal Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
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
            <div
              className="text-lg font-medium text-[#F28C38] border-b-2 border-[#F28C38]"
            >
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
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="trek-swiper"
          >
            {treks.map((trek) => (
              <SwiperSlide key={trek.id}>
                <Link to={`/trekking/${trek.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 rounded-lg overflow-hidden group h-full flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-[250px] overflow-hidden">
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
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2 line-clamp-1 group-hover:text-[#F28C38] transition-colors">{trek.title}</h3>
                      <p className="text-gray-300 mb-4 flex-grow line-clamp-2">{trek.description}</p>
                      
                      {/* Trek Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-400">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                          </svg>
                          <span className="line-clamp-1">{trek.season}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" />
                          </svg>
                          <span className="line-clamp-1">{trek.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                          </svg>
                          <span className="line-clamp-1">{trek.difficulty}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                          <span className="line-clamp-1">{trek.altitude}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <div className="text-[#F28C38] font-bold text-xl">
                          USD ${trek.price}
                        </div>
                        <span className="bg-[#F28C38] text-white px-6 py-2 rounded-full group-hover:bg-[#E67D29] transition duration-300">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </motion.div>
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