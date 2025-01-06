import { Router } from 'express';
import type { Request, Response } from 'express';

import type { ErrorResponse, paths } from '../contract/types';
import { session } from '../in-memory/session';
import { randomFromArray } from '../fake/utils';
import { fakePatientProfiles } from '../fake/patient';

export const authRouter = Router();

authRouter.post('/login', (
  req: Request<object, object, paths['/auth/login']['post']['requestBody']['content']['application/json']>,
  res: Response<paths['/auth/login']['post']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  const body = req.body;

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

authRouter.post('/logout', (
  req: Request,
  res: Response<paths['/auth/logout']['post']['responses']['204']['content'] | ErrorResponse>
) => {
  if (!session.loggedIn){
    return res.status(400).json({ message: 'Not logged in' }).send();
  }

  session.logOut();
  res.status(204).send();
});
