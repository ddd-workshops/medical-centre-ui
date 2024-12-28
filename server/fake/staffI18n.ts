import { faker, fakerAR, fakerDE, fakerEN, fakerEN_IN, fakerES, fakerFR, fakerPL } from "@faker-js/faker";
import { randomFromArray, repeat } from "./utils";

// Represents rough demographics of UK healthcare workers
const DEMOGRAPHIC_WEIGHTS = {
  NATIVE_ENGLISH: 65,  // UK native
  POLISH: 8,          // Large EU migrant group
  INDIAN: 7,          // Significant healthcare workforce
  ARABIC: 5,          // Middle Eastern representation
  GERMAN: 5,          // EU representation
  SPANISH: 5,         // EU representation
  FRENCH: 5,          // EU representation
} as const;

type Demographic = keyof typeof DEMOGRAPHIC_WEIGHTS;

interface LanguageAffinityGroup {
  primaryLanguage: string;
  nativeNameGenerator: typeof faker;
  likelySecondaryLanguages: string[];
  guaranteedLanguages: string[];
}

const LANGUAGE_GROUPS: Record<Demographic, LanguageAffinityGroup> = {
  NATIVE_ENGLISH: {
    primaryLanguage: 'English',
    nativeNameGenerator: fakerEN,
    likelySecondaryLanguages: ['French', 'Spanish', 'German'],
    guaranteedLanguages: ['English']
  },
  POLISH: {
    primaryLanguage: 'Polish',
    nativeNameGenerator: fakerPL,
    likelySecondaryLanguages: ['English', 'German'],
    guaranteedLanguages: ['Polish', 'English']
  },
  INDIAN: {
    primaryLanguage: 'Hindi',
    nativeNameGenerator: fakerEN_IN,
    likelySecondaryLanguages: ['English'],
    guaranteedLanguages: ['Hindi', 'English']
  },
  ARABIC: {
    primaryLanguage: 'Arabic',
    nativeNameGenerator: fakerAR,
    likelySecondaryLanguages: ['English', 'French'],
    guaranteedLanguages: ['Arabic', 'English']
  },
  GERMAN: {
    primaryLanguage: 'German',
    nativeNameGenerator: fakerDE,
    likelySecondaryLanguages: ['English', 'French'],
    guaranteedLanguages: ['German', 'English']
  },
  SPANISH: {
    primaryLanguage: 'Spanish',
    nativeNameGenerator: fakerES,
    likelySecondaryLanguages: ['English', 'French', 'Portuguese'],
    guaranteedLanguages: ['Spanish', 'English']
  },
  FRENCH: {
    primaryLanguage: 'French',
    nativeNameGenerator: fakerFR,
    likelySecondaryLanguages: ['English', 'Spanish', 'German'],
    guaranteedLanguages: ['French', 'English']
  }
};

export interface StaffI18nInfo {
  firstName: string;
  lastName: string;
  spokenLanguages: string[];
}

const selectDemographic = (): Demographic => {
  const totalWeight = Object.values(DEMOGRAPHIC_WEIGHTS).reduce((sum, weight) => sum + weight, 0);
  let random = faker.number.float({ min: 0, max: totalWeight });
  
  for (const [demographic, weight] of Object.entries(DEMOGRAPHIC_WEIGHTS)) {
    random -= weight;
    if (random <= 0) {
      return demographic as Demographic;
    }
  }
  
  return 'NATIVE_ENGLISH';
};

export const generateFakeStaffI18nInfo = (): StaffI18nInfo => {
  const demographic = selectDemographic();
  const group = LANGUAGE_GROUPS[demographic];
  
  // Generate name using appropriate faker
  const firstName = group.nativeNameGenerator.person.firstName();
  const lastName = group.nativeNameGenerator.person.lastName();
  
  // Generate languages
  const additionalLanguages = randomFromArray(group.likelySecondaryLanguages, {
    count: { min: 0, max: 1 }
  })
  
  const spokenLanguages = [...new Set([
    ...group.guaranteedLanguages,
    ...additionalLanguages
  ])];
  
  return {
    firstName,
    lastName,
    spokenLanguages
  };
};

// Keep these exports for backward compatibility
export const languages = ['English', 'French', 'Spanish', 'Polish', 'German', 'Hindi', 'Arabic'];
export const generateFakeSpokenLanguages = () => generateFakeStaffI18nInfo().spokenLanguages;
