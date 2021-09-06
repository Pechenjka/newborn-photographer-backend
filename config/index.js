const {
  PORT = 3002,
  MONGO_URL = 'mongodb://localhost:27017/newbornPhotographerdb',
  TOKEN_INSTAGRAM_PROFILE,
  PATH_TO_FILE,
  PROJECT_ID,
  BUCKET_NAME,
} = process.env;

module.exports = {
  PORT, MONGO_URL, TOKEN_INSTAGRAM_PROFILE, PATH_TO_FILE, PROJECT_ID, BUCKET_NAME,
};
