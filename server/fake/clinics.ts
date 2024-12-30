import { faker } from '@faker-js/faker';
import { createRandomUniqueIntegerIDGenerator, randomFromArray, shuffleArray } from './utils';
import type { ClinicDetails, ClinicBrief } from '../contract/types';
import { generateOpeningHours } from './clinicOpeningHours';
import { getSpecialtiesByCodes, specialties } from './specialties';

const clinicImageURLs = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95',
  'https://images.unsplash.com/photo-1590105577767-e21a1067899f',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787',
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787'
]

const facilityOptions = [
  { name: 'Parking', availability: true, description: 'Underground parking available' },
  { name: 'Wheelchair Access', availability: true, description: 'Full accessibility' },
  { name: 'Emergency Service', availability: true, description: '24/7 emergency dental care' },
  { name: 'Children\'s Play Area', availability: true, description: 'Family-friendly waiting area' },
  { name: 'Digital X-Ray', availability: true, description: 'Latest diagnostic equipment' },
  { name: 'Sterilization Room', availability: true, description: 'State-of-the-art sterilization facilities' },
  { name: 'Coffee Station', availability: true, description: 'Complimentary beverages' },
  { name: 'WiFi', availability: true, description: 'Free high-speed internet' },
  { name: 'TV in Treatment Rooms', availability: true, description: 'Entertainment during procedures' },
  { name: 'Multilingual Staff', availability: true, description: 'Staff speaking multiple languages' },
];

const generateFacilities = () => {
  // Always include Wheelchair Access and Emergency Service
  const essentialFacilities = facilityOptions.filter(f => 
    f.name === 'Wheelchair Access' || f.name === 'Emergency Service'
  );
  
  // Randomly select 2-4 additional facilities
  const additionalFacilities = shuffleArray(
    facilityOptions.filter(f => !essentialFacilities.includes(f))
  ).slice(0, faker.number.int({ min: 2, max: 4 }));

  return [...essentialFacilities, ...additionalFacilities];
};

const generateID = createRandomUniqueIntegerIDGenerator({ from: 100, to: 1000 });

export const fakeClinicDetails: ClinicDetails[] = [
  {
    id: generateID(),
    name: 'Bright Smiles Central London',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Oxford Street',
      street: '123 Oxford Street',
      postalCode: 'W1D 2JD'
    },
    phone: '+44 20 7123 4567',
    email: 'central@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'ORTHODONTIST', 'PERIODONTIST', 'ENDODONTIST']),
    description: 'Our flagship clinic in the heart of London, offering comprehensive dental care with state-of-the-art equipment.',
    coordinates: { latitude: 51.5157, longitude: -0.1378 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Canary Wharf',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Bank Street',
      street: '45 Bank Street',
      postalCode: 'E14 5JP'
    },
    phone: '+44 20 7234 5678',
    email: 'canarywharf@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'ORTHODONTIST', 'ORAL_SURGEON', 'PROSTHODONTIST']),
    description: 'Located in the bustling Canary Wharf, our clinic offers a wide range of dental services for busy professionals.',
    coordinates: { latitude: 51.5049, longitude: -0.0197 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Kensington',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Kensington High Street',
      street: '88 Kensington High Street',
      postalCode: 'W8 5SE'
    },
    phone: '+44 20 7345 6789',
    email: 'kensington@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'PERIODONTIST', 'PEDIATRIC_DENTIST', 'ORTHODONTIST']),
    description: 'Our Kensington clinic provides top-notch dental care in a luxurious setting.',
    coordinates: { latitude: 51.5007, longitude: -0.1925 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Chelsea',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'King\'s Road',
      street: '157 King\'s Road',
      postalCode: 'SW3 5EQ'
    },
    phone: '+44 20 7456 7890',
    email: 'chelsea@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'ENDODONTIST', 'ORTHODONTIST', 'ORAL_SURGEON']),
    description: 'Our Chelsea clinic offers personalized dental care in a stylish and comfortable environment.',
    coordinates: { latitude: 51.4875, longitude: -0.1687 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Mayfair',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Brook Street',
      street: '25 Brook Street',
      postalCode: 'W1K 4HB'
    },
    phone: '+44 20 7567 8901',
    email: 'mayfair@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'PROSTHODONTIST', 'PERIODONTIST', 'ORTHODONTIST']),
    description: 'Our Mayfair clinic provides high-quality dental services in an exclusive location.',
    coordinates: { latitude: 51.5141, longitude: -0.1463 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Camden',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Camden High Street',
      street: '42 Camden High Street',
      postalCode: 'NW1 0JH'
    },
    phone: '+44 20 7678 9012',
    email: 'camden@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'PEDIATRIC_DENTIST', 'ORTHODONTIST', 'ENDODONTIST']),
    description: 'Our Camden clinic offers a relaxed and friendly atmosphere for all your dental needs.',
    coordinates: { latitude: 51.5290, longitude: -0.1425 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Islington',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Upper Street',
      street: '335 Upper Street',
      postalCode: 'N1 0PB'
    },
    phone: '+44 20 7789 0123',
    email: 'islington@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'ORAL_SURGEON', 'PROSTHODONTIST', 'PERIODONTIST']),
    description: 'Our Islington clinic provides comprehensive dental care in a modern and welcoming environment.',
    coordinates: { latitude: 51.5362, longitude: -0.1033 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Greenwich',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Nelson Road',
      street: '12 Nelson Road',
      postalCode: 'SE10 9JB'
    },
    phone: '+44 20 7890 1234',
    email: 'greenwich@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'ENDODONTIST', 'PEDIATRIC_DENTIST', 'ORTHODONTIST']),
    description: 'Our Greenwich clinic offers high-quality dental care in a historic and vibrant area.',
    coordinates: { latitude: 51.4810, longitude: -0.0090 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Hampstead',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Hampstead High Street',
      street: '64 Hampstead High Street',
      postalCode: 'NW3 1QE'
    },
    phone: '+44 20 7901 2345',
    email: 'hampstead@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'PERIODONTIST', 'ORAL_SURGEON', 'PROSTHODONTIST']),
    description: 'Our Hampstead clinic offers a serene and professional environment for all your dental needs.',
    coordinates: { latitude: 51.5559, longitude: -0.1780 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Richmond',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'The Quadrant',
      street: '28 The Quadrant',
      postalCode: 'TW9 1DN'
    },
    phone: '+44 20 7012 3456',
    email: 'richmond@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'ORTHODONTIST', 'ENDODONTIST', 'PEDIATRIC_DENTIST']),
    description: 'Our Richmond clinic offers top-quality dental care in a picturesque setting.',
    coordinates: { latitude: 51.4613, longitude: -0.3037 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Wimbledon',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'The Broadway',
      street: '15 The Broadway',
      postalCode: 'SW19 1PS'
    },
    phone: '+44 20 7123 4567',
    email: 'wimbledon@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'PROSTHODONTIST', 'PERIODONTIST', 'ORAL_SURGEON']),
    description: 'Our Wimbledon clinic offers comprehensive dental care in a friendly and welcoming environment.',
    coordinates: { latitude: 51.4214, longitude: -0.2067 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Notting Hill',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Portobello Road',
      street: '223 Portobello Road',
      postalCode: 'W11 1LT'
    },
    phone: '+44 20 7234 5678',
    email: 'nottinghill@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'PEDIATRIC_DENTIST', 'ORTHODONTIST', 'PROSTHODONTIST']),
    description: 'Our Notting Hill clinic offers high-quality dental care in a vibrant and trendy area.',
    coordinates: { latitude: 51.5173, longitude: -0.2067 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Shoreditch',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Shoreditch High Street',
      street: '145 Shoreditch High Street',
      postalCode: 'E1 6JE'
    },
    phone: '+44 20 7345 6789',
    email: 'shoreditch@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'ORAL_SURGEON', 'ENDODONTIST', 'PERIODONTIST']),
    description: 'Our Shoreditch clinic offers modern dental care in a trendy and artistic neighborhood.',
    coordinates: { latitude: 51.5245, longitude: -0.0789 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Clapham',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Clapham High Street',
      street: '56 Clapham High Street',
      postalCode: 'SW4 7UL'
    },
    phone: '+44 20 7456 7890',
    email: 'clapham@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'ORTHODONTIST', 'PROSTHODONTIST', 'PEDIATRIC_DENTIST']),
    description: 'Our Clapham clinic offers a wide range of dental services in a friendly and relaxed environment.',
    coordinates: { latitude: 51.4620, longitude: -0.1380 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  },
  {
    id: generateID(),
    name: 'Bright Smiles Baker Street',
    address: {
      id: faker.string.uuid(),
      country: 'United Kingdom',
      city: 'London',
      district: 'Baker Street',
      street: '222 Baker Street',
      postalCode: 'NW1 5RT'
    },
    phone: '+44 20 7567 8901',
    email: 'bakerst@brightsmiles.com',
    clinicPhotoURL: randomFromArray(clinicImageURLs),
    availableSpecialties: getSpecialtiesByCodes(['GENERAL_DENTIST', 'PERIODONTIST', 'ORAL_SURGEON', 'ENDODONTIST']),
    description: 'Our Baker Street clinic offers high-quality dental care in a historic and well-known location.',
    coordinates: { latitude: 51.5237, longitude: -0.1583 },
    openingHours: generateOpeningHours(),
    facilities: generateFacilities()
  }
];

export const generateFakeClinicBrief = (clinic: ClinicDetails = randomFromArray(fakeClinicDetails)): ClinicBrief => {
  const { id, name, address: { street, city, postalCode, country } } = clinic
  return {
    id, 
    name, 
    address: `${street}, ${city}, ${postalCode}, ${country}`
  };
}

export const fakeClinicBriefs = fakeClinicDetails.map(generateFakeClinicBrief);
