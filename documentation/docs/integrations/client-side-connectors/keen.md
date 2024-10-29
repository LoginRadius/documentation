# Keen

---

Keen is a set of powerful APIs that allow you to stream, compute, and visualize events from anything connected to the internet. Businesses can use these attributes to capture event data and embed custom dashboards in any application. Keen allows the collection of event data, the analytics to analyze collected data and a method to provision role-based data for users and customers to access.

Keen's event based data collection enables users to easily track events using the LoginRadius analytics tracking feature. A major benefit of doing this would be the feature of automatically tracking events (social and traditional).

- The basic implementation takes a couple of minutes.

**Note: ** Before you go any further, make sure your Keen account has a project created.\*\*

##Installation

You will first need the following JavaScript files (you may have some of them already, make sure the order of the scripts is correct).

###Keen JS Code
Start with Keen: login from [here](https://keen.io/login) or SignUp from [here](https://keen.io/signup).

After login, click on an existing project, or create a new project. Click the Installation tab > Javascript and retrieve the projectId and writeKey from the JavaScript sample provided.

In your header, include the the public CDN script for tracking located on the [Keen Github Repo](https://github.com/keen/keen-tracking.js). After importing the CDN script, include the following HTML just below it:

```
<script type="text/javascript">
    var keen = new Keen({
        projectId: '<PROJECT_ID>',
        writeKey: '<WRITE_KEY>'
    });
</script>
```

If you are using PHP as your back-end language, it is recommended to put the script in a separate file, and include it in the page you want to track.

###LoginRadius JS Code
Deploy the LoginRadius V2 JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
```

Deploy the LoginRadius V2 Integration JS

```
<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.Integrations.js"></script>
```

##Implement basic tracking
###LoginRadius Tracking Setting Script

```
<script>
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);
    //In order to task all events (traditional and Social)
    LRObject.track('keen');
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
    LRObject.track('keen');
</script>
```

### Filtered Tracking Setting

If you want to track the behavior when specific event fired then use the following code:

- Single Event:

```
<script>
    LRObject.track('keen', eventName); //eventName = ['login']
</script>
```

Multiple event:

```
<script>
    LRObject.track('keen', eventName); //eventName = ['login', 'registration']
</script>
```

### Custom Tracking

To track custom events, pass a custom event JSON object as the third argument of the LRObject.track() method. The custom event object needs to follow the schema defined below.

```
var customEvent = {
	"event_name": "Example",
    "parameters": {
    	"examplefield": "examplevalue",
        "examplefield2": "examplevalue2",
    },
}

LRObject.track("keen", "", customEvent);
```

## View the data in Keen
Make sure every JavaScript file is put in the correct order.

Click on any event (social and traditional) from your LoginRadius interface, and it will send an event to your Keen Admin-console.

- View the data and information.

To check tracking data in Keen

- Access the project with the project ID that was provided.
- Click streams.
- The event name should be visible. Click it to view more data.
- If event name is not visible try waiting a couple of seconds or refreshing the stream list.
