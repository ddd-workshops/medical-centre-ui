import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DoctorsList } from './DoctorsList';

const queryClient = new QueryClient();

const meta = {
  title: 'BSA/Doctors/DoctorsList',
  component: DoctorsList,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DoctorsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    doctors: [
      {
        id: 1,
        fullName: 'Dr. John Smith',
        specialties: ['Orthodontics', 'Dental Surgery'],
        locations: [{ id: 1, name: 'Downtown Clinic', address: '123 Main St' }],
      },
      {
        id: 2,
        fullName: 'James Wilson',
        specialties: ['Periodontics', 'Dental Surgery'],
      },
      {
        id: 3,
        fullName: 'Emily Brown',
        specialties: ['Endodontics', 'Root Canal Therapy'],
      },
      {
        id: 4,
        fullName: 'Michael Thompson',
        specialties: ['General Dentistry', 'Cosmetic Dentistry'],
      },
    ],
    specialties: ['Orthodontics', 'Dental Surgery', 'Periodontics'],
    languages: ['English', 'Spanish', 'French'],
  },
};

export const Empty: Story = {
  args: {
    doctors: [],
  },
};
