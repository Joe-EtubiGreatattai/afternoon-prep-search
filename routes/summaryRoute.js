const express = require('express');
const router = express.Router();
const { searchSummary } = require('../controllers/summaryController');

// Search route
router.post('/search/summary', searchSummary);

module.exports = router;
