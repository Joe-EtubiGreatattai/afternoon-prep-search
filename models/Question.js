const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  imageUrl: String,
  year: Number,
  type: String,
  subType: String,
  subject: String,
  exam_id: String,
  text: String,
  number: Number,
  correctOption: String,
  options: [
    {
      option: String,
      text: String,
      imageUrl: String,
      imageKey: String,
      imagePosition: String,
      imageSubtitle: String,
      imageSubtitlePosition: String,
    },
  ],
  difficulty: String,
  level: String,
  topic: [String],
  tags: [String],
  explanation: String,
  ai_answer: String,
});

QuestionSchema.index({ text: 'text' });

module.exports = mongoose.model('Question', QuestionSchema, 'questions');