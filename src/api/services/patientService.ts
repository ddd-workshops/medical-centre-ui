import type { PatientProfile, PrescribedTreatment } from '../../contract/types';
import { apiClient } from './client';

export const patientService = {
  getProfile: async (): Promise<PatientProfile> => {
    const { data } = await apiClient.get<PatientProfile>('/patient/profile');
    return data;
  },

  getPrescribedTreatments: async (): Promise<PrescribedTreatment[]> => {
    const { data } = await apiClient.get<PrescribedTreatment[]>('/patient/treatments');
    return data;
  },
};
