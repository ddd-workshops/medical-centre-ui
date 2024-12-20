import { faker } from '@faker-js/faker';

import { DoctorBrief } from "../contract/types";
import { randomFromArray, repeat, screamingCaseToCapitalized } from "./utils";
import { generateSpecialization } from "./specialties";

// TODO: move that to swagger contract
import { Doctor, DaysOfWeek, Availability } from './types';
import { generateFakeAddress } from './address';

export const generateDoctorBrief = (): DoctorBrief => ({
  id: faker.string.uuid(),
  fullName: faker.person.lastName(),
  specialties: repeat(generateSpecialization, { min: 1, max: 3 }).map(screamingCaseToCapitalized),
});

const generateAvailability = (): Availability[] => {
  return Object.values(DaysOfWeek).map(day => ({
    day,
    startTime: '09:00',
    endTime: '17:00'
  }));
};

const secondaryLanguages = ['French', 'Spanish', 'Polish', 'Hindi', 'Arabic']
const generateFakeSpokenLanguages = () => ['English', ...repeat(() => randomFromArray(secondaryLanguages), { min: 0, max: 2 })]

export const generateDoctor = (): Doctor => {

  const specializations = repeat(generateSpecialization, { min: 1, max: 4 }).map(screamingCaseToCapitalized)

  
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    specialization: specializations[0],
    secondarySpecializations: specializations.slice(1),
    email: faker.internet.email(),
    phone: `+44 ` + faker.phone.number(),
    address: generateFakeAddress(),
    availability: generateAvailability(),
    yearsOfExperience: faker.number.int({ min: 1, max: 30 }),
    education: [
      `${faker.company.name()} Dental School`,
      `${faker.company.name()} University`
    ],
    languages: generateFakeSpokenLanguages(),
    bio: faker.lorem.paragraphs(2),
    imageUrl: faker.image.avatar(),
    registrationNumber: `GDC${faker.number.int({ min: 100000, max: 999999 })}`
  };
};
