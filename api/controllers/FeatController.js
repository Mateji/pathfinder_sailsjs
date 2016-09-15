/**
 * FeatController
 *
 * @description :: Server-side logic for managing Feats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {


		Feat.find().populate('prerequisites').exec(function(err, feats) {
			if (err) return res.serverError("no feats were found");

			_.each(feats, function(feat, iterator) {
				console.log("iterator", featCb);
				console.log("feat:", feat);
				/*if (feat.id == 1)*/

				var pre = [];
				/*_.each(feat.prerequisites, function(prerequisite, prerequisiteCb) {
					Model = sails.models[prerequisite.object_type.toLowerCase()];
					Model.findOne({id: prerequisite.object_id}).exec(function(err, object) {
						pre.push(object);
						prerequisite = object;
						sails.log("Prerequisite:", prerequisite);
					});
				});*/

				


			});

			res.view({
				model: feats
			});
			
		});

    }
};

