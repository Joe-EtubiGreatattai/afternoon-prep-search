const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bookmark', BookmarkSchema, 'bookmarks');