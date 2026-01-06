import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import '../styles/components.css';

const Navbar = () => {
    const { getCartCount, toggleCart } = useCart();
    const { user, logout } = useAuth();
    const { isDarkMode, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMobileMenuOpen(false);
    };

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

                        {user ? (
                            <button onClick={handleLogout} className="navbar__link hover-underline" style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}>
                                Logout ({user.name.split(' ')[0]})
                            </button>
                        ) : (
                            <Link to="/login" className="navbar__button btn-sm btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                                Login
                            </Link>
                        )}
                    </div>

                    <div className="navbar__actions">
                        <button
                            className="navbar__theme-toggle btn-hover-scale"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', marginRight: '1rem' }}
                        >
                            {isDarkMode ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            )}
                        </button>

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
