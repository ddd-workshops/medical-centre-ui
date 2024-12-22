import { apiClient } from './client';
import type { ClinicBrief, ClinicDetails } from '../contract/types';

const endpoints = {
  getClinics: '/clinics',
  getClinicDetails: (id: string) => `/clinics/${id}`
} as const;

export const clinicService = {
  getClinics: async (): Promise<ClinicBrief[]> => {
    const { data } = await apiClient.get<ClinicBrief[]>(endpoints.getClinics);
    return data;
  },

  getClinicDetails: async (id: string): Promise<ClinicDetails> => {
    const { data } = await apiClient.get<ClinicDetails>(endpoints.getClinicDetails(id));
    return data;
  }
};
