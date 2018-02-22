// Load note controller
var notes = require('../controllers/notes.server.controller');

// Export module
module.exports = function(app) {
	
	// Define post	
	app.post('/input',notes.create);

	// Define get
	app.get('/input',notes.renderGet);
	app.get('/subjects',notes.list);
	app.get('/notes/:noteSubject',notes.read);

	// Define put
	app.put('/notes/:noteSubject',notes.update);

	// Define delete
	app.delete('/notes/:noteSubject',notes.delete);
	
	// Set parameter
	app.param('noteSubject',notes.noteBySubject);
};
