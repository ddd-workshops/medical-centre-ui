import { apiClient } from './client';
import type { LoginRequest, PatientProfile } from '../../contract/types';

export const authService = {
  login: async (credentials: LoginRequest): Promise<PatientProfile> => {
    const { data } = await apiClient.post<PatientProfile>('/auth/login', credentials);
    return data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
  },

  getProfile: async (): Promise<PatientProfile> => {
    const { data } = await apiClient.get<PatientProfile>('/profile');
    return data;
  },
};
