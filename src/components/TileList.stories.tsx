import type { Meta, StoryObj } from '@storybook/react';
import { TileList } from './TileList';
import { BrowserRouter } from 'react-router-dom';
import { MessageType } from '../ui-library/DesignEnums/MessageType';

const meta = {
  title: 'UI/Molecules/TileList',
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
        messageType: MessageType.WARNING
      },
      {
        title: 'Dental Implants',
        description: 'Permanent solution for missing teeth with titanium posts',
        link: '/treatments/implants',
        messageType: MessageType.SUCCESS
      },
      {
        title: 'Teeth Whitening',
        description: 'Professional teeth whitening for a brighter, more confident smile',
        link: '/treatments/whitening',
        messageType: MessageType.INFO
      }
    ]
  }
};

export const DoctorSpecialties: Story = {
  args: {
    items: [
      {
        title: 'Orthodontics',
        description: 'Specialized treatment of teeth and jaw alignment irregularities',
        link: '/specialties/orthodontics',
        messageType: MessageType.INFO
      },
      {
        title: 'Periodontics',
        description: 'Treatment of gum diseases and soft tissue management',
        link: '/specialties/periodontics',
        messageType: MessageType.INFO
      },
      {
        title: 'Endodontics',
        description: 'Root canal treatments and procedures involving tooth pulp',
        link: '/specialties/endodontics',
        messageType: MessageType.INFO
      }
    ]
  }
};

export const ServicesWithoutLinks: Story = {
  args: {
    items: [
      {
        title: 'Emergency Dental Care',
        description: 'Available 24/7 for urgent dental emergencies',
        messageType: MessageType.UPDATE
      },
      {
        title: 'Dental Insurance',
        description: 'We accept most major dental insurance plans',
        messageType: MessageType.UPDATE
      },
      {
        title: 'Family Dentistry',
        description: 'Comprehensive dental care for the whole family',
        messageType: MessageType.UPDATE
      }
    ]
  }
};

export const Alerts: Story = {
  args: {
    items: [
      {
        title: 'Clinic Closure Notice',
        description: 'Our clinic will be closed for maintenance this weekend',
        messageType: MessageType.ALERT
      },
      {
        title: 'COVID-19 Protocols',
        description: 'Updated safety measures in place for all visits',
        messageType: MessageType.ALERT
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
        messageType: MessageType.ALERT
      },
      {
        title: 'New Treatment Available',
        description: 'Introducing advanced laser teeth whitening',
        messageType: MessageType.UPDATE
      },
      {
        title: 'Holiday Schedule',
        description: 'Check our special holiday working hours',
        messageType: MessageType.INFO
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
        messageType: MessageType.INFO
      },
      {
        title: 'Treatment Completed',
        description: 'Your dental implant procedure has been successfully completed',
        link: '/treatments/completed',
        messageType: MessageType.SUCCESS
      },
      {
        title: 'Follow-up Required',
        description: 'Please schedule a follow-up visit for your root canal treatment',
        link: '/appointments/schedule',
        messageType: MessageType.WARNING
      },
      {
        title: 'Emergency Notice',
        description: 'Immediate attention needed for tooth infection cases',
        link: '/emergency',
        messageType: MessageType.ALERT
      },
      {
        title: 'New Service Available',
        description: 'Introducing advanced cosmetic dentistry procedures',
        link: '/services/cosmetic',
        messageType: MessageType.UPDATE
      }
    ]
  }
};
