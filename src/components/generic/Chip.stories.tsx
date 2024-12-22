import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { X } from 'lucide-react';
import { Chip } from './Chip';
import { ChipList } from './ChipList';

const meta = {
  title: 'BSA/Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Chip Text',
    variant: 'PRIMARY'
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'General Dentistry',
  }
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip variant="PRIMARY">General</Chip>
      <Chip variant="SECONDARY">Orthodontics</Chip>
      <Chip variant="OUTLINE">Implants</Chip>
      <Chip variant="WARNING">Urgent</Chip>
      <Chip variant="ERROR">Cancelled</Chip>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip size="SMALL">Small</Chip>
      <Chip size="MEDIUM">Medium</Chip>
      <Chip size="LARGE">Large</Chip>
    </div>
  )
};

export const Interactive: Story = {
  args: {
    children: 'Click me',
    onClick: action('chip-clicked')
  }
};

export const Removable: Story = {
  args: {
    children: 'Remove me',
    icon: X,
    onRemove: action('chip-removed')
  }
};

export const ChipListExample: Story = {
  render: () => (
    <ChipList
      items={[
        'General Dentistry',
        'Orthodontics',
        'Implants',
        'Periodontics',
        'Endodontics'
      ]}
      icon={X}
      onRemove={action('chip-removed')}
      onClick={action('chip-clicked')}
    />
  )
};
