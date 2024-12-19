import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'BSA/Atoms/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Example Card',
    children: <p>This is some content inside the card.</p>,
  },
};

export const WithCustomClass: Story = {
  args: {
    title: 'Custom Card',
    className: 'bg-emerald-50',
    children: <p>This card has a custom background color.</p>,
  },
};
