import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ClinicDetails } from './ClinicDetails';

const meta: Meta<typeof ClinicDetails> = {
  title: 'BSA/Clinics/ClinicDetails',
  component: ClinicDetails,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ClinicDetails>;

export const Default: Story = {
  args: {
    clinic: {
      id: 1000,
      name: 'Westminster Dental Centre',
      address: {
        id: '123e4567-e89b-12d3-a456-426614174001',
        street: '123 Marylebone Road',
        city: 'London',
        district: 'Westminster',
        postalCode: 'W1H 5PL',
        country: 'United Kingdom',
      },
      phone: '+44 20 7123 4567',
      email: 'westminster@brightsmiles.com',
      clinicPhotoURL: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3',
      availableSpecialties: [
        { code: 'GENERAL_DENTISTRY', name: 'General Dentistry' },
        { code: 'ORTHODONTICS', name: 'Orthodontics' },
        { code: 'DENTAL_IMPLANTS', name: 'Dental Implants' },
        { code: 'COSMETIC_DENTISTRY', name: 'Cosmetic Dentistry' },
        { code: 'PEDIATRIC_DENTISTRY', name: 'Pediatric Dentistry' }
      ],
      description: 'Located in the heart of Westminster, our state-of-the-art dental centre combines traditional values with modern technology. Our team of specialists provides comprehensive dental care in a comfortable and welcoming environment.',
      coordinates: {
        latitude: 51.5174,
        longitude: -0.1567
      },
      facilities: [
        {
          name: 'Digital X-Ray Equipment',
          availability: true,
          description: 'Latest generation digital imaging for precise diagnostics'
        },
        {
          name: 'Emergency Care',
          availability: true,
          description: '24/7 emergency dental services available'
        },
        {
          name: 'Children\'s Play Area',
          availability: true,
          description: 'Kid-friendly zone with toys and games'
        },
        {
          name: 'Parking',
          availability: true,
          description: 'Free parking available for patients'
        },
        {
          name: 'Wheelchair Access',
          availability: true
        },
        {
          name: 'Dental Laboratory',
          availability: false,
          description: 'Currently under renovation'
        }
      ],
      openingHours: {
        MONDAY: '09:00-18:00',
        TUESDAY: '09:00-18:00',
        WEDNESDAY: '09:00-18:00',
        THURSDAY: '09:00-18:00',
        FRIDAY: '09:00-17:00',
        SATURDAY: '10:00-14:00',
        SUNDAY: 'closed'
      }
    }
  }
};
