module.exports = function (req, res, next) {

	console.log('checking master policy');
	req.viewData = {};

	// Default to an object if empty, or use existing locals that may have
	// been set elsewhere
	req.options.locals = req.options.locals || {};

	// Set a new local var that will be available to any controller that
	// implements the policy
	req.options.locals.user = 'Guest';
	if (req.isAuthenticated()) {
		req.options.locals.user = req.user;
	}
	console.log("policy user = " + req.options.locals.user);

	if (req.isAjax == true) {
		req.viewData.layout = "popover";
	} else {
		req.viewData.layout = "layout";
	}

	next();
}