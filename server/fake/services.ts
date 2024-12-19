import { type Service } from './types';

export enum DentalService {
  // Basic Services
  GENERAL_CHECKUP = 'GENERAL_CHECKUP',
  EMERGENCY_CONSULTATION = 'EMERGENCY_CONSULTATION',
  ROUTINE_CLEANING = 'ROUTINE_CLEANING',
  DEEP_CLEANING = 'DEEP_CLEANING',
  XRAY_SINGLE = 'XRAY_SINGLE',
  XRAY_FULL_MOUTH = 'XRAY_FULL_MOUTH',
  
  // Preventive Services
  FLUORIDE_TREATMENT = 'FLUORIDE_TREATMENT',
  DENTAL_SEALANTS = 'DENTAL_SEALANTS',
  GUM_DISEASE_TREATMENT = 'GUM_DISEASE_TREATMENT',
  
  // Restorative Services
  TOOTH_FILLING_BASIC = 'TOOTH_FILLING_BASIC',
  TOOTH_FILLING_COMPOSITE = 'TOOTH_FILLING_COMPOSITE',
  ROOT_CANAL_FRONT = 'ROOT_CANAL_FRONT',
  ROOT_CANAL_MOLAR = 'ROOT_CANAL_MOLAR',
  TOOTH_EXTRACTION_SIMPLE = 'TOOTH_EXTRACTION_SIMPLE',
  TOOTH_EXTRACTION_SURGICAL = 'TOOTH_EXTRACTION_SURGICAL',
  
  // Cosmetic Services
  TEETH_WHITENING = 'TEETH_WHITENING',
  DENTAL_BONDING = 'DENTAL_BONDING',
  VENEERS_PORCELAIN = 'VENEERS_PORCELAIN',
  VENEERS_COMPOSITE = 'VENEERS_COMPOSITE',
  
  // Major Procedures
  DENTAL_CROWN = 'DENTAL_CROWN',
  DENTAL_BRIDGE = 'DENTAL_BRIDGE',
  DENTAL_IMPLANT = 'DENTAL_IMPLANT',
  DENTURES_FULL = 'DENTURES_FULL',
  DENTURES_PARTIAL = 'DENTURES_PARTIAL',
  
  // Orthodontic Services
  BRACES_TRADITIONAL = 'BRACES_TRADITIONAL',
  BRACES_CERAMIC = 'BRACES_CERAMIC',
  INVISALIGN_FULL = 'INVISALIGN_FULL',
  INVISALIGN_LITE = 'INVISALIGN_LITE',
  
  // Specialty Services
  SLEEP_APNEA_TREATMENT = 'SLEEP_APNEA_TREATMENT',
  TMJ_TREATMENT = 'TMJ_TREATMENT',
  WISDOM_TEETH_REMOVAL = 'WISDOM_TEETH_REMOVAL'
}

export const availableServices: Service[] = [
  // Basic Services
  {
    id: 'service-1',
    name: DentalService.GENERAL_CHECKUP,
    description: 'Comprehensive dental examination with treatment planning',
    duration: 30,
    price: 65
  },
  {
    id: 'service-2',
    name: DentalService.EMERGENCY_CONSULTATION,
    description: 'Urgent dental care consultation',
    duration: 30,
    price: 95
  },
  {
    id: 'service-3',
    name: DentalService.ROUTINE_CLEANING,
    description: 'Professional teeth cleaning and polishing',
    duration: 45,
    price: 75
  },
  {
    id: 'service-4',
    name: DentalService.DEEP_CLEANING,
    description: 'Deep cleaning for gum disease treatment',
    duration: 90,
    price: 250
  },
  // Preventive Services
  {
    id: 'service-5',
    name: DentalService.FLUORIDE_TREATMENT,
    description: 'Professional fluoride application',
    duration: 20,
    price: 35
  },
  // Restorative Services
  {
    id: 'service-6',
    name: DentalService.TOOTH_FILLING_COMPOSITE,
    description: 'White composite filling',
    duration: 45,
    price: 150
  },
  {
    id: 'service-7',
    name: DentalService.ROOT_CANAL_MOLAR,
    description: 'Root canal treatment for molar teeth',
    duration: 90,
    price: 950
  },
  // Cosmetic Services
  {
    id: 'service-8',
    name: DentalService.TEETH_WHITENING,
    description: 'Professional teeth whitening treatment',
    duration: 60,
    price: 395
  },
  {
    id: 'service-9',
    name: DentalService.VENEERS_PORCELAIN,
    description: 'Porcelain veneer per tooth',
    duration: 120,
    price: 850
  },
  // Major Procedures
  {
    id: 'service-10',
    name: DentalService.DENTAL_IMPLANT,
    description: 'Complete dental implant procedure',
    duration: 120,
    price: 2500
  },
  {
    id: 'service-11',
    name: DentalService.DENTAL_CROWN,
    description: 'Porcelain crown fitting',
    duration: 90,
    price: 750
  },
  // Orthodontic Services
  {
    id: 'service-12',
    name: DentalService.INVISALIGN_FULL,
    description: 'Complete Invisalign treatment',
    duration: 60,
    price: 4500
  },
  {
    id: 'service-13',
    name: DentalService.BRACES_TRADITIONAL,
    description: 'Traditional metal braces treatment',
    duration: 60,
    price: 3500
  },
  // Specialty Services
  {
    id: 'service-14',
    name: DentalService.WISDOM_TEETH_REMOVAL,
    description: 'Surgical wisdom teeth extraction (per tooth)',
    duration: 60,
    price: 350
  },
  {
    id: 'service-15',
    name: DentalService.TMJ_TREATMENT,
    description: 'TMJ disorder treatment and consultation',
    duration: 45,
    price: 195
  }
];
