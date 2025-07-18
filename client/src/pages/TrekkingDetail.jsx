import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const treksData = {
  'everest-base-camp': {
    title: 'Everest Base Camp Trek',
    subtitle: 'Journey to the foot of the world\'s highest mountain',
    overview: 'The Everest Base Camp trek is one of the most iconic treks in the world. Journey through the Khumbu region, home to the Sherpa people, ancient Buddhist monasteries, and breathtaking Himalayan vistas. Walk in the footsteps of legendary mountaineers to reach the base of Mount Everest (8,848m) while experiencing the rich cultural heritage of the Sherpa people.',
    highlights: [
      'Stand at Everest Base Camp (5,364m)',
      'Sunrise view from Kala Patthar (5,545m)',
      'Visit the historic Tengboche Monastery',
      'Experience authentic Sherpa culture',
      'Trek through the stunning Khumbu region',
      'Views of Mt. Everest, Lhotse, and Ama Dablam',
      'Explore Namche Bazaar, the gateway to Everest'
    ],
    duration: '12-14 Days',
    difficulty: 'Moderate to Challenging',
    maxAltitude: '5,545m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse/Lodge',
    startEndPoint: 'Lukla',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Upon arrival at Tribhuvan International Airport, you\'ll be met by our representative and transferred to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Fly to Lukla (2,800m) and trek to Phakding (2,652m)',
        description: 'Early morning flight to Lukla. Begin trek through Dudh Koshi Valley to Phakding.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Challenging ascent through pine forests to the famous Sherpa capital of Namche Bazaar.'
      },
      {
        day: 'Day 4',
        title: 'Acclimatization Day in Namche Bazaar',
        description: 'Rest and acclimatization. Optional hike to Everest View Hotel for first views of Mount Everest.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Tengboche (3,870m)',
        description: 'Trek to Tengboche, home to the region\'s largest monastery with stunning mountain views.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Dingboche (4,360m)',
        description: 'Ascend through rhododendron forests to the village of Dingboche.'
      },
      {
        day: 'Day 7',
        title: 'Acclimatization Day in Dingboche',
        description: 'Second acclimatization day. Optional hike to Nangkartshang Peak for panoramic views.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Lobuche (4,940m)',
        description: 'Trek along the lateral moraine of Khumbu Glacier to Lobuche.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Gorak Shep (5,170m) and EBC (5,364m)',
        description: 'Early morning trek to Gorak Shep, then to Everest Base Camp. Return to Gorak Shep.'
      },
      {
        day: 'Day 10',
        title: 'Kala Patthar (5,545m) and trek to Pheriche (4,280m)',
        description: 'Pre-dawn hike to Kala Patthar for sunrise views of Everest. Descend to Pheriche.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Long descent back to Namche Bazaar.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Lukla (2,800m)',
        description: 'Final day of trekking, returning to Lukla.'
      },
      {
        day: 'Day 13',
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu. Free afternoon for shopping or relaxation.'
      },
      {
        day: 'Day 14',
        title: 'Departure Day',
        description: 'Transfer to airport for your departure flight.'
      }
    ],
    included: [
      'All airport/hotel transfers',
      'Kathmandu-Lukla-Kathmandu flights',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'All necessary permits and fees',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How difficult is the Everest Base Camp Trek?',
        answer: 'The trek is considered moderate to challenging. While no technical climbing is involved, you need good physical fitness and stamina for multiple days of walking at high altitude.'
      },
      {
        question: 'When is the best time to trek?',
        answer: 'The best seasons are pre-monsoon (March to May) and post-monsoon (late September to November). These periods offer stable weather and clear mountain views.'
      },
      {
        question: 'Do I need previous trekking experience?',
        answer: 'While previous trekking experience is helpful, it\'s not mandatory. However, good physical fitness and mental preparation are essential.'
      },
      {
        question: 'What about altitude sickness?',
        answer: 'The trek includes rest days for acclimatization. Our guides are trained to recognize and respond to altitude sickness symptoms. We recommend travel insurance that covers high altitude trekking.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'annapurna-base-camp': {
    title: 'Annapurna Base Camp Trek',
    subtitle: 'Journey to the heart of the Annapurna Sanctuary',
    overview: 'The Annapurna Base Camp trek leads you into the heart of the Annapurna Sanctuary, a natural amphitheater surrounded by peaks over 7,000m. Trek through diverse landscapes from lush rhododendron forests to glacial basins, experiencing the rich Gurung culture while witnessing some of the most spectacular mountain scenery in Nepal.',
    highlights: [
      'Reach Annapurna Base Camp (4,130m)',
      'Sunrise over the Annapurna massif',
      'Trek through diverse ecosystems',
      'Experience Gurung culture',
      'Relax in Jhinu Danda hot springs',
      'Views of Machapuchare (Fish Tail)',
      'Explore traditional mountain villages'
    ],
    duration: '11-14 Days',
    difficulty: 'Moderate',
    maxAltitude: '4,130m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse',
    startEndPoint: 'Nayapul/Pokhara',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Drive to Pokhara (820m)',
        description: 'Scenic drive or flight to Pokhara, gateway to the Annapurna region.'
      },
      {
        day: 'Day 3',
        title: 'Drive to Nayapul and trek to Tikhedhunga (1,540m)',
        description: 'Begin trek through Modi River Valley and traditional villages.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Ghorepani (2,860m)',
        description: 'Challenging ascent through rhododendron forests to the large Gurung village.'
      },
      {
        day: 'Day 5',
        title: 'Poon Hill (3,210m) and trek to Tadapani (2,630m)',
        description: 'Early morning hike to Poon Hill for sunrise views, then trek to Tadapani.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Chhomrong (2,170m)',
        description: 'Descend through dense forest to the charming village of Chhomrong.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Dovan (2,500m)',
        description: 'Enter the Modi Khola Valley leading to the Annapurna Sanctuary.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Machhapuchhre Base Camp (3,700m)',
        description: 'Climb through bamboo and rhododendron forests to MBC.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Annapurna Base Camp (4,130m)',
        description: 'Early morning trek to ABC, surrounded by the Annapurna massif.'
      },
      {
        day: 'Day 10',
        title: 'Trek to Bamboo (2,310m)',
        description: 'Begin descent with continued views of the mountains.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Jhinu Danda (1,780m)',
        description: 'Trek to Jhinu Danda and enjoy natural hot springs.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Nayapul and drive to Pokhara',
        description: 'Final day of trekking and return to Pokhara.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'ACAP permit and TIMS card',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How difficult is the trek?',
        answer: 'The trek is considered moderate in difficulty. While it involves some steep ascents and descents, the maximum altitude is lower than many other treks in Nepal, making it more accessible.'
      },
      {
        question: 'What makes ABC special?',
        answer: 'The Annapurna Base Camp trek is unique because it takes you into a natural amphitheater surrounded by peaks over 7,000m. The close-up views of the mountains and the diversity of landscapes make it a truly special experience.'
      },
      {
        question: 'Are the hot springs worth visiting?',
        answer: 'The natural hot springs at Jhinu Danda are a highlight for many trekkers. After days of trekking, the warm mineral waters offer perfect relaxation for tired muscles.'
      },
      {
        question: 'What about accommodation?',
        answer: 'The trek features comfortable teahouse accommodation throughout the route. While basic, the teahouses offer clean rooms, good food, and sometimes even hot showers and Wi-Fi.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'manaslu-circuit': {
    title: 'Manaslu Circuit Trek',
    subtitle: 'Adventure around the eighth highest mountain',
    overview: 'The Manaslu Circuit Trek is a spectacular journey around Mount Manaslu (8,163m), the eighth highest mountain in the world. This remote trek offers a perfect blend of cultural immersion and dramatic landscapes, from subtropical forests to high-altitude passes, while experiencing both Hindu and Tibetan Buddhist cultures.',
    highlights: [
      'Cross Larkya La Pass (5,160m)',
      'Views of Mt. Manaslu (8,163m)',
      'Experience Tibetan culture',
      'Visit ancient monasteries',
      'Trek through remote villages',
      'Diverse landscapes and ecosystems',
      'Less crowded than other treks'
    ],
    duration: '16-18 Days',
    difficulty: 'Challenging',
    maxAltitude: '5,160m',
    bestSeason: 'Mar - May, Sep - Nov',
    accommodation: 'Teahouse/Lodge',
    startEndPoint: 'Soti Khola/Besisahar',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Drive to Soti Khola (710m)',
        description: 'Long but scenic drive through rural Nepal to reach Soti Khola.'
      },
      {
        day: 'Day 2',
        title: 'Trek to Machha Khola (930m)',
        description: 'Begin trek following the Budhi Gandaki River through local villages.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Jagat (1,410m)',
        description: 'Trek through tropical regions with waterfalls and lush valleys.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Deng (1,804m)',
        description: 'Enter the restricted area of Manaslu Conservation Area.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Namrung (2,630m)',
        description: 'Climb through pine and rhododendron forests with mountain views.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Samagaon (3,530m)',
        description: 'Visit ancient monasteries and experience Tibetan culture.'
      },
      {
        day: 'Day 7',
        title: 'Acclimatization Day in Samagaon',
        description: 'Rest day with optional hike to Birendra Lake or Manaslu Base Camp.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Samdo (3,875m)',
        description: 'Short but scenic trek with views of Manaslu and surrounding peaks.'
      },
      {
        day: 'Day 9',
        title: 'Acclimatization Day in Samdo',
        description: 'Second rest day with optional hike towards Tibetan border.'
      },
      {
        day: 'Day 10',
        title: 'Trek to Dharamsala (4,460m)',
        description: 'Short but steep climb to the last settlement before the pass.'
      },
      {
        day: 'Day 11',
        title: 'Cross Larkya La Pass (5,160m) to Bhimthang (3,720m)',
        description: 'Early start to cross the challenging pass. Long descent to Bhimthang.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Gho (2,515m)',
        description: 'Descend through beautiful forests with views of Manaslu.'
      },
      {
        day: 'Day 13',
        title: 'Trek to Dharapani (1,963m)',
        description: 'Join the Annapurna Circuit trail at Dharapani.'
      },
      {
        day: 'Day 14',
        title: 'Trek to Jagat (1,300m)',
        description: 'Continue descent through the Marsyangdi Valley.'
      },
      {
        day: 'Day 15',
        title: 'Trek to Besisahar',
        description: 'Final day of trekking to reach Besisahar.'
      },
      {
        day: 'Day 16',
        title: 'Drive to Kathmandu',
        description: 'Return drive to Kathmandu.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'Restricted area permit',
      'ACAP and MCAP permits',
      'TIMS card',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How challenging is Larkya La Pass?',
        answer: 'Crossing Larkya La Pass (5,160m) is the most challenging part of the trek. It requires early morning start, good fitness, and proper acclimatization. The pass can be snowy and cold throughout the year.'
      },
      {
        question: 'Why choose Manaslu Circuit?',
        answer: 'Manaslu Circuit offers a more remote and authentic trekking experience compared to popular routes like Everest Base Camp or Annapurna Circuit. It combines dramatic mountain scenery with rich cultural experiences.'
      },
      {
        question: 'What permits are required?',
        answer: 'The trek requires several permits: Restricted Area Permit, Manaslu Conservation Area Permit (MCAP), Annapurna Conservation Area Permit (ACAP), and TIMS card. These must be arranged through a registered trekking agency.'
      },
      {
        question: 'How is the accommodation?',
        answer: 'While teahouses are available throughout the route, they are more basic than those found on the Everest or Annapurna trails, especially in the more remote sections. Expect simple but clean accommodation.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'everest-three-pass': {
    title: 'Everest Three High Passes Trek',
    subtitle: 'The ultimate Everest region adventure',
    overview: 'The Three High Passes Trek is the ultimate Himalayan adventure, designed for experienced trekkers seeking the most comprehensive Everest experience. Cross three spectacular passes - Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,340m), while visiting Everest Base Camp, Kala Patthar, and the stunning Gokyo Lakes.',
    highlights: [
      'Cross three challenging passes over 5,300m',
      'Summit Kala Patthar (5,545m) for sunrise',
      'Visit Everest Base Camp and Gokyo Lakes',
      'Trek through remote Nangpa Valley',
      'Climb Gokyo Ri for panoramic views',
      'Experience authentic Sherpa culture',
      'Visit ancient Tengboche Monastery'
    ],
    duration: '20-22 Days',
    difficulty: 'Challenging',
    maxAltitude: '5,545m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse/Lodge',
    startEndPoint: 'Lukla',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Fly to Lukla (2,800m) and trek to Phakding (2,652m)',
        description: 'Early morning flight to Lukla. Begin trek through Dudh Koshi Valley.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Challenging climb to the Sherpa capital with first views of Everest.'
      },
      {
        day: 'Day 4',
        title: 'Acclimatization in Namche Bazaar',
        description: 'Rest and acclimatization with optional hike to Everest View Hotel.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Tengboche (3,870m)',
        description: 'Visit the famous Tengboche Monastery with stunning mountain views.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Dingboche (4,360m)',
        description: 'Enter the Imja Valley with views of Ama Dablam and Lhotse.'
      },
      {
        day: 'Day 7',
        title: 'Acclimatization in Dingboche',
        description: 'Rest day with optional hike to Nangkartshang Peak for acclimatization.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Lobuche (4,940m)',
        description: 'Trek along the Khumbu Glacier moraine with memorial views.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Gorak Shep and EBC (5,364m)',
        description: 'Visit Everest Base Camp and return to Gorak Shep.'
      },
      {
        day: 'Day 10',
        title: 'Kala Patthar and trek to Dzongla (4,830m)',
        description: 'Early morning climb to Kala Patthar for sunrise views of Everest.'
      },
      {
        day: 'Day 11',
        title: 'Cross Cho La Pass (5,420m) to Thangnak',
        description: 'Challenging pass crossing with glacier travel.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Gokyo (4,790m)',
        description: 'Trek to the beautiful Gokyo Lakes system.'
      },
      {
        day: 'Day 13',
        title: 'Rest day in Gokyo',
        description: 'Optional climb of Gokyo Ri for panoramic views.'
      },
      {
        day: 'Day 14',
        title: 'Cross Renjo La Pass (5,340m)',
        description: 'Cross the final pass for unique views of Everest.'
      },
      {
        day: 'Day 15',
        title: 'Trek to Thame (3,820m)',
        description: 'Descend to the historic village of Thame.'
      },
      {
        day: 'Day 16',
        title: 'Trek to Namche Bazaar',
        description: 'Return trek to Namche Bazaar.'
      },
      {
        day: 'Day 17',
        title: 'Trek to Lukla',
        description: 'Final day of trekking back to Lukla.'
      },
      {
        day: 'Day 18',
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu.'
      }
    ],
    included: [
      'All airport/hotel transfers',
      'Kathmandu-Lukla-Kathmandu flights',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'All necessary permits and fees',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How challenging are the passes?',
        answer: 'The three passes (Kongma La, Cho La, and Renjo La) are challenging and require good physical fitness, proper acclimatization, and some basic mountaineering skills. You may encounter snow and ice, especially on Cho La Pass.'
      },
      {
        question: 'Do I need technical climbing skills?',
        answer: 'While no technical climbing is required, basic crampon and ice axe skills are recommended for crossing Cho La Pass in certain seasons. Your guide will provide necessary instruction.'
      },
      {
        question: 'How does this compare to EBC trek?',
        answer: 'The Three Passes Trek is more challenging and longer than the standard EBC trek. It offers more diverse views, fewer crowds on some sections, and a more comprehensive Everest region experience.'
      },
      {
        question: 'What about altitude sickness?',
        answer: 'The trek includes proper acclimatization days. Our guides are trained to recognize and respond to altitude sickness symptoms. We recommend proper acclimatization and not rushing the schedule.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'langtang-valley': {
    title: 'Langtang Valley Trek',
    subtitle: 'Valley of glaciers and mountain views',
    overview: 'The Langtang Valley Trek offers an incredible experience in a valley known as the "Valley of Glaciers." Located close to Kathmandu, this trek features diverse landscapes, from lush forests to high-altitude meadows, and provides insights into the unique Tamang culture while showcasing spectacular views of the Langtang range.',
    highlights: [
      'Visit Kyanjin Gompa (3,870m)',
      'Climb Kyanjin Ri (4,773m)',
      'Experience Tamang culture',
      'View stunning glaciers',
      'Trek through rhododendron forests',
      'Visit traditional villages',
      'Optional climb to Tserko Ri (4,984m)'
    ],
    duration: '7-10 Days',
    difficulty: 'Moderate',
    maxAltitude: '4,984m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse/Lodge',
    startEndPoint: 'Syabrubesi',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Drive to Syabrubesi (1,550m)',
        description: 'Scenic drive through rural Nepal to Syabrubesi, the starting point of our trek.'
      },
      {
        day: 'Day 2',
        title: 'Trek to Lama Hotel (2,380m)',
        description: 'Begin trek along the Langtang River through dense forest and local villages.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Mundu (3,543m)',
        description: 'Trek through rhododendron and pine forests, passing traditional Tamang villages.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Kyanjin Gompa (3,870m)',
        description: 'Reach the beautiful Kyanjin Gompa, surrounded by snow-capped peaks.'
      },
      {
        day: 'Day 5',
        title: 'Acclimatization and Exploration Day',
        description: 'Optional hike to Kyanjin Ri (4,773m) for panoramic views or explore the monastery and cheese factory.'
      },
      {
        day: 'Day 6',
        title: 'Optional Trek to Tserko Ri (4,984m)',
        description: 'Challenging day hike to Tserko Ri for stunning views of the Langtang range.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Lama Hotel',
        description: 'Begin return journey, descending back to Lama Hotel.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Syabrubesi',
        description: 'Final day of trekking, returning to Syabrubesi.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'Langtang National Park permit',
      'TIMS card',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'Why choose Langtang Valley?',
        answer: 'Langtang Valley offers a perfect blend of natural beauty and cultural experiences, with the advantage of being closer to Kathmandu than other major trekking regions. It\'s less crowded than Everest or Annapurna regions while offering equally spectacular views.'
      },
      {
        question: 'How challenging is the trek?',
        answer: 'The trek is considered moderate in difficulty. The trail is well-maintained, and while there are some steep sections, the daily elevation gains are manageable. The trek is suitable for fit beginners.'
      },
      {
        question: 'What about the local culture?',
        answer: 'The Langtang region is home to Tamang people, who have unique Buddhist culture and traditions. You\'ll have opportunities to visit monasteries, observe local customs, and learn about their way of life.'
      },
      {
        question: 'Best time to visit?',
        answer: 'Spring (March-May) offers rhododendron blooms and clear weather, while autumn (October-November) provides stable conditions and clear mountain views. Winter treks are possible but cold.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'upper-mustang': {
    title: 'Upper Mustang Trek',
    subtitle: 'Journey through the hidden kingdom',
    overview: 'Upper Mustang, the former Kingdom of Lo, is a restricted area that preserves one of the last vestiges of traditional Tibetan Buddhist culture. Trek through an arid landscape of colorful rock formations, ancient cave monasteries, and walled cities. This unique trek offers insights into a preserved medieval Tibetan kingdom.',
    highlights: [
      'Explore the walled city of Lo Manthang',
      'Visit ancient Buddhist monasteries',
      'Witness preserved Tibetan culture',
      'See dramatic desert landscapes',
      'Discover ancient cave dwellings',
      'Experience traditional festivals',
      'View the Annapurna and Dhaulagiri ranges'
    ],
    duration: '14-16 Days',
    difficulty: 'Moderate',
    maxAltitude: '3,840m',
    bestSeason: 'Jun - Sep',
    accommodation: 'Basic Teahouse/Lodge',
    startEndPoint: 'Jomsom',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Fly to Pokhara',
        description: 'Scenic flight to Pokhara with views of the Annapurna and Dhaulagiri ranges.'
      },
      {
        day: 'Day 3',
        title: 'Fly to Jomsom (2,720m) and trek to Kagbeni (2,810m)',
        description: 'Early morning flight to Jomsom and trek to the medieval village of Kagbeni, gateway to Upper Mustang.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Chele (3,050m)',
        description: 'Enter the restricted area of Upper Mustang, following the Kali Gandaki River.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Syanbochen (3,475m)',
        description: 'Cross high passes with views of the Nilgiri and Tilicho peaks.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Ghami (3,520m)',
        description: 'Trek through a desert-like landscape with colorful cliffs and caves.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Tsarang (3,560m)',
        description: 'Visit the ancient Ghami Monastery and cross the Tsarang La pass.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Lo Manthang (3,840m)',
        description: 'Reach the walled city of Lo Manthang, capital of the former Kingdom of Lo.'
      },
      {
        day: 'Day 9',
        title: 'Explore Lo Manthang',
        description: 'Full day exploring monasteries, royal palace, and ancient Buddhist art in Lo Manthang.'
      },
      {
        day: 'Day 10',
        title: 'Trek to Drakmar (3,810m)',
        description: 'Begin return journey via different route, visiting sky caves and monasteries.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Ghiling (3,806m)',
        description: 'Trek through high desert plateau with views of Dhaulagiri and Nilgiri.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Chhuksang (3,050m)',
        description: 'Descend through dramatic landscapes and traditional villages.'
      },
      {
        day: 'Day 13',
        title: 'Trek to Jomsom (2,720m)',
        description: 'Final day of trekking, returning to Jomsom.'
      },
      {
        day: 'Day 14',
        title: 'Fly to Pokhara',
        description: 'Morning flight to Pokhara. Afternoon free to explore.'
      },
      {
        day: 'Day 15',
        title: 'Drive/Fly to Kathmandu',
        description: 'Return to Kathmandu by flight or drive.'
      },
      {
        day: 'Day 16',
        title: 'Departure Day',
        description: 'Transfer to airport for your departure flight.'
      }
    ],
    included: [
      'All domestic flights',
      'All ground transportation',
      'Teahouse/Lodge accommodation',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'Upper Mustang Restricted Area Permit',
      'ACAP permit',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'What makes Upper Mustang special?',
        answer: 'Upper Mustang is a restricted area preserving authentic Tibetan Buddhist culture. Its unique landscape, ancient monasteries, and preserved medieval kingdom make it distinctly different from other treks in Nepal.'
      },
      {
        question: 'Why is the best season different from other treks?',
        answer: 'Upper Mustang lies in the rain shadow of the Himalayas, making it ideal for monsoon season (June-September) when other areas are too wet to trek. The region receives very little rainfall and offers clear mountain views.'
      },
      {
        question: 'Do I need special permits?',
        answer: 'Yes, Upper Mustang requires a special restricted area permit costing USD 500 for 10 days. This is in addition to the standard ACAP permit. All permits are included in the trek cost.'
      },
      {
        question: 'How challenging is the trek?',
        answer: 'The trek is moderate in difficulty. While the altitude is not as high as some other treks, the terrain can be challenging with some steep sections. The dry, windy climate can also make trekking more demanding.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'gokyo-ri': {
    title: 'Gokyo Ri Trek',
    subtitle: 'Discover the turquoise lakes of Gokyo Valley',
    overview: 'The Gokyo Ri trek offers a spectacular alternative to the traditional Everest Base Camp route. Trek through the stunning Gokyo Valley, visit the pristine turquoise Gokyo Lakes, and climb Gokyo Ri (5,357m) for one of the best panoramic views of Everest and surrounding peaks. Experience the serenity of the world\'s highest freshwater lake system and the majesty of the Ngozumpa Glacier.',
    highlights: [
      'Climb Gokyo Ri (5,357m) for panoramic views',
      'Visit the sacred Gokyo Lakes system',
      'Views of four 8,000m peaks',
      'Trek along Ngozumpa Glacier',
      'Experience authentic Sherpa culture',
      'Less crowded than EBC route',
      'Stunning mountain panoramas'
    ],
    duration: '12-14 Days',
    difficulty: 'Moderate to Challenging',
    maxAltitude: '5,357m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse',
    startEndPoint: 'Lukla',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Fly to Lukla (2,800m) and trek to Phakding (2,652m)',
        description: 'Scenic mountain flight to Lukla and begin trek through Dudh Koshi Valley.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Challenging climb to the famous Sherpa capital with first views of Everest.'
      },
      {
        day: 'Day 4',
        title: 'Acclimatization in Namche',
        description: 'Rest and acclimatization with optional hike to Everest View Hotel.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Dole (4,200m)',
        description: 'Leave the main Everest trail and head towards Gokyo Valley through rhododendron forests.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Machhermo (4,470m)',
        description: 'Short but steep climb with great views of Cho Oyu and surrounding peaks.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Gokyo (4,790m)',
        description: 'Trek past the first and second Gokyo lakes to reach Gokyo village.'
      },
      {
        day: 'Day 8',
        title: 'Gokyo Ri (5,357m)',
        description: 'Early morning climb of Gokyo Ri for panoramic views of Everest, Lhotse, Makalu, and Cho Oyu.'
      },
      {
        day: 'Day 9',
        title: 'Explore Gokyo Valley',
        description: 'Visit the fourth and fifth Gokyo lakes, explore Ngozumpa Glacier.'
      },
      {
        day: 'Day 10',
        title: 'Trek to Dole (4,200m)',
        description: 'Begin descent with continued views of the Gokyo Valley.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Return trek to the Sherpa capital of Namche Bazaar.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Lukla (2,800m)',
        description: 'Final day of trekking back to Lukla.'
      },
      {
        day: 'Day 13',
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu.'
      }
    ],
    included: [
      'All airport/hotel transfers',
      'Kathmandu-Lukla-Kathmandu flights',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'All necessary permits and fees',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How does Gokyo Ri compare to EBC?',
        answer: 'The Gokyo Ri trek offers similar altitude and difficulty to EBC but with fewer crowds and unique attractions like the Gokyo Lakes. Many consider the views from Gokyo Ri superior to those from Kala Patthar.'
      },
      {
        question: 'When is the best time to trek?',
        answer: 'Spring (March-May) and autumn (October-November) are ideal. Winter treks are possible but cold, while summer brings monsoon rains and cloudy views.'
      },
      {
        question: 'Are the lakes frozen?',
        answer: 'The Gokyo Lakes are typically frozen from late November to March. During spring and autumn, they display their characteristic turquoise color.'
      },
      {
        question: 'What makes this trek special?',
        answer: 'The trek offers a unique combination of high-altitude lakes, panoramic mountain views, and glimpses of Sherpa culture. It\'s less crowded than the main Everest trail while offering equally spectacular scenery.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'khopra-ridge': {
    title: 'Khopra Ridge Trek',
    subtitle: 'Off-the-beaten-path Annapurna trek',
    overview: 'The Khopra Ridge (Khopra Danda) Trek is a hidden gem in the Annapurna region, offering spectacular views of the Annapurna and Dhaulagiri ranges from a unique vantage point. This less-traveled route provides an authentic trekking experience with opportunities to experience local culture and stunning mountain vistas.',
    highlights: [
      'Trek to Khopra Ridge (3,660m)',
      'Sunrise view of Dhaulagiri',
      'Visit Khayer Lake (4,500m)',
      'Experience traditional village life',
      'Panoramic mountain views',
      'Less crowded trails',
      'Rich flora and fauna'
    ],
    duration: '8-10 Days',
    difficulty: 'Moderate',
    maxAltitude: '4,500m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse',
    startEndPoint: 'Nayapul',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Drive to Pokhara (820m)',
        description: 'Scenic drive to Pokhara, gateway to the Annapurna region.'
      },
      {
        day: 'Day 3',
        title: 'Drive to Nayapul and trek to Ghandruk (1,940m)',
        description: 'Begin trek through Modi River Valley to the traditional Gurung village of Ghandruk.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Tadapani (2,630m)',
        description: 'Ascend through rhododendron forests with views of Annapurna South and Hiunchuli.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Dobato (3,420m)',
        description: 'Leave the main trail and climb to Dobato for spectacular mountain views.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Khopra Ridge (3,660m)',
        description: 'Early morning climb for sunrise views, then trek to Khopra Ridge camp.'
      },
      {
        day: 'Day 7',
        title: 'Explore Khayer Lake (4,500m)',
        description: 'Day trip to the sacred Khayer Lake with views of Dhaulagiri and Annapurna ranges.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Swanta Village (2,200m)',
        description: 'Descend through forests and traditional villages.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Nayapul and drive to Pokhara',
        description: 'Final day of trekking and return to Pokhara.'
      },
      {
        day: 'Day 10',
        title: 'Drive to Kathmandu',
        description: 'Return journey to Kathmandu. Evening free for rest or exploration.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'ACAP permit and TIMS card',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'Why choose Khopra Ridge Trek?',
        answer: 'Khopra Ridge offers a perfect blend of cultural immersion and mountain views while avoiding the crowds of popular routes. It\'s ideal for those seeking an authentic trekking experience in the Annapurna region.'
      },
      {
        question: 'How difficult is the trek?',
        answer: 'The trek is moderate in difficulty. While it reaches significant altitude at Khayer Lake, the daily elevation gains are manageable. Good physical fitness is recommended but no technical climbing skills are required.'
      },
      {
        question: 'What makes this trek unique?',
        answer: 'This off-the-beaten-path trek offers stunning views of both the Annapurna and Dhaulagiri ranges, visits to authentic villages, and the sacred Khayer Lake, all while avoiding the crowds of more popular routes.'
      },
      {
        question: 'What about accommodation?',
        answer: 'The trek uses a mix of community lodges and teahouses. While facilities are more basic than on popular routes, they are clean and comfortable, and your stay directly supports local communities.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'mardi-himal': {
    title: 'Mardi Himal Trek',
    subtitle: 'Hidden gem in the Annapurna region',
    overview: 'The Mardi Himal Trek is an off-the-beaten-path adventure that takes you to the base camp of Mardi Himal (5,587m), located east of the Annapurna Base Camp. This hidden gem offers stunning close-up views of Mardi Himal, Machapuchare (Fishtail), Annapurna South, and Hiunchuli. The trail winds through charming villages, rhododendron forests, and high alpine terrain, providing a perfect blend of natural beauty and cultural experiences.',
    highlights: [
      'Spectacular views of Machapuchare (Fishtail)',
      'Less crowded alternative trek',
      'Beautiful rhododendron forests',
      'Traditional Gurung villages',
      'High Camp sunrise views',
      'Close-up mountain panoramas',
      'Authentic local experiences'
    ],
    duration: '8-9 Days',
    difficulty: 'Moderate',
    maxAltitude: '4,500m (High Camp)',
    bestSeason: 'Mar - May, Oct - Dec',
    accommodation: 'Teahouse/Lodge',
    startEndPoint: 'Pokhara',
    price: 1200,
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Pokhara',
        description: 'Arrive in Pokhara, briefing about the trek, and overnight stay in hotel.'
      },
      {
        day: 'Day 2',
        title: 'Drive to Kande (1,770m) and trek to Forest Camp (2,550m)',
        description: 'Drive to Kande, then trek through beautiful forests to Forest Camp, also known as Kokar.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Low Camp (2,970m)',
        description: 'Ascend through rhododendron forest with occasional mountain views to Low Camp.'
      },
      {
        day: 'Day 4',
        title: 'Trek to High Camp (3,550m)',
        description: 'Climb above the tree line for panoramic mountain views. Overnight at High Camp.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Mardi Himal Base Camp (4,500m) and return to High Camp',
        description: 'Early morning trek to Base Camp for stunning sunrise views of the Annapurna range, then return to High Camp.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Siding Village (1,750m)',
        description: 'Long descent through varied terrain to the traditional village of Siding.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Lumre and drive to Pokhara',
        description: 'Short trek to Lumre, then drive back to Pokhara. Free afternoon for relaxation.'
      },
      {
        day: 'Day 8',
        title: 'Departure from Pokhara',
        description: 'Transfer to airport or continue your journey in Nepal.'
      }
    ],
    included: [
      'All ground transportation as per itinerary',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'ACAP permit and TIMS card',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'Accommodation in Pokhara',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How difficult is the Mardi Himal Trek?',
        answer: 'The trek is considered moderate in difficulty. While shorter than many Nepal treks, it involves steep ascents and high altitude. Good physical fitness is recommended.'
      },
      {
        question: 'What is the best time to do this trek?',
        answer: 'The best seasons are spring (March to May) and autumn (October to December). These periods offer stable weather and clear mountain views.'
      },
      {
        question: 'Is it suitable for first-time trekkers?',
        answer: 'Yes, with proper preparation. The trek is shorter than many classic Nepal treks and offers good acclimatization opportunities.'
      },
      {
        question: 'How are the accommodations on this trek?',
        answer: 'Basic but comfortable teahouses are available throughout the route. Facilities become more basic as you ascend, especially at High Camp.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'pikey-peak': {
    title: 'Pikey Peak Trek',
    subtitle: 'Best viewpoint of Mount Everest in Lower Khumbu',
    overview: 'The Pikey Peak trek offers one of the finest viewpoints of Mount Everest and the Khumbu region without the crowds. Sir Edmund Hillary himself considered the view from Pikey Peak to be the best of Everest. This short but rewarding trek takes you through authentic Sherpa villages, ancient monasteries, and pristine forests while providing spectacular panoramic views of the Himalayan range.',
    highlights: [
      'Panoramic views of Everest and Khumbu range',
      'Less crowded authentic experience',
      'Rich Sherpa culture and monasteries',
      'Beautiful rhododendron forests',
      'Sunrise view from Pikey Peak',
      'Traditional mountain villages',
      'Short but rewarding trek'
    ],
    duration: '5-7 Days',
    difficulty: 'Moderate',
    maxAltitude: '4,065m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse/Lodge',
    startEndPoint: 'Dhap',
    price: 1100,
    itinerary: [
      {
        day: 'Day 1',
        title: 'Drive from Kathmandu to Dhap (2,850m)',
        description: 'Scenic drive through the countryside to Dhap, the starting point of the trek.'
      },
      {
        day: 'Day 2',
        title: 'Trek to Jhapre (2,820m)',
        description: 'Trek through Sherpa villages and rhododendron forests with first views of Mount Everest.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Pikey Base Camp (3,640m)',
        description: 'Gradual ascent through pine and rhododendron forests to the base camp, visiting monasteries en route.'
      },
      {
        day: 'Day 4',
        title: 'Pikey Peak Summit (4,065m) and trek to Junbesi (2,700m)',
        description: 'Early morning hike to Pikey Peak for sunrise views of Everest, then descend to the beautiful village of Junbesi.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Phaplu (2,470m)',
        description: 'Final day of trekking through traditional villages to Phaplu.'
      },
      {
        day: 'Day 6',
        title: 'Drive back to Kathmandu',
        description: 'Return journey to Kathmandu, reflecting on the trek experiences.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'Required permits and fees',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'Accommodation in Kathmandu',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'Why choose Pikey Peak Trek?',
        answer: 'Pikey Peak offers one of the best views of Mount Everest without the crowds of the EBC trek. It\'s shorter, less strenuous, and provides an authentic cultural experience.'
      },
      {
        question: 'How challenging is the trek?',
        answer: 'The trek is moderate in difficulty. While it reaches a significant altitude, the daily walking distances are reasonable and the ascent is gradual.'
      },
      {
        question: 'What is the accommodation like?',
        answer: 'You\'ll stay in basic but comfortable teahouses run by local families. Facilities are simple but adequate, with shared bathrooms and common dining areas.'
      },
      {
        question: 'Do I need special permits?',
        answer: 'Yes, you need a TIMS card and local area permit, which are included in the trek package.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'annapurna-circuit': {
    title: 'Annapurna Circuit Trek',
    subtitle: 'The complete journey around Annapurna massif',
    overview: 'The Annapurna Circuit is one of the world\'s most iconic treks, offering unparalleled diversity in landscape, culture, and climate zones. Circle the entire Annapurna massif, crossing the challenging Thorong La Pass (5,416m), and experience everything from subtropical forests to high-altitude desert plateaus.',
    highlights: [
      'Cross Thorong La Pass (5,416m)',
      'Visit ancient Buddhist temples',
      'Experience diverse cultures',
      'Trek through world\'s deepest gorge',
      'Natural hot springs at Tatopani',
      'Apple orchards of Marpha',
      'Stunning views of Annapurna range'
    ],
    duration: '14-18 Days',
    difficulty: 'Moderate to Challenging',
    maxAltitude: '5,416m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse',
    startEndPoint: 'Besisahar/Pokhara',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Drive to Besisahar (760m)',
        description: 'Scenic drive through rural Nepal to reach the trek starting point.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Bahundanda (1,310m)',
        description: 'Begin trek through terraced fields and local villages.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Jagat (1,300m)',
        description: 'Follow the Marsyangdi River through traditional villages.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Dharapani (1,960m)',
        description: 'Enter the Manang district with views of Manaslu range.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Chame (2,710m)',
        description: 'Trek through pine forests with views of Annapurna II.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Pisang (3,300m)',
        description: 'Enter the upper Manang region with dramatic mountain views.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Manang (3,540m)',
        description: 'Visit ancient monasteries and enjoy panoramic mountain views.'
      },
      {
        day: 'Day 9',
        title: 'Acclimatization in Manang',
        description: 'Rest day with optional hike to Ice Lake for acclimatization.'
      },
      {
        day: 'Day 10',
        title: 'Trek to Yak Kharka (4,018m)',
        description: 'Short but steady climb through high-altitude terrain.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Thorong Phedi (4,450m)',
        description: 'Final preparation before crossing Thorong La Pass.'
      },
      {
        day: 'Day 12',
        title: 'Cross Thorong La Pass (5,416m) to Muktinath (3,800m)',
        description: 'Early morning start to cross the challenging pass. Descend to the holy temple town of Muktinath.'
      },
      {
        day: 'Day 13',
        title: 'Trek to Marpha (2,670m)',
        description: 'Trek through Kali Gandaki Valley to the charming apple capital.'
      },
      {
        day: 'Day 14',
        title: 'Trek to Tatopani (1,200m)',
        description: 'Descend through the world\'s deepest gorge. Evening hot springs.'
      },
      {
        day: 'Day 15',
        title: 'Trek to Ghorepani (2,860m)',
        description: 'Climb through rhododendron forests to panoramic viewpoint.'
      },
      {
        day: 'Day 16',
        title: 'Poon Hill sunrise and trek to Nayapul',
        description: 'Early morning hike for sunrise views. Trek to road head and drive to Pokhara.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'ACAP permit and TIMS card',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'How challenging is Thorong La Pass?',
        answer: 'Crossing Thorong La Pass (5,416m) is the most challenging part of the trek. It requires early morning start, good fitness, and proper acclimatization. The pass can be snowy and cold, especially outside peak seasons.'
      },
      {
        question: 'What about altitude sickness?',
        answer: 'The trek includes proper acclimatization days in Manang. Our guides are trained to recognize and respond to altitude sickness symptoms. We recommend not rushing the schedule and staying hydrated.'
      },
      {
        question: 'Can I do a shorter version?',
        answer: 'Yes, with new road access, it\'s possible to do shorter variations of the circuit. However, we recommend the full circuit for the complete experience and proper acclimatization.'
      },
      {
        question: 'What makes this trek special?',
        answer: 'The Annapurna Circuit offers unmatched diversity - from subtropical valleys to alpine zones, Hindu villages to Buddhist monasteries, and lush forests to desert plateaus. It\'s often called a "Natural and Cultural Museum in motion."'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'langtang-gosaikunda': {
    title: 'Langtang Gosaikunda Trek',
    subtitle: 'A Pilgrimage to the Enchanting Alpine Lakes',
    overview: 'The Langtang Gosaikunda Trek combines the natural beauty of the Langtang Valley with a pilgrimage to the sacred high-altitude lakes of Gosaikunda. This trek offers a perfect blend of cultural immersion, stunning mountain vistas, and spiritual significance. The trail takes you through dense forests, traditional Tamang villages, and high alpine terrain, culminating at the sacred Gosaikunda Lakes, believed to have been created by Lord Shiva.',
    highlights: [
      'Visit the sacred Gosaikunda Lakes (4,380m)',
      'Experience rich Tamang culture',
      'Trek through diverse landscapes',
      'View stunning Langtang range',
      'Visit ancient monasteries',
      'Cross the challenging Laurebina Pass',
      'Explore traditional mountain villages'
    ],
    duration: '14-16 Days',
    difficulty: 'Moderate to Challenging',
    maxAltitude: '4,380m',
    bestSeason: 'Mar - May, Sep - Nov',
    accommodation: 'Teahouse/Lodge',
    startEndPoint: 'Syabrubesi/Dhunche',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Drive to Syabrubesi (1,550m)',
        description: 'Scenic drive from Kathmandu through rural landscapes to Syabrubesi.'
      },
      {
        day: 'Day 2',
        title: 'Trek to Lama Hotel (2,380m)',
        description: 'Begin trek along the Langtang River through dense forest.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Mundu (3,543m)',
        description: 'Trek through rhododendron forests and traditional Tamang villages.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Kyanjin Gompa (3,870m)',
        description: 'Visit the historic monastery and enjoy mountain views.'
      },
      {
        day: 'Day 5',
        title: 'Acclimatization Day',
        description: 'Optional hike to Kyanjin Ri (4,773m) for panoramic views.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Lama Hotel (2,380m)',
        description: 'Begin return journey through the valley.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Thulo Syabru (2,260m)',
        description: 'Cross to the Gosaikunda trail, enjoying valley views.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Sing Gompa (3,330m)',
        description: 'Steep climb through forests to the Buddhist monastery.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Gosaikunda (4,380m)',
        description: 'Reach the sacred lakes with views of the Langtang range.'
      },
      {
        day: 'Day 10',
        title: 'Rest Day at Gosaikunda',
        description: 'Explore the lakes and surrounding area, optional puja ceremony.'
      },
      {
        day: 'Day 11',
        title: 'Cross Laurebina Pass (4,610m) to Ghopte (3,430m)',
        description: 'Challenging pass crossing with spectacular mountain views.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Kutumsang (2,470m)',
        description: 'Descend through rhododendron forests and meadows.'
      },
      {
        day: 'Day 13',
        title: 'Trek to Chisapani (2,215m)',
        description: 'Final full day of trekking with views of the Kathmandu Valley.'
      },
      {
        day: 'Day 14',
        title: 'Trek to Sundarijal and drive to Kathmandu',
        description: 'Short trek and return to Kathmandu.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'Langtang National Park permit',
      'TIMS card',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'What makes Gosaikunda Lakes special?',
        answer: 'Gosaikunda is a sacred site in Hindu and Buddhist traditions, believed to have been created by Lord Shiva. The lakes are also important for their unique high-altitude ecosystem.'
      },
      {
        question: 'How challenging is the trek?',
        answer: 'The trek is moderate to challenging, with the most difficult section being the Laurebina Pass crossing. Good fitness and proper acclimatization are essential.'
      },
      {
        question: 'What about altitude sickness?',
        answer: 'The trek includes proper acclimatization days. The highest point is Laurebina Pass at 4,610m. Our guides are trained to recognize and respond to altitude sickness symptoms.'
      },
      {
        question: 'Best time to visit?',
        answer: 'Spring (March-May) offers rhododendron blooms and clear weather, while autumn (September-November) provides stable conditions. Winter visits to Gosaikunda are not recommended due to extreme cold and snow.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'kanchenjunga-circuit': {
    title: 'Kanchenjunga Circuit Trek',
    subtitle: 'Trek around the world\'s third highest peak',
    overview: 'The Kanchenjunga Circuit Trek is a challenging and remote adventure that takes you around Mount Kanchenjunga (8,586m), the world\'s third-highest peak. This trek offers a perfect blend of cultural immersion, pristine wilderness, and spectacular mountain views. Journey through remote villages, dense forests, and high alpine terrain while experiencing the unique culture of eastern Nepal.',
    highlights: [
      'Views of Kanchenjunga (8,586m)',
      'Visit both North and South Base Camps',
      'Cross challenging high passes',
      'Experience remote village life',
      'Rich biodiversity and wildlife',
      'Unique local culture and traditions',
      'Pristine wilderness experience'
    ],
    duration: '20-22 Days',
    difficulty: 'Challenging',
    maxAltitude: '5,140m',
    bestSeason: 'Mar - May, Sep - Nov',
    accommodation: 'Basic Teahouse/Camping',
    startEndPoint: 'Taplejung',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Fly to Bhadrapur and drive to Taplejung (1,820m)',
        description: 'Flight to eastern Nepal and scenic drive to trek starting point.'
      },
      {
        day: 'Day 2',
        title: 'Trek to Mitlung (921m)',
        description: 'Begin trek following the Tamor River through villages and farmland.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Chirwa (1,270m)',
        description: 'Trek through small settlements and cardamom forests.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Sekathum (1,576m)',
        description: 'Follow the Ghunsa Khola River, entering the Kanchenjunga Conservation Area.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Amjilossa (2,308m)',
        description: 'Steep climb through dense forest with mountain views.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Gyabla (2,730m)',
        description: 'Trek through rhododendron and bamboo forests.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Ghunsa (3,595m)',
        description: 'Reach the main Tibetan village of the upper valley.'
      },
      {
        day: 'Day 8',
        title: 'Acclimatization Day in Ghunsa',
        description: 'Rest and explore the traditional village and monastery.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Khambachen (4,050m)',
        description: 'Trek along the river with views of Jannu Himal.'
      },
      {
        day: 'Day 10',
        title: 'Acclimatization Day in Khambachen',
        description: 'Rest day with optional hike for better views.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Lhonak (4,780m)',
        description: 'Trek through high alpine terrain with glacier views.'
      },
      {
        day: 'Day 12',
        title: 'Visit Kanchenjunga North Base Camp (5,140m)',
        description: 'Day trip to North Base Camp for spectacular mountain views.'
      },
      {
        day: 'Day 13',
        title: 'Trek to Ghunsa (3,595m)',
        description: 'Begin return journey, descending to Ghunsa.'
      },
      {
        day: 'Day 14',
        title: 'Trek to Sele Le Base Camp (4,480m)',
        description: 'Climb towards Sele Le Pass through high alpine terrain.'
      },
      {
        day: 'Day 15',
        title: 'Cross Sele Le Pass (4,780m) to Tseram (3,870m)',
        description: 'Challenging pass crossing with views of both sides of Kanchenjunga.'
      },
      {
        day: 'Day 16',
        title: 'Visit Kanchenjunga South Base Camp (4,730m)',
        description: 'Day trip to South Base Camp for different perspective of Kanchenjunga.'
      },
      {
        day: 'Day 17',
        title: 'Trek to Tortong (2,995m)',
        description: 'Begin descent through changing vegetation zones.'
      },
      {
        day: 'Day 18',
        title: 'Trek to Yamphudin (2,080m)',
        description: 'Trek through mixed forests and local villages.'
      },
      {
        day: 'Day 19',
        title: 'Trek to Khebang (1,740m)',
        description: 'Continue descent through rural settlements.'
      },
      {
        day: 'Day 20',
        title: 'Trek to Taplejung (1,820m)',
        description: 'Final day of trekking back to Taplejung.'
      }
    ],
    included: [
      'All ground transportation',
      'Basic teahouse/camping accommodation',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'Kanchenjunga Conservation Area permit',
      'Restricted Area permit',
      'TIMS card',
      'Camping equipment when needed',
      'First aid and medical kit',
      'All government and local taxes'
    ],
    excluded: [
      'International airfare',
      'Domestic flights',
      'Nepal visa fee',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides and porters',
      'Bar and beverage bills',
      'Extra activities not included in itinerary'
    ],
    faqs: [
      {
        question: 'Why choose Kanchenjunga Circuit?',
        answer: 'This trek offers a unique combination of cultural immersion and wilderness experience. It\'s less crowded than popular treks, provides views of the world\'s third-highest peak, and lets you experience authentic village life in remote Nepal.'
      },
      {
        question: 'How challenging is the trek?',
        answer: 'This is a challenging trek due to its length, remoteness, and altitude. Multiple high passes, basic accommodation, and variable weather conditions make it suitable for experienced trekkers only.'
      },
      {
        question: 'What about accommodation?',
        answer: 'Accommodation is basic, with a mix of teahouses and camping depending on the section. Facilities are more basic than on popular trekking routes, and some sections may require camping.'
      },
      {
        question: 'Do I need special permits?',
        answer: 'Yes, this trek requires multiple permits: Kanchenjunga Conservation Area permit, Restricted Area permit (minimum 2 people required), and TIMS card. All permits are included in the package.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  }
};

const TrekkingDetail = () => {
  const { id } = useParams();
  const currentTrek = treksData[id] || treksData['everest-base-camp']; // Fallback to EBC if ID not found

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src={currentTrek.gallery[0]}
            alt={currentTrek.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-gray-900"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {currentTrek.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              {currentTrek.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300">{currentTrek.overview}</p>
              
              <h3 className="text-xl font-bold text-white mt-6 mb-4">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentTrek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg className="w-6 h-6 text-[#F28C38] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section id="itinerary" className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {currentTrek.itinerary.map((day, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-700 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#F28C38] rounded-full"></div>
                    <h3 className="text-lg font-bold text-white mb-2">{day.day} - {day.title}</h3>
                    <p className="text-gray-300">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included/Excluded */}
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">What's Included</h2>
                  <ul className="space-y-3">
                    {currentTrek.included.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">What's Not Included</h2>
                  <ul className="space-y-3">
                    {currentTrek.excluded.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <svg className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {currentTrek.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700 last:border-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {currentTrek.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${currentTrek.title} - Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Duration</span>
                    <span className="text-white font-bold">{currentTrek.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Difficulty</span>
                    <span className="text-white font-bold">{currentTrek.difficulty}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Max Altitude</span>
                    <span className="text-white font-bold">{currentTrek.maxAltitude}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Best Season</span>
                    <span className="text-white font-bold">{currentTrek.bestSeason}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                    <span className="text-gray-300">Accommodation</span>
                    <span className="text-white font-bold">{currentTrek.accommodation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Start/End Point</span>
                    <span className="text-white font-bold">{currentTrek.startEndPoint}</span>
                  </div>
                </div>

                <button className="w-full bg-[#F28C38] text-white font-bold py-4 px-6 rounded-lg mt-8 hover:bg-[#E67D29] transition duration-300">
                  Book Your Trek
                </button>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                <p className="text-gray-300 mb-6">Have questions about this trek? Our expert team is here to help you plan your adventure.</p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 mr-3 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +977-1-4123456
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 mr-3 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@wildstep.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekkingDetail; 