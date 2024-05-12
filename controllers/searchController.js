const Course = require('../models/Course');
const Summary = require('../models/Summary');
const Bookmark = require('../models/Bookmark');
const Question = require('../models/Question');
const Post = require('../models/Post');
const { ObjectId } = require('mongodb');

const searchAll = async (req, res) => {
  const searchQuery = req.body.q;
  const userIdString = req.body.userId;

  try {
    const userId = new ObjectId(userIdString);

    // Search for courses
    const courses = await Course.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } },
        { syllabus: { $regex: searchQuery, $options: 'i' } }
      ]
    });
    // Search for summaries
    const summaries = await Summary.find({
      $or: [
        { book: { $regex: searchQuery, $options: 'i' } },
        { title: { $regex: searchQuery, $options: 'i' } },
        { summary: { $regex: searchQuery, $options: 'i' } },
        { question: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } },
      ],
    });
    // Search for bookmarked questions
    const bookmarks = await Bookmark.find({ user: { $eq: userId } });
    const questionIds = bookmarks.map((bookmark) => bookmark.question);
    const objectQuestionIds = questionIds.map((id) => new ObjectId(id));

    const questions = await Question.find({
      _id: { $in: objectQuestionIds },
    });

    const matchedQuestions = questions.filter((question) =>
      question.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Search for posts
    const posts = await Post.find({
      $or: [
        { title: { $regex: searchQuery, $options: "i" } },
        { body: { $regex: searchQuery, $options: "i" } },
        { tags: { $regex: searchQuery, $options: "i" } },
      ]
    });

    res.json({ courses, summaries, bookmarks: matchedQuestions, posts });
  } catch (err) {
    console.error('Error searching:', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  searchAll,
};