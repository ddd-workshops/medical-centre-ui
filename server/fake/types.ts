import { Address } from '../contract/types';
import { DentalService } from './services';

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
