import { Router } from 'express';

import type { LoginRequest } from '../contract/types';
import { generateFakePatientProfile } from '../fake/patient';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const body = req.body as LoginRequest;

  if (body.username && body.password) {
    const profile = generateFakePatientProfile();
    res.json(profile);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

authRouter.post('/logout', (_req, res) => {
  // TODO: In a real application, you would handle session/token invalidation here
  res.status(204).send();
});
