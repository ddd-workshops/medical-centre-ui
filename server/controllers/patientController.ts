import { Router } from 'express';
import { session } from '../fake/session';
import { prescribedTreatments } from '../fake/db';

export const patientRouter = Router();

patientRouter.get('/profile', (req, res) => {
  res.json(session.patientProfile);
});

patientRouter.get('/treatments', (req, res) => {
  res.json(prescribedTreatments);
});
