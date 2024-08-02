const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  startPoint: {
    type: { lat: Number, lng: Number },
    required: true
  },
  endPoint: {
    type: { lat: Number, lng: Number },
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Route', routeSchema);
