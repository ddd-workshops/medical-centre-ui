import { Language } from "../contract/types";

export type LanguageInternalLiteral = 
  | 'ENGLISH'
  | 'POLISH'
  | 'HINDI'
  | 'ARABIC'
  | 'GERMAN'
  | 'SPANISH'
  | 'FRENCH';

export const fakeLanguages: Language[] = [
  { code: 'en', englishName: 'English', nativeName: 'English' },
  { code: 'pl', englishName: 'Polish', nativeName: 'polski' },
  { code: 'es', englishName: 'Spanish', nativeName: 'español' },
  { code: 'de', englishName: 'German', nativeName: 'Deutsch' },
  { code: 'fr', englishName: 'French', nativeName: 'français' },
  { code: 'hi', englishName: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ar', englishName: 'Arabic', nativeName: 'العربية' },
];
