import { apiClient } from './client';
import type {
  paths,
  AppointmentDetails,
  AppointmentCreateRequest, 
  AppointmentUpdateRequest,
} from '../contract/types';

export type AppointmentSearchParams = {
  query?: string;
  status?: string;
  dateFrom?: Date;
  dateTo?: Date;
};

const endpoints = {
  create: '/appointments',
  getById: (id: AppointmentDetails['id']) => `/appointments/${id}`,
  update: (id: AppointmentDetails['id']) => `/appointments/${id}`,
  delete: (id: AppointmentDetails['id']) => `/appointments/${id}`,
  getAll: '/appointments',
  search: '/appointments'
};

export const appointmentService = {
  getAllAppointments: async () => {
    const { data } = await apiClient.get<paths['/appointments']['get']['responses']['200']['content']['application/json']>(endpoints.getAll);
    return data;
  },

  createAppointment: async (appointment: AppointmentCreateRequest) => {
    const { data } = await apiClient.post<paths['/appointments']['post']['responses']['201']['content']['application/json']>(
      endpoints.create,
      appointment
    );
    return data;
  },

  updateAppointment: async (update: AppointmentUpdateRequest) => {
    const { data } = await apiClient.put<paths['/appointments/{appointmentId}']['put']['responses']['200']['content']['application/json']>(
      endpoints.update(update.appointmentId),
      update
    );
    return data;
  },

  getAppointmentDetails: async (appointmentId: string) => {
    const { data } = await apiClient.get<paths['/appointments/{appointmentId}']['get']['responses']['200']['content']['application/json']>(
      endpoints.getById(appointmentId)
    );
    return data;
  },

  searchAppointments: async (params: AppointmentSearchParams) => {
    const { data } = await apiClient.get<paths['/appointments']['get']['responses']['200']['content']['application/json']>(endpoints.search, { params });
    return data;
  },
};
