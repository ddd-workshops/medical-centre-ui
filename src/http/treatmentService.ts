import type { paths } from '../contract/types';
import { apiClient } from './client';

const endpoints = {
  getAll: '/treatments'
};

export const getMedicalTreatments = async () => {
  const { data } = await apiClient.get<paths['/treatments']['get']['responses']['200']['content']['application/json']>(
    endpoints.getAll
  );
  return data;
};
