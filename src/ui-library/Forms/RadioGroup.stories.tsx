import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Forms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const simpleOptions = [
  { 
    id: 'vertical-cleaning', 
    label: 'Regular Cleaning', 
    value: 'CLEANING',
    description: 'Professional cleaning to maintain oral hygiene'
  },
  { 
    id: 'vertical-whitening', 
    label: 'Teeth Whitening', 
    value: 'WHITENING',
    description: 'Advanced whitening for a brighter smile'
  },
  { 
    id: 'vertical-root-canal', 
    label: 'Root Canal Treatment', 
    value: 'ROOT_CANAL',
    description: 'Complete treatment for infected tooth pulp'
  },
];

const horizontalOptions = [
  { 
    id: 'horizontal-cleaning', 
    label: 'Regular Cleaning', 
    value: 'CLEANING',
    description: 'Professional cleaning to maintain oral hygiene'
  },
  { 
    id: 'horizontal-whitening', 
    label: 'Teeth Whitening', 
    value: 'WHITENING',
    description: 'Advanced whitening for a brighter smile'
  },
  { 
    id: 'horizontal-root-canal', 
    label: 'Root Canal Treatment', 
    value: 'ROOT_CANAL',
    description: 'Complete treatment for infected tooth pulp'
  },
];

const treatmentOptions = [
  {
    id: 'table-basic',
    label: 'Basic Treatment',
    value: 'BASIC',
    description: (
      <>
        Essential dental care package
        <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
          <li>Regular cleaning</li>
          <li>Basic check-up</li>
          <li>X-rays when needed</li>
        </ul>
      </>
    )
  },
  {
    id: 'table-standard',
    label: 'Standard Treatment',
    value: 'STANDARD',
    description: (
      <>
        Complete dental care solution
        <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
          <li>Everything in Basic</li>
          <li>Deep cleaning</li>
          <li>Cavity fillings</li>
          <li>Emergency visits</li>
        </ul>
      </>
    )
  },
  {
    id: 'table-premium',
    label: 'Premium Treatment',
    value: 'PREMIUM',
    description: (
      <>
        Comprehensive dental care with cosmetic services
        <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
          <li>Everything in Standard</li>
          <li>Teeth whitening</li>
          <li>Cosmetic procedures</li>
          <li>Priority scheduling</li>
        </ul>
      </>
    )
  }
];

const tableOptions = [
  {
    id: 'table-cleaning',
    label: 'Regular Cleaning',
    value: 'CLEANING',
    description: [
      'Professional teeth cleaning',
      '30 minutes',
      '$75'
    ]
  },
  {
    id: 'table-whitening',
    label: 'Teeth Whitening',
    value: 'WHITENING',
    description: [
      'Professional whitening treatment',
      '60 minutes',
      '$200'
    ]
  },
  {
    id: 'table-root-canal',
    label: 'Root Canal',
    value: 'ROOT_CANAL',
    description: [
      'Complete root canal procedure',
      '90 minutes',
      '$800'
    ]
  }
];

const extendedTableOptions = [
  {
    id: 'extended-cleaning',
    label: 'Regular Cleaning',
    value: 'CLEANING',
    description: [
      'Professional teeth cleaning',
      '30 minutes',
      'Dr. Sarah Wilson',
      'Every 6 months',
      '$75'
    ]
  },
  {
    id: 'extended-whitening',
    label: 'Teeth Whitening',
    value: 'WHITENING',
    description: [
      'Professional whitening treatment',
      '60 minutes',
      'Dr. Michael Chen',
      'Once a year',
      '$200'
    ]
  },
  {
    id: 'extended-root-canal',
    label: 'Root Canal',
    value: 'ROOT_CANAL',
    description: [
      'Complete root canal procedure',
      '90 minutes',
      'Dr. James Miller',
      'As needed',
      '$800'
    ]
  }
];

export const Vertical: Story = {
  args: {
    header: 'Select Treatment Type',
    options: simpleOptions,
    value: '',
    onChange: action('onChange'),
  },
};

export const VerticalWithSelection: Story = {
  args: {
    header: 'Select Treatment Type (With Selection)',
    options: simpleOptions,
    value: 'WHITENING',
    onChange: action('onChange'),
  },
};

export const Horizontal: Story = {
  args: {
    header: 'Select Treatment Type (Horizontal)',
    options: horizontalOptions,
    layout: 'HORIZONTAL',
    value: '',
    onChange: action('onChange'),
  },
};

export const HorizontalWithSelection: Story = {
  args: {
    header: 'Select Treatment Type (Horizontal with Selection)',
    options: horizontalOptions,
    layout: 'HORIZONTAL',
    value: 'WHITENING',
    onChange: action('onChange'),
  },
};

export const PanelView: Story = {
  args: {
    header: 'Select Treatment Plan',
    options: treatmentOptions,
    value: 'STANDARD',
    onChange: action('onChange'),
    layout: 'PANEL'
  }
};

export const TableView: Story = {
  args: {
    header: 'Select Service',
    options: tableOptions,
    value: 'CLEANING',
    onChange: action('onChange'),
    layout: 'TABLE'
  }
};

export const ExtendedTableView: Story = {
  args: {
    header: 'Select Service (Detailed View)',
    options: extendedTableOptions,
    value: 'CLEANING',
    onChange: action('onChange'),
    layout: 'TABLE'
  }
};
