/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {


	sails.log("Bootstrapping...");

	async.eachSeries(_.values(require('include-all')({
	    dirname: __dirname + '/../bootstrap',
	    filter : /(.+Bootstrap)\.js$/,
	    excludeDirs : /^\.(git|svn)$/,
	    optional: true
	  })), function (bootmodule, callback) {
	    _.isFunction(bootmodule) && 
	      (bootmodule(callback), true) || cb();
	  }, cb);




  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
	//cb();
};
