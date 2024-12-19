import type { Meta, StoryObj } from '@storybook/react';
import { AppointmentFeedback } from './AppointmentFeedback';

const meta: Meta<typeof AppointmentFeedback> = {
  title: 'BSA/Feedback/AppointmentFeedback',
  component: AppointmentFeedback
};

export default meta;
type Story = StoryObj<typeof AppointmentFeedback>;

export const Default: Story = {
  args: {
    appointment: {
      doctorName: 'John Smith',
      clinicName: 'Bright Smiles Central',
      date: '2024-01-15',
      time: '14:30',
    },
    onSubmit: (feedback) => console.log('Feedback submitted:', feedback)
  }
};
