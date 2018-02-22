// Require configuration
var config = require('./config'),
	mongoose = require('mongoose');

// Export mongoose module
module.exports = function() {
	var db = mongoose.connect(config.db);
	
	// Require models	
	require('../app/models/note.server.model');
	require('../app/models/user.server.model');
	
	return db;
};
