import { FC, useState, useEffect } from 'react';
import { Checkbox } from './Checkbox';

type Orientation = 'VERTICAL' | 'HORIZONTAL';

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
  orientation?: Orientation;
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ 
  header,
  options, 
  values, 
  onChange,
  orientation = 'VERTICAL', 
  className = '' 
}) => {
  const [localValues, setLocalValues] = useState<string[]>(values);

  const handleChange = (value: string, checked: boolean) => {
    const newValues = checked
      ? [...localValues, value]
      : localValues.filter((v) => v !== value);
    
    setLocalValues(newValues);
    onChange(newValues);
  };

  useEffect(() => {
    setLocalValues(values);
  }, [values]);

  const containerClasses = orientation === 'VERTICAL' 
    ? 'space-y-4' 
    : 'flex flex-row flex-wrap gap-4';

  return (
    <div className={`${containerClasses} ${className}`}>
      {header && <div className="text-sm font-medium text-green-800 mb-2 w-full">{header}</div>}
      {options.map((option) => (
        <Checkbox
          key={option.id}
          id={option.id}
          label={option.label}
          checked={localValues.includes(option.value)}
          onChange={(checked) => handleChange(option.value, checked)}
        />
      ))}
    </div>
  );
};

