import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'BSA/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'dental-cleaning',
    label: 'Dental Cleaning',
    checked: false,
    onChange: action('onChange'),
  },
};

export const Checked: Story = {
  args: {
    id: 'teeth-whitening',
    label: 'Teeth Whitening',
    checked: true,
    onChange: action('onChange'),
  },
};
