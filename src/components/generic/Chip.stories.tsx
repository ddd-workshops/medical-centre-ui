import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Chip } from './Chip';

const meta = {
  title: 'BSA/Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: {
    label: 'Example Chip'
  }
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Filled: Story = {
  args: {
    variant: 'FILLED'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'OUTLINED'
  }
};

export const Clickable: Story = {
  args: {
    variant: 'FILLED',
    onClick: action('chip-clicked')
  }
};

export const Removable: Story = {
  args: {
    variant: 'FILLED',
    onRemove: action('chip-removed')
  }
};

export const ClickableAndRemovable: Story = {
  args: {
    variant: 'OUTLINED',
    onClick: action('chip-clicked'),
    onRemove: action('chip-removed')
  }
};
