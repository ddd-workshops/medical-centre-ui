import { faker } from "@faker-js/faker";

import { Address } from "../contract/types";
import { randomFromArray } from "./utils";

const londonAreas = [
  'Westminster',
  'Camden',
  'Kensington',
  'Chelsea',
  'Islington',
  'Greenwich',
  'Hackney'
];

export const generateFakeAddress = ({ withDistrict = false }: { withDistrict?: boolean } = {}): Address => ({
  id: faker.string.uuid(),
  country: faker.location.country(),
  city: faker.location.city(),
  ...(withDistrict && { district: randomFromArray(londonAreas) }),
  street: faker.location.streetAddress(),
  postalCode: faker.location.zipCode(),
})
