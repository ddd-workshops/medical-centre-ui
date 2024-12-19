import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TimeSlots } from './TimeSlots';

const meta: Meta<typeof TimeSlots> = {
  title: 'BSA/Appointments/TimeSlots',
  component: TimeSlots,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TimeSlots>;

const timeSlots = [
  { id: 1, label: '09:00' },
  { id: 2, label: '09:30' },
  { id: 3, label: '10:00' },
  { id: 4, label: '10:30' },
  { id: 5, label: '11:00' },
  { id: 6, label: '11:30' },
  { id: 7, label: '14:00' },
  { id: 8, label: '14:30' },
  { id: 9, label: '15:00' },
  { id: 10, label: '15:30' },
  { id: 11, label: '16:00' },
  { id: 12, label: '16:30' },
];

export const Default: Story = {
  args: {
    slots: timeSlots,
    onTimeSelect: action('onTimeSelect'),
  },
};

export const WithPreselectedTime: Story = {
  args: {
    slots: timeSlots,
    selectedTimeId: 3,
    onTimeSelect: action('onTimeSelect'),
  },
};
