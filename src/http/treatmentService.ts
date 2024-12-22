import type { GetMedicalTreatmentsResponse } from '../contract/types';
import { apiClient } from './client';

const endpoints = {
  getAll: '/treatments'
};

export const getMedicalTreatments = async (): Promise<GetMedicalTreatmentsResponse> => {
  const { data } = await apiClient.get<GetMedicalTreatmentsResponse>(endpoints.getAll);
  return data;
};
