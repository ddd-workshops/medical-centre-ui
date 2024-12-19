import { faker } from '@faker-js/faker';

import { AppointmentDetails } from '../contract/types';
import { randomFromArray } from './utils';
import { generateClinicBriefs } from './clinics';
import { generateServiceTypes } from './services';

export const generateFakeAppointments = (): AppointmentDetails[] => {
  const appointments: AppointmentDetails[] = [];
  const count = faker.number.int({ min: 5, max: 10 });
  const statuses: AppointmentDetails['status'][] = ['SCHEDULED', 'COMPLETED', 'CANCELLED'];
  const specialties = ['Dentist', 'Orthodontist', 'Oral Surgeon'];

  for (let i = 0; i < count; i++) {
    appointments.push({
      id: faker.string.uuid(),
      patient: {
        id: faker.string.uuid(),
        fullName: faker.person.fullName(),
      },
      doctor: {
        id: faker.string.uuid(),
        fullName: `Dr. ${faker.person.fullName()}`,
        specialties: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => randomFromArray(specialties))
      },
      location: randomFromArray(generateClinicBriefs()),
      serviceType: randomFromArray(generateServiceTypes()),
      datetime: faker.date.future().toISOString(),
      status: randomFromArray(statuses),
      notes: Math.random() > 0.5 ? faker.lorem.sentence() : undefined,
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

  return appointments.sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime());
};

