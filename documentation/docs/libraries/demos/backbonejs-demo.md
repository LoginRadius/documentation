
# LoginRadius Backbone.JS Demo

**Backbone** is known for being lightweight, as its only hard dependency is on one JavaScript library,Underscore.js, plus jQuery for use of the full library. It is designed for developing single-page web applications, and for keeping various parts of web applications synchronized.

This document explains how to use the LoginRadius JavaScript library - available through CDNs - in the context of the Backbone.JS framework.

> **Prerequisites:** 
- The web server needs to be set up. Refer the guides [here](https://www.maketecheasier.com/setup-local-web-server-all-platforms/) to set up web server locally. You can also set up a small GitHub webserver [here](https://pages.github.com/).
- Download or Clone of the GitHub Repo from [here](https://github.com/LoginRadius/demo/tree/v2-backbonejs-demo) and put it in the root directory of your server.


## Getting Started

1. Download our Backbone.JS demo from Github [here](https://github.com/LoginRadius/demo/tree/v2-backbonejs-demo), and put it in the root directory of your server.

2. Configure your LoginRadius Credentials in **/app/js/config.js** file.

3. After configuring the credentials, go to your web browser and type in the root directory URL that your server is hosting. 

4. Now, you can start the demo and play with the available features in it.


## Noted differences in Backbone.JS


Deploying the preset interfaces on the DOM:
  * **Problem:** Writing the methods correctly, the LR interfaces do not deploy on the DOM properly (It does not deploy at all).

  * **Solution**: Get rid of the ```LRObject.util.ready``` wrapper.

  * **Example**:

```
		// BEFORE //
		LRObject.util.ready(function() {
   		 LRObject.init('registration',registration_options);
		}
```

```
		// AFTER //
		LRObject.init('registration',registration_options);
```




## Features Implemented in the Demo

To keep this demo simple and easy to understand this demo implements only some of the functionalities that are available in  the LoginRadius JavaScript library, including:

1. Login
2. Register
3. Reset Password
4. Social Login

