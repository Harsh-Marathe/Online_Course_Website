const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('../models/Course');
const connectDB = require('../config/database');

dotenv.config();

// Sample course data
const courses = [
  {
    title: 'Advanced JavaScript Patterns',
    description: 'Master modern JavaScript techniques used by senior developers. Learn design patterns, async programming, and advanced ES6+ features.',
    price: 89.99,
    category: 'development',
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=640&h=360&fit=crop',
    instructor: 'John Smith',
    duration: '12 hours',
    badge: { type: 'bestseller', text: 'Bestseller' }
  },
  {
    title: 'Product Management Masterclass',
    description: 'From ideation to launch - the complete product lifecycle. Learn from real-world case studies and industry experts.',
    price: 129.99,
    category: 'business',
    rating: 5.0,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&h=360&fit=crop',
    instructor: 'Sarah Johnson',
    duration: '15 hours'
  },
  {
    title: 'UX/UI Design Principles',
    description: 'Create interfaces that users love with proven design methods. Master Figma, user research, and prototyping.',
    price: 99.99,
    category: 'design',
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&h=360&fit=crop',
    instructor: 'Emily Chen',
    duration: '10 hours',
    badge: { type: 'new', text: 'New' }
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    description: 'Complete web development course covering React, Node.js, MongoDB, and deployment. Build 10+ real projects.',
    price: 149.99,
    category: 'development',
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=360&fit=crop',
    instructor: 'Michael Rodriguez',
    duration: '40 hours',
    badge: { type: 'bestseller', text: 'Bestseller' }
  },
  {
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media marketing, content strategy, and analytics. Grow your business online.',
    price: 79.99,
    category: 'business',
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=360&fit=crop',
    instructor: 'David Lee',
    duration: '8 hours'
  },
  {
    title: 'Professional Photography Course',
    description: 'Master camera settings, composition, lighting, and post-processing. From beginner to pro photographer.',
    price: 119.99,
    category: 'photography',
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=640&h=360&fit=crop',
    instructor: 'Lisa Anderson',
    duration: '14 hours'
  },
  {
    title: 'Music Production Fundamentals',
    description: 'Learn to produce professional music using Ableton Live. Sound design, mixing, and mastering included.',
    price: 109.99,
    category: 'music',
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=640&h=360&fit=crop',
    instructor: 'James Wilson',
    duration: '12 hours'
  },
  {
    title: 'Yoga & Mindfulness for Beginners',
    description: 'Start your wellness journey with guided yoga sessions and meditation practices. Reduce stress and improve flexibility.',
    price: 49.99,
    category: 'health',
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=640&h=360&fit=crop',
    instructor: 'Maya Patel',
    duration: '6 hours',
    badge: { type: 'new', text: 'New' }
  },
  {
    title: 'Python for Data Science',
    description: 'Master Python, pandas, NumPy, and machine learning. Analyze data and build predictive models.',
    price: 139.99,
    category: 'development',
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&h=360&fit=crop',
    instructor: 'Dr. Robert Kim',
    duration: '18 hours',
    badge: { type: 'bestseller', text: 'Bestseller' }
  },
  {
    title: 'Graphic Design Essentials',
    description: 'Learn Adobe Photoshop, Illustrator, and InDesign. Create stunning visuals for print and digital media.',
    price: 89.99,
    category: 'design',
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=640&h=360&fit=crop',
    instructor: 'Anna Martinez',
    duration: '11 hours'
  },
  {
    title: 'Financial Planning & Investment',
    description: 'Build wealth through smart investing. Learn stocks, bonds, real estate, and retirement planning.',
    price: 99.99,
    category: 'business',
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=640&h=360&fit=crop',
    instructor: 'Thomas Brown',
    duration: '9 hours'
  },
  {
    title: 'Mobile App Development with React Native',
    description: 'Build iOS and Android apps with one codebase. Learn React Native, navigation, and app deployment.',
    price: 129.99,
    category: 'development',
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&h=360&fit=crop',
    instructor: 'Kevin Zhang',
    duration: '16 hours'
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing courses
    await Course.deleteMany({});
    console.log('Cleared existing courses');

    // Insert sample courses
    await Course.insertMany(courses);
    console.log(`${courses.length} courses added successfully`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
