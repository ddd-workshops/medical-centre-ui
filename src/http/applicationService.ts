import { apiClient } from './client';
import type { paths } from '../contract/types';

const endpoints = {
  status: '/app/status'
};

export const applicationService = {
  getAppStatus: async () => {
    const { data } = await apiClient.get<paths['/app/status']['get']['responses']['200']['content']['application/json']>(endpoints.status);
    return data;
  },
};
