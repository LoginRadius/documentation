# Salesforce Commerce Cloud Cartridge
---
The LoginRadius integration cartridge can be added to a Salesforce Commerce Cloud(SFCC) website based on the SalesForce Reference Architecture (SFRA) to override the default authentication provider. This document is intended to give an overview of the cartridge, and how it can be implemented within an SFRA site.

## SFCC Configuration
Follow the below steps  to add LoginRadius integration cartridge to configure SFCC website: 
1. [Download](https://github.com/LoginRadius/sfcc-identity-plugin) the Customer Identity cartridge folder. The loginRadius.js in the folder ( _cartridge/client/default/js/loginRadius/loginRadius.js_) exports a constructor function that defines a LoginRadius type. The type instances have functions defined that act as a wrapper for fetching LoginRadius (LR) forms that are used for customer authentication related UI tasks. 

 When initialized, the LoginRadius instance provides member methods to fetch LoginRadius interfaces by simply passing in a JQuery Element. This approach is used because it is easy to pass a calling button that was pressed, or form that was submitted, as a parameter.

2. Add the cartridge to the SFCC site cartridge path
3. Add the _int_loginradius/cartridge/client/default/js/loginRadius_ directory to the webpack build config as an alias:
```
 resolve: {
        alias: {
            loginRadius: path.resolve(__dirname, 'int_loginradius/cartridge/client/default/js/loginRadius'),
        }
    }
```
4. Create the system attribute definitions necessary for the integration (create an export file for all necessary SFCC imports like System Object Definitions, etc. to be included with the cartridge).


## Implementation
Follow the below steps to render a LoginRadius interface on the SFCC website:
1. **Add a container to render a LoginRadius form** :  Add a `div` element with data attributes and an `id` attribute to render a LoginRadius form template. The following data attributes can be added to `div`:
 - `data-lr-type`: The data type is used to identify LoginRadius interface to be fetched. This needs to match one of the allowed LoginRadius action types. See documentation for LoginRadius action types [here](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#initmethod4). 
 - `data-lr-enabled`: A  flag indicating if LoginRadius is enabled for authentication.
 - `data-lr-api-key`: The LoginRadius API key for your site. This is stored as a site preference named `logidata-lr-nRadiusIsEnabled`.You can find information on how to get API key [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/).
 - `data-lr-url`: The callback URL if the user has to navigate away from the website to complete the flow (i.e. verification email, or password reset email). This is only needed for some of the form types.

 Rendering of LoginRadius can be performed either on page loading or dynamically. If the form should be loaded when the page load event fires, add `js-loginradius-onload` class to the container element . If the form needs to be loaded dynamically, add the `data-lr-container`  to the calling element with the value matching the `id` of the container element. Please see below examples showing how to render the LoginRadius interface on [page load](https://www.loginradius.com/docs/api/v2/deployment/turn-key-plugins/salesforce-commerce-cloud-identity-plugin#renderingaloginradiusformduringpageloadingevent3) or [dynamically](https://www.loginradius.com/docs/api/v2/deployment/turn-key-plugins/salesforce-commerce-cloud-identity-plugin#dynamicallyrenderingaloginradiusform4).

2. **Import the `loginRadius` module**: The `loginRadius` module is a constructor function that is exported as a module, so it can be included with a require statement:
    ```JavaScript
    var LoginRadius = require('login/loginRadius');
    ```
3. **Create an instance of the `loginRadius` module**: This can be done using the `new` keyword:
    ```JavaScript
    var loginRadius = new LoginRadius();
    ```
4. **Call the `loadForms()` function for any forms that need to be created**:
   ```
    loginRadius: function () {
        // Cache references to DOM objects.
        var $forgotBtn = $('.js-forgot-password-btn');

        // Import the LoginRadius module.
        var LoginRadius = require('./loginRadius');
		//Create an instance of the `loginRadius` module- This can be done using the `new` keyword.
        var loginRadius = new LoginRadius();

        // Init forms that should be created on page load.
        const $elements = $('.js-loginradius-onload');
        loginRadius.loadForms($elements);

        // Add the LoginRadius click handler to the forgot-password button.
        if ($forgotBtn.length) {
            $forgotBtn.on('click.lr', function (event) {
                var $this = $(this);

                // Load the form for the forgot-password UI.
                loginRadius.loadForms([$this]);
            });
        }
    }
    ```
## Examples
The below two examples show how to render a LoginRadius form either on page onload or dynamically:
###  Rendering a LoginRadius form during page loading event
 Add  `js-loginradius-onload` class to the `div` element, the LoginRadius form will be initialized at the time of the page 'onLoad' event. The below HTML and JS code snippets can be used to render a LoginRadius form on page load:
```HTML
     <!-- HTML for LoginRadius form creation using a container element and the js-loginradius-onload class. -->
        <!-- Container Element -->
        <div id="lr-div"
            class="js-loginradius-onload"
            data-lr-type="forgotPassword"
            data-lr-enabled="true"
            data-lr-api-key="<your login radius API key>"
            data-lr-url="http://yoursite.com/resetpassword"
        >
            <!-- Form will be added here -->
        </div>
```
```JavaScript
	/**
    * JS example usage for LoginRadius form creation with a container element.
    */
	$('.js-forgot-password-btn').on('click', function(event) {
		// Import LoginRadius type
		var LoginRadius = require('./loginRadius.js');
		// Initialize an instance.
		var loginRadius = new LoginRadius();
		// Get a JQuery reference to the calling element.
		var $calling = $(this);

		// Call the initInterface() method to create the form.
		loginRadius.initInterface($calling);
	});
```
###  Dynamically rendering a LoginRadius form 
LoginRadius form can be rendered inside the container by using custom events on a calling element. The calling element can be any HTML element that allows data attributes. It can be advantageous to add this to a button or input . Add the `data-lr-container`  to the calling element attribute with the value matching the `id` of the container element. Here is an example showing how to render a LoginRadius form on a button click event.
```HTML
	<!-- Container Element -->
	<div id="lr-div" 
		data-lr-type="forgotPassword" 
		data-lr-enabled="true" 
		data-lr-api-key="<your login radius API key>" 
		data-lr-url="http://yoursite.com/resetpassword">
	<!-- Form will be added here -->
	</div>
	<!-- Calling Element -->
	<button class="js-forgot-password-btn" data-lr-value="forgotPassword" data-lr-container="lr-div">
		<span>forgot password</span>
	</button>
```
```JavaScript
	/**
    * JS example usage for LoginRadius form creation with a container element.
    */
	$('.js-forgot-password-btn').on('click', function(event) {
		// Import LoginRadius type
		var LoginRadius = require('./loginRadius.js');
		// Initialize an instance.
		var loginRadius = new LoginRadius();
		// Get a JQuery reference to the calling element.
		var $calling = $(this);

		// Call the initInterface() method to create the form.
		loginRadius.initInterface($calling);
	});
```
