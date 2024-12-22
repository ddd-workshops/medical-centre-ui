import { useState, useEffect } from 'react';

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
};

export const RadioGroup = ({ header, options, value, onChange, className = '' }: RadioGroupProps) => {
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (newValue: string) => {
    setLocalValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className={`space-y-4 ${className}`}>
      {header && <div className="text-sm font-medium text-green-800 mb-2">{header}</div>}
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-3">
          <input
            type="radio"
            id={option.id}
            value={option.value}
            checked={localValue === option.value}
            onChange={(e) => handleChange(e.target.value)}
            className="accent-emerald-600 h-4 w-4 border-gray-300 text-green-500 focus:ring-green-500 checked:bg-green-500 checked:hover:bg-green-600"
          />
          <label htmlFor={option.id} className="text-sm text-green-700">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

