import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { useState } from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'BSA/Forms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

const TextInputWrapper = (props: any) => {
  const [value, setValue] = useState('');
  return <TextInput {...props} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: () => <TextInputWrapper label="Username" />,
};

export const WithError: Story = {
  render: () => <TextInputWrapper label="Email" type="email" error="Please enter a valid email" />,
};

export const Password: Story = {
  render: () => <TextInputWrapper label="Password" type="password" />,
};
