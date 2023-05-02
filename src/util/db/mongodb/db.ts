//import mongoose from 'mongoose';
import config from '../../../config';

const mongoose =
  config.tokenStoreType === 'mongodb' ? require('mongoose') : null;

if (config.tokenStoreType === 'mongodb') {
  mongoose.Promise = global.Promise;
  const userAndPassword = config.db.mongodbUser && config.db.mongodbPassword ? `${config.db.mongodbUser}:${config.db.mongodbPassword}@` : '';

  if (!config.db.mongoIsRemote) {
    mongoose.connect(
      `mongodb://${userAndPassword}${config.db.mongodbHost}:${config.db.mongodbPort}/${config.db.mongodbDatabase}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } else {
    mongoose.connect(config.db.mongoURLRemote, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Listen for the 'connected' event
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected');
    });

    // Listen for the 'error' event
    mongoose.connection.on('error', (err) => {
      console.log('Mongoose connection error:', err);
    });

    // Listen for the 'disconnected' event
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected');
    });

  }
}

export default mongoose;
