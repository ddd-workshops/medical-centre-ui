import { faker } from '@faker-js/faker';

import { MedicalTreatment } from '../contract/types';
import { generateDoctorBrief } from './staff';
import { generateFakePatientBrief } from './patient';

export const generateFakeMedicalTreatment = (): MedicalTreatment => ({
  id: faker.string.uuid(),
  name: faker.lorem.words(),
  shortDescription: faker.lorem.sentence(),
  expectedDuration: {
      min: faker.number.int({ min: 1, max: 3 }),
      max: faker.number.int({ min: 3, max: 10 }),
  },
  priceRange: {
      min: faker.number.int({ min: 100, max: 500 }),
      max: faker.number.int({ min: 500, max: 2500 }),
  },
  doctorBrief:  generateDoctorBrief(),
  patientBrief: generateFakePatientBrief()
});
