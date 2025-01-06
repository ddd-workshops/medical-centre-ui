import { faker } from '@faker-js/faker';
import { randomFromArray } from './utils';

const dentalPrescriptions = [
  'Amoxicillin 500mg - Take 1 capsule every 8 hours for 7 days',
  'Ibuprofen 600mg - Take 1 tablet every 6 hours as needed for pain',
  'Peridex (Chlorhexidine) 0.12% oral rinse - Rinse twice daily for 30 seconds',
  'Tylenol with Codeine #3 - Take 1 tablet every 4-6 hours as needed for severe pain',
  'Metronidazole 500mg - Take 1 tablet twice daily for 7 days',
  'Clindamycin 300mg - Take 1 capsule every 6 hours for 10 days',
  'Doxycycline 100mg - Take 1 capsule twice daily for 10 days',
  'Lidocaine 5% topical ointment - Apply to affected area up to 4 times daily',
  'Prednisolone 5mg - Take 2 tablets daily for 5 days',
  'Nystatin oral suspension - Swish and swallow 4 times daily after meals',
  'Erythromycin 500mg - Take 1 tablet 4 times daily before meals',
  'Periogard oral rinse - Rinse twice daily for 30 seconds after brushing',
  'Fluoride gel 1.1% - Apply to teeth once daily before bedtime',
  'Benzocaine 20% gel - Apply to affected area up to 4 times daily for pain'
];

export const generateFakePrescriptions = (): string[] | undefined => {
  if (Math.random() > 0.5) {
    const count = faker.number.int({ min: 1, max: 4 });
    return Array.from({ length: count }, () => randomFromArray(dentalPrescriptions));
  }
  return undefined;
};
