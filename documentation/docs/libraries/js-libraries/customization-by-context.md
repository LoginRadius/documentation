# Customization based on device, location or browser

## Overview
 
This document explains the process of generating different LoginRadius forms based on the customer’s device, location, or browser. In this document, you will be getting a detailed guide for creating great design or displaying appropriate content by understanding the context of the customer, which in return can bring more visitors to your website.


> **Prerequisites**
>-  All of the advanced customizations which we have explained here require that the LoginRadius customer Registration Interface is configured on your site. For more details, have a look at the getting started document [here](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#installation1).
>- Basic knowledge of HTML/JavaScript
>- Knowledge of implementation of LoginRadius features using JavaScript, referencing this [document](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/).


## Form customization by device 

LoginRadius forms can be customized for better readability for various devices using LoginRadius JS Hooks e.g. you may want to show longer validation/error message on the laptop/desktop and show small message on the smaller devices like mobile/tablet. Please see document on [JS hooks](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/javascript-hooks) and [JS Form Library](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/js-form-library/)
about various ways to customize the LoginRadius forms and workflow respectively.  Devices can be recognized using the navigator.userAgent property. The following example can be used as a base for customizing any LoginRadius forms using JS hooks for various devices.

### Device detection example

The JS code snippet given below shows smaller placeholder values for emailid and password for mobile devices while largest placeholder values for emailid and password for laptop / desktops using **customizeFormPlaceholder** LoginRadius JS Hooks.

```
if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)) {
    LRObject.$hooks.call('customizeFormPlaceholder', {
        "emailid": "email",
        "password": "PW"
    });
} else if (navigator.userAgent.match(/Tablet|iPad/i)) {
    LRObject.$hooks.call('customizeFormPlaceholder', {
        "emailid": "email address",
        "password": "password"
    });
} else {
    LRObject.$hooks.call('customizeFormPlaceholder', {
        "emailid": "Enter your email address",
        "password": "Enter Your password"
    });

}
```
## Form customization by user location

LoginRadius forms can be customized based on user location. It will lead to an easier-to-use interface, more relevant content, and a personalized experience. Please see LoginRadius [Localization](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/localization) document for the various ways you can localize your website according to a country or region. The following methods shows, how you can find the user location and display relevant LoginRadius form content.

### Using Navigator.geolocation 

The **Navigator.geolocation** property returns a Geolocation object containing the information about the location of the device. When you try to retrieve the location using this **Navigator.geolocation**, a prompt is shown to the user asking them if they will like to share their location with your site.

You can call the **getCurrentPosition()** method to get the latitude and longitude coordinates for the user's current location. You can use these coordinates in any user defined function e.g. do_something in the below code snippet.

```
if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function (position) {
       do_something(position.coords.latitude, position.coords.longitude);
   });

} else {
   alert("Geolocation is not supported by this browser.");
}
```

>**Note**:  
>- Navigator.geolocation might not be supported in some old browsers. 
>- You can write do_something function to customize the LoginRadius workflow based on the passed coordinates for user’s location.
>- If you want to get country or city, you can use Google Reverse Geocoding API.

### Using public web API 


User’s IP address can be used to get your 'country', 'city  etc. You can make an ajax call to a Public IP lookup services/API endpoint like http://ip-api.com/json to get response in a JSON object containing all the information about user’s location. 

### User location example 

You can customize Google recaptcha on the basis of user country. The following example shows if the user is accessing the website from France, Google recaptcha language will be set French and users from other countries, Google recaptcha language will be set as English. You need to use **v2RecaptchaLanguage** common option for setting the langauge. You can find more details regarding common option in [User Registration Getting Started](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/getting-started) document. Please see [Google developer page](https://developers.google.com/recaptcha/docs/language) for multiple languages codes for Google recaptcha.

```
var requestUrl = "http://ip-api.com/json";
$.ajax({
    url: requestUrl,
    type: 'GET',
    success: function (json) {
        If(json.country == "France”){
            commonOptions.v2RecaptchaLanguage = ‘fr';
        }else{
            commonOptions.v2RecaptchaLanguage = 'en';
        }
},
    error: function (err) {
        console.log("Request failed, error= " + json.stringify(err));
    }
});
```
>**Note**: 
>- The Public IP lookup API -http://ip-api.com/json may not be free, scalable or stable in the future.

## Form customization by Browser

The userAgent property in window.navigator object contains information about the user-agent header sent by the browser to the server. This property can be used to detect the browser used by the end user trying to access the LoginRadius application. The following sample code can be used to customize the LoginRadius form based on the browser:

```
//Check if browser is IE 
if (navigator.userAgent.search("MSIE") >= 0 || !navigator.userAgent.match(/Trident.*rv\:11\./)) {
    // insert conditional IE code here
}
//Check if browser is Chrome
else if (navigator.userAgent.search("Chrome") >= 0) {
    // insert conditional Chrome code here
}
//Check if browser is Firefox 
else if (navigator.userAgent.search("Firefox") >= 0) {
    // insert conditional Firefox Code here
}
//Check if browser is Safari
else if (navigator.userAgent.search("Safari") >= 0 & navigator.userAgent.search("Chrome") < 0) {
    // insert conditional Safari code here
}
//Check if browser is Opera
else if (navigator.userAgent.search("Opera") >= 0) {
    // insert conditional Opera code here
} else {
    // default browser code here
}
```

>**Note**: The information from the navigator object can often be misleading as: 
>- the navigator data can be changed by the browser owner
>- Some browsers misidentify themselves to bypass site tests

