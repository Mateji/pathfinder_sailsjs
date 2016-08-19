/**
 * TestController
 *
 * @description :: Just some testing/learning controller
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	index: function(request, response) {
		return response.view('test', {
			currentDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
			dateMinusOne: moment().subtract(1, 'hour').format('MMMM Do YYYY, h:mm:ss a')
		})
	}
};