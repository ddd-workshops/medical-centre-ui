import { Router } from 'express';
import type { Request, Response } from 'express';
import { generateFakeAppointments } from '../utils/fakeData';

// Types
export type Appointment = {
  id: string;
  patientId: string;
  doctorName: string;
  date: string;
  status: 'scheduled' | 'completed' | 'cancelled';
};

// In-memory storage with initial fake data
const appointments: Appointment[] = generateFakeAppointments();

// Router
export const appointmentsRouter = Router();

appointmentsRouter.get('/', (_req: Request, res: Response) => {
  res.json(appointments);
});

appointmentsRouter.get('/:id', (req: Request, res: Response) => {
  const appointment = appointments.find(a => a.id === req.params.id);
  if (!appointment) {
    return res.status(404).json({ message: 'Appointment not found' });
  }
  res.json(appointment);
});

appointmentsRouter.post('/', (req: Request, res: Response) => {
  const appointment: Appointment = {
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