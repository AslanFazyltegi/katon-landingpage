'use client';

import { TourCard } from './TourCard';

const tours = [
  {
    title: 'Auto Tour',
    image: '/images/autotour.avif',
    duration: 3,
    price: 299,
    description: 'Experience the freedom of the open road with our guided auto tour through breathtaking landscapes and historic sites.',
    activities: [
      {
        day: 1,
        description: 'Morning departure from the city center. Drive through scenic mountain roads with photo stops at viewpoints. Evening arrival at luxury mountain resort.'
      },
      {
        day: 2,
        description: 'Visit to ancient monuments and local villages. Lunch at traditional restaurant. Afternoon drive through national park.'
      },
      {
        day: 3,
        description: 'Sunrise photography session. Visit to waterfall. Return journey through coastal road with beach stops.'
      }
    ]
  },
  {
    title: 'Horse Riding Tour',
    image: '/images/horseridingtour.avif',
    duration: 2,
    price: 249,
    description: 'Connect with nature on horseback as you traverse beautiful trails and meadows with our experienced guides.',
    activities: [
      {
        day: 1,
        description: 'Introduction to horses and basic riding techniques. Morning trail ride through forest paths. Afternoon ride to mountain viewpoint.'
      },
      {
        day: 2,
        description: 'Full day ride through varied terrain. Visit to traditional horse farm. Evening sunset ride and farewell dinner.'
      }
    ]
  },
  {
    title: 'Hiking Tour',
    image: '/images/hikingtour.avif',
    duration: 4,
    price: 199,
    description: 'Challenge yourself with our guided hiking adventure through pristine wilderness and stunning mountain peaks.',
    activities: [
      {
        day: 1,
        description: 'Early morning start. Hike through ancient forest trails. Evening camping under the stars.'
      },
      {
        day: 2,
        description: 'Summit attempt of local peak. Picnic lunch with panoramic views. Evening at mountain hut.'
      },
      {
        day: 3,
        description: 'Trek through alpine meadows. Visit to mountain lake. Wildlife spotting opportunities.'
      },
      {
        day: 4,
        description: 'Morning nature photography. Descent through different ecological zones. Farewell celebration.'
      }
    ]
  }
];

export function RoutesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Наши маршруты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {tours.map((tour) => (
            <TourCard 
              key={tour.title} 
              {...tour} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
