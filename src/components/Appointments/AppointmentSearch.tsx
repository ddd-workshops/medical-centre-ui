import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SearchX, Loader2 } from 'lucide-react';

import { appointmentService } from '../../http/appointmentService';
import { AppointmentSearchBar } from './AppointmentSearchBar';
import { AppointmentCard } from './AppointmentCard';
import { AppointmentSearchCriteria } from './AppointmentSearchCriteria';
import { H2 } from '../../ui-library/Typography/Headings';
import { Paragraph } from '../../ui-library/Typography/Paragraph';
import { styles } from '../../ui-library/DesignEnums/ColorVariants';

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <H2 className={`${styles.ACCENT.textDark} mb-6`}>Appointments</H2>
      <AppointmentSearchBar onSearch={setSearchParams} />
      
      <div className="mt-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className={`w-8 h-8 ${styles.ACCENT.text} animate-spin mb-4`} />
            <Paragraph className="text-gray-600">Loading appointments...</Paragraph>
          </div>
        ) : appointments?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-sm">
            <SearchX className="w-12 h-12 text-gray-400 mb-4" />
            <Paragraph className="text-gray-600">No appointments found</Paragraph>
            <Paragraph className="text-gray-500 text-sm">Try adjusting your search criteria</Paragraph>
          </div>
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
    </div>
  );
};