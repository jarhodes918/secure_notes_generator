// Load the User and Post models
var User = require('mongoose').model('User'),
	Post = require('mongoose').model('Post');

// Create renderGet function
exports.renderGet = function(req,res){

	// Check to see if lastVisit has been set
	if (req.session.lastVisit){

		// Log lastVisit to the console
		console.log('Last visited: ' + req.session.lastVisit);
	}
	
	// Set lastVisit
	req.session.lastVisit = new Date();
	
	// Render the index view and set title parameter
	res.render('users',{
	})
};

// Create delete function
exports.delete = function(req,res,next) {
	req.user.remove(function(err) {
		if (err) {
			return next(err);
		} else  {
			res.json(req.user);
		}		
	});
};

// Create update function
exports.update = function(req,res,next) {
	User.findByIdAndUpdate(req.user.id,req.body,function(err,user) {
		if (err) {
			return next(err);
		} else  {
			res.json(user);
		}		
	});
};

// Create list function
exports.list = function(req,res,next) {
	User.find({},function(err,users) {
		if (err) {
			return next(err);
		} else  {
			res.json(users);
		}		
	});
};

// Create read function
exports.read = function(req,res) {
	res.json(req.user);
};

// Create userByID function
exports.userByID = function(req,res,next,id) {
	User.findOne({
		_id : id
	},function(err,user) {
		if (err) {
			return next(err);
		} else  {
			req.user = user;
			next();
		}		
	});
};

// Create create function
exports.create = function(req,res,next) {
	
	// Create variables
	var user = new User(req.body);
	var post = new Post(req.body);
	
	user.save(function(err) {
		if (err) {
			return next(err);
		} else  {
			res.json(user);
		}
	});
	
	post.author = user;
	post.save();
};
