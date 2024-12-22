import { Router } from 'express';
import { patientProfile, prescribedTreatments } from '../fake/db';

export const patientRouter = Router();

patientRouter.get('/profile', (req, res) => {
  res.json(patientProfile);
});

patientRouter.get('/treatments', (req, res) => {
  res.json(prescribedTreatments);
});
