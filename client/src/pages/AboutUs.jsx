import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522527488539-682fa7ac0a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Mountain Expedition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-[#F28C38] px-4 py-2 mb-6">
                <span className="text-white font-medium tracking-wider text-sm">ABOUT US</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
                Wild Steps.
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white max-w-3xl font-light leading-relaxed">
                Breath-taking, high-altitude adventures led by expert mountaineers and guides.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* About WildSteps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">WildSteps.</h2>
          <div className="w-16 h-1 bg-[#F28C38] mb-8"></div>
          <p className="text-gray-700 text-xl leading-relaxed max-w-4xl mb-16">
            Breath-taking, high-altitude adventures led by record-breaking mountaineers. We specialize in crafting extraordinary expeditions that combine unparalleled expertise with a deep commitment to safety and client success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3"
                alt="Mountain Peak"
                className="w-full h-[500px] object-cover mb-8"
              />
              <p className="text-gray-700 text-lg leading-relaxed">
                From the towering peaks of the Himalayas to the challenging routes of the Karakoram, our expeditions are designed for those who seek not just to reach summits, but to experience the true essence of high-altitude mountaineering.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3"
                alt="Climbers on Mountain"
                className="w-full h-[500px] object-cover mb-8"
              />
              <p className="text-gray-700 text-lg leading-relaxed">
                Every expedition is meticulously planned and executed by our team of experienced guides who have spent decades mastering these mountains. We maintain the highest standards of safety while pushing the boundaries of what's possible in high-altitude climbing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Safest Pair of Hands */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">The safest pair of hands possible</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We oversee every aspect of expedition planning and preparation to ensure that it meets our exacting safety standards. Our team's extensive experience allows us to keep everything in-house - from ferrying in food, to finding icefall routes, to managing our own equipment. This means we're never left reliant on third parties.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The success of this approach is reflected in our record - our expert guides maintain a 100% safety record on all high-altitude expeditions. We believe that thorough preparation and experienced leadership are the foundations of successful mountaineering.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1489049392670-5c28923b5608?ixlib=rb-4.0.3"
                alt="Mountain Safety"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* An Elite Leadership Team */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">An elite leadership team</h2>
          <div className="w-16 h-1 bg-[#F28C38] mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-16">
            Some direct operations from a back office. Our company directors prefer to lead in another way, from the front. Each expedition is personally led by our experienced team of mountaineers who have set records and made history in the Himalayas.
          </p>

          {/* First Leader */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3"
                alt="Phurdawa Sherpa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-5xl font-bold text-gray-800 mb-4">
                Phurdawa
                <br />
                Sherpa
              </h3>
              <div className="w-16 h-1 bg-[#F28C38] mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                With over two decades of high-altitude experience, Phurdawa has successfully guided more than 30 expeditions above 8,000m. His expertise includes multiple summits of Everest and K2, making him one of the most accomplished mountaineers in the Himalayas.
              </p>
              <Link 
                to="/team/phurdawa"
                className="inline-flex items-center text-[#F28C38] hover:text-[#F28C38]/80 transition-colors group"
              >
                <span className="mr-2 font-mono">Find out more</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Second Leader */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h3 className="text-5xl font-bold text-gray-800 mb-4">
                Dawa
                <br />
                Sherpa
              </h3>
              <div className="w-16 h-1 bg-[#F28C38] mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Long recognized as one of the finest mountain guides of his generation among the tight-knit Himalayan climbing community, Dawa has been the go-to expert for technical routes and first ascents. His recent achievements include leading successful expeditions on some of the world's most challenging peaks.
              </p>
              <Link 
                to="/team/dawa"
                className="inline-flex items-center text-[#F28C38] hover:text-[#F28C38]/80 transition-colors group"
              >
                <span className="mr-2 font-mono">Find out more</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1522527488539-682fa7ac0a3e?ixlib=rb-4.0.3"
                alt="Dawa Sherpa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Leading from the Front */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Leading from the front</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Mountain Leadership"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                While others might direct from a distance, our founders lead from the front. Our guides are born mountaineers and certified mountain experts who continue to lead expeditions every season. This hands-on approach ensures that every expedition benefits from direct, experienced leadership.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Wild Steps, we understand why you climb, because we feel the same way. Our shared passion for the mountains drives us to help you achieve your goals. We want to show you how it feels to stand on top of the world, and we'll be right there with you every step of the way.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Commitment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="text-[#F28C38] text-4xl mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">In-House Expertise</h3>
              <p className="text-gray-600">
                Every aspect of your expedition is handled by our experienced team, from logistics to safety equipment, ensuring the highest standards of quality and reliability.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="text-[#F28C38] text-4xl mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Direct Leadership</h3>
              <p className="text-gray-600">
                Our guides don't just manage from base camp - they climb with you, sharing their expertise and passion every step of the way.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="text-[#F28C38] text-4xl mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Safety Record</h3>
              <p className="text-gray-600">
                Our 100% safety record on high-altitude expeditions speaks to our unwavering commitment to your wellbeing in the mountains.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-800 mb-2">100%</div>
              <div className="text-gray-600">Safety Record</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">8000m Summits</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-600">Expert Guides</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-800 mb-2">1000+</div>
              <div className="text-gray-600">Happy Climbers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs; 