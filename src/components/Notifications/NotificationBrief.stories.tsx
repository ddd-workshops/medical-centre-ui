
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBrief } from './NotificationBrief';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof NotificationBrief> = {
  title: 'BSA/Notifications/NotificationBrief',
  component: NotificationBrief,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationBrief>;

export const Unread: Story = {
  args: {
    notification: {
      id: '1',
      title: 'Appointment Reminder',
      subtitle: 'Tomorrow at 2:00 PM',
      receivedDate: new Date().toISOString(),
      read: false,
    },
  },
};

export const Read: Story = {
  args: {
    notification: {
      id: '2',
      title: 'Test Results Available',
      subtitle: 'Blood work results ready',
      receivedDate: new Date().toISOString(),
      read: true,
    },
  },
};

export const LongContent: Story = {
  args: {
    notification: {
      id: '3',
      title: 'Very Long Notification Title That Should Wrap to Multiple Lines',
      subtitle: 'This is a very long subtitle that contains additional information and should also wrap properly',
      receivedDate: new Date().toISOString(),
      read: false,
    },
  },
};