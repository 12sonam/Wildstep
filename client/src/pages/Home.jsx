import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import Hero from '../components/Hero';

// Image URLs (replace with your actual high-quality images)
const heroImage = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3';
const climberImage = 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3';
const skillsImage = 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3';

const adventures = [
  { title: 'Climb Everest', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3' },
  { title: 'Trek Annapurna', image: 'https://images.unsplash.com/photo-1594750852563-5ed8e0428c3b?ixlib=rb-4.0.3' },
  { title: 'Climb K2', image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3' },
  { title: 'All 8000m Peaks', image: 'https://images.unsplash.com/photo-1579691099788-a5e8575cc6eb?ixlib=rb-4.0.3' },
  { title: 'Polar Expedition', image: 'https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3' },
  { title: 'Himalayan Training', image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3' },
];

const leaders = [
  { name: 'Leader 1', title: 'Lead Guide', image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3' },
  { name: 'Leader 2', title: 'Senior Guide', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3' },
  { name: 'Leader 3', title: 'Technical Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3' },
];

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      {/* Adventure options section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#F28C38] text-center mb-12">
            Choose Your Next Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure, index) => (
              <motion.div
                key={adventure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{adventure.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured content */}
      <div className="relative py-20">
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
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Conquer the Heights</h2>
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
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Master Your Skills</h2>
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
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Foundation section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#F28C38] mb-6">Peak Foundation</h2>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
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