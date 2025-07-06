import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3',
    title: 'Climb Everest',
    subtitle: 'The Roof of the World',
    banner: 'BOOKING FOR 2026 NOW OPEN'
  },
  {
    url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3',
    title: 'Climb Ama Dablam',
    subtitle: 'The Most Beautiful Mountain',
    banner: 'SPRING 2026 BOOKING OPEN'
  },
  {
    url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3',
    title: 'Climb Manaslu',
    subtitle: 'The Spirit Mountain',
    banner: 'AUTUMN 2026 BOOKING OPEN'
  },
  {
    url: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3',
    title: 'Climb Annapurna',
    subtitle: 'Goddess of the Harvests',
    banner: 'EXPEDITIONS 2026 OPEN'
  },
  {
    url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3',
    title: 'Climb Dhaulagiri',
    subtitle: 'The White Mountain',
    banner: 'JOIN US IN 2026'
  }
];

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={image.url}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center px-20">
                {image.banner && (
                  <div className="bg-[#F28C38] text-white px-4 py-2 text-sm font-medium mb-6">
                    {image.banner}
                  </div>
                )}
                <h1 className="text-7xl font-bold text-white mb-4">
                  {image.title}
                </h1>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-[#F28C38] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F28C38" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  <p className="text-xl text-[#F28C38] font-mono">{image.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero; 