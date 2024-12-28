import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { staffService } from '../../http/staffService';
import { DoctorProfile } from './DoctorProfile';

export const RoutedDoctorProfile = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    throw new Error('URL slug is required');
  }
  const id = Number(slug.split('-')[0]);

  const { data: doctor, isLoading, error } = useQuery({
    queryKey: ['doctor', id],
    queryFn: () => staffService.getDoctorDetails(id),
  });

  if (!doctor) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading doctor profile</div>;
  }

  return <DoctorProfile doctor={doctor} />;
};
