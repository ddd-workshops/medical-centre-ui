import { Paragraph } from '../Typography/Paragraph';

export function PatientCard({ patient }: PatientCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <H3>{patient.name}</H3>
      <Paragraph size="SMALL">
        Email: {patient.email}
      </Paragraph>
      <Paragraph size="SMALL">
        Phone: {patient.phoneNumber}
      </Paragraph>
      // ...existing code...
    </div>
  );
}
