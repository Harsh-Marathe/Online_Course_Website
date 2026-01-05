import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import SearchFilter from '../components/SearchFilter';
import { coursesAPI } from '../services/api';
import '../styles/pages.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ priceRange: { min: 0, max: 500 }, category: 'all' });

    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [courses, searchQuery, filters]);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            const data = await coursesAPI.getAll();
            setCourses(data.courses || []);
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    const applyFilters = () => {
        let result = [...courses];

        // Apply search
        if (searchQuery) {
            result = result.filter(course =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply price filter
        result = result.filter(course =>
            course.price >= filters.priceRange.min && course.price <= filters.priceRange.max
        );

        // Apply category filter
        if (filters.category !== 'all') {
            result = result.filter(course => course.category === filters.category);
        }

        setFilteredCourses(result);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleFilter = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className="page">
            {/* Hero Section */}
            <section className="hero animate-fade-in">
                <div className="container">
                    <h1 className="hero__title">
                        Master New Skills with <span className="gradient-text">Premium</span> Courses
                    </h1>
                    <p className="hero__subtitle">
                        Hand-picked courses from industry experts to boost your career
                    </p>
                </div>
            </section>

            {/* Courses Section */}
            <section className="courses-section">
                <div className="container">
                    <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />

                    {loading ? (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Loading courses...</p>
                        </div>
                    ) : (
                        <>
                            <div className="courses-section__header">
                                <h2 className="courses-section__title">
                                    {searchQuery || filters.category !== 'all'
                                        ? `Found ${filteredCourses.length} courses`
                                        : 'Featured Courses'}
                                </h2>
                                <p className="courses-section__count">{filteredCourses.length} courses available</p>
                            </div>

                            {filteredCourses.length === 0 ? (
                                <div className="no-results">
                                    <svg className="no-results__icon" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                    </svg>
                                    <h3 className="no-results__title">No courses found</h3>
                                    <p className="no-results__text">Try adjusting your search or filters</p>
                                </div>
                            ) : (
                                <div className="courses-grid">
                                    {filteredCourses.map((course, index) => (
                                        <div key={course._id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                            <CourseCard course={course} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">What Our Students Say</h2>
                    <div className="testimonials-grid">
                        {[
                            {
                                name: 'Sarah Johnson',
                                role: 'Software Engineer',
                                text: 'The JavaScript course transformed my career. I went from junior to senior developer in just 6 months!',
                                rating: 5
                            },
                            {
                                name: 'Michael Chen',
                                role: 'Product Manager',
                                text: 'The instructors are industry experts who actually know what they\'re talking about. Worth every penny.',
                                rating: 5
                            },
                            {
                                name: 'Emily Rodriguez',
                                role: 'UX Designer',
                                text: 'I\'ve taken many online courses but none as comprehensive and well-structured as these. Highly recommend!',
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="testimonial-card animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="testimonial-card__rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="testimonial-card__text">"{testimonial.text}"</p>
                                <div className="testimonial-card__author">
                                    <h4 className="testimonial-card__name">{testimonial.name}</h4>
                                    <p className="testimonial-card__role">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card glass-card">
                        <h2 className="cta-card__title">Ready to Transform Your Career?</h2>
                        <p className="cta-card__text">
                            Join thousands of students who have accelerated their careers with our premium courses
                        </p>
                        <button className="cta-card__btn btn-ripple btn-hover-lift" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Browse All Courses
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
