import { faker } from '@faker-js/faker';

import type { PrescribedTreatment } from '../contract/types';
import { randomFromArray, repeat } from './utils';
import { inMemoryDB } from '../in-memory/db';
import { doctorCanonicalModelToBrief } from '../controllers/staffModel';

import { fakePatientBriefs } from './patient';
import { generateFakeMedicalTreatment } from './medical-treatments';
import { generateFakeAppointmentDetails, generateFakeAppointmentsBrief } from './appointments';

export const generateFakePrescribedTreatment = (): PrescribedTreatment => {
  

  const doctor = doctorCanonicalModelToBrief(randomFromArray(inMemoryDB.doctors))
  const treatment = generateFakeMedicalTreatment();
  const patient = randomFromArray(fakePatientBriefs);

  return {
    id: faker.string.uuid(),
    prescribedDate: faker.date.recent().toISOString(),
    description: faker.lorem.paragraph(),
    patient,
    doctor,
    treatment,
    appointments: repeat(generateFakeAppointmentDetails, {
      count: 3
    }).map(generateFakeAppointmentsBrief),
    status: randomFromArray(['SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'] as const),
  };
};

export const fakePrescribedTreatments = repeat(generateFakePrescribedTreatment, {
  count: { min: 2, max: 5 }
});
