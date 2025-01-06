import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

import { ExpandableSearchBar } from './ExpandableSearchBar';
import { TextInput } from '../Forms/TextInput';
import { Autocomplete } from '../Forms/Autocomplete';
import { MultiSelect } from '../Forms/MultiSelect';

const mockDentists = [
  { id: '1', label: 'Dr. Sarah Thompson', specialization: 'Orthodontist' },
  { id: '2', label: 'Dr. Michael Chen', specialization: 'Periodontist' },
  { id: '3', label: 'Dr. Emily Wilson', specialization: 'General Dentist' },
  { id: '4', label: 'Dr. James Miller', specialization: 'Endodontist' },
];

const mockTreatments = [
  { label: 'Regular Checkup', value: 'checkup' },
  { label: 'Teeth Cleaning', value: 'cleaning' },
  { label: 'Root Canal', value: 'root-canal' },
  { label: 'Dental Crown', value: 'crown' },
  { label: 'Dental Implant', value: 'implant' },
  { label: 'Orthodontic Treatment', value: 'orthodontic' },
];

const meta = {
  title: 'UI/Organisms/ExpandableSearchBar',
  component: ExpandableSearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: null
  }
} satisfies Meta<typeof ExpandableSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[800px]">
      <ExpandableSearchBar>
        <div className="flex flex-col space-y-4">
          <ExpandableSearchBar.BaseRow>
            <div className="flex-1">
              <TextInput
                label="Patient Name"
                placeholder="Search by patient name..."
                value=""
                onChange={action('onChange')}
              />
            </div>
            <div className="flex-1">
              <Autocomplete
                label="Dentist"
                placeholder="Select dentist..."
                options={mockDentists}
                onSelect={action('onDentistChange')}
              />
            </div>
            <ExpandableSearchBar.ToggleButton />
          </ExpandableSearchBar.BaseRow>

          <ExpandableSearchBar.ExpandedContent>
            <div className="flex-1">
              <MultiSelect
                label="Treatment Types"
                placeholder="Select treatments..."
                options={mockTreatments}
                value={[]}
                onChange={action('onTreatmentsChange')}
              />
            </div>
            <div className="flex-1">
              <TextInput
                label="Appointment Date"
                type="date"
                placeholder="Search by date..."
                value=""
                onChange={action('onChange')}
              />
            </div>
          </ExpandableSearchBar.ExpandedContent>
        </div>
      </ExpandableSearchBar>
    </div>
  ),
};

export const WithoutExpandedContent: Story = {
  render: () => (
    <div className="w-[800px]">
      <ExpandableSearchBar>
        <ExpandableSearchBar.BaseRow>
          <div className="flex-1">
            <TextInput
              label="Patient ID"
              placeholder="Enter patient ID..."
              value=""
              onChange={action('onChange')}
            />
          </div>
          <div className="flex-1">
            <TextInput
              label="Insurance Number"
              placeholder="Enter insurance number..."
              value=""
              onChange={action('onChange')}
            />
          </div>
        </ExpandableSearchBar.BaseRow>
      </ExpandableSearchBar>
    </div>
  ),
};

type SearchState = {
  patientName: string;
  dentist: typeof mockDentists[0] | null;
  treatmentTypes: string[];
  appointmentDate: string;
};

const SearchWrapper = () => {
  const [search, setSearch] = useState<SearchState>({
    patientName: '',
    dentist: null,
    treatmentTypes: [],
    appointmentDate: '',
  });

  return (
    <div className="w-[800px]">
      <ExpandableSearchBar>
        <div className="flex flex-col space-y-4">
          <ExpandableSearchBar.BaseRow>
            <div className="flex-1">
              <TextInput
                label="Patient Name"
                placeholder="Search by patient name..."
                value={search.patientName}
                onChange={(value) => {
                  setSearch(prev => {
                    const updated = { ...prev, patientName: value };
                    action('searchStateChanged')(updated);
                    return updated;
                  });
                }}
              />
            </div>
            <div className="flex-1">
              <Autocomplete
                label="Dentist"
                placeholder="Select dentist..."
                options={mockDentists}
                onSelect={(option) => {
                  setSearch(prev => {
                    const dentist = mockDentists.find(d => d.id === option.id) ?? null;
                    const updated = { ...prev, dentist };
                    action('searchStateChanged')(updated);
                    return updated;
                  });
                }}
              />
            </div>
            <ExpandableSearchBar.ToggleButton />
          </ExpandableSearchBar.BaseRow>

          <ExpandableSearchBar.ExpandedContent>
            <div className="flex-1">
              <MultiSelect
                label="Treatment Types"
                placeholder="Select treatments..."
                options={mockTreatments}
                value={search.treatmentTypes}
                onChange={(values) => {
                  setSearch(prev => {
                    const updated = { ...prev, treatmentTypes: values };
                    action('searchStateChanged')(updated);
                    return updated;
                  });
                }}
              />
            </div>
            <div className="flex-1">
              <TextInput
                label="Appointment Date"
                type="date"
                placeholder="Search by date..."
                value={search.appointmentDate}
                onChange={(value) => {
                  setSearch(prev => {
                    const updated = { ...prev, appointmentDate: value };
                    action('searchStateChanged')(updated);
                    return updated;
                  });
                }}
              />
            </div>
          </ExpandableSearchBar.ExpandedContent>
        </div>
      </ExpandableSearchBar>
    </div>
  );
};

export const ExpandableWithState: Story = {
  render: () => <SearchWrapper />,
};
