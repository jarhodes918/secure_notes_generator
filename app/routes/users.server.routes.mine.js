// Load user controller
var users = require('../controllers/users.server.controller');

// Export module
module.exports = function(app) {
	
	// Define post	
	app.post('/users',users.create);

	// Define get
	app.get('/users',users.renderGet);
	app.get('/userss',users.list);
	app.get('/userss/:userId',users.read);


	// Define put
	app.put('/userss/:userId',users.update);

	// Define delete
	app.delete('/userss/:userId',users.delete);
	
	// Set parameter
	app.param('userId',users.userByID);
};
