import { Router } from 'express';
import type { Request, Response } from 'express';

import { AppointmentDetails, AppointmentUpdateRequest, ErrorResponse, paths } from '../contract/types';
import { fakeAppointmentDetails, generateFakeAppointmentsBrief } from '../fake/appointments';
import { inMemoryDB } from '../in-memory/db';
import { clinicDetailsToBrief } from './clinicModel';

import { fakePatientBriefs } from '../fake/patient';
import { fakeServiceTypes } from '../fake/services';
import { doctorCanonicalModelToBrief } from './staffModel';

export const appointmentsRouter = Router();

appointmentsRouter.get('/', (
  req: Request<paths['/appointments']['get']['parameters']['query']>,
  res: Response<paths['/appointments']['get']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  let filtered = [...fakeAppointmentDetails];

  // Filter by search query
  if (req.query.query) {
    const query = (req.query.query as string).toLowerCase();
    filtered = filtered.filter(appointment => 
      appointment.patient.fullName.toLowerCase().includes(query) ||
      appointment.doctor.fullName.toLowerCase().includes(query) ||
      appointment.serviceType.name.toLowerCase().includes(query) ||
      appointment.prescriptions?.some(p => p.toLowerCase().includes(query))
    );
  }

  // Filter by status
  if (req.query.status) {
    filtered = filtered.filter(appointment => 
      appointment.status === req.query.status
    );
  }

  // Filter by date range
  if (req.query.dateFrom) {
    const dateFrom = new Date(req.query.dateFrom as string);
    filtered = filtered.filter(appointment => 
      new Date(appointment.datetime) >= dateFrom
    );
  }

  if (req.query.dateTo) {
    const dateTo = new Date(req.query.dateTo as string);
    filtered = filtered.filter(appointment => 
      new Date(appointment.datetime) <= dateTo
    );
  }
  
  const result = filtered.map(generateFakeAppointmentsBrief)
  res.json(result);
});

appointmentsRouter.get('/:appointmentId', (
  req: Request<paths['/appointments/{appointmentId}']['get']['parameters']['path']>,
  res: Response<paths['/appointments/{appointmentId}']['get']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  const appointment = fakeAppointmentDetails.find(a => a.id === req.params.appointmentId);
  if (!appointment) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  res.json(appointment);
});

appointmentsRouter.post('/', (
  req: Request<object, object, paths['/appointments']['post']['requestBody']['content']['application/json']>,
  res: Response<paths['/appointments']['post']['responses']['201']['content']['application/json'] | ErrorResponse>
) => {
  const { patientId, doctorId, serviceTypeId, locationId, datetime } = req.body;

  // Find patient
  const patient = fakePatientBriefs.find(p => p.id === patientId);
  if (!patient) {
    return res.status(404).json({ message: 'Patient not found' });
  }

  // Find doctor
  const doctor = inMemoryDB.doctors.find(d => d.id.toString() === doctorId);
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }
  const doctorBrief = doctorCanonicalModelToBrief(doctor);

  // Get doctor's primary location or first available
  const clinicDetails = inMemoryDB.clinics.find(c => c.id.toString() === locationId);
  if (!clinicDetails) {
    return res.status(400).json({ message: 'Location not found' });
  }

  // Find service type
  const serviceType = fakeServiceTypes.find(s => s.id === serviceTypeId);
  if (!serviceType) {
    return res.status(404).json({ message: 'Service type not found' });
  }

  // Create appointment with all required data
  const appointment: AppointmentDetails = {
    id: Date.now().toString(),
    patient,
    doctor: doctorBrief,
    serviceType,
    location: clinicDetailsToBrief(clinicDetails),
    datetime,
    status: 'SCHEDULED',
    prescriptions: [],
    billing: {
      amount: 0,
      status: 'PENDING'
    }
  };

  fakeAppointmentDetails.push(appointment);
  res.status(201).json(appointment);
});

appointmentsRouter.put('/:appointmentId', (
  req: Request<paths['/appointments/{appointmentId}']['put']['parameters']['path'], object, AppointmentUpdateRequest>,
  res: Response<paths['/appointments/{appointmentId}']['put']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  const index = fakeAppointmentDetails.findIndex(a => a.id === req.params.appointmentId);
  if (index === -1) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  const newAppointment = { ...fakeAppointmentDetails[index], ...req.body };
  fakeAppointmentDetails[index] = newAppointment;
  res.json(newAppointment);
});
