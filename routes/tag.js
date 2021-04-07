const express = require('express');
const router = express.Router();
const TagsController = require('../controllers/tags.controller');

router
	.get('/', TagsController.getTags)
	.post('/', TagsController.postTag)
	.delete('/:id', TagsController.deleteTag);

module.exports = router;
