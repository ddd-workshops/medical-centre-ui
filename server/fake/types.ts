import { DentalService } from './services';

export enum DaysOfWeek {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY'
}

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

export enum EquipmentType {
  BASIC = 'BASIC',
  DIAGNOSTIC = 'DIAGNOSTIC',
  SURGICAL = 'SURGICAL',
  SPECIALTY = 'SPECIALTY',
  ORTHODONTIC = 'ORTHODONTIC',
  PREVENTIVE = 'PREVENTIVE',
  RESTORATIVE = 'RESTORATIVE'
}

export enum EquipmentCategory {
  BASIC = 'BASIC',
  ADVANCED = 'ADVANCED'
}

export interface Address {
  street: string;
  city: string;
  area?: string;
  postcode: string;
  country: string;
}

export interface Availability {
  day: DaysOfWeek;
  startTime: string;
  endTime: string;
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialization: Specialization;
  secondarySpecializations: Specialization[];
  email: string;
  phone: string;
  address: Address;
  availability: Availability[];
  yearsOfExperience: number;
  education: string[];
  languages: string[];
  bio: string;
  imageUrl: string;
  registrationNumber: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
  category: EquipmentCategory;
}

export interface Service {
  id: string;
  name: DentalService;
  description: string;
  /** duration in minutes */
  duration: number;
  /** price in GBP */
  price: number;
}

export interface Cabinet {
  id: string;
  number: string;
  equipment: Equipment[];
  services: Service[];
}

export interface DentalCentre {
  id: string;
  name: string;
  address: Address;
  phone: string;
  email: string;
  cabinets: Cabinet[];
  staff: Doctor[];
  services: DentalService[];
  openingHours: {
    weekday: string;
    weekend: string;
  };
  emergencyAvailable: boolean;
  parking: boolean;
  wheelchairAccessible: boolean;
}
