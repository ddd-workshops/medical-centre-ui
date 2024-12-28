import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

import { doctorLink } from '../Routing/routes';
import type { DoctorBrief } from '../../contract/types';
import { H3 } from '../../ui-library/Typography/Headings';
import { List } from '../../ui-library/Generic/List';

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
    <List
      items={doctors}
      bulletIcon={User}
      renderItem={(doctor) => (
        <div key={doctor.id}>
          <Link
            to={doctorLink({ 
              doctorId: doctor.id, 
              doctorName: doctor.fullName 
            })}
            className="text-green-700 hover:text-green-800"
          >
            {doctor.fullName}
          </Link>
          <div className="text-sm text-gray-600">{doctor.specialties.join(', ')}</div>
        </div>
      )}
    />
  );
};
