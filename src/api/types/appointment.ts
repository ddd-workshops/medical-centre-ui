
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
  notes?: string;
}