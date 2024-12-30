import { useEffect, useState } from 'react';

import { TextInput } from '../../ui-library/Forms/TextInput';
import { MultiSelect } from '../../ui-library/Forms/MultiSelect';

export interface DoctorSearchBarFilters {
  name: string;
  specialties: string[];
  locations: string[];
  languages: string[];
}

interface DoctorSearchBarProps {
  onSearch: (filters: DoctorSearchBarFilters) => void;
  specialties: string[];
  locations: Array<{ id: string; name: string }>;
  languages: string[];
}

export const DoctorSearchBar = ({ onSearch, specialties, locations, languages }: DoctorSearchBarProps) => {
  const [filters, setFilters] = useState<DoctorSearchBarFilters>({
    name: '',
    specialties: [],
    locations: [],
    languages: [],
  });

  useEffect(() => {
    onSearch(filters);
  }, [filters, onSearch]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <TextInput
            label="Search"
            value={filters.name}
            onChange={(name) => setFilters({ ...filters, name })}
            placeholder="Search by doctor's name..."
          />
        </div>

        <MultiSelect
          label="Specialties"
          options={specialties.map(s => ({ label: s, value: s }))}
          value={filters.specialties}
          onChange={(value) => setFilters({ ...filters, specialties: value })}
          placeholder="Select specialties..."
        />

        <MultiSelect
          label="Locations"
          options={locations.map(l => ({ label: l.name, value: l.id }))}
          value={filters.locations}
          onChange={(value) => setFilters({ ...filters, locations: value })}
          placeholder="Select locations..."
        />

        <MultiSelect
          label="Languages"
          options={languages.map(l => ({ label: l, value: l }))}
          value={filters.languages}
          onChange={(value) => setFilters({ ...filters, languages: value })}
          placeholder="Select languages..."
        />
      </div>
    </div>
  );
};
