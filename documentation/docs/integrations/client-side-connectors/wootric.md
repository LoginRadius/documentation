#Wootric

Wootric is a popular platform for measuring and boosting customer happiness. The LoginRadius Wootric Front-End integration allows you to easily push customer data into Wootric to help you further analyze the data collected from Wootric Surveys.


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

Deploy the Wootric JS

```
<script type="text/javascript" src="https://cdn.wootric.com/wootric-sdk.js"></script>
```


### Wootric JS Configuration

Once you have added all of the JavaScript files you will need to login to your Wootric to get the **Account Token**.

1. In the Wootric Admin Console click on the name of your environment in the top right corner, and choose "Settings".

2. You should be taken to the "Account" section, at the bottom center you should find the **Account Token** under "Your unique Account Token is: NPS-********" 

3. Make sure the wootricSettings object is available on your page with your **Account Token**:

```
window.wootricSettings = {
    account_token: 'NPS-********'
};
```

### Identifying Users

The users are identified by passing in the LoginRadius Profile to our Identify function:

`LRObject.identify('wootric', response.Profile, mapping, false);`

Calling the identify function in your code with the 'wootric' argument will enable Wootric along with the Integration.

For more details on how to use the Indentify function see our [Getting Started guide.](https://www.loginradius.com/docs/api/v2/integrations/getting-started)


### Simple Mapping 

The Wootric implementation supports two standard fields **email** to provide the email of the user filling out the Survey, and **createddate** to pass the date the user was created in LoginRadius, if you do not use **createddate** standard field, a timestamp obtained from the user's browser will be used instead.


See below for a Simple Mapping implementation where the user is prompted to fill out a Survey upon login if they are eligible in Wootric.

Example

```
<script>
    var mapping = {
    standard: ["email", "createddate"],
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
    //On Success
    // Enable the Wootric Integration and Identify the user upon Login success.
    LRObject.identify('wootric', response.Profile, mapping, false);
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

### Custom Key-Value Pairs

You can provide custom key-value pairs under the name of `wootric` in the `custom` object of your mapping object. If you try to pass a LoginRadius field to a field that does not exist in Wootric, it will automatically be added to the Wootric `properties` object used for storing custom attributes, see the example below to see how the user's full name is passed from LoginRadius to Wootric via it's custom attributes feature:


```
<script>
    var mapping = {
    standard: ["email", "createddate"],
    custom: {
       wootric:{
         mappings:{
         "FirstName":"Name"
          },
         ignoreDefault:false // ignores standard, only does the mappings
       }
     },
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
    //On Success
    // Enable the Wootric Integration and Identify the user upon Login success.
    LRObject.identify('wootric', response.Profile, mapping, false);
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


### Custom Mapping

If you're using a custom mapping (isCustom == true), this will bypass any mappings set by the LoginRadius Integrations. The data object needs to be a JSON formatted object for the specified key-values you want to send to Wootric following Wootric's standard for the [wootricSettings](http://docs.wootric.com/javascript) object.

Keep in mind that this object requires a `created_at` key with a unix timestamp with precision to the seconds for the value.















