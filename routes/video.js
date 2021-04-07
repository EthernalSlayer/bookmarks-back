const express = require('express');
const router = express.Router();
const VideosController = require('../controllers/videos.controller');

router
	.get('/', VideosController.getVideos)
	.post('/', VideosController.postVideo)
	.delete('/:id', VideosController.deleteVideo)
	.put('/:id', VideosController.updateVideo);

module.exports = router;
