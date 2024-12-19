import type { PrescribedTreatment } from '../../contract/types';
import { apiClient } from './client';

export const treatmentsService = {
  getPrescribedTreatments: async (): Promise<PrescribedTreatment[]> => {
    const { data } = await apiClient.get<PrescribedTreatment[]>(
      `/prescribed-treatments`
    );
    return data;
  },
};
