import * as RadixTooltip from '@radix-ui/react-tooltip';
import { type ReactNode } from 'react';

export enum TooltipDirection {
  TOP = 'top',
  TOP_LEFT = 'top-start',
  TOP_RIGHT = 'top-end',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-start',
  BOTTOM_RIGHT = 'bottom-end',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum TooltipSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  direction?: TooltipDirection;
  size?: TooltipSize;
}

const sizeClasses = {
  [TooltipSize.SMALL]: 'max-w-[200px]',
  [TooltipSize.MEDIUM]: 'max-w-[300px]',
  [TooltipSize.LARGE]: 'max-w-[400px]',
};

export const Tooltip = ({
  content,
  children,
  direction = TooltipDirection.TOP,
  size = TooltipSize.MEDIUM,
}: TooltipProps) => {
  const [side, align] = direction.includes('-')
    ? direction.split('-')
    : [direction, 'center'];

  return (
    <RadixTooltip.Root delayDuration={0}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side as 'top' | 'right' | 'bottom' | 'left'}
          align={align as 'start' | 'center' | 'end'}
          className={`z-50 rounded-md bg-gray-800 px-3 py-2 text-sm text-white shadow-md animate-in fade-in-0 zoom-in-95 ${sizeClasses[size]}`}
          sideOffset={5}
        >
          {content}
          <RadixTooltip.Arrow className="fill-gray-800" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
