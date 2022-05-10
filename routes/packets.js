const router = require('express').Router();
const { getArrPackets } = require('../controllers/packet');

router.get('/', getArrPackets);

module.exports = router;
