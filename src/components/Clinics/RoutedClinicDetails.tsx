import { useQuery } from '@tanstack/react-query';

import { clinicService } from '../../http/clinicsService';
import { ClinicDetails } from './ClinicDetails';
import { Spinner } from '../../ui-library/Generic/Spinner';
import { Text } from '../../ui-library/Typography/Text';
import { useSlugRoute } from '../Routing/useSlugRoute';

export function RoutedClinicDetails() {
  const id = useSlugRoute()

  const { data: clinic, isLoading, error } = useQuery({
    queryKey: ['clinic', id],
    queryFn: () => clinicService.getClinicDetails(id),
    enabled: !!id
  });

  if (isLoading) return <Spinner />;
  if (error) return <Text messageType="ALERT" size='LARGE'>Failed to load clinic details</Text>;
  if (!clinic) return null;

  return <ClinicDetails clinic={clinic} />;
}
