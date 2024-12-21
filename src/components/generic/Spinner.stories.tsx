import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'BSA/Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'SMALL',
  },
};

export const Large: Story = {
  args: {
    size: 'LARGE',
  },
};
