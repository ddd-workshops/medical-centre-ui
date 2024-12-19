import React from 'react';
import { Link } from 'react-router-dom';
import { H3 } from './Typography/Headings';
import { Paragraph } from './Typography/Paragraph';

interface TileItem {
  title: string;
  description: string;
  link?: string;
}

interface TileListProps {
  items: TileItem[];
  className?: string;
}

export const TileList: React.FC<TileListProps> = ({ items, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 gap-4 ${className}`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-slate-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-emerald-500"
        >
          {item.link ? (
            <Link to={item.link} className="block">
              <H3 className="hover:text-emerald-600">{item.title}</H3>
              <Paragraph>{item.description}</Paragraph>
            </Link>
          ) : (
            <>
              <H3>{item.title}</H3>
              <Paragraph>{item.description}</Paragraph>
            </>
          )}
        </div>
      ))}
    </div>
  );
};