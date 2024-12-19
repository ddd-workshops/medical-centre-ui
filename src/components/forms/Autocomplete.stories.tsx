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
  { id: '1', label: 'JavaScript' },
  { id: '2', label: 'TypeScript' },
  { id: '3', label: 'Python' },
  { id: '4', label: 'Java' },
  { id: '5', label: 'C++' },
  { id: '6', label: 'Ruby' }
];

export const Default: Story = {
  args: {
    options,
    renderInput: ({ value, onChange }) => (
      <TextInput
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
    ),
    onSelect: action('Option selected'),
    maxItems: 5
  }
};
