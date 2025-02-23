import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, DollarSign, Calendar, DollarSignIcon } from 'lucide-react';
import Image from 'next/image';

interface DayActivity {
  day: number;
  description: string;
}

interface TourProps {
  title: string;
  image: string;
  duration: number;
  price: number;
  description: string;
  activities: DayActivity[];
}

export function TourCard({ 
  title, 
  image, 
  duration, 
  price, 
  description, 
  activities,
}: TourProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="relative h-48 sm:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>Дней {duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span>{price} KZT</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isExpanded ? 'Меньше' : 'Подробнее'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <div className={`mt-4 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t pt-4">
            <h4 className="text-xl font-semibold mb-4">Программа тура:</h4>
            {activities.map((activity) => (
              <div key={activity.day} className="mb-4">
                <div className="flex items-center gap-2 font-semibold text-blue-600 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span>День {activity.day}</span>
                </div>
                <p className="text-gray-600 ml-7">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
