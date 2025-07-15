import React, { createContext, useContext, useState } from 'react';

const TrekContext = createContext();

export function TrekProvider({ children }) {
  const [swiper, setSwiper] = useState(null);
  const [expeditions] = useState([
    {
      id: 'everest',
      name: 'Mount Everest',
      description: 'Mount Everest, known to locals as Sagarmatha, is undoubtedly on the bucket list of every adventurer. Who wouldn\'t want to conquer the highest mountain on the planet?',
      image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop',
      altitude: 8848.86,
      duration: 55,
      country: 'Nepal',
      grade: 'Strenuous 4E',
      season: 'Spring & Summer',
      price: 45000,
      dates: '10 Apr - 04 May',
      requirements: 'Aimed at climbers who\'ve made multiple ascents of 6,000m and 7,000m peaks, as well as one 8,000er, and are already proficient in mountaineering skills - including moving safely in moderate rock, glacier, and snowy terrain.',
      difficulty: 'Technical',
      success_rate: '65%',
      group_size: '4-8 climbers',
      guide_ratio: '1:4',
      oxygen_used: true,
      base_camp_alt: '5,364m',
      summit_success_window: '10-15 days',
      physical_rating: 5,
      technical_rating: 4,
      acclimatization_days: 12,
      total_distance: '120km round trip',
      highlights: [
        'Summit the world\'s highest peak at 8,848.86m',
        'Experience the historic Khumbu Icefall',
        'Cross the famous Hillary Step',
        'Trek through Sherpa villages and monasteries',
        'Witness breathtaking Himalayan panoramas'
      ],
      included_services: [
        'Professional IFMGA/UIAGM mountain guides',
        'All permits and fees',
        'Supplemental oxygen and mask',
        'High-altitude gear and equipment',
        'Base camp facilities and services',
        'Sherpa support team',
        'All meals during the expedition',
        'Emergency medical support and evacuation insurance'
      ],
      required_experience: [
        'Previous 8000m peak experience',
        'Strong ice climbing skills',
        'Advanced crampon techniques',
        'High-altitude experience above 7000m',
        'Excellent physical conditioning'
      ],
      weather_conditions: {
        temperature_range: '-40°C to -10°C',
        wind_speeds: 'Up to 160km/h',
        precipitation: 'Snow and high winds common',
        best_weather_window: 'May'
      },
      itinerary: [
        { 
          day: 1, 
          title: 'Arrival in Kathmandu & transfer to hotel',
          description: 'Meet your expedition team and attend welcome briefing',
          altitude: '1,400m',
          accommodation: 'Luxury Hotel',
          meals: 'Welcome Dinner'
        },
        { 
          day: 2, 
          title: 'Preparation and briefing in Kathmandu',
          description: 'Equipment check and permit processing',
          altitude: '1,400m',
          accommodation: 'Luxury Hotel',
          meals: 'Full Board'
        },
        { 
          day: 3, 
          title: 'Fly to Lukla and trek to Phakding',
          description: 'Scenic mountain flight and begin trek',
          altitude: '2,800m',
          accommodation: 'Mountain Lodge',
          meals: 'Full Board'
        },
        { 
          day: 9, 
          title: 'Trek to Lobuche',
          description: 'Challenging high-altitude trek',
          altitude: '4,910m',
          accommodation: 'Mountain Lodge',
          meals: 'Full Board'
        },
        { 
          day: 10, 
          title: 'Trek to Everest Base Camp',
          description: 'Arrive at the historic base camp',
          altitude: '5,364m',
          accommodation: 'Base Camp',
          meals: 'Full Board'
        }
      ],
      training_camps: [
        {
          location: 'Khumbu Glacier',
          duration: '5 days',
          focus: 'Ice climbing and crevasse rescue'
        },
        {
          location: 'Camp 2',
          duration: '3 days',
          focus: 'Acclimatization and technical skills'
        }
      ]
    },
    {
      id: 'ama-dablam',
      name: 'Ama Dablam',
      description: 'Known as the "Matterhorn of the Himalayas", Ama Dablam stands as one of the most technically challenging and aesthetically pleasing climbs in the world.',
      image: 'https://images.unsplash.com/photo-1626519593160-655814502a91?q=80&w=2070&auto=format&fit=crop',
      altitude: 6812,
      duration: 30,
      country: 'Nepal',
      grade: 'Technical 5C',
      season: 'Autumn',
      price: 35000,
      dates: '15 Oct - 15 Nov',
      requirements: 'Suitable for experienced climbers with strong technical skills in rock and ice climbing. Previous experience at altitudes above 6000m is required.',
      difficulty: 'Highly Technical',
      success_rate: '75%',
      group_size: '2-4 climbers',
      guide_ratio: '1:2',
      oxygen_used: false,
      base_camp_alt: '4,570m',
      summit_success_window: '5-7 days',
      physical_rating: 4,
      technical_rating: 5,
      acclimatization_days: 8,
      total_distance: '80km round trip',
      highlights: [
        'Summit one of the most beautiful mountains in the world',
        'Technical climbing on rock, ice, and snow',
        'Spectacular views of Everest and Lhotse',
        'Experience Sherpa culture and hospitality',
        'Advanced alpine climbing techniques'
      ],
      included_services: [
        'Professional IFMGA/UIAGM guides',
        'All climbing permits',
        'Technical climbing equipment',
        'Base camp facilities',
        'Advanced medical support',
        'All meals during expedition',
        'Porter support',
        'Emergency evacuation insurance'
      ],
      required_experience: [
        'Rock climbing (5.10 standard)',
        'Ice climbing (WI4)',
        'Experience above 6000m',
        'Strong rappelling skills',
        'Mixed climbing ability'
      ],
      weather_conditions: {
        temperature_range: '-25°C to 0°C',
        wind_speeds: 'Up to 80km/h',
        precipitation: 'Generally stable in autumn',
        best_weather_window: 'October-November'
      },
      itinerary: [
        { 
          day: 1, 
          title: 'Arrival in Kathmandu',
          description: 'Team meeting and equipment check',
          altitude: '1,400m',
          accommodation: 'Luxury Hotel',
          meals: 'Welcome Dinner'
        },
        { 
          day: 2, 
          title: 'Preparation and briefing',
          description: 'Final gear check and route planning',
          altitude: '1,400m',
          accommodation: 'Luxury Hotel',
          meals: 'Full Board'
        },
        { 
          day: 3, 
          title: 'Fly to Lukla and trek to Phakding',
          description: 'Begin approach trek',
          altitude: '2,800m',
          accommodation: 'Mountain Lodge',
          meals: 'Full Board'
        },
        { 
          day: 4, 
          title: 'Trek to Namche Bazaar',
          description: 'Acclimatization in Sherpa capital',
          altitude: '3,440m',
          accommodation: 'Mountain Lodge',
          meals: 'Full Board'
        }
      ],
      training_camps: [
        {
          location: 'Yellow Tower',
          duration: '3 days',
          focus: 'Technical rock climbing'
        },
        {
          location: 'Camp 1',
          duration: '2 days',
          focus: 'Ice and mixed climbing'
        }
      ]
    },
    {
      id: 'manaslu',
      name: 'Manaslu',
      description: 'The eighth highest mountain in the world, Manaslu offers a less crowded but equally challenging alternative to the more popular 8000m peaks.',
      image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=2070&auto=format&fit=crop',
      altitude: 8163,
      duration: 45,
      country: 'Nepal',
      grade: 'Strenuous 4D',
      season: 'Spring & Autumn',
      price: 38000,
      dates: '01 Sep - 15 Oct',
      requirements: 'Previous experience of climbing at least one 7000m peak and strong mountaineering skills are essential.',
      difficulty: 'Very Strenuous',
      success_rate: '70%',
      group_size: '4-6 climbers',
      guide_ratio: '1:3',
      oxygen_used: true,
      base_camp_alt: '4,800m',
      summit_success_window: '8-12 days',
      physical_rating: 5,
      technical_rating: 4,
      acclimatization_days: 10,
      total_distance: '100km round trip',
      highlights: [
        'Summit the world\'s eighth highest peak',
        'Less crowded than other 8000m peaks',
        'Rich cultural experience in remote Nepal',
        'Challenging glacier travel',
        'Spectacular base camp setting'
      ],
      included_services: [
        'Experienced high-altitude guides',
        'All permits and fees',
        'Supplemental oxygen system',
        'Base camp facilities',
        'Medical support',
        'All meals on expedition',
        'Porter support',
        'Emergency evacuation coverage'
      ],
      required_experience: [
        '7000m peak experience',
        'Strong glacier travel skills',
        'Experience with supplemental oxygen',
        'Advanced crampon techniques',
        'Good physical conditioning'
      ],
      weather_conditions: {
        temperature_range: '-30°C to -5°C',
        wind_speeds: 'Up to 120km/h',
        precipitation: 'Variable conditions',
        best_weather_window: 'September-October'
      },
      itinerary: [
        { 
          day: 1, 
          title: 'Arrive in Kathmandu',
          description: 'Team orientation and briefing',
          altitude: '1,400m',
          accommodation: 'Luxury Hotel',
          meals: 'Welcome Dinner'
        },
        { 
          day: 2, 
          title: 'Preparation day',
          description: 'Equipment check and permit processing',
          altitude: '1,400m',
          accommodation: 'Luxury Hotel',
          meals: 'Full Board'
        },
        { 
          day: 3, 
          title: 'Drive to Soti Khola',
          description: 'Begin approach journey',
          altitude: '700m',
          accommodation: 'Local Lodge',
          meals: 'Full Board'
        },
        { 
          day: 4, 
          title: 'Trek to Machha Khola',
          description: 'First day of trekking',
          altitude: '930m',
          accommodation: 'Mountain Lodge',
          meals: 'Full Board'
        }
      ],
      training_camps: [
        {
          location: 'Camp 1',
          duration: '4 days',
          focus: 'Acclimatization and glacier travel'
        },
        {
          location: 'Camp 2',
          duration: '3 days',
          focus: 'High-altitude endurance'
        }
      ]
    }
  ]);

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
    <TrekContext.Provider value={{ swiper, setSwiper, scrollToTrek, expeditions }}>
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

export function useExpeditionContext() {
  const context = useContext(TrekContext);
  if (!context) {
    throw new Error('useExpeditionContext must be used within a TrekProvider');
  }
  return context;
} 