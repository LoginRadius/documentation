# LoginRadius CodeIgniter Demo

## Overview
TThis demo is meant to help you with a quick implementation of the LoginRadius platform with the framework. It presumes you have basic knowledge of PHP.



## Getting Started

This section will explain the steps included in the setup of the Codelgnitor demo and how to run the demo.

>**Prerequisites:** Composer needs to be installed.

1. Setup a local server. If you don't know how to set up a local server read these guides [here](https://www.maketecheasier.com/setup-local-web-server-all-platforms/) or set up a small GitHub webserver [here](https://pages.github.com/).

2. Clone the GitHub Repo [here](https://github.com/LoginRadius/php-sdk/tree/v2-codeigniter-demo) and put it in your root directory on your server. 

3. Install the dependencies.
```
    composer update
```

4. Configure your LoginRadius credentials in `/application/helpers/api_helper.php` file.

```
    define('APP_NAME', 'LOGINRADIUS_SITE_NAME_HERE'); // Replace LOGINRADIUS_SITE_NAME_HERE with your site name that provide in LoginRadius account.
	define('API_KEY', 'LOGINRADIUS_API_KEY_HERE'); // Replace LOGINRADIUS_API_KEY_HERE with your site API key that provide in LoginRadius account.
	define('API_SECRET', 'LOGINRADIUS_API_SECRET_HERE'); // Replace LOGINRADIUS_API_SECRET_HERE with your site Secret key that provide in LoginRadius account.
	
	define('API_REQUEST_SIGNING', ''); // Pass boolean true if this option is enabled on you app.
	define('AUTH_FLOW', '');
```
>**Note:** Replace 'LOGINRADIUS_SITE_NAME_HERE', 'LOGINRADIUS_API_KEY_HERE' and 'LOGINRADIUS_API_SECRET_HERE' in the above code with your LoginRadius Site Name, LoginRadius API Key, and Secret which you can get [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/).
> API Request Signing:- define('API_REQUEST_SIGNING', true); if this option is enabled on your app. It will pass Secret key in header in API calling instead of parameter.

5. Also configure your LoginRadius credentials in `/assets/js/option.js` file.
```
    var commonOptions = {};
	commonOptions.apiKey = "<api key>";
	commonOptions.appName = "<app name>";
	commonOptions.hashTemplate = true;
	commonOptions.sott = "<SOTT>";  // required for customer registration
	commonOptions.formValidationMessage = true;
	commonOptions.verificationUrl = domainName+"/login";
	commonOptions.resetPasswordUrl = domainName+"/login";
	var LRObject = new LoginRadiusV2(commonOptions);
```

6. Go to your web browser and type in the root directory URL that your server is hosting. 


## Features Implemented in the Demo

1. Login
2. Register
3. Resend Email Verification
4. Social Login
5. Multi-Factor Authentication
6. Hosted Page
7. Forgot Password
8. Custom Object Management
9. Update Profile
10. Set Password
11. Account Linking
12. Roles Management


