import { Router } from 'express';
import type { Request, Response } from 'express';

import { fakeNotifications } from '../fake/db';
import { paths, ErrorResponse } from '../contract/types';

export const notificationsRouter = Router();

// Get all notifications (without content)
notificationsRouter.get('/', (
  _req: Request,
  res: Response<paths['/notifications']['get']['responses']['200']['content']['application/json']>
) => {
  const listItems = fakeNotifications.map(({ content, ...item }) => item);
  res.json(listItems);
});

// Get single notification
notificationsRouter.get('/:notificationId', (
  req: Request<paths['/notifications/{notificationId}']['get']['parameters']['path']>,
  res: Response<paths['/notifications/{notificationId}']['get']['responses']['200']['content']['application/json'] | ErrorResponse>
) => {
  const notification = fakeNotifications.find(n => n.id === req.params.notificationId);
  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  res.json(notification);
});

// Mark as read
notificationsRouter.put('/:notificationId/read', (
  req: Request<paths['/notifications/{notificationId}/read']['put']['parameters']['path']>,
  res: Response
) => {
  const notification = fakeNotifications.find(n => n.id === req.params.notificationId);
  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  notification.read = true;
  res.status(204).send();
});
