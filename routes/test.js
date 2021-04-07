const express = require('express');
const router = express.Router();
const TestsControlers = require('../controllers/test.controller');

router.get('/', TestsControlers.getTests).post('/', TestsControlers.postTest);

module.exports = router;
