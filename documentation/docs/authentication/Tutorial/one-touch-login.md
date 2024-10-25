# One Touch Login Introduction

**One Touch Login** allows your customers to log in without the obligation to **register** first and remember the password. A link or OTP is sent to their email address or phone number respectively and once the link or OTP is verified, the customer will be logged into the account. 
   
LoginRadius Identity Platform allows you to implement the One Touch Login feature in the following two ways:

- [**One Touch Login by Email**](#onetouchloginbyemail2): The customer can log in directly by clicking on the link received in the Email. This email does not have to be pre-registered on the web/mobile application. Thus, the login flow will always remain the same whether you are already a customer of a web/mobile application or not.

- [**One Touch Login by SMS**](#onetouchloginbysms3): The customer can log into a web/mobile application directly entering the OTP received on their phone number.

> **Note**: One Touch Login SMS will work only if the [**Phone Login**](/authentication/tutorial/phone-login/) feature is enabled.


## One Touch Login Guide

This guide will take you through the process to set up and implement One Touch Login. It covers everything you need to know on how to configure One Touch Login in the LoginRadius Identity Platform and deploy it onto your web application.


> **Pre-requisites**:
> - One Touch Login should be enabled on your account.
> - Basic knowledge of  HTML/JavaScript

**Enable One Touch Login**

Login to your [**Admin Console**](https://adminconsole.loginradius.com/) account and navigate to [**Authentication configuration > Advance Login Methods > One Touch Login Settings**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/advance-login-methods/one-touch-login-settings).

The following screen appears:

![one touch enable](https://apidocs.lrcontent.com/images/image-38_2121980436687a701b6d1a7.94957080.png "one touch enable")

The above screen displays that the One Touch Login is enabled for your account since the One Touch Login box is in green with the enabled text. If not **enabled** for your account, raise a request to the [ LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket)

> **Note:** In addition to this feature if you also want to disable the use of **Login APIs**, where password is **required field**, such as [**Auth Login By Email**](/api/v2/customer-identity-api/authentication/auth-login-by-email/), [**Auth Login By Username**](/api/v2/customer-identity-api/authentication/auth-login-by-username/) or [**Auth Login By Phone**](/api/v2/customer-identity-api/phone-authentication/phone-login/), and etc., please raise a request to the [ LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

## Part 1 - Configuration

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to implement the One Touch Login functionality. 

- [One Touch Login by Email](#onetouchloginbyemail2)
- [One Touch Login by SMS](#onetouchloginbysms3)



### One Touch Login by Email

To customize the email that will be sent to the customers, manage the One Touch Login request per account during a limited time and login token validity, refer to the following steps:


**Step 1:** To manage the email content and settings for the One Touch Login by Email, navigate to [**Platform Configuration >Authentication configuration> Advance Login Methods > One Touch Login Email**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/advance-login-methods/one-touch-login-email)
 
The following screen appears:

![template](https://apidocs.lrcontent.com/images/image-39_8647230326687aa9a3785b6.22460222.png "template")

**Step 2:** Expand the **One Touch Login Email Settings** panel. Enter the desired [**Request Limit**](/authentication/concepts/email-communications/#partglobalemailsettings5), [**Request disabled Period**](/authentication/concepts/email-communications/#partglobalemailsettings5) and [**One touch Login  Email Token Validity Limit**](/authentication/concepts/email-communications/#partglobalemailsettings5) as highlighted in the following screen:


![one touch email settings](https://apidocs.lrcontent.com/images/image-40_8980025226687a83f1ca774.63722230.png "one touch email settings")

Click the **Save** button.


**Step 3:** Select the Email template that you would like to manage as highlighted in the following screen:

![one touch](https://apidocs.lrcontent.com/images/unnamed-22_4313771796687a8f0586806.44255834.png "one touch")

You can perform actions such as [**Add Template**](/authentication/concepts/email-communications/#partemailtemplates6), [**Edit Template**](/authentication/concepts/email-communications/#partemailtemplates6), [**Send Test Email**](/authentication/concepts/email-communications/#partemailtemplates6) and [**Delete Template**](/authentication/concepts/email-communications/#partemailtemplates6).


> **Note:** You can only delete the new template(s) that you have created i.e. you will not be able to delete the default template.

### One Touch Login by SMS

To customize the SMS that will be sent to the customers, manage the One touch login request per account during a limited time and OTP validity, refer to the following steps:


**Step 1:** To manage the SMS content and settings for  the **One Touch Login by SMS**, navigate to [**Platform Configuration -> Authentication Configuration -> Advanced Login Methods -> One Touch Login SMS**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/advance-login-methods/one-touch-login-sms)

The following screen appears: 

![sms](https://apidocs.lrcontent.com/images/unnamed-23_13713026006687a941538c44.47453721.png "sms")

**Step 2**: Expand the **One Touch Login SMS Settings** panel. Enter the desired [**Request Limit**](/authentication/concepts/sms-communication/#partsmstemplatesettings1), [**Request disabled Period**](/authentication/concepts/sms-communication/#partsmstemplatesettings1) and [**One touch Login OTP Validity Limit**](/authentication/concepts/sms-communication/#partsmstemplatesettings1) as highlighted in the following screen:

![sms](https://apidocs.lrcontent.com/images/unnamed-24_15637772526687a9b6b6dcf7.48188032.png "sms")

**Step 3:** Select the SMS template that you would like to manage as highlighted in the following screen:

![template](https://apidocs.lrcontent.com/images/unnamed-23_17915257876687aa005c6127.88790850.png "template")

You can perform actions such as [**Add**](/authentication/concepts/sms-communication/#addtemplate4), [**Edit**](/authentication/concepts/sms-communication/#edittemplate3), [**Reset**](/authentication/concepts/sms-communication/#resettemplate6) and [**Delete**](/authentication/concepts/sms-communication/#deletetemplate5) template. 

## Part 2 - Deployment 


The LoginRadius Identity Platform supports a variety of implementation methodologies that allow you to customize the customer flows. 

This guide focuses on the following deployment methods:

- [**Identity Experience Framework**](#idxdeployment5): You should refer to these deployment steps if you are targeting LoginRadius Identity Platform implementation using IDX. 

- [**JavaScript Libraries**](#javascriptdeployment6): You should refer to these deployment steps if you are targeting LoginRadius Identity Platform implementation using JavaScript.


However, you can similarly accomplish the deployment with any of the implementation methodologies. Full details on these methodologies can be found [here](/api/v2/getting-started/implementation-workflows/).

>**Note:**
> - To implement the One Touch Login using API refer to this [document](/api/v2/customer-identity-api/one-touch-login/one-touch-login-overview/)
> - To implement the One Touch Login using technology-specific SDK refer to this [document](/api/v2/deployment/sdk-libraries/overview/)

### IDX Deployment

Make sure you have implemented the following redirects and callbacks from your web application.


**Step 1:** Locate the **Auth Page URL** as explained below:

Navigate to [**Deployment > Identity Experience Framework (Hosted)**](https://adminconsole.loginradius.com/deployment/idx), and the following screen appears:

![Auth Page ](https://apidocs.lrcontent.com/images/1_302836204086435b412.59992184.png "Auth Page ")


The Auth Page URL displays your unique hosted page domain in the following format:

```
<https://<sitename>.hub.loginradius.com/auth.aspx>
 
```

In the above URL, [sitename](/api/v2/admin-console/deployment/get-site-app-name/) is the name of your LoginRadius Site. 

**Step 2:** Embed Authentication Pages in your Website, as explained below:

Add a link on your webpage for redirecting customers to the Identity Experience Framework(Hosted) Page. 

 ```
<a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=<Desired Action>&return_url=<Return URL>">Register</a>
```

In the above URL replace the following: 

**a.** LoginRadius Site Name : Your unique LoginRadius [sitename](/api/v2/admin-console/deployment/get-site-app-name/) as found in step 1.

**b.** Desired Action: Following are the action list you can use 

  - Login
    
  - Register

  - Forgot password

  - Logout 

 
  Examples:

   Login Page 

```
  <a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>">Login</a>
```

  Registration Page

 ```
  <a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>">Register</a>
```
**c.** Return URL: The URL you would like to redirect customers after completing the selected action.

Try this link out on your page; you should be redirected over to the LoginRadius Hosted Page where you can register, login, and reset your password.


**Step 3:** To load the One Touch Login interface, you are required to perform the following: 

1. Navigate to [**Deployment > Identity Experience Framework (Hosted)**](https://adminconsole.loginradius.com/deployment/idx) and the following screen appears:

   ![IDX](https://apidocs.lrcontent.com/images/Deployment---LoginRadius-User-Dashboard_27170620c00837adaf1.03385119.png "IDX")

2. Add the following HTML Code to display One Touch Login Interface after closing **login-container** div of  **auth.aspx** page

   ```
   <div id="onetouchLogin-container"></div>
   ```

   The following screen displays the added HTML Code:

   ![IDX hosted page](https://apidocs.lrcontent.com/images/Deployment---LoginRadius-User-Dashboard-2_22954620c249e335453.29906577.png "IDX hosted page")

3. Click the **Before Script** folder and default **Auth - Before Script** file will be displayed as shown in the screen below:

   ![before js](https://apidocs.lrcontent.com/images/U7_215665ee2158772d656.46675228.png "before js")

4. Add the following code at the bottom of the existing code.

   ```
   $(document).ready(function(){
   onetouchlogin();
   });
   function onetouchlogin(){
   var one_touch_options = {};
   one_touch_options.container = "onetouchLogin-container"; //Id of HTML container for One touch login Interface
   one_touch_options.onSuccess = function(response) {
   // On Success, you can define code here according to your use case.
   console.log(response);
    if(typeof response.access_token != 'undefined' && response.access_token != ''){
        redirectToReturnUrl(response.access_token);
    }
    else if(typeof response.Data != 'undefined' && typeof response.Data.AccountSid != 'undefined' && response.Data.AccountSid != ''){
        jQuery("#lr-raas-message").show().removeClass("loginradius-raas-error-message").addClass("loginradius-raas-success-message").text("An OTP has been sent").delay(10000).fadeOut(300);
    }
    else{    jQuery("#lr-raas-message").show().removeClass("loginradius-raas-error-message").addClass("loginradius-raas-success-message").text("An Email with Login link has been sent").delay(10000).fadeOut(300);
    }
    };
    one_touch_options.onError = function(errors) {
     // On Errors, you can define the code according to your use case.
    console.log(errors);
    jQuery("#lr-raas-message").show().removeClass("loginradius-raas-success-message").addClass("loginradius-raas-error-message").text(errors[0].Description).delay(10000).fadeOut(300);
   }
   LRObject.util.ready(function() {
   LRObject.init("onetouchLogin", one_touch_options);  //Loginradius Hook to initiate One touch Login
   });
   }
    ```

5. Click on the Save button as displayed below:

     ![default](https://apidocs.lrcontent.com/images/Deployment---LoginRadius-User-Dashboard-3_11500620c2ecde77e76.59996532.png "default")

6. Navigate to your Auth page URL (`https://<sitename>.hub.loginradius.com/auth.aspx`) , where [sitename](/api/v2/admin-console/deployment/get-site-app-name/) is the name of your LoginRadius Site. 

     ![hosted page](https://apidocs.lrcontent.com/images/otl5_171405e864c9ca08094.63588959.png "hosted page")

> **Note:** You can use the following URL link to display the profile page of logged in customer 

> `<a href="https://<LoginRadius site name>.hub.loginradius.com/profile.aspx">View Profile</a>`

> Use the below JavaScript snippet to capture the access token on your page: 

```
function getParameterByName(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
var access_token = getParameterByName(“token”);
```

> We have additional language specific examples [here](/api/v2/deployment/identity-experience-framework/hosted/usage/#tokenhandling1) if you want to capture this token in other programming languages.

### JavaScript Deployment

The following are the sequential steps to deploy the One Touch Login feature using the LoginRadius JavaScript Libraries:

**Step 1**: Include the LoginRadius JavaScript Libraries as explained below:

Add the following JavaScript to head tag just before closing the body tag of Index.html file:

```
 https://auth.lrcontent.com/v2/js/LoginRadiusV2.js

``` 

> **Note**: It is recommended to utilize the script from our [CDN domain](https://auth.lrcontent.com/v2/js/LoginRadiusV2.js) rather than making a local copy.

**Step 2**: Initialize the LoginRadiusV2 Object as explained below:

Add this JavaScript code to initialize LoginRadiusV2 Object on your website.

```
var commonOptions = {};
commonOptions.apiKey = "<your loginradius API key>";
commonOptions.appName = "<LoginRadius site name>";
var LRObject= new LoginRadiusV2(commonOptions);
```

> **Note:** The LoginRadius Identity Platform uses the default email/sms template available in the LoginRadius Admin Console. To use the custom [Email Templates](/authentication/concepts/email-communications/)/[SMS Templates](/authentication/concepts/sms-communication/), you can utilize the following common options:

```
commonOptions.onetouchLoginEmailTemplate=”<templateName>”;
commonOptions.smsTemplateOneTouchLoginWelcome=”<templateName>”;
commonOptions.smsTemplateOneTouchLogin=”<templateName>”;
```


**Step 3**: Include the following code to load the One Touch Login interface in your web application:

```
var one_touch_options = {};
one_touch_options.container = "onetouchLogin-container";
one_touch_options.onSuccess = function(response) {
// On Success
console.log(response);
};
one_touch_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("onetouchLogin", one_touch_options);
});

```
HTML element can be used as below

```
<div id="onetouchLogin-container"></div>
```

## Part 3 - Next Steps

The following is the list of features you might want to add-on to the above implementation:


[Passwordless Login](/authentication/tutorial/passwordless-login#partnextsteps3)

[Smart Login](/authentication/tutorial/smart-login/)

[JS Customizations](/api/v2/deployment/js-libraries/getting-started/#login7)