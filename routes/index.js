const router = require('express').Router();

const userRoutes = require('./user');
const mediaContentRoutes = require('./mediaContent');

router.use('/user', userRoutes);
router.use('/mediaContent', mediaContentRoutes);

module.exports = router;
