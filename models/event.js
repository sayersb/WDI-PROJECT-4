const mongoose = require('mongoose');
const moment = require('moment');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  date: { type: Date, required: 'This field is required' },
  startTime: { type: String, required: 'This field is required'},
  type: { type: String, enum: ['Sport', 'Music', 'Learning', 'Theatre', 'Food & Drink', 'Gaming', 'Other'], required: 'This field is required' },
  status: { type: String, enum: ['Buying', 'Selling', 'Just Looking'], required: 'This field is required' },
  image: { type: String, required: 'This field is required' },
  description: { type: String, required: 'This field is required' },
  location: {
    lat: Number,
    lng: Number
  }
});

eventSchema.path('date')
  .get(function formatDate(date) {
    return moment(date).format('LL');
  });


eventSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Event', eventSchema);
