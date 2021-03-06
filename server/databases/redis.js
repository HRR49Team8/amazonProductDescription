const { promisifyAll } = require('bluebird');

const redis = require('redis');

promisifyAll(redis);

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

module.exports = client;
