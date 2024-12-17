import type { Meta, StoryObj } from '@storybook/react';
import type { PatientProfile } from '../contract';
import { ProfileAvatar } from './Avatar';

const meta = {
  title: 'BSA/Molecules/ProfileAvatar',
  component: ProfileAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProfile: PatientProfile = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  phoneNumber: '123456789',
  address: {
    country: 'USA',
    city: 'New York',
    street: '123 Main St',
    postalCode: '10001',
  },
};

export const Default: Story = {
  args: {
    profile: mockProfile,
    size: 'MEDIUM',
  },
};

export const Small: Story = {
  args: {
    profile: mockProfile,
    size: 'SMALL',
  },
};

export const Large: Story = {
  args: {
    profile: mockProfile,
    size: 'LARGE',
  },
};
