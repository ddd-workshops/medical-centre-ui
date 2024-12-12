
export interface Referral {
  referralId: string;
  patientId: string;
  doctorId: string;
  specialization: string;
  description: string;
  createdAt: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
}

export interface ReferralCreate {
  patientId: string;
  doctorId: string;
  specialization: string;
  description: string;
}

export interface ReferralUpdate {
  referralId: string;
  status: 'ACCEPTED' | 'REJECTED';
}

export const referralEndpoints = {
  create: '/api/referrals',
  update: '/api/referrals/{referralId}',
  delete: '/api/referrals/{referralId}',
  getOne: '/api/referrals/{referralId}',
  getAll: '/api/referrals'
} as const;