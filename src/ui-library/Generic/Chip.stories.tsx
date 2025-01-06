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
      <Chip fill="SOLID" variant="DEFAULT">Dentist</Chip>
      <Chip fill="OUTLINED" variant="DEFAULT">Orthodontist</Chip>
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
      <Chip variant="DEFAULT">Available</Chip>
      <Chip variant="SUCCESS">Treatment Complete</Chip>
      <Chip variant="WARNING">Follow-up Required</Chip>
      <Chip variant="ALERT">Emergency</Chip>
      <Chip variant="UPDATE">Rescheduled</Chip>
      <Chip variant="ACCENT">Priority Patient</Chip>
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
          <Chip size="SMALL" fill="SOLID" variant="DEFAULT">Consultation</Chip>
          <Chip size="SMALL" fill="SOLID" variant="SUCCESS">Treatment Done</Chip>
          <Chip size="SMALL" fill="SOLID" variant="WARNING">Pain Reported</Chip>
          <Chip size="SMALL" fill="SOLID" variant="ALERT">Urgent Care</Chip>
          <Chip size="SMALL" fill="SOLID" variant="UPDATE">Next Visit</Chip>
          <Chip size="SMALL" fill="SOLID" variant="ACCENT">VIP Patient</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="SMALL" fill="OUTLINED" variant="DEFAULT">Check-up</Chip>
          <Chip size="SMALL" fill="OUTLINED" variant="SUCCESS">Healed</Chip>
          <Chip size="SMALL" fill="OUTLINED" variant="WARNING">Follow-up</Chip>
          <Chip size="SMALL" fill="OUTLINED" variant="ALERT">Emergency</Chip>
          <Chip size="SMALL" fill="OUTLINED" variant="UPDATE">Rescheduled</Chip>
          <Chip size="SMALL" fill="OUTLINED" variant="ACCENT">Priority</Chip>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2">
          <Chip size="MEDIUM" fill="SOLID" variant="DEFAULT">Cleaning</Chip>
          <Chip size="MEDIUM" fill="SOLID" variant="SUCCESS">Cavity Filled</Chip>
          <Chip size="MEDIUM" fill="SOLID" variant="WARNING">X-Ray Needed</Chip>
          <Chip size="MEDIUM" fill="SOLID" variant="ALERT">Severe Pain</Chip>
          <Chip size="MEDIUM" fill="SOLID" variant="UPDATE">Treatment Plan</Chip>
          <Chip size="MEDIUM" fill="SOLID" variant="ACCENT">Special Care</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="MEDIUM" fill="OUTLINED" variant="DEFAULT">Whitening</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" variant="SUCCESS">Crown Fitted</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" variant="WARNING">Sensitivity</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" variant="ALERT">Infection</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" variant="UPDATE">Follow-up</Chip>
          <Chip size="MEDIUM" fill="OUTLINED" variant="ACCENT">Complex Case</Chip>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex gap-2">
          <Chip size="LARGE" fill="SOLID" variant="DEFAULT">Root Canal</Chip>
          <Chip size="LARGE" fill="SOLID" variant="SUCCESS">Implant Done</Chip>
          <Chip size="LARGE" fill="SOLID" variant="WARNING">Gum Disease</Chip>
          <Chip size="LARGE" fill="SOLID" variant="ALERT">Tooth Loss</Chip>
          <Chip size="LARGE" fill="SOLID" variant="UPDATE">Major Surgery</Chip>
          <Chip size="LARGE" fill="SOLID" variant="ACCENT">Specialist Care</Chip>
        </div>
        <div className="flex gap-2">
          <Chip size="LARGE" fill="OUTLINED" variant="DEFAULT">Orthodontics</Chip>
          <Chip size="LARGE" fill="OUTLINED" variant="SUCCESS">Braces Off</Chip>
          <Chip size="LARGE" fill="OUTLINED" variant="WARNING">Regular Check</Chip>
          <Chip size="LARGE" fill="OUTLINED" variant="ALERT">Tooth Decay</Chip>
          <Chip size="LARGE" fill="OUTLINED" variant="UPDATE">Treatment Plan</Chip>
          <Chip size="LARGE" fill="OUTLINED" variant="ACCENT">Dental Surgery</Chip>
        </div>
      </div>
    </div>
  )
};
