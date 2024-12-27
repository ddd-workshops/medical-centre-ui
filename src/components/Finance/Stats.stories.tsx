import type { Meta, StoryObj } from '@storybook/react';
import { SimpleStats, StatsWithChange, StatsWithActions } from './Stats';
import { Users, Calculator, Calendar, TrendingUp } from 'lucide-react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof SimpleStats> = {
  title: 'BSA/Finance/Stats',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Simple: StoryObj<typeof SimpleStats> = {
  render: () => (
    <SimpleStats
      items={[
        {
          name: 'Total Patients',
          value: 2457,
          icon: Users,
        },
        {
          name: 'Average Treatment Cost',
          value: 1250,
          icon: Calculator,
          isCurrency: true,
        },
        {
          name: 'Monthly Appointments',
          value: 389,
          icon: Calendar,
        },
        {
          name: 'Revenue Growth',
          value: 24500,
          icon: TrendingUp,
          isCurrency: true,
        },
      ]}
    />
  ),
};

export const WithChange: StoryObj<typeof StatsWithChange> = {
  render: () => (
    <StatsWithChange
      items={[
        {
          name: 'Total Revenue',
          value: 405000,
          isCurrency: true,
          change: 12,
          trend: 'increase',
          duration: 'last month',
        },
        {
          name: 'New Patients',
          value: 245,
          change: 5.6,
          trend: 'increase',
          duration: 'last week',
        },
        {
          name: 'Cancelled Appointments',
          value: 23,
          change: 2.1,
          trend: 'decrease',
          duration: 'last week',
        },
      ]}
    />
  ),
};

export const WithActions: StoryObj<typeof StatsWithActions> = {
  render: () => (
    <StatsWithActions
      items={[
        {
          name: 'Monthly Revenue',
          value: 85400,
          isCurrency: true,
          change: 4.3,
          trend: 'increase',
          duration: 'last month',
          actions: [
            { label: 'View details', onClick: action('View details clicked') },
            { label: 'Download report', onClick: action('Download report clicked') },
          ],
        },
        {
          name: 'Patient Satisfaction',
          value: 98,
          change: 5.2,
          trend: 'increase',
          duration: 'last month',
          actions: [
            { label: 'View reviews', onClick: action('View reviews clicked') },
            { label: 'See feedback', onClick: action('See feedback clicked') },
          ],
        },
        {
          name: 'Treatment Success Rate',
          value: 95,
          change: 1.1,
          trend: 'decrease',
          duration: 'last month',
          actions: [
            { label: 'View analysis', onClick: action('View analysis clicked') },
            { label: 'Download data', onClick: action('Download data clicked') },
          ],
        },
      ]}
    />
  ),
};
