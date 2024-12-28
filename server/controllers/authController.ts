import { Router } from 'express';

import type { LoginRequest } from '../contract/types';
import { session } from '../fake/session';
import { randomFromArray } from '../fake/utils';
import { fakePatientProfiles } from '../fake/patient';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const body = req.body as LoginRequest;

  if (session.loggedIn){
    return res.status(400).json({ message: 'Already logged in' }).send();
  }

  if (body.username && body.password) {
    const patientProfile = randomFromArray(fakePatientProfiles)
    session.logIn(patientProfile);
    res.json(patientProfile);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

authRouter.post('/logout', (_req, res) => {
  if (!session.loggedIn){
    return res.status(400).json({ message: 'Not logged in' }).send();
  }

  session.logOut();
  res.status(204).send();
});
