import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ButtonGroup } from './ButtonGroup';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const meta = {
  title: 'UI/Atoms/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    items: [
      { id: '1', label: 'Schedule Appointment', onClick: action('schedule-clicked') },
      { id: '2', label: 'View Patient History', onClick: action('history-clicked') },
      { id: '3', label: 'Request X-Ray', onClick: action('xray-clicked'), disabled: true }
    ]
  }
}

export const ActionButtons: Story = {
  render: () => (
    <ButtonGroup 
      items={[
        { id: '1', label: 'Confirm Treatment', onClick: action('confirm-clicked') },
        { id: '2', label: 'Reschedule', onClick: action('reschedule-clicked'), disabled: true },
        { id: '3', label: 'Add Notes', onClick: action('notes-clicked'), fill: 'OUTLINED' },
        { id: '4', label: 'Cancel', onClick: action('cancel-clicked'), variant: 'ALERT' }
      ]}
    />
  )
};

export const IconOnly: Story = {
  args: {
    fill: 'OUTLINED',
    items: [
      { 
        id: 'prev', 
        label: <ArrowLeft className="w-4 h-4" />, 
        onClick: action('previous-clicked') 
      },
      { 
        id: 'next', 
        label: <ArrowRight className="w-4 h-4" />, 
        onClick: action('next-clicked') 
      }
    ]
  }
};
