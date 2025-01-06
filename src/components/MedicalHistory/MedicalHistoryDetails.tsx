import { useParams, useNavigate } from 'react-router-dom';
import { H2, H3, H4 } from '../../ui-library/Typography/Headings';
import { Paragraph } from '../../ui-library/Typography/Paragraph';
import { styles } from '../../ui-library/DesignEnums/MessageType';

interface MedicalHistoryEntry {
  id: string;
  date: string;
  diagnosis: string;
  treatment: string;
  medications: string[];
  dentalProcedures: {
    procedure: string;
    tooth: string;
    notes: string;
  }[];
  vitalSigns: {
    bloodPressure: string;
    heartRate: number;
    temperature: number;
  };
  followUpDate?: string;
  doctorNotes: string;
}

export const MedicalHistoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this would be fetched from an API
  const entry: MedicalHistoryEntry = {
    id: '123',
    date: '2023-10-15',
    diagnosis: 'Chronic Periodontitis',
    treatment: 'Deep cleaning and root planing',
    medications: ['Amoxicillin 500mg', 'Ibuprofen 400mg'],
    dentalProcedures: [
      {
        procedure: 'Root Canal',
        tooth: '16',
        notes: 'Complete root canal treatment with temporary filling'
      },
      {
        procedure: 'Cavity Filling',
        tooth: '24',
        notes: 'Composite filling'
      }
    ],
    vitalSigns: {
      bloodPressure: '120/80',
      heartRate: 72,
      temperature: 36.6
    },
    followUpDate: '2023-11-15',
    doctorNotes: 'Patient showing good recovery. Continue oral hygiene routine.'
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate('/medical-history')}
        className={`mb-4 px-4 py-2 ${styles.ACCENT.text} ${styles.ACCENT.textHover} flex items-center gap-2`}
      >
        <Paragraph>← Back to Medical History</Paragraph>
      </button>
      
      <div className={`${styles.ACCENT.background} rounded-lg shadow-lg p-6`}>
        <H2 className={`mb-6 ${styles.ACCENT.text}`}>Medical Record Details</H2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <H3 className={styles.ACCENT.text}>Basic Information</H3>
              <Paragraph>Date: {entry.date}</Paragraph>
              <Paragraph>Diagnosis: {entry.diagnosis}</Paragraph>
            </div>

            <div className="bg-white p-4 rounded-md shadow">
              <H3 className={styles.ACCENT.text}>Vital Signs</H3>
              <Paragraph>Blood Pressure: {entry.vitalSigns.bloodPressure}</Paragraph>
              <Paragraph>Heart Rate: {entry.vitalSigns.heartRate} bpm</Paragraph>
              <Paragraph>Temperature: {entry.vitalSigns.temperature}°C</Paragraph>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <H3 className={styles.ACCENT.text}>Treatment & Medications</H3>
              <Paragraph>Treatment: {entry.treatment}</Paragraph>
              <div className="mt-2">
                <H4 className={styles.ACCENT.text}>Prescribed Medications:</H4>
                <ul className="list-disc list-inside">
                  {entry.medications.map((med, index) => (
                    <li key={index} className="text-gray-600">{med}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow">
              <H3 className={styles.ACCENT.text}>Dental Procedures</H3>
              {entry.dentalProcedures.map((proc, index) => (
                <div key={index} className="mb-2">
                  <Paragraph>Procedure: {proc.procedure}</Paragraph>
                  <Paragraph>Tooth: {proc.tooth}</Paragraph>
                  <Paragraph>Notes: {proc.notes}</Paragraph>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-md shadow">
          <H3 className={styles.ACCENT.text}>Doctor's Notes</H3>
          <Paragraph>{entry.doctorNotes}</Paragraph>
          {entry.followUpDate && (
            <Paragraph>Follow-up appointment: {entry.followUpDate}</Paragraph>
          )}
        </div>
      </div>
    </div>
  );
};