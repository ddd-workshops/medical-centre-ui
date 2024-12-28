import { Router } from 'express';
import type { Request, Response } from 'express';
import { fakeDoctorBriefs, fakeDoctorProfiles } from '../fake/staff';

export const staffRouter = Router();

staffRouter.get('/', (req: Request, res: Response) => {
  res.json(fakeDoctorBriefs);
});

staffRouter.get('/:id', (req: Request, res: Response) => {  
  const staff = fakeDoctorProfiles.find(d => d.id === Number(req.params.id));
  if (staff) {
    res.json(staff);
  } else {
    res.status(404).send('Staff not found');
  }
});
