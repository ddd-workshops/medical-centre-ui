import { faker } from '@faker-js/faker';
import { randomFromArray } from "./utils";

import { DoctorBrief, DoctorProfile, DoctorPersonalContact } from "../contract/types";
import { createRandomUniqueIntegerIDGenerator, repeat } from "./utils";
import { generateFakeSpecialist, generateFakeSpecialties } from "./specialties";
import { generateFakeAddress } from './address';
import { generateFakeStaffI18nInfo } from './staffI18n';
import { fakeClinicDetails } from './clinics';
import { generateFakeDoctorBioAndAdditionalInformation } from './staffBio';
import { StaffType } from './staffType';
import { clinicDetailsToBrief } from '../controllers/clinicModel';
import { doctorCanonicalModelToBrief, doctorCanonicalModelToProfile } from '../controllers/staffModel';
import { DoctorCanonicalModel } from '../fake-db/db-types';

const generateID = createRandomUniqueIntegerIDGenerator({ from: 1000, to: 10000 });

export const generateFakeDoctor = (): DoctorCanonicalModel => {
  // Generate base ID to be used for both id and doctorId
  const id = generateID();

  // Generate staff member details with proper i18n support
  const staffI18n = generateFakeStaffI18nInfo();

  // Generate medical specialist info (for role and title)
  const specialist = generateFakeSpecialist(StaffType.MEDICAL);

  // Generate specialties - we need to pass code for base specialty
  const specialties = generateFakeSpecialties({ 
    min: 1, 
    max: 3, 
    baseSpecialty: 'GENERAL_DENTIST'
  });

  // Combine title and name for fullName
  const fullName = specialist.title 
    ? `${specialist.title} ${staffI18n.firstName} ${staffI18n.lastName}`
    : `${staffI18n.firstName} ${staffI18n.lastName}`;

  const locations = randomFromArray(fakeClinicDetails, {
    count: { min: 1, max: 3 },
  }).map(clinicDetailsToBrief);

  const { bio, additionalInformation } = generateFakeDoctorBioAndAdditionalInformation()

  return {
    // IDs
    id,
    doctorId: id,

    // Personal information
    firstName: staffI18n.firstName,
    lastName: staffI18n.lastName,
    fullName,

    // Professional information
    // role: specialist.name,
    title: specialist.title ?? '',
    specialties,  // Now directly using DoctorSpecialty[] instead of converting to strings
    locations,
    languagesSpoken: staffI18n.spokenLanguages,

    // Profile details
    bio,
    profilePictureUrl: `https://i.pravatar.cc/400?u=${id}`,
    registrationNumber: `GDC${faker.number.int({ min: 100000, max: 999999 })}`,
    additionalInformation,

    // Contact information
    email: faker.internet.email({ 
      firstName: staffI18n.firstName, 
      lastName: staffI18n.lastName 
    }),
    phoneNumber: `+44 ${faker.phone.number()}`,
    address: generateFakeAddress()
  };
};

export const fakeCanonicalModelDoctors = repeat(generateFakeDoctor, {
  count: { min: 50, max: 80 },
});
