import { Router } from 'express';
import { faker } from '@faker-js/faker';
import type { LoginRequest, PatientProfile } from '../contract/types';

export const authRouter = Router();

const generateMockProfile = (): PatientProfile => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  username: faker.internet.username(),
  address: {
    country: faker.location.country(),
    city: faker.location.city(),
    street: faker.location.streetAddress(),
    postalCode: faker.location.zipCode(),
  },
});

authRouter.post('/login', (req, res) => {
  const body = req.body as LoginRequest;

  // In a real application, you would validate credentials here
  if (body.username && body.password) {
    const profile = generateMockProfile();
    res.json(profile);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

authRouter.post('/logout', (_req, res) => {
  // In a real application, you would handle session/token invalidation here
  res.status(204).send();
});
