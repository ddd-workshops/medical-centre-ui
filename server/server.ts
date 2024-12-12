import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { appointmentsRouter } from './routes/appointments';

const app = express();
const port = process.env.PORT || 3001;

// Configure morgan with colors
morgan.token('statusColor', (req, res: express.Response) => {
  const status = res.statusCode;
  if (status >= 500) return '\x1b[31m'; // red
  if (status >= 400) return '\x1b[33m'; // yellow
  if (status >= 300) return '\x1b[36m'; // cyan
  if (status >= 200) return '\x1b[32m'; // green
  return '\x1b[0m'; // reset
});

app.use(morgan(':statusColor:status \x1b[0m:method :url :response-time ms'));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/appointments', appointmentsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});