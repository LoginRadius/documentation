# Google DoubleClick For Publishers (DFP)

---

**NOTE: While Google DFP is currently not supported in our LoginRadiusV2.Integrations.js. You can refer to this document for details on how you can set up an integration manually.**

[DFP](https://www.google.com/dfp), DoubleClick for Publishers is a very powerful platform which allows you to manage the advertisements on your website.

DFP provides a number of useful features to help you maximize your revenue. One common strategy is to deliver targeted ads for the website visitors based on their profile, such as gender, age, or what they like. By doing this, your advertisers can generate more click-throughs for the ads, which in turn increases your ad revenue. Follow the guide below to set up a targeted ad with DFP and the data obtained through the LoginRadius social login.

## Video Guide

<iframe src="//cdn.embedly.com/widgets/media.html?src=https:%2F%2Fplayer.vimeo.com%2Fvideo%2F129555193&url=https:%2F%2Fplayer.vimeo.com%2Fvideo%2F129555193&image=http:%2F%2Fi.vimeocdn.com%2Fvideo%2F521083977_1280.jpg&key=02466f963b9b4bb8845a05b53d3235d7&type=text%2Fhtml&schema=vimeo" width="1152" height="620" scrolling="no" frameborder="0" allowfullscreen=""></iframe>

## Requirements
To begin, you will need to set up the following accounts:

a. A Google DFP account (which also requires a Google AdSense account)
b. A LoginRadius user account ([how to setup?](https://www.loginradius.com/docs/getting-started/introduction/implementation-guides))
c. Have [LoginRadius Interface](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started) ready for your website

Also, you will need to understand the process of creating an order and an ad unit in DFP.

## Implementation

### Step 1. Define a custom targeting key-value pair, and attach it to an order
Feel free to skip this step if you already know how to do it. For those who do not know, we strongly recommend you to become familiarized with the general concepts and layouts of the DFP admin-console before moving forward. This step covers some aspects of this process, but it may not be detailed enough if you are unfamiliar with the DFP Admin-console.

[Google's Instruction on custom targeting is here](https://support.google.com/dfp_sb/answer/2983838?hl=en)

First, in your DFP Admin-console, go to "Inventory" -> "Key-Values" -> "New Key", and you will see the interface shown below:

![enter image description here](https://apidocs.lrcontent.com/images/lr-dfp-custom-targeting_1827758a555d4c8a999.15602040.png)

Once you've arrived on this page, create a name for the key, add the value(s), and select the value type for your key. Here, we selected the "pre-defined" type for simplicity ([what is value type for a key](https://support.google.com/admanager/answer/188092)). The key defined here is "Like" and the values are "pizza, Pizza Hut".

![enter image description here](https://apidocs.lrcontent.com/images/lr-dfp-key-value_1480958a55606c8cc13.41794057.png)

Next, go to Orders, and either create a new line item or go to the existing one. Under its settings, find the "Add targeting" section, select "Custom criteria", and choose the key and value(s) you had defined.

![enter image description here](https://apidocs.lrcontent.com/images/lr-dfp-order-settings_3151158a55622064001.43789765.png)

Now, save and upload a creative or image for your line item. For example, a pizzahut.gif is uploaded here, which is an ad for Pizza Hut. Don't forget to approve your line item and generate tags from your ad unit. Here, you will see two code snippets, one to communicate with DFP and the other one to locate each ad.

![enter image description here](https://apidocs.lrcontent.com/images/lr-dfp-generate-tag_1254158a556493b7353.81023699.png)

Copy and paste it in your editor, open it in a browser, and if everything works well you should be able to see a random ad delivered by Google AdSense.

![enter image description here](https://apidocs.lrcontent.com/images/lr-dfp-before-login_616858a55678a23ed2.64292501.png)

### Step 2. Get user profile and save into cookies
We will use LoginRadius v2 JS and Like API as an example here.

In the Facebook account, the user has already "liked" Pizza Hut's Facebook page, so after login, call the "Like" API and it will get the response which contains all of the liked pages. Loop it through, if we print them out:

![enter image description here](https://apidocs.lrcontent.com/images/lr-dfp-like-response_1007058a556aa5b7781.97845061.png)

From here, you can analyze the returned response and match it with your predefined array. If there is a match, save it into cookies. In this example, although the match is "Pizza Hut", sometimes it is a good idea to use a more general term to define it, such as "pizza".

```
LRObject.api.getSocialData("<access_token>",
function(response) {
    document.cookie= 'likes='+response;
    alert(JSON.stringify(response));
},
function(errors) {
    alert(JSON.stringify(errors));
}, "like");
```

![enter image description here](https://apidocs.lrcontent.com/images/lr-dfp-pizza-cookie_2025458a556c3f035b0.58950580.png)

### Step 3. Add the ad tags into DFP javascript

Add ".setTargeting()" after ".addService()" to the code created by "generate tag" from above.

```
    <script type='text/javascript'>

        googletag.cmd.push(function() {
        googletag.defineSlot('/33104241/LR-DFP-DEMO-ad300_250', [300, 250], 'div-gpt-ad-1426717804908-0')
            .addService(googletag.pubads())
            .setTargeting("Like", ["pizza"]); /****** Here is the manually added tag ******/
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        });
    </script>
```

Or, as described in the beginning, read it from the cookies and from the user's profile, and render it dynamically.

```
    <script type='text/javascript'>
        var likes_array = [];
        var likes = getCookie("likes"); // Get the cookie with key name
        if( likes == 'pizza' ){ // You can define either array or string values for the cookie                                     // and process it as you need, here we just do a simple match
            likes_array.push(likes);
        }

        console.log(likes_array);
        googletag.cmd.push(function() {
        googletag.defineSlot('/33104241/LR-DFP-DEMO-ad300_250', [300, 250], 'div-gpt-ad-1426717804908-0')
            .addService(googletag.pubads())
            .setTargeting("Like", likes_array); /**** Here is the dynamically added tag ****/
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        });
    </script>
```

That's it! Now you will see the Pizza Hut creative you have uploaded.

![enter image description here](https://apidocs.lrcontent.com/images/lr-dfp-pizza-ad_1169458a557114b1782.95999229.png)
