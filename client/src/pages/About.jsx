import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const About = () => {
    const stats = [
        { label: 'Students', value: '50k+' },
        { label: 'Courses', value: '100+' },
        { label: 'Instructors', value: '50+' },
        { label: 'Satisfaction', value: '4.9/5' }
    ];

    const team = [
        {
            name: 'Dr. Robert Kim',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
        },
        {
            name: 'Sarah Johnson',
            role: 'Head of Content',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
        },
        {
            name: 'Michael Chen',
            role: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
        },
        {
            name: 'Emily Davis',
            role: 'Design Director',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
        }
    ];

    return (
        <div className="page">
            {/* Hero Section */}
            <section className="about-hero animate-fade-in">
                <div className="container">
                    <h1 className="about-hero__title">
                        Empowering the Next Generation of <span className="gradient-text">Creators</span>
                    </h1>
                    <p className="about-hero__subtitle">
                        At EduLux, we believe quality education should be accessible, engaging, and premium. We're on a mission to transform how the world learns.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card glass-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <h3 className="stat-card__value gradient-text">{stat.value}</h3>
                                <p className="stat-card__label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content glass-card">
                        <div className="mission-text">
                            <h2 className="section-title">Our Mission</h2>
                            <p>
                                Founded in 2023, EduLux started with a simple idea: online learning shouldn't feel like a chore. It should be an immersive, premium experience that inspires you to reach your full potential.
                            </p>
                            <p>
                                We collaborate with industry leaders and expert practitioners to create courses that are not just informative, but transformative. From coding and design to business and photography, our curriculum is designed to help you master real-world skills.
                            </p>
                        </div>
                        <div className="mission-image">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                                alt="Team collaborating"
                                className="img-hover-zoom"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 className="section-title text-center">Meet Our Team</h2>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="team-card__image-wrapper">
                                    <img src={member.image} alt={member.name} className="team-card__image img-hover-zoom" />
                                </div>
                                <h3 className="team-card__name">{member.name}</h3>
                                <p className="team-card__role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card glass-card">
                            <div className="value-icon">✨</div>
                            <h3>Excellence</h3>
                            <p>We never settle for "good enough". We strive for perfection in every course we produce.</p>
                        </div>
                        <div className="value-card glass-card">
                            <div className="value-icon">🤝</div>
                            <h3>Community</h3>
                            <p>Learning is better together. We foster a supportive community of learners and mentors.</p>
                        </div>
                        <div className="value-card glass-card">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>We constantly explore new technologies and teaching methods to enhance learning.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card glass-card">
                        <h2 className="cta-card__title">Join Our Journey</h2>
                        <p className="cta-card__text">
                            Ready to start learning? Explore our catalog of premium courses today.
                        </p>
                        <Link to="/" className="cta-card__btn btn-ripple btn-hover-lift">
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
