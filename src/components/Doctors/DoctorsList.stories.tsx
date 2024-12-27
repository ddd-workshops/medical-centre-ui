import type { Meta, StoryObj } from '@storybook/react';
import { DoctorsList } from './DoctorsList';
import { BrowserRouter } from 'react-router-dom';
import { DoctorBrief } from '../../contract/types';

const meta: Meta<typeof DoctorsList> = {
  title: 'BSA/Doctors/DoctorsList',
  component: DoctorsList,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DoctorsList>;

const sampleDoctors: DoctorBrief[] = [
  {
    id: '1',
    fullName: 'Sarah Mitchell',
    specialties: ['Orthodontics', 'Pediatric Dentistry'],
  },
  {
    id: '2',
    fullName: 'James Wilson',
    specialties: ['Periodontics', 'Dental Surgery'],
  },
  {
    id: '3',
    fullName: 'Emily Brown',
    specialties: ['Endodontics', 'Root Canal Therapy'],
  },
  {
    id: '4',
    fullName: 'Michael Thompson',
    specialties: ['General Dentistry', 'Cosmetic Dentistry'],
  },
];

export const Default: Story = {
  args: {
    doctors: sampleDoctors,
  },
};

export const Empty: Story = {
  args: {
    doctors: [],
  },
};
