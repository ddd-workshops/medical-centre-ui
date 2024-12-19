import type { Treatment } from '../../contract/types';
import { formatCurrency } from '../../utils/formatCurrency';
import { H3 } from '../Typography/Headings';
import { Paragraph } from '../Typography/Paragraph';

interface TreatmentListProps {
  treatments: Treatment[];
}

export function TreatmentList({ treatments }: TreatmentListProps) {
  return (
    <div className="grid gap-4">
      {treatments.map(treatment => (
        <div key={treatment.id} className="border rounded-lg p-4">
          <H3>{treatment.name}</H3>
          <Paragraph size="MEDIUM" className="mb-2">
            {treatment.shortDescription}
          </Paragraph>
          <Paragraph size="SMALL" className="text-gray-600">
            Duration: {treatment.duration} minutes | Price: {formatCurrency(treatment.price)}
          </Paragraph>
        </div>
      ))}
    </div>
  );
}
