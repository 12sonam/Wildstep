import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import Hero from '../components/Hero';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required Swiper modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Image URLs (replace with your actual high-quality images)
const heroImage = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3';
const climberImage = 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3';
const skillsImage = 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3';

const adventures = [
  { 
    title: 'Mount Everest Expedition',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3'
  },
  { 
    title: 'Ama Dablam Expedition',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3'
  },
  { 
    title: 'Manaslu Expedition',
    image: 'https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3'
  },
  { 
    title: 'Everest Base Camp Trek',
    image: 'https://images.unsplash.com/photo-1594750852563-5ed8e0428c3b?ixlib=rb-4.0.3'
  },
  { 
    title: 'Annapurna Base Camp Trek',
    image: 'https://images.unsplash.com/photo-1579691099788-a5e8575cc6eb?ixlib=rb-4.0.3'
  },
  { 
    title: 'Manaslu Circuit Trek',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3'
  },
  { 
    title: 'Langtang Valley Trek',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3'
  },
  { 
    title: 'Annapurna Circuit Trek',
    image: 'https://images.unsplash.com/photo-1579691099788-a5e8575cc6eb?ixlib=rb-4.0.3'
  },
  { 
    title: 'Island Peak Expedition',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3'
  },
  { 
    title: 'Mera Peak Expedition',
    image: 'https://images.unsplash.com/photo-1579691099788-a5e8575cc6eb?ixlib=rb-4.0.3'
  },
  { 
    title: 'Gokyo Lakes Trek',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3'
  },
  { 
    title: 'Upper Mustang Trek',
    image: 'https://images.unsplash.com/photo-1579691099788-a5e8575cc6eb?ixlib=rb-4.0.3'
  },
  { 
    title: 'Kanchenjunga Base Camp Trek',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3'
  },
  { 
    title: 'Advanced Mountaineering Course',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3'
  }
];

const leaders = [
  { name: 'Leader 1', title: 'Lead Guide', image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3' },
  { name: 'Leader 2', title: 'Senior Guide', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3' },
  { name: 'Leader 3', title: 'Technical Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3' },
];

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      {/* Adventure options section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-gray-700 mb-4">
              Choose your<br />next adventure
            </h2>
            <div className="w-24 h-1 bg-[#F28C38]"></div>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next'
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="adventure-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
          >
            {adventures.map((adventure, index) => (
              <SwiperSlide key={adventure.title}>
                <div className="relative group cursor-pointer h-[500px] overflow-hidden rounded-lg">
                  <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white">{adventure.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-4 mt-8">
            <button className="custom-prev w-12 h-12 rounded-full border-2 border-[#F28C38] flex items-center justify-center hover:bg-[#F28C38] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="custom-next w-12 h-12 rounded-full border-2 border-[#F28C38] flex items-center justify-center hover:bg-[#F28C38] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Featured content */}
      <div className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img
                src={climberImage}
                alt="Climbers on steep slope"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#F28C38]">Conquer the Heights</h2>
              <p className="text-lg mb-8">
                Join our expert team for an unforgettable ascent, guided every step of the way.
                Our experienced mountaineers ensure your safety while pushing the boundaries of what's possible.
              </p>
              <button className="px-8 py-3 bg-[#F28C38] text-white rounded-md hover:bg-[#E07B27] transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#F28C38]">Master Your Skills</h2>
              <p className="text-lg mb-8">
                From basic mountaineering to advanced alpine techniques, develop your skills
                with our comprehensive training programs led by world-class instructors.
              </p>
              <button className="px-8 py-3 bg-[#F28C38] text-white rounded-md hover:bg-[#E07B27] transition-colors">
                Explore Training
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img
                src={skillsImage}
                alt="Mountain skills training"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Foundation section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#F28C38] mb-6">Peak Foundation</h2>
            <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
              5% of all proceeds support local mountain communities through education,
              conservation, and sustainable development initiatives.
            </p>
            <button className="px-8 py-3 bg-[#F28C38] text-white rounded-md hover:bg-[#E07B27] transition-colors">
              Support Our Cause
            </button>
          </motion.div>
        </div>
      </div>

      {/* Leadership team */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#F28C38] text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                <p className="text-[#F28C38]">{leader.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;