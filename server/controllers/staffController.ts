import { Router } from 'express';
import type { Request, Response } from 'express';
import type { ErrorResponse, paths } from '../contract/types';

import { logger } from '../logger';
import { inMemoryDB } from '../in-memory/db';
import { clinicDetailsToBrief } from './clinicModel';

import { fakeLanguages } from '../fake/languages';
import { specialties } from '../fake/specialties';
import { doctorCanonicalModelToBrief, doctorCanonicalModelToProfile } from './staffModel';

export const staffRouter = Router();

type StaffListQuery = paths['/staff']['get']['parameters']['query'];
type StaffListResponse = paths['/staff']['get']['responses']['200']['content']['application/json'];

staffRouter.get('/', (
  req: Request<object, StaffListResponse, object, StaffListQuery>,
  res: Response<StaffListResponse | ErrorResponse>
) => {
  if (!req.query || Object.keys(req.query).length === 0) {
    const result = inMemoryDB.doctors
      .map(doctorCanonicalModelToBrief);
    return res.json(result);
  }

  const { name, specialties, locations, languages } = req.query;

  if (typeof name !== 'string' && typeof name !== 'undefined') {
    logger.error('Invalid query parameters', req.query);
    return res.status(400).send({ message: 'Invalid query parameters' });
  }

  let filteredDoctors = inMemoryDB.doctors;

  if (name) {
    const searchTerm = name.toLowerCase();
    filteredDoctors = filteredDoctors.filter(doctor => 
      doctor.firstName.toLowerCase().includes(searchTerm) ||
      doctor.lastName.toLowerCase().includes(searchTerm)
    );
  }

  // TODO
  // if (specialties?.length) {
  //   filteredDoctors = filteredDoctors.filter(doctor =>
  //     doctor.specialties.some(specialty => 
  //       specialties.includes(specialty.code)
  //     )
  //   );
  // }

  // if (locations?.length) {
  //   filteredDoctors = filteredDoctors.filter(doctor =>
  //     doctor.locations.some(location => 
  //       locations.includes(location.id)
  //     )
  //   );
  // }

  // if (languages?.length) {
  //   filteredDoctors = filteredDoctors.filter(doctor =>
  //     doctor.languagesSpoken.some(lang => 
  //       languages.includes(lang.code)
  //     )
  //   );
  // }
  
  const result = filteredDoctors.map(doctorCanonicalModelToBrief);
  res.json(result);
});

type StaffItemParams = paths['/staff/{doctorId}']['get']['parameters']['path'];
type StaffItemResponse = paths['/staff/{doctorId}']['get']['responses']['200']['content']['application/json'];

staffRouter.get('/:doctorId', (
  req: Request<StaffItemParams, StaffItemResponse, never>,
  res: Response<StaffItemResponse | ErrorResponse>
) => {  
  const staff = inMemoryDB.doctors
    .map(doctorCanonicalModelToProfile)
    .find(d => d.id === Number(req.params.doctorId));
  if (staff) {
    res.json(staff);
  } else {
    res.status(404).send({ message: 'Staff not found' });
  }
});

type SearchbarResponse = paths['/staff/searchbar']['get']['responses']['200']['content']['application/json'];

staffRouter.get('/searchbar', (
  _req: Request,
  res: Response<SearchbarResponse>
) => {
  res.json({
    languages: fakeLanguages,
    specialties,
    locations: inMemoryDB.clinics.map(clinicDetailsToBrief),
  });
});

