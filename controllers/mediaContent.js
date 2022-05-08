// const fetch = require('node-fetch');
const path = require('path');
const { Storage } = require('@google-cloud/storage');

const { NotFound } = require('../errors/index');
const {
  PATH_TO_FILE, PROJECT_ID, BUCKET_NAME, NOT_FOUND_MESSAGE,
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

module.exports = { getArrPhotosFromCloud };
