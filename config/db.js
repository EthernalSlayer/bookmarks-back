const mongoose = require('mongoose');
const mongodb = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

mongoose.connect(`${mongodb}/${dbName}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// const testSchema = mongoose.Schema({
// 	name: String,
// });

// const Test = mongoose.model('Test', testSchema);

// exports.Test = Test;
