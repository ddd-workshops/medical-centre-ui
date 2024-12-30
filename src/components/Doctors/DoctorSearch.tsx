import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { staffService } from '../../http/staffService';
import { clinicService } from '../../http/clinicsService';
import { DoctorSearchBar, type DoctorSearchBarFilters } from './DoctorSearchBar';
import { DoctorsList } from './DoctorsList';

const SPECIALTIES = ['Orthodontics', 'Dental Surgery', 'Periodontics', 'Endodontics'];
const LANGUAGES = ['English', 'Spanish', 'French', 'German'];

export const DoctorSearch = () => {
  const [filters, setFilters] = useState<DoctorSearchBarFilters>({
    name: '',
    specialties: [],
    locations: [],
    languages: [],
  });

  const { data: doctors, isLoading: isLoadingDoctors, error: doctorsError } = useQuery({
    queryKey: ['doctors', filters],
    queryFn: () => staffService.getDoctors(filters)
  });

  const { data: clinics = [] } = useQuery({
    queryKey: ['clinics'],
    queryFn: clinicService.getClinics
  });

  if (isLoadingDoctors) {
    return <div>Loading...</div>;
  }

  if (doctorsError) {
    return <div>Error loading doctors</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <DoctorSearchBar
        onSearch={setFilters}
        specialties={SPECIALTIES}
        languages={LANGUAGES}
        locations={clinics}
      />
      <DoctorsList 
        doctors={doctors || []} 
        specialties={SPECIALTIES}
        languages={LANGUAGES}
      />
    </div>
  );
};
