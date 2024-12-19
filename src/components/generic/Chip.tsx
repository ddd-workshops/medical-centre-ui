import { X } from 'lucide-react';
import type { MouseEvent } from 'react';

export type ChipVariant = 'FILLED' | 'OUTLINED';

export interface ChipProps {
  label: string;
  variant?: ChipVariant;
  onClick?: () => void;
  onRemove?: () => void;
  className?: string;
}

export const Chip = ({ 
  label, 
  variant = 'FILLED', 
  onClick, 
  onRemove,
  className = '' 
}: ChipProps) => {
  const handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm transition-colors';
  const variantStyles = variant === 'FILLED' 
    ? 'bg-green-600 text-white' 
    : 'border border-green-300 text-green-700';
  const interactiveStyles = onClick ? 'cursor-pointer hover:bg-green-700' : '';

  return (
    <div 
      className={`${baseStyles} ${variantStyles} ${interactiveStyles} ${className}`}
      onClick={onClick}
    >
      {label}
      {onRemove && (
        <X 
          className="w-4 h-4 ml-1.5 cursor-pointer hover:text-green-900" 
          onClick={handleRemove}
        />
      )}
    </div>
  );
};
