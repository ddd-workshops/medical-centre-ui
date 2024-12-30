import { apiClient } from './client';
import type { paths } from '../contract/types';

const endpoints = {
  getClinics: '/clinics',
  getClinicDetails: (id: string) => `/clinics/${id}`
} as const;

export const clinicService = {
  getClinics: async () => {
    const { data } = await apiClient.get<
      paths['/clinics']['get']['responses']['200']['content']['application/json']
    >(endpoints.getClinics);
    return data;
  },

  getClinicDetails: async (id: string) => {
    const { data } = await apiClient.get<
      paths['/clinics/{clinicId}']['get']['responses']['200']['content']['application/json']
    >(endpoints.getClinicDetails(id));
    return data;
  }
};
