import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Timeline } from '../Timeline';
import { appointmentService } from '../../http/appointmentService';
import { QuickActions } from './QuickActions';
import { RecentUpdates } from './RecentUpdates';
import { DoctorReferrals } from './DoctorReferrals';
import { TreatmentBriefs } from '../Treatments/TreatmentBriefs';
import { H1 } from '../Typography/Headings';
import { FailText } from '../Typography/Text';

export const Dashboard: React.FC = () => {
  const { data: appointments = [], isLoading, error } = useQuery({
    queryKey: ['appointments'],
    queryFn: () => appointmentService.getAllAppointments()
  });

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
    </div>;
  }

  if (error) {
    return <div>
      <FailText>Error loading appointments</FailText>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <H1>Welcome to Bright Smiles Architects™️</H1>
          
          <Timeline appointments={appointments} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <QuickActions />
            <RecentUpdates />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TreatmentBriefs />
            <DoctorReferrals />
          </div>
        </div>
      </div>
    </div>
  );
};