# Client-Side Integration

The client-side integration is used to process the data points directly from the customer’s web browser and send it to the third party application using the LoginRadius Client Library.

## Features

Check the below features of client-Side integration:
- Identify and instantiate customers.
- Track page views and events.
- Map customer profile data.

## Supported Actions

Check the following actions that you can take while performing client-Side Integration which are supported by the LoginRadius:

- Identify: Capture the customer data from the LoginRadius Cloud Directory and create or instantiate the third party accounts based on the mapped customer data
- Track: Track any events that occur on your site and retrieve data based on your mappings. These events can be default events such as page views, or custom events that can be triggered programmatically
- Landing page integration
- Mobile
- Page: Page view tracking
- Screen
- Semantic Events

## Linking LoginRadius Account with Other Platform Profiles

Setting up our Client-Side Cloud Connectors to your different platforms is simple. With our provided `LoginRadiusV2.Integrations.js` library, you will be able to use a global function known as `LRObject.identify` to initialize the syncing.  This will ensure that customers who log in will have a profile on your platform.  This information will be essential in providing more accurate analytics about your website.

- Declare an LRObject Variable

`var LRObject = new LoginRadiusV2(commonOptions)`

- Use that object to call the method.  Here are the parameters supported

`LRObject.identify(integrationName, data, mapping, isCustom?, callback)`

| Parameter       | Type        | Description                                                                                                                                                                              | Example:                          |
|-----------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| integrationName | String      | Identifier for the integration                                                                                                                                                           | "mixpanel"                        |
| data            | JSON Object | Either: Profile JSON Object from the LoginRadius Profile JSON or Custom Object if isCustom == true                                                                                                   | [Read Here](#descriptionofdataparameter1) |
| mapping         | JSON Object | A high-level data mapping on where the LoginRadius Profile JSON should be mapping into your integration.  Set if and only if isCustom == false, if isCustom == true you pass in empty object. | [Read Here](#descriptionofmapping2) |
| isCustom        | Boolean     | A boolean determining if we should use a standard data mapping, or to use a custom object abiding to the customers' identity platform                                                    | True False                      |
| callback        | Function    | A callback to capture the success or error response of the call to `LRObject.Identify`| [Read Here](#descriptionofcallback7)

* The identify call should be in your `onSuccess` callbacks.  More info on how to set up the `onSuccess` methods located [here](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started-v2)

* A good use case would be to put it in the `login_options.onSuccess`.  Therefore, when a person signs into their account, it would trigger the event and notify your platform that a person has logged in.

## Description of Data Parameter

The Data Parameter in the `LRObject.identify` method is:

| isCustom? | Data Map                                                                                   | Example (Calling the LRObject.identify method)                                                                 |
|-----------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| True      | Must cater to your integrations standards (more details in your specific integrations doc) | `LRObject.identify(integrationName, {Custom Mapping}, {}, true)`       |
| False     | LoginRadius Profile JSON                                                                           | LRObject.identify(integrationName, **response.Profile**, mapping, false) |


*More Details will be provided in your specific integration doc*

## Description of Mapping
![Data Mapping Diagram](https://apidocs.lrcontent.com/images/download_178459442571623262.37904653.png "")

* Each node is represented by a color that is described in the legend.
* Each node is distinguished by a regular expression at the end of the name in brackets to determine how many nodes are required.

## Supported Standard Keys

```
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
```

These are used in the 'standard' array within the mapping object.

##### Example of a Mapping using Standard Keys:

```
var mapping = {
  standard: [
    'email',
    'fullname',
    'phone'
  ]
};
 ```

 * in this example `standard` will deploy 3 things: email, fullname and phone into the desired integration 


##Custom Key-Value Pairs

In addition to using Standard Keys, the standard Mapping option allows you to provide your own custom key-value pairs to map the LoginRadius profile fields of your users to fields in the service you're integrating with.

Each integration can have it's own custom key-value pairs, and for each integration you can also decide if you would like to also use the mappings you have configured in the `standard` array via the `ignoreDefault` option.

Please refer to the documentation of the integration you're implementing for details 

##### An example of a mapping using Standard Keys and custom Key-Value Pairs

 ```
var mapping = {
  standard: [
    'email',
    'fullname',
    'phone'
  ],
  custom: {
    olark: {
      mappings: {
        "Email[0].Value" : "Primary Email"
      },
      ignoreDefault: false
    }
  }
};
 ```

 * in this example, `standard` will deploy 3 things: email, fullname and phone into the mapping of olark
 * In addition to these standard mappings, in the olark integration, it will also deploy a custom identity value of the primary email with the name "Primary Email"

**Google Analytics Deployment Explanation:**
* It will first deploy the standard fields (since ignoreDefault is false)
* It will then map the two fields into Google Analytics

**Intercom Deployment Explanation:**
* Intercom saves custom tags as shown in the mappings.
* In order to get the email value field from our LR Profile and place it into your intercom custom field, it is necessary to put it in that format (according to intercom rules).
* The '$target$' tag is where the 'Email[0].Value' will be deployed.
  * This is the placeholder that is used when you wish to deploy something.  It will always be *$target$*.
* Since ignoreDefault is True, it will **NOT** utilize the standard fields




##<a href="https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form" target="_blank" rel="noopener noreferrer">EBNF</a> Definition of the Mapping
```
mapping ::= '{standard?,custom?}';

standard ::= '['STANDARD_FIELD'*]';
custom ::= '{'PLATFORM: '{mappings: ({'VALID_LR_PROFILE': (string || CUSTOM)*} ) }, ignoreDefault: BOOLEAN }';

STANDARD_FIELD ::= "email" | "age" | "birthdate" | "createddate" | "firstname" | "gender" | "id" | "uid" | "lastname" | "fullname" | "phone" | "profileimage";

PLATFORM ::= 'ga' | 'intercom' | 'mixpanel' | 'olark' | 'hubspot'| 'Facebook App Events';

VALID_LR_PROFILE ::= 'key' where key is a valid response.Profile.[key];

CUSTOM ::= {Value: 'CUSTOMOBJECT'};

CUSTOMOBJECT ::= 'string'* + '$target$' + 'string'* ;
```

##Custom Mapping

The Custom Mapping feature is enabled when `isCustom` is set to `true`. This bypasses the standard mapping functionality and allows you to create your own mapping programmatically.
When enabling this feature the data object being passed to the identify function needs to be a JSON formatted object for the specified key-values you want to push to the service being integrated.

Example:

```
var data =  {
  "Registered at": "Site A",
  "Platform Logged In On": "Mobile"
}
```

## Description of Callback

You can pass a callback as a fifth parameter when calling `LRObject.identify` to capture the success or error response. 

Example:

```
var handleResponse = function(r) {
  console.log(r)
}

LRObject.identify("mixpanel", response.Profile, mapping, false, handleResponse);
```

Example error return: 
```
{code: 2099, message: "Error, Mixpanel requires a unique identifier for the user, please enable uid in your standard mapping"}
```

Example success return: 
```
{code: 2000, message: "Successfully Identified"}
```
## Tracking Events

* Use the LR object to call this method. Here are the parameters supported
```
 LRObject.track(integrationName, eventName);
```

Please call this track method **before** the identify method for accurate behavior. (Optimally in the &lt;head&gt; tag)

| Parameter       | Type        | Description                                                                                                                                                                              | Example:                          |
|-----------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| integrationName | String      | Identifier for the integration                                                                                                                                                           | "mixpanel"                        |
| eventName (Optional)       | Array       | Array of events which you want to track. (Must be all lower case)                                                                                                    | Example: login, registration |

* If you leave the second parameter blank (eventName) it will track all the events for a user. (login, social login, change password, etc..)



## Custom Tracking 

The Tracking feature only supports events that are triggered by the LoginRadius JavaScript Interfaces, the Custom Tracking feature allows you to track your own events.

You can implement tracking on your own events by calling `LRObject.track` when the event triggers
as shown below:

```
var isCustom = {"event_name": "Example",
 "parameters": {
 "examplefield": "examplevalue",
 "examplefield2": "examplevalue2"
 }}

LRObject.track("<< Name of platform being integrated >>", "", isCustom); 
```
Please note that the Custom Tracking feature does not apply to all integrations, please refer to the individal integration's doc for support details.
