import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'BSA/Atoms/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    title: 'What dental services do you offer?',
    content: (
      <div className="prose prose-sm">
        <p>We offer a comprehensive range of dental services including:</p>
        <ul>
          <li>Regular check-ups and cleanings</li>
          <li>Cosmetic dentistry</li>
          <li>Emergency dental care</li>
          <li>Orthodontics</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'How often should I visit the dentist?',
    content: (
      <p>We recommend visiting your dentist for a check-up and cleaning at least every 6 months to maintain optimal oral health.</p>
    ),
  },
  {
    title: 'Do you accept dental insurance?',
    content: (
      <p>Yes, we accept most major dental insurance plans. Please contact our office for specific details about your coverage.</p>
    ),
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const SingleItem: Story = {
  args: {
    items: [defaultItems[0]],
  },
};

export const WithCustomStyling: Story = {
  args: {
    items: [
      {
        title: (
          <div className="flex items-center gap-2 text-green-700">
            <span className="font-semibold">Opening Hours</span>
            <span className="px-2 py-0.5 text-xs bg-green-100 rounded-full">New</span>
          </div>
        ),
        content: (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Weekdays</h4>
              <p>Monday - Friday: 8:00 - 20:00</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Weekends</h4>
              <p>Saturday: 9:00 - 16:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        ),
      },
      {
        title: (
          <div className="flex items-center gap-2 text-green-700">
            <span className="font-semibold">Emergency Contact</span>
            <span className="text-red-500">24/7</span>
          </div>
        ),
        content: (
          <div className="bg-red-50 -m-3 p-3 rounded-b-lg border-t border-red-100">
            <p className="text-red-700 font-medium mb-2">For dental emergencies:</p>
            <p className="text-red-600">Call: +1 (555) 123-4567</p>
          </div>
        ),
      },
    ],
    className: 'max-w-2xl mx-auto',
  },
};
