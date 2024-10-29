# Lotame

---

[Lotame](https://www.lotame.com/) is a data management platform that helps companies gain insights on their customers.

This integration leverages Lotame's Advanced JS tags for passing in your customer data from LoginRadius. For more information on Lotame's Advanced JS tags and how Lotame collects data, please refer to Lotame's [internal documentation](https://mylotame.force.com/s/article/The-Advanced-JavaScript-Tags-and-Passing-Data-to-Lotame).

## Implementation

The following JavaScript files are needed. If they are already present, ensure that they are in the correct order.

```
<!-- LoginRadius V2 JS -->
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
<!-- LoginRadius V2 Integration JS -->
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

### Lotame JS Code

Initialize Lotame's Advanced JS tag by including the following script:

```
<script src="http://tags.crwdcntrl.net/c/0/cc.js?ns=_cc0" id="LOTCC_0"></script>
```

Lotame provides each client with a unique `client_id` to replace all instances of **0** above.

### Identifying Users

Call the LRObject.identify() method to link profiles.

```
LRObject.identify("lotame", <Profile Data>, <Mapping Object>, <isCustom>);
```

This method should be called after the onSuccess callback from login, as the response profile data needs to be passed as its argument. Specifics on the mapping object can be found in the [Getting Started](https://www.loginradius.com/docs/api/v2/integrations/getting-started#descriptionofmapping2) document.

> **Note:** Personally Identifiable Information (PII) should not be passed into Lotame. Therefore, not all of LoginRadius' standard keys are supported in the `mapping` object.

The following is an example of a mapping object containing the supported standard keys.

```
var mapping = {
	standard: [
    	"age",
	    "createddate",
        "gender",
        "uid"
	],
	custom: {
		lotame: {
			mappings: {
				"genp": ["behaviour name 1", "behaviour name 2"],
				"dem": ["behaviour name 3"]
			},
			ignoreDefault: false,
		}
	}
}
```

A complete example:

```
<script>
    var mapping = {
      standard: [
            "age",
            "createddate",
            "gender",
            "uid"
      ],
      custom: {
        lotame: {
          mappings: {
				"genp": ["behaviour name 1", "behaviour name 2"],
				"dem": ["behaviour name 3"]
			},
          ignoreDefault: false,
        }
      }
    }

    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);

    var login_options = {};
    login_options.onSuccess = function(response) {
    	// On Success
    	LRObject.identify("lotame", response.Profile, mapping, false);
    	console.log(response);
    };
    login_options.onError = function(errors) {
    	// On Error
    	console.log(errors);
    };

    login_options.container = "login-container";

    LRObject.util.ready(function() {
    	LRObject.init("login",login_options);
    });
</script>
```

### Lotame Behaviour Types

Behaviours passed into Lotame are categorized by Behaviour Type. Please refer to Lotame's [internal documentation](https://mylotame.force.com/s/article/The-Advanced-JavaScript-Tags-and-Passing-Data-to-Lotame) for further information on Behaviour Types.

The standard keys you declare in the `mapping` object are automatically mapped to the following Lotame Behaviour Types:

| Standard Keys | Lotame Behaviour Types | Standard Values for Behaviour Type Override    |
|---------------|------------------------|------------------------------------------------|
| age           | age                    | response.Profile.Age                           |
| gender        | gen                    | response.Profile.Gender                        |
| createddate   | genp                   | response.Profile.CreatedDate                   |
| uid           | genp                   | response.Profile.Uid                           |


To override the standard key Behaviour Types, define the standard keys as a Custom Mapping:.

```
/* Standard Keys being overridden: age, gender
Behaviour Type being overridden: age -> dem
Behaviour Type being overridden: gen -> genp
Additional LoginRadius Customer Profile information mapped: TimeZone, Subscription */

var mapping = {
	standard: [
        "createddate"
    ],
	custom: {
		lotame: {
			mappings: {
				"dem": [response.Profile.Age, response.Profile.TimeZone],
                "genp": [response.Profile.Gender, response.Profile.Subscription]
			},
			ignoreDefault: false,
		}
	}
}
```

## Custom Mapping

To specify your own unique behaviours not included in the LoginRadius' Customer Profile, a custom data object needs to be defined and passed into the LRObject.identify() method. This data object needs to be a JSON formatted object for the specified key-values.

An example data object:

```
var data =  {
     "dem": ["behaviour1"],
     "genp": ["behaviour2", "behaviour3"]
}

LRObject.identify("lotame", data, {}, true);
```

## Tracking Users

Call the LRObject.track() method to register LoginRadius interface events with Lotame's tracking.

```
LRObject.track("lotame");
```

## Filtered Tracking

To track only specific events from the LoginRadius interface, pass an array of event names as the second argument of the LRObject.track() method.

```
var eventNames = ["login", "registration", "forgotpassword"];
LRObject.track("lotame", eventNames);
```

## Custom Tracking

To track custom events, pass a custom event JSON object as the third argument of the LRObject.track() method.

```
var customEvent = {
	"event_name": "Your Event Name"
}

LRObject.track("lotame", "", customEvent);
```

> Note: Lotame does not have a separate workflow for submitting events. The equivalent of `LRObject.track("lotame", "", customEvent)` is calling `LRObject.identify` with an "act" Behaviour Type.

## Viewing Data in Lotame

All data passed in through this integration arrives in Lotame as Uncategorized Behaviours. You can view your behaviours in the "Manage Behaviors" page in the Lotame Admin-console.

![enter image description here](https://apidocs.lrcontent.com/images/lotame_manage_behaviours_85095b5f380c9767c5.44131368.png "enter image title here")

> Note: By default, Lotame's Behaviour Threshold is set to 1000 "behaviour hits" within 48 hours. So, behaviours passed in below this threshold will not appear within the Lotame Admin-console. To modify this threshold, and for any further questions on how Lotame ingests data, please contact your Lotame Technical Account Manager.
