import React, { createContext, useContext, useState } from 'react';

const ExpeditionContext = createContext();

const mockExpeditions = [
  {
    _id: '1',
    title: 'Mount Everest Expedition',
    subtitle: 'Summit the World\'s Highest Peak',
    description: 'Join our expert-led expedition to the summit of Mount Everest (8,848m). Experience the ultimate mountaineering challenge with comprehensive support and world-class guides.',
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-4.0.3',
    duration: '60 Days',
    altitude: '8,848m',
    difficulty: 'Extreme',
    season: 'Spring',
    price: 65000,
    highlights: [
      'Professional Western and Sherpa guides',
      'Complete logistics and oxygen support',
      'Advanced base camp facilities'
    ]
  },
  {
    _id: '2',
    title: 'Ama Dablam Expedition',
    subtitle: 'The Matterhorn of the Himalayas',
    description: 'Climb one of the most beautiful and technical mountains in the world. At 6,812m, Ama Dablam stands with a distinctive shape and offers a true alpine climbing experience.',
    image: 'https://images.unsplash.com/photo-1577197646146-8e20f21d2a1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '30 Days',
    altitude: '6,812m',
    difficulty: 'Technical',
    season: 'Autumn',
    price: 35000,
    highlights: [
      'Technical alpine climbing experience',
      'Spectacular views of Everest region',
      'Professional climbing guides and equipment'
    ]
  },
  {
    _id: '3',
    title: 'Manaslu Expedition',
    subtitle: 'The Mountain of the Spirit',
    description: 'Climb the eighth-highest mountain (8,163m) in a less crowded but equally rewarding expedition. Perfect for those seeking a pure climbing experience.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3',
    duration: '45 Days',
    altitude: '8,163m',
    difficulty: 'Very Hard',
    season: 'Autumn',
    price: 45000,
    highlights: [
      'Experienced climbing guides',
      'Full base camp facilities',
      'Cultural interaction opportunities'
    ]
  }
];

export function ExpeditionProvider({ children }) {
  const [expeditions] = useState(mockExpeditions);

  return (
    <ExpeditionContext.Provider value={{ expeditions }}>
      {children}
    </ExpeditionContext.Provider>
  );
}

export function useExpeditionContext() {
  const context = useContext(ExpeditionContext);
  if (!context) {
    throw new Error('useExpeditionContext must be used within an ExpeditionProvider');
  }
  return context;
} 