import { cn } from '../../utils/cn';

export type ParagraphSize = 'SMALL' | 'MEDIUM' | 'LARGE';

interface ParagraphProps {
  children: React.ReactNode;
  size?: ParagraphSize;
  className?: string;
}

const sizeClasses: Record<ParagraphSize, string> = {
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
