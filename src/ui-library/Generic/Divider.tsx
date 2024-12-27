import { cn } from '../../utils/cn';

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr 
      className={cn(
        'h-1 my-4 border-0 bg-gradient-to-r from-green-200 via-green-500 to-green-200',
        className
      )} 
    />
  );
}
