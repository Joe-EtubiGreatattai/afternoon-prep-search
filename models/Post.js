const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  body: String,
  published: Boolean,
  type: String,
  createdAt: Date,
  slug: String,
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;