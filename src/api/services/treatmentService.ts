import type { GetMedicalTreatmentsResponse } from '../../contract/types';
import { apiClient } from './client';

export const getMedicalTreatments = async (): Promise<GetMedicalTreatmentsResponse> => {
  const { data } = await apiClient.get<GetMedicalTreatmentsResponse>('/treatments');
  return data;
};
