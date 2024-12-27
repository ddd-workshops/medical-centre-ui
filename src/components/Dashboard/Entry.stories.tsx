import type { Meta, StoryObj } from '@storybook/react';
import { Entry } from './Entry';
import { BrowserRouter } from 'react-router-dom';
import { MessageType } from '../DesignEnums/MessageType';

const meta: Meta<typeof Entry> = {
  title: 'UI/Molecules/Entry',
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
    messageType: MessageType.INFO,
    label: 'Information',
    children: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    messageType: MessageType.SUCCESS,
    label: 'Success',
    children: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    messageType: MessageType.WARNING,
    label: 'Warning',
    children: 'Please review this important notice',
  },
};

export const Alert: Story = {
  args: {
    messageType: MessageType.ALERT,
    label: 'Alert',
    children: 'Immediate attention required',
  },
};

export const Update: Story = {
  args: {
    messageType: MessageType.UPDATE,
    label: 'Update',
    children: 'System has been updated',
  },
};

export const WithLink: Story = {
  args: {
    messageType: MessageType.SUCCESS,
    label: 'Clickable Entry',
    children: 'Click me to navigate',
    to: '/some-path',
  },
};
