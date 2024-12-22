import { Router } from 'express';
import { medicalTreatments } from '../fake/db';

export const treatmentsRouter = Router();

treatmentsRouter.get('/', (req, res) => {
  res.json(medicalTreatments);
});
