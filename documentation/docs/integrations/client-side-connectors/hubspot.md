# Hubspot

---

Hubspot’s platform lets businesses track and filter customer data. This data includes conversation history, product usage behavior, past purchases, payment details, etc. Businesses can use these attributes to trigger personalized, automated marketing emails and in-app messages.
Hubspot lets businesses create and send targeted in-app messages to customers while they’re logged into their app.

All of the features above are done by the Hubspot JavaScript code and it would be a very good practice for LoginRadius users to combine it with the LoginRadius analytics tracking code. A major benefit of doing this would be the feature of automatically tracking events (social and traditional).

- The basic implementation takes a couple of minutes.

**Note: ** Before you go any further, make sure your Hubspot account has been activated.\*\*

##Implementation

You will first need the following JavaScript files (you may have some of them already, make sure the order of the scripts is correct).

Deploy the LoginRadius V2 JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
```

Deploy the LoginRadius V2 Integration JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

###Hubspot JS Code
Start with Hubspot: login from [here](https://app.hubspot.com/login) or SignUp from [here](https://app.hubspot.com/login).

After login, go to Step 1: Install Hubspot JS Library. Copy and paste given snippet (at the setting of the account on the upper right corner, the section 'Install Code & Tracking').

If you are using PHP as your back-end language, it is recommended to put the script in a separate file, and include it in the page you want to track.

### Identifying Users

With Hubspot, the way to identify a user is via a User Profile.

- Call our identify function to link the account

`LRObject.identify("hubspot", response.Profile, mapping, false)`

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
    	// Use to sync UID with hubspot unique ID
    	LRObject.identify('hubspot', response.Profile, mapping, false);
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
    	// Use to sync data in your hubspot integration
    	LRObject.identify('hubspot', data, '', true);
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

###Implement basic tracking
###LoginRadius Tracking Setting Script

```
<script>
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);
    //In order to task all events (tradtional and Social)
    LRObject.track('hubspot');
    var login_options = {};
    login_options.onSuccess = function(response) {
    //On Success
    console.log(response);
    };
    login_options.onError = function(errors) {
    //On Errors
    console.log(errors);
    };
    login_options.container = "login-container";
    LRObject.util.ready(function() {
    LRObject.init("login",login_options);
    });
</script>
```

### Tracking Setting

Track all events (social and Traditional)

```
<script>
    LRObject.track('Hubspot');
</script>
```

### Filtered Tracking Setting

If you want to track the behavior when specific event fired then use the following code:

- Single Event:

```
<script>
    LRObject.track('Hubspot', eventName); //eventName = ['login']
</script>
```

- Multiple event:

```
<script>
    LRObject.track('hubspot', eventName); //eventName = ['login', 'registration']
</script>
```

###View the data in Hubspot
Make sure every JavaScript file is put in the correct order.

Click on any event (social and traditional) from your LoginRadius interface, and it will send an event to your Hubspot Admin-console.

- View the data and information.

To check Live View in Hubspot

- Event Admin Console: You can locate all your existing events, as well as create new events, from your events Admin-console. Navigate to Reports > Analytics Tools and click Events.
- Traffic Analytics: You can track which pages are viewed through Traffic Analytics. Navigate to Reports > Analytics Tools and click Traffic Analytics, and you can also go to the Pages bar.
