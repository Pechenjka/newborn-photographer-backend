const mongoose = require('mongoose');

const packetCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('packetCategory', packetCategorySchema);
