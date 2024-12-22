import { apiClient } from './client';
import type { AppStatus } from '../contract/types';

const endpoints = {
  status: '/app/status'
};

export const applicationService = {
  getAppStatus: async () => {
    const { data } = await apiClient.get<AppStatus>(endpoints.status);
    return data;
  },
};
