import { faker } from "@faker-js/faker";

import { randomFromArray } from "./utils";

export enum DentalSpecialty {
  GENERAL_DENTIST = 'GENERAL_DENTIST',
  ORAL_SURGEON = 'ORAL_SURGEON',
  PERIODONTIST = 'PERIODONTIST',
  PROSTHODONTIST = 'PROSTHODONTIST',
  ENDODONTIST = 'ENDODONTIST',
  ORTHODONTIST = 'ORTHODONTIST',
  DENTAL_HYGIENIST = 'DENTAL_HYGIENIST',
  DENTAL_ASSISTANT = 'DENTAL_ASSISTANT'
}

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

export enum StaffType {
  MEDICAL = "MEDICAL",
  OFFICE = "OFFICE",
  FINANCE = "FINANCE",
  MANAGER = "MANAGER",
  TECHNICIAN = "TECHNICIAN"
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

interface SpecialtyGenerationOptions {
  min?: number;
  max?: number;
  exact?: number;
  baseSpecialty?: DentalSpecialty;
}

// Define specialty paths and their requirements
interface SpecialtyRule {
  weight: number;
  requires: DentalSpecialty[];
  conflicts: DentalSpecialty[];
  commonPairs: DentalSpecialty[];
}

const SPECIALTY_RULES: Record<DentalSpecialty, SpecialtyRule> = {
  [DentalSpecialty.GENERAL_DENTIST]: {
    weight: 100, // Most common
    requires: [],
    conflicts: [DentalSpecialty.DENTAL_ASSISTANT, DentalSpecialty.DENTAL_HYGIENIST],
    commonPairs: [DentalSpecialty.ORTHODONTIST] // Often general dentists get orthodontics training
  },
  [DentalSpecialty.ORAL_SURGEON]: {
    weight: 30,
    requires: [DentalSpecialty.GENERAL_DENTIST], // Must be a general dentist first
    conflicts: [DentalSpecialty.DENTAL_ASSISTANT, DentalSpecialty.DENTAL_HYGIENIST],
    commonPairs: [DentalSpecialty.PERIODONTIST] // Surgical specialties often overlap
  },
  [DentalSpecialty.PERIODONTIST]: {
    weight: 40,
    requires: [DentalSpecialty.GENERAL_DENTIST],
    conflicts: [DentalSpecialty.DENTAL_ASSISTANT, DentalSpecialty.DENTAL_HYGIENIST],
    commonPairs: [DentalSpecialty.ORAL_SURGEON]
  },
  [DentalSpecialty.PROSTHODONTIST]: {
    weight: 35,
    requires: [DentalSpecialty.GENERAL_DENTIST],
    conflicts: [DentalSpecialty.DENTAL_ASSISTANT, DentalSpecialty.DENTAL_HYGIENIST],
    commonPairs: []
  },
  [DentalSpecialty.ENDODONTIST]: {
    weight: 25,
    requires: [DentalSpecialty.GENERAL_DENTIST],
    conflicts: [DentalSpecialty.DENTAL_ASSISTANT, DentalSpecialty.DENTAL_HYGIENIST],
    commonPairs: []
  },
  [DentalSpecialty.ORTHODONTIST]: {
    weight: 45,
    requires: [DentalSpecialty.GENERAL_DENTIST],
    conflicts: [DentalSpecialty.DENTAL_ASSISTANT, DentalSpecialty.DENTAL_HYGIENIST],
    commonPairs: []
  },
  [DentalSpecialty.DENTAL_HYGIENIST]: {
    weight: 80, // Third most common
    requires: [],
    conflicts: [
      DentalSpecialty.GENERAL_DENTIST,
      DentalSpecialty.ORAL_SURGEON,
      DentalSpecialty.PERIODONTIST,
      DentalSpecialty.PROSTHODONTIST,
      DentalSpecialty.ENDODONTIST,
      DentalSpecialty.ORTHODONTIST
    ],
    commonPairs: [DentalSpecialty.DENTAL_ASSISTANT]
  },
  [DentalSpecialty.DENTAL_ASSISTANT]: {
    weight: 90, // Second most common
    requires: [],
    conflicts: [
      DentalSpecialty.GENERAL_DENTIST,
      DentalSpecialty.ORAL_SURGEON,
      DentalSpecialty.PERIODONTIST,
      DentalSpecialty.PROSTHODONTIST,
      DentalSpecialty.ENDODONTIST,
      DentalSpecialty.ORTHODONTIST
    ],
    commonPairs: [DentalSpecialty.DENTAL_HYGIENIST]
  }
};

const getAvailableSpecialties = (
  existing: DentalSpecialty[] = []
): [DentalSpecialty, number][] => {
  return Object.entries(SPECIALTY_RULES)
    .filter(([specialty]) => !existing.includes(specialty as DentalSpecialty))
    .filter(([specialty, rules]) => {
      const spec = specialty as DentalSpecialty;
      const { requires, conflicts } = rules;
      
      // Check if all required specialties are present
      const hasRequirements = requires.every(req => existing.includes(req));
      // Check if there are no conflicts with existing specialties
      const hasNoConflicts = !conflicts.some(conf => existing.includes(conf));
      
      return hasRequirements && hasNoConflicts;
    })
    .map(([specialty, rules]) => [
      specialty as DentalSpecialty,
      rules.weight * (
        // Boost weight if it's commonly paired with existing specialties
        existing.some(ex => SPECIALTY_RULES[ex].commonPairs.includes(specialty as DentalSpecialty))
          ? 1.5
          : 1
      )
    ]);
};

export const generateFakeSpecialties = (
  options: SpecialtyGenerationOptions = {}
): DentalSpecialty[] => {
  const { min = 1, max = 3, exact, baseSpecialty } = options;
  const count = exact ?? faker.number.int({ min, max });
  
  const specialties: DentalSpecialty[] = [];
  
  // If base specialty is provided, start with it
  if (baseSpecialty) {
    specialties.push(baseSpecialty);
  }
  
  while (specialties.length < count) {
    const available = getAvailableSpecialties(specialties);
    if (!available.length) break;
    
    // Use weights for random selection
    const totalWeight = available.reduce((sum, [_, weight]) => sum + weight, 0);
    let random = faker.number.float({ min: 0, max: totalWeight });
    
    for (const [specialty, weight] of available) {
      random -= weight;
      if (random <= 0) {
        specialties.push(specialty);
        break;
      }
    }
  }
  
  return specialties;
};

// Update existing functions to use the new generator
export const generateFakeSpecialty = (): DentalSpecialty => {
  return generateFakeSpecialties({ exact: 1 })[0];
};
