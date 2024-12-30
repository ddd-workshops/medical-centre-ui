import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Timeline } from './Timeline';
import type { AppointmentBrief } from '../contract/types';

const meta: Meta<typeof Timeline> = {
  title: 'BSA/Appointments/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Timeline>;

const sampleAppointments: AppointmentBrief[] = [
  {
    id: '1',
    patientName: 'John Smith',
    datetime: '2024-02-10T09:00:00Z',
    doctorId: 1,
    doctorName: 'Dr. Sarah Johnson',
    status: 'SCHEDULED',
    serviceType: 'CLEANING',
    location: 'Bright Smiles Central (123 Dental Street, Medical District, London)'
  },
  {
    id: '2',
    patientName: 'Emma Davis',
    datetime: '2024-02-10T14:00:00Z',
    doctorId: 2,
    doctorName: 'Dr. Michael Chen',
    status: 'CANCELLED',
    serviceType: 'ORTHODONTICS',
    location: 'Bright Smiles Central (123 Dental Street, Medical District, London)'
  },
  {
    id: '3',
    patientName: 'Alice Brown',
    datetime: '2024-02-15T11:00:00Z',
    doctorId: 3,
    doctorName: 'Dr. Emily Williams',
    status: 'COMPLETED',
    serviceType: 'IMPLANT',
    location: 'Bright Smiles Central (123 Dental Street, Medical District, London)'
  }
];

export const Default: Story = {
  args: {
    appointments: sampleAppointments,
  },
};

export const Empty: Story = {
  args: {
    appointments: [],
  },
};
