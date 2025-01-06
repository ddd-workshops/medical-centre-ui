import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from './Dropdown';

const treatmentTypes = {
  'CHECKUP': 'Regular Check-up',
  'CLEANING': 'Dental Cleaning',
  'FILLING': 'Dental Filling',
  'CROWN': 'Dental Crown',
};

const specialists = {
  'DENTIST': 'General Dentist',
  'ORTHO': 'Orthodontist',
  'SURGEON': 'Oral Surgeon',
  'HYGIENIST': 'Dental Hygienist',
};

const meta = {
  title: 'UI/Forms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Treatment Type',
    items: treatmentTypes,
    onChanged: action('changed'),
  }
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: 'Select treatment type',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Dropdown label="Quick Treatment Select" items={treatmentTypes} size="SMALL" onChanged={action('changed')} />
      <Dropdown label="Standard Treatment Select" items={treatmentTypes} size="MEDIUM" onChanged={action('changed')} />
      <Dropdown label="Detailed Treatment Select" items={treatmentTypes} size="LARGE" onChanged={action('changed')} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    label: 'Completed Treatments',
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Treatment type is required for appointment scheduling',
  },
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: 'CHECKUP',
    label: 'Selected Treatment',
  },
};
