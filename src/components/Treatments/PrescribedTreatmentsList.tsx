import { useEffect, useState } from 'react';
import type { PrescribedTreatment } from '../../contract/types';
import { formatCurrency } from '../../utils/formatCurrency';
import { Chip } from '../../ui-library/Generic/Chip';
import { H3 } from '../../ui-library/Typography/Headings';
import { Paragraph } from '../../ui-library/Typography/Paragraph';
import { patientService } from '../../http/patientService';
import { Loader2 } from 'lucide-react';

const STATUS_VARIANT_MAP: { [ key in PrescribedTreatment['status'] ]: 'OUTLINED' | 'FILLED' } = {
  COMPLETED: 'FILLED',
  IN_PROGRESS: 'FILLED',
  CANCELLED: 'OUTLINED',
  SCHEDULED: 'FILLED',
}

export function PrescribedTreatmentsList() {
  const [prescribedTreatments, setPrescribedTreatments] = useState<PrescribedTreatment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTreatments = async () => {
      try {
        const data = await patientService.getPrescribedTreatments();
        setPrescribedTreatments(data);
      } catch (err) {
        setError(`Failed to load prescribed treatments: ${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadTreatments();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="animate-spin text-green-600" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
        <Paragraph className="text-red-600">{error}</Paragraph>
      </div>
    );
  }

  if (prescribedTreatments.length === 0) {
    return (
      <div className="p-4 border border-green-100 rounded-lg bg-green-50">
        <Paragraph>No prescribed treatments found.</Paragraph>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {prescribedTreatments.map(({ id, treatment, prescribedDate, status }) => (
        <div key={id} className="border border-green-100 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
          <div className="flex justify-between items-start mb-2">
            <H3>{treatment.name}</H3>
            <Chip variant={STATUS_VARIANT_MAP[status]} label={status} />
          </div>
          <Paragraph size="MEDIUM" className="mb-2">
            {treatment.shortDescription}
          </Paragraph>
          <Paragraph size="SMALL" className="text-green-600">
            Prescribed: {new Date(prescribedDate).toLocaleDateString()}
          </Paragraph>
          <Paragraph size="SMALL" className="text-green-600">
            Duration: {treatment.expectedDuration.min}-{treatment.expectedDuration.max} minutes | 
            Price: {formatCurrency(treatment.priceRange.min)} - {formatCurrency(treatment.priceRange.max)}
          </Paragraph>
        </div>
      ))}
    </div>
  );
}
