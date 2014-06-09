var isvalid = require('isvalid');

module.exports.body = function(schema) {
	
	return function(req, res, next) {
		isvalid(req.body, schema, function(err, validObj) {
			req.body = validObj;
			next(err);
		}, ['body']);
	};
	
};

module.exports.query = function(schema) {
	
	return function(req, res, next) {
		isvalid(req.query, schema, function(err, validObj) {
			req.query = validObj;
			next(err);
		}, ['query']);
	};
	
};
