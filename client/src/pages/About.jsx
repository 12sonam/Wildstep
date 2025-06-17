import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">About WildSteps</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary-600">Our Story</h2>
            <p className="text-gray-600">
              Founded by passionate mountaineers and adventure enthusiasts, WildSteps has been leading expeditions 
              and treks to some of the world's most breathtaking destinations since 2015. Our mission is to provide 
              safe, sustainable, and unforgettable mountain experiences while preserving the natural environment 
              and supporting local communities.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary-600">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold">Safety First</h3>
                  <p className="text-gray-600">Your safety is our top priority. Our guides are highly trained and certified.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold">Environmental Responsibility</h3>
                  <p className="text-gray-600">We follow Leave No Trace principles and promote sustainable tourism.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold">Community Support</h3>
                  <p className="text-gray-600">We work closely with local communities and support their development.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary-600">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Expert Guides</h3>
                <p className="text-gray-600">Professional guides with years of experience and local knowledge.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Small Groups</h3>
                <p className="text-gray-600">Intimate group sizes for better attention and experience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Quality Equipment</h3>
                <p className="text-gray-600">Top-notch gear and equipment for your safety and comfort.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance before and during your adventure.</p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Our Numbers</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-primary-600">500+</p>
                  <p className="text-gray-600">Successful Expeditions</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-600">5000+</p>
                  <p className="text-gray-600">Happy Adventurers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-600">50+</p>
                  <p className="text-gray-600">Unique Routes</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-600">15+</p>
                  <p className="text-gray-600">Expert Guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 