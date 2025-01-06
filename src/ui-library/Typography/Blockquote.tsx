
import { cn } from '../cn';
import { styles } from '../DesignEnums';

interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
}

export const Blockquote = ({ children, className = '' }: BlockquoteProps) => (
  <blockquote 
    className={cn(
      'pl-4 border-l-4 italic',
      styles.ACCENT.border,
      className
    )}
  >
    {children}
  </blockquote>
);
