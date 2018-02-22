// Set development configuration
module.exports = {
	db: 'mongodb://localhost/test',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '1981344715416110',
		clientSecret: 'e52c7012dceb9463e404fd56773714b3',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'Twitter Application ID',
		clientSecret: 'Twitter Application Secret',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: 'Google Application ID',
		clientSecret: 'Google Application Secret',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};
