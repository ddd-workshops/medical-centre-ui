import { faker } from '@faker-js/faker';
import type { Appointment } from '../routes/appointments';

const randomFromArray = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const generateFakeAppointments = (): Appointment[] => {
  const appointments: Appointment[] = [];
  const count = faker.number.int({ min: 5, max: 10 });
  const statuses: Appointment['status'][] = ['SCHEDULED', 'COMPLETED', 'CANCELLED'];
  const specialties = ['Dentist', 'Orthodontist', 'Oral Surgeon'];

  for (let i = 0; i < count; i++) {
    appointments.push({
      id: faker.string.uuid(),
      patientId: faker.string.uuid(),
      patientName: faker.person.fullName(),
      doctor: {
        id: faker.string.uuid(),
        name: `Dr. ${faker.person.fullName()}`,
        specialty: randomFromArray(specialties)
      },
      date: faker.date.future().toISOString(),
      status: randomFromArray(statuses),
      notes: Math.random() > 0.5 ? faker.lorem.sentence() : undefined,
      medicalNotes: Math.random() > 0.5 ? faker.lorem.paragraph() : undefined,
      prescriptions: Math.random() > 0.5 ? Array.from(
        { length: faker.number.int({ min: 1, max: 3 }) },
        () => faker.commerce.productName()
      ) : undefined,
      billing: {
        amount: parseFloat(faker.commerce.price()),
        status: randomFromArray(['PENDING', 'PAID', 'CANCELLED'])
      }
    });
  }

  return appointments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export type Notification = {
  id: string;
  title: string;
  subtitle: string;
  receivedDate: string;
  read: boolean;
  content: string;
};

export const generateFakeNotifications = (): Notification[] => {
  const notifications: Notification[] = [];
  const count = faker.number.int({ min: 5, max: 10 });
  const unreadCount = faker.number.int({ min: 2, max: 3 });

  const medicalTitles = [
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

  for (let i = 0; i < count; i++) {
    notifications.push({
      id: faker.string.uuid(),
      title: randomFromArray(medicalTitles),
      subtitle: faker.word.words({ count: { min: 3, max: 6 } }),
      receivedDate: faker.date.recent({ days: 90 }).toISOString(),
      read: i >= unreadCount,
      content: faker.lorem.paragraph(),
    });
  }

  return notifications.sort((a, b) => 
    new Date(b.receivedDate).getTime() - new Date(a.receivedDate).getTime()
  );
};