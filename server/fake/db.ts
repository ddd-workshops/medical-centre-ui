import { MedicalTreatment } from '../contract/types';
import { generateFakeMedicalTreatment } from './medical-treatments';
import { generateFakeNotifications } from './notifications';
import { generateFakePatientProfile } from './patient';
import { generateFakePrescribedTreatment } from './prescribed-treatments';
import { repeat } from './utils';

export const medicalTreatments: MedicalTreatment[] = 
  repeat(
    generateFakeMedicalTreatment,
    { min: 5, max: 15 }
  );

export const notifications = generateFakeNotifications();

export const patientProfile = generateFakePatientProfile();
export const patientBrief = {
  id: patientProfile.patientId,
  fullName: `${patientProfile.firstName} ${patientProfile.lastName}`,
}

export const prescribedTreatments = repeat(() => generateFakePrescribedTreatment(), { min: 2, max: 5 });
