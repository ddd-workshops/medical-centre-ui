import { cn } from '../cn';
import { Size } from '../DesignLanguage/Sizes';

export type ProgressMeterFill = 'SOLID' | 'GRADIENT';

interface ProgressMeterProps {
  value: number;
  label?: string;
  className?: string;
  size?: Size;
  fill?: ProgressMeterFill;
  showValue?: boolean;
}

const sizeClasses: Record<Size, string> = {
  SMALL: 'h-1.5',
  MEDIUM: 'h-2.5',
  LARGE: 'h-4'
};

const getProgressColor = (value: number, fill: ProgressMeterFill) => {
  if (fill === 'SOLID') {
    if (value <= 33) return 'bg-green-200';
    if (value <= 66) return 'bg-green-500';
    return 'bg-green-700';
  }
  
  if (value <= 33) return 'bg-gradient-to-r from-green-200 to-green-300';
  if (value <= 66) return 'bg-gradient-to-r from-green-200 to-green-500';
  return 'bg-gradient-to-r from-green-200 to-green-700';
};

export function ProgressMeter({ 
  value, 
  className, 
  label, 
  size = 'MEDIUM',
  fill = 'GRADIENT',
  showValue = true 
}: ProgressMeterProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const progressColor = getProgressColor(clampedValue, fill);

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
