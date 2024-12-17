import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta = {
  title: 'BSA/Atoms/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (value) => console.log('Password changed:', value),
    label: 'Password',
  },
};

export const WithValue: Story = {
  args: {
    value: 'secretpassword123',
    onChange: (value) => console.log('Password changed:', value),
    label: 'Password',
  },
};

export const WithPlaceholder: Story = {
  args: {
    value: '',
    onChange: (value) => console.log('Password changed:', value),
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const ConfirmPassword: Story = {
  args: {
    value: '',
    onChange: (value) => console.log('Password changed:', value),
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
  },
};
