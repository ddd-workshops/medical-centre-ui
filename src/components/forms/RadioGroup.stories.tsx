import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'BSA/Forms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const options = [
  { id: 'cleaning', label: 'Regular Cleaning', value: 'CLEANING' },
  { id: 'whitening', label: 'Teeth Whitening', value: 'WHITENING' },
  { id: 'root-canal', label: 'Root Canal Treatment', value: 'ROOT_CANAL' },
];

export const Vertical: Story = {
  args: {
    header: 'Select Treatment Type',
    options,
    value: '',
    onChange: action('onChange'),
  },
};

export const VerticalWithSelection: Story = {
  args: {
    ...Vertical.args,
    value: 'WHITENING',
  },
};

export const Horizontal: Story = {
  args: {
    ...Vertical.args,
    orientation: 'HORIZONTAL',
  },
};

export const HorizontalWithSelection: Story = {
  args: {
    ...VerticalWithSelection.args,
    orientation: 'HORIZONTAL',
  },
};
