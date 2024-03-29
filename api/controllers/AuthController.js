/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {

	_config: {
		actions: false,
		shortcut: false,
		rest: false
	},

	login: function(req, res) {

		passport.authenticate('local', function(err, user, info) {
			if ((err) || (!user)) {
				return res.send({
					message: info.message,
					user: user
				});
			}
			req.logIn(user, function(err) {
				if (err) res.send(err);
					res.redirect('back');
				// return res.send({
				// 	message: info.message,
				// 	user: user
				// });
			});
		})(req, res);
	},

	logout: function(req, res) {
		req.logout();
		res.redirect('/');
	}
	
};

