import { faker } from '@faker-js/faker';
import { Doctor, Specialization, DaysOfWeek, Availability } from './types';

const generateAvailability = (): Availability[] => {
  return Object.values(DaysOfWeek).map(day => ({
    day,
    startTime: '09:00',
    endTime: '17:00'
  }));
};

export const generateDoctor = (): Doctor => {
  const specialization = faker.helpers.arrayElement(Object.values(Specialization));
  
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    specialization,
    secondarySpecializations: faker.helpers.arrayElements(
      Object.values(Specialization).filter(s => s !== specialization),
      faker.number.int({ min: 0, max: 2 })
    ),
    email: faker.internet.email(),
    phone: `+44 ` + faker.phone.number(),
    address: {
      street: faker.location.street(),
      city: 'London',
      postcode: faker.location.zipCode('?# #??'),
      country: 'United Kingdom'
    },
    availability: generateAvailability(),
    yearsOfExperience: faker.number.int({ min: 1, max: 30 }),
    education: [
      `${faker.company.name()} Dental School`,
      `${faker.company.name()} University`
    ],
    languages: ['English', ...faker.helpers.arrayElements(['French', 'Spanish', 'Polish', 'Hindi', 'Arabic'], faker.number.int({ min: 0, max: 2 }))],
    bio: faker.lorem.paragraphs(2),
    imageUrl: faker.image.avatar(),
    registrationNumber: `GDC${faker.number.int({ min: 100000, max: 999999 })}`
  };
};
