import { apiClient } from './client';
import type { LoginRequest, PatientProfile, RegisterRequest } from '../../contract/types';

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

  register: async (data: RegisterRequest): Promise<PatientProfile> => {
    const { data: profile } = await apiClient.post<PatientProfile>('/auth/register', data);
    return profile;
  },
};
