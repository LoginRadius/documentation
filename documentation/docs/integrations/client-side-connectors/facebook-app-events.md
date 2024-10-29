# Facebook App Events

Facebook’s platform lets businesses track and filter customer data. This data includes conversation history, product usage behavior, past purchases, payment details, etc. Businesses can use these attributes to trigger personalized, automated marketing emails and in-app messages.
Facebook-App-Events lets businesses create and send targeted in-app messages to customers while they’re logged into their app.

All of the features above are done by the Facebook App Events JavaScript code and it would be a very good practice for LoginRadius users to combine it with the LoginRadius analytics tracking code. A major benefit of doing this would be the feature of automatically tracking events (social and traditional).

The basic implementation takes a couple of minutes.

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

### Facebook App Events JS Code

Start with Facebook App Events: you need to create a [Facebook Developer Account](https://developers.facebook.com/docs/apps/#register).

After login, go to Step 1: [Add a new Facebook app](https://developers.facebook.com/apps/).

Step 2: Configure Facebook App Events setting: go to the basic setting of the app Admin Console and fill in your website URL.

Step 3: Install Facebook SDK in your website: Copy and paste the snippet below and replace 'your-app-id' with your App ID which can be found in the basic setting of the app Admin Console.

    ```
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            appId      : 'your-app-id',
            xfbml      : true,
            version    : 'v2.8'
          });
          FB.AppEvents.logPageView();
        };

        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      </script>
    ```

If you are using PHP as your back-end language, it is recommended to put the script in a separate file, and include it in the page you want to track.

### Implement basic tracking
#### LoginRadius Tracking Setting Script

```
<script>
    var commonOptions = {};
    commonOptions.apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    commonOptions.appName = 'XXXXX';
    var  LRObject = new LoginRadiusV2(commonOptions);
    //In order to task all events (tradtional and Social)
    LRObject.track('FBAppEvents');
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

#### Tracking Setting

Track all events (social and Traditional)

```
<script>
    LRObject.track('FBAppEvents');
</script>
```

#### Filtered Tracking Setting

If you want to track the behavior when specific event fired then use the following code:

- Single Event:

```
<script>
    LRObject.track('FBAppEvents', eventName); //eg. eventName = ['login']
</script>
```

Multiple event:

```
<script>
    LRObject.track('FBAppEvents', eventName); //eg. eventName = ['login', 'registration']
</script>
```

#### View the data in Facebook App Events

Make sure every JavaScript file is put in the correct order.

Click on any event (social and traditional) from your LoginRadius interface, and it will send an event to your Facebook App Events Admin Console.

- View the data and information.

To check Live View in [Facebook Analytics](https://www.facebook.com/analytics)

- Event debugging: You can locate all your existing events, as well as create new events, from your events debugging. Navigate to Activity > Events debugging.
