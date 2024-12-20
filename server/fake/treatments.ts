import { faker } from '@faker-js/faker';

import { randomFromArray } from './utils';
import { Treatment } from '../contract/types';
import { generateDoctorBrief } from './staff';
import { generateFakePatientBrief } from './patient';

export const generateFakeTreatment = (): Treatment => ({
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

export const generate____PrescribedTreatment = (
  patientId: string,
  treatmentId?: string,
  treatment?: Treatment
) => {
  const generatedTreatment = treatment || generateFakeTreatment();
  return {
    id: faker.string.uuid(),
    treatmentId: treatmentId || generatedTreatment.id,
    patientId,
    doctorId: faker.string.uuid(),
    prescribedDate: faker.date.recent(),
    treatment: generatedTreatment,
    status: randomFromArray(['SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'] as const)
  };
};