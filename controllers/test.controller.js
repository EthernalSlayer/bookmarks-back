const Test = require('../models/test.model');

class TestsControlers {
	static getTests(req, res) {
		Test.find((err, results) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postTest(req, res) {
		const test = new Test();
		test.name = req.body.name;
		test.save((err) => {
			if (err) {
				res.status(500).json({ error: err });
			} else {
				res.status(201).json({ message: 'successfully posted!' });
			}
		});
	}
}

module.exports = TestsControlers;
