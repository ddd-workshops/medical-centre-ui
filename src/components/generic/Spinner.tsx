import type { FC } from 'react';

export type SPINNER_SIZE = 'SMALL' | 'MEDIUM' | 'LARGE';

interface SpinnerProps {
  size?: SPINNER_SIZE;
}

export const Spinner: FC<SpinnerProps> = ({ size = 'MEDIUM' }) => {
  const dimensions = {
    SMALL: 'w-8 h-8',
    MEDIUM: 'w-12 h-12',
    LARGE: 'w-16 h-16'
  }[size];

  const borderWidth = {
    SMALL: 'border',
    MEDIUM: 'border-2',
    LARGE: 'border-4'
  }[size];

  return (
    <div className="flex justify-center items-center">
      <div className={`relative ${dimensions}`}>
        <div className={`absolute w-full h-full rounded-full ${borderWidth} border-green-200/30`}></div>
        <div className={`absolute w-full h-full rounded-full ${borderWidth} border-green-600 border-t-transparent animate-spin`}></div>
      </div>
    </div>
  );
}
