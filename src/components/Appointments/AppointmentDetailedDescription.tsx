import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import {
  Calendar,
  User,
  Stethoscope,
  FileText,
  Pill,
  CreditCard,
  Download,
  Loader,
  MapPin
} from 'lucide-react';

import { AppointmentPDF } from './AppointmentPDF';
import { appointmentService } from '../../http/appointmentService';
import { AppointmentDetails } from '../../contract/types';
import { H2, H3 } from '../../ui-library/Typography/Headings';
import { Paragraph } from '../../ui-library/Typography/Paragraph';
import { formatCurrency } from '../../utils/formatCurrency';
import { Chip } from '../../ui-library/Generic/Chip';
import { clinicLink, doctorLink } from '../Routing/routes';
import { List } from '../../ui-library/Generic/List';
import { Text } from '../../ui-library/Typography/Text';
import { styles } from '../../ui-library/DesignLanguage';

export const AppointmentDetailedDescription = () => {
  const { id } = useParams<{ id: string }>();
  const [appointment, setAppointment] = useState<AppointmentDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        if (!id) throw new Error('Appointment ID is required');
        const data = await appointmentService.getAppointmentDetails(id);
        setAppointment(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <Loader className={`w-8 h-8 ${styles.ACCENT.text} animate-spin`} />
      </div>
    );
  }

  if (error || !appointment) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <Paragraph className={styles.ALERT.text}>{error || 'Appointment not found'}</Paragraph>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className={`border-b ${styles.ACCENT.border} pb-6 mb-8`}>
        <H2 className={`${styles.ACCENT.text} flex items-center gap-3`}>
          <Calendar className={`w-8 h-8 ${styles.ACCENT.text}`} />
          Appointment Details
        </H2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`${styles.ACCENT.background} p-6 rounded-xl border ${styles.ACCENT.border}`}>
          <H3 className={`${styles.ACCENT.text} mb-4 flex items-center gap-2`}>
            <User className="w-5 h-5" />
            Basic Information
          </H3>
          <div className="space-y-3">
            <div className="flex gap-3 text-gray-700">
              <Calendar className={`w-4 h-4 ${styles.ACCENT.text} flex-shrink-0 mt-1`} />
              <Paragraph>
                {new Date(appointment.datetime).toLocaleDateString()} at{' '}
                {new Date(appointment.datetime).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit'
                })}
              </Paragraph>
            </div>
            <div className="flex gap-3 text-gray-700">
              <MapPin className={`w-4 h-4 ${styles.ACCENT.text} flex-shrink-0 mt-1`} />
              <Link 
                to={clinicLink(appointment.location)} 
                className={`${styles.ACCENT.textHover} transition-colors`}
              >
                <Paragraph>
                  {appointment.location.name}<br />
                  <span className="text-gray-500 text-sm">
                    {appointment.location.address}
                  </span>
                </Paragraph>
              </Link>
            </div>
            <div className="flex gap-3 text-gray-700">
              <User className={`w-4 h-4 ${styles.ACCENT.text} flex-shrink-0 mt-1`} />
              <Link 
                to={doctorLink({ doctorId: appointment.doctor.id, doctorName: appointment.doctor.fullName })} 
                className={`${styles.ACCENT.textHover} transition-colors`}
              >
                <Paragraph>{appointment.doctor.fullName}</Paragraph>
              </Link>
            </div>
            <div className="flex gap-3 text-gray-700">
              <Stethoscope className={`w-4 h-4 ${styles.ACCENT.text} flex-shrink-0 mt-1`} />
              <Paragraph>{appointment.doctor.specialties.map(s => s.name).join(', ')}</Paragraph>
            </div>
          </div>
        </div>

        <div className={`${styles.ACCENT.background} p-6 rounded-xl border ${styles.ACCENT.border}`}>
          <H3 className={`${styles.ACCENT.text} mb-4 flex items-center gap-2`}>
            <FileText className="w-5 h-5" />
            Medical Notes
          </H3>
          <div className="flex gap-3">
            <FileText className={`w-4 h-4 ${styles.ACCENT.text} flex-shrink-0 mt-1`} />
            <Paragraph className="text-gray-700 whitespace-pre-line">
              {appointment.notes || 'No notes available'}
            </Paragraph>
          </div>
        </div>

        <div className={`${styles.ACCENT.background} p-6 rounded-xl border ${styles.ACCENT.border}`}>
          <H3 className={`${styles.ACCENT.text} mb-4 flex items-center gap-2`}>
            <Pill className="w-5 h-5" />
            Prescriptions
          </H3>
          {appointment.prescriptions && appointment.prescriptions.length > 0 ? (
            <List
              items={appointment.prescriptions}
              bulletIcon={Pill}
              renderItem={(prescription) => (
                <Text>{prescription}</Text>
              )}
            />
          ) : (
            <Paragraph className="text-gray-700">No prescriptions issued</Paragraph>
          )}
        </div>

        <div className={`${styles.ACCENT.background} p-6 rounded-xl border ${styles.ACCENT.border}`}>
          <H3 className={`${styles.ACCENT.text} mb-4 flex items-center gap-2`}>
            <CreditCard className="w-5 h-5" />
            Billing Information
          </H3>
          <div className="space-y-3">
            <div className="flex gap-3 text-gray-700">
              <CreditCard className={`w-4 h-4 ${styles.ACCENT.text} flex-shrink-0 mt-1`} />
              <div className="flex items-baseline gap-3">
                <Paragraph className="font-medium">
                  Amount: {formatCurrency(appointment.billing?.amount || 0)}
                </Paragraph>
                <Chip
                  variant={appointment.billing?.status === 'PAID' ? 'DEFAULT' : 'WARNING'}
                >
                  {appointment.billing?.status || 'PENDING'}
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-8 flex justify-end border-t ${styles.ACCENT.border} pt-6`}>
        <PDFDownloadLink
          document={<AppointmentPDF appointment={appointment} />}
          fileName={`appointment-${appointment.id}.pdf`}
          className={`inline-flex items-center gap-2 ${styles.ACCENT.background} text-white px-6 py-3 rounded-lg ${styles.ACCENT.backgroundHover} transition-colors font-medium`}
        >
          <Download className="w-5 h-5" />
          Download PDF
        </PDFDownloadLink>
      </div>
    </div>
  );
};