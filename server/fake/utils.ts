import { faker } from "@faker-js/faker";
import { logger } from "../logger";

interface FromArrayOptions {
  count: number | Record<'min' | 'max', number>;
  debug?: boolean;
}

export function randomFromArray<T>(arr: ReadonlyArray<T>): T;
export function randomFromArray<T>(arr: ReadonlyArray<T>, options: FromArrayOptions): T[];
export function randomFromArray<T>(
  arr: ReadonlyArray<T>,
  options?: FromArrayOptions
): T | T[] {
  if (!options) {
    const tempArray = [...arr];
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    return tempArray[randomIndex];
  }

  const itemsCount = typeof options.count === 'number' 
    ? options.count 
    : faker.number.int(options.count);

  if (itemsCount > arr.length) {
    throw new Error(
      `Cannot select ${itemsCount} items from array of length ${arr.length} without repetition`
    );
  }

  const tempArray = [...arr];
  const result: T[] = [];

  for (let i = 0; i < itemsCount; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    const [selectedItem] = tempArray.splice(randomIndex, 1);
    result.push(selectedItem);
    
    if (options.debug) {
      logger.debug('randomFromArray', i);
    }
  }

  logger.debug(`randomFromArray: selected ${result.length} items`);

  return result;
};

export const shuffleArray = <T>(array: ReadonlyArray<T>): T[] => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};

interface RepeatOptions {
  count: number | Record<'min' | 'max', number>;
  debug?: boolean;
}

export const repeat = <T>(factoryFn: () => T, { count, debug = false }: RepeatOptions): T[] => {
  const itemsCount = typeof count === 'number' ? count : faker.number.int(count);
  logger.debug(`repeat: ${factoryFn.name}, generating ${itemsCount} items`);

  const result: T[] = [];
  for (let i = 0; i < itemsCount; i++) {
    result.push(factoryFn());
    if (debug) {
      logger.debug('repeat', i);
    }
  }

  logger.debug(`repeat: ${factoryFn.name}, finished: ${result.length} items`);

  return result;
};

export const screamingCaseToCapitalized = (screamingCase: string): string => {
  return screamingCase
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

interface GenerateIDOptions {
  from: number;
  to: number;
}

export const createRandomUniqueIntegerIDGenerator = ({ from, to }: GenerateIDOptions) => {
  const generatedIDs = new Set<number>();

  return (): number => {
    let id: number;
    do {
      id = faker.number.int({ min: from, max: to });
    } while (generatedIDs.has(id));

    generatedIDs.add(id);
    return id;
  };
};
