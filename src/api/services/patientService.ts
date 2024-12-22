import type { PatientProfile, PrescribedTreatment } from '../../contract/types';
import { apiClient } from './client';

const endpoints = {
  profile: '/patient/profile',
  treatments: '/patient/treatments'
};

export const patientService = {
  getProfile: async (): Promise<PatientProfile> => {
    const { data } = await apiClient.get<PatientProfile>(endpoints.profile);
    return data;
  },

  getPrescribedTreatments: async (): Promise<PrescribedTreatment[]> => {
    const { data } = await apiClient.get<PrescribedTreatment[]>(endpoints.treatments);
    return data;
  },
};
