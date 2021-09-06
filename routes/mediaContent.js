const router = require('express').Router();
const { getInstagramProfile, getArrPhotosFromCloud } = require('../controllers/mediaContent');

router.get('/instagram', getInstagramProfile);
router.get('/gallery', getArrPhotosFromCloud);

module.exports = router;
