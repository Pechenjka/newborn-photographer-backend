const router = require('express').Router();

const userRoutes = require('./user');
const packetsRoutes = require('./packets');
const mediaContentRoutes = require('./mediaContent');
const NotFound = require('../errors/NotFound');
const { NOT_FOUND_MESSAGE } = require('../utils/constants');

router.use('/user', userRoutes);
router.use('/mediaContent', mediaContentRoutes);
router.use('/packets', packetsRoutes);
router.use('*', () => {
  throw new NotFound(NOT_FOUND_MESSAGE.RESOURSE_ERROR);
});

module.exports = router;
