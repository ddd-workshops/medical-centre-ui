import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { H3 } from '../ui-library/Typography/Headings';
import { Paragraph } from '../ui-library/Typography/Paragraph';
import { borderStyle, backgroundHoverStyle, type MessageType } from '../ui-library/DesignEnums/MessageType';

interface TileItem {
  title: string;
  description: string;
  link?: string;
  messageType?: MessageType;
}

interface TileListProps {
  items: TileItem[];
  className?: string;
}

export const TileList: React.FC<TileListProps> = ({ items, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 gap-4 ${className}`}>
      {items.map((item, index) => {
        const type = item.messageType ?? 'DEFAULT';
        return (
          <div 
            key={index} 
            className={`rounded-lg p-4 shadow-sm hover:shadow-md transition-all border-l-4 
              ${borderStyle[type]} ${backgroundHoverStyle[type]}`}
          >
            {item.link ? (
              <Link to={item.link} className="block group">
                <div className="flex items-start gap-2">
                  <H3 className="hover:text-emerald-600 underline decoration-emerald-600/30 underline-offset-4">{item.title}</H3>
                  <ArrowRight className="h-5 w-5 text-emerald-600 transition-transform group-hover:scale-120 -mt-0.5" />
                </div>
                <Paragraph>{item.description}</Paragraph>
              </Link>
            ) : (
              <>
                <H3>{item.title}</H3>
                <Paragraph>{item.description}</Paragraph>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};