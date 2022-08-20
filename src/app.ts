import config from 'config';
import cors from 'cors';
import express from 'express';
import * as expressWinston from 'express-winston';
import helmet from 'helmet';
import createError from 'http-errors';

import logger from './utils/logger';
import mongodb from './utils/mongodb';
import routes from './routes';

mongodb.connect();

const app = express();

app.use(expressWinston.logger({ winstonInstance: logger }));
app.use(express.json());

app.use(cors(config.get('cors')));
app.use(helmet(config.get('helmet')));

app.use('/', routes);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  next(createError(404));
});

// eslint-disable-next-line no-unused-vars
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).send();
});

export default app;
