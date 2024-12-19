
import React from 'react';
import { TileList } from '../TileList';
import { format } from 'date-fns';

export const RecentAppointments: React.FC = () => {
  const recentAppointments = [
    {
      title: 'Dental Check-up',
      description: `Last visit: ${format(new Date(2024, 1, 15), 'MMMM d, yyyy')}`,
      link: '/appointment/details/1'
    },
    {
      title: 'Teeth Cleaning',
      description: `Last visit: ${format(new Date(2024, 0, 30), 'MMMM d, yyyy')}`,
      link: '/appointment/details/2'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Appointments</h2>
      <TileList items={recentAppointments} />
    </div>
  );
};