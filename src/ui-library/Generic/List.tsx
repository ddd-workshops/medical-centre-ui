import { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type ListProps<T> = {
  items: T[];
  bulletIcon: LucideIcon;
  renderItem: (item: T) => ReactNode;
};

export function List<T>({ items, bulletIcon: Icon, renderItem }: ListProps<T>) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <Icon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
