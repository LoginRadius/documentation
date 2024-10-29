# Amplitude

Amplitude is a product analytics platform that helps businesses understand their users. By analyzing user activity and behaviour, Amplitude helps to improve engagement and long-term user retention.

This integration enables users to easily connect our JS library to Amplitude. Information contained in LoginRadius profiles can be mapped to Amplitude user profiles as they log in. Events emitted by the JS Intefaces will register in Amplitude's tracking. Implementation is relatively simple and should only take a couple of minutes.

> **Note:** Before proceeding, ensure your Amplitude account has been set up and activated.

## Implementation

The following JavaScript files are needed. If they are already present, ensure that they are in the correct order.

```
<!-- LoginRadius V2 JS -->
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
<!-- LoginRadius V2 Integration JS -->
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

### Amplitude JS Code

Starting from your Amplitude [page](https://analytics.amplitude.com/login), navigate to the Manage Data section to create a new project. Follow the instructions to integrate the Amplitude SDK onto your web pages.

### Identifying Users

Call the LRObject.identify() method to link profiles.

```
LRObject.identify("amplitude", <Profile Data>, <Mapping Object>, <isCustom>);
```

This method should be called after the onSuccess callback from login, as the response profile data needs to be passed as its argument. Specifics on the mapping object can be found in the [Getting Started](https://www.loginradius.com/docs/api/v2/integrations/getting-started#descriptionofmapping2) document.

The following is an example of a mapping object containing the supported standard keys. Any other fields you want to map from the LoginRadius profile to Amplitude should be contained in the custom key-value pairs, which maps the value of a LoginRadius profile key to a key on the corresponding Amplitude profile.

Note that by default, UID on the LoginRadius profile is mapped to the unique identifier (User Id) on Amplitude. You can override this with isCustom == true (more details under Custom Mapping).

```
var mapping = {
	standard: [
    	"id",
		"email",
        "fullname",
        "firstname",
        "lastname",
        "gender",
        "createddate",
        "phone"
	],
	custom: {
		amplitude: {
			mappings: {
				"UserName": "User Name",
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
        	amplitude:{
            	mappings:{},
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
    	LRObject.identify("amplitude", response.Profile, mapping, false);
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

If you want to specify your own unique identifier for profiles in Amplitude, a custom data object needs to be defined and passed into the LRObject.identify() method. This data object needs to be a JSON formatted object for the specified key-values you want to place into an Amplitude profile. The unique identifier to be used in Amplitude is mapped through the key "Uid", so ensure that it is always included.

An example data object:

```
var data = {
	"Uid": 12345,
    "Email": "12345@example.com",
    "Company": "abcd",
}

LRObject.identify("amplitude", data, {}, true);
```

### Tracking Users

Call the LRObject.track() method to register LoginRadius interface events with Amplitude's tracking.

```
LRObject.track("amplitude");
```

### Filtered Tracking

To track only specific events from the LoginRadius interface, pass an array of event names as the second argument of the LRObject.track() method.

```
var eventNames = ["login", "registration", "forgotpassword"];
LRObject.track("amplitude", eventNames);
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
LRObject.track("amplitude", "", customEvent);
```

### Viewing Data on Amplitude

Log into a user from your LoginRadius interface. If everything has been successfully installed, the visitor being tracked on your Amplitude User Activity section should be updated with information contained in your mapping.

![amplitude user](https://apidocs.lrcontent.com/images/ampuold_204505bfc4add430317.80242935.jpg "amplitude user activity old")

To view users in the new Amplitude layout, navigate to 'New' and 'User Look-Up'.

![amplitude user new](https://apidocs.lrcontent.com/images/ampunew_327355bfc4aa0aa5397.07702317.jpg "amplitude user activity new")
