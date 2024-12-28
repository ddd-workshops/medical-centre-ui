import { Router } from 'express';
import { fakeClinicBriefs, fakeClinicDetails } from '../fake/clinics';

export const clinicsRouter = Router();

clinicsRouter.get('/', (req, res) => {
  const clinics = fakeClinicBriefs;
  res.json(clinics);
});

clinicsRouter.get('/:id', (req, res) => {
  const clinic = fakeClinicDetails.find(c => c.id === Number(req.params.id));
  
  if (!clinic) {
    res.status(404).json({ message: 'Clinic not found' });
    return;
  }
  
  res.json(clinic);
});
