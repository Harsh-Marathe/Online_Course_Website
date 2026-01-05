const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const PaymentVerification = require('../models/PaymentVerification');
const upload = require('../middleware/upload');

// @route   POST /api/payment-verification/upload
// @desc    Upload payment screenshot
// @access  Public
router.post('/upload', upload.single('screenshot'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    res.json({
      message: 'File uploaded successfully',
      filename: req.file.filename,
      path: req.file.path
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   POST /api/payment-verification
// @desc    Submit payment verification
// @access  Public
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('transactionId').trim().notEmpty().withMessage('Transaction ID is required'),
    body('referenceNumber').trim().notEmpty().withMessage('Reference number is required'),
    body('paymentScreenshot').notEmpty().withMessage('Payment screenshot is required'),
    body('totalAmount').isNumeric().withMessage('Total amount must be a number')
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        name,
        email,
        courses,
        transactionId,
        referenceNumber,
        paymentScreenshot,
        totalAmount
      } = req.body;

      // Create new payment verification
      const paymentVerification = new PaymentVerification({
        name,
        email,
        courses,
        transactionId,
        referenceNumber,
        paymentScreenshot,
        totalAmount,
        status: 'pending'
      });

      await paymentVerification.save();

      // TODO: Send email notification to user
      console.log(`Payment verification submitted for ${email}`);

      // TODO: Send email notification to admin
      console.log('Admin notified of new payment verification');

      res.status(201).json({
        message: 'Payment verification submitted successfully',
        verificationId: paymentVerification._id
      });
    } catch (error) {
      console.error('Error submitting payment verification:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
);

// @route   GET /api/payment-verification/:id
// @desc    Get payment verification by ID
// @access  Public (should be protected in production)
router.get('/:id', async (req, res) => {
  try {
    const verification = await PaymentVerification.findById(req.params.id)
      .populate('courses.courseId');

    if (!verification) {
      return res.status(404).json({ message: 'Verification not found' });
    }

    res.json(verification);
  } catch (error) {
    console.error('Error fetching verification:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
