# Customer.io

Customer.io provides a messaging platform allowing businesses to easily build, test, and send messages. Their automated system delivers personalizable email templates, newsletters, event triggered emails, and more. A business' users can also be identified through user profiles, and have their activity tracked with custom events and parameters. With customer.io, businesses can tailor emails based on their users behavioural data, for powerful and more effective emailing.

Identifying and tracking users can be done by the Customer.io JavaScript code, and it would be a very good practice for LoginRadius users to combine it with the LoginRadius analytics tracking code. A major benefit of doing this would be the feature of automatically tracking events (social and traditional).

The basic implementation takes a couple of minutes.

## Implementation

You will first need the following JavaScript files (you may have some of them already, make sure the order of the scripts is correct).

Deploy the LoginRadius V2 JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
```

Deploy the LoginRadius V2 Integration JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

### Customer.io JS Code

Create an account with [customer.io](https://customer.io/).

After logging in, navigate to 'Setup Guide', and click 'Add JavaScript Snippet'. Copy the provided script and paste into your HTML just before the end of the body tag.

If you are using PHP as your back-end language, it is recommended to put the script in a separate file, and include it in the page you want to track.

### Identifying Users

With Customer.io, the way to identify a user is via a User Profile.

- Call our identify function to link the account

`LRObject.identify("customer", response.Profile, mapping, false)`

- The specifics on how to use this is in the [Getting Started](https://www.loginradius.com/docs/api/v2/integrations/getting-started)

```
<script>
    var mapping={
        standard:[
		   "email",
	        "age",
	        "birthdate",
	        "createddate",
	        "firstname",
	        "gender",
	        "id",
	        "uid",
	        "lastname",
	        "fullname",
	        "phone",
	        "profileimage"
		 ]
	};
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
    	// On Success
    	// Use to sync UID with customer.io's unique ID
    	LRObject.identify('customer', response.Profile, mapping, false);
    	console.log(response);
    };
    login_options.onError = function(errors) {
    	// On Errors
    	console.log(errors);
    };
    login_options.container = "login-container";
    LRObject.util.ready(function() {
    	LRObject.init("login",login_options);
    });
</script>
```

### Custom Mapping

If you're using a custom mapping (isCustom == true), the data object needs to be a JSON formatted object for the specified key-values you want to place into a user profile.

Example:

```
<script>
    var data = {
    	"id": "001",
        "Profession": "Software Developer",
        "Plan Name": "Premium",
        "Status": "Paid"
    }
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
    	// On Success
    	// Use to sync data in your customerio integration
    	LRObject.identify('customer', data, '', true);
    	console.log(response);
    };
    login_options.onError = function(errors) {
    	// On Errors
    	console.log(errors);
    };
    login_options.container = "login-container";
    LRObject.util.ready(function() {
    	LRObject.init("login", login_options);
    });
</script>
```

### Tracking Events

### LoginRadius Tracking Setting Script

> **Note:** The following tracking will work with identifying because customer.io tracks events by user.

```
<script>
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var LRObject = new LoginRadiusV2(commonOptions);

    // Track all events (traditional and social)
    LRObject.track('customer');

    var login_options = {};
    login_options.onSuccess = function(response) {
    	// On Success
    	console.log(response);
    };
    login_options.onError = function(errors) {
    	// On Errors
    	console.log(errors);
    };
    login_options.container = "login-container";
    LRObject.util.ready(function() {
    	LRObject.init("login", login_options);
    });
</script>
```

### Tracking Setting

Track all events (social and traditional)

```
<script>
    LRObject.track('customer');
</script>
```

### Filtered Tracking Setting

If you want to track when a specific event fires, then use the following code:

- Single Event:

```
<script>
    LRObject.track('customer', eventName); //eg. eventName = ['login']
</script>
```

- Multiple event:

```
<script>
    LRObject.track('customer', eventName); //eg. eventName = ['login', 'registration']
</script>
```

- Custom event:

```
<script>
	var customObject =
	{"event_name": "example",
	 "parameters": {
	 	"examplefield": "examplevalue",
	 	"examplefield2": "examplevalue2"
	 }}

	LRObject.track('customer', '', customObject);
</script>
```

### View the data in customer.io

Make sure every JavaScript file is put in the correct order.

Click on any event (social and traditional) from your LoginRadius interface, and it will send an event to your customer.io Admin-console, under 'Activity' tab. Synced user profiles will appear under 'People' tab.

![customerio-activity](https://apidocs.lrcontent.com/images/Screen-Shot-2018-05-22-at-10-07-00-AM_145145b044e49ee8724.57197143.png "customerio")
