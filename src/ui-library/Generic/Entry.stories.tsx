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
    variant: 'DEFAULT',
    label: 'Information',
    children: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    variant: 'SUCCESS',
    label: 'Success',
    children: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    variant: 'WARNING',
    label: 'Warning',
    children: 'Please review this important notice',
  },
};

export const Alert: Story = {
  args: {
    variant: 'ALERT',
    label: 'Alert',
    children: 'Immediate attention required',
  },
};

export const Update: Story = {
  args: {
    variant: 'UPDATE',
    label: 'Update',
    children: 'System has been updated',
  },
};

export const WithLink: Story = {
  args: {
    variant: 'SUCCESS',
    label: 'Clickable Entry',
    children: 'Click me to navigate',
    to: '/some-path',
  },
};
