module.exports = function (done) {
	sails.log("SeedsBootstrap is loaded.")
	async.series([
 		User.seed
 	], done);
};