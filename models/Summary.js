const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  book: { type: String, required: true },
  title: { type: String, required: true },
  question: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  summary: { type: String, required: true },
  token: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Summary = mongoose.model('Summary', summarySchema, 'books summaries');

module.exports = Summary;