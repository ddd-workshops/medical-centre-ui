import { Router } from 'express';

import type { AppStatus } from '../contract/types';
import { fakeNotifications } from '../fake/db';

export const applicationRouter = Router();

applicationRouter.get('/status', (req, res) => {
  const appStatus: AppStatus = {
    unreadNotificationsCount: fakeNotifications.filter(n => !n.read).length,
  };
  
  res.json(appStatus);
});
