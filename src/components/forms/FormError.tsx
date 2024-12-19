import { AlertCircle } from 'lucide-react';
import { Paragraph } from '../Typography/Paragraph';

export function FormError({ message }: FormErrorProps) {
  return (
    <div className="flex items-center space-x-2 text-red-500">
      <AlertCircle className="h-4 w-4" />
      <Paragraph size="SMALL" className="text-red-500 m-0">
        {message}
      </Paragraph>
    </div>
  );
}
