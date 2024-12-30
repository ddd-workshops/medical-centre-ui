import { Response } from 'express';
import chalk from "chalk";
import morgan from 'morgan';

export const logger = {
    debug(...messages: unknown[]) {
        console.log(chalk.gray('[DEBUG]', ...messages));
    },
    info(...messages: unknown[]) {
        console.log(chalk.cyan('[INFO]', ...messages));
    },
    warn(...messages: unknown[]) {
        console.log(chalk.yellow('[WARN]', ...messages));
    },
    error(...messages: unknown[]) {
        console.log(chalk.red('[ERROR]', ...messages));
    }
}

// Configure morgan with chalk colors
morgan.token('statusColor', (req, res: Response) => {
  const status = res.statusCode;
  if (status >= 500) return chalk.red(status);
  if (status >= 400) return chalk.yellow(status);
  if (status >= 300) return chalk.cyan(status);
  if (status >= 200) return chalk.green(status);
  return chalk.grey(status);
});

export const morganMiddleware = morgan(':statusColor :method :url :response-time ms');
