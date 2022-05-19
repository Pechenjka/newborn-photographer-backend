const router = require('express').Router();
const { getArrPackets, createPacket, getPacketsWithDetailsDescription } = require('../controllers/packet');

router.get('/', getArrPackets);
router.get('/:_id', getPacketsWithDetailsDescription);
router.post('/', createPacket);

module.exports = router;
