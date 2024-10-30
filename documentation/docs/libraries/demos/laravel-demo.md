# LoginRadius Laravel Demo

## Overview
This demo is to help you with a quick implementation of the LoginRadius platform with Laravel. It presumes you have basic knowledge of PHP.

## Getting Started
This section will explain the steps included in the setup of the Laravel demo and how to run the demo.

**Required: Composer needs to be installed**


1. Clone the Laravel demo from GitHub Repo from [here](https://github.com/LoginRadius/php-sdk/tree/v2-laravel-demo).

2. Install the dependencies.
```
    composer update
```

3. Configure your LoginRadius credentials in "bootstrap/constants.php" file.
  
```
	define('APP_NAME', 'LOGINRADIUS_SITE_NAME_HERE'); // Replace LOGINRADIUS_SITE_NAME_HERE with your site name that provide in LoginRadius account.
	define('API_KEY', 'LOGINRADIUS_API_KEY_HERE'); // Replace LOGINRADIUS_API_KEY_HERE with your site API key that provide in LoginRadius account.
	define('API_SECRET', 'LOGINRADIUS_API_SECRET_HERE'); // Replace LOGINRADIUS_API_SECRET_HERE with your site Secret key that provide in LoginRadius account.
	
	define('API_REQUEST_SIGNING', ''); // Pass boolean true if this option is enabled on you app.
	define('AUTH_FLOW', '');
```
> **Note:** Replace 'LOGINRADIUS_SITE_NAME_HERE', 'LOGINRADIUS_API_KEY_HERE' and 'LOGINRADIUS_API_SECRET_HERE' in the above code with your LoginRadius Site Name, LoginRadius API Key, and Secret which you can get here. 
> API Request Signing: define('API_REQUEST_SIGNING', true). If this option is enabled on your app, It will pass the Secret key in the header in API calling instead of parameter.
 
4. Also configure your LoginRadius credentials in "public/js/option.js" file.
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

5. After configuring the above options, run following commands: 
```     
copy .env.example .env
php artisan key:generate
php artisan serve
```

6. Open the browser and hit the url: http://127.0.0.1:8000/.

## Features Implemented in the Demo

Below is the list of features that are included in this demo.


1. Login
2. Register
3. Resend Email Verification
4. Social Login
5. Multi-Factor Authentication
6. Identity Experience Framework
7. Forgot Password
8. Custom Object Management
9. Update Profile
10. Set Password
11. Account Linking
12. Roles Management


