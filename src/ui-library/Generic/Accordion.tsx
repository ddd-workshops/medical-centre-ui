import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion = ({ items, className }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 flex justify-between items-center bg-white hover:bg-green-50 transition-colors duration-200"
          >
            <span className="font-medium text-gray-900">{item.title}</span>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-green-600 transition-transform duration-200',
                openIndex === index ? 'rotate-180' : ''
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-200',
              openIndex === index ? 'max-h-[500px]' : 'max-h-0'
            )}
          >
            <div className="px-4 py-3 text-gray-700 bg-white border-t border-gray-100">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
