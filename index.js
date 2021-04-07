'use strict';
require('dotenv').config();
const express = require('express');
require('./config/db')();
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

// Create the express app
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());

// Import router
const tests = require('./routes/test');
const videos = require('./routes/video');
const pictures = require('./routes/picture');
const tags = require('./routes/tag');

// Routes
app.use('/tests', tests);
app.use('/videos', videos);
app.use('/pictures', pictures);
app.use('/tags', tags);

// Error handlers
app.use(function fourOhFourHandler(req, res) {
	res.status(404).send();
});
app.use(function fiveHundredHandler(err, req, res, next) {
	console.error(err);
	res.status(500).send();
});

// Start server
app.listen(PORT, function (err) {
	if (err) {
		return console.error(err);
	}

	console.log(`Started at http://localhost:${PORT}`);
});
