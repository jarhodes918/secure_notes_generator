// Configure the environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load modules
var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

// Create instances
var db = mongoose();
var app = express();
var passport = passport();

// Listen port 3000
app.listen(3000);

// Export the express application
module.exports = app;

// Log a message on the console
console.log('Server running at http://localhost:3000/');
