import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { MessageKind, messageStyles, variantIcons } from '../MessageKind/MessageKind';

export interface EntryProps {
  variant: MessageKind;
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
      className={`block border-l-4 pl-4 ${messageStyles[variant]} ${to ? 'hover:bg-gray-50 transition-colors cursor-pointer' : ''}`}
    >
      <div className="flex items-center gap-2">
        <IconComponent className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
        <p className="font-medium">{label}</p>
      </div>
      <p className="text-gray-600 mt-1">{children}</p>
    </ContentComponent>
  );
};
