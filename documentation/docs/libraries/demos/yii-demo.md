# LoginRadius YII Demo

Yii is a modern framework designed to be a solid foundation for your PHP application. It is fast, secure, and efficient and works right out of the box pre-configured with reasonable defaults. The framework is easy to adjust to meet your needs because Yii has been designed to be flexible.

This document contains the following two sections: 

- [YII Setup and Configuration](#yiisetupandconfiguration0)
- [Demo Features ](#demofeatures1)

This demo will help you quickly implement the LoginRadius Identity Platform with the YII framework. 

## YII Setup and Configuration

This section explains how you can set up and run the YII demo.


> **Prerequisites**: 
>- Basic knowledge of PHP.
>- A [composer](https://getcomposer.org/download/) needs to be installed.

**Step 1**: Clone the YII demo from this [GitHub Repo](https://github.com/LoginRadius/php-sdk/tree/v2-yii-demo).

**Step 2**: To install the dependencies, run the below command:

    composer update

**Step 3**: Configure your LoginRadius credentials in `"/web/index.php"`  file as displayed in the code block below:


    define('APP_NAME', 'LOGINRADIUS_SITE_NAME_HERE'); // Replace LOGINRADIUS_SITE_NAME_HERE with your site name that provide in LoginRadius account.
    define('API_KEY', 'LOGINRADIUS_API_KEY_HERE'); // Replace LOGINRADIUS_API_KEY_HERE with your site API key that is provided in LoginRadius account.
    define('API_SECRET', 'LOGINRADIUS_API_SECRET_HERE'); // Replace LOGINRADIUS_API_SECRET_HERE with your site Secret key that is provided in LoginRadius account.

    define('API_REQUEST_SIGNING', ''); // Pass boolean true if this option is enabled on you app.
    define('AUTH_FLOW', '');

 
>**Note**: Replace 'LOGINRADIUS_SITE_NAME_HERE', 'LOGINRADIUS_API_KEY_HERE' and 'LOGINRADIUS_API_SECRET_HERE' in the above code with your LoginRadius Site Name, LoginRadius API Key, and Secret, which you can get here.   
API Request Signing: define('API_REQUEST_SIGNING', true); if this option is enabled on your app. It will pass the Secret key in the header in API calling instead of parameter.

**Step 4**: Configure your LoginRadius credentials in `"/web/js/option.js" `file as displayed in the code block below:

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

**Step 5**: After configuring the credentials, run the following command:
`php yii serve`

**Step 6**: Open the browser and enter the URL: http://localhost:8080/ to run the demo. 

## Demo Features 

Below is the list of features that are included in this demo:

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
12. Roles Managemen









