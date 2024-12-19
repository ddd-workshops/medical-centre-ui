import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'BSA/Forms/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A star rating component that allows users to rate items on a scale.'
      }
    }
  },
  argTypes: {
    scale: {
      description: 'The maximum number of stars to display',
      control: { type: 'number', min: 1, max: 10 }
    },
    value: {
      description: 'The current rating value',
      control: { type: 'number', min: 0 }
    },
    onChange: {
      description: 'Callback function called when the rating changes'
    },
    className: {
      description: 'Additional CSS classes to apply to the rating component'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
    onChange: action('rating changed')
  }
};

export const CustomScale: Story = {
  args: {
    scale: 10,
    value: 7,
    onChange: action('rating changed')
  }
};
