import { apiClient } from './client';
import type { paths, Notification } from '../contract/types';

const endpoints = {
  getAll: '/notifications',
  getDetails: (id: Notification['id']) => `/notifications/${id}`,
  markAsRead: (id: Notification['id']) => `/notifications/${id}/read`,
};

export const getNotifications = async () => {
  const { data } = await apiClient.get<paths['/notifications']['get']['responses']['200']['content']['application/json']>(
    endpoints.getAll
  );
  return data;
};

export const getNotification = async (id: string) => {
  const { data } = await apiClient.get<paths['/notifications/{notificationId}']['get']['responses']['200']['content']['application/json']>(
    endpoints.getDetails(id)
  );
  return data;
};

export const markNotificationAsRead = async (id: string) => {
  await apiClient.put<paths['/notifications/{notificationId}/read']['put']['responses']['204']['content']['application/json']>(
    endpoints.markAsRead(id)
  );
};
