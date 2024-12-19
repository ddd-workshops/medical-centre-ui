import { faker } from '@faker-js/faker';
import { generateDoctor } from './staff';
import { basicEquipment, advancedEquipment } from './equipment';
import { availableServices } from './services';
import type { DentalCentre, Cabinet } from './types';
import { DentalService } from './services';
import { randomFromArray } from './utils';

const londonAreas = [
  'Westminster',
  'Camden',
  'Kensington',
  'Chelsea',
  'Islington',
  'Greenwich',
  'Hackney'
];

const generateCabinet = (number: number): Cabinet => ({
  id: faker.string.uuid(),
  number: `CAB-${number}`,
  equipment: [
    ...basicEquipment,
    ...faker.helpers.arrayElements(advancedEquipment, faker.number.int({ min: 1, max: 3 }))
  ],
  services: faker.helpers.arrayElements(availableServices, faker.number.int({ min: 2, max: 5 }))
});

export const generateDentalCentre = (): DentalCentre => {
  const numCabinets = faker.number.int({ min: 3, max: 15 });
  const cabinets = Array.from({ length: numCabinets }, (_, i) => generateCabinet(i + 1));
  const numDoctors = faker.number.int({ min: numCabinets, max: numCabinets * 2 });
  const area = randomFromArray(londonAreas);
  
  return {
    id: faker.string.uuid(),
    name: `${faker.company.name()} Dental Centre`,
    address: {
      street: faker.location.street(),
      city: 'London',
      area,
      postcode: faker.location.zipCode('?# #??'),
      country: 'United Kingdom'
    },
    phone: '+44 ' + faker.phone.number(),
    email: faker.internet.email(),
    cabinets,
    staff: Array.from({ length: numDoctors }, generateDoctor),
    services: Object.values(DentalService),
    openingHours: {
      weekday: '08:00 - 20:00',
      weekend: '10:00 - 16:00'
    },
    emergencyAvailable: faker.datatype.boolean(),
    parking: faker.datatype.boolean(),
    wheelchairAccessible: true
  };
};
