import { randomFromArray } from "./utils";

export enum Specialization {
  GENERAL_DENTIST = 'GENERAL_DENTIST',
  ORAL_SURGEON = 'ORAL_SURGEON',
  PERIODONTIST = 'PERIODONTIST',
  PROSTHODONTIST = 'PROSTHODONTIST',
  ENDODONTIST = 'ENDODONTIST',
  ORTHODONTIST = 'ORTHODONTIST',
  DENTAL_HYGIENIST = 'DENTAL_HYGIENIST',
  DENTAL_ASSISTANT = 'DENTAL_ASSISTANT'
}

export const generateSpecialization = (): Specialization => {
  return randomFromArray(Object.values(Specialization));
}
