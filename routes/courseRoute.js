const express = require('express');
const router = express.Router();
const { searchCourses } = require('../controllers/courseController');

// Search route
router.post('/search/courses', searchCourses);

module.exports = router;
