import React from 'react';
import { format } from 'date-fns';

interface Appointment {
  id: number;
  date: Date;
  type: string;
  doctor: string;
}

export default function Welcome() {
  const appointments: Appointment[] = [
    {
      id: 1,
      date: new Date(2024, 2, 25, 14, 30),
      type: "Regular Checkup",
      doctor: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      date: new Date(2024, 3, 2, 10, 0),
      type: "Dental Cleaning",
      doctor: "Dr. Michael Chen"
    },
    {
      id: 3,
      date: new Date(2024, 3, 5, 15, 45),
      type: "Implant Consultation",
      doctor: "Dr. Emily Williams"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Bright Smiles Architects™️</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Upcoming Appointments</h2>
            
            {appointments.length > 0 ? (
              <div className="space-y-4">
                {appointments.map(appointment => (
                  <div key={appointment.id} className="border-l-4 border-emerald-500 pl-4 py-3 bg-gray-50 rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-800">{appointment.type}</p>
                        <p className="text-gray-600">with {appointment.doctor}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-emerald-600">
                          {format(appointment.date, 'MMMM d, yyyy')}
                        </p>
                        <p className="text-gray-500">
                          {format(appointment.date, 'h:mm a')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No upcoming appointments scheduled.</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700">
                  Book New Appointment
                </button>
                <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200">
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
        </div>
      </div>
    </div>
  );
}