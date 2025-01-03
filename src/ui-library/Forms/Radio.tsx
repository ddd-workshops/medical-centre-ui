import { FC, useState, useEffect } from 'react';

type RadioProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
};

export const Radio: FC<RadioProps> = ({ 
  id, 
  name,
  label, 
  value,
  checked, 
  onChange,
  className = '' 
}) => {
  const [localChecked, setLocalChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalChecked(true);
    onChange(e.target.value);
  };

  useEffect(() => {
    setLocalChecked(checked);
  }, [checked]);

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={localChecked}
        onChange={handleChange}
        className="accent-emerald-600 h-4 w-4 border-gray-300 text-green-500 focus:ring-green-500 checked:bg-green-500 checked:hover:bg-green-600"
      />
      <label htmlFor={id} className="text-sm text-green-700">
        {label}
      </label>
    </div>
  );
};
