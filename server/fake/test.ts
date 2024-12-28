import chalk from 'chalk';
import { 
  generateFakeSpecialist, 
  generateFakeSpecialty, 
  generateFakeSpecialties,
  DentalSpecialty,
  StaffType 
} from './specialties';
import {
  generateFakeStaffI18nInfo,
  generateFakeSpokenLanguages
} from './staffI18n';

const printSource = (source: string) => {
  console.log(chalk.gray(`[Source: ${source}]`));
};

console.log('\n=== Staff Demographics and Languages ===');
printSource('staffI18n.ts');
console.log('Random Staff Member:');
console.log(generateFakeStaffI18nInfo());

console.log('\nRandom Spoken Languages Only:');
console.log(generateFakeSpokenLanguages());

console.log('\n=== Dental Specialties ===');
printSource('specialties.ts');
console.log('Single Random Specialty:');
console.log(generateFakeSpecialty());

console.log('\nMultiple Random Specialties:');
console.log(generateFakeSpecialties({ min: 2, max: 4 }));

console.log('\nSpecialties with Base Specialty:');
console.log(generateFakeSpecialties({ 
  min: 2, 
  max: 3, 
  baseSpecialty: DentalSpecialty.GENERAL_DENTIST 
}));

console.log('\n=== Staff Roles ===');
printSource('specialties.ts');
console.log('Random Specialist (any type):');
console.log(generateFakeSpecialist());

console.log('\nMedical Specialist:');
console.log(generateFakeSpecialist(StaffType.MEDICAL));

console.log('\nOffice Specialist:');
console.log(generateFakeSpecialist(StaffType.OFFICE));

// Generate a complete staff member example
console.log('\n=== Complete Staff Member Example ===');
printSource('specialties.ts + staffI18n.ts');
const staffMember = generateFakeSpecialist(StaffType.MEDICAL);
const staffI18n = generateFakeStaffI18nInfo();
console.log({
  ...staffMember,
  firstName: staffI18n.firstName,
  lastName: staffI18n.lastName,
  spokenLanguages: staffI18n.spokenLanguages
});
