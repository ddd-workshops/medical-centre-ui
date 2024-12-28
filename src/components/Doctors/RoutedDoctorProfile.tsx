import { useQuery } from '@tanstack/react-query';

import { staffService } from '../../http/staffService';
import { DoctorProfile } from './DoctorProfile';
import { useSlugRoute } from '../Routing/useSlugRoute';

export const RoutedDoctorProfile = () => {
  const id = useSlugRoute()

  const { data: doctor, isLoading, error } = useQuery({
    queryKey: ['doctor', id],
    queryFn: () => staffService.getDoctorDetails(Number(id)),
  });

  if (!doctor) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading doctor profile</div>;
  }

  return <DoctorProfile doctor={doctor} />;
};
