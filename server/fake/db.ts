import { generateFakeNotifications } from './notifications';
import { generateFakePatientProfile } from './patient';

export const notifications = generateFakeNotifications();

export const patient = generateFakePatientProfile();
export const patientBrief = {
    id: patient.patientId,
    fullName: `${patient.firstName} ${patient.lastName}`,
}
