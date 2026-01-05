const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// @route   GET /api/courses
// @desc    Get all courses with optional pagination
// @access  Public
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 100;
    const skip = (page - 1) * limit;

    const courses = await Course.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Course.countDocuments();

    res.json({
      courses,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalCourses: total
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/courses/search
// @desc    Search courses by title or description
// @access  Public
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const courses = await Course.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ]
    });

    res.json(courses);
  } catch (error) {
    console.error('Error searching courses:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/courses/filter
// @desc    Filter courses by price range and category
// @access  Public
router.get('/filter', async (req, res) => {
  try {
    const { minPrice, maxPrice, category } = req.query;

    let query = {};

    // Price filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }

    // Category filter
    if (category && category !== 'all') {
      query.category = category;
    }

    const courses = await Course.find(query).sort({ createdAt: -1 });

    res.json(courses);
  } catch (error) {
    console.error('Error filtering courses:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/courses/:id
// @desc    Get single course by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
