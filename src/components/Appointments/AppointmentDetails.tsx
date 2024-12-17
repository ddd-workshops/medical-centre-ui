import { PDFDownloadLink } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppointmentPDF } from './AppointmentPDF';
import { appointmentService } from '../../api/services/appointmentService';
import { Appointment } from '../../contract';

export const AppointmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        if (!id) throw new Error('Appointment ID is required');
        const data = await appointmentService.getAppointmentById(id);
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
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Appointment Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium text-green-700 mb-3">Basic Information</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Date:</span> {new Date(appointment.date).toLocaleDateString()}</p>
            <p><span className="font-medium">Time:</span> {new Date(appointment.date).toLocaleTimeString()}</p>
            <p><span className="font-medium">Doctor:</span> {appointment.doctorName}</p>
            <p><span className="font-medium">Specialty:</span> {appointment.doctor.specialty}</p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium text-green-700 mb-3">Medical Notes</h3>
          <p className="text-gray-700">{appointment.medicalNotes || 'No medical notes available'}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium text-green-700 mb-3">Prescriptions</h3>
          {appointment.prescriptions && appointment.prescriptions.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {appointment.prescriptions.map((prescription, index) => (
                <li key={index} className="text-gray-700">{prescription}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">No prescriptions issued</p>
          )}
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium text-green-700 mb-3">Billing</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Amount:</span> ${appointment.billing?.amount || 0}</p>
            <p><span className="font-medium">Status:</span> {appointment.billing?.status || 'Pending'}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <PDFDownloadLink
          document={<AppointmentPDF appointment={appointment} />}
          fileName={`appointment-${appointment.id}.pdf`}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {({ loading }) =>
            loading ? 'Generating PDF...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};