import { Paragraph } from '../Typography/Paragraph';

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <div className="bg-white rounded-lg p-6">
      <H2>{doctor.name}</H2>
      <Paragraph size="MEDIUM" className="mb-4">
        {doctor.specialization}
      </Paragraph>
      <Paragraph size="SMALL" className="text-gray-600">
        Experience: {doctor.yearsOfExperience} years
      </Paragraph>
      <Paragraph size="SMALL" className="text-gray-600">
        Languages: {doctor.languages.join(', ')}
      </Paragraph>
      // ...existing code...
    </div>
  );
}
