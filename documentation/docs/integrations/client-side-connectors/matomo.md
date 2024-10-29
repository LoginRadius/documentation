# Matomo
Matomo, previously known as Piwik, is a open-source analytics platform you can use to track the behaviour of both visitors and registered users of your website. Our integration offers the possibility of tracking events coming from LoginRadius interfaces and custom events from your interface. You can decide to track either category (LoginRadius and custom) of events separately or both categories simultaneously.

## Implementation
If you have not read the [Getting Started document](https://www.loginradius.com/docs/integrations/client-side-connectors/getting-started/)
 on client-side integrations, please do so now. Your understanding of the content below depends on having read that document first.

### Load the JavaScript Files

You need the following two JavaScript files to implement this client-side integration. Ensure they are loaded in the order shown below:

```
<!-- LoginRadius V2 JS -->
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
<!-- LoginRadius V2 Integration JS -->
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

### Insert Matomo Code

[Get Matomo](https://matomo.org/download/), create an account, and add a website to track to the account.

After you have created a website to track on your Matomo account, follow the following steps:

1. Get the Matomo tracking code as specified in the “Finding the Matomo Tracking Code” section of the [JavaScript Tracking Client Guide](https://developer.matomo.org/guides/tracking-javascript-guide) and paste it last in the head section of the HTML files you will track.
2. Unless you want to track page views and link tracing for every of your HTML files, remove the following two statements from the code you just pasted:
   `_paq.push(['trackPageView']);` 

   `_paq.push(['enableLinkTracking']);`
3. Based on your needs, add calls to the integration functions provided in our JavaScript file, namely functions _identify_ and _track_. For a quick feel of how our code integrates with Matomo, do the following:

   - In the HTML head element, append a call to the track method on the LoginRadius instance in your website or application:

   ```
   <script> LRObject.track('matomo')</script>
   ```

   
**Note**: You do not necessarily have to make a call in the head section of the HTML page. As long as you make a call to the track method _before_ a call to the identify method, event tracking will be set up correctly.

   - Add the following statement inside the _onSuccess_ callback property of the login options object:

   ```
   LRObject.identify('matomo', response.Profile, {});
   ```

   **Note**: the statements above will implement the default functionality available for the Matomo integration. For more sophisticated, custom functionality, keep reading this document.

### Identifying Users

This section covers the use of the _LRObject.identify(integrationName, data, mapping, isCustom?)_ function.

###  Default Mapping: LRObject.identify('matomo', response.Profile, {})

Pass an empty object to the mapping parameter to log the values of **_all_** the supported standard keys supported. For a list of these keys, check the [Getting Started document](https://www.loginradius.com/docs/api/v2/integrations/client-side-integrations/getting-started).

### Filtered Mapping: LRObject.identify('matomo', response.Profile, mapping)

If mapping is not an empty object, then the object will be parsed and the included keys will be logged to Matomo. An example of a mapping object:

```
	var mapping = {
		standard: [
			'uid',
			'age',
			'birthdate'
		],
		custom: {
			matomo: {
				mappings: {
					'Email[0].Value': 'Primary Email'
				},
				ignoreDefault: false
			}
		}
	}
```

There is an order followed when logging the keys' values to Matomo. Standard keys' values are stored first; then, the key-value pairs in the custom object are stored.

### Custom Mapping: LRObject.identify('matomo', customObject, '', true)

If the fourth argument - isCustom - is set to true, a custom object must be passed as the second argument. As outlined in the [Getting Started document](https://www.loginradius.com/docs/integrations/integration-platform/client-side-integration/)
, the object must consist of key-value pairs you want to push to the service being integrated. Thus, an example of the customObject is:

```
	var customObject =  {
	  "Department": "HR",
	  "User type": "employee",
	  "Username": response.Profile.UserName,
	}
```

### Notes:

- You are highly advised to include the uid key in the `mapping.standard` array. It is not mandatory to include this key since Matomo automatically assigns an ID when logging a page visit. If you include it, though, you can associate all the data of a visit log and the corresponding actions with a specific user in your database - through the uid, of course.
- The values passed to the identify function are stored as custom variables for the visit being logged.
- The value of Uid is not stored in a custom variable for the visit but is set as the user_id - different from the idvisitor - associated with the visit.
- **Important**: by default, Matomo provides five custom variables for each log. If you keep this default configuration, only the first five key-value pairs in your _mapping_ or _customObject_ object will be logged onto Matomo. If you need to log more than five key-value pairs in your _mapping_ or _customObject_ object when identifying an user, you need to increase the number of custom variables. Follow [this guide](https://matomo.org/faq/how-to/faq_17931/) to increase the number of custom variables you can log onto Matomo.

## Tracking Events

### Default Event Tracking: LoginRadius Events

To track all the events triggered by the LoginRadius interfaces, call `LRObject.track('matomo')`.

### Filtered Event Tracking: LoginRadius Events

To track only some of the events triggered by the LoginRadius interfaces, pass an array with the names of the events you want to track. For example, the call bellow will track and log only the login, forgotpassword, and social login events:

```
LRObject.track('matomo', events); // events = ['login', 'forgotpassword', 'social login']
```

### Custom Event Tracking

To log a custom event, call `LRObject.track('matomo', '', customObject)`:

customObject is a JavaScript object with two properties: _event_name_ and _parameters_.

- The value of _event_name_ is a string with the name of the custom event to be logged.
- The value of _parameters_ is an object with property-value pairs. The name of each property must start with the string ‘dimension’. This is a requirement from Matomo: ‘_The property name for a dimension starts with dimension followed by a Custom Dimension ID, for example dimension1._’ [Matomo guide](https://developer.matomo.org/guides/tracking-javascript-guide#tracking-a-custom-dimension-across-tracking-requests)

Thus, an example of the customObject follows:

```
    {"event_name": "click_on_image",
     "parameters": {
         "dimension1": "02/23/2017",
         "dimension2": "13:44"
     }}
```

### Notes:

- In order for Matomo to store custom dimensions for your custom events, you need to install the Custom Dimensions plugin and activate the specific dimension as well as set its scope as action. Check Matomo's documentation on [Custom Dimensions](https://matomo.org/custom-dimensions/).
- Just as by default Matomo provides five custom variables, by default it offers five custom dimensions, so if you need to log more than five dimensions for your custom events, you will need to increase the number of custom dimensions in your database. Follow [this guide](https://matomo.org/faq/how-to/faq_21121/) to do so, and note the scope used for events' custom dimensions is _action_.
- To be able to log custom dimensions for your custom events, make sure you create the _action_ dimensions when configuring your website on your Matomo Admin-console.

## View the Data on Matomo

There are several ways of visualizing the data sent through our integration. To see an user's data and behaviour, go to your Matomo admin-console and on the panel on the left-hand side, click on Visitors > UserIDs. Select one of the users in the list (there will be users only if you have provided the uid standard key in the _mapping.standard_ array passed to the _LRObject.identify_ function). After clicking on a user ID, a view with the user's data and behaviour you requested to track will show up. Here is an example:
![Sample of User Activity Tracking](https://apidocs.lrcontent.com/images/matomo_user_profile_7085c096b51b807f9.14999174.png "User Activity Tracking")

Too see the events tracked, go to Behaviour > Events on the left-hand side panel. A view like the following will show up:

![Screenshot of Tracked Events Page](https://apidocs.lrcontent.com/images/matomo_events_51755c096b2561bc21.35947127.png "Tracked Events Page")

There are many other ways in which you can use Matomo to manipulate and visualize your data. To learn more, refer to the [Matomo guides](https://matomo.org/).
