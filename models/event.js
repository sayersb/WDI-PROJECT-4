const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  date: { type: Date, required: 'This field is required' },
  image: { type: String, required: 'This field is required' },
  description: { type: String, required: 'This field is required' },
  location: {
    lat: Number,
    lng: Number
  }
});

eventSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Event', eventSchema);
