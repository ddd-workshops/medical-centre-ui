import { useEffect, useState } from 'react';
import { getPrescribedTreatments } from '../api/services/prescribedTreatmentsService';
import { PrescribedTreatmentsList } from '../components/Treatments/PrescribedTreatmentsList';
import { H2 } from '../components/Typography/Headings';
import type { PrescribedTreatment } from '../contract/types';
import { useAuth } from '../hooks/useAuth';

export function PrescribedTreatmentsPage() {
  const { user } = useAuth();
  const [treatments, setTreatments] = useState<PrescribedTreatment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTreatments = async () => {
      if (user?.patientId) {
        const data = await getPrescribedTreatments(user.patientId);
        setTreatments(data);
        setIsLoading(false);
      }
    };

    fetchTreatments();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <H2 className="mb-6">Your Prescribed Treatments</H2>
      <PrescribedTreatmentsList prescribedTreatments={treatments} />
    </div>
  );
}
