const router = require('express').Router();
const { getArrPhotos, createPhoto } = require('../controllers/mediaContent');

router.get('/gallery', getArrPhotos);
router.post('/gallery', createPhoto);

module.exports = router;
