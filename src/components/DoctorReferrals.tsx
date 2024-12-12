
import React from 'react';
import { TileList } from './TileList';

export const DoctorReferrals: React.FC = () => {
  const referrals = [
    {
      title: 'Orthodontist Consultation',
      description: 'Dr. James Wilson - Specialist in dental alignment and braces',
      link: '/referral/ortho'
    },
    {
      title: 'Oral Surgery',
      description: 'Dr. Lisa Martinez - Experienced in complex dental procedures',
      link: '/referral/surgery'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Doctor Referrals</h2>
      <TileList items={referrals} />
    </div>
  );
};