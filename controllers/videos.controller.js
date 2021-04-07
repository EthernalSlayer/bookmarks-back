const Video = require('../models/videos.model');

class VideosController {
	static getVideos(req, res) {
		const tag = req.query.tag;
		const page = req.query.page;
		const limit = req.query.limit;
		if (tag) {
			Video.paginate({ tag }, { page: page, limit: limit }, (err, results) => {
				if (err) {
					res.status(500).json({ error: err.message });
				} else {
					res.status(200).json(results);
				}
			});
		} else {
			Video.paginate({}, { page: page, limit: limit }, (err, results) => {
				if (err) {
					res.status(500).json({ error: err.message });
				} else {
					res.status(200).json(results);
				}
			});
		}
	}

	static postVideo(req, res) {
		const video = new Video({ ...req.body });
		// video.type = req.body.type;
		// video.version = req.body.version;
		// video.provider_name = req.body.provider_name;
		// video.provider_url = req.body.provider_url;
		// video.title = req.body.title;
		// video.author_name = req.body.author_name;
		// video.author_url = req.body.author_url;
		// video.is_plus = req.body.is_plus;
		// video.account_type = req.body.account_type;
		// video.html = req.body.html;
		// video.width = req.body.width;
		// video.height = req.body.height;
		// video.duration = req.body.duration;
		// video.description = req.body.description;
		// video.thumbnail_url = req.body.thumbnail_url;
		// video.thumbnail_width = req.body.thumbnail_width;
		// video.thumbnail_height = req.body.thumbnail_height;
		// video.thumbnail_url_with_play_button =
		// 	req.body.thumbnail_url_with_play_button;
		// video.upload_date = req.body.upload_date;
		// video.video_id = req.body.video_id;
		// video.uri = req.body.uri;
		// video.tag = req.body.tag;
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
