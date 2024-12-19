import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'BSA/Forms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    onChange: action('option changed'),
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const sampleOptions = [
  { id: 'option1', label: 'Option 1', value: 'option1' },
  { id: 'option2', label: 'Option 2', value: 'option2' },
  { id: 'option3', label: 'Option 3', value: 'option3' },
];

export const Default: Story = {
  args: {
    header: 'Select an option',
    options: sampleOptions,
    value: '',
  },
};

export const WithPreselected: Story = {
  args: {
    header: 'Select an option',
    options: sampleOptions,
    value: 'option2',
  },
};
