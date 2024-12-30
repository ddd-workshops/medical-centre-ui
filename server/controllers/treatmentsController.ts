import { Router } from 'express';
import type { Request, Response } from 'express';

import { paths } from '../contract/types';
import { medicalTreatments } from '../fake/db';

export const treatmentsRouter = Router();

treatmentsRouter.get('/', (
  _req: Request,
  res: Response<paths['/treatments']['get']['responses']['200']['content']['application/json']>
) => {
  res.json(medicalTreatments);
});
