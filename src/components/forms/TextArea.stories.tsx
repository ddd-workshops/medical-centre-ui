import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';
import { useState } from 'react';

const meta: Meta<typeof TextArea> = {
  title: 'BSA/Forms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

const TextAreaWrapper = (props: any) => {
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
