import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import '../styles/pages.css';

const Checkout = () => {
    const { cartItems, getCartTotal } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (cartItems.length === 0) {
        return (
            <div className="page">
                <div className="container">
                    <div className="empty-checkout">
                        <svg className="empty-checkout__icon" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <h2 className="empty-checkout__title">Your cart is empty</h2>
                        <p className="empty-checkout__text">Add some courses to proceed to checkout</p>
                        <Link to="/" className="empty-checkout__btn btn-ripple btn-hover-lift">
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="container">
                <div className="checkout">
                    <div className="checkout__header animate-fade-in">
                        <h1 className="checkout__title">Checkout</h1>
                        <p className="checkout__subtitle">Review your order and proceed to payment</p>
                    </div>

                    <div className="checkout__content">
                        <div className="checkout__main">
                            <div className="order-summary glass-card animate-fade-in-up">
                                <h2 className="order-summary__title">Order Summary</h2>

                                <div className="order-items">
                                    {cartItems.map((item, index) => (
                                        <div key={item._id} className="order-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                            <img src={item.thumbnail} alt={item.title} className="order-item__image" />
                                            <div className="order-item__details">
                                                <h3 className="order-item__title">{item.title}</h3>
                                                {item.instructor && (
                                                    <p className="order-item__instructor">By {item.instructor}</p>
                                                )}
                                            </div>
                                            <span className="order-item__price">${item.price.toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="order-total">
                                    <div className="order-total__row">
                                        <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'course' : 'courses'})</span>
                                        <span>${getCartTotal().toFixed(2)}</span>
                                    </div>
                                    <div className="order-total__row order-total__row--final">
                                        <span>Total</span>
                                        <span className="gradient-text">${getCartTotal().toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="checkout__sidebar">
                            <div className="payment-info glass-card animate-fade-in-up delay-200">
                                <h3 className="payment-info__title">Payment Instructions</h3>

                                <div className="payment-method">
                                    <div className="payment-method__header">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg>
                                        <h4>UPI Payment</h4>
                                    </div>
                                    <div className="payment-method__details">
                                        <p><strong>UPI ID:</strong> edulux@paytm</p>
                                        <p className="payment-method__note">Scan QR code or use UPI ID</p>
                                    </div>
                                </div>

                                <div className="payment-method">
                                    <div className="payment-method__header">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="1" x2="12" y2="23"></line>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                        <h4>Bank Transfer</h4>
                                    </div>
                                    <div className="payment-method__details">
                                        <p><strong>Account Name:</strong> EduLux Academy</p>
                                        <p><strong>Account Number:</strong> 1234567890</p>
                                        <p><strong>IFSC Code:</strong> HDFC0001234</p>
                                        <p><strong>Bank:</strong> HDFC Bank</p>
                                    </div>
                                </div>

                                <div className="payment-info__note">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                    <p>After making the payment, please submit the payment verification form with your transaction details and screenshot.</p>
                                </div>

                                <button
                                    className="payment-info__btn btn-ripple btn-hover-lift"
                                    onClick={() => navigate('/payment-verification')}
                                >
                                    Submit Payment Verification
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
