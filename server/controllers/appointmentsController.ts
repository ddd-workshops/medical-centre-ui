import { Router } from 'express';
import type { Request, Response } from 'express';

import { fakeAppointmentDetails, generateFakeAppointmentsBrief } from '../fake/appointments';
import { AppointmentDetails } from '../contract/types';

export const appointmentsRouter = Router();

appointmentsRouter.get('/', (req: Request, res: Response) => {
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

appointmentsRouter.get('/:id', (req: Request, res: Response) => {
  const appointment = fakeAppointmentDetails.find(a => a.id === req.params.id);
  if (!appointment) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  res.json(appointment);
});

appointmentsRouter.post('/', (req: Request, res: Response) => {
  const appointment: AppointmentDetails = {
    id: Date.now().toString(),
    ...req.body,
    status: 'scheduled'
  };
  fakeAppointmentDetails.push(appointment);
  res.status(201).json(appointment);
});

appointmentsRouter.put('/:id', (req: Request, res: Response) => {
  const index = fakeAppointmentDetails.findIndex(a => a.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  const newAppointment = { ...fakeAppointmentDetails[index], ...req.body };
  fakeAppointmentDetails[index] = newAppointment;
  res.json(newAppointment);
});

appointmentsRouter.delete('/:id', (req: Request, res: Response) => {
  const index = fakeAppointmentDetails.findIndex(a => a.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  fakeAppointmentDetails.splice(index, 1);
  res.status(204).send();
});