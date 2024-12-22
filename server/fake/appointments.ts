import { faker } from '@faker-js/faker';

import { AppointmentDetails, AppointmentBrief } from '../contract/types';
import { randomFromArray } from './utils';
import { generateFakeClinicBriefs } from './clinics';
import { generateFakeServiceTypes } from './services';
import { generateFakeBilling } from './billings';
import { generateDoctorBrief } from './staff';
import { generateFakePatientBrief } from './patient';

const clinicBriefs = generateFakeClinicBriefs();

export const generateFakeAppointments = (count = 0): AppointmentDetails[] => {
  count ??= faker.number.int({ min: 5, max: 10 });
  const appointments: AppointmentDetails[] = [];
  const statuses: AppointmentDetails['status'][] = ['SCHEDULED', 'COMPLETED', 'CANCELLED'];

  for (let i = 0; i < count; i++) {
    appointments.push({
      id: faker.string.uuid(),
      patient: generateFakePatientBrief(),
      doctor: generateDoctorBrief(),
      location: randomFromArray(clinicBriefs),
      serviceType: randomFromArray(generateFakeServiceTypes()),
      datetime: faker.date.future().toISOString(),
      status: randomFromArray(statuses),
      notes: Math.random() > 0.5 ? faker.lorem.sentence() : undefined,
      prescriptions: Math.random() > 0.5 ? Array.from(
        { length: faker.number.int({ min: 1, max: 3 }) },
        () => faker.commerce.productName()
      ) : undefined,
      billing: generateFakeBilling()
    });
  }

  return appointments.sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime());
};

export const generateFakeAppointmentsBrief = (appointments: AppointmentDetails[]): AppointmentBrief[] => {
  return appointments.map(appointment => ({
    id: appointment.id,
    patientName: appointment.patient.fullName,
    doctor: appointment.doctor.fullName,
    serviceType: appointment.serviceType.name,
    location: appointment.location.name,
    datetime: appointment.datetime,
    status: appointment.status,
  }));
};
