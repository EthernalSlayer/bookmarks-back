const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const VideoSchema = mongoose.Schema({
	type: { type: String, required: true },
	version: { type: String, required: true },
	provider_name: { type: String, required: true },
	provider_url: { type: String, required: true },
	title: { type: String, required: true },
	author_name: { type: String, required: true },
	author_url: { type: String, required: true },
	is_plus: { type: String, required: true },
	account_type: { type: String, required: true },
	html: { type: String, required: true },
	width: { type: Number, required: true },
	height: { type: Number, required: true },
	duration: { type: Number, required: true },
	description: { type: String, required: true },
	thumbnail_url: { type: String, required: true },
	thumbnail_width: { type: Number, required: true },
	thumbnail_height: { type: Number, required: true },
	thumbnail_url_with_play_button: { type: String, required: true },
	upload_date: { type: String, required: true },
	video_id: { type: Number, required: true },
	uri: { type: String, required: true },
	tag: { type: String, required: false },
});

VideoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Video', VideoSchema);
