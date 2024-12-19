import { cn } from '../../utils/cn';

export type ProgressMeterSize = 'SMALL' | 'MEDIUM' | 'LARGE';
export type ProgressMeterVariant = 'PRIMARY' | 'GRADIENT';

interface ProgressMeterProps {
  value: number;
  label?: string;
  className?: string;
  size?: ProgressMeterSize;
  variant?: ProgressMeterVariant;
  showValue?: boolean;
}

const sizeClasses = {
  SMALL: 'h-1.5',
  MEDIUM: 'h-2.5',
  LARGE: 'h-4'
};

const variantClasses = {
  PRIMARY: 'bg-green-600',
  GRADIENT: 'bg-gradient-to-r from-green-500 to-green-600'
};

const getProgressColor = (value: number, variant: ProgressMeterVariant) => {
  if (variant === 'PRIMARY') {
    if (value <= 33) return 'bg-green-300';
    if (value <= 66) return 'bg-green-500';
    return 'bg-green-600';
  }
  
  if (value <= 33) return 'bg-gradient-to-r from-green-200 to-green-300';
  if (value <= 66) return 'bg-gradient-to-r from-green-400 to-green-500';
  return 'bg-gradient-to-r from-green-500 to-green-600';
};

export function ProgressMeter({ 
  value, 
  className, 
  label, 
  size = 'MEDIUM',
  variant = 'GRADIENT',
  showValue = true 
}: ProgressMeterProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const progressColor = getProgressColor(clampedValue, variant);

  return (
    <div className={cn('w-full', className)} role="progressbar" aria-valuenow={clampedValue} aria-valuemin={0} aria-valuemax={100}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1.5">
          {label && (
            <span className="text-sm font-medium text-gray-700">{label}</span>
          )}
          {showValue && (
            <span className="text-sm font-medium text-gray-700">{clampedValue}%</span>
          )}
        </div>
      )}
      <div className={cn('w-full bg-gray-100 rounded-full overflow-hidden', sizeClasses[size])}>
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-out',
            progressColor
          )}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
