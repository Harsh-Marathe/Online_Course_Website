import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import '../styles/components.css';

const CourseCard = ({ course }) => {
    const { addToCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login');
            return;
        }

        const success = addToCart(course);
        if (success) {
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        }
    };

    return (
        <div className="course-card card-hover shine-effect">
            <div className="course-card__image img-hover-zoom">
                <img src={course.thumbnail} alt={course.title} />
                {course.badge && (
                    <span className={`course-card__badge ${course.badge.type}`}>
                        {course.badge.text}
                    </span>
                )}
            </div>

            <div className="course-card__content">
                <div className="course-card__rating">
                    <div className="stars">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`star ${i < Math.floor(course.rating) ? 'filled' : ''}`}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        ))}
                    </div>
                    <span className="rating-value">({course.rating.toFixed(1)})</span>
                </div>

                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__description">{course.description}</p>

                {course.instructor && (
                    <p className="course-card__instructor">By {course.instructor}</p>
                )}

                <div className="course-card__footer">
                    <span className="course-card__price">${course.price.toFixed(2)}</span>
                    <button
                        className={`course-card__btn btn-ripple btn-hover-scale ${isAdded ? 'added' : ''}`}
                        onClick={handleAddToCart}
                        disabled={isAdded}
                    >
                        {isAdded ? (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Added
                            </>
                        ) : (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                Add to Cart
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
