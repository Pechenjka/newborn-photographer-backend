const router = require('express').Router();
const { getNewsLetter, getInTouch, getOrder } = require('../controllers/user');

router.post('/newsLetter', getNewsLetter);
router.post('/getInTouch', getInTouch);
router.post('/order', getOrder);

module.exports = router;
