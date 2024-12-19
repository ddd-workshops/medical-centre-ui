import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';

export type ButtonSize = 'SMALL' | 'MEDIUM' | 'BIG';
export type ButtonVariant = 'PRIMARY' | 'SECONDARY';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const sizeStyles = {
  SMALL: 'px-3 py-1.5 text-sm',
  MEDIUM: 'px-4 py-2',
  BIG: 'px-6 py-3 text-lg'
};

const variantStyles = {
  PRIMARY: 'bg-green-600 text-white hover:bg-green-700',
  SECONDARY: 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100'
};

export const Button = ({
  variant = 'PRIMARY',
  size = 'MEDIUM',
  fullWidth,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'transition duration-200 rounded-lg',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};
