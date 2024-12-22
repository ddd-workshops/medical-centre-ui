import { faker } from "@faker-js/faker";

export const randomFromArray = <T>(arr: ReadonlyArray<T>): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const shuffleArray = <T>(array: ReadonlyArray<T>): T[] => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
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
