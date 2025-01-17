import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { User } from 'lucide-react';
import { TileChooser } from './TileChooser';

const meta: Meta<typeof TileChooser> = {
  title: 'UI/Molecules/TileChooser',
  component: TileChooser,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof TileChooser>;

const sampleItems = [
  { id: 1, name: 'Dr. Sarah Johnson', specialties: 'General Dentist' },
  { id: 2, name: 'Dr. Michael Chen', specialties: 'Orthodontist' },
  { id: 3, name: 'Dr. Emily Williams', specialties: 'Implant Specialist' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    selectedItem: null,
    onSelect: action('onSelect'),
    title: 'Select Doctor',
    renderItem: (item) => (
      <>
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-emerald-600" />
          <span className="font-semibold">{item.name}</span>
        </div>
        <p className="text-gray-500">{item.specialties}</p>
      </>
    ),
  },
};

export const WithSelection: Story = {
  args: {
    ...Default.args,
    selectedItem: sampleItems[1],
  },
};
