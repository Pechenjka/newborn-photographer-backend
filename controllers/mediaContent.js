const Photo = require('../models/photo');
const { NotFound } = require('../errors/index');
const { NOT_FOUND_MESSAGE } = require('../config');

const createPhoto = (req, res, next) => {
  Photo.create(req.body).then((data) => res.status(200).send(data)).catch(next);
};

const getArrPhotos = (req, res, next) => {
  Photo.find(req.query)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.code === 404) {
        throw new NotFound(NOT_FOUND_MESSAGE.NOT_FOUND_BACKET);
      }
      next(err);
    })
    .catch(next);
};

module.exports = { getArrPhotos, createPhoto };
