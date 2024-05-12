const express = require("express");
const router = express.Router();
const { AI } = require("../controllers/AiContoller");

router.post("/ai", AI);

module.exports = router;
