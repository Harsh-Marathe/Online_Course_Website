import React, { useState } from 'react';
import '../styles/pages.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1000);
    };

    return (
        <div className="page">
            <div className="container">
                <div className="contact-header animate-fade-in text-center">
                    <h1 className="section-title">Get in Touch</h1>
                    <p className="contact-subtitle">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info-wrapper animate-fade-in-up">
                        <div className="contact-info glass-card">
                            <h2>Contact Information</h2>
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>support@edulux.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Address</h3>
                                    <p>123 Education Lane</p>
                                    <p>San Francisco, CA 94105</p>
                                </div>
                            </div>

                            <div className="faq-preview">
                                <h3>Frequently Asked Questions</h3>
                                <div className="faq-item">
                                    <h4>How do I access my courses?</h4>
                                    <p>Once purchased, courses are available in your dashboard immediately after payment verification.</p>
                                </div>
                                <div className="faq-item">
                                    <h4>Do you offer refunds?</h4>
                                    <p>Yes, we offer a 30-day money-back guarantee for all our courses.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <form onSubmit={handleSubmit} className="contact-form glass-card">
                            {submitted ? (
                                <div className="success-message">
                                    <div className="success-icon">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for contacting us. We'll get back to you shortly.</p>
                                    <button
                                        type="button"
                                        className="btn-refresh"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="form-input form-textarea"
                                            placeholder="Write your message here..."
                                            rows="5"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="form-submit btn-ripple btn-hover-lift">
                                        Send Message
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
