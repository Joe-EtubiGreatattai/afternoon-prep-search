const express = require('express');
const router = express.Router();
const postController = require('../controllers/postContoller');

router.post('/search/posts', postController.searchPosts);

module.exports = router;