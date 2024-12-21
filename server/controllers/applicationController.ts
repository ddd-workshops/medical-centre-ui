import { Router } from 'express';

import type { AppStatus } from '../contract/types';
import { notifications } from '../fake/db';

export const applicationRouter = Router();

applicationRouter.get('/status', (req, res) => {
  const appStatus: AppStatus = {
    unreadNotificationsCount: notifications.filter(n => !n.read).length,
  };
  
  res.json(appStatus);
});
