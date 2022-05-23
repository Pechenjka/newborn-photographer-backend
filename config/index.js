const {
  MONGO_URL = 'mongodb://localhost:27017/newBorndb',
  PORT = 3005,
  PASSWORD_EMAIL_ACCOUNT,
  EMAIL_ACCOUNT,
} = process.env;

module.exports = {
  PORT, PASSWORD_EMAIL_ACCOUNT, EMAIL_ACCOUNT, MONGO_URL,
};
