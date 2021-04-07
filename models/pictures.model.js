const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PictureSchema = mongoose.Schema({
	type: { type: String, required: true },
	flickr_type: { type: String, required: true },
	title: { type: String, required: true },
	author_name: { type: String, required: true },
	author_url: { type: String, required: true },
	width: { type: Number, required: true },
	height: { type: Number, required: true },
	url: { type: String, required: true },
	web_page: { type: String, required: true },
	thumbnail_url: { type: String, required: true },
	thumbnail_width: { type: Number, required: true },
	thumbnail_height: { type: Number, required: true },
	web_page_short_url: { type: String, required: true },
	license: { type: String, required: true },
	license_id: { type: Number, required: true },
	html: { type: String, required: true },
	version: { type: String, required: true },
	cache_age: { type: Number, required: true },
	provider_name: { type: String, required: true },
	provider_url: { type: String, required: true },
	tag: { type: String, required: false },
});

PictureSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Picture', PictureSchema);
