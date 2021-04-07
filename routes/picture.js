const express = require('express');
const router = express.Router();
const PicturesController = require('../controllers/pictures.controller');

router
	.get('/', PicturesController.getPictures)
	.post('/', PicturesController.postPicture)
	.delete('/:id', PicturesController.deletePicture)
	.put('/:id', PicturesController.updatePicture);

module.exports = router;
