// Post controller
const Post = require("../models/Post");

const searchPosts = async (req, res) => {
  const searchQuery = req.body.q;

  try {
    const posts = await Post.find({
      $or: [
        { title: { $regex: searchQuery, $options: "i" } },
        { body: { $regex: searchQuery, $options: "i" } },
        { tags: { $regex: searchQuery, $options: "i" } },
      ],
    });

    res.json(posts);
  } catch (err) {
    console.error("Error searching posts:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  searchPosts,
};
