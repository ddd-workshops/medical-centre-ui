import { apiClient } from './client';
import type { DoctorBrief, DoctorProfile } from '../contract/types';

const endpoints = {
  doctors: '/staff',
  doctorDetails: (id: number) => `/staff/${id}`,
};

export const staffService = {
  async getDoctors(): Promise<DoctorBrief[]> {
    const response = await apiClient.get(endpoints.doctors);
    return response.data;
  },

  async getDoctorDetails(id: number): Promise<DoctorProfile> {
    const response = await apiClient.get(endpoints.doctorDetails(id));
    return response.data;
  },
};
