import { Router } from 'express';
import { generateFakeTreatment } from '../fake/treatments';
import { repeat } from '../fake/utils';

export const treatmentsRouter = Router();

const treatments = repeat(() => generateFakeTreatment(), { min: 2, max: 5 });

treatmentsRouter.get('/patients/:patientId/prescribed-treatments', (req, res) => {
  const { patientId } = req.params;
  res.json(treatments);
});
