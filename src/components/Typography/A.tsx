import { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils/cn';

type Size = 'SMALL' | 'MEDIUM' | 'LARGE';

const sizeClasses: Record<Size, string> = {
  SMALL: 'text-sm',
  MEDIUM: 'text-base',
  LARGE: 'text-lg',
};

type AProps = ComponentPropsWithoutRef<'a'> & {
  size?: Size;
};

export function A({ size = 'MEDIUM', className, ...props }: AProps) {
  return (
    <a
      {...props}
      className={cn(
        'text-green-600 hover:text-green-500 underline transition-colors',
        sizeClasses[size],
        className
      )}
    />
  );
}
