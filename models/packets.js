const mongoose = require('mongoose');
const { PACKETS_SCHEMA_VALIDATION_MESSAGE } = require('../utils/constants');

const typePacketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, PACKETS_SCHEMA_VALIDATION_MESSAGE.TITLE],
  },
  packetsId: {
    type: Number,
    required: [true, PACKETS_SCHEMA_VALIDATION_MESSAGE.PACKETID],
  },
});

module.exports = mongoose.model('typePacket', typePacketSchema);
