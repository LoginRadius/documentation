# Salesmachine

---

Salesmachine is a customer success platform built to help businesses onboard, retain and grow their customers. The following lists the steps to complete a client-side integration. This enables information contained in LoginRadius profiles to be sent to Salesmachine's admin-console when they log in. Events emmitted by the JS interfaces will also register in Salesmachine's tracking.

\*Note: Before proceeding, make sure you have understood the [Getting Started Guide](https://www.loginradius.com/docs/integrations/client-side-connectors/getting-started/)
.

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

###Salesmachine JS Code

Copy and paste the follow just before the `</head>`, replace `"YOUR_API_TOKEN"` with your api key which can be found by clicking your name at the top right corner -> App Settings -> API keys under the subheading Developers on the left-hand menu.

```
<script>
	var salesmachine = salesmachine || [];
	salesmachine.Settings = function(apiToken, options) {
	 	var script = document.createElement('script');
	  	script.type = 'text/javascript';
	  	script.async = true;
	  	script.src = ("https:" === document.location.protocol ? "https:" : "http:") + "//my.salesmachine.io/javascripts/salesmachine.min.js";
	  	var firstScript = document.getElementsByTagName('script')[0];
	  	firstScript.parentNode.insertBefore(script, firstScript);
	  	var methodFactory = function (type) {
	    	return function () {
	        	salesmachine.push([type].concat(Array.prototype.slice.call(arguments, 0)));
	  		};
	  	};
	  	var methods = ['init', 'salesmachine', 'pageview', 'account', 'contact', 'track'];
	  	for (var i = 0; i < methods.length; i++) {
	    	salesmachine[methods[i]] = methodFactory(methods[i]);
	  	}
	  	salesmachine.init(apiToken, options);
	};

	salesmachine.Settings("YOUR_API_TOKEN", {});
</script>
```

### Identifying Users

Call the LRObject.identify() method to link LoginRadius profiles to Salesmachine. A good place to put this line of code is on the onSuccess callback of login.

For example:

```
var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
        // On Success
        LRObject.identify('salesmachine', response.Profile, {});//the standard mapping will be used
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

```

- This passes an empty object to the mapping parameter to log the values of all the supported standard keys. Learn more about standard keys [here](https://www.loginradius.com/docs/integrations/client-side-connectors/getting-started/)
.

###Custom Mapping
If for some reason, you wish to handle user information manually but still use the LoginRadius method, you can do so by setting isCustom == true. The data object needs to be a JSON formatted object for the specified key-values you want to place into a user profile.

For example:

```
<script>
	var data = {
		"id" : "001",
		"Profession" : "Software Developer",
		"Plan Name" : "Premium",
		"Status" : "Paid"
	};
</script>
```

###Event Tracking

In Salesmachine, events are called when recording a specific action in the application. Events are specific to a user and are tracked using the user ID as one of the parameters. Add the following code snippet inside the onSuccess functions you want to track:

```
salesmachine.track(response.Profile.Uid, "EVENT_NAME", {
	display_name: "EVENT NAME" 	//human readable name
});
```

For example:

```
<script>
	var login_options = {};
	login_options.onSuccess = function (response) {
		//On Success
		console.log(response);
		LRObject.identify('salesmachine', response.Profile, {});

		salesmachine.track(response.Profile.Uid, "login", {
	   		display_name : "Login"
		});
	};
	login_options.onError = function (errors) {
		//On Errors
		console.log(errors);
	};
	login_options.container = "login-container";

	LRObject.util.ready(function () {
	LRObject.init("login", login_options);
	})
</script>
```

- If isCustom is set to true or you decide on a custom mapping, make sure to pass the appropriate UID to the track function.

###Viewing Data on Salesmachine
From the Admin-console, click the Customer tab. This will show you an overview of all your customers. Clicking on any customer will give you more detailed profile and activity information.

![salesmachine-activity](https://apidocs.lrcontent.com/images/salesmachinecustomersexample_268115c54b17d8280d4.88989453.png "salesmachine")

- See Salesmachine API for reference [here](https://docs.salesmachine.io/).
