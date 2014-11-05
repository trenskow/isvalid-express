var isvalid = require('isvalid');

var middleware = function(key, schema) {
	
	// We don't want the finalizer to work on every request.
	// So we finalize on the first request and then reuse
	// the finalized schema for future requests.
	
	// The final finalized schame.
	var finalSchema;
	
	return function(req, res, next) {
		
		// The actual validation function
		function validate() {
			isvalid(req[key], finalSchema, function(err, validObj) {
				req[key] = validObj;
				next(err);
			}, [key]);
		};
		
		// Formalize and store finalSchema if not present. Otherwise just validate.
		if (finalSchema === undefined) isvalid.formalize(schema, function(formalizedSchema) {
			finalSchema = formalizedSchema;
			validate();
		}); else {
			validate();
		}
		
	};
	
};

module.exports.body = function(schema) {
	return middleware('body', schema);
};
module.exports.query = function(schema) {
	return middleware('query', schema);
}
