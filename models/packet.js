const mongoose = require('mongoose');

const packetSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 2,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  packet: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  pinned: {
    type: Boolean,
  },
  duration: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageDescription: {
    type: String,
    required: true,
  },
  numberLocations: {
    type: Number,
    required: true,
  },
  getFromPhotosession: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('packet', packetSchema);
