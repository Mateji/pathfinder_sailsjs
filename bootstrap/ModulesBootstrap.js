module.exports = function (done) {
	sails.log("ModulesBootstrap is loaded.")
	moment = require('moment');

	return done();
};