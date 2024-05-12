const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.post('/search/all', searchController.searchAll);

module.exports = router;