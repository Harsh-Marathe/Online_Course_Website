const mongoose = require('mongoose');

const paymentVerificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  courses: [{
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    },
    title: String,
    price: Number
  }],
  transactionId: {
    type: String,
    required: true,
    trim: true
  },
  referenceNumber: {
    type: String,
    required: true,
    trim: true
  },
  paymentScreenshot: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  verifiedAt: Date,
  verifiedBy: String
}, {
  timestamps: true
});

module.exports = mongoose.model('PaymentVerification', paymentVerificationSchema);
