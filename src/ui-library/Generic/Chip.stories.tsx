import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { X } from 'lucide-react';

import { Chip } from './Chip';
import { ChipList } from './ChipList';

const meta = {
  title: 'UI/Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Dental Hygienist',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Dental Hygienist',
  }
};

export const Fills: Story = {
  render: () => (
    <div className="flex gap-2">
      <Chip fill="SOLID" messageType="DEFAULT">Dentist</Chip>
      <Chip fill="GRADIENT" messageType="DEFAULT">Orthodontist</Chip>
      <Chip fill="OUTLINED" messageType="DEFAULT">Oral Surgeon</Chip>
    </div>
  )
};

export const MessageTypes: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Chip messageType="DEFAULT">Available Today</Chip>
      <Chip messageType="SUCCESS">Treatment Complete</Chip>
      <Chip messageType="WARNING">Follow-up Required</Chip>
      <Chip messageType="ALERT">Emergency Case</Chip>
      <Chip messageType="UPDATE">Appointment Changed</Chip>
      <Chip messageType="ACCENT">Priority Patient</Chip>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip size="SMALL">Routine Check-up</Chip>
      <Chip size="MEDIUM">Dental Cleaning</Chip>
      <Chip size="LARGE">Root Canal</Chip>
    </div>
  )
};

export const GradientMessageTypes: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Chip fill="GRADIENT" messageType="DEFAULT">General Dentistry</Chip>
      <Chip fill="GRADIENT" messageType="SUCCESS">Treatment Success</Chip>
      <Chip fill="GRADIENT" messageType="WARNING">Pain Reported</Chip>
      <Chip fill="GRADIENT" messageType="ALERT">Urgent Care</Chip>
      <Chip fill="GRADIENT" messageType="UPDATE">Schedule Updated</Chip>
    </div>
  )
};

export const Clickable: Story = {
  args: {
    children: 'Select Treatment',
    onClick: action('chip-clicked')
  }
};

export const ClickableList: Story = {
  render: () => (
    <ChipList
      items={[
        'Cleaning',
        'Whitening',
        'Filling',
        'Crown',
        'Implant'
      ]}
      icon={X}
      onClick={action('chip-clicked')}
    />
  )
};

export const Removable: Story = {
  args: {
    children: 'Whitening',
    icon: X,
    onRemove: action('chip-removed')
  }
};

export const RemovableList: Story = {
  render: () => (
    <ChipList
      items={[
        'Cleaning',
        'Whitening',
        'Filling',
        'Crown',
        'Implant'
      ]}
      icon={X}
      onRemove={action('chip-removed')}
    />
  )
};

export const AllCases: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex gap-2">
          <Chip size="SMALL" fill="SOLID" messageType="DEFAULT">Check-up</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="SUCCESS">Completed</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="WARNING">Review Needed</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="ALERT">Emergency</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="UPDATE">Rescheduled</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="ACCENT">VIP Patient</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="SMALL" fill="GRADIENT" messageType="DEFAULT">Consultation</Chip>
          <Chip size="SMALL" fill="GRADIENT" messageType="SUCCESS">Healed</Chip>
          <Chip size="SMALL" fill="GRADIENT" messageType="WARNING">Pain</Chip>
          <Chip size="SMALL" fill="GRADIENT" messageType="ALERT">Critical</Chip>
          <Chip size="SMALL" fill="GRADIENT" messageType="UPDATE">Modified</Chip>
          <Chip size="SMALL" fill="GRADIENT" messageType="ACCENT">Priority</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="SMALL" fill="OUTLINED" messageType="DEFAULT">Regular</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="SUCCESS">Treated</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="WARNING">Follow-up</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="ALERT">Urgent</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="UPDATE">Changed</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="ACCENT">Special</Chip>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2">
          <Chip size="MEDIUM" fill="SOLID" messageType="DEFAULT">Cleaning</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="SUCCESS">Fixed</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="WARNING">Check</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="ALERT">SOS</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="UPDATE">New Time</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="ACCENT">Premium</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="MEDIUM" fill="GRADIENT" messageType="DEFAULT">Scaling</Chip>
          <Chip size="MEDIUM" fill="GRADIENT" messageType="SUCCESS">Healthy</Chip>
          <Chip size="MEDIUM" fill="GRADIENT" messageType="WARNING">Monitor</Chip>
          <Chip size="MEDIUM" fill="GRADIENT" messageType="ALERT">Severe</Chip>
          <Chip size="MEDIUM" fill="GRADIENT" messageType="UPDATE">Moved</Chip>
          <Chip size="MEDIUM" fill="GRADIENT" messageType="ACCENT">Important</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="MEDIUM" fill="OUTLINED" messageType="DEFAULT">X-Ray</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="SUCCESS">Done</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="WARNING">Review</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="ALERT">Critical</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="UPDATE">Shifted</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="ACCENT">Priority</Chip>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2">
          <Chip size="LARGE" fill="SOLID" messageType="DEFAULT">Root Canal</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="SUCCESS">Complete</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="WARNING">Observe</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="ALERT">Urgent</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="UPDATE">Changed</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="ACCENT">VIP</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="LARGE" fill="GRADIENT" messageType="DEFAULT">Implant</Chip>
          <Chip size="LARGE" fill="GRADIENT" messageType="SUCCESS">Success</Chip>
          <Chip size="LARGE" fill="GRADIENT" messageType="WARNING">Check</Chip>
          <Chip size="LARGE" fill="GRADIENT" messageType="ALERT">Emergency</Chip>
          <Chip size="LARGE" fill="GRADIENT" messageType="UPDATE">Updated</Chip>
          <Chip size="LARGE" fill="GRADIENT" messageType="ACCENT">Special</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="LARGE" fill="OUTLINED" messageType="DEFAULT">Crown</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="SUCCESS">Finished</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="WARNING">Monitor</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="ALERT">Critical</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="UPDATE">Moved</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="ACCENT">Priority</Chip>
        </div>
      </div>
    </div>
  )
};
