import { apiClient } from './client';
import type { 
  AppointmentDetails, 
  AppointmentBrief,
  AppointmentCreateRequest, 
  AppointmentUpdateRequest,
  GetAppointmentsResponse,
  CreateAppointmentResponse,
  GetAppointmentByIdResponse,
} from '../contract/types';

export type AppointmentSearchParams = {
  query?: string;
  status?: string;
  dateFrom?: Date;
  dateTo?: Date;
};

const endpoints = {
  create: '/appointments',
  getById: (id: string) => `/appointments/${id}`,
  update: (id: string) => `/appointments/${id}`,
  delete: (id: string) => `/appointments/${id}`,
  getAll: '/appointments',
  search: '/appointments'
};

export const appointmentService = {
  getAllAppointments: async (): Promise<AppointmentBrief[]> => {
    const { data } = await apiClient.get<GetAppointmentsResponse>(endpoints.getAll);
    return data;
  },

  createAppointment: async (appointment: AppointmentCreateRequest): Promise<AppointmentDetails> => {
    const { data } = await apiClient.post<CreateAppointmentResponse>(
      endpoints.create,
      appointment
    );
    return data;
  },

  updateAppointment: async (update: AppointmentUpdateRequest): Promise<void> => {
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

  getAppointmentDetails: async (appointmentId: string): Promise<AppointmentDetails> => {
    const { data } = await apiClient.get<GetAppointmentByIdResponse>(
      endpoints.getById(appointmentId)
    );
    return data;
  },

  searchAppointments: async (params: AppointmentSearchParams): Promise<AppointmentBrief[]> => {
    const { data } = await apiClient.get<GetAppointmentsResponse>(endpoints.search, { params });
    return data;
  },
};
