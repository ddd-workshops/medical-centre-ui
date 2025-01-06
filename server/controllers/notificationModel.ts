import { Notification } from "../contract/types";

export const notificationWithoutContent = (notification: Notification): Omit<Notification, 'content'> => {
  const { content, ...rest } = notification
  return rest;
}
