const nodemailer = require('nodemailer');

// Create transporter (placeholder configuration)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-password'
  }
});

// Send verification confirmation email
const sendVerificationEmail = async (email, name, verificationId) => {
  try {
    // Placeholder - logs to console instead of sending
    console.log('=== EMAIL: Verification Confirmation ===');
    console.log(`To: ${email}`);
    console.log(`Subject: Payment Verification Received`);
    console.log(`Body: Dear ${name}, we have received your payment verification (ID: ${verificationId}). We will review it within 24-48 hours.`);
    console.log('=======================================');

    // In production, uncomment this:
    /*
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'EduLux Academy <noreply@edulux.com>',
      to: email,
      subject: 'Payment Verification Received',
      html: `
        <h2>Payment Verification Received</h2>
        <p>Dear ${name},</p>
        <p>We have received your payment verification request.</p>
        <p><strong>Verification ID:</strong> ${verificationId}</p>
        <p>Our team will review your payment within 24-48 hours and send you course access details once approved.</p>
        <p>Thank you for choosing EduLux Academy!</p>
      `
    };

    await transporter.sendMail(mailOptions);
    */

    return true;
  } catch (error) {
    console.error('Error sending verification email:', error);
    return false;
  }
};

// Send course delivery email
const sendCourseDeliveryEmail = async (email, name, courses) => {
  try {
    // Placeholder - logs to console instead of sending
    console.log('=== EMAIL: Course Delivery ===');
    console.log(`To: ${email}`);
    console.log(`Subject: Your Courses Are Ready!`);
    console.log(`Body: Dear ${name}, your payment has been verified! Here are your course access links...`);
    console.log('Courses:', courses.map(c => c.title).join(', '));
    console.log('==============================');

    // In production, uncomment this:
    /*
    const courseList = courses.map(course => 
      `<li><strong>${course.title}</strong> - <a href="https://edulux.com/course/${course.courseId}">Access Course</a></li>`
    ).join('');

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'EduLux Academy <noreply@edulux.com>',
      to: email,
      subject: 'Your Courses Are Ready!',
      html: `
        <h2>Payment Verified - Course Access Granted!</h2>
        <p>Dear ${name},</p>
        <p>Great news! Your payment has been verified and your courses are now ready.</p>
        <h3>Your Courses:</h3>
        <ul>${courseList}</ul>
        <p>Happy learning!</p>
        <p>Best regards,<br>EduLux Academy Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
    */

    return true;
  } catch (error) {
    console.error('Error sending course delivery email:', error);
    return false;
  }
};

// Send admin notification
const sendAdminNotification = async (verificationData) => {
  try {
    // Placeholder - logs to console instead of sending
    console.log('=== EMAIL: Admin Notification ===');
    console.log(`To: admin@edulux.com`);
    console.log(`Subject: New Payment Verification`);
    console.log(`Body: New payment verification from ${verificationData.name} (${verificationData.email})`);
    console.log('=================================');

    return true;
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return false;
  }
};

module.exports = {
  sendVerificationEmail,
  sendCourseDeliveryEmail,
  sendAdminNotification
};
