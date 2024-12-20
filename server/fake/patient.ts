import { faker } from '@faker-js/faker';
import type { PatientBrief, PatientProfile } from '../contract/types';
import { generateFakeAddress } from './address';

export const generateFakePatientProfile = (): PatientProfile => ({
  patientId: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  address: generateFakeAddress(),
});

export const generateFakePatientBrief = (): PatientBrief => ({
  id: faker.string.uuid(),
  fullName: faker.person.fullName(),
});
