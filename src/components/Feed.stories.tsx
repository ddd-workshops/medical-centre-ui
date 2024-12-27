import type { Meta, StoryObj } from '@storybook/react';
import { Feed } from './Feed';
import type { FeedItem } from './Feed';

const meta: Meta<typeof Feed> = {
  title: 'UI/Molecules/Feed',
  component: Feed,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Feed>;

const items: FeedItem[] = [
  {
    id: '1',
    type: 'APPOINTMENT',
    content: 'Scheduled dental cleaning appointment',
    date: new Date('2024-02-15'),
    person: 'Dr. Sarah Wilson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    comment: 'Please remember to bring your previous X-rays if you have any.'
  },
  {
    id: '2',
    type: 'DIAGNOSIS',
    content: 'Diagnosed with minor cavity in upper right molar',
    date: new Date('2024-02-10'),
    person: 'Dr. Michael Chen'
  },
  {
    id: '3',
    type: 'PRESCRIPTION',
    content: 'Prescribed fluoride treatment for enamel strengthening',
    date: new Date('2024-02-08'),
    person: 'Dr. Sarah Wilson'
  },
  {
    id: '4',
    type: 'CHECKUP',
    content: 'Completed regular dental checkup',
    date: new Date('2024-02-01'),
    person: 'Dr. James Miller'
  },
  {
    id: '5',
    type: 'REGISTRATION',
    content: 'Registered as new patient at Bright Smiles Architects',
    date: new Date('2024-01-15')
  }
];

export const Default: Story = {
  args: {
    items
  }
};

export const SimpleTimeline: Story = {
  args: {
    items,
    variant: 'simple'
  }
};

export const WithComments: Story = {
  args: {
    items,
    variant: 'withComments'
  }
};

export const StackedView: Story = {
  args: {
    items,
    variant: 'stacked'
  }
};
