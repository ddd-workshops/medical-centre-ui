import { useState } from 'react';
import { Clock, MapPin, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { doctorLink } from '../Routing/routes';
import { styles } from '../../ui-library/DesignLanguage';

import type { AppointmentBrief } from '../../contract/types';
import { appointmentService } from '../../http/appointmentService';
import { formatCurrency } from '../../utils/formatCurrency';
import { Paragraph } from '../../ui-library/Typography/Paragraph';

type Props = {
  appointment: AppointmentBrief;
};

export const AppointmentCard = ({ appointment }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data: details } = useQuery({
    queryKey: ['appointment', appointment.id],
    queryFn: () => appointmentService.getAppointmentDetails(appointment.id),
    enabled: isExpanded,
  });

  const statusConfig = {
    SCHEDULED: {
      border: styles.UPDATE.border,
      bg: styles.UPDATE.background,
      text: styles.UPDATE.text
    },
    COMPLETED: {
      border: styles.ACCENT.border,
      bg: styles.ACCENT.background,
      text: styles.ACCENT.text
    },
    CANCELLED: {
      border: styles.DEFAULT.border,
      bg: styles.DEFAULT.background,
      text: styles.DEFAULT.text
    },
  }[appointment.status];

  return (
    <div className={`border-l-4 ${statusConfig.border} bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200`}>
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig.bg} ${statusConfig.text}`}>
                {appointment.status}
              </span>
              <h3 className="font-semibold text-lg text-gray-900">
                {appointment.serviceType}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{new Date(appointment.datetime).toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{appointment.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="h-4 w-4" />
                <Link 
                  to={doctorLink({ 
                    doctorId: appointment.doctorId, 
                    doctorName: appointment.doctorName 
                  })}
                  className={`${styles.ACCENT.text} ${styles.ACCENT.textHover} hover:underline`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Dr. {appointment.doctorName}
                </Link>
              </div>
            </div>
          </div>
          <ChevronDown 
            className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {isExpanded && details && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
          <Paragraph>{details.notes}</Paragraph>
          
          {details.prescriptions?.length && (
            <div className="mt-4">
              <Paragraph className="font-semibold">Prescriptions:</Paragraph>
              <ul className="list-disc ml-4">
                {details.prescriptions.map((prescription, idx) => (
                  <li key={idx}>
                   {prescription}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details.billing && (
            <div className={`mt-4 ${
              appointment.status === 'COMPLETED' && details.billing.status !== 'PAID' 
                ? 'bg-red-100 p-4 rounded-md' 
                : ''
            }`}>
              <Paragraph className="font-semibold">Billing Information</Paragraph>
              <Paragraph>Amount: {formatCurrency(details.billing.amount)}</Paragraph>
              <Paragraph>Status: {details.billing.status}</Paragraph>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
