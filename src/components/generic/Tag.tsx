import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export type TagVariant = 'PRIMARY' | 'SECONDARY' | 'OUTLINE' | 'WARNING' | 'ERROR';
export type TagSize = 'SMALL' | 'MEDIUM' | 'LARGE';

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  icon?: LucideIcon;
  onIconClick?: () => void;
  onClick?: () => void;
  className?: string;
}

const variantStyles = {
  PRIMARY: 'bg-green-100 text-green-800 hover:bg-green-200',
  SECONDARY: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  OUTLINE: 'border border-green-300 text-green-700 hover:bg-green-50',
  WARNING: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
  ERROR: 'bg-red-100 text-red-800 hover:bg-red-200'
};

const sizeStyles = {
  SMALL: 'text-xs px-2 py-0.5',
  MEDIUM: 'text-sm px-2.5 py-1',
  LARGE: 'text-base px-3 py-1.5'
};

export function Tag({ 
  children, 
  variant = 'PRIMARY', 
  size = 'MEDIUM',
  icon: Icon, 
  onIconClick, 
  onClick,
  className 
}: TagProps) {
  return (
    <span 
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1',
        variantStyles[variant],
        sizeStyles[size],
        onClick && 'cursor-pointer underline hover:text-green-700',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
      {Icon && (
        <Icon 
          className={cn(
            'cursor-pointer transition-colors',
            size === 'SMALL' && 'ml-1 h-3 w-3',
            size === 'MEDIUM' && 'ml-1.5 h-4 w-4',
            size === 'LARGE' && 'ml-2 h-5 w-5'
          )}
          onClick={(e) => {
            e.stopPropagation();
            onIconClick?.();
          }}
        />
      )}
    </span>
  );
}
