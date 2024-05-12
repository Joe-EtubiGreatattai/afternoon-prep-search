const mongoose = require('mongoose');

// Course model
const CourseSchema = new mongoose.Schema({
  price: Number,
  syllabus: [String],
  modules: [mongoose.Schema.Types.ObjectId],
  title: String,
  description: String,
  createdBy: mongoose.Schema.Types.ObjectId,
  subjectId: mongoose.Schema.Types.ObjectId,
  gradeId: mongoose.Schema.Types.ObjectId,
  createdAt: Date,
  updatedAt: Date,
  __v: Number
});

const Course = mongoose.model('Course', CourseSchema, 'prep courses');

module.exports = Course;
