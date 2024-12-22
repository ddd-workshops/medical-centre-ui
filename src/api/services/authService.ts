import { apiClient } from './client';
import type { LoginRequest, PatientProfile, RegisterRequest } from '../../contract/types';

const endpoints = {
  login: '/auth/login',
  logout: '/auth/logout',
  register: '/auth/register',
};

export const authService = {
  login: async (credentials: LoginRequest): Promise<PatientProfile> => {
    const { data } = await apiClient.post<PatientProfile>(endpoints.login, credentials);
    return data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post(endpoints.logout);
  },

  register: async (data: RegisterRequest): Promise<PatientProfile> => {
    const { data: profile } = await apiClient.post<PatientProfile>(endpoints.register, data);
    return profile;
  },
};
