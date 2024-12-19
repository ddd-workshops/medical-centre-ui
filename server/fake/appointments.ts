import { faker } from '@faker-js/faker';

import { Appointment } from '../contract/types';
import { randomFromArray } from './utils';

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

