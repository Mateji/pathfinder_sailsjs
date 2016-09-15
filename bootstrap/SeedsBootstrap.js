module.exports = function (done) {
	sails.log("SeedsBootstrap is loaded.")
	async.series([
 		User.seed,
 		Prerequisite.seed,
 		Ability.seed,
 		FeatType.seed,
 		Feat.seed
 	], done);
};