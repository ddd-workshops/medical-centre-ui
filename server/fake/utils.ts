import { faker } from "@faker-js/faker";

export const randomFromArray = <T>(arr: ReadonlyArray<T>): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const repeat =
  <T>(factoryFn: () => T, count: number | Record<'min' | 'max', number>): T[] => {
    if (typeof count === 'number') {
      return Array.from({ length: count }, factoryFn);
    } else {
      const { min, max } = count;
      return Array.from({ length: faker.number.int({ min, max }) }, factoryFn);
    }
  }

export const screamingCaseToCapitalized = (screamingCase: string): string => {
  return screamingCase
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
