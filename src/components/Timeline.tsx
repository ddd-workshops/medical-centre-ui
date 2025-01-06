import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import type { AppointmentBrief } from '../contract/types';
import { H2, H3 } from '../ui-library/Typography/Headings';
import { Text } from '../ui-library/Typography/Text';

interface TimelineProps {
  appointments: AppointmentBrief[];
}

export const Timeline: React.FC<TimelineProps> = ({ appointments }) => {
  const groupedAppointments = appointments.reduce((acc, appointment) => {
    const dateKey = format(appointment.datetime, 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(appointment);
    return acc;
  }, {} as Record<string, AppointmentBrief[]>);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <H2 className="mb-8">Your Upcoming Appointments</H2>
      
      {appointments.length > 0 ? (
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-emerald-200"></div>

          <div className="space-y-8">
            {Object.entries(groupedAppointments).map(([dateKey, dayAppointments]) => (
              <div key={dateKey} className="relative">
                {/* Date marker */}
                <div className="absolute -left-3 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="ml-10">
                  <H3 className="text-emerald-600 mb-4">
                    {format(new Date(dateKey), 'MMMM d, yyyy')}
                  </H3>
                  
                  <div className="space-y-4">
                    {dayAppointments.map(appointment => (
                      <Link 
                        key={appointment.id}
                        to={`/appointments/${appointment.id}`}
                        className="block transform transition-all duration-200 hover:scale-102 hover:shadow-md"
                      >
                        <div 
                          className="bg-gradient-to-r from-emerald-50 to-white
                                   border border-emerald-100 rounded-lg p-2"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-gray-800">{appointment.status}</p>
                              <Text>with {appointment.doctorName}</Text>
                            </div>
                            <div className="text-right">
                              <p className="text-emerald-600 font-medium">
                                {format(appointment.datetime, 'h:mm a')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No upcoming appointments scheduled.</p>
      )}

      <div className="mt-6 text-center">
        <Link
          to="/appointments/search"
          className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex gap-1"
        >
          Show all appointments
          <span className="inline-block transform translate-y-px">→</span>
        </Link>
      </div>
    </div>
  );
};