import type { paths, CMSPageContent } from '../contract/types';
import { apiClient } from './client';

const endpoints = {
  getPageContent: (slug: CMSPageContent['slug']) => `/cms/pages/${slug}`,
  getAllPages: () => '/cms/pages',
} as const;

export const cmsService = {
  getPageContent: async (slug: string) => {
    const response = await apiClient.get<paths['/cms/pages/{slug}']['get']['responses']['200']['content']['application/json']>(endpoints.getPageContent(slug));
    return response.data;
  },

  getAllPages: async () => {
    const response = await apiClient.get<paths['/cms/pages']['get']['responses']['200']['content']['application/json']>(endpoints.getAllPages());
    return response.data;
  },
};
