import config from '../../../config';

const redis = config.tokenStoreType === 'redis' ? require('redis') : null;

let RedisClient: any = null;

if (config.tokenStoreType === 'redis') {
  RedisClient = redis.createClient(config.db.redisPort, config.db.redisHost, {
    password: config.db.redisPassword,
    db: config.db.redisDb,
  });

  RedisClient.on("connect", () => {
    console.log("Connected to Redis");
  });

  RedisClient.on("error", (error) => {
     console.log('Connected: ', error);
  });
}

export default RedisClient;
