// Export module
module.exports = function(app){

	// Load the index server controller	
	var index = require('../controllers/index.server.controller');

	// Define renderGet	
	app.get('/index',index.renderGet);

	// Define renderPost
	app.post('/index', index.renderPost);
};
