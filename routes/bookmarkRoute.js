const express = require("express");
const router = express.Router();
const {searchBookmarkedQuestions} = require("../controllers/bookmarkController");

// Search for bookmarked questions
router.post("/search/bookmarks", searchBookmarkedQuestions);

module.exports = router;
