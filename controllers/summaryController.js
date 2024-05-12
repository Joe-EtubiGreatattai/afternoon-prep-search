// Search summaries controller
const Summary = require("../models/Summary");

const searchSummary = async (req, res) => {
  const searchQuery = req.body.q;

  try {
    // Filter summaries based on the search query
    const filteredSummaries = await Summary.find({
      $or: [
        { book: { $regex: searchQuery, $options: "i" } },
        { title: { $regex: searchQuery, $options: "i" } },
        { summary: { $regex: searchQuery, $options: "i" } },
        { question: { $regex: searchQuery, $options: "i" } },
        { description: { $regex: searchQuery, $options: "i" } },
      ],
    });

    res.json(filteredSummaries);
  } catch (err) {
    console.error("Error searching summaries:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { searchSummary };
