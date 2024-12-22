import { Router } from 'express';
import { generateFakeClinicBriefs, generateFakeClinicDetails } from '../fake/clinics';

export const clinicsRouter = Router();

clinicsRouter.get('/', (req, res) => {
  const clinics = generateFakeClinicBriefs();
  res.json(clinics);
});

clinicsRouter.get('/:id', (req, res) => {
  const clinics = generateFakeClinicDetails();
  const clinic = clinics.find(c => c.id === req.params.id);
  
  if (!clinic) {
    res.status(404).json({ message: 'Clinic not found' });
    return;
  }
  
  res.json(clinic);
});
