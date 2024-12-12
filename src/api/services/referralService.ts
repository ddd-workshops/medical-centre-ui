import { apiClient } from '../client';
import { components } from '../../contract/types';

type Referral = components['schemas']['Referral'];
type ReferralCreate = components['schemas']['ReferralCreate'];
type ReferralUpdate = components['schemas']['ReferralUpdate'];

export const referralService = {
  createReferral: async (referral: ReferralCreate): Promise<Referral> => {
    const { data } = await apiClient.post<Referral>(
      '/api/referrals',
      referral
    );
    return data;
  },

  updateReferral: async (update: ReferralUpdate): Promise<Referral> => {
    const { data } = await apiClient.put<Referral>(
      `/api/referrals/${update.referralId}`,
      update
    );
    return data;
  },

  deleteReferral: async (referralId: string): Promise<void> => {
    await apiClient.delete(
      `/api/referrals/${referralId}`
    );
  },

  getReferral: async (referralId: string): Promise<Referral> => {
    const { data } = await apiClient.get<Referral>(
      `/api/referrals/${referralId}`
    );
    return data;
  },

  getAllReferrals: async (): Promise<Referral[]> => {
    const { data } = await apiClient.get<Referral[]>('/api/referrals');
    return data;
  },
};