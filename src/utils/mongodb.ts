import config from 'config';
import mongoose from 'mongoose';
import logger from './logger';

const mongodbConfig: any = config.get('mongodb');

function connect(): Promise<mongoose.Mongoose> {
  mongoose.connection.on('connected', () => {
    logger.info('MongoDB connected');
  });
  mongoose.connection.on('disconnected', () => {
    logger.info('MongoDB disconnected');
  });
  mongoose.connection.on('error', (error) => {
    logger.error(`Failed to connect to MongoDB: ${error}`);
  });

  logger.info('Connecting on MongoDB');
  return mongoose.connect(mongodbConfig.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions);
}

export default { connect };
