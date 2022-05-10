const Packet = require('../models/packet');

const getArrPackets = (req, res, next) => {
  Packet.find()
    .then((data) => res.status(200).send(data))
    .catch(next);
};

module.exports = { getArrPackets };
