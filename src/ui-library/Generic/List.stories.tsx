import type { Meta, StoryObj } from '@storybook/react';
import { Tornado, Award, Clock } from 'lucide-react';

import { List } from './List';
import { Paragraph } from '../Typography/Paragraph';

type Treatment = string;
type Schedule = {
  time: string;
  description: string;
};
type Achievement = {
  title: string;
  description: string;
  details: string;
};

const meta = {
  title: 'UI/Molecules/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const SingleLineItems: StoryObj<typeof List<Treatment>> = {
  args: {
    bulletIcon: Tornado,
    items: [
      'Professional teeth cleaning',
      'Root canal treatment',
      'Dental crown fitting',
      'Wisdom tooth extraction',
    ],
    renderItem: (item) => (
      <Paragraph size="SMALL">{item}</Paragraph>
    ),
  },
};

export const DoubleLineItems: StoryObj<typeof List<Schedule>> = {
  args: {
    bulletIcon: Clock,
    items: [
      { time: '9:00 AM', description: 'Regular checkup' },
      { time: '10:30 AM', description: 'Dental cleaning' },
      { time: '2:00 PM', description: 'Crown preparation' },
    ],
    renderItem: (item) => (
      <div>
        <Paragraph size="SMALL" className="font-medium">{item.time}</Paragraph>
        <Paragraph size="SMALL" className="text-gray-600">{item.description}</Paragraph>
      </div>
    ),
  },
};

export const MultipleLineItems: StoryObj<typeof List<Achievement>> = {
  args: {
    bulletIcon: Award,
    items: [
      {
        title: 'Best Dental Practice 2023',
        description: 'Awarded by Dental Excellence Institute',
        details: 'Recognition for outstanding patient care and innovative treatment methods throughout the year.'
      },
      {
        title: 'Patient Choice Award',
        description: 'For exceptional patient care and service',
        details: 'Selected based on patient reviews and satisfaction scores across multiple dental care categories.'
      },
    ],
    renderItem: (item) => (
      <div>
        <Paragraph size="MEDIUM" className="font-semibold">{item.title}</Paragraph>
        <Paragraph size="SMALL" className="text-gray-600">{item.description}</Paragraph>
        <Paragraph size="SMALL" className="text-gray-500 mt-1">{item.details}</Paragraph>
      </div>
    ),
  },
};
