import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { appointmentService } from '../../http/appointmentService';
import { AppointmentSearchBar } from './AppointmentSearchBar';
import { AppointmentCard } from './AppointmentCard';
import { AppointmentSearchCriteria } from './AppointmentSearchCriteria.ts';

export const AppointmentSearch = () => {
  const [searchParams, setSearchParams] = useState<AppointmentSearchCriteria>({
    query: '',
    status: undefined,
    dateFrom: undefined,
    dateTo: undefined,
  });

  const { data: appointments, isLoading } = useQuery({
    queryKey: ['appointments', searchParams],
    queryFn: () => appointmentService.searchAppointments(searchParams),
  });

  return (
    <div className="space-y-4">
      <AppointmentSearchBar onSearch={setSearchParams} />
      
      {isLoading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <div className="space-y-4">
          {appointments?.map((appointment) => (
            <AppointmentCard 
              key={appointment.id} 
              appointment={appointment} 
            />
          ))}
        </div>
      )}
    </div>
  );
};