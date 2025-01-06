import { useEffect, useState } from 'react';
import type { PrescribedTreatment } from '../../contract/types';
import { formatCurrency } from '../../utils/formatCurrency';
import { Chip } from '../../ui-library/Generic/Chip';
import { H3 } from '../../ui-library/Typography/Headings';
import { Paragraph } from '../../ui-library/Typography/Paragraph';
import { patientService } from '../../http/patientService';
import { Loader2 } from 'lucide-react';
import { styles } from '../../ui-library/DesignEnums';

const STATUS_VARIANT_MAP: { [ key in PrescribedTreatment['status'] ]: 'SOLID' | 'OUTLINED' } = {
  COMPLETED: 'SOLID',
  IN_PROGRESS: 'SOLID',
  CANCELLED: 'OUTLINED',
  SCHEDULED: 'SOLID',
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
        <Loader2 className={`animate-spin ${styles.ACCENT.text}`} size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
        <Paragraph className={styles.ALERT.text}>{error}</Paragraph>
      </div>
    );
  }

  if (prescribedTreatments.length === 0) {
    return (
      <div className={`p-4 border rounded-lg ${styles.ACCENT.border} ${styles.ACCENT.background}`}>
        <Paragraph>No prescribed treatments found.</Paragraph>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {prescribedTreatments.map(({ id, treatment, prescribedDate, status }) => (
        <div key={id} className={`border ${styles.ACCENT.border} rounded-lg p-4 hover:shadow-md transition-shadow bg-white`}>
          <div className="flex justify-between items-start mb-2">
            <H3>{treatment.name}</H3>
            <Chip fill={STATUS_VARIANT_MAP[status]}>
              {status}
            </Chip>
          </div>
          <Paragraph size="MEDIUM" className="mb-2">
            {treatment.shortDescription}
          </Paragraph>
          <Paragraph size="SMALL" className={styles.ACCENT.text}>
            Prescribed: {new Date(prescribedDate).toLocaleDateString()}
          </Paragraph>
          <Paragraph size="SMALL" className={styles.ACCENT.text}>
            Duration: {treatment.expectedDuration.min}-{treatment.expectedDuration.max} minutes | 
            Price: {formatCurrency(treatment.priceRange.min)} - {formatCurrency(treatment.priceRange.max)}
          </Paragraph>
        </div>
      ))}
    </div>
  );
}
