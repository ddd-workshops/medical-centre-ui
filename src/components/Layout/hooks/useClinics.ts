import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../http/client';
import type { ClinicBrief } from '../../../contract/types';

export const useClinics = () => {
  return useQuery<ClinicBrief[]>({
    queryKey: ['clinics'],
    queryFn: () => apiClient.get('/clinics').then(response => response.data)
  });
};
