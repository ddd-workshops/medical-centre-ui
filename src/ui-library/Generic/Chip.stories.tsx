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
      <Chip fill="OUTLINED" messageType="DEFAULT">Orthodontist</Chip>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip size="SMALL">Check-up</Chip>
      <Chip size="MEDIUM">Root Canal</Chip>
      <Chip size="LARGE">Surgery</Chip>
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Chip messageType="DEFAULT">Available</Chip>
      <Chip messageType="SUCCESS">Treatment Complete</Chip>
      <Chip messageType="WARNING">Follow-up Required</Chip>
      <Chip messageType="ALERT">Emergency</Chip>
      <Chip messageType="UPDATE">Rescheduled</Chip>
      <Chip messageType="ACCENT">Priority Patient</Chip>
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
          <Chip size="SMALL" fill="SOLID" messageType="DEFAULT">Consultation</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="SUCCESS">Treatment Done</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="WARNING">Pain Reported</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="ALERT">Urgent Care</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="UPDATE">Next Visit</Chip>
          <Chip size="SMALL" fill="SOLID" messageType="ACCENT">VIP Patient</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="SMALL" fill="OUTLINED" messageType="DEFAULT">Check-up</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="SUCCESS">Healed</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="WARNING">Follow-up</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="ALERT">Emergency</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="UPDATE">Rescheduled</Chip>
          <Chip size="SMALL" fill="OUTLINED" messageType="ACCENT">Priority</Chip>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2">
          <Chip size="MEDIUM" fill="SOLID" messageType="DEFAULT">Cleaning</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="SUCCESS">Cavity Filled</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="WARNING">X-Ray Needed</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="ALERT">Severe Pain</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="UPDATE">Treatment Plan</Chip>
          <Chip size="MEDIUM" fill="SOLID" messageType="ACCENT">Special Care</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="MEDIUM" fill="OUTLINED" messageType="DEFAULT">Whitening</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="SUCCESS">Crown Fitted</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="WARNING">Sensitivity</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="ALERT">Infection</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="UPDATE">Follow-up</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" messageType="ACCENT">Complex Case</Chip>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2">
          <Chip size="LARGE" fill="SOLID" messageType="DEFAULT">Root Canal</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="SUCCESS">Implant Done</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="WARNING">Gum Disease</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="ALERT">Tooth Loss</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="UPDATE">Major Surgery</Chip>
          <Chip size="LARGE" fill="SOLID" messageType="ACCENT">Specialist Care</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="LARGE" fill="OUTLINED" messageType="DEFAULT">Orthodontics</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="SUCCESS">Braces Off</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="WARNING">Regular Check</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="ALERT">Tooth Decay</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="UPDATE">Treatment Plan</Chip>
          <Chip size="LARGE" fill="OUTLINED" messageType="ACCENT">Dental Surgery</Chip>
        </div>
      </div>
    </div>
  )
};
