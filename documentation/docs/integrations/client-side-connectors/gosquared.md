# GoSquared
=====

------
GoSquared is a live chat and CRM platform that facilitates customer analysis and communication. Its page widget assistant centralizes direct communication with the customer, providing a live chatbox and automated options for messaging. GoSquared tracks user activity in real time, with metrics ranging from on-page time to scroll depth of each page visited, and provides the analytics tools to make sense of it all.

This integration enables users to easily connect our JS library to GoSquared. User profile information can be mapped to GoSquared's profiles as they log in, and their activities within LoginRadius interfaces will register in its tracking. Implementation is relatively simple and should only take a couple of minutes.

**Note:** Before proceeding, ensure your GoSquared account has been set up and activated.

## Implementation
The following JavaScript files are needed. If they are already present, ensure that they are in the correct order.

```
<!-- LoginRadius V2 JS -->
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
<!-- LoginRadius V2 Integration JS -->
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

### GoSquared JS Code
Starting from your GoSquared [page](https://www.gosquared.com/now/), navigate to the Setup Guide and follow the instructions to install the script.

### Identifying Users
Call the LRObject.identify() method to link profiles.

```
LRObject.identify("gosquared", <Profile Data>, <Mapping Object>, <isCustom>);
```

This method should be called after the onSuccess callback from login, as the response profile data needs to be passed as its argument. Specifics on the mapping object can be found in the [Getting Started](https://www.loginradius.com/docs/api/v2/integrations/getting-started#descriptionofmapping2) document.

The following is an example of a mapping object containing all the standard keys that are included in GoSquared's common properties. Standard keys that are not included in GoSquared's common properties are listed under the custom key-value pairs, which maps a LoginRadius profile key to a custom property in GoSquared.

Note that GoSquared requires either an ID, email address or both to identify a user. Be sure that at least one of them is included in your standard mapping. In this integration, both standard keys "id" and "uid" map the UID value on the LoginRadius profile to ID on GoSquared.

```
var mapping = {
	standard: [
    	"id",
		"email",
        "fullname",
        "firstname",
        "lastname",
        "createddate",
        "phone",
        "profileimage",
	],
	custom: {
		gosquared: {
			mappings: {
				"BirthDate": "BirthDate",
				"Gender": "Gender",
			},
			ignoreDefault: false,
		}
	}
}
```

A complete example:

```
<script>
	var mapping={
		standard:[
        	"id",
        	"email",
            "firstname"
        ],
        custom:{
        	gosquared:{
            	mappings:{
                	"BirthDate": "BirthDate"
          		},
                ignoreDefault: false,
            }
		}
    };
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
    	// On Success
    	LRObject.identify("gosquared", response.Profile, mapping, false);
    	console.log(response);
    };
    login_options.onError = function(errors) {
    	// On Error
    	console.log(errors);
    };
    login_options.container = "login-container";
    LRObject.util.ready(function() {
    	LRObject.init("login",login_options);
    });
</script>
```

### Custom Mapping
If for whatever reason you wish to pass your own data object directly (isCustom == true), the data object needs to be a JSON formatted object for the specified key-values you want to place into a GoSquared profile. Formatting needs to follow the schema specified by GoSquared [here](https://www.gosquared.com/api/javascript-tracking-code/identify-users/#). Alternatively, you could simply use the GoSquared identify method directly.

An example data object:

```
var data = {
	"id": 12345,
    "email": "12345@example.com",
    "custom": {
    	"company": "abcd",
    }
}

LRObject.identify("gosquared", data, {}, true);
```

### Tracking Users
Call the LRObject.track() method to register LoginRadius interface events with GoSquared's tracking.

```
LRObject.track("gosquared");
```

### Filtered Tracking
To track only specific events from the LoginRadius interface, pass an array of event names as the second argument of the LRObject.track() method.

```
var eventNames = ["login", "registration", "forgotpassword"];
LRObject.track("gosquared", eventNames);
```

### Custom Tracking
To track custom events, pass a custom event JSON object as the third argument of the LRObject.track() method. The custom event object needs to follow the schema defined below.

```
var customEvent = {
	"event_name": "Example",
    "parameters": {
    	"examplefield": "examplevalue",
        "examplefield2": "examplevalue2",
    },
}

LRObject.track("gosquared", "", customEvent);
```

### Viewing Data on GoSquared
Log into a user from your LoginRadius interface. If everything has been successfully installed, the visitor being tracked on your GoSquared Admin Console should update into a proper user.

![gosquared user profile updated](https://apidocs.lrcontent.com/images/s1_280515b04416d3b49f3.75190898.png "enter image title here")