
import { faker } from '@faker-js/faker';
import type { Appointment } from '../routes/appointments';

export const generateFakeAppointments = (): Appointment[] => {
  const appointments: Appointment[] = [];
  const count = faker.number.int({ min: 20, max: 40 });
  const statuses: Appointment['status'][] = ['scheduled', 'completed', 'cancelled'];

  for (let i = 0; i < count; i++) {
    appointments.push({
      id: faker.string.uuid(),
      patientId: faker.string.uuid(),
      doctorId: faker.string.uuid(),
      date: faker.date.future().toISOString(),
    //   status: faker.helpers.arrayElement(statuses)
      status: 'scheduled'
    });
  }

  return appointments;
};