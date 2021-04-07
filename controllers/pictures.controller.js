const Picture = require('../models/pictures.model');

class PicturesController {
	static getPictures(req, res) {
		const tag = req.query.tag;
		const page = req.query.page;
		const limit = req.query.limit;
		if (tag) {
			Picture.paginate(
				{ tag },
				{ page: page, limit: limit },
				(err, results) => {
					if (err) {
						res.status(500).json({ error: err.message });
					} else {
						res.status(200).json(results);
					}
				}
			);
		} else {
			Picture.paginate({}, { page: page, limit: limit }, (err, results) => {
				if (err) {
					res.status(500).json({ error: err.message });
				} else {
					res.status(200).json(results);
				}
			});
		}
	}

	static postPicture(req, res) {
		const picture = new Picture({ ...req.body });
		picture.save((err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(201).json({ message: 'successfully posted!' });
			}
		});
	}

	static deletePicture(req, res) {
		const id = req.params.id;
		Picture.findByIdAndDelete(id, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res
					.status(200)
					.json({ message: `picture ${id} successfully deleted!` });
			}
		});
	}

	static updatePicture(req, res) {
		const id = req.params.id;
		const update = { ...req.body };
		Picture.findByIdAndUpdate(id, update, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res
					.status(200)
					.json({ message: `picture ${id} successfully updated!` });
			}
		});
	}
}

module.exports = PicturesController;
