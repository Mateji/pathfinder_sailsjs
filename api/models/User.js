/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {

	attributes: {
	  	email: {
	  		type: 'email',
	  		required: true,
	  		unique: true
	  	},
	  	password: {
	  		type: 'string',
	  		minLength: 6,
	  		required: true
	  	},
	  	toJSON: function() {
	  		var obj = this.toObject();
	  		delete obj.password;
	  		return obj;
	  	},
	  	characters: {
	  		collection: 'character',
	  		via: 'owner'
	  	}
  	
	},
	beforeCreate: function(user, cb) {
  		bcrypt.genSalt(10, function(err, salt) {
  			bcrypt.hash(user.password, salt, function(err, hash) {
  				if (err) {
  					console.log(err);
	  				cb(err); 
	  			} else {
	  				user.password = hash;
	  				cb();
	  			}
	  		});
	  	});
	},

	seedData: [
		{
	    	email: 'hardrockmateji@gmail.com',
	    	password: '123456'
	    },
	    {
			email: 'Hans@hans.de',
	    	password: '654321'
	    }
  	]

};

