# Mixpanel

---

Mixpanel is the most advanced analytics platform for mobile & web. Instead of measuring pageviews, it helps you analyze the actions people take in your application.It can be very helpful to figure out which button has the most clicks or which social provider is favored by your users. (See what Mixpanel can do [here](https://mixpanel.com/help/))

All of the features above are done by the Mixpanel JavaScript code, and it would be a very good practice for LoginRadius users to combine it with the LoginRadius analytics tracking code. Major benefits of doing this is it automatically track events (social and traditional) which are happening;

- The basic implementation takes about a few minutes.

* Before you go any further, make sure your Mixpanel has been activated.

## Implementation

You will first need the following JavaScript files (you probably have some of it already, feel free to skip it but make sure the order of the scripts is correct).

Deploy the LoginRadius V2 JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
```

Deploy the LoginRadius V2 Integration JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

### Mixpanel JS Code
Start with Mixpanel from [here](https://mixpanel.com).

In your Mixpanel Admin-console, go to: 'Users' -> 'Explore' - click on the 'Set up now' button. After that, copy and paste without modification.

If you are using PHP as your back-end language, it is recommended to put the script in a separate file, and include it in the page you want to track.

### Identifying Users

Call the LRObject.identify method

```
LRObject.identify("mixpanel",response.Profile,mapping)
```

```
<script>
  var mapping={
    standard:[
      "email",
      "firstname"
    ],
    custom:{
      mixpanel:{
        mappings:{
        "Email[0].Value":"Email Address"
        },
        ignoreDefault:true // ignores standard, only does the mappings
      }
    }
  };

  var commonOptions = {};
  commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  commonOptions.appName = 'XXXXX';

  var LRObject = new LoginRadiusV2(commonOptions);
  var login_options = {};

  login_options.onSuccess = function(response) {
    //Use to sync data in your Mixpanel integration.
    LRObject.identify("mixpanel",response.Profile,mapping)
    console.log(response);
  };

  login_options.onError = function(errors) {
    console.log(errors);
  };

  login_options.container = "login-container";
    LRObject.util.ready(function() {
    LRObject.init("login",login_options);
  });
</script>
```

The 'mapping' passed in the identified method, can be read in more detail in the [Getting Started](https://www.loginradius.com/docs/api/v2/integrations/getting-started)

### Custom Mapping

If you're using a custom mapping (isCustom == true), the data object needs to be a JSON formatted object for the specified key-values you want to place into an account.
Example:

```
data = {
  "Registered at": "Site A",
  "Platform Logged In On": "Mobile"
}
```

Example:

```
<script>
  var data =  {
    "Registered at": "Site A",
    "Platform Logged In On": "Mobile"
  }

  var commonOptions = {};
  commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  commonOptions.appName = 'XXXXX';

  var LRObject = new LoginRadiusV2(commonOptions);
  var login_options = {};

  login_options.onSuccess = function(response) {
    //On Success
    // Use to sync data in your mixpanel integration.
    LRObject.identify("mixpanel",data,'', true)
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

## Implement basic tracking

### LoginRadius Tracking Setting Script

```
<script>
  var commonOptions = {};
  commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  commonOptions.appName = 'XXXXX';

  var LRObject = new LoginRadiusV2(commonOptions);

  //In order to task all events (tradtional and Social)
  LRObject.track('mixpanel');

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
    LRObject.track('mixpanel');
</script>
```

### Filtered Tracking Setting

If you want to track the behavior when specific event fired then use the following code:

- Single Event:

```
<script>
    LRObject.track('mixpanel', eventName); //eventName = ['login']
</script>
```

- Multiple event:

```
<script>
    LRObject.track('mixpanel', eventName); //eventName = ['login', 'registration']
</script>
```

## View the data in Mixpanel
Make sure every JavaScript file is put in the correct order.

Click on any event (social and traditional) from your LoginRadius interface, and it will send an event to your Mixpanel Admin-console.  
View the data and information.

To check Live View in Mixpanel

- Navigate to Engagement > Live view

![](https://apidocs.lrcontent.com/images/mp2_2099359390d627f7769.53510237.png)




![](https://apidocs.lrcontent.com/images/mp3_2199859390d7f8eda89.96365261.png)

## Analyze Basic Tracking

## General Events Monitoring

- Open Mixpanel.

- Navigate to 'Engagement' -> 'Insights'

![](https://apidocs.lrcontent.com/images/mp1_2367159390da249afc7.28745435.png)
