import { faker } from '@faker-js/faker';
import { randomFromArray } from '../fake/utils';
import type { Treatment } from '../contract/types';
import { generateTreatment } from './treatments';

export const generatePrescribedTreatment = (
  patientId: string,
  treatmentId?: string,
  treatment?: Treatment
) => {
  const generatedTreatment = treatment || generateTreatment();
  return {
    id: faker.string.uuid(),
    treatmentId: treatmentId || generatedTreatment.id,
    patientId,
    doctorId: faker.string.uuid(),
    prescribedDate: faker.date.recent(),
    treatment: generatedTreatment,
    status: randomFromArray(['SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'])
  };
};

export const getPrescribedTreatments = (req: Request, res: Response) => {
  const { patientId } = req.params;
  const prescribedTreatments = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, 
    () => generatePrescribedTreatment(patientId)
  );
  res.json(prescribedTreatments);
};
