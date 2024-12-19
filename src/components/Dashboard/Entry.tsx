import { 
  Bell, 
  Calendar, 
  AlertTriangle,
  Info,
  CheckCircle2,
  type LucideIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export const enum EntryVariant {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ALERT = 'ALERT',
  UPDATE = 'UPDATE'
}

const variantStyles = {
  [EntryVariant.INFO]: 'border-blue-500',
  [EntryVariant.SUCCESS]: 'border-emerald-500',
  [EntryVariant.WARNING]: 'border-yellow-500',
  [EntryVariant.ALERT]: 'border-red-500',
  [EntryVariant.UPDATE]: 'border-purple-500',
};

const variantIcons: Record<EntryVariant, LucideIcon> = {
  [EntryVariant.INFO]: Info,
  [EntryVariant.SUCCESS]: CheckCircle2,
  [EntryVariant.WARNING]: AlertTriangle,
  [EntryVariant.ALERT]: Bell,
  [EntryVariant.UPDATE]: Calendar,
};

export interface EntryProps {
  variant: EntryVariant;
  label: string;
  children: ReactNode;
  to?: string;
}

export const Entry = ({ variant, label, children, to }: EntryProps) => {
  const IconComponent = variantIcons[variant];
  const ContentComponent = to ? Link : 'div';

  return (
    <ContentComponent 
      to={to ?? ''} 
      className={`block border-l-4 pl-4 ${variantStyles[variant]} ${to ? 'hover:bg-gray-50 transition-colors cursor-pointer' : ''}`}
    >
      <div className="flex items-center gap-2">
        <IconComponent className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
        <p className="font-medium">{label}</p>
      </div>
      <p className="text-gray-600 mt-1">{children}</p>
    </ContentComponent>
  );
};
