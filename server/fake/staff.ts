import { faker } from '@faker-js/faker';
import { randomFromArray } from "./utils";

import { DoctorBrief, DoctorProfile, DoctorPersonalContact } from "../contract/types";
import { createRandomUniqueIntegerIDGenerator, repeat } from "./utils";
import { generateFakeSpecialist, generateFakeSpecialties, DentalSpecialty, StaffType } from "./specialties";
import { generateFakeAddress } from './address';
import { generateFakeStaffI18nInfo } from './staffI18n';
import { fakeClinicBriefs } from './clinics';
import { generateFakeDoctorBioAndAdditionalInformation } from './staffBio';

const generateID = createRandomUniqueIntegerIDGenerator({ from: 1000, to: 10000 });

type DoctorCanonicalModel = DoctorProfile & DoctorBrief & DoctorPersonalContact;

export const generateFakeDoctor = (): DoctorCanonicalModel => {
  // Generate base ID to be used for both id and doctorId
  const id = generateID();

  // Generate staff member details with proper i18n support
  const staffI18n = generateFakeStaffI18nInfo();

  // Generate medical specialist info (for role and title)
  const specialist = generateFakeSpecialist(StaffType.MEDICAL);

  // Generate specialties
  const specialties = generateFakeSpecialties({ 
    min: 1, 
    max: 3, 
    baseSpecialty: DentalSpecialty.GENERAL_DENTIST 
  });

  // Combine title and name for fullName
  const fullName = specialist.title 
    ? `${specialist.title} ${staffI18n.firstName} ${staffI18n.lastName}`
    : `${staffI18n.firstName} ${staffI18n.lastName}`;

  const locations = randomFromArray(fakeClinicBriefs, {
    count: { min: 1, max: 3 },
  });

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
    specialties: specialties.map(s => s.toString()),
    locations,
    languagesSpoken: staffI18n.spokenLanguages,

    // Profile details
    bio,
    profilePictureUrl: faker.image.avatar(),
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

export const generateFakeDoctorBrief = (doctor: DoctorCanonicalModel = generateFakeDoctor()): DoctorBrief => {
  const { id, fullName, specialties } = doctor;
  return { id, fullName, specialties };
};

export const generateFakeDoctorProfile = (doctor: DoctorCanonicalModel = generateFakeDoctor()): DoctorProfile => {
  const { doctorId, fullName, email, phoneNumber, address, ...doctorProfile } = doctor;
  return doctorProfile
};

export const generateFakeDoctorPersonalContact = (doctor: DoctorCanonicalModel = generateFakeDoctor()): DoctorPersonalContact => {
  const { doctorId, email, phoneNumber, address } = doctor;
  return { doctorId, email, phoneNumber, address };
};

////////////////////////////////////////////////

const PRIVATE_doctors = repeat(generateFakeDoctor, {
  count: { min: 50, max: 80 },
});

export const fakeDoctorBriefs = PRIVATE_doctors.map(generateFakeDoctorBrief);
export const fakeDoctorProfiles = PRIVATE_doctors.map(generateFakeDoctorProfile)

