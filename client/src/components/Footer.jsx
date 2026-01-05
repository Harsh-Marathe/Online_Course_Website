import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h3 className="footer__title gradient-text">EduLux Academy</h3>
                        <p className="footer__description">
                            Empowering learners worldwide with premium courses from industry experts.
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link btn-hover-scale" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link btn-hover-scale" aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link btn-hover-scale" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link btn-hover-scale" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><a href="#" className="footer__link hover-underline">Instructors</a></li>
                            <li><a href="#" className="footer__link hover-underline">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">Support</h4>
                        <ul className="footer__links">
                            <li><a href="#" className="footer__link hover-underline">Help Center</a></li>
                            <li><a href="#" className="footer__link hover-underline">Terms of Service</a></li>
                            <li><a href="#" className="footer__link hover-underline">Privacy Policy</a></li>
                            <li><a href="#" className="footer__link hover-underline">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__heading">Newsletter</h4>
                        <p className="footer__newsletter-text">
                            Subscribe to get updates on new courses and special offers.
                        </p>
                        <form className="footer__newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="footer__newsletter-input"
                                required
                            />
                            <button type="submit" className="footer__newsletter-btn btn-ripple btn-hover-scale">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} EduLux Academy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
