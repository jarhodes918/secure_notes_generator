// Load the Note model
var Note = require('mongoose').model('Note');
var User = require('mongoose').model('User');

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
	res.render('input',{
		result: ""
	})
};

// Create delete function
exports.delete = function(req,res,next) {
	req.note.remove(function(err) {
		if (err) {
			return next(err);
		} else  {
			res.json(req.note);
		}		
	});
};

// Create update function
exports.update = function(req,res,next) {
	Note.findByIdAndUpdate(req.note.id,req.body,function(err,note) {
		if (err) {
			return next(err);
		} else  {
			res.json(note);
		}		
	});
};

// Create list function
exports.list = function(req,res,next) {
	console.log("in list: " + req.session.username)
	
	Note.find({author : req.session.username},function(err,notes) {
		if (err) {
			return next(err);
		} else  {
			res.render('subjects',{notesArray: notes});
		}		
	});
};

// Create read function
exports.read = function(req,res) {
	res.render('note',{note: req.note});;
};

// Create noteBySubject function
exports.noteBySubject = function(req,res,next,sbt) {
	Note.findOne({
		subject : sbt,
		author : req.session.username
	},function(err,note) {
		if (err) {
			return next(err);
		} else  {
			req.note = note;
			next();
		}		
	});
};

// Create create function
exports.create = function(req,res,next) {
	
	// Create note
	var note = new Note(req.body);
		
	note.author = req.session.username;
	
	note.save(function(err) {
		if (err) {
			return next(err);
		} else  {
			res.json(note);
		}
	})	
};
