import { MapPin, Phone, Clock } from 'lucide-react';
import { Paragraph } from '../Typography/Paragraph';

export function ClinicLocation({ clinic }: ClinicLocationProps) {
  return (
    <div className="space-y-4">
      <H3>{clinic.name}</H3>
      
      <div className="flex items-start space-x-2">
        <MapPin className="h-5 w-5 text-green-500 mt-1" />
        <Paragraph size="MEDIUM">
          {clinic.address}
        </Paragraph>
      </div>

      <div className="flex items-start space-x-2">
        <Phone className="h-5 w-5 text-green-500 mt-1" />
        <Paragraph size="MEDIUM">
          {clinic.phone}
        </Paragraph>
      </div>

      <div className="flex items-start space-x-2">
        <Clock className="h-5 w-5 text-green-500 mt-1" />
        <Paragraph size="SMALL" className="text-gray-600">
          Working hours: {clinic.workingHours}
        </Paragraph>
      </div>
    </div>
  );
}
