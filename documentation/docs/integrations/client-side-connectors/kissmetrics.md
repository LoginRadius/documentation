# Kissmetrics

---

Kissmetrics is a behavioural email and analytics platform. Easily understand and engage with customers through user identites and advanced tracking capabilities. Conveniently run A/B Tests on your users, check various metrics, and more with the Kissmetrics JavaScript code. It would be a very good practice for LoginRadius users to combine it with the LoginRadius analytics tracking code. A major benefit of doing this would be the feature of automatically tracking events (social and traditional).

- The basic implementation takes a couple of minutes.

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

### Kissmetrics JS Code

Sign in to [kissmetrics](https://signin.kissmetrics.com/signin), and navigate to [Setup](https://app.kissmetrics.com/setup) to access the JavaScript snippet. Copy the script and paste it into your HTML just before the end of the head tag.

If you are using PHP as your back-end language, it is recommended to put the script in a separate file, and include it in the page you want to track.

### Identifying Users

With Kissmetrics, the way to identify a user is via a User Profile.

- Call our identify function to link the account

`LRObject.identify("kissmetrics", response.Profile, mapping, false)`

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
    	// Use to sync UID with kissmetrics' unique ID
    	LRObject.identify('kissmetrics', response.Profile, mapping, false);
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
    	// Use to sync data in your kissmetrics integration
    	LRObject.identify('kissmetrics', data, '', true);
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

## Tracking Events

### LoginRadius Tracking Setting Script

**Note:** The following tracking will work with identifying because kissmetrics tracks events by user.

```
<script>
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var LRObject = new LoginRadiusV2(commonOptions);

    // Track all events (traditional and social)
    LRObject.track('kissmetrics');

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
    LRObject.track('kissmetrics');
</script>
```

### Filtered Tracking Setting

If you want to track when a specific event fires, then use the following code:

- Single Event:

```
<script>
    LRObject.track('kissmetrics', eventName); //eg. eventName = ['login']
</script>
```

- Multiple event:

```
<script>
    LRObject.track('kissmetrics', eventName); //eg. eventName = ['login', 'registration']
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

	LRObject.track('kissmetrics', '', customObject);
</script>
```

## View the data in kissmetrics

Make sure every JavaScript file is put in the correct order.

Click on any event (social and traditional) from your LoginRadius interface, and it will send an event to your kissmetrics Admin-console, under 'Live' tab. Synced user profiles will appear under 'People' tab.

![kissmetrics-activity](https://apidocs.lrcontent.com/images/Screen-Shot-2018-05-22-at-3-35-38-PM_238285b04a2270b5e95.81313284.png "kissmetrics")
