import { faker } from '@faker-js/faker';
import { Notification } from '../contract/types';
import { v4 as uuid } from 'uuid';
import { randomFromArray } from './utils';

const predefinedNotifications: Omit<Notification, 'id' | 'receivedDate'>[] = [
  {
    title: "Urgent: Appointment Change Required",
    subtitle: "Please reschedule your appointment",
    content: "Due to an emergency, we need to reschedule your appointment scheduled for tomorrow. Please contact us to arrange a new time.",
    read: false
  },
  {
    title: "New Test Results Available",
    subtitle: "Blood work results ready",
    content: "Your recent blood work results are now available. Please log in to view them or discuss with your doctor during next visit.",
    read: false
  },
  {
    title: "Prescription Renewal",
    subtitle: "Action required",
    content: "Your prescription will expire in 7 days. Please schedule an appointment for renewal if needed.",
    read: false
  }
];

const medicalNotificationTitles = [
  'Lab Results Available',
  'Appointment Reminder',
  'Prescription Refill',
  'Vaccination Due',
  'Medical Record Update',
  'Doctor\'s Note Ready',
  'Follow-up Required',
  'Test Results Ready',
  'Medical Advisory',
  'Health Check Reminder'
];

export const generateFakeNotifications = (): Notification[] => {
  const notifications: Notification[] = [];
  
  // Add predefined notifications with random dates
  predefinedNotifications.forEach(notification => {
    notifications.push({
      ...notification,
      id: uuid(),
      receivedDate: faker.date.recent({ days: 30 }).toISOString()
    });
  });

  // Add random notifications
  const additionalCount = faker.number.int({ min: 3, max: 7 });
  
  for (let i = 0; i < additionalCount; i++) {
    notifications.push({
      id: uuid(),
      title: randomFromArray(medicalNotificationTitles),
      subtitle: faker.word.words({ count: { min: 3, max: 6 } }),
      receivedDate: faker.date.recent({ days: 90 }).toISOString(),
      read: faker.datatype.boolean(),
      content: faker.lorem.paragraph(),
    });
  }

  // Sort by date, most recent first
  return notifications.sort((a, b) => 
    new Date(b.receivedDate).getTime() - new Date(a.receivedDate).getTime()
  );
};