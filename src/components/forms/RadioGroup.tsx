import { useState, useEffect } from 'react';
import { Radio } from './Radio';

type Orientation = 'VERTICAL' | 'HORIZONTAL';

type Option = {
  id: string;
  label: string;
  value: string;
};

type RadioGroupProps = {
  header: React.ReactNode;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  orientation?: Orientation;
};

export const RadioGroup = ({ 
  header, 
  options, 
  value, 
  onChange, 
  orientation = 'VERTICAL',
  className = '' 
}: RadioGroupProps) => {
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (newValue: string) => {
    setLocalValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const containerClasses = orientation === 'VERTICAL' 
    ? 'space-y-4' 
    : 'flex flex-row flex-wrap gap-4';

  return (
    <div className={`${containerClasses} ${className}`}>
      {header && <div className="text-sm font-medium text-green-800 mb-2 w-full">{header}</div>}
      {options.map((option) => (
        <Radio
          key={option.id}
          id={option.id}
          name={header?.toString() ?? 'radio-group'}
          label={option.label}
          value={option.value}
          checked={localValue === option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

