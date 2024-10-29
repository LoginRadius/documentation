# Zendesk

Zendesk is a platform to help companies improve their customer relationships by engagement through support tickets.


## Implementation

You will first need the following JavaScript files (you may have some of them already, make sure the order of the scripts are correct).

Deploy the LoginRadius V2 JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
```

Deploy the LoginRadius V2 Integration JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```


### Identify Method
Zendesk provides a Widget Contact Form where a customer can fill in their name and email.  We provided an identity method that can populate that form for you when a user signs in.

If you wish to capture both fields, here is an example of the mapping.

```
var mapping={
 standard:[
 "email",
 "fullname"
]
};
```

After declaring the mapping, call the 'identify' method afterward (possibly in ur login.onSuccess function)

`LRObject.identify("zendesk",response.Profile, mapping)`


***Note that we currently do not support anything besides these fields***

This is because Zendesk requires other API calls to customize the user field and is not built in natively to their javascript file.

### Custom Mapping

If you're handling the data yourself, (isCustom == true), then make sure your data is formed correctly to pass into the Zendesk integration.

* Zendesk requires that your custom object complies to this:
```
{ name: Name, email: Email_Address }
```

Example
```
<script>
    var data = { name: Name, email: Email_Address }
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
    //On Success
    // Use to sync data in your Zendesk integration.
    LRObject.identify("zendesk",data,'', true)
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

### Track Method
Zendesk does not provide a tracking method therefore, we do not have it implemented in our Integrations JS


### Correct Behaviour

If successful, when a person logs in this should be how their widget looks like:

![enter image description here](https://apidocs.lrcontent.com/images/Screen-Shot-2017-07-06-at-11-39-17-AM_12328595e8470373050.37584270.png "")
