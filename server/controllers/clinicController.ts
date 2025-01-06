import { Router } from 'express';
import type { Request, Response } from 'express';

import type { paths, ErrorResponse } from '../contract/types';
import { inMemoryDB } from '../in-memory/db';
import { clinicDetailsToBrief } from './clinicModel';

export const clinicsRouter = Router();

clinicsRouter.get('/', (
  _req: Request,
  res: Response<paths['/clinics']['get']['responses']['200']['content']['application/json']>
) => {
  const clinics = inMemoryDB.clinics.map(clinicDetailsToBrief);
  res.json(clinics);
});

clinicsRouter.get('/:clinicId', (
  req: Request<paths['/clinics/{clinicId}']['get']['parameters']['path']>,
  res: Response<paths['/clinics/{clinicId}']['get']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  const clinic = inMemoryDB.clinics.find(c => c.id === Number(req.params.clinicId));
  
  if (!clinic) {
    res.status(404).json({ message: 'Clinic not found' });
    return;
  }
  
  res.json(clinic);
});
