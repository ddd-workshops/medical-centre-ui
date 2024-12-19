import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'BSA/Forms/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: {
    onChange: action('Selection changed'),
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const sampleOptions = [
  { id: 'option1', label: 'Option 1', value: 'option1' },
  { id: 'option2', label: 'Option 2', value: 'option2' },
  { id: 'option3', label: 'Option 3', value: 'option3' },
];

export const Default: Story = {
  args: {
    header: 'Select multiple options',
    options: sampleOptions,
    values: [],
  },
};

export const WithPreselected: Story = {
  args: {
    header: 'Select multiple options',
    options: sampleOptions,
    values: ['option1', 'option3'],
  },
};
