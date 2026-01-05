const express = require('express');
const router = express.Router();
const PaymentVerification = require('../models/PaymentVerification');

// @route   GET /api/admin/verifications
// @desc    Get all pending payment verifications
// @access  Admin (should be protected in production)
router.get('/verifications', async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};

    const verifications = await PaymentVerification.find(query)
      .sort({ submittedAt: -1 })
      .populate('courses.courseId');

    res.json(verifications);
  } catch (error) {
    console.error('Error fetching verifications:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/admin/verifications/:id/approve
// @desc    Approve payment verification
// @access  Admin (should be protected in production)
router.put('/verifications/:id/approve', async (req, res) => {
  try {
    const verification = await PaymentVerification.findById(req.params.id);

    if (!verification) {
      return res.status(404).json({ message: 'Verification not found' });
    }

    verification.status = 'verified';
    verification.verifiedAt = new Date();
    verification.verifiedBy = 'Admin'; // In production, use actual admin ID

    await verification.save();

    // TODO: Send course delivery email to user
    console.log(`Course delivery email sent to ${verification.email}`);

    res.json({
      message: 'Payment verified successfully',
      verification
    });
  } catch (error) {
    console.error('Error approving verification:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/admin/verifications/:id/reject
// @desc    Reject payment verification
// @access  Admin (should be protected in production)
router.put('/verifications/:id/reject', async (req, res) => {
  try {
    const verification = await PaymentVerification.findById(req.params.id);

    if (!verification) {
      return res.status(404).json({ message: 'Verification not found' });
    }

    verification.status = 'rejected';
    verification.verifiedAt = new Date();
    verification.verifiedBy = 'Admin'; // In production, use actual admin ID

    await verification.save();

    // TODO: Send rejection email to user
    console.log(`Rejection email sent to ${verification.email}`);

    res.json({
      message: 'Payment verification rejected',
      verification
    });
  } catch (error) {
    console.error('Error rejecting verification:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
