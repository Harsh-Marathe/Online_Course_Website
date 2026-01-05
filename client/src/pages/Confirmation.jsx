import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/pages.css';

const Confirmation = () => {
    const location = useLocation();
    const email = location.state?.email || 'your email';

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page">
            <div className="container">
                <div className="confirmation">
                    <div className="confirmation__content glass-card animate-scale-in">
                        <div className="confirmation__icon animate-pulse-glow">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>

                        <h1 className="confirmation__title">Payment Submitted for Verification!</h1>

                        <p className="confirmation__message">
                            Thank you for your submission. We've received your payment verification request.
                        </p>

                        <div className="confirmation__details">
                            <div className="confirmation__detail-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <div>
                                    <h3>Email Confirmation</h3>
                                    <p>A confirmation email has been sent to <strong>{email}</strong></p>
                                </div>
                            </div>

                            <div className="confirmation__detail-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <div>
                                    <h3>Verification Process</h3>
                                    <p>Our team will verify your payment within 24-48 hours</p>
                                </div>
                            </div>

                            <div className="confirmation__detail-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <div>
                                    <h3>Course Delivery</h3>
                                    <p>Once approved, you'll receive course access links via email</p>
                                </div>
                            </div>
                        </div>

                        <div className="confirmation__note">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <p>
                                If you have any questions or concerns, please contact our support team at
                                <a href="mailto:support@edulux.com"> support@edulux.com</a>
                            </p>
                        </div>

                        <div className="confirmation__actions">
                            <Link to="/" className="confirmation__btn btn-ripple btn-hover-lift">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Back to Home
                            </Link>
                            <Link to="/" className="confirmation__btn confirmation__btn--secondary">
                                Browse More Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
