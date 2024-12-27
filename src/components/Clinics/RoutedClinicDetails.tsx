import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { clinicService } from '../../http/clinicsService';
import { ClinicDetails } from './ClinicDetails';
import { Spinner } from '../../ui-library/Generic/Spinner';
import { FailText } from '../../ui-library/Typography/Text';

export function RoutedClinicDetails() {
  const { id } = useParams();

  const { data: clinic, isLoading, error } = useQuery({
    queryKey: ['clinic', id],
    queryFn: () => clinicService.getClinicDetails(id!),
    enabled: !!id
  });

  if (isLoading) return <Spinner />;
  if (error) return <FailText>Failed to load clinic details</FailText>;
  if (!clinic) return null;

  return <ClinicDetails clinic={clinic} />;
}
