const { DEFAULT_ERROR_SERVER_MESSAGE } = require('../utils/constants');

const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  res.status(err.statusCode).send({
    message: (err.statusCode === 500 ? DEFAULT_ERROR_SERVER_MESSAGE : err.message),
  });
  next();
};

module.exports = errorHandler;
