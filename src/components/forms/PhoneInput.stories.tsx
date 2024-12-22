import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PhoneInput } from './PhoneInput';

const meta = {
  title: 'BSA/Forms/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onChange: action('onChange'),
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    label: 'Phone Number',
  },
};

export const WithValue: Story = {
  args: {
    value: '123456789',
    label: 'Phone Number',
  },
};

export const Required: Story = {
  args: {
    value: '',
    label: 'Phone Number',
    required: true,
  },
};
