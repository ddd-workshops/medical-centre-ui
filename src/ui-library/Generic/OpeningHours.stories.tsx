import type { Meta, StoryObj } from '@storybook/react';
import { OpeningHours } from './OpeningHours';

const meta = {
  title: 'UI/Molecules/OpeningHours',
  component: OpeningHours,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OpeningHours>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularClinic: Story = {
  args: {
    openingHours: {
      MONDAY: '9:00 - 17:00',
      TUESDAY: '9:00 - 17:00',
      WEDNESDAY: '9:00 - 17:00',
      THURSDAY: '9:00 - 17:00',
      FRIDAY: '9:00 - 16:00',
      SATURDAY: '10:00 - 14:00',
      SUNDAY: 'Closed',
    },
  },
};

export const ExtendedHours: Story = {
  args: {
    openingHours: {
      MONDAY: '8:00 - 20:00',
      TUESDAY: '8:00 - 20:00',
      WEDNESDAY: '8:00 - 20:00',
      THURSDAY: '8:00 - 20:00',
      FRIDAY: '8:00 - 18:00',
      SATURDAY: '9:00 - 16:00',
      SUNDAY: '10:00 - 14:00',
    },
  },
};

export const WeekdaysOnly: Story = {
  args: {
    openingHours: {
      MONDAY: '8:30 - 17:30',
      TUESDAY: '8:30 - 17:30',
      WEDNESDAY: '8:30 - 17:30',
      THURSDAY: '8:30 - 17:30',
      FRIDAY: '8:30 - 16:00',
      SATURDAY: 'Closed',
      SUNDAY: 'Closed',
    },
  },
};
