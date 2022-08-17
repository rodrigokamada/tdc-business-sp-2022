import config from 'config';
import { createLogger, format, transports } from 'winston';

const loggerConfig = config.get('logger');

const logger = createLogger({
  level: loggerConfig.level,
  format: format.simple(),
  transports: [
    new transports.Console(),
  ],
});

export default logger;
