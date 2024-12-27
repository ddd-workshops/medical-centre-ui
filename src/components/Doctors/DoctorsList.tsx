import type { DoctorBrief } from '../../contract/types';
import { Link } from 'react-router-dom';
import { H3 } from '../../ui-library/Typography/Headings';
import { User } from 'lucide-react';

interface DoctorsListProps {
  doctors: DoctorBrief[];
}

export const DoctorsList = ({ doctors }: DoctorsListProps) => {
  if (doctors.length === 0) {
    return (
      <div className="text-center py-8">
        <H3>No doctors found</H3>
      </div>
    );
  }

  return (
    <div className="space-y-3 max-w-2xl mx-auto">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="bg-white rounded-lg shadow-md px-4 py-3 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-full shrink-0">
              <User className="w-5 h-5 text-green-600" />
            </div>
            <div className="min-w-0 flex-1">
              <Link
                to={`/doctors/${doctor.id}`}
                className="text-base font-semibold text-green-700 hover:text-green-800 block"
              >
                {doctor.fullName}
              </Link>
              <div className="text-sm text-gray-600">
                {doctor.specialties.join(', ')}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
