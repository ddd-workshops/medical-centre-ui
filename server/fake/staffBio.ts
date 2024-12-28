import { faker } from "@faker-js/faker";
import { randomFromArray } from "./utils";

const specializations = [
  'general dentistry',
  'orthodontics',
  'periodontics',
  'endodontics',
  'pediatric dentistry',
  'oral surgery',
  'prosthodontics',
  'cosmetic dentistry'
] as const;

const experienceAchievements = [
  'Successfully performed over {number} dental implant procedures with exceptional outcomes.',
  'Pioneered the implementation of {technology} at multiple dental practices.',
  'Maintained a {percent}% patient satisfaction rate throughout career.',
  'Recognized for excellence in {specialty} with {award}.',
  'Developed innovative protocols for treating patients with dental anxiety.',
  'Built and led a team of {number} dental professionals in a multi-specialty practice.',
] as const;

const dentalTechnologies = [
  'digital smile design technology',
  '3D printing for surgical guides',
  'CAD/CAM dental restorations',
  'cone beam computed tomography',
  'laser dentistry techniques',
  'intraoral scanning systems'
] as const;

const specialtyAwards = [
  'the Distinguished Dentist Award',
  'the Excellence in Clinical Practice Award',
  'the Dental Innovation Recognition',
  'the Patient Care Excellence Award',
  'the Outstanding Clinician Honor'
] as const;

const philosophyPhrases = [
  'believes in providing personalized care tailored to each patient\'s unique needs.',
  'is committed to ensuring patients feel comfortable and informed throughout their treatment.',
  'focuses on preventive care and patient education.',
  'takes pride in delivering gentle, thorough dental care.',
  'strives to make every dental visit a positive experience.',
  'is passionate about helping patients achieve optimal oral health.',
] as const;

const expertisePhrases = [
  'specializes in treating anxious patients with a calm and reassuring approach.',
  'has extensive experience in complex dental reconstructions.',
  'is known for providing exceptional aesthetic results in cosmetic procedures.',
  'excels in treating pediatric patients with a gentle touch.',
  'has developed expertise in minimally invasive dental techniques.',
] as const;

const additionalSections = {
  'Professional Memberships': [
    'American Dental Association (ADA).',
    'Academy of General Dentistry (AGD).',
    'American Academy of Cosmetic Dentistry (AACD).',
    'International Congress of Oral Implantologists (ICOI).',
  ],
  'Special Training': [
    'Advanced Certification in Invisalign Treatment.',
    'Laser Dentistry Certification.',
    'Advanced Implant Placement Training.',
    'Sedation Dentistry Certification.',
  ],
  'Community Involvement': [
    'Volunteers at local dental health clinics.',
    'Participates in dental education programs in local schools.',
    'Provides pro bono dental care to underserved communities.',
    'Organizes dental health awareness workshops.',
  ],
  'Personal Interests': [
    'Outside the clinic, enjoys hiking and landscape photography as ways to maintain work-life balance.',
    'Passionate about healthy cooking and nutrition education.',
    'Dedicated to yoga and meditation practices that enhance patient care focus.',
    'Actively participates in medical mission trips to underserved communities.',
  ],
} as const;

const generateEducationalBackground = () => {
  const university = `${faker.location.city()} University School of Dental Medicine`;
  const degree = randomFromArray([
    'Doctor of Dental Surgery (DDS)',
    'Doctor of Dental Medicine (DMD)',
    'Doctor of Medical Dentistry (DMD)',
  ]);
  const additionalTraining = randomFromArray([
    `Completed residency in ${randomFromArray(specializations)} at ${faker.location.city()} Medical Center`,
    `Advanced training in ${randomFromArray(specializations)} from ${faker.location.city()} Dental Institute`,
    `Postgraduate certification in ${randomFromArray(specializations)} from ${faker.location.city()} University`,
  ]);

  return `${degree} from ${university}. ${additionalTraining}`;
};

const generateExperience = () => {
  const achievement = randomFromArray(experienceAchievements)
    .replace('{number}', faker.number.int({ min: 500, max: 2000 }).toString())
    .replace('{technology}', randomFromArray(dentalTechnologies))
    .replace('{percent}', faker.number.int({ min: 95, max: 99 }).toString())
    .replace('{specialty}', randomFromArray(specializations))
    .replace('{award}', randomFromArray(specialtyAwards));

  const secondAchievement = randomFromArray(
    experienceAchievements.filter(a => a !== achievement)
  )
    .replace('{number}', faker.number.int({ min: 10, max: 30 }).toString())
    .replace('{technology}', randomFromArray(dentalTechnologies))
    .replace('{percent}', faker.number.int({ min: 95, max: 99 }).toString())
    .replace('{specialty}', randomFromArray(specializations))
    .replace('{award}', randomFromArray(specialtyAwards));

  return `${achievement} ${secondAchievement}`;
};

export const generateFakeDoctorBioAndAdditionalInformation = () => {
  const specialization = randomFromArray(specializations);
  const philosophy = randomFromArray(philosophyPhrases);
  const expertise = randomFromArray(expertisePhrases);
  
  const bio = [
    `A dedicated ${specialization} specialist who ${generateExperience()}.`,
    philosophy,
    expertise,
  ].join(' ');

  // Select 3-4 random additional information sections
  const sectionKeys = Object.keys(additionalSections) as Array<keyof typeof additionalSections>;
  const selectedSections = randomFromArray(sectionKeys, { count: faker.number.int({ min: 3, max: 4 }) });

  const additionalInformation = [
    { heading: 'Education', text: generateEducationalBackground() },
    { heading: 'Experience', text: generateExperience() },
    ...selectedSections.map(section => ({
      heading: section,
      text: randomFromArray(additionalSections[section])
    }))
  ];

  return { bio, additionalInformation };
};
