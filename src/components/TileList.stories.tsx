import type { Meta, StoryObj } from '@storybook/react';
import { TileList } from './TileList';
import { BrowserRouter } from 'react-router-dom';
import { MessageVariant } from './MessageVariant/MessageVariant';

const meta = {
  title: 'BSA/Molecules/TileList',
  component: TileList,
  decorators: [(Story) => (
    <BrowserRouter>
      <div className="max-w-3xl">
        <Story />
      </div>
    </BrowserRouter>
  )],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TileList>;

export default meta;
type Story = StoryObj<typeof TileList>;

export const TreatmentsList: Story = {
  args: {
    items: [
      {
        title: 'Root Canal Treatment',
        description: 'Advanced procedure to treat severely damaged or infected tooth pulp',
        link: '/treatments/root-canal',
        variant: MessageVariant.WARNING
      },
      {
        title: 'Dental Implants',
        description: 'Permanent solution for missing teeth with titanium posts',
        link: '/treatments/implants',
        variant: MessageVariant.SUCCESS
      },
      {
        title: 'Teeth Whitening',
        description: 'Professional teeth whitening for a brighter, more confident smile',
        link: '/treatments/whitening',
        variant: MessageVariant.INFO
      }
    ]
  }
};

export const DoctorSpecialties: Story = {
  args: {
    variant: MessageVariant.INFO,
    items: [
      {
        title: 'Orthodontics',
        description: 'Specialized treatment of teeth and jaw alignment irregularities',
        link: '/specialties/orthodontics'
      },
      {
        title: 'Periodontics',
        description: 'Treatment of gum diseases and soft tissue management',
        link: '/specialties/periodontics'
      },
      {
        title: 'Endodontics',
        description: 'Root canal treatments and procedures involving tooth pulp',
        link: '/specialties/endodontics'
      }
    ]
  }
};

export const ServicesWithoutLinks: Story = {
  args: {
    variant: MessageVariant.UPDATE,
    items: [
      {
        title: 'Emergency Dental Care',
        description: 'Available 24/7 for urgent dental emergencies',
      },
      {
        title: 'Dental Insurance',
        description: 'We accept most major dental insurance plans',
      },
      {
        title: 'Family Dentistry',
        description: 'Comprehensive dental care for the whole family',
      }
    ]
  }
};

export const Alerts: Story = {
  args: {
    variant: MessageVariant.ALERT,
    items: [
      {
        title: 'Clinic Closure Notice',
        description: 'Our clinic will be closed for maintenance this weekend',
      },
      {
        title: 'COVID-19 Protocols',
        description: 'Updated safety measures in place for all visits',
      }
    ]
  }
};

export const MixedServices: Story = {
  args: {
    items: [
      {
        title: 'Clinic Closure Notice',
        description: 'Our clinic will be closed for maintenance this weekend',
        variant: MessageVariant.ALERT
      },
      {
        title: 'New Treatment Available',
        description: 'Introducing advanced laser teeth whitening',
        variant: MessageVariant.UPDATE
      },
      {
        title: 'Holiday Schedule',
        description: 'Check our special holiday working hours',
        // no variant - will default to INFO
      }
    ]
  }
};

export const AllVariants: Story = {
  args: {
    items: [
      {
        title: 'General Dental Check-up',
        description: 'Regular dental examination and cleaning service',
        link: '/services/checkup',
        variant: MessageVariant.INFO
      },
      {
        title: 'Treatment Completed',
        description: 'Your dental implant procedure has been successfully completed',
        link: '/treatments/completed',
        variant: MessageVariant.SUCCESS
      },
      {
        title: 'Follow-up Required',
        description: 'Please schedule a follow-up visit for your root canal treatment',
        link: '/appointments/schedule',
        variant: MessageVariant.WARNING
      },
      {
        title: 'Emergency Notice',
        description: 'Immediate attention needed for tooth infection cases',
        link: '/emergency',
        variant: MessageVariant.ALERT
      },
      {
        title: 'New Service Available',
        description: 'Introducing advanced cosmetic dentistry procedures',
        link: '/services/cosmetic',
        variant: MessageVariant.UPDATE
      }
    ]
  }
};
