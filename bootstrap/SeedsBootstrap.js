module.exports = function (done) {
	sails.log("SeedsBootstrap is loaded.")
	async.series([
 		User.seed,
 		Ability.seed,
 		FeatType.seed,
 		Feat.seed
 	], done);
};