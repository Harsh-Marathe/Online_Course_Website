import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCart } from '../context/CartContext';
import { paymentAPI } from '../services/api';
import '../styles/pages.css';

const PaymentVerification = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [screenshot, setScreenshot] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (cartItems.length === 0) {
        navigate('/');
        return null;
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return;
            }
            setScreenshot(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const onSubmit = async (data) => {
        if (!screenshot) {
            alert('Please upload a payment screenshot');
            return;
        }

        try {
            setIsSubmitting(true);

            // Upload screenshot first
            const uploadResponse = await paymentAPI.uploadScreenshot(screenshot);

            // Submit verification data
            const verificationData = {
                name: data.name,
                email: data.email,
                courses: cartItems.map(item => ({
                    courseId: item._id,
                    title: item.title,
                    price: item.price
                })),
                transactionId: data.transactionId,
                referenceNumber: data.referenceNumber,
                paymentScreenshot: uploadResponse.filename,
                totalAmount: getCartTotal()
            };

            await paymentAPI.submitVerification(verificationData);

            // Clear cart and navigate to confirmation
            clearCart();
            navigate('/confirmation', { state: { email: data.email } });
        } catch (error) {
            console.error('Error submitting verification:', error);
            alert('Failed to submit payment verification. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page">
            <div className="container">
                <div className="payment-verification">
                    <div className="payment-verification__header animate-fade-in">
                        <h1 className="payment-verification__title">Payment Verification</h1>
                        <p className="payment-verification__subtitle">
                            Please provide your payment details for verification
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="verification-form glass-card animate-fade-in-up">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                {...register('name', { required: 'Name is required' })}
                                placeholder="Enter your full name"
                            />
                            {errors.name && <span className="form-error">{errors.name.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Purchased Courses</label>
                            <div className="purchased-courses">
                                {cartItems.map((item) => (
                                    <div key={item._id} className="purchased-course-item">
                                        <span className="purchased-course-item__title">{item.title}</span>
                                        <span className="purchased-course-item__price">${item.price.toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="purchased-courses__total">
                                    <span>Total Amount:</span>
                                    <span className="gradient-text">${getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="transactionId" className="form-label">Transaction ID *</label>
                                <input
                                    type="text"
                                    id="transactionId"
                                    className={`form-input ${errors.transactionId ? 'error' : ''}`}
                                    {...register('transactionId', { required: 'Transaction ID is required' })}
                                    placeholder="Enter transaction ID"
                                />
                                {errors.transactionId && <span className="form-error">{errors.transactionId.message}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="referenceNumber" className="form-label">Reference Number *</label>
                                <input
                                    type="text"
                                    id="referenceNumber"
                                    className={`form-input ${errors.referenceNumber ? 'error' : ''}`}
                                    {...register('referenceNumber', { required: 'Reference number is required' })}
                                    placeholder="Enter reference number"
                                />
                                {errors.referenceNumber && <span className="form-error">{errors.referenceNumber.message}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="screenshot" className="form-label">Payment Screenshot *</label>
                            <div className="file-upload">
                                <input
                                    type="file"
                                    id="screenshot"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="file-upload__input"
                                />
                                <label htmlFor="screenshot" className="file-upload__label">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                    </svg>
                                    <span>{screenshot ? screenshot.name : 'Choose file or drag here'}</span>
                                </label>
                            </div>
                            {previewUrl && (
                                <div className="file-preview">
                                    <img src={previewUrl} alt="Payment screenshot preview" />
                                </div>
                            )}
                            <p className="form-hint">Max file size: 5MB. Accepted formats: JPG, PNG, GIF</p>
                        </div>

                        <button
                            type="submit"
                            className="form-submit btn-ripple btn-hover-lift"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="spinner spinner-sm"></div>
                                    Submitting...
                                </>
                            ) : (
                                'Submit for Verification'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentVerification;
