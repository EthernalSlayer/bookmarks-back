const Tag = require('../models/tags.model');

class TagsController {
	static getTags(req, res) {
		Tag.find((err, results) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postTag(req, res) {
		const tag = new Tag({ ...req.body });
		tag.save((err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(201).json({ message: 'successfully posted!' });
			}
		});
	}

	static deleteTag(req, res) {
		const id = req.params.id;
		Tag.findByIdAndDelete(id, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json({ message: `tag ${id} successfully deleted!` });
			}
		});
	}
}

module.exports = TagsController;
