// Load the mongoose module
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Create note schema
var NoteSchema = new Schema({
	subject: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	note: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

// Create mongoose model
mongoose.model('Note',NoteSchema);
