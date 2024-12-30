import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { DoctorListSearch } from './DoctorSearchBar';

const meta = {
  title: 'BSA/Doctors/DoctorListSearch',
  component: DoctorListSearch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DoctorListSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSpecialties = [
  'Orthodontics',
  'Dental Surgery',
  'Periodontics',
  'Endodontics',
  'Pediatric Dentistry',
  'Prosthodontics',
  'Oral Medicine',
];

const mockLocations = [
  { id: '1', name: 'Downtown Dental Centre' },
  { id: '2', name: 'North Side Clinic' },
  { id: '3', name: 'West End Dental Care' },
  { id: '4', name: 'East Side Smiles' },
  { id: '5', name: 'South Gate Dental' },
];

const mockLanguages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Hindi',
  'Arabic',
  'Polish',
];

export const Default: Story = {
  args: {
    onSearch: action('onSearch'),
    specialties: mockSpecialties,
    locations: mockLocations,
    languages: mockLanguages,
  },
};

export const WithNoLocations: Story = {
  args: {
    onSearch: action('onSearch'),
    specialties: mockSpecialties,
    locations: [],
    languages: mockLanguages,
  },
};

export const WithNoSpecialties: Story = {
  args: {
    onSearch: action('onSearch'),
    specialties: [],
    locations: mockLocations,
    languages: mockLanguages,
  },
};

export const WithNoLanguages: Story = {
  args: {
    onSearch: action('onSearch'),
    specialties: mockSpecialties,
    locations: mockLocations,
    languages: [],
  },
};

export const WithEmptyOptions: Story = {
  args: {
    onSearch: action('onSearch'),
    specialties: [],
    locations: [],
    languages: [],
  },
};
