'use strict';
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongodb = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const cors = require('cors');

mongoose.connect(`${mongodb}/${dbName}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Create the express app
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
