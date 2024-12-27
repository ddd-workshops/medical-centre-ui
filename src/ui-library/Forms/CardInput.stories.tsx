import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CardInput } from './CardInput';

const meta: Meta<typeof CardInput> = {
  title: 'UI/Forms/CardInput',
  component: CardInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardInput>;

export const Empty: Story = {
  args: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    onChange: action('onChange'),
  },
};

export const FilledPayment: Story = {
  args: {
    cardNumber: '4111 1111 1111 1111',
    expiryDate: '12/25',
    cvv: '123',
    onChange: action('onChange'),
  },
};

export const WithinPaymentForm: Story = {
  render: () => (
    <div className="w-96 p-6 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Payment for Dental Check-up</h3>
      <CardInput
        cardNumber=""
        expiryDate=""
        cvv=""
        onChange={action('onChange')}
      />
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
        Pay $75.00
      </button>
    </div>
  ),
};

export const SeparateLayout: Story = {
  args: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    onChange: action('onChange'),
    layout: 'SEPARATE'
  },
};

export const StackedLayout: Story = {
  args: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    onChange: action('onChange'),
    layout: 'STACKED'
  },
};
