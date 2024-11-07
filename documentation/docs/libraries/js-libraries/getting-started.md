# User Registration Getting Started

---

Developing and managing an online identity solution continues to be challenging in terms of addressing security concerns, performance issues, or the high cost of the development and maintenance of the solution. LoginRadius provides a complete User Registration platform that can be implemented on any application.

This document covers how you can utilize our various features and functionalities via using JavaScript. We have explained the implantation of LoginRadius via JS in detail below, you can customize the provided code as per your need while implementing it on your web property.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pzEG890G2Jg?si=dii-nApE7ik8Feov" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

##LoginRadius User Registration

This solution covers:

- [Online User Registration (Registration Form)](#registration)
- [Traditional Email and Password Authentication (Login Form)](#login)
- [Social Login](#social-login)
- [Human Verification (CAPTCHA)](https://www.loginradius.com/docs/api/v2/user-registration/advanced-customization#googlerecaptcha20)
- [User data storage and Authentication API](https://www.loginradius.com/docs/user-profiling/custom-fields-and-custom-objects)
- [Forgotten UserNames or Passwords service API](#forgot-password)

It allows integration of the Login/Registration system across your website. This tool gives you flexibility in terms of design, structure, fields, and content validations during implementation on your site.

## Installation
#### Importing References

To import LoginRadius JavaScript interfaces on your page, add the following script reference to your page. By adding the below URL, you will always get the latest most up-to-date version of the LoginRadiusV2.js via our CDN.

```
https://auth.lrcontent.com/v2/js/LoginRadiusV2.js
```

If you are looking to have control over which version of the library you're using, you can either download and serve your own copy of LoginRadiusV2.js. You can also specify any desired version (like 3.10.0) directly in the URL using the following format:

```
https://auth.lrcontent.com/v2/LoginRadius-vX.Y.Z.js
```

Here, each letter represents the type of change. For example, X, Y, and Z are Major, Minor, and Patch versions respectively as per [Semantic Versioning](https://semver.org). Let’s say if you want to access LoginRadiusV2.js version 3.10.0 then the following URL will work for you:

```
https://auth.lrcontent.com/v2/LoginRadius-v3.10.0.js
```

> **Note:**

- You can refer to our [updates blog](https://www.loginradius.com/updates/) for the current Version of LoginRadiusV2.js.
- LoginRadius may retroactively push urgent security updates to previous versions of LoginRadiusV2.js.

## Initialization of LoginRadius Object

After adding the reference to the page, make sure to include the fallback JS for instantation of LoginRadiusV2 singleton. It can be instantiated by defining the commonOptions parameter and calling creating a new instance of the LoginRadiusV2 Object.

```
<script type='text/javascript'>
	if (typeof LoginRadiusV2 === 'undefined') {
    	var e = document.createElement('script');
    	e.src = 'https://auth.lrcontent2.com/v2/js/LoginRadiusV2.js';
    	e.type = 'text/javascript';
        document.getElementsByTagName("head")[0].appendChild(e);
	}
	var lrloadInterval = setInterval(function () {
    	if (typeof LoginRadiusV2 != 'undefined') {
        	clearInterval(lrloadInterval);
        	LoginRadiusV2JsLoaded();
    	}
	}, 100);
	function LoginRadiusV2JsLoaded() {
		var commonOptions = {};
		commonOptions.apiKey = "<your loginradius api key>";
		commonOptions.hashTemplate= true;
		commonOptions.sott ="<Get_Sott>";
		commonOptions.verificationUrl = window.location;//Change as per requirement
		var LRObject= new LoginRadiusV2(commonOptions);
	}
</script>
```

A detailed listing of all available parameters for the **commonOptions** from above, is shown below:

| Name                                                                 | Required | Action                                                                            | Description                                                                                                                                               |
|----------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| apiKey (String)                                                       | ✅       | All                                                                               | This parameter is used to provide the API Key to your JS Interface.                                                                                     |
| sott (String)                                                         | ✅       | Registration                                                                     | Secure One Time Token used during Registration. For details see our SOTT documentation.                                                                  |
| verificationUrl (URI String)                                          | ✅       | Registration, Login, Resend Email Verification, Add Email, Verify Email, Social Login | Used to pass the desired URL in the verification email where the user will get verified.                                                                  |
| appName (String)                                                      | ❌       | All                                                                               | Set to your LoginRadius site name, this is required for User Registration to work with Single Sign On API.                                                |
| hashTemplate (Boolean)                                                | ❌       | Social Login, Link Account, Custom Interface                                     | Recommended: Used when the interface template contains hash (#).                                                                                         |
| smsTemplateInstantOTPLogin (String)                                   | ❌       | Login                                                                             | Used to select the name of OTP login SMS template.                                                                                                        |
| customObjectName (String)                                             | ❌       | Custom Object                                                                    | Used to set the name of custom object.                                                                                                                     |
| callbackUrl (Encoded URI String)                                      | ❌       | Social Login, Custom Interface                                                   | Recommended: LoginRadius redirects the user to this URL with token, default value is located on your LoginRadius Admin Console.                           |
| debugMode (Boolean)                                                   | ❌       | All                                                                               | Recommended: Used to show console log during debugging.                                                                                                  |
| deleteUrl (URI String)                                                | ❌       | Delete User                                                                      | Recommended: Url, where you handle Delete user functionality.                                                                                             |
| maskSensitiveInput (Boolean)                                          | ❌       | Login,Registration                                                               | Recommended: To show otp and security answers in encrypted form while entering.                                                                          |
| formValidationMessage (Boolean)                                       | ❌       | All                                                                               | Recommended: Set value true if you want to show form validation message just below the form elements.                                                     |
| periodicPasswordReset (Boolean)                                       | ❌       | Login                                                                             | Recommended: If set to true user can reset password if its expired.                                                                                      |
| showTwoFactorOnProfile (Boolean)                                      | ❌       | Profile Editor                                                                   | Recommended: Shows Multi-Factor Authentication button on profile page.                                                                                  |
| v2Recaptcha (Boolean)                                                 | ❌       | Registration                                                                     | If True, this enables reCAPTCHA see our advanced customization documentation for details.                                                                |
| v2RecaptchaSiteKey (String)                                           | ❌       | Registration                                                                     | Your reCAPTCHA Public Key, see our advanced customization documentation for details.                                                                     |
| v2RecaptchaLanguage (String)                                          | ❌       | Registration                                                                     | Used to change the Google reCAPTCHA language. The Google reCAPTCHA language code e.g. fr (French), de (German), ru (Russian).                            |
| invisibleRecaptcha (Boolean)                                          | ❌       | Registration                                                                     | If true, enables invisible reCAPTCHA if set to true, see our advanced customization documentation for details.                                            |
| accessTokenResponse (Boolean)                                         | ❌       | Login, Social Login                                                              | If set to false then V2 JS will not handle token, Default value is true.                                                                                 |
| appPath (String)                                                      | ❌       | SSO Login, Logout                                                                | Used to define the path to set cookies.                                                                                                                   |
| callbackInsideSameWindow (Boolean)                                    | ❌       | Social Login, Custom Interface, Link Account                                     | Redirect user inside the child window(pop-up window) on successful login when set to true, Default is false.                                               |
| callbackType (String)                                                 | ❌       | Social Login, Custom Interface                                                   | For determining the method used to return the token to the user. Available options are "Post", "QueryString" and "Hash". It is set to "Post" by default. |
| enableHeaderSott (Boolean)                                            | ❌       | Registration                                                                     | Set the value false if you want to pass the secure one time token(SOTT) in query string. Default value is true.                                            |
| existPhoneNumber (Boolean)                                            | ❌       | Registration                                                                     | This option check in LoginRadius Database that phone number exist or not.                                                                                 |
| formRenderDelay (Int)                                                 | ❌       | Registration                                                                     | Set the delay in milliseconds before rendering the User Registration interface.                                                                          |
| passwordLength (Object)                                               | ❌       | Registration, Reset Password, Forgot Password                                    | Set password length, object must be in form `{min:10, max:32}`.                                                                                       |
| passwordlessLogin (Boolean)                                           | ❌       | passwordlessLoginValidate                                                       | To initiate one click login.                                                                                                                             |
| passwordlessLoginOTP (Boolean)                                        | ❌       | Login                                                                             | To initiate one click OTP login when phone number login enabled at your site.                                                                            |
| integrationName (String)                                              | ❌       | Login, Social Login, SSO Login                                                   | Pass the JWT appname which you created in LoginRadius Admin Console.                                                                                     |
| projectionFields (JSON Object)                                        | ❌       | All                                                                               | To fetch only provided fields from api for given action, object should be in this format `{"login":["Profile","access_token"]}` , where key is action and value is array of fields. |
| providerCountry (String)                                              | ❌       | Social Login, Custom Interface, Link Account                                     | For filtering social providers based on country.                                                                                                        |
| providersList (Array)                                                 | ❌       | Social Login, Custom Interface, Link Account                                     | To show only provided list of social providers.                                                                                                          |
| resetPasswordConfirmationEmailTemplate (String)                      | ❌       | Reset Password                                                                   | Used to set the name of reset password confirmation email template.                                                                                     |
| resetPasswordEmailTemplate (String)                                  | ❌       | Reset Password                                                                   | Used to set the name of reset password template.                                                                                                         |
| deleteUserEmailTemplate (String)                                      | ❌       | Delete User                                                                      | Template use to delete user action.                                                                                                                       |
| addEmailTemplate (String)                                             | ❌       | Add Email                                                                        | Used to set the name of add email template.                                                                                                               |
| onetouchLoginEmailTemplate (String)                                   | ❌       | onetouchLogin                                                                   | Used to set the name of no registration email template.                                                                                                 |
| resetPasswordUrl (URI String)                                          | ❌       | Reset Password                                                                   | Set dynamic URL for reset password.                                                                                                                      |
| smsTemplate2FA (String)                                               | ❌       | Login                                                                             | Used to set the name of SMS template for Multi-Factor Authentication.                                                                                   |
| smsTemplate2FAWelcome (String)                                        | ❌       | Login                                                                             | Name of welcome SMS template for Multi-Factor Authentication.                                                                                           |
| smsTemplatePhoneVerification (String)                                | ❌       | Registration                                                                     | Used to set the name of phone number verification template.                                                                                             |
| smsTemplateWelcome (String)                                           | ❌       | Registration                                                                     | Used to set the name of welcome SMS template.                                                                                                            |
| smsTemplateOneTouchLoginWelcome (String)                              | ❌       | One Touch Login                                                                  | Used to set the template of the welcome email for One Touch Login via SMS.                                                                              |
| smsTemplateOneTouchLogin (String)                                     | ❌       | One Touch Login                                                                  | Used to set the name of one touch login SMS template.                                                                                                    |
| smsTemplateForgot (String)                                            | ❌       | Forgot Password                                                                  | Name of forgot password SMS template.                                                                                                                    |
| smsTemplateUpdatePhone (String)                                       | ❌       | Update Phone                                                                     | Name of update phone SMS template.                                                                                                                      |
| termsAndConditionHtml (String)                                        | ❌       | Registration                                                                     | This HTML is shown just above the submit button and displays terms and conditions text to user.                                                           |
| tokenExpire (Boolean)                                                 | ❌       | Logout                                                                            | Set to True to expire token.                                                                                                                             |
| tokenType (String)                                                    | ❌       | Login, Social Login, SSO Login                                                   | Pass "jwt" to get a JWT Token see our JWT Login Flow documentation for details.                                                                          |
| unLinkAccountCallbackUrl (Encoded URI String)                         | ❌       | Unlink Account                                                                   | When you unlink the account from account linking interface. At that time, you can add unlink callback URL.                                               |
| verificationEmailTemplate (String)                                    | ❌       | Registration                                                                     | Used to set the name email verification template name. This is used in registration and resend email verification event.                               |
| welcomeEmailTemplate (String)                                         | ❌       | Registration                                                                     | Used to set the name of welcome email template. This will be sent after successful account verification.                                                   |
| promptPasswordOnFirstLoginForSocial (Boolean)                         | ❌       | Registration                                                                     | Used to present the user with a password prompt to setup a traditional profile login during their initial Social Login.                                  |
| autoFilledFieldForSocial (Boolean)                                    | ❌       | Login                                                                             | Enabling this property prompts the user with pre-filled details from the social login along with any missing required fields.                             |
| otpEmailVerification (Boolean)                                        | ❌       | Registration, Reset Password                                                     | If set to "True" this changes both the Registration and Reset





## Init Method

This method takes two parameters. The signature of this method is:

```
LRObject.init(action, options);
```

Here is a table outlining the type and description of each parameter.

| Parameter | Type   | Description                                                                                                                               |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| options   | Object | See below for a sample options object initialization                                                                                      |
| action    | String | Which action to perform. Allowed actions are login, registration, resetpassword, forgotpassword, emailverification sociallogin and so on. |

A detailed table for the **options** parameter from above:

| Parameter        | Required | Description                                                                                                                                                           |
|------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| container (String) | ✅       | Id/class of div or any HTML element where the form of this action will be rendered. (Not for SSO)                                                                   |
| templateName (String) | ✅       | Id of Script which contain Social Login/Account Linking Template                                                                                                     |
| classPrefix (String) | ❌       | This is an optional parameter, this is required when using two forms on the same page, example values are "registration-form1", "registration-form2" etc.             |
| onSuccess (Function) | ✅       | Callback function to be called on successful action. Signature of this callback function should be function(response,data) {} because on success response will be returned and data is original form data as JSON type. |
| onError (Function)   | ❌       | Callback function to be called on error (validation error, username exists, CAPTCHA error etc.) of action. Signature of this callback function should be function(errors) {} because on error, errors will be returned and this will be an array of errors. |


A detailed table for the **action** parameter from above:

| Parameter                                                                                                                  | Type   | Description                                                             |
| -------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------- |
| [login](#login)                                                                                                           | String | Perform Login Action                                                    |
| [registration](#registration)                                                                                             | String | Perform Registration Action                                             |
| [resetPassword](#reset-password)                                                                                          | String | Perform Reset Password Action                                           |
| [forgotPassword](#forgot-password)                                                                                        | String | Perform Forgot Password Action                                          |
| [verifyEmail](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#emailverification0)                                     | String | Perform Email Verification Action                                       |
| [changePassword](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#changepassword7)                                     | String | Perform Change Password Action.When user is logged in.                  |
| [Social Login](#social-login)                                                                                               | String | Perform Social Login with User Registration.                            |
| [linkAccount](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#accountlinking4)                                        | String | Perform account Linking action. When user is logged in.                 |
| [unLinkAccount](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#accountunlinking5)                                    | String | Perform account unLinking action. When user is logged in.               |
| [profileEditor](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#profileeditor8)                                       | String | Perform Profile update action                                           |
| [deleteUser](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#deleteuser2)                                             | String | Send delete user email.                                                 |
| [deleteUserConfirm](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#handledeleteuserfunctionality3)                   | String | Handle Delete User functionality                                        |
| [updatePhone](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#updatephone5)                                           | String | Perform Update Phone Action                                             |
| [changeUsername](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#changingusername9)                                   | String | Perform Change username Action. When user is logged in.                 |
| [resendVerificationEmail](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#resendemailverification9)                   | String | Perform resend Email Verification Action                                |
| [addEmail](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#addemail11)                                                | String | Perform add Email Action. When user is logged in.                       |
| [removeEmail](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#removeemail12)                                          | String | Perform remove email Action. When user is logged in.                    |
| [createTwoFactorAuthentication](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#createmultifactorauthenticationmfa12) | String | Perform Multi-Factor Authentication action.                             |
| [onetouchLogin](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#onetouchlogin15)                                      | String | Perform No Registration Password Less Login.                            |
| [updateSecurityQuestion](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#securityquestion17)                          | String | Updates answers to the given security questions.When user is logged in. |
| [resetPasswordBySecurityQuestion](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#securityquestion18)                 | String | Resets password using security questions.                               |
| [smartLogin](https://www.loginradius.com/docs/libraries/js-libraries/advanced-js-customizations/#smartloginfeature18)                                      | String | Email Prompt Smart Login.                                               |
| [passwordlessLogin](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#passwordlessloginvalidate16)                      | String | Passswordless Login interface.                                          |
| [backupCodeButton](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#backupcodebutton14)                                | String | Show Backup Code button.                                                |
| [resetBackupCodeButton](https://www.loginradius.com/docs/api/v2/user-registration/advanced-js-customizations#resetbackupcodebutton15)                      | String | Show Reset Backup Code button.                                          |

## Registration

To implement registration form interface, use `LRObject.init` method with the registration action. Following code can be used for reference:

```
var registration_options = {}
registration_options.onSuccess = function(response) {
//On Success
console.log(response);
};
registration_options.onError = function(errors) {
//On Errors
console.log(errors);
};
registration_options.container = "registration-container";
LRObject.util.ready(function() {
LRObject.init("registration",registration_options);
})

```

```
<div id="registration-container"></div>
```

> **Note:** Success callback function will return a JSON object `{IsPosted: true}` as response.

## Registration Form Schema

To provide custom schema for registration form, following code can be used for reference. It will override the default schema.

```
LRObject.registrationFormSchema  = [
	{
		"type": "string",
		"name": "emailid",
		"rules": "valid_email|required",
		"options": "",
		"DataSource": null,
		"ParentDataSource": null,
		"Parent": "",
		"Checked": true,
		"display": "Email Id",
		"permission": "w"
	},
	{
		"type": "password",
		"name": "password",
		"rules": "min_length[6]|max_length[32]|required",
		"options": "",
		"DataSource": null,
		"ParentDataSource": null,
		"Parent": "",
		"Checked": true,
		"display": "Password",
		"permission": "w"
	},
	{
		"type": "string",
		"name": "firstname",
		"rules": "",
		"options": "",
		"Parent": "",
		"Checked": true,
		"display": "First Name",
		"permission": "w"
	}
]
```

## Login

To implement login interface, use `LRObject.init` method with the login action. Following code can be used for reference:

```
var login_options = {};
login_options.onSuccess = function(response) {
//On Success
console.log(response);
};
login_options.onError = function(errors) {
//On Errors
console.log(errors);
};
login_options.container = "login-container";

LRObject.util.ready(function() {
LRObject.init("login",login_options);
})
```

```
<div id="login-container"></div>
```

> **Note:** Success callback function will return a response as this:`{Profile: Object, access_token: "xxxxxxxxxxxxxxxxxxxxxxxxxx", expires_in: "2017-01-28T08:41:59.10265Z"}`.

> Object which contains user profile, access token and expiry time.
> After maximum failed login attempts, login will get locked. You can set the value of **MaximumFailedLoginAttempts** and **LoginLockedType** from the [Admin Console](https://adminconsole.loginradius.com/platform-security/account-protection/auth-security/brute-force-lockout).

## Social Login

To implement social login interface, use `LRObject.init` with sociallogin action. Please have a look at the following sections for more details.

### Social Login Interface

Here first of all, a custom interface needs to be defined as per the code shown below:

```
var custom_interface_option = {};
custom_interface_option.templateName = 'loginradiuscustom_tmpl';
LRObject.util.ready(function() {
LRObject.customInterface(".interfacecontainerdiv", custom_interface_option);
});
```

```
<div id="interfacecontainerdiv" class="interfacecontainerdiv"></div>
```

Then, a template should be applied for the interface. It can be done with the help of following code:

```
<script type="text/html" id="loginradiuscustom_tmpl">
<a class="lr-provider-label" href="javascript:void(0)" onclick="return <#=ObjectName #>.util.openWindow('<#=Endpoint #>');" title="<#=Name #>" alt="Sign in with <#=Name #>">
    <#=Name #>
</a>
</script>
```

### Handle Social Login Response

When a user logs in with the selected social provider, a social profile of the user is returned as response. If the returned profile contains missing fields that are marked as "required" in your LoginRadius Admin Console (For example, logging in with Twitter doesn't return email which is required by default), it will prompt a form to let the user input the needed information. If the email is missing from the profile, then the user has to verify his email address as well. Refer to the following code for more details.

```
var sl_options = {};
sl_options.onSuccess = function(response) {
//On Success
//Here you get the access token
console.log(response);
};
sl_options.onError = function(errors) {
//On Errors
console.log(errors);
};
sl_options.container = "sociallogin-container";

LRObject.util.ready(function() {
LRObject.init('socialLogin', sl_options);
});
```

```
<div id="sociallogin-container"></div>
```

> **Note:** If you want to change the button name of the rendered required field form then use following code:

> `LRObject.\$hooks.call('setButtonsName',{
> socialregistration: "Submit Required Field"
> });` Success callback function will return a response as this `{Profile: Object, access_token: "xxxxxxxxxxxxxxxxxxxxxxxxxx"}`. Object which contains user profile, access token and expiry time.

### Social Interface Customization

You have complete control over the look, feel and behavior of the custom template. There are few parameters available for some possible customizations. Please find them below:

1. [Available Parameters](#custom-interface-parameters)
1. [Setting Custom Icons](#setting-custom-icons)
1. [Setting Custom CSS Classes](#adding-custom-css-classes)
1. [Browser Specific Templates](#handling-browser-specific-redirects)
1. [Programmatic Link Creation](#programmatic-link-creation)

##### Custom Interface parameters

Additional parameters can be appended to the url in the Custom Interface template as a query parameter

**JavaScript**

```
<#=Endpoint #>&is_access_token=true
```

| Parameter                     | Type                   | Description                                                                                                                                                                              |
| ----------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lrinterfacebackground         | Hexadecimal color code | This sets the background color of the LoginRadius interface, Default is transparent                                                                                                      |
| lrsocialloginheading          | String                 | Sets a header for your social login interface, Default is blank                                                                                                                          |
| same_window                   | Bool                   | Redirect user inside the child window(pop-up window) on successful login when set to true, Default is false                                                                              |
| scope                         | String                 | Accepts a valid LoginRadius scope or custom scope set, please refer to scoping documentation for further information, Default value determined by LoginRadius end user settings          |
| enableapicaching              | Bool                   | If set to true the LoginRadius interface will cache loaded API responses in local storage, this will improve the interface rendering time. Default value is false                        |
| isConnectingTextOnInterface   | String (True or False) | For enabling and disabling connecting text on interface when clicking on any provider and default value is ‘false’                                                                       |
| InsidePopupfavIcon            | URI String             | For changing favicon of login popup window, default value is LoginRadius’s icon. Make sure loading image URL should be absolute and has HTTPS domain.                                    |
| isConnectingInsidePopup       | Bool                   | For disabling Loading image inside popup and default value is 'true'                                                                                                                     |
| ConnectingTextInsidePopup     | Bool                   | For changing text inside popup and default value is Connecting...                                                                                                                        |
| ConnectingImageURLInsidePopup | URI String             | For changing loading image inside popup and default value is LoginRadius's default image. Make sure loading image URL should be absolute and has HTTPS domain.                           |
| ac_linking                    | Bool                   | For determining whether this is an account linking interface or a standard Login interface. Single Sign On behaviour differs with the account linking interface, Set to false by default |

##### Setting Custom Icons

You can create custom icons for all the providers by customizing their names as per your need. For example, If you want to change Facebook's icon name to Facebook.png. You can achieve the same by modifying the template to generate the links with an img tag included. This img tag should point to the location where you are storing the custom icons.

**HTML**

```
<script type="text/html" id="loginradiuscustom_tmpl">
   <a href="javascript:void()" onclick="return <#=ObjectName #>.util.openWindow('<#=Endpoint #>');">
      <img src="/your-image-directory-path/<#=Name #>.png" title="sign in with <#=Name #>"/>
   </a>
</script>
```

> We have included `<#=Name #>` to generate the provider name based on specified interface and in the above it will generate the image sources like "Facebook.png". You can also add a prefix or suffix for long names like `Facebook-login.png` where "Facebook" was generated with the`<#=Name #>` but you will need to change the names of the images appropriately.

##### Adding Custom CSS Classes

The Custom Interface templating engine is flexible and supports modifications to the generate HTML Structure. You can add classes directly to the generate icons links by including a class parameter in it.

**HTML**

```
<script type="text/html" id="loginradiuscustom_tmpl">
   <a href="javascript:void()" onclick="return <#=ObjectName #>.util.openWindow('<#=Endpoint #>'); " class="login-icons <#=Name #>"></a>
</script>
```

> In the above example, login-icons class contains background and `<#=Name #>` is the class name and contains the icon position in the sprite image. `<#=Name#>` defines to the Social Provider Name ie. Facebook, Twitter, etc

Or you can include additional containers within the template and apply classes/styling to them.

**HTML**

```
<script type="text/html" id="loginradiuscustom_tmpl">
   <div class="<#=Name #>">
      <a href="javascript:void()" onclick="return <#=ObjectName #>.util.openWindow('<#=Endpoint #>');"></a>
   </div>
</script>
```

> The "div" class in the above script will have a dynamic class name according to the provider ie. Facebook, Twitter, etc

##### Handling Browser Specific Redirects

Many mobile browsers handle the redirection of pop-up windows differently and do not allow for normal redirection of the LoginRadius authentication systems. You can handle the redirection in mobile browsers by including an additional custom interface specific to Mobile browsers as shown below:

a. Add a check to the location you set the Custom Interface Template.

**JavaScript**

```
var custom_interface_option = {};
if(navigator.userAgent.match('CriOS')||navigator.userAgent.match('iPhone')){
    // Is Chrome iOS or iPhone
    custom_interface_option.templateName = "loginradiuscustom_tmpl_MOBILE";
} else {
    custom_interface_option.templateName = "loginradiuscustom_tmpl";
}
```

Note: The above check determines whether the current browser is iOS Chrome or an iPhone and uses the custom template rather than the regular web template. You can use these links for determining what mobile browsers you would like to support:

[Common User Agent Strings](http://www.useragentstring.com/)

[Mobile Specific Strings](http://www.zytrax.com/tech/web/mobile_ids.html)

b. Add the Mobile Specific custom interface, This interface should include the "callbacktype" parameter set to "hash" parameter in order to redirect in mobile devices.

**HTML**

```
<script type="text/html" id="loginradiuscustom_tmpl_MOBILE">
<span class="lr-provider-label lr-sl-shaded-brick-button lr-flat-<#=Name.toLowerCase() #>"
onclick="window.location.href='<#=Endpoint#>&is_access_token=true&callback=<#=window.location.href.split('#')[0] #>&callbacktype=hash';"
title="Sign up with <#=Name#> Mobile" alt="Sign in with <#=Name #> Mobile" >
<span class="lr-sl-icon lr-sl-icon-<#=Name.toLowerCase() #>"></span>
Sign up with <#=Name#> Mobile
</span>
</script>
```

##### Programmatic Link Creation

You can bypass the template engine entirely and create your own links to be included on buttons or triggered events. In order to trigger the authentication you should format your links as follows:

**Text**

```
https://<Site-Name>.hub.loginradius.com/RequestHandler.aspx?apikey=<LoginRadius API Key>&provider=<Provider Name>
```

In the above, replace `<Site-Name>` with your LoginRadius Site Name, `<LoginRadius API Key`> with your Loginradius API Key, and `<Provider Name>` with the lowercase social provider name(facebook, twitter, etc)

> You will need to have configured the social providers on your LoginRadius account before using them with the above link.

**Sample Code**

Refer to the following sample code to implement the Social login using the above programmatic link. The following code gets the token using the post method.

```
<!DOCTYPE html>
<html>

<head>
    <title>Social Login | LR User Registration</title>
    <meta charset="utf-8">
    <script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
</head>

<body>
    <h3>Soicallogin by programmatic links</h3>
    <div id="provider-container">
      <button class= "provider" onclick="openWin()" >login with facebook</button>
    </div>
    <script type="text/javascript">
        function openWin() {
            let callback = window.location.href,
            let appname = "<LR app name>";
            let apikey = "LR API key"
            let url = `https://${appname}.hub.loginradius.com/RequestHandler.aspx?apikey=${apikey}&provider=facebook&callback=${callback}&same_window=&is_access_token=true&callbacktype=&disablesignup=undefined&scope=lr_basic`;
            window.open(url, "childWindow", 'menubar=1,resizable=1,width=450,height=450,scrollbars=1');
            window.addEventListener("message", LRReceiveMessage, false);
            function LRReceiveMessage(event) {
                if (event.origin.indexOf(('hub.loginradius.com')) > -1) {
                    console.log("LRTokenKey", event.data);
                }
            }
        }
    </script>
</body>
</html>
```

### Social Login By Ping

**Social Login with Ping API** workflow allows you to access the LoginRadius token via the [**SocialLogin by Ping API**](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/social-login-by-ping/). In this workflow, when the social login is initiated, LoginRadius starts calling continually [**SocialLogin by Ping API**](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/social-login-by-ping/). in the parent window. Once the social login is completed at the social provider’s interface, LoginRadius **returns the access token** in the **SocialLogin by Ping API** calls.

> **Note**: The NoCallback feature is not enabled by default, for enabling this feature contact the LoginRadius [support team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).
> By enabling the **Social Login with Ping API** feature, you can leverage **SocialLogin by Ping API** to get the access token with the user profile so that you don’t have to use a callback page for your Social login.

#### Using LoginRadius SocialLogin library functions

You need to define the **commonOptions.noCallbackForSocialLogin = true** to get the token via the Ping API. LoginRadius starts calling the **SocialLogin by Ping API** automatically and returns the token with the user profile data in the **sl_options.onSuccess** function. Refer to [Social Login](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#social-login) for more details on how to implement social login workflow using LoginRadius library function.

#### Using Programmatic Link

You can bypass the template engine entirely and create your own links to be included on buttons or triggered events for ping API. You will need to create a unique random string **callbackguid** and include it in your programmatic link. In order to trigger the authentication, you should format your links as follows:

```
https://<Your_Site_Name>.hub.loginradius.com/RequestHandler.aspx?apikey=<API_Key>&provider=google&nocallback=true&callbackguid=<uniuqe random guid value>
```

Here, **nocallback=true** in query indicates that the login request will be without the callback, and `callbackguid=<Random_Identifier>` is a random unique identifier. You will need to call the **SocialLogin by Ping API continually with the same callbackguid** value to fetch the access token with the user profile data.

## Forgot Password
To implement forgot password interface, use `LRObject.init` with forgotPassword action. Following code can be used for reference:

```
var forgotpassword_options = {};
forgotpassword_options.container = "forgotpassword-container";
forgotpassword_options.onSuccess = function(response) {
// On Success
console.log(response);
};
forgotpassword_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("forgotPassword", forgotpassword_options);
});
```

```
<div id="forgotpassword-container"></div>
```

> Note
>
> Success callback will return a json object `{IsPosted:true}` as a response.

## Reset Password
After the forgot password operation, there might be a need for reset password interface. To implement the reset password interface, use `LRObject.init` with resetPassword action. Following code can be used for reference:

```
var resetpassword_options = {};
resetpassword_options.container = "resetpassword-container";
resetpassword_options.onSuccess = function(response) {
// On Success
console.log(response);
};
resetpassword_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("resetPassword", resetpassword_options);
});
```

```
<div id="resetpassword-container"></div>
```
