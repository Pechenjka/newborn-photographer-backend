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
  imageDescriptionMobile: {
    type: String,
    required: true,
  },
  countLocations: {
    type: String,
    required: true,
  },
  getFromPhotosession: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('packet', packetSchema);
