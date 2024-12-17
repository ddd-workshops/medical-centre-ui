import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './PhoneInput';

const meta = {
  title: 'BSA/Atoms/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (value, isValid) => console.log('Phone changed:', value, 'Valid:', isValid),
    label: 'Phone Number',
  },
};

export const WithValue: Story = {
  args: {
    value: '+48 123 456 789',
    onChange: (value, isValid) => console.log('Phone changed:', value, 'Valid:', isValid),
    label: 'Phone Number',
  },
};

export const Required: Story = {
  args: {
    value: '',
    onChange: (value, isValid) => console.log('Phone changed:', value, 'Valid:', isValid),
    label: 'Phone Number',
    required: true,
  },
};
