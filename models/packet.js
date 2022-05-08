const mongoose = require('mongoose');
const { PACKET_SCHEMA_VALIDATION_MESSAGE } = require('../utils/constants');

const packetSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 2,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.TITLE],
  },
  price: {
    type: Number,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.PRICE],
  },
  packet: {
    type: String,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.PACKET],
  },
  id: {
    type: Number,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.PACKETID],
  },
  description: {
    type: String,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.DESCRIPTION],
  },
  shortDescription: {
    type: String,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.SHORTDESCRIPTION],
  },
  pinned: {
    type: Boolean,
  },
  duration: {
    type: String,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.DURATION],
  },
  image: {
    type: String,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.IMAGE],
  },
  imageDescription: {
    type: String,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.IMAGEDESCRIPTION],
  },
  numberLocations: {
    type: Number,
    required: [true, PACKET_SCHEMA_VALIDATION_MESSAGE.NUMBERLOCATION],
  },

});

module.exports = mongoose.model('packet', packetSchema);
