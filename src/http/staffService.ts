import { apiClient } from './client';
import type { DoctorBrief, DoctorProfile } from '../contract/types';
import type { paths } from '../contract/types';

export interface DoctorFilters {
  name?: string;
  specialties?: string[];
  locations?: string[];
  languages?: string[];
}

const endpoints = {
  doctors: '/staff',
  doctorDetails: (id: DoctorProfile['id']) => `/staff/${id}`,
};

export const staffService = {
  async getDoctors(filters?: DoctorFilters) {
    const response = await apiClient.get<paths['/staff']['get']['responses']['200']['content']['application/json']>(
      endpoints.doctors,
      { params: filters }
    );
    return response.data;
  },

  async getDoctorDetails(id: number) {
    const response = await apiClient.get<paths['/staff/{doctorId}']['get']['responses']['200']['content']['application/json']>(
      endpoints.doctorDetails(id)
    );
    return response.data;
  },
};
