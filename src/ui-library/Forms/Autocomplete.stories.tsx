import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Autocomplete } from './Autocomplete';
import { TextInput } from './TextInput';

const meta: Meta<typeof Autocomplete> = {
  title: 'UI/Forms/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A searchable dropdown component that allows users to filter through a list of options and select one.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const doctors = [
  { id: '1', label: 'Dr. John Doe - Orthodontist' },
  { id: '2', label: 'Dr. Jane Smith - Pediatric Dentist' },
  { id: '3', label: 'Dr. Emily Johnson - Periodontist' },
  { id: '4', label: 'Dr. Michael Brown - Oral Surgeon' },
  { id: '5', label: 'Dr. Sarah Davis - Endodontist' },
  { id: '6', label: 'Dr. David Wilson - General Dentist' }
];

const treatments = [
  { id: '1', label: 'Dental Cleaning' },
  { id: '2', label: 'Root Canal Treatment' },
  { id: '3', label: 'Tooth Extraction' },
  { id: '4', label: 'Dental Implants' },
  { id: '5', label: 'Teeth Whitening' }
];

export const DoctorSearch: Story = {
  args: {
    options: doctors,
    renderInput: ({ value, onChange }) => (
      <TextInput
        label="Doctor"
        value={value}
        onChange={onChange}
        placeholder="Search for a doctor..."
      />
    ),
    onSelect: action('Doctor selected'),
    maxItems: 5
  }
};

export const TreatmentSearch: Story = {
  args: {
    options: treatments,
    renderInput: ({ value, onChange }) => (
      <TextInput
        label="Treatment"
        value={value}
        onChange={onChange}
        placeholder="Search for a treatment..."
      />
    ),
    onSelect: action('Treatment selected'),
    maxItems: 3
  }
};

export const CustomRendering: Story = {
  args: {
    options: doctors,
    renderInput: ({ value, onChange }) => (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Find Specialist</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Type specialist name..."
        />
      </div>
    ),
    onSelect: action('Specialist selected'),
    maxItems: 5
  }
};

export const NoMaxLimit: Story = {
  args: {
    options: doctors,
    onSelect: action('Doctor selected'),
    maxItems: undefined
  }
};
