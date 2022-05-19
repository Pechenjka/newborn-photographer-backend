const PacketCategory = require('../models/packetCategory');

const getPacketsCategories = (req, res, next) => {
  PacketCategory.find().then((data) => res.status(200).send(data)).catch(next);
};

module.exports = { getPacketsCategories };
