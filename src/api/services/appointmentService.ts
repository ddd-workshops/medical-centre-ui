import { apiClient } from '../client';
import { components, paths } from '../../contract/types';

type Appointment = components['schemas']['Appointment'];
type AppointmentCreate = components['schemas']['AppointmentCreate'];
type AppointmentUpdate = components['schemas']['AppointmentUpdate'];

const endpoints = {
  create: '/api/appointments',
  update: '/api/appointments/{appointmentId}',
  delete: '/api/appointments/{appointmentId}',
  getAll: '/api/appointments'
};

export const appointmentService = {
  getAllAppointments: async (): Promise<Appointment[]> => {
    const { data } = await apiClient.get<paths['/appointments']['get']['responses']['200']['content']['application/json']>(endpoints.getAll);
    return data;
  },

  createAppointment: async (appointment: AppointmentCreate): Promise<Appointment> => {
    const { data } = await apiClient.post<paths['/appointments']['post']['responses']['201']['content']['application/json']>(
      endpoints.create,
      appointment
    );
    return data;
  },

  updateAppointment: async (update: AppointmentUpdate): Promise<void> => {
    await apiClient.put(
      endpoints.update.replace('{appointmentId}', update.appointmentId),
      update
    );
  },

  deleteAppointment: async (appointmentId: string): Promise<void> => {
    await apiClient.delete(
      endpoints.delete.replace('{appointmentId}', appointmentId)
    );
  },
};