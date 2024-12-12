import { faker } from '@faker-js/faker';
import type { Appointment } from '../routes/appointments';

export const generateFakeAppointments = (): Appointment[] => {
  const appointments: Appointment[] = [];
  const count = faker.number.int({ min: 5, max: 10 });
  const statuses: Appointment['status'][] = ['scheduled', 'completed', 'cancelled'];

  console.log(faker.helpers)

  for (let i = 0; i < count; i++) {
    appointments.push({
      id: faker.string.uuid(),
      patientId: faker.string.uuid(),
      doctorName: `Dr. ${faker.person.fullName()}`,
      date: faker.date.future().toISOString(),
      status: faker.helpers.arrayElement<Appointment['status']>(statuses)
    });
  }

  return appointments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};