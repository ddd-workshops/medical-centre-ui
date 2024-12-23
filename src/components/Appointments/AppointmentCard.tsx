import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import type { AppointmentBrief } from '../../contract/types';
import { appointmentService } from '../../http/appointmentService';
import { formatCurrency } from '../../utils/formatCurrency';
import { Paragraph } from '../Typography/Paragraph';

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

  const statusColor = {
    SCHEDULED: 'border-blue-500',
    COMPLETED: 'border-green-500',
    CANCELLED: 'border-gray-500',
  }[appointment.status];

  return (
    <div className={`border-l-4 ${statusColor} bg-white p-4 shadow-sm`}>
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <Paragraph className="font-semibold">{appointment.serviceType}</Paragraph>
          <Paragraph className="text-gray-600">
            {appointment.datetime} at {appointment.location}
          </Paragraph>
          <Link 
            to={`/doctor/${appointment.doctor}`}
            className="text-green-600 hover:underline"
            >Dr. {appointment.doctor}
            </Link>
        </div>
        <ChevronDown 
          className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </div>

      {isExpanded && details && (
        <div className="mt-4 pt-4 border-t">
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
