import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';
import { Size } from '../DesignEnums/Sizes';
import { Variant } from '../DesignEnums/Variants';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const sizeStyles: Record<Size, string> = {
  SMALL: 'px-3 py-1.5 text-sm',
  MEDIUM: 'px-4 py-2',
  LARGE: 'px-6 py-3 text-lg'
};

const variantStyles: { [key in Variant]: string } = {
  PRIMARY: 'bg-green-600 text-white hover:bg-green-700',
  SECONDARY: 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100',
  OUTLINED: 'border border-green-600 text-green-600 hover:bg-green-50'
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
