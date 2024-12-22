import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import chalk from 'chalk';

import { appointmentsRouter } from './controllers/appointmentsController';
import { notificationsRouter } from './controllers/notificationsController';
import { cmsRouter } from './controllers/cmsController';
import { authRouter } from './controllers/authController';
import { applicationRouter } from './controllers/applicationController';
import { patientRouter } from './controllers/patientController';
import { treatmentsRouter } from './controllers/treatmentsController';

const app = express();
const port = process.env.PORT || 3001;

// Configure morgan with chalk colors
morgan.token('statusColor', (req, res: express.Response) => {
  const status = res.statusCode;
  if (status >= 500) return chalk.red(status);
  if (status >= 400) return chalk.yellow(status);
  if (status >= 300) return chalk.cyan(status);
  if (status >= 200) return chalk.green(status);
  return chalk.grey(status);
});

app.use(morgan(':statusColor :method :url :response-time ms'));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/cms', cmsRouter);
app.use('/api/app', applicationRouter);
app.use('/api/patient', patientRouter);
app.use('/api/treatments', treatmentsRouter);

app.listen(port, () => {
  console.log(chalk.green(`Server is running on port ${port}`));
});
