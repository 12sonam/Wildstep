import React, { createContext, useContext, useState } from 'react';

const TrekContext = createContext();

export function TrekProvider({ children }) {
  const [swiper, setSwiper] = useState(null);

  const scrollToTrek = (trekId) => {
    const treks = [
      'everest-base-camp',
      'annapurna-base-camp',
      'everest-three-pass',
      'manaslu-circuit',
      'langtang-valley',
      'upper-mustang',
      'gokyo-lakes',
      'khopra-ridge'
    ];
    
    const trekIndex = treks.indexOf(trekId);
    if (trekIndex !== -1 && swiper) {
      swiper.slideTo(trekIndex);
    }
  };

  return (
    <TrekContext.Provider value={{ swiper, setSwiper, scrollToTrek }}>
      {children}
    </TrekContext.Provider>
  );
}

export function useTrekContext() {
  const context = useContext(TrekContext);
  if (!context) {
    throw new Error('useTrekContext must be used within a TrekProvider');
  }
  return context;
} 