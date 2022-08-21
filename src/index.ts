import config from 'config';
import http from 'http';

import app from './app';
import logger from './utils/logger';
import mongodb from './utils/mongodb';

mongodb.connect();

const applicationConfig: any = config.get('application');

const port = applicationConfig.get('port');

app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('listening', () => logger.info(`Listening on port ${port}`));
