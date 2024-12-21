import type { FC } from 'react';

export type SPINNER_SIZE = 'SMALL' | 'LARGE';

interface SpinnerProps {
  size?: SPINNER_SIZE;
}

export const Spinner: FC<SpinnerProps> = ({ size = 'LARGE' }) => {
  const dimensions = size === 'SMALL' ? 'w-8 h-8' : 'w-16 h-16';
  const borderWidth = size === 'SMALL' ? 'border-2' : 'border-4';

  return (
    <div className="flex justify-center items-center">
      <div className={`relative ${dimensions}`}>
        <div className={`absolute w-full h-full rounded-full ${borderWidth} border-green-200/30`}></div>
        <div className={`absolute w-full h-full rounded-full ${borderWidth} border-green-600 border-t-transparent animate-spin`}></div>
      </div>
    </div>
  );
}
