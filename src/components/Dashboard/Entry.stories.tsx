import type { Meta, StoryObj } from '@storybook/react';
import { Entry } from './Entry';
import { BrowserRouter } from 'react-router-dom';
import { MessageVariant } from '../MessageVariant/MessageVariant';

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
    variant: MessageVariant.INFO,
    label: 'Information',
    children: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    variant: MessageVariant.SUCCESS,
    label: 'Success',
    children: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    variant: MessageVariant.WARNING,
    label: 'Warning',
    children: 'Please review this important notice',
  },
};

export const Alert: Story = {
  args: {
    variant: MessageVariant.ALERT,
    label: 'Alert',
    children: 'Immediate attention required',
  },
};

export const Update: Story = {
  args: {
    variant: MessageVariant.UPDATE,
    label: 'Update',
    children: 'System has been updated',
  },
};

export const WithLink: Story = {
  args: {
    variant: MessageVariant.SUCCESS,
    label: 'Clickable Entry',
    children: 'Click me to navigate',
    to: '/some-path',
  },
};
