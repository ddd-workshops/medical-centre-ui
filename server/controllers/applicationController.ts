import { Router } from 'express';
import type { Request, Response } from 'express';

import type { AppStatus, paths } from '../contract/types';
import { inMemoryDB } from '../in-memory/db';

export const applicationRouter = Router();

applicationRouter.get('/status', (
  _req: Request,
  res: Response<paths['/app/status']['get']['responses']['200']['content']['application/json']>
) => {
  const appStatus: AppStatus = {
    unreadNotificationsCount: inMemoryDB.notifications.filter(n => !n.read).length,
  };
  
  res.json(appStatus);
});
