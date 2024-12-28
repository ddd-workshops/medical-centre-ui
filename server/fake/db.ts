import { MedicalTreatment } from '../contract/types';
import { generateFakeMedicalTreatment } from './medical-treatments';
import { generateFakeNotifications } from './notifications';
import { generateFakePrescribedTreatment } from './prescribed-treatments';
import { repeat } from './utils';

export const medicalTreatments: MedicalTreatment[] = repeat(
  generateFakeMedicalTreatment,
  { count: { min: 5, max: 15 } }
);



export const fakeNotifications = generateFakeNotifications();



export const prescribedTreatments = repeat(generateFakePrescribedTreatment, {
  count: { min: 2, max: 5 }
});
