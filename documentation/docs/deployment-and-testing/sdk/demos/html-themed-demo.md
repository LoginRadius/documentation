# HTML Themed Demo

This document contains all of the details for our LoginRadius HTML themed demo. This demo is a simple website that allows different functionalities such as registration and login using the HTML method. This demo demonstrates the ease of implementation, getting a centralized look and feel, and customizability.

## How to Start

* Clone or Download our demo project from [here](https://github.com/LoginRadius/html5-sdk).
* Fill in your credentials under the config.js file located in the root of the project.
* Start your demo project with any web-server.
* We recommend http-server which is installable via `npm install http-server` (npm required)

```
var loginRadiusConfig = {};
loginRadiusConfig.apiKey = "<LoginRadius API Key>";
loginRadiusConfig.appName = "<LoginRadius Site Name>";
loginRadiusConfig.hashTemplate= true;
loginRadiusConfig.sott ="<Sott>";
loginRadiusConfig.verificationUrl = window.location;//Change as per requirement

var LRObject= new LoginRadiusV2(loginRadiusConfig);
```

**SOTT**:

* You can set a static SOTT from [here](https://www.loginradius.com/docs/api/v2/user-registration/sott#staticsott4).  
* If you want to setup a dynamically-generated SOTT, refer [here](https://www.loginradius.com/docs/api/v2/user-registration/sott)


## How it Looks

### Login Page
![enter image description here](https://apidocs.lrcontent.com/images/Screen-Shot-2017-07-05-at-2-43-07-PM_2519595d6095007841.06997671.png "")

### Register Page
![enter image description here](https://apidocs.lrcontent.com/images/Screen-Shot-2017-07-05-at-2-43-13-PM_28614595d60ad8d7703.41138687.png "")

### Forgot Password
![enter image description here](https://apidocs.lrcontent.com/images/Screen-Shot-2017-07-05-at-2-41-34-PM_13656595d60c27ca0a2.34461980.png "")

### On Error
For any input validation errors, the error would display above the form.

![enter image description here](https://apidocs.lrcontent.com/images/Screen-Shot-2017-07-05-at-2-45-20-PM_12978595d60d5a4a5a0.66269727.png "")



### On Loading
![enter image description here](https://apidocs.lrcontent.com/images/Screen-Shot-2017-07-05-at-2-45-05-PM_censored_29662595d617d6f7512.75374977.jpg "")
