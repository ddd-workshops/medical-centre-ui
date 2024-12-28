import express from 'express';
import { fakeNotifications } from '../fake/db';

export const notificationsRouter = express.Router();

// Get all notifications (without content)
notificationsRouter.get('/', (req, res) => {
  const listItems = fakeNotifications.map(({ content, ...item }) => item);
  res.json(listItems);
});

// Get single notification
notificationsRouter.get('/:id', (req, res) => {
  const notification = fakeNotifications.find(n => n.id === req.params.id);
  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  res.json(notification);
});

// Mark as read
notificationsRouter.put('/:id/read', (req, res) => {
  const notification = fakeNotifications.find(n => n.id === req.params.id);
  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  notification.read = true;
  res.status(204).send();
});
