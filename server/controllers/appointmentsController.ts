import { Router } from 'express';
import type { Request, Response } from 'express';

import { generateFakeAppointments, generateFakeAppointmentsBrief } from '../fake/appointments';
import { AppointmentDetails } from '../contract/types';

const appointments: AppointmentDetails[] = generateFakeAppointments();

export const appointmentsRouter = Router();

appointmentsRouter.get('/', (req: Request, res: Response) => {
  let filtered = [...appointments];

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

  res.json(generateFakeAppointmentsBrief(filtered));
});

appointmentsRouter.get('/:id', (req: Request, res: Response) => {
  const appointment = appointments.find(a => a.id === req.params.id);
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
  appointments.push(appointment);
  res.status(201).json(appointment);
});

appointmentsRouter.put('/:id', (req: Request, res: Response) => {
  const index = appointments.findIndex(a => a.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  appointments[index] = { ...appointments[index], ...req.body };
  res.json(appointments[index]);
});

appointmentsRouter.delete('/:id', (req: Request, res: Response) => {
  const index = appointments.findIndex(a => a.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  appointments.splice(index, 1);
  res.status(204).send();
});