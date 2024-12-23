import { faker } from '@faker-js/faker';
import { randomFromArray } from './utils';
import { MedicalTreatment } from '../contract/types';
import { generateDoctorBrief } from './staff';
import { generateFakePatientBrief } from './patient';

const DENTAL_TREATMENTS = [
  'Dental Cleaning & Check-up',
  'Root Canal Treatment',
  'Dental Crown Installation',
  'Tooth Extraction',
  'Dental Implant Surgery',
  'Teeth Whitening',
  'Dental Filling',
  'Dental Bridge Installation',
  'Wisdom Tooth Removal',
  'Periodontal Treatment',
  'Dental Veneer Application',
  'Orthodontic Consultation',
  'Dental Sealant Application',
  'Gum Disease Treatment',
  'Emergency Dental Care'
];

export const generateFakeMedicalTreatment = (): MedicalTreatment => ({
  id: faker.string.uuid(),
  name: randomFromArray(DENTAL_TREATMENTS),
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
