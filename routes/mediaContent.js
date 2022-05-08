const router = require('express').Router();
const { getArrPhotosFromCloud } = require('../controllers/mediaContent');

router.get('/gallery', getArrPhotosFromCloud);

module.exports = router;
