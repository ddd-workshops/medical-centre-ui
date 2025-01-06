import { DoctorBrief, DoctorPersonalContact, DoctorProfile } from "../contract/types";
import { DoctorCanonicalModel } from "../fake-db/db-types";

export const doctorCanonicalModelToBrief = (doctor: DoctorCanonicalModel): DoctorBrief => {
  const { id, fullName, specialties } = doctor;
  return { 
    id, 
    fullName, 
    specialties
  };
};

export const doctorCanonicalModelToProfile = (doctor: DoctorCanonicalModel): DoctorProfile => {
  const { doctorId, fullName, email, phoneNumber, address, ...doctorProfile } = doctor;
  return doctorProfile
};

export const doctorCanonicalModelToPersonalContact = (doctor: DoctorCanonicalModel): DoctorPersonalContact => {
  const { doctorId, email, phoneNumber, address } = doctor;
  return { doctorId, email, phoneNumber, address };
};
