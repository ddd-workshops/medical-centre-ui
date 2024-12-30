import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { AppointmentCard } from './AppointmentCard';
import type { AppointmentBrief, AppointmentDetails } from '../../contract/types';

// Mock data
const mockAppointment: AppointmentBrief = {
  id: '1',
  doctorId: 123,
  doctorName: 'Dr. Sarah Johnson',
  patientName: 'John Smith',
  serviceType: 'DENTAL_CLEANING',
  location: 'Main Clinic',
  datetime: '2024-02-20T14:30:00Z',
  status: 'SCHEDULED'
};

const mockDetails: AppointmentDetails = {
  id: "e3fe2c39-0266-4505-bc8b-8c9b4bb9bfeb",
  patient: {
    id: "e360a2ef-48b8-46ba-b5ef-e951b93e509d",
    fullName: "Olive McCullough"
  },
  doctor: {
    id: 123,
    fullName: "Dr. Brakus",
    specialties: [
      "Dental Implant Specialist"
    ]
  },
  serviceType: {
    id: "service-10",
    name: "DENTAL_IMPLANT"
  },
  location: {
    id: 10,
    name: "Bright Smiles Richmond",
    address: '123 Dental Street, Medical District, London'
  },
  datetime: "2025-04-09T20:56:14.529Z",
  status: "COMPLETED",
  prescriptions: [
    "Rustic Steel Fish",
    "Licensed Metal Towels"
  ],
  billing: {
    amount: 474.75,
    status: "PENDING"
  }
};

const meta = {
  title: 'BSA/Appointments/AppointmentCard',
  component: AppointmentCard,
  parameters: {
    layout: 'padded',
  },
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
      status: 'COMPLETED'
    },
  },
};
