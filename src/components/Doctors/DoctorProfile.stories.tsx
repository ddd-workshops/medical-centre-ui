import type { Meta, StoryObj } from '@storybook/react';
import { DoctorProfile } from './DoctorProfile';

const meta: Meta<typeof DoctorProfile> = {
  title: 'BSA/Doctors/DoctorProfile',
  component: DoctorProfile,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DoctorProfile>;

export const Default: Story = {
  args: {
    doctor: {
      id: 12345,
      registrationNumber: 'GDC-123456',
      firstName: 'Sarah',
      lastName: 'Williams',
      title: 'Doctor',
      specialties: [
        { code: 'ORTHODONTICS', name: 'Orthodontics' },
        { code: 'PEDIATRIC_DENTISTRY', name: 'Pediatric Dentistry' }
      ],
      locations: [
        {
          id: 1001,
          name: 'Westminster Dental Centre',
          address: '123 Marylebone Road, Westminster, London W1H 5PL',
        },
        {
          id: 1002,
          name: 'Kensington Smile Clinic',
          address: '45 High Street Kensington, London W8 5ED',
        },
      ],
      languagesSpoken: ['English', 'Spanish', 'French'],
      bio: 'Dr. Sarah Williams has been practicing dentistry for over 15 years, specializing in orthodontics and pediatric dentistry. She is passionate about providing comprehensive dental care to patients of all ages.',
      profilePictureUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3',
      additionalInformation: [
        {
          heading: 'Education',
          text: 'DDS - Harvard School of Dental Medicine (2005-2009)\nMSc in Orthodontics - University of California (2009-2011)\nPost-graduate Research in Pediatric Dentistry - Boston Children\'s Hospital (2011-2012)\nAdvanced Course in Dental Implants - New York University (2013)',
        },
        {
          heading: 'Certifications',
          text: 'Board Certified Orthodontist by the American Board of Orthodontics\nCertified Elite Invisalign Provider with over 1000 cases treated\nPediatric Dentistry Specialist certified by the American Academy of Pediatric Dentistry\nAdvanced Life Support (ALS) Certification\nDental Sedation and Pain Management Certification',
        },
        {
          heading: 'Professional Memberships',
          text: 'Fellow of the American Dental Association (ADA)\nActive Member of the American Association of Orthodontists (AAO)\nMember of the International Association of Pediatric Dentistry (IAPD)\nBoard Member of the New York Society of Orthodontists\nContributing Member of the World Federation of Orthodontists (WFO)',
        },
        {
          heading: 'Research & Publications',
          text: 'Author of "Modern Approaches in Pediatric Orthodontics" (Dental Journal, 2019)\nCo-author of "Patient Experience in Orthodontic Treatment" (2020)\nLead researcher in "Early Intervention Techniques in Orthodontics" study\nRegular contributor to the Journal of Clinical Orthodontics',
        },
      ],
    },
  },
};

export const MinimalInfo: Story = {
  args: {
    doctor: {
      id: 12346,
      registrationNumber: 'GDC-234567',
      firstName: 'John',
      lastName: 'Smith',
      title: 'Doctor',
      specialties: [
        { code: 'GENERAL_DENTISTRY', name: 'General Dentistry' }
      ],
      locations: [
        {
          id: 1003,
          name: 'Camden Dental Practice',
          address: '78 Camden High Street, London NW1 0LT',
        },
      ],
      languagesSpoken: ['English'],
      profilePictureUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3',
    },
  },
};
