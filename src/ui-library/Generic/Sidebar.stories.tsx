import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Sidebar, SidebarScreen } from './Sidebar';
import { Paragraph } from '../Typography/Paragraph';
import { TextInput } from '../Forms/TextInput';
import { Button } from '../Generic/Button';
import { H2 } from '../Typography/Headings';

const meta = {
  title: 'UI/Layout/Sidebar',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A sliding sidebar component that can contain any content and can be closed via a button or clicking outside.'
      }
    }
  }
} satisfies Meta<typeof SidebarScreen>;

export default meta;

// SidebarScreen Stories
export const BasicSidebarScreen: StoryObj<typeof SidebarScreen> = {
  render: () => (
    <SidebarScreen isOpen={true} onClose={action('sidebar-closed')}>
      <H2 className="mb-4">Patient Details</H2>
      <Paragraph>
        View comprehensive patient information including medical history, treatment plans, and upcoming appointments.
      </Paragraph>
    </SidebarScreen>
  )
};

export const SidebarScreenWithForm: StoryObj<typeof SidebarScreen> = {
  render: () => (
    <SidebarScreen isOpen={true} onClose={action('sidebar-closed')}>
      <H2 className="mb-4">Schedule Treatment</H2>
      <form className="space-y-4">
        <TextInput
          value=''
          label="Treatment Type"
          placeholder="e.g., Root Canal, Cleaning"
          onChange={action('treatment-changed')}
        />
        <TextInput
          value=''
          label="Duration (minutes)"
          placeholder="Enter appointment duration"
          onChange={action('duration-changed')}
        />
      </form>
    </SidebarScreen>
  )
};

// Stateful Sidebar Stories
export const StatefulSidebar: StoryObj<typeof Sidebar> = {
  render: () => (
    <Sidebar
      trigger={<Button>View Medical History</Button>}
    >
      <H2 className="mb-4">Patient Medical History</H2>
      <Paragraph>
        Complete dental history including previous treatments, allergies, and medications.
      </Paragraph>
    </Sidebar>
  )
};

export const StatefulSidebarWithForm: StoryObj<typeof Sidebar> = {
  render: () => (
    <Sidebar
      trigger={<Button>Add New Patient</Button>}
    >
      <H2 className="mb-4">New Patient Registration</H2>
      <form className="space-y-4">
        <TextInput
          value=''
          label="Patient Name"
          placeholder="Enter patient's full name"
          onChange={action('patient-name-changed')}
        />
        <TextInput
          value=''
          label="Insurance Number"
          placeholder="Enter insurance number"
          onChange={action('insurance-number-changed')}
        />
      </form>
    </Sidebar>
  )
};
