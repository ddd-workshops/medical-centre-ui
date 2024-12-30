import { randomFromArray } from './utils';

const weekdayOpenings = [
  '08:00-18:00',
  '08:30-18:30',
  '09:00-19:00',
  '09:00-20:00',
  '08:00-19:00',
];

const weekendOpenings = [
  '09:00-17:00',
  '10:00-16:00',
  '09:00-14:00',
  'CLOSED',
];

export const generateOpeningHours = () => {
  return {
    MONDAY: randomFromArray(weekdayOpenings),
    TUESDAY: randomFromArray(weekdayOpenings),
    WEDNESDAY: randomFromArray(weekdayOpenings),
    THURSDAY: randomFromArray(weekdayOpenings),
    FRIDAY: randomFromArray(weekdayOpenings),
    SATURDAY: randomFromArray(weekendOpenings),
    SUNDAY: randomFromArray(['CLOSED', ...weekendOpenings.filter(h => h !== 'CLOSED')]),
  };
};
