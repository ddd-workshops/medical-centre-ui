import { apiClient } from './client';
import type { NotificationListItem, Notification } from '../../contract';

const endpoints = {
  getAll: '/notifications',
  getDetails: (id: string) => `/notifications/${id}`,
  markAsRead: (id: string) => `/notifications/${id}/read`,
};

export const getNotifications = async (): Promise<NotificationListItem[]> => {
  const { data } = await apiClient.get(endpoints.getAll);
  return data;
};

export const getNotification = async (id: string): Promise<Notification> => {
  const { data } = await apiClient.get(endpoints.getDetails(id));
  return data;
};

export const markNotificationAsRead = async (id: string): Promise<void> => {
  await apiClient.put(endpoints.markAsRead(id));
};
