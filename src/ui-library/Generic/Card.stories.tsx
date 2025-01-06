import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { styles } from '../DesignEnums';

const meta = {
  title: 'UI/Atoms/Card',
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
    title: 'Featured Service',
    className: `bg-gradient-to-br from-green-50 to-emerald-100 ${styles.ACCENT.border}`,
    children: (
      <div className="space-y-2">
        <p className={styles.ACCENT.textDark}>Professional teeth whitening service now available!</p>
        <p className={`${styles.ACCENT.text} text-sm`}>Schedule your appointment today.</p>
      </div>
    ),
  },
};
