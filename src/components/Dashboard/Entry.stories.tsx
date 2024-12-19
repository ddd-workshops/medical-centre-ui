import type { Meta, StoryObj } from '@storybook/react';
import { Entry, EntryVariant } from './Entry';
import { BrowserRouter } from 'react-router-dom';

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
    variant: EntryVariant.INFO,
    label: 'Information',
    children: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    variant: EntryVariant.SUCCESS,
    label: 'Success',
    children: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    variant: EntryVariant.WARNING,
    label: 'Warning',
    children: 'Please review this important notice',
  },
};

export const Alert: Story = {
  args: {
    variant: EntryVariant.ALERT,
    label: 'Alert',
    children: 'Immediate attention required',
  },
};

export const Update: Story = {
  args: {
    variant: EntryVariant.UPDATE,
    label: 'Update',
    children: 'System has been updated',
  },
};

export const WithLink: Story = {
  args: {
    variant: EntryVariant.SUCCESS,
    label: 'Clickable Entry',
    children: 'Click me to navigate',
    to: '/some-path',
  },
};
