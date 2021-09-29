const fetch = require('node-fetch');
const path = require('path');
const { Storage } = require('@google-cloud/storage');
const { UNAUTHORIZED_MESSAGE, BAD_REQUEST_MESSAGE } = require('../utils/constants');
const { Unauthorized, NotFound, BadRequest } = require('../errors/index');
const {
  TOKEN_INSTAGRAM_PROFILE, PATH_TO_FILE, PROJECT_ID, BUCKET_NAME, NOT_FOUND_MESSAGE,
} = require('../config');

// Получение фотографий из сетевого хранилища
const storage = new Storage({
  keyFilename: path.join(__dirname, PATH_TO_FILE),
  projectId: PROJECT_ID,
});

const bucket = storage.bucket(BUCKET_NAME);

async function getFilesFromBucket() {
  const [files] = await bucket.getFiles({ prefix: 'gallery' });
  return files.filter((item) => {
    if (item.metadata.metadata) {
      return item.metadata;
    }
    return null;
  });
}

const getArrPhotosFromCloud = (req, res, next) => {
  const promise = new Promise(((resolve) => {
    resolve(getFilesFromBucket());
  }));
  promise
    .then((data) => data.map((item) => item.metadata))
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      if (err.code === 404) {
        throw new NotFound(NOT_FOUND_MESSAGE.NOT_FOUND_BACKET);
      }
      next(err);
    })
    .catch(next);
};

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(new Error(res.status)));

// Получение медиаконтента профиля instagram
const basUrlInstagramProfile = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,username,permalink&access_token=${TOKEN_INSTAGRAM_PROFILE}`;

const getInstagramProfile = (req, res, next) => fetch(basUrlInstagramProfile, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(checkResponse)
  .then((data) => res.status(200).send(data))
  .catch((err) => {
    if (err.message === '400') {
      throw new BadRequest(BAD_REQUEST_MESSAGE.INCORRECT_REQUEST);
    }
    if (err.message === '401') {
      throw new Unauthorized(UNAUTHORIZED_MESSAGE);
    }
    next(err);
  })
  .catch(next);

module.exports = { getInstagramProfile, getArrPhotosFromCloud };
