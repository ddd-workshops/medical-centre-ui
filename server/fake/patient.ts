import { faker } from '@faker-js/faker';

import type { PatientBrief, PatientProfile } from '../contract/types';
import { generateFakeAddress } from './address';
import { repeat } from './utils';

export const generateFakePatientProfile = (): PatientProfile => ({
  patientId: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  address: generateFakeAddress(),
});

export const generateFakePatientBrief = (patient: PatientProfile = generateFakePatientProfile()): PatientBrief => ({
  id: patient.patientId,
  fullName: `${patient.firstName} ${patient.lastName}`,
});

////////////////////////////////////////////////

export const fakePatientProfiles = repeat(generateFakePatientProfile, {
  count: { min: 100, max: 500 },
});
export const fakePatientBriefs = fakePatientProfiles.map(generateFakePatientBrief);
