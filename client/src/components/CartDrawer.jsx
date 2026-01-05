import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const CartDrawer = () => {
    const { cartItems, isCartOpen, closeCart, removeFromCart, getCartTotal } = useCart();

    // Close cart when clicking outside
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isCartOpen) {
                closeCart();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isCartOpen, closeCart]);

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`cart-overlay ${isCartOpen ? 'active' : ''}`}
                onClick={closeCart}
            />

            {/* Cart Drawer */}
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-drawer__header">
                    <h2 className="cart-drawer__title">Your Cart</h2>
                    <button className="cart-drawer__close" onClick={closeCart} aria-label="Close cart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="cart-drawer__content">
                    {cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <svg className="cart-empty__icon" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            <p className="cart-empty__text">Your cart is empty</p>
                            <p className="cart-empty__subtext">Add some courses to get started!</p>
                        </div>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item._id} className="cart-item animate-fade-in-up">
                                    <img src={item.thumbnail} alt={item.title} className="cart-item__image" />
                                    <div className="cart-item__details">
                                        <h4 className="cart-item__title">{item.title}</h4>
                                        <p className="cart-item__price">${item.price.toFixed(2)}</p>
                                    </div>
                                    <button
                                        className="cart-item__remove"
                                        onClick={() => removeFromCart(item._id)}
                                        aria-label="Remove from cart"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-drawer__footer">
                        <div className="cart-total">
                            <span className="cart-total__label">Total:</span>
                            <span className="cart-total__amount">${getCartTotal().toFixed(2)}</span>
                        </div>
                        <Link
                            to="/checkout"
                            className="cart-drawer__checkout btn-ripple btn-hover-lift"
                            onClick={closeCart}
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
