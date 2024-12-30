import type { Meta, StoryObj } from '@storybook/react';
import { Entry } from './Entry';

const meta: Meta<typeof Entry> = {
  title: 'UI/Molecules/Entry',
  component: Entry,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Entry>;

export const Info: Story = {
  args: {
    messageType: 'DEFAULT',
    label: 'Information',
    children: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    messageType: 'SUCCESS',
    label: 'Success',
    children: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    messageType: 'WARNING',
    label: 'Warning',
    children: 'Please review this important notice',
  },
};

export const Alert: Story = {
  args: {
    messageType: 'ALERT',
    label: 'Alert',
    children: 'Immediate attention required',
  },
};

export const Update: Story = {
  args: {
    messageType: 'UPDATE',
    label: 'Update',
    children: 'System has been updated',
  },
};

export const WithLink: Story = {
  args: {
    messageType: 'SUCCESS',
    label: 'Clickable Entry',
    children: 'Click me to navigate',
    to: '/some-path',
  },
};
