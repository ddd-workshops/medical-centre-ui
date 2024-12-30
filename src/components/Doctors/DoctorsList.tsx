import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import { doctorLink } from '../Routing/routes';
import type { DoctorBrief } from '../../contract/types';
import { H3 } from '../../ui-library/Typography/Headings';
import { List } from '../../ui-library/Generic/List';
import { clinicService } from '../../http/clinicsService';

interface DoctorsListProps {
  doctors: DoctorBrief[];
  specialties: string[];
  languages: string[];
}

export const DoctorsList = ({ doctors, specialties, languages }: DoctorsListProps) => {
  const { data: clinics = [] } = useQuery({
    queryKey: ['clinics'],
    queryFn: clinicService.getClinics
  });

  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  if (filteredDoctors.length === 0) {
    return (
      <div className="text-center py-8">
        <H3>No doctors found</H3>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <List
        items={filteredDoctors}
        bulletIcon={User}
        renderItem={(doctor) => (
          <div key={doctor.id}>
            <Link
              to={doctorLink({ 
                doctorId: doctor.id, 
                doctorName: doctor.fullName 
              })}
              className="text-base text-green-700 hover:text-green-800"
            >
              {doctor.fullName}
            </Link>
            <div className="text-sm text-gray-600">{doctor.specialties.join(', ')}</div>
          </div>
        )}
      />
    </div>
  );
};
