import { faker } from '@faker-js/faker';

import { randomFromArray } from './utils';
import { generateDoctorBrief } from './staff';
import { generateFakePatientBrief } from './patient';
import { generateFakeMedicalTreatment } from './medical-treatments';
import { generateFakeAppointments, generateFakeAppointmentsBrief } from './appointments';
import type { PrescribedTreatment } from '../contract/types';

export const generateFakePrescribedTreatment = (): PrescribedTreatment => {
  const treatment = generateFakeMedicalTreatment();
  const doctor = generateDoctorBrief();
  const patient = generateFakePatientBrief();

  return {
    id: faker.string.uuid(),
    prescribedDate: faker.date.recent().toISOString(),
    description: faker.lorem.paragraph(),
    patient,
    doctor,
    treatment,
    appointments: generateFakeAppointmentsBrief(generateFakeAppointments(3)),
    status: randomFromArray(['SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'] as const),
  };
};