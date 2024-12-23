import { useState } from 'react';
import { DateRangePicker } from '../forms/DateRangePicker';
import { TextInput } from '../forms/TextInput';
import { Dropdown } from '../forms/Dropdown';
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
    <div className="flex gap-4 p-4 bg-white shadow-sm">
      <TextInput
        label='Appointment'
        placeholder="Search appointments..."
        value={params.query}
        onChange={(query) => handleChange({ query })}
        
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
        className="w-40"
      />
      <DateRangePicker
        label="Date range"
        startDate={params.dateFrom}
        endDate={params.dateTo}
        onStartDateChange={(date) => handleChange({ dateFrom: date })}
        onEndDateChange={(date) => handleChange({ dateTo: date })}
      />
    </div>
  );
};
