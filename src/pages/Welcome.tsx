import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { RecentAppointments } from '../components/Appointments/RecentAppointments';
import { DoctorReferrals } from '../components/DoctorReferrals';
import { Timeline } from '../components/Timeline';
import { appointmentService } from '../api/services/appointmentService';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();
  
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
    return <div className="text-red-600">Error loading appointments</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Bright Smiles Architects™️</h1>
          
          <Timeline appointments={appointments} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate('/book-appointment')}
                  className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700"
                >
                  Book New Appointment
                </button>
                <button 
                  onClick={() => navigate('/medical-history')}
                  className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200"
                >
                  View Medical History
                </button>
                <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200">
                  Contact Your Dentist
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Updates</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <p className="font-medium">New Service Available</p>
                  <p className="text-gray-600">Introducing advanced teeth whitening treatment</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-medium">Holiday Schedule</p>
                  <p className="text-gray-600">Check our updated working hours for the upcoming holiday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecentAppointments />
            <DoctorReferrals />
          </div>
        </div>
      </div>
    </div>
  );
};