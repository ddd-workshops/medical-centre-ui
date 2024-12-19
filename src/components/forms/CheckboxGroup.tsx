import { FC, useState, useEffect } from 'react';

type Option = {
  id: string;
  label: string;
  value: string;
};

type CheckboxGroupProps = {
  header: React.ReactNode;
  options: Option[];
  values: string[];
  onChange: (values: string[]) => void;
  className?: string;
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ 
  header,
  options, 
  values, 
  onChange, 
  className = '' 
}) => {
  const [localValues, setLocalValues] = useState<string[]>(values);

  const handleChange = (value: string) => {
    const newValues = localValues.includes(value)
      ? localValues.filter((v) => v !== value)
      : [...localValues, value];
    
    setLocalValues(newValues);
    onChange(newValues);
  };

  useEffect(() => {
    setLocalValues(values);
  }, [values]);

  return (
    <div className={`space-y-4 ${className}`}>
      {header && <div className="text-sm font-medium text-green-800 mb-2">{header}</div>}
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-3">
          <input
            type="checkbox"
            id={option.id}
            value={option.value}
            checked={localValues.includes(option.value)}
            onChange={() => handleChange(option.value)}
            className="text-green-600 focus:ring-green-500 h-4 w-4 rounded"
          />
          <label htmlFor={option.id} className="text-sm text-green-700">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

