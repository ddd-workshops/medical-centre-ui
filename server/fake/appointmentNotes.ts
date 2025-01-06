import { faker } from '@faker-js/faker';
import { randomFromArray, repeat } from './utils';

const dentalObservations = [
  'Mild gingivitis noted on upper molars',
  'Visible calculus build-up on lower anterior teeth',
  'Signs of nocturnal bruxism',
  'Deep pockets observed in regions 16 and 17',
  'Early signs of enamel wear on canines',
  'Slight recession on buccal surfaces',
  'Tooth 25 shows sensitivity to cold',
  'Minor cavity detected on tooth 36',
  'Healthy periodontal tissue overall',
  'Bridge between 45-47 in good condition',
  'Signs of adequate oral hygiene',
  'Wisdom teeth growing without complications'
];

const recommendations = [
  'Recommended regular flossing routine',
  'Suggested switching to soft-bristled brush',
  'Advised on proper brushing technique',
  'Consider night guard for bruxism',
  'Schedule follow-up cleaning in 6 months',
  'Continue current oral care routine',
  'Use sensitive toothpaste for two weeks',
  'Increase fluoride exposure through rinses'
];

const procedures = [
  'Professional cleaning performed',
  'Fluoride treatment applied',
  'X-rays taken for comprehensive assessment',
  'Dental sealants applied to molars',
  'Deep cleaning of quadrant 1 completed',
  'Temporary filling placed on tooth 36'
];

export const generateFakeAppointmentNotes = (): string => {
  const parts: string[] = [];
  
  // Add 1-2 observations
  parts.push(...repeat(() => randomFromArray(dentalObservations), { count: { min: 1, max: 2 } }));
  
  // Maybe add a procedure
  if (Math.random() > 0.5) {
    parts.push(randomFromArray(procedures));
  }
  
  // Add a recommendation
  parts.push(randomFromArray(recommendations));

  return parts.join('. ') + '.';
};
