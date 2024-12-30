import { faker, fakerAR, fakerDE, fakerEN, fakerEN_IN, fakerES, fakerFR, fakerPL } from "@faker-js/faker";
import { randomFromArray } from "./utils";
import { LanguageInternalLiteral, fakeLanguages } from "./languages";

// Represents rough demographics of UK healthcare workers
const DEMOGRAPHIC_WEIGHTS: Record<LanguageInternalLiteral, number> = {
  ENGLISH: 65,  // UK native
  POLISH: 8,    // Large EU migrant group
  HINDI: 7,     // Significant healthcare workforce
  ARABIC: 5,    // Middle Eastern representation
  GERMAN: 5,    // EU representation
  SPANISH: 5,   // EU representation
  FRENCH: 5,    // EU representation
};

interface LanguageAffinityGroup {
  primaryLanguage: LanguageInternalLiteral;
  nativeNameGenerator: typeof faker;
  likelySecondaryLanguages: LanguageInternalLiteral[];
  guaranteedLanguages: LanguageInternalLiteral[];
}

const LANGUAGE_GROUPS: Record<LanguageInternalLiteral, LanguageAffinityGroup> = {
  ENGLISH: {
    primaryLanguage: 'ENGLISH',
    nativeNameGenerator: fakerEN,
    likelySecondaryLanguages: ['FRENCH', 'SPANISH', 'GERMAN'],
    guaranteedLanguages: ['ENGLISH']
  },
  POLISH: {
    primaryLanguage: 'POLISH',
    nativeNameGenerator: fakerPL,
    likelySecondaryLanguages: ['ENGLISH', 'GERMAN'],
    guaranteedLanguages: ['POLISH', 'ENGLISH']
  },
  HINDI: {
    primaryLanguage: 'HINDI',
    nativeNameGenerator: fakerEN_IN,
    likelySecondaryLanguages: ['ENGLISH'],
    guaranteedLanguages: ['HINDI', 'ENGLISH']
  },
  ARABIC: {
    primaryLanguage: 'ARABIC',
    nativeNameGenerator: fakerAR,
    likelySecondaryLanguages: ['ENGLISH', 'FRENCH'],
    guaranteedLanguages: ['ARABIC', 'ENGLISH']
  },
  GERMAN: {
    primaryLanguage: 'GERMAN',
    nativeNameGenerator: fakerDE,
    likelySecondaryLanguages: ['ENGLISH', 'FRENCH'],
    guaranteedLanguages: ['GERMAN', 'ENGLISH']
  },
  SPANISH: {
    primaryLanguage: 'SPANISH',
    nativeNameGenerator: fakerES,
    likelySecondaryLanguages: ['ENGLISH', 'FRENCH'],
    guaranteedLanguages: ['SPANISH', 'ENGLISH']
  },
  FRENCH: {
    primaryLanguage: 'FRENCH',
    nativeNameGenerator: fakerFR,
    likelySecondaryLanguages: ['ENGLISH', 'SPANISH', 'GERMAN'],
    guaranteedLanguages: ['FRENCH', 'ENGLISH']
  }
};

export interface StaffI18nInfo {
  firstName: string;
  lastName: string;
  spokenLanguages: string[];
}

const selectDemographic = (): LanguageInternalLiteral => {
  const totalWeight = Object.values(DEMOGRAPHIC_WEIGHTS).reduce((sum, weight) => sum + weight, 0);
  let random = faker.number.float({ min: 0, max: totalWeight });
  
  for (const [demographic, weight] of Object.entries(DEMOGRAPHIC_WEIGHTS)) {
    random -= weight;
    if (random <= 0) {
      return demographic as LanguageInternalLiteral;
    }
  }
  
  return 'ENGLISH';
};

const languageMap = {
  ENGLISH: 'English',
  POLISH: 'Polish',
  HINDI: 'Hindi',
  ARABIC: 'Arabic',
  GERMAN: 'German',
  SPANISH: 'Spanish',
  FRENCH: 'French',
} as const;

export const generateFakeStaffI18nInfo = (): StaffI18nInfo => {
  const demographic = selectDemographic();
  const group = LANGUAGE_GROUPS[demographic];
  
  const firstName = group.nativeNameGenerator.person.firstName();
  const lastName = group.nativeNameGenerator.person.lastName();
  
  const additionalLanguages = randomFromArray(group.likelySecondaryLanguages, {
    count: { min: 0, max: 1 }
  });
  
  const spokenLanguages = [...new Set([
    ...group.guaranteedLanguages,
    ...additionalLanguages
  ])].map(lang => languageMap[lang]);
  
  return {
    firstName,
    lastName,
    spokenLanguages
  };
};

// Keep these exports for backward compatibility
export const generateFakeSpokenLanguages = () => generateFakeStaffI18nInfo().spokenLanguages;
