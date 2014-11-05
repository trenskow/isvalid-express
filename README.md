# isvalid-express.js

**isvalid-express.js** is a validation middleware for express using the [isvalid](https://github.com/trenskow/isvalid.js) library.

Below is an example on how to use the validator.

    var validate = require('isvalid-express');
    
    var newUserValidationSchema = {
        "user": { type: String, required: true },
        "password": { type: String, required: true }
    };
    
    app.post("/users", validate.body(newUserValidationSchema), function(req, res) {
        
        // req.body is now validated and no further validation needs to take place.
        // If body could not be validated and error was sent to the express error handler.
        
    });
    
    var getUserValidationSchema = {
    	"filter": { type: String, required: true }
    };
    
    app.get("/users", validate.query(getUserValidationSchema), function(req, res) {
    	
    	// req.query is now validated and no further validation needs to take place.
    	// If query could not be validated an error was sent to the express error handler.
    	
    });

## Formatting Schemas

To understand how the validator works and how to format schemas - please see the [isvalid](https://github.com/trenskow/isvalid.js) project.
