const {
  PORT = 3002,
  MONGO_URL = 'mongodb://localhost:27017/newbornPhotographerdb',
} = process.env;

module.exports = { PORT, MONGO_URL };
