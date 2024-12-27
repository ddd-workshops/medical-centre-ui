import { useState } from 'react';

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
};

export const Switch = ({ checked, onChange, disabled = false, className = '', label }: SwitchProps) => {
  const [localChecked, setLocalChecked] = useState(checked);

  const handleToggle = () => {
    if (!disabled) {
      const newValue = !localChecked;
      setLocalChecked(newValue);
      onChange(newValue);
    }
  };

  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <button
        type="button"
        role="switch"
        aria-checked={localChecked}
        aria-label={label}
        disabled={disabled}
        onClick={handleToggle}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          transition-colors duration-300 ease-in-out
          ${localChecked ? 'bg-green-500' : 'bg-gray-200'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 rounded-full bg-white
            transform transition-transform duration-300 ease-in-out
            ${localChecked ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
      {label && (
        <span className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          {label}
        </span>
      )}
    </label>
  );
};
