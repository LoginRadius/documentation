# LoginRadius React Demo

This demo shows how to use the LoginRadius JavaScript library - available through CDNs - in the context of the React framework. 

## How to Run
This section explains how you can set up and run the React demo.

>**Prerequisites:** NPM needs to be installed (click [here](https://nodejs.org/en/download/) to download).

1. Clone the demo from its corresponding branch in [LoginRadius' demo repository](https://github.com/LoginRadius/demo).
2. Configure the file ``./src/utils/config.json`` to match your credentials. You must have every field present in that file, but **leave the homeURL property unchanged.**
3. On terminal or any command prompt run:
   1.  ``` cd to directory ```
   2.  ``` npm install ```
   2.  ``` npm start ```

## Features implemented

For simplicity purposes, this demo implements only some of all of the functionality available through the LoginRadius JavaScript library, including:
 
- Registration
- Login
- Social login
- Password reset ('forgot password')
- Request email verification resend
- Password change
- Email management.

## Noted Differences between Plain-HTML/CSS/JS & React:
* Invoking the LoginRadiusV2 constructor:

  *  **Problem:** Since the LoginRadius JavaScript library is imported through index.html, the LoginRadiusV2 constructor is on the "DOM" while React serves on a "Virtual DOM."

  *  **Solution**: To invoke the LoginRadiusV2 constructor you'll need to use:
  ``` new window.LoginRadiusV2(<options>)```, as shown in *./src/utils/getLoginObject.js*

* Deploying the preset interfaces on the Virtual DOM:
  * **Problem:** Writing the methods correctly, the LR interfaces do not deploy on the DOM properly (It does not deploy at all)

  * **Solution**: Get rid of the ```LRObject.util.ready``` wrapper.
	 ```
		LRObject.init('registration',registration_options);
 	```
  * This will not cause unexpected errors as long as you have the methods to initialize the LR options in your **componentDidMount** method

* Deploying the Social Login Interface on the Virtual DOM:
  * **Problem:** The Social Login Interface references a class on the DOM, the method will not be able to find **classes** on React.

  * **Solution:** On the Social Login component, reference it using **className** instead of **class** .

```
<div id="interfacecontainerdiv" className="interfacecontainerdiv"></div>
```





