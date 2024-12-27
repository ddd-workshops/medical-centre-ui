import { useState } from 'react';
import { DateRangePicker } from '../../ui-library/Forms/DateRangePicker.tsx';
import { TextInput } from '../../ui-library/Forms/TextInput.tsx';
import { Dropdown } from '../../ui-library/Forms/Dropdown.tsx';
import type { AppointmentStatus } from '../../contract/types';
import { AppointmentSearchCriteria } from './AppointmentSearchCriteria.ts';

type Props = {
  onSearch: (params: AppointmentSearchCriteria) => void;
};

export const AppointmentSearchBar = ({ onSearch }: Props) => {
  const [params, setParams] = useState<AppointmentSearchCriteria>({ query: '' });

  const handleChange = (updates: Partial<AppointmentSearchCriteria>) => {
    const newParams = { ...params, ...updates };
    setParams(newParams);
    onSearch(newParams);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TextInput
          label="Search Appointments"
          placeholder="Patient name, doctor..."
          value={params.query}
          onChange={(query) => handleChange({ query })}
          className="md:col-span-2"
        />
        <Dropdown
          label="Status"
          value={params.status || ''}
          onChanged={(value) => handleChange({ status: value as AppointmentStatus })}
          items={{
            '': 'All statuses',
            'SCHEDULED': 'Scheduled',
            'COMPLETED': 'Completed',
            'CANCELLED': 'Cancelled'
          }}
          className="w-full"
        />
        <DateRangePicker
          label="Date range"
          startDate={params.dateFrom}
          endDate={params.dateTo}
          onStartDateChange={(date) => handleChange({ dateFrom: date })}
          onEndDateChange={(date) => handleChange({ dateTo: date })}
          className="md:col-span-2 lg:col-span-1"
        />
      </div>
    </div>
  );
};
