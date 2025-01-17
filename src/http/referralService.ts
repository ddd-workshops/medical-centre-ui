import { apiClient } from './client';
import type { paths, Referral, ReferralCreateRequest, ReferralUpdateRequest } from '../contract/types';

const endpoints = {
  create: '/referrals',
  getById: (id: Referral['id']) => `/referrals/${id}`,
  update: (id: Referral['id']) => `/referrals/${id}`,
  delete: (id: Referral['id']) => `/referrals/${id}`,
  getAll: '/referrals'
};

export const referralService = {
  createReferral: async (referral: ReferralCreateRequest): Promise<Referral> => {
    const { data } = await apiClient.post<Referral>(
      endpoints.create,
      referral
    );
    return data;
  },

  updateReferral: async (update: ReferralUpdateRequest): Promise<Referral> => {
    const { data } = await apiClient.put<Referral>(
      endpoints.update(update.referralId),
      update
    );
    return data;
  },

  deleteReferral: async (referralId: string): Promise<void> => {
    await apiClient.delete(
      endpoints.delete(referralId)
    );
  },

  getReferral: async (referralId: string): Promise<Referral> => {
    const { data } = await apiClient.get<Referral>(
      endpoints.getById(referralId)
    );
    return data;
  },

  getAllReferrals: async (): Promise<Referral[]> => {
    const { data } = await apiClient.get<Referral[]>(endpoints.getAll);
    return data;
  },
};