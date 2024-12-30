
import type { Meta, StoryObj } from '@storybook/react';
import { http } from 'msw';

import { NotificationsList } from './NotificationsList';


const meta: Meta<typeof NotificationsList> = {
  title: 'BSA/Notifications/NotificationsList',
  component: NotificationsList,
  parameters: {
    msw: {
      handlers: [
        http.get('/api/notifications', (req, res, ctx) => {
          return res(ctx.json([
            {
              id: '1',
              title: 'Urgent: Appointment Change',
              subtitle: 'Please reschedule your appointment',
              receivedDate: new Date().toISOString(),
              read: false,
            },
            {
              id: '2',
              title: 'Test Results Ready',
              subtitle: 'Blood work results available',
              receivedDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
              read: true,
            },
            {
              id: '3',
              title: 'Insurance Update Required',
              subtitle: 'Action needed',
              receivedDate: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
              read: true,
            },
          ]));
        }),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationsList>;

export const Default: Story = {};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/notifications', (req, res, ctx) => {
          return res(ctx.json([]));
        }),
      ],
    },
  },
};