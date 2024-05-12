const Bookmark = require("../models/Bookmark");
const Question = require("../models/Question");
const { ObjectId } = require("mongodb");

// Search for bookmarked questions
exports.searchBookmarkedQuestions = async (req, res) => {
  const searchQuery = req.body.q;
  const userIdString = req.body.userId;

  try {
    console.log("Search Query:", searchQuery);

    // Convert the userId string to an ObjectId
    const userId = new ObjectId(userIdString);

    // Find bookmarks for the user
    const bookmarks = await Bookmark.find({ user: { $eq: userId } });

    // Check if bookmarks array is empty
    if (!bookmarks.length) {
      console.log("No bookmarks found for this user.");
      return res.json({ questions: [], bookmarks: [] });
    }

    // Extract question IDs from the bookmarks
    const questionIds = bookmarks.map((bookmark) => bookmark.question);
    console.log("Question IDs:", questionIds);

    // Check if questionIds array is empty
    if (!questionIds.length) {
      console.log("No question IDs found in bookmarks.");
      return res.json({ questions: [], bookmarks: [] });
    }

    // Convert string questionIds to ObjectIds
    const objectQuestionIds = questionIds.map((id) => new ObjectId(id));

    // Find questions that match the question IDs
    const questions = await Question.find({
      _id: { $in: objectQuestionIds },
    });

    // Check if questions array is empty
    if (!questions.length) {
      console.log("No questions found for the given IDs.");
    }

    // Filter questions based on the search query
    const matchedQuestions = questions.filter((question) =>
      question.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    res.json(matchedQuestions); // Return both matched questions and bookmarks
  } catch (err) {
    console.error("Error searching bookmarked questions:", err);
    res.status(500).send("Internal Server Error");
  }
};
