import { useParams, useNavigate } from 'react-router-dom';

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
        className="mb-4 px-4 py-2 text-green-700 hover:text-green-800 flex items-center gap-2"
      >
        ← Back to Medical History
      </button>
      
      <div className="bg-green-50 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Medical Record Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-green-700">Basic Information</h3>
              <p className="text-gray-600">Date: {entry.date}</p>
              <p className="text-gray-600">Diagnosis: {entry.diagnosis}</p>
            </div>

            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-green-700">Vital Signs</h3>
              <p className="text-gray-600">Blood Pressure: {entry.vitalSigns.bloodPressure}</p>
              <p className="text-gray-600">Heart Rate: {entry.vitalSigns.heartRate} bpm</p>
              <p className="text-gray-600">Temperature: {entry.vitalSigns.temperature}°C</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-green-700">Treatment & Medications</h3>
              <p className="text-gray-600">Treatment: {entry.treatment}</p>
              <div className="mt-2">
                <h4 className="text-green-600">Prescribed Medications:</h4>
                <ul className="list-disc list-inside">
                  {entry.medications.map((med, index) => (
                    <li key={index} className="text-gray-600">{med}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-green-700">Dental Procedures</h3>
              {entry.dentalProcedures.map((proc, index) => (
                <div key={index} className="mb-2">
                  <p className="text-gray-600">Procedure: {proc.procedure}</p>
                  <p className="text-gray-600">Tooth: {proc.tooth}</p>
                  <p className="text-gray-600">Notes: {proc.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold text-green-700">Doctor's Notes</h3>
          <p className="text-gray-600">{entry.doctorNotes}</p>
          {entry.followUpDate && (
            <p className="mt-2 text-green-600">Follow-up appointment: {entry.followUpDate}</p>
          )}
        </div>
      </div>
    </div>
  );
};