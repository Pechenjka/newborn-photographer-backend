const router = require('express').Router();
const { getPacketsCategories } = require('../controllers/packetCategory');

router.get('/', getPacketsCategories);

module.exports = router;
