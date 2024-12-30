import { faker } from "@faker-js/faker";
import type { DoctorSpecialty } from '../contract/types';
import { randomFromArray } from "./utils";
import { StaffType } from "./staffType";

export const specialties: DoctorSpecialty[] = [
  { code: 'GENERAL_DENTIST', name: 'General Dentist' },
  { code: 'ORAL_SURGEON', name: 'Oral Surgeon' },
  { code: 'PERIODONTIST', name: 'Periodontist' },
  { code: 'PROSTHODONTIST', name: 'Prosthodontist' },
  { code: 'ENDODONTIST', name: 'Endodontist' },
  { code: 'ORTHODONTIST', name: 'Orthodontist' },
  { code: 'DENTAL_HYGIENIST', name: 'Dental Hygienist' },
  { code: 'DENTAL_ASSISTANT', name: 'Dental Assistant' },
  { code: 'IMPLANTOLOGY', name: 'Implantology' },
  { code: 'PEDIATRIC_DENTISTRY', name: 'Pediatric Dentistry' },
  { code: 'ORAL_MEDICINE', name: 'Oral Medicine' },
];

export const getSpecialtiesByCodes = (codes: string[]) => 
  specialties.filter(specialty => codes.includes(specialty.code));

interface SpecialtyRule {
  weight: number;
  requires: string[];
  conflicts: string[];
  commonPairs: string[];
}

const SPECIALTY_RULES: Record<string, SpecialtyRule> = {
  GENERAL_DENTIST: {
    weight: 100,
    requires: [],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: ['ORTHODONTIST']
  },
  ORAL_SURGEON: {
    weight: 30,
    requires: ['GENERAL_DENTIST'],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: ['PERIODONTIST']
  },
  PERIODONTIST: {
    weight: 40,
    requires: ['GENERAL_DENTIST'],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: ['ORAL_SURGEON']
  },
  PROSTHODONTIST: {
    weight: 35,
    requires: ['GENERAL_DENTIST'],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: []
  },
  ENDODONTIST: {
    weight: 25,
    requires: ['GENERAL_DENTIST'],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: []
  },
  ORTHODONTIST: {
    weight: 45,
    requires: ['GENERAL_DENTIST'],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: []
  },
  DENTAL_HYGIENIST: {
    weight: 80,
    requires: [],
    conflicts: [
      'GENERAL_DENTIST',
      'ORAL_SURGEON',
      'PERIODONTIST',
      'PROSTHODONTIST',
      'ENDODONTIST',
      'ORTHODONTIST'
    ],
    commonPairs: ['DENTAL_ASSISTANT']
  },
  DENTAL_ASSISTANT: {
    weight: 90,
    requires: [],
    conflicts: [
      'GENERAL_DENTIST',
      'ORAL_SURGEON',
      'PERIODONTIST',
      'PROSTHODONTIST',
      'ENDODONTIST',
      'ORTHODONTIST'
    ],
    commonPairs: ['DENTAL_HYGIENIST']
  },
  IMPLANTOLOGY: {
    weight: 35,
    requires: ['GENERAL_DENTIST'],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: ['ORAL_SURGEON']
  },
  PEDIATRIC_DENTISTRY: {
    weight: 40,
    requires: ['GENERAL_DENTIST'],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: ['ORTHODONTIST']
  },
  ORAL_MEDICINE: {
    weight: 30,
    requires: ['GENERAL_DENTIST'],
    conflicts: ['DENTAL_ASSISTANT', 'DENTAL_HYGIENIST'],
    commonPairs: ['PERIODONTIST']
  }
};

const getAvailableSpecialties = (
  existing: string[] = []
): [string, number][] => {
  return Object.entries(SPECIALTY_RULES)
    .filter(([specialty]) => !existing.includes(specialty))
    .filter(([specialty, rules]) => {
      const { requires, conflicts } = rules;
      
      const hasRequirements = requires.every(req => existing.includes(req));
      const hasNoConflicts = !conflicts.some(conf => existing.includes(conf));
      
      return hasRequirements && hasNoConflicts;
    })
    .map(([specialty, rules]) => [
      specialty,
      rules.weight * (
        existing.some(ex => SPECIALTY_RULES[ex].commonPairs.includes(specialty))
          ? 1.5
          : 1
      )
    ]);
};

interface SpecialtyGenerationOptions {
  min?: number;
  max?: number;
  exact?: number;
  baseSpecialty?: string;
}

export const generateFakeSpecialties = (
  options: SpecialtyGenerationOptions = {}
): DoctorSpecialty[] => {
  const { min = 1, max = 3, exact, baseSpecialty } = options;
  const count = exact ?? faker.number.int({ min, max });
  
  const selectedCodes: string[] = [];
  
  if (baseSpecialty) {
    selectedCodes.push(baseSpecialty);
  }
  
  while (selectedCodes.length < count) {
    const available = getAvailableSpecialties(selectedCodes);
    if (!available.length) break;
    
    const totalWeight = available.reduce((sum, [_, weight]) => sum + weight, 0);
    let random = faker.number.float({ min: 0, max: totalWeight });
    
    for (const [specialty, weight] of available) {
      random -= weight;
      if (random <= 0) {
        selectedCodes.push(specialty);
        break;
      }
    }
  }
  
  return selectedCodes.map(code => 
    specialties.find(s => s.code === code)!
  );
};

export const generateFakeSpecialty = (): DoctorSpecialty => {
  return generateFakeSpecialties({ exact: 1 })[0];
};

export enum StaffTitle {
  DOCTOR = "Dr.",
  ASSISTANT = "Assistant",
  PROFESSOR = "Prof.",
  DDS = "DDS",
  DMD = "DMD",
  RDH = "RDH",
  BDS = "BDS",
  MD = "MD",
  PHD = "PhD"
}

export interface StaffRoleInfo {
  name: string;
  type: StaffType;
  possibleTitles: StaffTitle[];
}

export const STAFF_ROLES: Record<string, StaffRoleInfo> = {
  GENERAL_DENTIST: {
    name: "General Dentist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS, StaffTitle.DMD, StaffTitle.BDS]
  },
  ORAL_SURGEON: {
    name: "Oral Surgeon",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS, StaffTitle.MD]
  },
  PERIODONTIST: {
    name: "Periodontist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS]
  },
  PROSTHODONTIST: {
    name: "Prosthodontist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS]
  },
  ENDODONTIST: {
    name: "Endodontist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS]
  },
  ORTHODONTIST: {
    name: "Orthodontist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS]
  },
  DENTAL_HYGIENIST: {
    name: "Dental Hygienist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.RDH]
  },
  DENTAL_ASSISTANT: {
    name: "Dental Assistant",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.ASSISTANT]
  },
  RECEPTIONIST: {
    name: "Receptionist",
    type: StaffType.OFFICE,
    possibleTitles: []
  },
  OFFICE_MANAGER: {
    name: "Office Manager",
    type: StaffType.MANAGER,
    possibleTitles: []
  },
  BILLING_SPECIALIST: {
    name: "Billing Specialist",
    type: StaffType.FINANCE,
    possibleTitles: []
  },
  PATIENT_COORDINATOR: {
    name: "Patient Coordinator",
    type: StaffType.OFFICE,
    possibleTitles: []
  },
  SITE_MANAGER: {
    name: "Site Manager",
    type: StaffType.MANAGER,
    possibleTitles: []
  },
  DENTAL_TECHNICIAN: {
    name: "Dental Technician",
    type: StaffType.TECHNICIAN,
    possibleTitles: []
  },
  RADIOLOGY_TECHNICIAN: {
    name: "Radiology Technician",
    type: StaffType.TECHNICIAN,
    possibleTitles: []
  },
  IMPLANTOLOGY: {
    name: "Implantologist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS, StaffTitle.DMD]
  },
  PEDIATRIC_DENTISTRY: {
    name: "Pediatric Dentist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS, StaffTitle.DMD]
  },
  ORAL_MEDICINE: {
    name: "Oral Medicine Specialist",
    type: StaffType.MEDICAL,
    possibleTitles: [StaffTitle.DOCTOR, StaffTitle.DDS, StaffTitle.MD]
  }
};

export interface Specialist {
  role: string;
  name: string;
  type: StaffType;
  title?: string;
}

export const generateFakeSpecialist = (type?: StaffType): Specialist => {
  const availableRoles = Object.entries(STAFF_ROLES)
    .filter(([_, info]) => !type || info.type === type);
  
  const [roleKey, roleInfo] = randomFromArray(availableRoles);
  const title = roleInfo.possibleTitles.length > 0 
    ? randomFromArray(roleInfo.possibleTitles) 
    : undefined;

  return {
    role: roleKey,
    name: roleInfo.name,
    type: roleInfo.type,
    title
  };
};
