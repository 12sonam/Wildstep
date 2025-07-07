import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Trekking from './models/trekkingModel.js';
import { connectDB } from './config/db.js';

dotenv.config();

const treks = [
  {
    title: 'Everest Base Camp Trek',
    description: 'The trek to Everest Base Camp is the world\'s most famous Himalayan adventure, offering stunning views of Mount Everest and surrounding peaks.',
    image: 'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    region: 'Everest Region',
    duration: '12-14 days',
    difficulty: 'Moderate',
    maxAltitude: '5,364m',
    price: 2900,
    requiredFitness: 'Good physical fitness required',
    bestSeasons: ['March-May', 'September-November'],
    highlights: [
      'Stand at the base of Mount Everest',
      'Visit the famous Namche Bazaar',
      'Experience Sherpa culture',
      'Trek through stunning valleys',
      'View multiple 8,000m peaks',
      'Visit ancient monasteries'
    ],
    includes: [
      'All permits and fees',
      'Experienced guide and porters',
      'Accommodation in tea houses',
      'All meals during the trek',
      'Transportation to/from Lukla',
      'Emergency oxygen and medical kit'
    ],
    excludes: [
      'International flights',
      'Personal equipment',
      'Travel insurance',
      'Tips for guides and porters',
      'Personal expenses',
      'Drinks and snacks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Welcome to Nepal! Transfer to your hotel and evening briefing about the trek.',
        accommodation: 'Hotel in Kathmandu'
      },
      {
        day: 2,
        title: 'Fly to Lukla and Trek to Phakding',
        description: 'Early morning flight to Lukla (2,800m) and trek to Phakding (2,610m).',
        distance: '8km',
        elevation: '-190m',
        accommodation: 'Tea House in Phakding'
      },
      {
        day: 3,
        title: 'Trek to Namche Bazaar',
        description: 'Challenging ascent through pine forests to reach the famous Sherpa capital.',
        distance: '10km',
        elevation: '+800m',
        accommodation: 'Tea House in Namche'
      }
    ],
    trailFeatures: [
      'High altitude terrain',
      'Rocky paths',
      'Mountain passes',
      'River crossings'
    ]
  }
];

const importData = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await Trekking.deleteMany();
    
    // Insert new data
    await Trekking.insertMany(treks);
    
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

importData(); 