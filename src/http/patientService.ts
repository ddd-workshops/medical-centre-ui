import type { paths } from '../contract/types';
import { apiClient } from './client';

const endpoints = {
  profile: '/patient/profile',
  treatments: '/patient/treatments'
};

export const patientService = {
  getProfile: async () => {
    const { data } = await apiClient.get<paths['/patient/profile']['get']['responses']['200']['content']['application/json']>(endpoints.profile);
    return data;
  },

  getPrescribedTreatments: async () => {
    const { data } = await apiClient.get<paths['/patient/treatments']['get']['responses']['200']['content']['application/json']>(endpoints.treatments);
    return data;
  },
};
