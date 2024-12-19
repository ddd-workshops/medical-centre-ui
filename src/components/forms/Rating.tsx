import { Star } from 'lucide-react';
import { useState } from 'react';

type RatingProps = {
  scale?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

export const Rating = ({ scale = 5, value, onChange, className = '' }: RatingProps) => {
  const [localValue, setLocalValue] = useState(value);
  const [hoverValue, setHoverValue] = useState(0);
  const displayValue = hoverValue || localValue;
  
  const handleValueChange = (newValue: number) => {
    setLocalValue(newValue);
    onChange(newValue);
    setHoverValue(0);
  };

  return (
    <div className={`relative inline-flex ${className}`}>
      <div className="flex gap-2">
        {Array.from({ length: scale }, (_, index) => (
          <div key={index} className="w-6 h-6 flex items-center justify-center">
            <Star
              className="w-5 h-5"
              fill="#e5e7eb" // gray-200
              strokeWidth={0}
            />
          </div>
        ))}
      </div>
      <div 
        className="absolute top-0 left-0 flex gap-2"
        style={{ 
          width: `calc(${(displayValue / scale) * 100}% + ${displayValue > 0 ? 0.5 : 0}rem)`
        }}
      >
        {Array.from({ length: scale }, (_, index) => (
          <div 
            key={index} 
            className="w-6 h-6 flex items-center justify-center"
            onClick={() => handleValueChange(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
          >
            <Star
              className="w-5 h-5 cursor-pointer transition-all duration-200 hover:scale-110"
              fill="#fbbf24" // yellow-400
              strokeWidth={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
