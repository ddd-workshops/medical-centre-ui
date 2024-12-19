import { formatCurrency } from '../../utils/formatCurrency';
import { H3 } from '../Typography/Headings';
import { Paragraph } from '../Typography/Paragraph';
import type { Treatment } from '../../contract/types';

interface TreatmentDescriptionProps {
  treatment: Treatment;
}

export function TreatmentDescription({ treatment }: TreatmentDescriptionProps) {
  return (
    <div className="space-y-4">
      <H3>{treatment.name}</H3>
      <Paragraph size="MEDIUM">
        {treatment.description}
      </Paragraph>
      <Paragraph size="SMALL" className="text-gray-600">
        Duration: {treatment.duration} minutes
      </Paragraph>
      <Paragraph size="SMALL" className="text-gray-600">
        Price: {formatCurrency(treatment.price)}
      </Paragraph>
      // ...existing code...
    </div>
  );
}
