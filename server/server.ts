import express from 'express';
import cors from 'cors';

import chalk from 'chalk';

import { logger, morganMiddleware } from './logger';

logger.debug('Configuring middlewares...');
import { cmsRouter } from './controllers/cmsController';
import { authRouter } from './controllers/authController';
import { appointmentsRouter } from './controllers/appointmentsController';
import { applicationRouter } from './controllers/applicationController';
import { notificationsRouter } from './controllers/notificationsController';
import { patientRouter } from './controllers/patientController';
import { treatmentsRouter } from './controllers/treatmentsController';
import { clinicsRouter } from './controllers/clinicController';
import { staffRouter } from './controllers/staffController';

logger.debug('Creating express...');

const app = express();
const port = process.env.PORT || 3001;

logger.debug('Configuring logger...');
app.use(morganMiddleware);

logger.debug('Configuring middlewares...');

// Middleware
app.use(cors());
app.use(express.json());

logger.debug('Configuring routes...');

// Add basic health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(chalk.red('Error:'), err);
  res.status(500).json({ error: 'Internal server error' });
});

// Routes
app.use('/api/auth', authRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/cms', cmsRouter);
app.use('/api/app', applicationRouter);
app.use('/api/patient', patientRouter);
app.use('/api/treatments', treatmentsRouter);
app.use('/api/clinics', clinicsRouter);
app.use('/api/staff', staffRouter);

logger.debug('Starting server...');

// Create server instance separately to handle it properly
const server = app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
}).on('error', (error) => {
  logger.error('Failed to start server:', error);
  process.exit(1);
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  logger.error('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(chalk.red('Unhandled Rejection at:'), promise, chalk.red('reason:'), reason);
  // Optionally terminate the process
  // process.exit(1);
});
