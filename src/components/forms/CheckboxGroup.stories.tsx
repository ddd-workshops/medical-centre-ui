import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'BSA/Forms/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const options = [
  { id: 'xray', label: 'Dental X-Ray', value: 'XRAY' },
  { id: 'scan', label: '3D Dental Scan', value: 'SCAN' },
  { id: 'photo', label: 'Intraoral Photos', value: 'PHOTO' },
];

export const Vertical: Story = {
  args: {
    header: 'Required Diagnostics',
    options,
    values: [],
    onChange: action('onChange'),
  },
};

export const VerticalWithSelection: Story = {
  args: {
    ...Vertical.args,
    values: ['XRAY', 'PHOTO'],
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
