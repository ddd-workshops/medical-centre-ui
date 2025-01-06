import { faker } from '@faker-js/faker';

import { AppointmentDetails, AppointmentBrief } from '../contract/types';
import { randomFromArray, repeat } from './utils';

import { fakeClinicDetails } from './clinics';
import { fakeServiceTypes } from './services';
import { generateFakeBilling } from './billings';
import { generateFakePatientBrief } from './patient';
import { generateFakePrescriptions } from './appointmentPrescriptions';
import { generateFakeAppointmentNotes } from './appointmentNotes';
import { clinicDetailsToBrief } from '../controllers/clinicModel';
import { fakeCanonicalModelDoctors } from './staff';
import { doctorCanonicalModelToBrief } from '../controllers/staffModel';

const appointmentStatuses: AppointmentDetails['status'][] = ['SCHEDULED', 'COMPLETED', 'CANCELLED'];

const notesThresholds = [
  { prescriptions: 1, probability: 0.1 },
  { prescriptions: 2, probability: 0.5 },
  { prescriptions: 3, probability: 0.9 }
];

export const generateFakeAppointmentDetails = (): AppointmentDetails => {
  // Generate prescriptions first
  const prescriptions = generateFakePrescriptions() || [];
  
  // Generate notes based on prescription count
  const notesProbability = 
    notesThresholds.find(t => prescriptions.length === t.prescriptions)?.probability ?? 0;

  const notes = Math.random() < notesProbability ? generateFakeAppointmentNotes() : undefined;

  const status = randomFromArray(appointmentStatuses);
  
  // Generate billing with consistent status
  const billing = generateFakeBilling(
    status === 'CANCELLED' 
      ? 'CANCELLED'
      : randomFromArray(['PENDING', 'PAID'] as const)
  );

  const doctor = doctorCanonicalModelToBrief(randomFromArray(fakeCanonicalModelDoctors));

  return {
    id: faker.string.uuid(),
    patient: generateFakePatientBrief(),
    doctor,
    location: clinicDetailsToBrief(randomFromArray(fakeClinicDetails)),
    serviceType: randomFromArray(fakeServiceTypes),
    datetime: faker.date.future().toISOString(),
    status,
    prescriptions,
    notes,
    billing,
  };
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
