const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const AI = async (req, res) => {
  try {
    const prompt =
      "As an agent of Afternoon Prep, ensure you use very polite and kind words to your students as you need them to understand, you do not want to overwhelm them with information,your job is to help students learn better and provide the most helpful information about the following: " +
      req.body.q;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.json({ result: text });
  } catch (err) {
    console.error("Error generating content:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { AI };
