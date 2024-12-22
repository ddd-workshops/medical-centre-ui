import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';
import { ComponentProps, useState } from 'react';

const meta: Meta<typeof TextArea> = {
  title: 'BSA/Forms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

type TextAreaWrapperProps = Omit<ComponentProps<typeof TextArea>, 'value' | 'onChange'>
const TextAreaWrapper = (props: TextAreaWrapperProps) => {
  const [value, setValue] = useState('');
  return <TextArea {...props} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: () => <TextAreaWrapper label="Description" placeholder="Enter your description here..." />,
};

export const WithError: Story = {
  render: () => <TextAreaWrapper label="Comments" error="Please enter at least 10 characters" />,
};

export const CustomRows: Story = {
  render: () => <TextAreaWrapper label="Long Text" rows={8} />,
};
