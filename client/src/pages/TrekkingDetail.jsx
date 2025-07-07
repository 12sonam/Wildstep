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
      'Experience Gurung culture and villages',
      'Relax in Jhinu Danda hot springs',
      'Views of Machapuchare (Fish Tail)',
      'Explore traditional mountain villages'
    ],
    duration: '11-14 Days',
    difficulty: 'Moderate',
    maxAltitude: '4,130m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse',
    startEndPoint: 'Pokhara',
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
        description: 'Challenging ascent through rhododendron forests to the large Gurung village of Ghorepani.'
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
        description: 'Climb through bamboo and rhododendron forests to MBC with stunning mountain views.'
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
        description: 'Trek to Jhinu Danda, known for its natural hot springs.'
      },
      {
        day: 'Day 12',
        title: 'Trek to Nayapul and drive to Pokhara',
        description: 'Final day of trekking and return to Pokhara.'
      },
      {
        day: 'Day 13',
        title: 'Drive to Kathmandu',
        description: 'Return to Kathmandu by tourist bus or flight.'
      },
      {
        day: 'Day 14',
        title: 'Departure Day',
        description: 'Transfer to airport for your departure flight.'
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
        question: 'How difficult is the Annapurna Base Camp Trek?',
        answer: 'The trek is considered moderate in difficulty. While it reaches a significant altitude, the daily elevation gains are gradual, and the trail is well-maintained with plenty of teahouses along the way.'
      },
      {
        question: 'When is the best time to trek?',
        answer: 'Spring (March-May) and autumn (October-November) are ideal, offering stable weather and clear mountain views. Spring adds the bonus of rhododendron blooms.'
      },
      {
        question: 'Do I need trekking experience?',
        answer: 'While previous trekking experience is helpful, it\'s not mandatory. Good physical fitness and proper acclimatization are more important. The trek is suitable for first-time trekkers who are reasonably fit.'
      },
      {
        question: 'What makes ABC trek special?',
        answer: 'The ABC trek offers a unique combination of cultural experiences, diverse landscapes, and close-up views of the entire Annapurna range. The trek enters a natural amphitheater surrounded by peaks, offering a 360-degree mountain panorama.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'manaslu-circuit': {
    title: 'Manaslu Circuit Trek',
    subtitle: 'Adventure around the eighth highest mountain',
    overview: 'The Manaslu Circuit Trek is a spectacular journey around Mount Manaslu (8,163m), the eighth highest mountain in the world. This restricted area trek offers pristine mountain views, rich Buddhist culture, and a challenging pass crossing. Experience the beauty of a less-traveled route that combines the best of Nepal\'s natural and cultural heritage.',
    highlights: [
      'Cross the challenging Larkya La Pass (5,160m)',
      'Circuit around Mt. Manaslu (8,163m)',
      'Experience authentic Tibetan culture',
      'Trek through remote villages',
      'Visit ancient Buddhist monasteries',
      'Diverse landscapes and ecosystems',
      'Less crowded alternative to popular treks'
    ],
    duration: '14-16 Days',
    difficulty: 'Challenging',
    maxAltitude: '5,160m',
    bestSeason: 'Mar - May, Oct - Nov',
    accommodation: 'Teahouse/Lodge',
    startEndPoint: 'Soti Khola',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Drive to Soti Khola (710m)',
        description: 'Long but scenic drive through rural Nepal to reach Soti Khola.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Machha Khola (930m)',
        description: 'Begin trek following the Budhi Gandaki River through local villages.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Jagat (1,410m)',
        description: 'Trek through tropical regions with waterfalls and lush valleys.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Deng (1,804m)',
        description: 'Enter the restricted area of Manaslu Conservation Area.'
      },
      {
        day: 'Day 6',
        title: 'Trek to Namrung (2,630m)',
        description: 'Climb through pine and rhododendron forests with mountain views.'
      },
      {
        day: 'Day 7',
        title: 'Trek to Samagaon (3,530m)',
        description: 'Visit ancient monasteries and experience Tibetan culture.'
      },
      {
        day: 'Day 8',
        title: 'Acclimatization Day in Samagaon',
        description: 'Rest day with optional hike to Birendra Lake or Manaslu Base Camp.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Samdo (3,875m)',
        description: 'Short but scenic trek with views of Manaslu and surrounding peaks.'
      },
      {
        day: 'Day 10',
        title: 'Acclimatization Day in Samdo',
        description: 'Second rest day with optional hike towards Tibetan border.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Dharamsala (4,460m)',
        description: 'Short but steep climb to the last settlement before the pass.'
      },
      {
        day: 'Day 12',
        title: 'Cross Larkya La (5,160m) to Bimthang (3,720m)',
        description: 'Early start for the challenging pass crossing, offering stunning views.'
      },
      {
        day: 'Day 13',
        title: 'Trek to Tilije (2,300m)',
        description: 'Long descent with views of Annapurna II and Lamjung Himal.'
      },
      {
        day: 'Day 14',
        title: 'Trek to Dharapani (1,860m)',
        description: 'Final day of trekking, joining the Annapurna Circuit trail.'
      },
      {
        day: 'Day 15',
        title: 'Drive to Besisahar and Kathmandu',
        description: 'Long drive back to Kathmandu via Besisahar.'
      },
      {
        day: 'Day 16',
        title: 'Departure Day',
        description: 'Transfer to airport for your departure flight.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'Manaslu Restricted Area Permit',
      'ACAP and MCAP permits',
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
        question: 'How difficult is the Manaslu Circuit Trek?',
        answer: 'This is a challenging trek due to its remote nature, high altitude, and the demanding Larkya La pass (5,160m). Good physical fitness and previous trekking experience are recommended.'
      },
      {
        question: 'When is the best time to trek?',
        answer: 'The best seasons are pre-monsoon (March-May) and post-monsoon (October-November). The Larkya La pass can be dangerous in winter due to snow and ice.'
      },
      {
        question: 'Do I need special permits?',
        answer: 'Yes, the Manaslu Circuit requires a Restricted Area Permit and must be done with a registered guide. All necessary permits are included in the trek cost.'
      },
      {
        question: 'What makes Manaslu Circuit unique?',
        answer: 'The Manaslu Circuit offers a perfect blend of cultural and natural experiences, from Hindu villages in lower regions to Tibetan Buddhist culture in higher areas. It\'s less crowded than Everest and Annapurna, offering a more authentic trekking experience.'
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
    overview: 'The Three High Passes Trek is the ultimate Himalayan adventure, designed for experienced trekkers seeking the most comprehensive Everest experience. This challenging route takes you across three spectacular passes - Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,340m), while also including Everest Base Camp, Kala Patthar, and the stunning Gokyo Lakes. Experience the complete grandeur of the Khumbu region, its monasteries, Sherpa villages, and unparalleled views of four 8,000m peaks including Everest, Lhotse, Makalu, and Cho Oyu.',
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
        description: 'Trek to Tengboche, visit the famous monastery and enjoy views of Everest, Lhotse, and Ama Dablam.'
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
        title: 'Trek to Kongma La Pass (5,535m)',
        description: 'Cross the first and highest of the three passes, offering stunning views of the Khumbu region.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Lobuche (4,940m)',
        description: 'Descend from Kongma La and trek to Lobuche along the Khumbu Glacier.'
      },
      {
        day: 'Day 10',
        title: 'Trek to Gorak Shep and EBC (5,364m)',
        description: 'Visit Everest Base Camp and return to Gorak Shep for overnight stay.'
      },
      {
        day: 'Day 11',
        title: 'Kala Patthar and trek to Dzongla (4,830m)',
        description: 'Early morning climb to Kala Patthar for sunrise views, then trek to Dzongla.'
      },
      {
        day: 'Day 12',
        title: 'Cross Cho La Pass (5,420m) to Thangnak',
        description: 'Cross the challenging Cho La Pass and descend to Thangnak.'
      },
      {
        day: 'Day 13',
        title: 'Trek to Gokyo (4,790m)',
        description: 'Trek to the beautiful Gokyo Lakes and village.'
      },
      {
        day: 'Day 14',
        title: 'Gokyo Ri (5,357m) and rest day',
        description: 'Early morning climb of Gokyo Ri for panoramic views. Rest day to explore the lakes.'
      },
      {
        day: 'Day 15',
        title: 'Cross Renjo La Pass (5,340m)',
        description: 'Cross the final pass offering unique views of Everest and surrounding peaks.'
      },
      {
        day: 'Day 16',
        title: 'Trek to Thame (3,820m)',
        description: 'Descend to the historic village of Thame.'
      },
      {
        day: 'Day 17',
        title: 'Trek to Namche Bazaar',
        description: 'Return trek to Namche Bazaar.'
      },
      {
        day: 'Day 18',
        title: 'Trek to Lukla',
        description: 'Final day of trekking, returning to Lukla.'
      },
      {
        day: 'Day 19',
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu. Free afternoon for shopping or relaxation.'
      },
      {
        day: 'Day 20',
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
        question: 'How difficult is the Three Passes Trek?',
        answer: 'This is one of the most challenging treks in the Everest region, requiring excellent fitness and previous high-altitude trekking experience. The three passes are all over 5,300m and involve steep ascents and descents.'
      },
      {
        question: 'When is the best time to trek?',
        answer: 'The best seasons are pre-monsoon (March to May) and post-monsoon (late September to November). These periods offer stable weather and clear mountain views. Winter crossings of the passes can be dangerous due to snow and ice.'
      },
      {
        question: 'Do I need previous trekking experience?',
        answer: 'Yes, previous high-altitude trekking experience is strongly recommended. This trek is more challenging than the standard EBC trek and requires good stamina and technical walking ability.'
      },
      {
        question: 'What about altitude sickness?',
        answer: 'The risk of altitude sickness is higher on this trek due to multiple high passes. The itinerary includes proper acclimatization days, and guides are trained to handle altitude-related issues. We strongly recommend proper travel insurance covering high-altitude trekking.'
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
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Airport pickup and transfer to your hotel in Kathmandu.'
      },
      {
        day: 'Day 2',
        title: 'Drive to Syabrubesi (1,550m)',
        description: 'Scenic drive through rural Nepal to Syabrubesi, the starting point of our trek.'
      },
      {
        day: 'Day 3',
        title: 'Trek to Lama Hotel (2,380m)',
        description: 'Begin trek along the Langtang River through dense forest and local villages.'
      },
      {
        day: 'Day 4',
        title: 'Trek to Mundu (3,543m)',
        description: 'Trek through rhododendron and pine forests, passing traditional Tamang villages.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Kyanjin Gompa (3,870m)',
        description: 'Reach the beautiful Kyanjin Gompa, surrounded by snow-capped peaks.'
      },
      {
        day: 'Day 6',
        title: 'Acclimatization and Exploration Day',
        description: 'Optional hike to Kyanjin Ri (4,773m) for panoramic views or explore the monastery and cheese factory.'
      },
      {
        day: 'Day 7',
        title: 'Optional Trek to Tserko Ri (4,984m)',
        description: 'Challenging day hike to Tserko Ri for stunning views of the Langtang range.'
      },
      {
        day: 'Day 8',
        title: 'Trek to Lama Hotel',
        description: 'Begin return journey, descending back to Lama Hotel.'
      },
      {
        day: 'Day 9',
        title: 'Trek to Syabrubesi',
        description: 'Final day of trekking, returning to Syabrubesi.'
      },
      {
        day: 'Day 10',
        title: 'Drive to Kathmandu',
        description: 'Return drive to Kathmandu. Evening free for rest or exploration.'
      }
    ],
    included: [
      'All ground transportation',
      'Teahouse accommodation during trek',
      'Three meals per day during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers:1 porter)',
      'Langtang National Park permits',
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
        question: 'How difficult is the Langtang Valley Trek?',
        answer: 'The trek is considered moderate in difficulty. While it reaches high altitudes, the daily elevation gains are gradual, and the trail is well-maintained. Good physical fitness is still recommended.'
      },
      {
        question: 'When is the best time to trek?',
        answer: 'Spring (March-May) and autumn (October-November) are ideal, offering stable weather and clear views. The rhododendrons bloom in spring, adding color to the landscape.'
      },
      {
        question: 'Is altitude sickness a concern?',
        answer: 'While the maximum altitude is lower than some other treks, altitude sickness can still occur above 3,000m. The itinerary includes proper acclimatization, and guides are trained to handle altitude-related issues.'
      },
      {
        question: 'What makes Langtang unique?',
        answer: 'Langtang offers a perfect blend of natural and cultural experiences in a shorter duration. It\'s less crowded than Everest and Annapurna regions, and provides unique insights into Tamang culture and traditions.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
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
        description: 'Challenging climb to the famous Sherpa capital of Namche Bazaar.'
      },
      {
        day: 'Day 4',
        title: 'Acclimatization Day in Namche',
        description: 'Rest and acclimatization with optional hike to Everest View Hotel.'
      },
      {
        day: 'Day 5',
        title: 'Trek to Dole (4,200m)',
        description: 'Leave the main Everest trail and head towards Gokyo Valley.'
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
        title: 'Trek to Dole',
        description: 'Begin descent with continued views of the Gokyo Valley.'
      },
      {
        day: 'Day 10',
        title: 'Trek to Namche Bazaar',
        description: 'Return to Namche through rhododendron forests.'
      },
      {
        day: 'Day 11',
        title: 'Trek to Lukla',
        description: 'Final day of trekking, returning to Lukla.'
      },
      {
        day: 'Day 12',
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu.'
      },
      {
        day: 'Day 13',
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
      'Sagarmatha National Park permit',
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