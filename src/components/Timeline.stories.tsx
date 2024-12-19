import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Timeline } from './Timeline';
import { Appointment } from '../contract/types';

const meta: Meta<typeof Timeline> = {
  title: 'BSA/Appointments/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Timeline>;

const sampleAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    date: '2024-02-10T09:00:00',
    doctor: {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'General Dentist'
    },
    status: 'SCHEDULED',
    medicalNotes: 'Regular check-up',
    prescriptions: ['Toothpaste', 'Mouthwash'],
  },
  {
    id: '2',
    patientId: '2',
    date: '2024-02-10T14:00:00',
    doctor: {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontist'
    },
    status: 'CANCELLED',
    medicalNotes: 'Braces adjustment',
    prescriptions: ['Painkillers'],
  },
  {
    id: '3',
    patientId: '3',
    date: '2024-02-15T11:00:00',
    doctor: {
      id: '3',
      name: 'Dr. Emily Williams',
      specialty: 'Implant Specialist'
    },
    status: 'COMPLETED',
    medicalNotes: 'Implant consultation',
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
