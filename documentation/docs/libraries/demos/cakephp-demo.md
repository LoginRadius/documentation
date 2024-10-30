
# LoginRadius CakePHP Demo 

CakePHP is an open-source web, rapid development framework that makes building web applications simpler, faster and require less code

This demo will help you with a quick implementation of the LoginRadius platform with CakePHP. 


> **Prerequisites:** 
> - Basic knowledge of PHP
> - The composer needs to be installed.

## Getting Started

1. Setup a local server. If you don't know how to set up a local server refer to these [guides](https://www.maketecheasier.com/setup-local-web-server-all-platforms/) or set up a small GitHub webserver from [here](https://pages.github.com/).

2. Clone the GitHub Repo [here](https://github.com/LoginRadius/php-sdk/tree/V2-cakephp-demo) and put it in your root directory on your server. 

3. Install the dependencies by typing following command in your command-line interface.

	> ** Note:** intl extension should be enabled in PHP.
	```
	composer update
	```

4. Configure your LoginRadius Credentials in "\src\Controller\AppController.php\" file.

	```
		define('APP_NAME', 'LOGINRADIUS_SITE_NAME_HERE'); // Replace LOGINRADIUS_SITE_NAME_HERE with your site name that provide in LoginRadius account.
		define('API_KEY', 'LOGINRADIUS_API_KEY_HERE'); // Replace LOGINRADIUS_API_KEY_HERE with your site API key that provide in LoginRadius account.
		define('API_SECRET', 'LOGINRADIUS_API_SECRET_HERE'); // Replace LOGINRADIUS_API_SECRET_HERE with your site Secret key that provide in LoginRadius account.
		
		define('API_REQUEST_SIGNING', ''); // Pass boolean true if this option is enabled on you app.
		define('AUTH_FLOW', '');
	```
	> Replace 'LOGINRADIUS_SITE_NAME_HERE', 'LOGINRADIUS_API_KEY_HERE' and 'LOGINRADIUS_API_SECRET_HERE' in the above code with your LoginRadius Site Name, LoginRadius API Key, and Secret which you can get from [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/).

	
	> **Note:** If we pass boolean as true in case of `API_REQUEST_SIGNING` then it will pass the Secret key in the header while calling APIs instead of parameter.

5. Configure your LoginRadius Credentials in `\webroot\js\option.js\` file.

	```
		var commonOptions = {};
		commonOptions.apiKey = "";
		commonOptions.appName = "";
		commonOptions.hashTemplate = true;
		commonOptions.sott = "<SOTT>";+
		commonOptions.formValidationMessage = true;
		commonOptions.verificationUrl = domainName+"/login";
		commonOptions.resetPasswordUrl = domainName+"/login";
		var LRObject = new LoginRadiusV2(commonOptions);
	```
6. Go to your web browser and type in the root directory URL that your server is hosting.

## Features Implemented in the Demo

- Login
- Register
- Resend Email Verification
- Social Login
- Multi-Factor Authentication
- Identity Experience Framework 
- Forgot Password
- Custom Object Management
- Update Profile
- Set Password
- Account Linking
- Roles Management


