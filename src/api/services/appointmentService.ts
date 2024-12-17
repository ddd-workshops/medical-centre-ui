import { apiClient } from './client';
import type { 
  Appointment, 
  AppointmentCreate, 
  AppointmentUpdate,
  GetAppointmentsResponse,
  CreateAppointmentResponse,
  GetAppointmentByIdResponse
} from '../../contract';

const endpoints = {
  create: '/appointments',
  getById: (id: string) => `/appointments/${id}`,
  update: (id: string) => `/appointments/${id}`,
  delete: (id: string) => `/appointments/${id}`,
  getAll: '/appointments'
};

export const appointmentService = {
  getAllAppointments: async (): Promise<Appointment[]> => {
    const { data } = await apiClient.get<GetAppointmentsResponse>(endpoints.getAll);
    return data;
  },

  createAppointment: async (appointment: AppointmentCreate): Promise<Appointment> => {
    const { data } = await apiClient.post<CreateAppointmentResponse>(
      endpoints.create,
      appointment
    );
    return data;
  },

  updateAppointment: async (update: AppointmentUpdate): Promise<void> => {
    await apiClient.put(
      endpoints.update(update.appointmentId),
      update
    );
  },

  deleteAppointment: async (appointmentId: string): Promise<void> => {
    await apiClient.delete(
      endpoints.delete(appointmentId)
    );
  },

  getAppointmentById: async (appointmentId: string): Promise<Appointment> => {
    const { data } = await apiClient.get<GetAppointmentByIdResponse>(
      endpoints.getById(appointmentId)
    );
    return data;
  },
};