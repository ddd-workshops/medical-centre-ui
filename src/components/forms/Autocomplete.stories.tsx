import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Autocomplete } from './Autocomplete';
import { TextInput } from './TextInput';

const meta: Meta<typeof Autocomplete> = {
  title: 'BSA/Forms/Autocomplete',
  component: Autocomplete
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const options = [
  { id: '1', label: 'Dr. John Doe' },
  { id: '2', label: 'Dr. Jane Smith' },
  { id: '3', label: 'Dr. Emily Johnson' },
  { id: '4', label: 'Dr. Michael Brown' },
  { id: '5', label: 'Dr. Sarah Davis' },
  { id: '6', label: 'Dr. David Wilson' }
];

export const Default: Story = {
  args: {
    options,
    renderInput: ({ value, onChange }) => (
      <TextInput
        value={value}
        onChange={onChange}
        placeholder="Search for a doctor..."
      />
    ),
    onSelect: action('Option selected'),
    maxItems: 5
  }
};
