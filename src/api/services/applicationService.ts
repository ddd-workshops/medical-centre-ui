import { apiClient } from './client';
import type { AppStatus } from '../../contract/types';

export const applicationService = {
  getAppStatus: async () => {
    const { data } = await apiClient.get<AppStatus>('/app/status');
    return data;
  },
};
