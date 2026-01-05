import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/components.css';

const Navbar = () => {
    const { getCartCount, toggleCart } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cartCount = getCartCount();

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar__content">
                    <Link to="/" className="navbar__logo">
                        <span className="gradient-text">EduLux</span>
                        <span className="navbar__logo-subtitle">Academy</span>
                    </Link>

                    <div className={`navbar__menu ${isMobileMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className="navbar__link hover-underline" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link to="/courses" className="navbar__link hover-underline" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
                        <Link to="/about" className="navbar__link hover-underline" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        <Link to="/contact" className="navbar__link hover-underline" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </div>

                    <div className="navbar__actions">
                        <button
                            className="navbar__cart btn-hover-scale"
                            onClick={toggleCart}
                            aria-label="Shopping cart"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            {cartCount > 0 && (
                                <span className="navbar__cart-badge animate-scale-in">{cartCount}</span>
                            )}
                        </button>

                        <button
                            className="navbar__mobile-toggle"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
