import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'UI/Forms/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    id: 'root-canal',
    name: 'treatment',
    label: 'Root Canal Treatment',
    value: 'root-canal',
    checked: false,
    onChange: action('onChange'),
  },
};

export const Checked: Story = {
  args: {
    id: 'tooth-extraction',
    name: 'treatment',
    label: 'Tooth Extraction',
    value: 'extraction',
    checked: true,
    onChange: action('onChange'),
  },
};
