import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ButtonGroup } from './ButtonGroup';

const meta = {
  title: 'BSA/Atoms/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Primary: Story = {
  args: {
    variant: 'PRIMARY',
    items: [
      { id: '1', label: 'First Option', onClick: action('first-option-clicked') },
      { id: '2', label: 'Second Option', onClick: action('second-option-clicked') },
      { id: '3', label: 'Third Option', onClick: action('third-option-clicked'), disabled: true }
    ]
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'SECONDARY'
  }
};
