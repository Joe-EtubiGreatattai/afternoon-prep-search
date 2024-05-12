const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const courseRoutes = require('./routes/courseRoute');
const bookmarkRoutes = require('./routes/bookmarkRoute');
const summaryRoutes = require('./routes/summaryRoute');
const searchRoutes = require('./routes/searchRoute');
const postRoutes = require('./routes/postRoute');
const AI = require('./routes/AIRoute');
const swaggerRoutes = require('./swagger');
const dotenv = require("dotenv");

dotenv.config();

// Create an express app
const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/', courseRoutes);
app.use('/', bookmarkRoutes);
app.use('/', summaryRoutes);
app.use('/', searchRoutes);
app.use('/', postRoutes);
app.use('/', AI);
// app.use('/', AI);
app.use('/api-docs', swaggerRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});