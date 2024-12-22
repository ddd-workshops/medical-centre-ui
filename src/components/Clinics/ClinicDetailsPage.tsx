
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ClinicDetails } from './ClinicDetails';
import { clinicsService } from '../../http/clinics';

export function ClinicDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data: clinic, isLoading } = useQuery({
    queryKey: ['clinic', id],
    queryFn: () => clinicsService.getClinicDetails(id!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (!clinic) return <div>Clinic not found</div>;

  return <ClinicDetails clinic={clinic} />;
}