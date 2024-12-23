import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import { AppointmentCard } from './AppointmentCard';
import type { AppointmentBrief, AppointmentDetails } from '../../contract/types';

// Mock data
const mockAppointment: AppointmentBrief = {
  id: '1',
  datetime: '2024-02-20T14:30:00Z',
  status: 'SCHEDULED',
  serviceType: 'Dental Cleaning',
  location: 'Main Clinic',
  doctorName: 'Dr. Sarah Johnson',
  patientName: 'John Smith'
};

const mockDetails: AppointmentDetails = {
  "id": "e3fe2c39-0266-4505-bc8b-8c9b4bb9bfeb",
  "patient": {
    "id": "e360a2ef-48b8-46ba-b5ef-e951b93e509d",
    "fullName": "Olive McCullough"
  },
  "doctor": {
    "id": "f7d170c3-5eb0-4068-84ea-11640f6f23e3",
    "fullName": "Brakus",
    "specialties": [
      "General Dentist"
    ]
  },
  "location": {
    "id": "10",
    "name": "Bright Smiles Richmond",
    "address": "28 The Quadrant, London, TW9 1DN, United Kingdom"
  },
  "serviceType": {
    "id": "service-10",
    "name": "DENTAL_IMPLANT"
  },
  "datetime": "2025-04-09T20:56:14.529Z",
  "status": "COMPLETED",
  "prescriptions": [
    "Rustic Steel Fish",
    "Licensed Metal Towels"
  ],
  "billing": {
    "amount": 474.75,
    "status": "PENDING"
  }
};

// QueryClient setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Prepare mock response
queryClient.setQueryData(['appointment', '1'], mockDetails);

const meta = {
  title: 'BSA/Appointments/AppointmentCard',
  component: AppointmentCard,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof AppointmentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scheduled: Story = {
  args: {
    appointment: mockAppointment,
  },
};

export const Completed: Story = {
  args: {
    appointment: {
      ...mockAppointment,
      status: 'COMPLETED',
    },
  },
};

export const Cancelled: Story = {
  args: {
    appointment: {
      ...mockAppointment,
      status: 'CANCELLED',
    },
  },
};

export const WithOverdueBilling: Story = {
  args: {
    appointment: {
      ...mockAppointment,
      status: 'COMPLETED',
    },
  },
  decorators: [
    (Story) => {
      const overdueDetails = {
        ...mockDetails,
        status: 'COMPLETED',
        billing: {
          amount: 150,
          status: 'OVERDUE'
        }
      };
      queryClient.setQueryData(['appointment', '1'], overdueDetails);
      return <Story />;
    },
  ],
};
