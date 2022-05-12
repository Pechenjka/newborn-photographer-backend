const mongoose = require('mongoose');

const typePacketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  packetsId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('typePacket', typePacketSchema);
