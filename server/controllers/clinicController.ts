import { Router } from 'express';
import type { Request, Response } from 'express';
import type { paths, ErrorResponse } from '../contract/types';
import { fakeClinicBriefs, fakeClinicDetails } from '../fake/clinics';

export const clinicsRouter = Router();

clinicsRouter.get('/', (
  _req: Request,
  res: Response<paths['/clinics']['get']['responses']['200']['content']['application/json']>
) => {
  const clinics = fakeClinicBriefs;
  res.json(clinics);
});

clinicsRouter.get('/:clinicId', (
  req: Request<paths['/clinics/{clinicId}']['get']['parameters']['path']>,
  res: Response<paths['/clinics/{clinicId}']['get']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  const clinic = fakeClinicDetails.find(c => c.id === Number(req.params.clinicId));
  
  if (!clinic) {
    res.status(404).json({ message: 'Clinic not found' });
    return;
  }
  
  res.json(clinic);
});
