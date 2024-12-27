import { cn } from '../../utils/cn';
import { Size } from '../DesignEnums/Sizes';

interface ParagraphProps {
  children: React.ReactNode;
  size?: Size;
  className?: string;
}

const sizeClasses: Record<Size, string> = {
  SMALL: 'text-sm',
  MEDIUM: 'text-base',
  LARGE: 'text-lg',
};

export function Paragraph({ children, size = 'MEDIUM', className }: ParagraphProps) {
  return (
    <p className={cn(
      'text-gray-700 leading-relaxed mb-4',
      sizeClasses[size],
      className
    )}>
      {children}
    </p>
  );
}
