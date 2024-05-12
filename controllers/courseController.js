// Search controller
const Course = require('../models/Course');

const searchCourses = async (req, res) => {
  const searchQuery = req.body.q;

  try {
    const courses = await Course.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } },
        { syllabus: { $regex: searchQuery, $options: 'i' } }
      ]
    });

    res.json(courses);
  } catch (err) {
    console.error('Error searching courses:', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  searchCourses
};
