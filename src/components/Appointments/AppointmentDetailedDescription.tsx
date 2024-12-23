import { PDFDownloadLink } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppointmentPDF } from './AppointmentPDF';
import { appointmentService } from '../../http/appointmentService';
import { AppointmentDetails } from '../../contract/types';
import { H2, H3 } from '../Typography/Headings';
import { Paragraph } from '../Typography/Paragraph';

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
    return <div className="text-center p-6">Loading...</div>;
  }

  if (error || !appointment) {
    return <div className="text-center p-6 text-red-600">{error || 'Appointment not found'}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <H2 className="text-green-800 mb-6">Appointment Details</H2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <H3 className="text-green-700 mb-3">Basic Information</H3>
          <div className="space-y-2">
            <Paragraph>Date: {new Date(appointment.datetime).toLocaleDateString()}</Paragraph>
            <Paragraph>Time: {new Date(appointment.datetime).toLocaleTimeString()}</Paragraph>
            <Paragraph>Doctor: {appointment.doctor.fullName}</Paragraph>
            <Paragraph>Specialty: {appointment.doctor.specialties.join(', ')}</Paragraph>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <H3 className="text-green-700 mb-3">Medical Notes</H3>
          <Paragraph>{appointment.notes || 'No notes available'}</Paragraph>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <H3 className="text-green-700 mb-3">Prescriptions</H3>
          {appointment.prescriptions && appointment.prescriptions.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {appointment.prescriptions.map((prescription, index) => (
                <li key={index} className="text-gray-700">{prescription}</li>
              ))}
            </ul>
          ) : (
            <Paragraph>No prescriptions issued</Paragraph>
          )}
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <H3 className="text-green-700 mb-3">Billing</H3>
          <div className="space-y-2">
            <Paragraph>Amount: ${appointment.billing?.amount || 0}</Paragraph>
            <Paragraph>Status: {appointment.billing?.status || 'Pending'}</Paragraph>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <PDFDownloadLink
          document={<AppointmentPDF appointment={appointment} />}
          fileName={`appointment-${appointment.id}.pdf`}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {({ loading }) => (
            loading ? 'Generating PDF...' : 'Download PDF'
          ) as React.ReactNode}
        </PDFDownloadLink>
      </div>
    </div>
  );
};