import { useQuery } from '@tanstack/react-query';
import { staffService } from '../../http/staffService';
import { DoctorsList } from './DoctorsList';

export const RoutedDoctorsList = () => {
  const { data: doctors, isLoading, error } = useQuery({
    queryKey: ['doctors'],
    queryFn: staffService.getDoctors
  });

  if (!doctors) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading doctors</div>;
  }

  return <DoctorsList doctors={doctors} />;
};
