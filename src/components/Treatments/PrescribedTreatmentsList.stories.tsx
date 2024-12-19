import type { Meta, StoryObj } from '@storybook/react';
import { PrescribedTreatmentsList } from './PrescribedTreatmentsList';

const meta: Meta<typeof PrescribedTreatmentsList> = {
  title: 'BSA/Treatments/PrescribedTreatmentsList',
  component: PrescribedTreatmentsList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PrescribedTreatmentsList>;

export const Default: Story = {
  args: {
    prescribedTreatments: [
      {
        id: '1',
        treatmentId: 't1',
        patientId: 'p1',
        doctorId: 'd1',
        prescribedDate: '2024-01-15T10:00:00Z',
        status: 'SCHEDULED',
        treatment: {
          id: 't1',
          name: 'Root Canal Treatment',
          shortDescription: 'Endodontic treatment for infected tooth pulp',
          description: 'A detailed procedure to remove infected tooth pulp and seal the tooth',
          duration: 90,
          price: 800
        }
      },
      {
        id: '2',
        treatmentId: 't2',
        patientId: 'p1',
        doctorId: 'd1',
        prescribedDate: '2024-01-10T14:30:00Z',
        status: 'COMPLETED',
        treatment: {
          id: 't2',
          name: 'Dental Crown',
          shortDescription: 'Prosthetic restoration of a damaged tooth',
          description: 'A cap that covers and protects a damaged tooth',
          duration: 60,
          price: 1200
        }
      }
    ]
  }
};
