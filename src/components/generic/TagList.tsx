import type { LucideIcon } from 'lucide-react';
import { Tag, type TagVariant, type TagSize } from './Tag';

import { cn } from '../../utils/cn';

interface TagListProps {
  items: string[];
  variant?: TagVariant;
  size?: TagSize;
  icon?: LucideIcon;
  onIconClick?: (item: string) => void;
  onTagClick?: (item: string) => void;
  className?: string;
}

export function TagList({ 
  items, 
  variant = 'PRIMARY', 
  size = 'MEDIUM',
  icon, 
  onIconClick,
  onTagClick,
  className 
}: TagListProps) {
  if (!items?.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <Tag 
          key={item} 
          variant={variant}
          size={size}
          icon={icon}
          onIconClick={() => onIconClick?.(item)}
          onClick={onTagClick ? () => onTagClick(item) : undefined}
        >
          {item}
        </Tag>
      ))}
    </div>
  );
}
