
import React from 'react';
import { Link } from 'react-router-dom';

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
              <h3 className="text-lg font-medium text-gray-900 hover:text-emerald-600">{item.title}</h3>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </Link>
          ) : (
            <>
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};