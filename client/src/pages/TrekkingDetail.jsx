import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const TrekkingDetail = () => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const { id } = useParams();

  // Trek data mapping
  const treksData = {
    'everest-base-camp': {
      title: 'Trek Everest Base Camp',
      category: 'TREKKING',
      subtitle: 'Experience the heart of the Himalayas and trek to the world\'s highest basecamp',
      heroImage: 'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 2900,
      duration: '12-14 days',
      difficulty: 'Moderate',
      maxAltitude: '5,364m',
      season: 'Mar-May & Sep-Nov',
      overview: `The Everest Base Camp trek is one of the world's most iconic adventures, taking you through the legendary Khumbu region to the base of Mount Everest. This journey follows the historic route used by Tenzing Norgay and Edmund Hillary in their first successful summit of Everest.

Starting from Lukla (2,860m), the trek winds through traditional Sherpa villages, ancient Buddhist monasteries, and stunning rhododendron forests. As you ascend, the landscape transforms dramatically into a high-altitude wilderness of glaciers, moraines, and towering peaks.

The trek offers unparalleled views of the world's highest mountains, including Mount Everest (8,848m), Lhotse (8,516m), Nuptse (7,861m), and Ama Dablam (6,812m). Along the way, you'll experience rich Sherpa culture, visit the famous Tengboche Monastery, and explore the bustling mountain town of Namche Bazaar.`,
      highlights: [
        'Stand at Everest Base Camp (5,364m)',
        'Sunrise view over Everest from Kala Patthar (5,545m)',
        'Visit the historic Tengboche Monastery',
        'Experience authentic Sherpa culture',
        'Trek through the stunning Khumbu Valley',
        'Explore Namche Bazaar, the gateway to Everest'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Kathmandu (1,400m)',
          description: 'Welcome meeting, trek briefing, and equipment check'
        },
        {
          day: 2,
          title: 'Fly to Lukla (2,860m) & Trek to Phakding (2,610m)',
          description: '3-4 hours trek through Dudh Koshi Valley'
        },
        {
          day: 3,
          title: 'Trek to Namche Bazaar (3,440m)',
          description: '5-6 hours trek, crossing suspension bridges and first views of Everest'
        },
        {
          day: 4,
          title: 'Acclimatization Day in Namche Bazaar',
          description: 'Day hike to Everest View Hotel, visit Khumjung village'
        },
        {
          day: 5,
          title: 'Trek to Tengboche (3,870m)',
          description: '5 hours trek, visit Tengboche Monastery'
        },
        {
          day: 6,
          title: 'Trek to Dingboche (4,360m)',
          description: '5-6 hours trek through rhododendron forests'
        },
        {
          day: 7,
          title: 'Acclimatization Day in Dingboche',
          description: 'Hike to Nangkartshang Peak for acclimatization'
        },
        {
          day: 8,
          title: 'Trek to Lobuche (4,940m)',
          description: '4-5 hours trek past the Khumbu Glacier'
        },
        {
          day: 9,
          title: 'Trek to Gorak Shep (5,170m) & EBC (5,364m)',
          description: '7-8 hours round trip to Everest Base Camp'
        },
        {
          day: 10,
          title: 'Kala Patthar (5,545m) & trek to Pheriche (4,371m)',
          description: 'Early morning hike for sunrise views, then descend'
        },
        {
          day: 11,
          title: 'Trek to Namche Bazaar (3,440m)',
          description: '6-7 hours descent through familiar terrain'
        },
        {
          day: 12,
          title: 'Trek to Lukla (2,860m)',
          description: 'Final day of trekking, celebration dinner'
        },
        {
          day: 13,
          title: 'Fly back to Kathmandu',
          description: 'Morning flight, free afternoon in Kathmandu'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'All necessary permits and fees',
          'All accommodation during the trek (tea houses/lodges)',
          'All breakfast during the trek',
          'Round-trip flights (Kathmandu - Lukla - Kathmandu)',
          'Welcome and farewell dinners',
          'All ground transportation as per itinerary',
          'Insurance for guides and porters',
          'Down jacket and sleeping bag (to be returned)',
          'Duffle bag for porter (to be returned)',
          'Oximeter to check oxygen saturation'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Lunch and dinner during the trek',
          'Travel insurance',
          'Personal expenses (phone calls, laundry, bar bills, etc.)',
          'Tips for guides and porters',
          'Extra expenses due to unforeseen circumstances'
        ]
      },
      faqs: [
        {
          question: 'How difficult is the Everest Base Camp Trek?',
          answer: 'The trek is rated as moderate to challenging. While no technical climbing is involved, you need good physical fitness as you\'ll be walking 5-7 hours daily at high altitudes. Prior trekking experience is beneficial but not mandatory.'
        },
        {
          question: 'Do I need special permits?',
          answer: 'Yes, you need a TIMS card and Sagarmatha National Park permit. These are included in your trek package and will be arranged by us.'
        },
        {
          question: 'What is the best time to trek?',
          answer: 'The best seasons are pre-monsoon (March to May) and post-monsoon (September to November). These periods offer stable weather and clear mountain views.'
        },
        {
          question: 'What about altitude sickness?',
          answer: 'Altitude sickness can affect anyone regardless of fitness. Our itinerary includes proper acclimatization days. Guides are trained in altitude sickness prevention and carry first aid equipment.'
        },
        {
          question: 'What type of accommodation can I expect?',
          answer: 'You\'ll stay in tea houses/lodges along the trail. These are basic but comfortable, with shared bathrooms. Rooms are typically twin-sharing with simple beds and pillows.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
          title: 'Everest Base Camp',
          description: 'The iconic view of Mount Everest from Base Camp'
        },
        {
          url: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Namche Bazaar',
          description: 'The gateway to Everest and hub of Sherpa culture'
        },
        {
          url: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Kala Patthar',
          description: 'Sunrise view of Everest from Kala Patthar'
        },
        {
          url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Tengboche Monastery',
          description: 'The spiritual center of the Khumbu region'
        }
      ]
    },
    'annapurna-base-camp': {
      title: 'Trek Annapurna Base Camp',
      category: 'TREKKING',
      subtitle: 'Journey through diverse landscapes to the heart of the Annapurna sanctuary',
      heroImage: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 2500,
      duration: '10-12 days',
      difficulty: 'Moderate',
      maxAltitude: '4,130m',
      season: 'Mar-May & Sep-Nov',
      overview: `The Annapurna Base Camp trek, also known as the Annapurna Sanctuary trek, is a spectacular journey into the heart of the Annapurna range. This trek offers an incredible diversity of landscapes and cultures, making it one of Nepal's most popular treks.

The trail begins in the lower hills, passing through traditional Gurung villages, terraced farmlands, and lush rhododendron forests. As you ascend, the vegetation changes dramatically, eventually opening up to the stunning Annapurna Sanctuary, a natural amphitheater surrounded by some of the world's highest peaks.

What makes this trek unique is its relatively rapid ascent into the high mountains, offering close-up views of peaks like Annapurna I (8,091m), Annapurna South (7,219m), and the sacred Machhapuchhre (6,993m). The trek also provides insights into the rich culture of the Gurung people, one of Nepal's many ethnic groups.`,
      highlights: [
        'Reach Annapurna Base Camp (4,130m)',
        'Sunrise over the Annapurna massif',
        'Trek through diverse climate zones',
        'Experience Gurung culture and villages',
        'Visit hot springs in Jhinu Danda',
        'View the sacred Machhapuchhre peak'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Pokhara',
          description: 'Trek briefing and preparation'
        },
        {
          day: 2,
          title: 'Drive to Nayapul and Trek to Tikhedhunga (1,540m)',
          description: '4-5 hours trek through Modi River Valley'
        },
        {
          day: 3,
          title: 'Trek to Ghorepani (2,860m)',
          description: '6-7 hours trek up stone stairs and through forests'
        },
        {
          day: 4,
          title: 'Poon Hill (3,210m) & Trek to Tadapani (2,630m)',
          description: 'Early morning hike for sunrise, then 5-6 hours trek'
        },
        {
          day: 5,
          title: 'Trek to Chhomrong (2,170m)',
          description: '5-6 hours trek through rhododendron forest'
        },
        {
          day: 6,
          title: 'Trek to Dovan (2,600m)',
          description: '6 hours trek along the Modi River'
        },
        {
          day: 7,
          title: 'Trek to Machhapuchhre Base Camp (3,700m)',
          description: '5-6 hours trek into the sanctuary'
        },
        {
          day: 8,
          title: 'Trek to ABC (4,130m) and back to MBC',
          description: 'Early morning trek to ABC for sunrise, explore sanctuary'
        },
        {
          day: 9,
          title: 'Trek to Bamboo (2,310m)',
          description: '6-7 hours descent'
        },
        {
          day: 10,
          title: 'Trek to Jhinu Danda (1,780m)',
          description: '5-6 hours trek, enjoy natural hot springs'
        },
        {
          day: 11,
          title: 'Trek to Nayapul and Drive to Pokhara',
          description: '4-5 hours trek and 2 hours drive'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'All necessary permits and fees',
          'All accommodation during the trek (tea houses/lodges)',
          'All breakfast during the trek',
          'All ground transportation as per itinerary',
          'Insurance for guides and porters',
          'Down jacket and sleeping bag (to be returned)',
          'Duffle bag for porter (to be returned)',
          'TIMS card and ACAP permit'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Lunch and dinner during the trek',
          'Travel insurance',
          'Personal expenses (phone calls, laundry, bar bills, etc.)',
          'Tips for guides and porters',
          'Extra expenses due to unforeseen circumstances'
        ]
      },
      faqs: [
        {
          question: 'How difficult is the Annapurna Base Camp Trek?',
          answer: 'The trek is rated as moderate. While it reaches high altitude, the ascent is gradual and the trail is well-maintained. Good physical fitness is required as you\'ll be walking 5-6 hours daily.'
        },
        {
          question: 'What permits do I need?',
          answer: 'You need a TIMS card and Annapurna Conservation Area Permit (ACAP). Both are included in your trek package and will be arranged by us.'
        },
        {
          question: 'What is the best time to trek?',
          answer: 'The best seasons are pre-monsoon (March to May) and post-monsoon (September to November). Spring offers blooming rhododendrons, while autumn provides clearer skies.'
        },
        {
          question: 'Are there hot showers available?',
          answer: 'Yes, most tea houses offer hot showers for an additional fee. However, availability and water temperature may vary at higher altitudes.'
        },
        {
          question: 'Is internet available during the trek?',
          answer: 'Wi-Fi is available at most tea houses for an additional fee, but connection speed can be slow. Mobile coverage is also available in many areas.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Annapurna Sanctuary',
          description: 'The natural amphitheater surrounded by peaks'
        },
        {
          url: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Machapuchare',
          description: 'The sacred Fish Tail mountain'
        },
        {
          url: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Bamboo Forest',
          description: 'Trekking through lush rhododendron forests'
        },
        {
          url: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Poon Hill',
          description: 'Sunrise over the Annapurna range'
        }
      ]
    },
    'everest-three-pass': {
      title: 'Trek Everest Three Pass',
      category: 'TREKKING',
      subtitle: 'Challenge yourself with the ultimate high-altitude trek in the Everest region',
      heroImage: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 4300,
      duration: '18-20 days',
      difficulty: 'Challenging',
      maxAltitude: '5,535m',
      season: 'Mar-May & Sep-Nov',
      overview: `The Everest Three Pass trek is the ultimate adventure in the Everest region, crossing three high passes: Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,340m). This challenging trek is perfect for experienced trekkers seeking to explore the remote corners of the Khumbu region.

This circular route takes you through less-traveled paths, offering a more comprehensive experience of the Everest region than the classic Base Camp trek. You'll visit all the highlights of the region, including Everest Base Camp and Gokyo Lakes, while also exploring hidden valleys and remote monasteries.

The trek demands good physical fitness and prior high-altitude experience, as you'll be crossing three challenging passes above 5,300m. The reward is unparalleled views of four 8,000m peaks: Everest, Lhotse, Makalu, and Cho Oyu, plus countless other Himalayan giants.`,
      highlights: [
        'Cross three high passes over 5,300m',
        'Visit both Everest Base Camp and Gokyo Lakes',
        'View four 8,000m peaks',
        'Explore remote Nangpa Valley',
        'Trek through hidden Sherpa villages',
        'Experience the challenging Khumbu Glacier'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Kathmandu (1,400m)',
          description: 'Detailed trek briefing and equipment check'
        },
        {
          day: 2,
          title: 'Fly to Lukla (2,860m) & Trek to Phakding (2,610m)',
          description: '3-4 hours trek through Dudh Koshi Valley'
        },
        {
          day: 3,
          title: 'Trek to Namche Bazaar (3,440m)',
          description: '5-6 hours trek, crossing suspension bridges'
        },
        {
          day: 4,
          title: 'Acclimatization in Namche',
          description: 'Day hike to Khumjung village and monastery'
        },
        {
          day: 5,
          title: 'Trek to Tengboche (3,870m)',
          description: '5 hours trek, visit famous monastery'
        },
        {
          day: 6,
          title: 'Trek to Dingboche (4,360m)',
          description: '5-6 hours trek into Imja Valley'
        },
        {
          day: 7,
          title: 'Acclimatization in Dingboche',
          description: 'Hike to Nangkartshang Peak'
        },
        {
          day: 8,
          title: 'Cross Kongma La Pass (5,535m) to Lobuche',
          description: '8-9 hours challenging day over first pass'
        },
        {
          day: 9,
          title: 'Trek to Gorak Shep & EBC (5,364m)',
          description: 'Visit Everest Base Camp'
        },
        {
          day: 10,
          title: 'Kala Patthar & Trek to Dzongla',
          description: 'Early morning viewpoint climb'
        },
        {
          day: 11,
          title: 'Cross Cho La Pass (5,420m) to Thangnak',
          description: '7-8 hours trek over second pass'
        },
        {
          day: 12,
          title: 'Trek to Gokyo (4,790m)',
          description: 'Explore Gokyo Lakes'
        },
        {
          day: 13,
          title: 'Gokyo Ri (5,357m)',
          description: 'Climb Gokyo Ri for panoramic views'
        },
        {
          day: 14,
          title: 'Cross Renjo La Pass (5,340m) to Lungden',
          description: '7-8 hours trek over final pass'
        },
        {
          day: 15,
          title: 'Trek to Thame (3,800m)',
          description: 'Visit ancient monastery'
        },
        {
          day: 16,
          title: 'Trek to Namche Bazaar',
          description: '5-6 hours trek'
        },
        {
          day: 17,
          title: 'Trek to Lukla',
          description: 'Final day of trekking'
        },
        {
          day: 18,
          title: 'Fly to Kathmandu',
          description: 'Morning flight, free afternoon'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'All necessary permits and fees',
          'All accommodation during the trek (tea houses/lodges)',
          'All breakfast during the trek',
          'Round-trip flights (Kathmandu - Lukla - Kathmandu)',
          'Welcome and farewell dinners',
          'All ground transportation as per itinerary',
          'Insurance for guides and porters',
          'Down jacket and sleeping bag (to be returned)',
          'Duffle bag for porter (to be returned)',
          'Oximeter and first aid kit',
          'Emergency oxygen cylinder'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Lunch and dinner during the trek',
          'Travel insurance',
          'Personal expenses (phone calls, laundry, bar bills, etc.)',
          'Tips for guides and porters',
          'Extra expenses due to unforeseen circumstances',
          'Personal climbing gear'
        ]
      },
      faqs: [
        {
          question: 'How challenging is the Three Passes Trek?',
          answer: 'This is one of the most challenging treks in the Everest region. You need excellent fitness and preferably prior high-altitude trekking experience. The trek involves crossing three passes above 5,300m and requires 6-8 hours of walking daily.'
        },
        {
          question: 'Do I need technical climbing skills?',
          answer: 'While no technical climbing is required, some sections may require basic scrambling and use of micro-crampons (provided) during icy conditions. Your guide will assist you in challenging sections.'
        },
        {
          question: 'What about acclimatization?',
          answer: 'The itinerary includes several acclimatization days. This trek reaches very high altitudes, so proper acclimatization is crucial. Guides are trained in high-altitude medicine and carry emergency oxygen.'
        },
        {
          question: 'What is the accommodation like?',
          answer: 'You\'ll stay in tea houses, but facilities become more basic as you go higher. Some locations may only have shared rooms and basic facilities. Sleeping bags are provided.'
        },
        {
          question: 'What if I need to turn back?',
          answer: 'Safety is our priority. If you or your guide decides it\'s unsafe to continue, we\'ll arrange for you to return to a lower altitude. The guide\'s decision regarding safety is final.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Kongma La Pass',
          description: 'One of the challenging high passes on the route'
        },
        {
          url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Cho La Pass',
          description: 'Crossing the glacier on Cho La'
        },
        {
          url: 'https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Renjo La Pass',
          description: 'View of Everest from Renjo La'
        },
        {
          url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Gokyo Lakes',
          description: 'The turquoise lakes of Gokyo'
        }
      ]
    },
    'manaslu-circuit': {
      title: 'Trek Manaslu Circuit',
      category: 'TREKKING',
      subtitle: 'Explore the remote trails around the world\'s eighth highest mountain',
      heroImage: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 3200,
      duration: '14-16 days',
      difficulty: 'Challenging',
      maxAltitude: '5,160m',
      season: 'Mar-May & Sep-Nov',
      overview: `The Manaslu Circuit trek is a spectacular journey around Mount Manaslu (8,163m), the eighth highest mountain in the world. This remote trek offers a perfect blend of cultural immersion and dramatic mountain scenery, making it an excellent alternative to the more crowded classic treks.

The trail follows the ancient salt trading route along the Budhi Gandaki River, passing through subtropical forests, traditional villages, and high-altitude landscapes. The trek showcases incredible diversity, from lowland Hindu villages to high-altitude Buddhist settlements influenced by Tibetan culture.

A highlight of this trek is crossing the challenging Larkya La Pass (5,160m), offering stunning views of Manaslu, Himlung Himal, Cheo Himal, and Annapurna II. The circuit has recently become more accessible with the addition of basic teahouses, but still maintains its remote and authentic character.`,
      highlights: [
        'Circle the mighty Mount Manaslu',
        'Cross the challenging Larkya La Pass',
        'Experience diverse cultures and landscapes',
        'Visit ancient Buddhist monasteries',
        'Trek through remote mountain villages',
        'Witness traditional Tibetan culture'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Drive from Kathmandu to Soti Khola (700m)',
          description: '8-9 hours scenic drive'
        },
        {
          day: 2,
          title: 'Trek to Machha Khola (869m)',
          description: '6-7 hours following Budhi Gandaki River'
        },
        {
          day: 3,
          title: 'Trek to Jagat (1,340m)',
          description: '6-7 hours trek through tropical region'
        },
        {
          day: 4,
          title: 'Trek to Deng (1,860m)',
          description: '6-7 hours trek entering Buddhist region'
        },
        {
          day: 5,
          title: 'Trek to Namrung (2,630m)',
          description: '6-7 hours trek with first views of Manaslu'
        },
        {
          day: 6,
          title: 'Trek to Samagaon (3,530m)',
          description: '6-7 hours trek, visit Pungen Monastery'
        },
        {
          day: 7,
          title: 'Acclimatization in Samagaon',
          description: 'Day hike to Manaslu Base Camp'
        },
        {
          day: 8,
          title: 'Trek to Samdo (3,860m)',
          description: '4-5 hours trek in high mountains'
        },
        {
          day: 9,
          title: 'Acclimatization in Samdo',
          description: 'Hike towards Tibetan border'
        },
        {
          day: 10,
          title: 'Trek to Dharamsala (4,460m)',
          description: '4-5 hours trek to base of Larkya La'
        },
        {
          day: 11,
          title: 'Cross Larkya La (5,160m) to Bimthang (3,720m)',
          description: '8-9 hours challenging pass crossing'
        },
        {
          day: 12,
          title: 'Trek to Tilije (2,300m)',
          description: '5-6 hours descent with great views'
        },
        {
          day: 13,
          title: 'Trek to Tal (1,700m)',
          description: '5-6 hours trek joining Annapurna Circuit'
        },
        {
          day: 14,
          title: 'Drive to Besisahar and Kathmandu',
          description: 'Long day of driving back to Kathmandu'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'Special Manaslu Restricted Area Permit',
          'All accommodation during the trek (tea houses/lodges)',
          'All breakfast during the trek',
          'All ground transportation as per itinerary',
          'Insurance for guides and porters',
          'Down jacket and sleeping bag (to be returned)',
          'Duffle bag for porter (to be returned)',
          'ACAP and MCAP permits',
          'Emergency evacuation arrangement'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Lunch and dinner during the trek',
          'Travel insurance',
          'Personal expenses (phone calls, laundry, bar bills, etc.)',
          'Tips for guides and porters',
          'Extra expenses due to unforeseen circumstances'
        ]
      },
      faqs: [
        {
          question: 'Why choose the Manaslu Circuit?',
          answer: 'Manaslu Circuit offers a more remote and authentic experience compared to popular treks. You\'ll encounter fewer tourists, experience pristine landscapes, and witness traditional Tibetan Buddhist culture.'
        },
        {
          question: 'What permits are required?',
          answer: 'You need several permits: Restricted Area Permit, Manaslu Conservation Area Permit (MCAP), and Annapurna Conservation Area Permit (ACAP). All are included and arranged by us.'
        },
        {
          question: 'How difficult is the Larkya La Pass?',
          answer: 'Crossing Larkya La (5,160m) is challenging and requires good fitness. The pass can be snowy and takes 8-10 hours to cross. Proper acclimatization and preparation are essential.'
        },
        {
          question: 'What about accommodation?',
          answer: 'Tea houses in Manaslu are more basic than those on popular routes. Some places only offer shared rooms and basic facilities. However, the authenticity of the experience makes up for basic amenities.'
        },
        {
          question: 'Is it safe to trek in this remote area?',
          answer: 'Yes, the route is safe and our guides are experienced in remote treks. We carry satellite phones and have evacuation procedures in place. The remoteness adds to the adventure while maintaining safety standards.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Larkya La Pass',
          description: 'The highest point of the Manaslu Circuit'
        },
        {
          url: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Manaslu Base Camp',
          description: 'View of Mount Manaslu from base camp'
        },
        {
          url: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Buddhist Monasteries',
          description: 'Ancient monasteries along the circuit'
        },
        {
          url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Local Villages',
          description: 'Traditional Tibetan villages en route'
        }
      ]
    },
    'langtang-valley': {
      title: 'Trek Langtang Valley',
      category: 'TREKKING',
      subtitle: 'Discover the valley of glaciers and pristine mountain landscapes',
      heroImage: 'https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 1800,
      duration: '7-9 days',
      difficulty: 'Moderate',
      maxAltitude: '4,380m',
      season: 'Mar-May & Sep-Nov',
      overview: `The Langtang Valley trek is a beautiful journey through Nepal's third most popular trekking region, offering a perfect blend of natural beauty and cultural richness. Often called the "Valley of Glaciers," Langtang showcases some of Nepal's most stunning mountain landscapes.

The trek begins in the lower regions with lush forests and traditional Tamang villages, gradually ascending into the high-altitude valley. The upper reaches of Langtang feature dramatic glaciers, yak pastures, and spectacular views of peaks including Langtang Lirung (7,227m), Langtang Ri, and Dorje Lakpa.

What makes this trek special is its accessibility from Kathmandu and the opportunity to experience authentic Tamang culture, heavily influenced by neighboring Tibet. The region is also known for its diverse wildlife, including the elusive red panda, and its beautiful rhododendron forests that bloom in spring.`,
      highlights: [
        'Experience authentic Tamang culture',
        'Visit the historic Kyanjin Gompa',
        'View massive Langtang glaciers',
        'Climb Kyanjin Ri (4,773m)',
        'Trek through rhododendron forests',
        'Spot diverse Himalayan wildlife'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Drive from Kathmandu to Syabrubesi (1,550m)',
          description: '7-8 hours scenic drive'
        },
        {
          day: 2,
          title: 'Trek to Lama Hotel (2,380m)',
          description: '6 hours trek through forests'
        },
        {
          day: 3,
          title: 'Trek to Mundu (3,543m)',
          description: '6-7 hours trek, enter Langtang Valley'
        },
        {
          day: 4,
          title: 'Trek to Kyanjin Gompa (3,870m)',
          description: '4-5 hours trek, visit ancient monastery'
        },
        {
          day: 5,
          title: 'Acclimatization Day - Hike to Kyanjin Ri (4,773m)',
          description: 'Day hike for panoramic views'
        },
        {
          day: 6,
          title: 'Trek to Lama Hotel (2,380m)',
          description: '6-7 hours descent'
        },
        {
          day: 7,
          title: 'Trek to Syabrubesi (1,550m)',
          description: '5-6 hours trek'
        },
        {
          day: 8,
          title: 'Drive back to Kathmandu',
          description: '7-8 hours return drive'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'All necessary permits and fees',
          'All accommodation during the trek (tea houses/lodges)',
          'All breakfast during the trek',
          'All ground transportation as per itinerary',
          'Insurance for guides and porters',
          'Down jacket and sleeping bag (to be returned)',
          'Duffle bag for porter (to be returned)',
          'TIMS card and Langtang National Park permit'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Lunch and dinner during the trek',
          'Travel insurance',
          'Personal expenses (phone calls, laundry, bar bills, etc.)',
          'Tips for guides and porters',
          'Extra expenses due to unforeseen circumstances'
        ]
      },
      faqs: [
        {
          question: 'Why choose Langtang Valley Trek?',
          answer: 'Langtang offers a perfect blend of natural beauty and cultural experiences in a shorter duration. It\'s less crowded than Everest or Annapurna, and its proximity to Kathmandu makes it easily accessible.'
        },
        {
          question: 'What makes Langtang unique?',
          answer: 'Langtang is known for its diverse flora and fauna, including the possibility of spotting red pandas. The region also offers unique Tamang culture and spectacular views of glaciers and mountains.'
        },
        {
          question: 'How difficult is the trek?',
          answer: 'The trek is rated as moderate. The trail is well-maintained and the altitude gain is gradual. You should be able to walk 5-6 hours daily with a light daypack.'
        },
        {
          question: 'What about accommodation?',
          answer: 'You\'ll stay in tea houses that offer basic but comfortable accommodation. Most places have private rooms, but facilities are shared. Hot showers are available at most locations.'
        },
        {
          question: 'Is it safe after the 2015 earthquake?',
          answer: 'Yes, the trail has been fully restored and is safe to trek. New tea houses have been built, and the local community has shown remarkable resilience in rebuilding the region.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Kyanjin Gompa',
          description: 'The spiritual heart of Langtang'
        },
        {
          url: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Langtang Valley',
          description: 'The rebuilt Langtang Village'
        },
        {
          url: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Tserko Ri',
          description: 'Panoramic views from Tserko Ri'
        },
        {
          url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Yak Pastures',
          description: 'High altitude grazing grounds'
        }
      ]
    },
    'upper-mustang': {
      title: 'Trek Upper Mustang',
      category: 'TREKKING',
      subtitle: 'Journey through the hidden kingdom of Lo, featuring dramatic landscapes and preserved Tibetan culture',
      heroImage: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 3500,
      duration: '12-14 days',
      difficulty: 'Moderate',
      maxAltitude: '3,840m',
      season: 'Mar-May & Sep-Nov',
      overview: `Upper Mustang, known as the "Last Forbidden Kingdom," is a remarkable trek into one of Nepal's most preserved regions. This ancient Buddhist kingdom, formerly the Kingdom of Lo, remains a living museum of Tibetan culture, featuring centuries-old monasteries, cave dwellings, and traditional villages.

The landscape of Upper Mustang is unlike anywhere else in Nepal, characterized by dramatic red cliffs, deep canyons, and desert-like terrain. Located in the rain shadow of the Himalayas, the region experiences very little rainfall, making it ideal for trekking even during the monsoon season.

The trek takes you through medieval villages, past ancient Buddhist monasteries and caves, and into the walled city of Lo Manthang, the former capital of the Kingdom of Lo. Along the way, you'll witness preserved Tibetan Buddhist culture, traditional architecture, and some of the world's oldest Buddhist shrines and thangka paintings.`,
      highlights: [
        'Explore the walled city of Lo Manthang',
        'Visit ancient Buddhist monasteries',
        'Witness preserved Tibetan culture',
        'See dramatic desert landscapes',
        'Experience traditional Lo-pa lifestyle',
        'View ancient cave dwellings'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Fly to Jomsom (2,743m)',
          description: 'Morning flight, trek preparation'
        },
        {
          day: 2,
          title: 'Trek to Kagbeni (2,810m)',
          description: '4 hours trek along Kali Gandaki'
        },
        {
          day: 3,
          title: 'Trek to Chele (3,050m)',
          description: '5-6 hours trek into restricted area'
        },
        {
          day: 4,
          title: 'Trek to Syanbochen (3,475m)',
          description: '6-7 hours trek through villages'
        },
        {
          day: 5,
          title: 'Trek to Ghami (3,520m)',
          description: '5-6 hours trek past ancient chortens'
        },
        {
          day: 6,
          title: 'Trek to Tsarang (3,575m)',
          description: '5-6 hours trek, visit monastery'
        },
        {
          day: 7,
          title: 'Trek to Lo Manthang (3,840m)',
          description: '4-5 hours trek to ancient capital'
        },
        {
          day: 8,
          title: 'Explore Lo Manthang',
          description: 'Visit royal palace and monasteries'
        },
        {
          day: 9,
          title: 'Trek to Drakmar (3,810m)',
          description: '6-7 hours trek through different route'
        },
        {
          day: 10,
          title: 'Trek to Ghiling (3,806m)',
          description: '5-6 hours trek'
        },
        {
          day: 11,
          title: 'Trek to Chhuksang (3,050m)',
          description: '5-6 hours trek'
        },
        {
          day: 12,
          title: 'Trek to Jomsom (2,743m)',
          description: '6-7 hours final trek'
        },
        {
          day: 13,
          title: 'Fly to Pokhara',
          description: 'Morning flight'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'Special Upper Mustang Restricted Area Permit',
          'All accommodation during the trek (tea houses/lodges)',
          'All breakfast during the trek',
          'All ground transportation as per itinerary',
          'Flights (Pokhara - Jomsom - Pokhara)',
          'Insurance for guides and porters',
          'Down jacket and sleeping bag (to be returned)',
          'Duffle bag for porter (to be returned)',
          'ACAP permit'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Lunch and dinner during the trek',
          'Travel insurance',
          'Personal expenses (phone calls, laundry, bar bills, etc.)',
          'Tips for guides and porters',
          'Extra expenses due to unforeseen circumstances'
        ]
      },
      faqs: [
        {
          question: 'What makes Upper Mustang special?',
          answer: 'Upper Mustang is a restricted area preserving one of the last vestiges of traditional Tibetan Buddhist culture. Its unique desert-like landscape, ancient monasteries, and cave dwellings make it unlike any other trek in Nepal.'
        },
        {
          question: 'Why is it called the "forbidden kingdom"?',
          answer: 'Until 1992, Upper Mustang was a restricted demilitarized area and a separate kingdom within Nepal. Its isolation has helped preserve its unique culture and traditions.'
        },
        {
          question: 'What permits do I need?',
          answer: 'You need a special Upper Mustang Restricted Area Permit (USD 500 for 10 days) and ACAP permit. These are included in your trek package and will be arranged by us.'
        },
        {
          question: 'When is the best time to visit?',
          answer: 'Unlike other regions, Upper Mustang is suitable for trekking even during monsoon (June-August) as it lies in a rain shadow area. March to November is generally good for trekking.'
        },
        {
          question: 'What about accommodation?',
          answer: 'Tea houses in Upper Mustang are basic but comfortable. Some traditional guesthouses offer a more authentic experience. Facilities are simple but clean.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Lo Manthang',
          description: 'The walled city of Lo Manthang'
        },
        {
          url: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Cave Monasteries',
          description: 'Ancient cave monasteries of Mustang'
        },
        {
          url: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Desert Landscape',
          description: 'The unique desert terrain of Upper Mustang'
        },
        {
          url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Tibetan Culture',
          description: 'Traditional festivals and customs'
        }
      ]
    },
    'gokyo-lakes': {
      title: 'Trek Gokyo Lakes',
      category: 'TREKKING',
      subtitle: 'Trek to the world\'s highest freshwater lake system, offering spectacular views of four 8,000m peaks',
      heroImage: 'https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 2600,
      duration: '12-14 days',
      difficulty: 'Moderate',
      maxAltitude: '5,357m',
      season: 'Mar-May & Sep-Nov',
      overview: `The Gokyo Lakes trek is a stunning alternative to the classic Everest Base Camp route, featuring the spectacular Gokyo Valley and its system of turquoise lakes - the highest freshwater lake system in the world. This trek offers some of the best mountain views in the Everest region.

The journey takes you through traditional Sherpa villages and pristine forests before entering the high-altitude wilderness of the Gokyo Valley. The highlight is reaching the stunning Gokyo Lakes, a series of six emerald-colored lakes set against a backdrop of towering peaks.

From Gokyo Ri (5,357m), you'll enjoy one of the best panoramic views in the Himalayas, including four 8,000m peaks: Everest, Lhotse, Makalu, and Cho Oyu. The trek also features the dramatic Ngozumpa Glacier, the longest glacier in Nepal.`,
      highlights: [
        'Visit world\'s highest freshwater lakes',
        'Climb Gokyo Ri for panoramic views',
        'See four 8,000m peaks',
        'Cross the Ngozumpa Glacier',
        'Experience Sherpa culture',
        'Trek through pristine valleys'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Fly to Lukla (2,860m)',
          description: 'Morning flight from Kathmandu'
        },
        {
          day: 2,
          title: 'Trek to Phakding (2,610m)',
          description: '3-4 hours easy trek'
        },
        {
          day: 3,
          title: 'Trek to Namche Bazaar (3,440m)',
          description: '5-6 hours uphill trek'
        },
        {
          day: 4,
          title: 'Acclimatization in Namche',
          description: 'Day hike to Everest View Hotel'
        },
        {
          day: 5,
          title: 'Trek to Dole (4,200m)',
          description: '5-6 hours trek leaving main EBC trail'
        },
        {
          day: 6,
          title: 'Trek to Machhermo (4,470m)',
          description: '4-5 hours trek with altitude gain'
        },
        {
          day: 7,
          title: 'Trek to Gokyo (4,790m)',
          description: '4-5 hours trek to first lakes'
        },
        {
          day: 8,
          title: 'Explore Gokyo Lakes',
          description: 'Visit fourth and fifth lakes'
        },
        {
          day: 9,
          title: 'Climb Gokyo Ri (5,357m)',
          description: 'Early morning climb for sunrise'
        },
        {
          day: 10,
          title: 'Trek to Dole (4,200m)',
          description: '5-6 hours descent'
        },
        {
          day: 11,
          title: 'Trek to Namche (3,440m)',
          description: '5-6 hours trek'
        },
        {
          day: 12,
          title: 'Trek to Lukla (2,860m)',
          description: 'Final day of trekking'
        },
        {
          day: 13,
          title: 'Fly to Kathmandu',
          description: 'Morning flight'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'All necessary permits and fees',
          'All accommodation during the trek (tea houses/lodges)',
          'All breakfast during the trek',
          'Round-trip flights (Kathmandu - Lukla - Kathmandu)',
          'Welcome and farewell dinners',
          'All ground transportation as per itinerary',
          'Insurance for guides and porters',
          'Down jacket and sleeping bag (to be returned)',
          'Duffle bag for porter (to be returned)',
          'Oximeter to check oxygen saturation'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Lunch and dinner during the trek',
          'Travel insurance',
          'Personal expenses (phone calls, laundry, bar bills, etc.)',
          'Tips for guides and porters',
          'Extra expenses due to unforeseen circumstances'
        ]
      },
      faqs: [
        {
          question: 'Why choose Gokyo Lakes over EBC?',
          answer: 'The Gokyo Lakes trek offers equally spectacular mountain views with fewer crowds. The turquoise lakes, Gokyo Ri viewpoint, and Ngozumpa Glacier make it a unique alternative to the classic EBC route.'
        },
        {
          question: 'How difficult is the trek?',
          answer: 'The trek is rated moderate to challenging. While it reaches high altitude (5,357m at Gokyo Ri), the trail is generally good. You need good fitness for 5-6 hours of daily walking.'
        },
        {
          question: 'What makes the lakes special?',
          answer: 'The Gokyo Lakes are the world\'s highest freshwater lake system, consisting of six emerald-colored lakes. They are considered sacred by both Hindus and Buddhists.'
        },
        {
          question: 'What about altitude sickness?',
          answer: 'The risk of altitude sickness is similar to EBC trek. Our itinerary includes proper acclimatization days, and guides are trained in altitude sickness prevention.'
        },
        {
          question: 'Can I combine it with EBC?',
          answer: 'Yes, it\'s possible to combine Gokyo Lakes with EBC by crossing Cho La Pass. This would add 3-4 days to the itinerary and requires good fitness.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Gokyo Ri',
          description: 'Sunrise view from Gokyo Ri'
        },
        {
          url: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Third Lake',
          description: 'The largest of the Gokyo Lakes'
        },
        {
          url: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Ngozumpa Glacier',
          description: 'The longest glacier in the Himalayas'
        },
        {
          url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Gokyo Village',
          description: 'The highest settlement in the region'
        }
      ]
    },
    'kanchenjunga-base-camp': {
      title: 'Kanchenjunga Base Camp Trek',
      category: 'TREKKING',
      subtitle: "A remote trek to the base of the world's third highest peak, featuring pristine wilderness and diverse ecosystems",
      heroImage: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 3800,
      duration: '20 days',
      difficulty: 'Challenging',
      maxAltitude: '5,143m',
      season: 'Mar-May & Sep-Nov',
      overview: `The Kanchenjunga Base Camp trek is an extraordinary journey to the foot of the world's third-highest mountain (8,586m). This remote trek in eastern Nepal offers a perfect combination of spectacular mountain scenery, rich biodiversity, and cultural encounters with local Rai and Limbu communities.

The trek follows the ancient salt trading route through the Kanchenjunga Conservation Area, home to diverse flora and fauna including the snow leopard, Himalayan black bear, and red panda. The trail passes through various climatic zones, from subtropical valleys to alpine meadows.

This challenging trek visits both the north and south base camps of Kanchenjunga, offering incredible views of the massive mountain and its surrounding peaks. The remote nature of the trek means fewer tourists and a more authentic trekking experience.`,
      highlights: [
        'Visit both north and south base camps',
        'View the worlds third highest peak',
        'Experience pristine wilderness',
        'Encounter diverse wildlife',
        'Meet local Rai and Limbu people',
        'Cross high mountain passes'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Fly to Bhadrapur and drive to Ilam',
          description: 'Flight and 3-4 hours drive'
        },
        {
          day: 2,
          title: 'Drive to Taplejung (2,420m)',
          description: '6-7 hours scenic drive'
        },
        {
          day: 3,
          title: 'Trek to Lali Kharka (2,266m)',
          description: '5-6 hours trek through villages'
        },
        {
          day: 4,
          title: 'Trek to Khesewa (2,120m)',
          description: '6-7 hours trek along ridges'
        },
        {
          day: 5,
          title: 'Trek to Mamankhe (2,785m)',
          description: '6-7 hours trek through forests'
        },
        {
          day: 6,
          title: 'Trek to Yamphudin (2,080m)',
          description: '6-7 hours trek crossing rivers'
        },
        {
          day: 7,
          title: 'Trek to Tortong (3,000m)',
          description: '6-7 hours steep ascent'
        },
        {
          day: 8,
          title: 'Trek to Tseram (3,870m)',
          description: '5-6 hours trek along glacier'
        },
        {
          day: 9,
          title: 'Trek to Ramche (4,580m)',
          description: '5-6 hours trek to base camp region'
        },
        {
          day: 10,
          title: 'Explore South Base Camp (4,730m)',
          description: 'Day trip to south base camp'
        },
        {
          day: 11,
          title: 'Trek to Ghunsa (3,595m)',
          description: '6-7 hours trek'
        },
        {
          day: 12,
          title: 'Acclimatization in Ghunsa',
          description: 'Rest and local exploration'
        },
        {
          day: 13,
          title: 'Trek to Khambachen (4,050m)',
          description: '5-6 hours trek along river'
        },
        {
          day: 14,
          title: 'Trek to Lhonak (4,780m)',
          description: '4-5 hours trek in high altitude'
        },
        {
          day: 15,
          title: 'Visit North Base Camp (5,143m)',
          description: 'Day trip to north base camp'
        },
        {
          day: 16,
          title: 'Trek back to Ghunsa',
          description: '7-8 hours return trek'
        },
        {
          day: 17,
          title: 'Trek to Phale (3,140m)',
          description: '5-6 hours descent'
        },
        {
          day: 18,
          title: 'Trek to Chirwa (1,270m)',
          description: '6-7 hours trek'
        },
        {
          day: 19,
          title: 'Trek to Taplejung',
          description: 'Final day of trekking'
        },
        {
          day: 20,
          title: 'Drive to Bhadrapur',
          description: 'Long day of driving'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'Special Kanchenjunga Restricted Area Permit',
          'All accommodation during the trek (tea houses/lodges)',
          'All breakfast during the trek',
          'All ground transportation as per itinerary',
          'Flights (Kathmandu - Bhadrapur - Kathmandu)',
          'Insurance for guides and porters',
          'Down jacket and sleeping bag (to be returned)',
          'Duffle bag for porter (to be returned)',
          'Emergency oxygen and first aid kit'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Lunch and dinner during the trek',
          'Travel insurance',
          'Personal expenses (phone calls, laundry, bar bills, etc.)',
          'Tips for guides and porters',
          'Extra expenses due to unforeseen circumstances'
        ]
      },
      faqs: [
        {
          question: 'What makes Kanchenjunga special?',
          answer: "Kanchenjunga is a remote trek to the world's third-highest peak (8,586m). It offers pristine wilderness, diverse ecosystems, and authentic cultural experiences with very few other tourists."
        },
        {
          question: 'How challenging is this trek?',
          answer: 'This is one of the most challenging treks in Nepal, requiring excellent fitness and endurance. The trek is long (20-22 days), reaches high altitude, and involves basic accommodation.'
        },
        {
          question: 'What permits are needed?',
          answer: 'You need a special Kanchenjunga Restricted Area Permit and Conservation Area Permit. These are included in the package and arranged by us.'
        },
        {
          question: 'What about accommodation?',
          answer: 'Being a remote trek, accommodation is basic. Tea houses are simple, and some might only offer shared rooms. Camping might be required in some sections during peak season.'
        },
        {
          question: 'Is it safe to trek in such a remote area?',
          answer: 'Yes, our guides are experienced in remote treks and carry satellite phones. We have emergency evacuation procedures in place, though evacuations can take longer in this remote region.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'North Base Camp',
          description: 'View of Kanchenjunga from North Base Camp'
        },
        {
          url: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'South Base Camp',
          description: 'The approach to South Base Camp'
        },
        {
          url: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Yalung Glacier',
          description: 'The massive Yalung Glacier'
        },
        {
          url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Local Culture',
          description: 'Traditional Limbu villages en route'
        }
      ]
    },
    'khopra-ridge': {
      title: 'Khopra Ridge Trek',
      category: 'TREKKING',
      subtitle: 'A hidden gem offering panoramic views of the Annapurna and Dhaulagiri ranges',
      heroImage: 'https://images.unsplash.com/photo-1570731617731-fb0aa4d9b9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      price: 1800,
      duration: '8-10 days',
      difficulty: 'Moderate',
      maxAltitude: '3,660m',
      season: 'Mar-May & Oct-Nov',
      overview: `The Khopra Ridge Trek (also known as Khopra Danda) is an off-the-beaten-path adventure in the Annapurna region that offers spectacular mountain views and authentic cultural experiences. This relatively new trekking route provides a perfect alternative to the crowded classic trails while maintaining the essence of Himalayan trekking.

The trek takes you through beautiful rhododendron forests, traditional Gurung villages, and high ridges offering panoramic views of the Annapurna and Dhaulagiri ranges. The highlight is the Khopra Ridge itself, where you'll witness breathtaking sunrise and sunset views over some of Nepal's highest peaks.

Unlike more popular routes, this trek allows you to experience the local culture and traditional lifestyle of the mountain communities in a more intimate setting, as fewer tourists venture onto these trails.`,
      highlights: [
        'Panoramic views from Khopra Ridge',
        'Visit the sacred Khayer Lake',
        'Stay in community lodges',
        'Trek through rhododendron forests',
        'Experience authentic village life',
        'Less crowded alternative trek'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Drive to Nayapul and trek to Ghandruk (1,940m)',
          description: '1.5 hours drive and 5-6 hours trek'
        },
        {
          day: 2,
          title: 'Trek to Tadapani (2,630m)',
          description: '4-5 hours trek through rhododendron forest'
        },
        {
          day: 3,
          title: 'Trek to Dobato (3,420m)',
          description: '5-6 hours trek with mountain views'
        },
        {
          day: 4,
          title: 'Hike to Muldai viewpoint and trek to Khopra Ridge (3,660m)',
          description: 'Early morning viewpoint hike and 5-6 hours trek'
        },
        {
          day: 5,
          title: 'Rest day at Khopra Ridge',
          description: 'Optional hike to Khayer Lake (4,500m)'
        },
        {
          day: 6,
          title: 'Trek to Swanta (2,200m)',
          description: '5-6 hours descent through villages'
        },
        {
          day: 7,
          title: 'Trek to Ulleri (2,050m)',
          description: '4-5 hours trek on stone steps'
        },
        {
          day: 8,
          title: 'Trek to Nayapul and drive to Pokhara',
          description: '3-4 hours trek and 1.5 hours drive'
        }
      ],
      included: {
        included: [
          'Professional English-speaking trek guide',
          'Porter service (2 trekkers: 1 porter)',
          'All necessary permits and fees',
          'Community lodge accommodation during trek',
          'All meals during the trek (breakfast, lunch, dinner)',
          'Transportation (Pokhara - Nayapul - Pokhara)',
          'Insurance for guide and porter',
          'First aid kit',
          'Trekking map',
          'All government and local taxes'
        ],
        excluded: [
          'International flights',
          'Nepal visa fee',
          'Personal expenses',
          'Travel insurance',
          'Tips for guides and porters',
          'Personal trekking gear',
          'Drinks and snacks',
          'Additional costs due to unforeseen circumstances'
        ]
      },
      faqs: [
        {
          question: 'How difficult is the Khopra Ridge Trek?',
          answer: 'The trek is rated as moderate. While it reaches a reasonable altitude, the daily walking distances are manageable. Good physical fitness is recommended as you\'ll be walking 4-6 hours daily on varied terrain.'
        },
        {
          question: 'What makes Khopra Ridge special?',
          answer: 'Khopra Ridge offers a less crowded alternative to popular Annapurna treks while providing spectacular mountain views. The community lodges support local development, and the trail offers unique cultural experiences.'
        },
        {
          question: 'What permits do I need?',
          answer: 'You need the TIMS card and Annapurna Conservation Area Permit (ACAP). Both are included in the trek package and will be arranged by us.'
        },
        {
          question: 'What is the accommodation like?',
          answer: 'You\'ll stay in community lodges run by local villages. These are basic but comfortable, with shared facilities. Your stay directly supports community development projects.'
        },
        {
          question: 'When is the best time to trek?',
          answer: 'The best seasons are spring (March-May) for rhododendron blooms and autumn (October-November) for clear mountain views. Winter treks are possible but cold, while summer brings monsoon rains.'
        }
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1623207613517-afe2e80e5d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Khopra Ridge',
          description: 'Panoramic views from Khopra Ridge'
        },
        {
          url: 'https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Dhaulagiri Range',
          description: 'Stunning views of Dhaulagiri mountains'
        },
        {
          url: 'https://images.unsplash.com/photo-1542082012-cd3d95983588?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Khayer Lake',
          description: 'The sacred alpine lake near Khopra Ridge'
        },
        {
          url: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
          title: 'Local Culture',
          description: 'Traditional Gurung village life'
        }
      ]
    }
  };

  // Get current trek data based on URL
  const currentTrek = treksData[id] || treksData['everest-base-camp'];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={currentTrek.heroImage}
            alt={currentTrek.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Trek Category Badge */}
            <span className="inline-block bg-[#F28C38] text-white px-4 py-1 rounded-full text-sm">
              {currentTrek.category}
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl">
              {currentTrek.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              {currentTrek.subtitle}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Link
                to="/enquire"
                className="inline-flex items-center bg-[#F28C38] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E67D29] transition-colors group"
              >
                Enquire now
                <svg
                  className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center"
          >
            <motion.div className="w-1 h-1 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Trek Details Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <div className="prose prose-lg prose-invert">
                <h2 className="text-3xl font-bold text-white">Overview</h2>
                <div className="whitespace-pre-line">
                  {currentTrek.overview}
                </div>
              </div>

              {/* Trek Highlights */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Trek Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentTrek.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <svg
                        className="w-6 h-6 text-[#F28C38] flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Detailed Itinerary</h3>
                <div className="space-y-4">
                  {currentTrek.itinerary.map((day, index) => (
                    <div key={index} className="border-l-2 border-[#F28C38] pl-4">
                      <h4 className="text-white font-semibold">Day {day.day}: {day.title}</h4>
                      <p className="text-gray-400">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Included Items */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-[#F28C38]">Included</h4>
                    <ul className="space-y-2">
                      {currentTrek.included.included.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300">
                          <svg
                            className="w-5 h-5 text-[#F28C38] flex-shrink-0 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included Items */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-[#F28C38]">Not Included</h4>
                    <ul className="space-y-2">
                      {currentTrek.included.excluded.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300">
                          <svg
                            className="w-5 h-5 text-[#F28C38] flex-shrink-0 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Gallery Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Trek Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentTrek.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => window.open(image.url, '_blank')}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                          <p className="text-gray-300 text-sm">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {currentTrek.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-800 pb-4">
                      <h4 className="text-lg font-semibold text-[#F28C38] mb-2">{faq.question}</h4>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">Trek Details</h3>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="text-[#F28C38] text-3xl font-bold">
                    USD ${currentTrek.price}
                  </div>
                  <div className="text-gray-400">per person</div>
                </div>

                {/* Trek Info */}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-gray-400">{currentTrek.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div>
                      <div className="font-medium">Difficulty</div>
                      <div className="text-gray-400">{currentTrek.difficulty}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <div className="font-medium">Max Altitude</div>
                      <div className="text-gray-400">{currentTrek.maxAltitude}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-[#F28C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                    </svg>
                    <div>
                      <div className="font-medium">Best Season</div>
                      <div className="text-gray-400">{currentTrek.season}</div>
                    </div>
                  </div>
                </div>

                {/* Book Now Button */}
                <button className="w-full bg-[#F28C38] text-white mt-8 py-3 px-6 rounded-full hover:bg-[#E67D29] transition-colors font-medium">
                  Book Your Trek
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekkingDetail; 