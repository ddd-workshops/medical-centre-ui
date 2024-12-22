import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export type DropdownSize = 'SMALL' | 'MEDIUM' | 'LARGE';
export type DropdownVariant = 'PRIMARY' | 'SECONDARY' | 'OUTLINE';

interface DropdownProps {
  label: string;  // new required prop
  items: Record<string, string>;
  onChanged: (key: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  value?: string;
  size?: DropdownSize;
  variant?: DropdownVariant;
  className?: string;
}

const sizeClasses = {
  SMALL: 'h-8 text-sm',
  MEDIUM: 'h-10 text-base',
  LARGE: 'h-12 text-lg'
};

const variantClasses = {
  PRIMARY: 'bg-green-600 text-white border-green-600 hover:bg-green-700',
  SECONDARY: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200',
  OUTLINE: 'bg-white text-green-800 border-green-300 hover:border-green-400'
};

export function Dropdown({
  label,  // new prop
  items,
  onChanged,
  placeholder = 'Select...',
  disabled = false,
  error,
  value = '',
  size = 'MEDIUM',
  variant = 'OUTLINE',
  className
}: DropdownProps) {
  const [localState, setLocalState] = useState(value);
  const selectId = `dropdown-${label.replace(/\s+/g, '-').toLowerCase()}`;

  const handleChange = (key: string) => {
    setLocalState(key);
    onChanged(key);
  };

  return (
    <div className="relative">
      <label htmlFor={selectId} className="block text-sm font-medium text-green-700 mb-1">
        {label}
        <div className="relative mt-1">
          <select
            id={selectId}
            value={localState}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            className={cn(
              'w-full rounded-lg border px-3 pr-10 appearance-none cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              sizeClasses[size],
              variantClasses[variant],
              error && 'border-red-500',
              className
            )}
          >
            <option value="">{placeholder}</option>
            {Object.entries(items).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
        </div>
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}