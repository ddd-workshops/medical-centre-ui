import { faker } from '@faker-js/faker';

import { AppointmentDetails, AppointmentBrief } from '../contract/types';
import { randomFromArray, repeat } from './utils';
import { fakeClinicBriefs } from './clinics';
import { generateFakeServiceTypes } from './services';
import { generateFakeBilling } from './billings';
import { generateFakePatientBrief } from './patient';
import { fakeDoctorBriefs } from './staff';

const appointmentStatuses: AppointmentDetails['status'][] = ['SCHEDULED', 'COMPLETED', 'CANCELLED'];

export const generateFakeAppointmentDetails = (): AppointmentDetails => {
  return{
    id: faker.string.uuid(),
    patient: generateFakePatientBrief(),
    doctor: randomFromArray(fakeDoctorBriefs),
    location: randomFromArray(fakeClinicBriefs),
    serviceType: randomFromArray(generateFakeServiceTypes()),
    datetime: faker.date.future().toISOString(),
    status: randomFromArray(appointmentStatuses),
    notes: Math.random() > 0.5 ? faker.lorem.sentence() : undefined,
    prescriptions: Math.random() > 0.5 ? Array.from(
      { length: faker.number.int({ min: 1, max: 3 }) },
      () => faker.commerce.productName()
    ) : undefined,
    billing: generateFakeBilling()
  }
};

export const generateFakeAppointmentsBrief = (appointment: AppointmentDetails): AppointmentBrief => {
  return {
    id: appointment.id,
    patientName: appointment.patient.fullName,
    doctorId: appointment.doctor.id,
    doctorName: appointment.doctor.fullName,
    serviceType: appointment.serviceType.name,
    location: appointment.location.name,
    datetime: appointment.datetime,
    status: appointment.status,
  }
};

////////////////////////////////////////////////

export const fakeAppointmentDetails = repeat(
  generateFakeAppointmentDetails, {
    count: { min: 5, max: 10 },
  }
).sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime())
