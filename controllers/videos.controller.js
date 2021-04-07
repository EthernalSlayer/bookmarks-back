const Video = require('../models/videos.model');

class VideosController {
	static getVideos(req, res) {
		const { tag, page, limit } = req.query;
		const find = tag ? { tag } : {};
		Video.paginate(find, { page: page, limit: limit }, (err, results) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postVideo(req, res) {
		const video = new Video({ ...req.body });
		video.save((err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(201).json({ message: 'successfully posted!' });
			}
		});
	}

	static deleteVideo(req, res) {
		const id = req.params.id;
		Video.findByIdAndDelete(id, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json({ message: `video ${id} successfully deleted!` });
			}
		});
	}

	static updateVideo(req, res) {
		const id = req.params.id;
		const update = { ...req.body };
		Video.findByIdAndUpdate(id, update, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json({ message: `video ${id} successfully updated!` });
			}
		});
	}
}

module.exports = VideosController;
