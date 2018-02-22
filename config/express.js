// Get modules
var config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session'),
	flash = require('connect-flash'),
	passport = require('passport');

// Export modules
module.exports = function(){

	// Create application
	var app = express();
	
	// Use the correct environment configuration
	if (process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production'){
		app.use(compress());
	}

	// Enable configure bodyParser
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	
	// Use required modules
	app.use(bodyParser.json());
	app.use(methodOverride());

	// Initialize session
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));


	// Setup view information
	app.set('views','./app/views');
	app.set('view engine','ejs');
	
	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());
	
	// Require routes
	require('../app/routes/index.server.routes')(app);
	require('../app/routes/users.server.routes')(app);
	require('../app/routes/notes.server.routes')(app);

	// Setup static files folder
	app.use(express.static('./public'));
	
	// Return application
	return app;
};
