const Packet = require('../models/packet');

const getArrPackets = (req, res, next) => {
  Packet.find(req.query)
    .then((data) => res.status(200).send(data))
    .catch(next);
};

const getPacketsWithDetailsDescription = (req, res, next) => {
  const { _id } = req.params;
  Packet.findById(_id)
    .then((packet) => res.status(200).send(packet))
    .catch(next);
};

const createPacket = (req, res, next) => {
  Packet.create(req.body)
    .then((packet) => res.status(200).send(packet))
    .catch(next);
};

module.exports = { getArrPackets, createPacket, getPacketsWithDetailsDescription };
