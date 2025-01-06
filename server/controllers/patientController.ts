import { Router } from 'express';
import type { Request, Response } from 'express';

import { session } from '../in-memory/session';
import { paths, ErrorResponse } from '../contract/types';
import { fakePrescribedTreatments } from '../fake/prescribed-treatments';

export const patientRouter = Router();

patientRouter.get('/profile', (
  _req: Request,
  res: Response<paths['/patient/profile']['get']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  if (session.patientProfile){
    res.json(session.patientProfile);
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

patientRouter.get('/treatments', (
  _req: Request,
  res: Response<paths['/patient/treatments']['get']['responses']['200']['content']['application/json']>
) => {
  res.json(fakePrescribedTreatments);
});
