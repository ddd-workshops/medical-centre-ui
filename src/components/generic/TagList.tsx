import type { LucideIcon } from 'lucide-react';
import { Tag, type TagVariant, type TagSize } from './Tag';

import { cn } from '../../utils/cn';

interface TagListProps {
  tags: string[];
  variant?: TagVariant;
  size?: TagSize;
  icon?: LucideIcon;
  onIconClick?: (item: string) => void;
  onTagClick?: (item: string) => void;
  className?: string;
}

export function TagList({ 
  tags, 
  variant = 'PRIMARY', 
  size = 'MEDIUM',
  icon, 
  onIconClick,
  onTagClick,
  className 
}: TagListProps) {
  if (!tags?.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <Tag 
          key={tag} 
          variant={variant}
          size={size}
          icon={icon}
          onIconClick={() => onIconClick?.(tag)}
          onClick={onTagClick ? () => onTagClick(tag) : undefined}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}
