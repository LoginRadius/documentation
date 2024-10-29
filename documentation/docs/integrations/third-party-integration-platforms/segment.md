# Segment

Segment is a popular platform for standardizing data streams across different integrations. The LoginRadius Segment Client Side Integration allows you to easily feed profile data into Segment, which will then pass the data to all of your other integrations.

**Note:** This Integration makes use of the [Client Side Integrations Platform](https://www.loginradius.com/docs/api/v2/integrations/client-side-integrations/getting-started), please see our Client Side Integrations Platform's [Getting Started](https://www.loginradius.com/docs/api/v2/integrations/client-side-integrations/getting-started) Doc if this is your first Client Side LoginRadius Integration.

## Implementation

You will first need the following JavaScript files (If you have these already configured, make sure the order of the scripts is correct).

LoginRadius V2 JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
```

LoginRadius V2 Integration JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

### Segment JS Configuration

Once you have added all of the JavaScript files for LoginRadius, you will need to login to your Segment Admin Console to get the Segment JavaScript code required on your page.

1. In the Segment Admin Console click on the name of the workspace you would like to apply this for.

2. Click on "JavaScript Website" under sources, or click "Add Source" and add "JavaScript Website" as a source if you don't have it already.

3. Once you're looking at the source click on "Add Segment to your site – required"

4. You will be provided with JavaScript code that needs to be applied to all of your pages where you plan on having Segment running.

![SegmentGeneratedCode](https://apidocs.lrcontent.com/images/SegmentGeneratedCode_7995b9949d9bcffc2.11431206.png "GeneratedCode")

5. In your Segment Workspace, apply any Destinations desired.

##Identifying Users

The users are identified by passing in the LoginRadius Profile to our Identify function:

`LRObject.identify('segment', response.Profile, mapping, false);`

Calling the identify function in your code with the 'segment' argument will enable the Integration.

For more details on how to use the `Identify` function see our [Getting Started guide.](https://www.loginradius.com/docs/api/v2/integrations/client-side-integrations/getting-started)

### Standard Mapping

The Segment implementation supports the following standard fields:
**email**, **age**, **profileimage**, **birthdate**, **createddate**, **firstname**, **gender**, **uid**, **lastname**, **name**, **phone**

Keep in mind that you should specify **uid** in your standard mappings for this integration as Segment requires a unique number to identify the users being sent.

See below for a Simple Mapping implementation where the user is being identified with Segment:

```
<script>
    var mapping = {
    standard: [
       "email",
       "age",
       "profileimage",
       "birthdate",
       "createddate",
       "firstname",
       "gender",
       "uid",
       "lastname",
       "name",
       "phone"
],
    custom = {}
    }
    var commonOptions = {};
    commonOptions.apiKey = '********-****-****-****-************';
    commonOptions.appName = '***********';
    var  LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
    //On Success
    // Identify the user upon Login success.
    LRObject.identify('segment', response.Profile, mapping, false);
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

You can provide custom key-value pairs under the name of `segment` in the `custom` array of your mapping object. All of these will be passed to Segment as "Traits", please refer to Segment's Traits [documentation](https://segment.com/docs/spec/identify/#traits) for details.

see the example below to see how we pass a LoginRadius CustomField named "Plan" to Segment as a Trait named "Plan":

```
<script>
     var mapping={
     standard:[
       "email",
       "age",
       "profileimage",
       "birthdate",
       "createddate",
       "firstname",
       "gender",
       "uid",
       "lastname",
       "name",
       "phone"
     ],
     custom:{
         segment:{
             mappings:{
                 "CustomFields.Plan": "Plan"
             },
             ignoreDefault: false
         }
     }
   };
    var commonOptions = {};
    commonOptions.apiKey = '********-****-****-****-************';
    commonOptions.appName = '***********';
    var  LRObject = new LoginRadiusV2(commonOptions);
    var login_options = {};
    login_options.onSuccess = function(response) {
    //On Success
    // Identify the user upon Login success.
    LRObject.identify('segment', response.Profile, mapping, false);
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

If you're using a custom mapping (isCustom == true), this will bypass any mappings set by the LoginRadius Integrations. The data object needs to be a JSON formatted object for the specified key-values you want to send to Segment. Your resulting Object should follow Segment's Traits [documentation](https://segment.com/docs/spec/identify/#traits).

**Note:** As Segment requires a Unique Identifier for the user, your object will need to contain an "id" field with a unique identifier, we recommend passing the user's "Uid" profile field for the "id" in segment.

## Implement Basic Tracking

The LoginRadius Segment integration also supports the use of Segment's `Track` functionality.

### Tracking Setting

Track all events (social and Traditional):

```
<script>
	LRObject.track('segment');
</script>
```

Example of the track functionality on a given page:

```
<script>
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);
    //In order to task all events (tradtional and Social)
    LRObject.track('segment');
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

### Filtered Tracking

If you want to track the behavior when specific events are fired, use the following code:

- Single Event:

```
<script>
    LRObject.track('segment', eventName); //eventName = ['login']
</script>
```

- Multiple event:

```
<script>
    LRObject.track('segment', eventName); //eventName = ['login', 'registration']
</script>
```

### Custom Tracking

The Segment Integration supports [Custom Tracking](https://www.loginradius.com/docs/integrations/client-side-connectors/gosquared/#customtracking6)
, and does not require any special formatting, please refer to our [Custom Tracking](https://www.loginradius.com/docs/integrations/client-side-connectors/gosquared/#customtracking6)
 documentation for details.

## View the Data in Segment

To view the data being pushed to Segment, make sure every JavaScript file is put in the correct order, and cause any event to happen on your page that is using the LoginRadius Client Side Integration Platform, and it will send the event to your Segment Admin-console.

To view these events being sent live, login into your Segment Admin Console

- Navigate to Sources > Website > JavaScript > Debugger

![enter image description here](https://apidocs.lrcontent.com/images/Screenshot-2018-04-19-11-34-21_287655ad8e15e479142.55973157.png "enter image title here")
