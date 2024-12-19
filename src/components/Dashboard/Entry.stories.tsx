import type { Meta, StoryObj } from '@storybook/react';
import { Entry } from './Entry';
import { BrowserRouter } from 'react-router-dom';
import { MessageKind } from '../MessageKind/MessageKind';

const meta: Meta<typeof Entry> = {
  title: 'BSA/Molecules/Entry',
  component: Entry,
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Entry>;

export const Info: Story = {
  args: {
    variant: MessageKind.INFO,
    label: 'Information',
    children: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    variant: MessageKind.SUCCESS,
    label: 'Success',
    children: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    variant: MessageKind.WARNING,
    label: 'Warning',
    children: 'Please review this important notice',
  },
};

export const Alert: Story = {
  args: {
    variant: MessageKind.ALERT,
    label: 'Alert',
    children: 'Immediate attention required',
  },
};

export const Update: Story = {
  args: {
    variant: MessageKind.UPDATE,
    label: 'Update',
    children: 'System has been updated',
  },
};

export const WithLink: Story = {
  args: {
    variant: MessageKind.SUCCESS,
    label: 'Clickable Entry',
    children: 'Click me to navigate',
    to: '/some-path',
  },
};
