import { apiClient } from './client';
import type { paths, LoginRequest, RegisterRequest } from '../contract/types';

const endpoints = {
  login: '/auth/login',
  logout: '/auth/logout',
  register: '/auth/register',
};

export const authService = {
  login: async (credentials: LoginRequest) => {
    const { data } = await apiClient.post<paths['/auth/login']['post']['responses']['200']['content']['application/json']>(
      endpoints.login, 
      credentials
    );
    return data;
  },

  logout: async () => {
    await apiClient.post<paths['/auth/logout']['post']['responses']['204']['content']['application/json']>(endpoints.logout);
  },

  register: async (data: RegisterRequest) => {
    await apiClient.post<paths['/auth/register']['post']['responses']['201']['content']['application/json']>(
      endpoints.register, 
      data
    );
  },
};
