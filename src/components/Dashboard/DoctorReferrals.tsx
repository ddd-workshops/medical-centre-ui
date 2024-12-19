import React from 'react';
import { TileList } from '../TileList';
import { H2 } from '../Typography/Headings';

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
      <H2 className="mb-4">Doctor Referrals</H2>
      <TileList items={referrals} />
    </div>
  );
};