import { apiClient } from './client';

export interface CMSPageContent {
  slug: string;
  lastUpdated: string;
  content: string;
}

const endpoints = {
  getPageContent: (slug: string) => `/cms/pages/${slug}`,
  getAllPages: () => '/cms/pages',
} as const;

export const cmsService = {
  getPageContent: async (slug: string): Promise<CMSPageContent> => {
    const response = await apiClient.get(endpoints.getPageContent(slug));
    return response.data;
  },

  getAllPages: async (): Promise<CMSPageContent[]> => {
    const response = await apiClient.get(endpoints.getAllPages());
    return response.data;
  },
};
