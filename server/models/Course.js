const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['development', 'business', 'design', 'photography', 'music', 'health']
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 0,
    max: 5
  },
  thumbnail: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    default: '10 hours'
  },
  badge: {
    type: {
      type: String,
      enum: ['bestseller', 'new']
    },
    text: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
