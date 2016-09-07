/**
 * FeatController
 *
 * @description :: Server-side logic for managing Feats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {

		var buildLink = function (model, id, value) {
			return '<a href="/' + model + '/' + id + '">' + value + '</a>';
		};

		function replaceStrings(collection) {

		}

		Feat.find(function(err, feats) {
			if (err) return res.send(err, 500);

			_.each(feats, function(feat) {
				_.each(feat, function(attribute) {
					if(typeof attribute === 'string') {
						if (attribute.indexOf("{") != -1) {

							var regex = /\{(.*?)\}/g, result, replacements = [];
							while ((result = regex.exec(attribute))) {
								replacements.push(result[0]);
							}
							sails.log("replacements:", replacements);
							_.each(replacements, function(replacement) {

								var res = replacement.replace("{", "").replace("}", "").split(":");
								var model = res[0];
								var key = res[1];
								var value = res[2];
								
								var Model = sails.models[model.toLowerCase()];
								sails.log('model:', model);
								//sails.log('Model:', Model);

								/*var link = Model.findOne({[key]: value}).then(function (result) {
									return '<a href="/' + model + '/' + result.id + '">' + value + '</a>';
								}).catch(function (err) {return res.serverError(err);});
*/
								Model.findOne({[key]: value}).exec(function(err, result) {
									if (err) return res.serverError(err);
									var link = '<a href="/' + model + '/' + result.id + '">' + value + '</a>';
									sails.log('link:', link);

									attribute = attribute.replace(replacement, link);
								});
								/*model.find({key: value}).exec(function (err, result) {
									if (err) {
										sails.log('ERROR');
									}
									sails.log(result);
								})*/
							})

							

							/*var substring = attribute.substring(attribute.indexOf("{") + 1, attribute.indexOf("}"));
							var model = substring.indexOf(":");
							sails.log("substring:", substring);*/
						}
					}
				})
			});

			res.view({
				model: feats
			});
		});
    }
};

