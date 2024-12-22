import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'BSA/Forms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = {
  '1': 'Option 1',
  '2': 'Option 2',
  '3': 'Option 3',
};

export const Default: Story = {
  args: {
    items: sampleItems,
    onChanged: action('changed'),
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: 'Choose an option',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Dropdown items={sampleItems} size="SMALL" onChanged={action('changed')} placeholder="Small" />
      <Dropdown items={sampleItems} size="MEDIUM" onChanged={action('changed')} placeholder="Medium" />
      <Dropdown items={sampleItems} size="LARGE" onChanged={action('changed')} placeholder="Large" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Dropdown items={sampleItems} variant="PRIMARY" onChanged={action('changed')} placeholder="Primary" />
      <Dropdown items={sampleItems} variant="SECONDARY" onChanged={action('changed')} placeholder="Secondary" />
      <Dropdown items={sampleItems} variant="OUTLINE" onChanged={action('changed')} placeholder="Outline" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Please select an option',
  },
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: '2',
  },
};
