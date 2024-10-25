# Passwordless Login Introduction

**Passwordless Login** feature allows your registered customers to login without providing a password. A link or OTP is sent to the registered email address or phone number respectively, and once the link or OTP is verified, the customer will be logged into the account. 

>**Note:** In the case of Passwordless Login, the customer needs to **register** by providing a password. Later, the customer can log in using the password, link, or OTP.

The following displays the functional flowchart of Passwordless Login: 

![enter image description here](https://apidocs.lrcontent.com/images/Passwordless-Login-Flowchart-2_316775c330ed9527ec5-47424400-1_103515e75e932815b24.93657748.png "enter image title here")

LoginRadius Identity Platform allows you to implement the Passwordless Login feature in the following two ways:

1. [**Passwordless Login with Email:**](#passwordlessloginwithemail3) A verification email is sent to the customer’s email address and the link verification will log the customer into the account.

2. [**Passwordless Login with OTP:**](#passwordlessloginwithotp4) A verification OTP is sent to the customer’s phone number and the OTP verification will log the customer into the account.

>**Note:** Passwordless Login with OTP will work only if the [Phone Login](/authentication/tutorial/phone-login/) feature is enabled. If you have both email and phone login feature implemented, you can utilize both the passwordless login options.


## Passwordless Login Guide

This guide will take you through the process to set up and implement Passwordless Login. It covers everything you need to know on how to configure Passwordless Login in the LoginRadius Identity Platform and deploy it onto your web application. 

>Pre-requisites: 
* Passwordless Login should be enabled on your account.   
* Basic knowledge of  HTML/JavaScript.  

## Enable Passwordless Login

Login to your **[**Admin Console**](https://adminconsole.loginradius.com/)** account and navigate to [**Platform Configuration > Identity Workflow > Auth Workflow**](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/authentication-workflow/account-workflow).

The following screen will appear:

![Login](https://apidocs.lrcontent.com/images/Authentication-Workflow---LoginRadius-User-Dashboard_32065620423ef364400.77148484.png "Login")

The above screen displays that the Passwordless Login is **enabled** for your account since the Passwordless Login box is in green with the enabled text. If not enabled for your account, raise a request to the [ LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) Team.

## Part 1 - Configuration

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to implement the following:

* [Passwordless Login with Email](#passwordlessloginwithemail3)
* [Passwordless Login with OTP](#passwordlessloginwithotp4)

### Passwordless Login with Email

To customize the email that will be sent to the customers, manage the passwordless login request per account during a limited time and verification link validity, refer to the following steps:

**Step 1:** To manage the email content and settings for the Passwordless Login with Email, navigate to [**Platform Configuration > Authentication Configuration > Passwordless Login**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/passwordless-login/passwordless-login-email).

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/Passwordless-Login---LoginRadius-User-Dashboard-5_144815e75ee8f01ffd0.87669501.png "")

**Step 2:** Expand the Passwordless Login with Email Settings dropdown on which you can configure the below settings.

![Passwordless login with email](https://apidocs.lrcontent.com/images/pasted-image-0-10_16889652066647779ddcc942.74044315.png "Passwordless login with email")

  - **Request Limit:** Specifies the maximum number of times a customer can request an email.
  - **Request Disabled Period (Minutes):** This option allows you to define the timeframe, measured in minutes, during which the Request for triggering the **OTP** or **vtoken**  will expire after reaching the request limit specified in the above settings.
  - **Token Validity Limit (Minutes):** The option allows you to set a time limit, in minutes, for the validity of the **OTP** or **vtoken** generated.
  - **Token Type**. This setting allows you to choose the type of token that will be generated. There are two available options:

  > - **A.** **Magic Link:** Selecting this option will generate a vtoken that can be used for related actions.
  >**For Example:** `#Url#?vtype=emailverification&vtoken=#GUID#`
  >
  > - **B.** **OTP (One Time Password):** Selecting this option will generate a time-limited One-Time Password (OTP) that can be used for password-related actions.
  >**For Example:** `#OTP#`

**Step 3:** Select the email template that you would like to manage as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/Passwordless-Login---LoginRadius-User-Dashboard-2-1_161005e75f0eb86c060.48123355.png "")

You can perform actions such as **Add Template**, **Edit Template**, **Send Test Email** and **Delete Template**.

>**Note:** You can only delete the new template(s) that you have created i.e. you will not be able to delete the default template.

### Passwordless Login with OTP

To customize the SMS that will be sent to the customers, manage the passwordless login request per account during a limited time and OTP validity, refer to the following steps:

**Step 1:** To manage the SMS content and settings for the Passwordless Login with OTP, navigate to  [Platform Configuration > Authentication Configuration > Passwordless Login](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/passwordless-login/passwordless-login-otp).

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/Passwordless-Login---LoginRadius-User-Dashboard-6_131415e7627c16b1f65.37171818.png "Passwordless Login with OTP")

**Step 2:** Expand the Passwordless Login with OTP Settings panel. Enter **Request Limit**, ***Request disabled Period** and **Passwordless Login Email Token Validity Limit** and click on the **Save** button.

![enter image description here](https://apidocs.lrcontent.com/images/pasted-image-0-5_80735e7628b14d4eb9.61411341.png "")

**Step 3:** Select the SMS template that you would like to manage as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/Passwordless-Login---LoginRadius-User-Dashboard-3-1_285625e76291b50bc02.69139203.png "enter image title here")

You can perform actions such as **Add Template**, **Edit Template**, and **Delete Template** by taking our [Phone Login](/authentication/tutorial/phone-login/) Template setting document as a reference.

>**Note:** You can only delete the new template(s) that you have created i.e. you will not be able to delete the default template.

Each of the available email/SMS templates has corresponding settings that can be configured to control the usage and mitigate malicious requests.

- **Request Limit:** The number of times an OTP/Email can be requested within a set timeframe, determined by the Request Disable Period (in minutes).

- **Request Disable Period:** The duration (in minutes) a customer can request Emails/OTPs and the disabled duration after the request limit is reached. 

- **Validity Limit:** The amount of time (in minutes) for which the link/OTP included in the given email/SMS is valid.

## Part 2 -Deployment

The LoginRadius Identity Platform supports a variety of implementation methodologies that allow you to customize the customer flows. 

This guide focuses on the following deployment methods:

* **[Identity Experience Framework](#idxdeployment6):** You should refer to these deployment steps if you are targeting LoginRadius Identity Platform implementation using IDX. 

* **[JavaScript Libraries](#javascriptdeployment7):** You should refer to these deployment steps if you are targeting LoginRadius Identity Platform implementation using JavaScript.

However, you can similarly accomplish the deployment with any of the implementation methodologies. Full details on these methodologies can be found [here](/api/v2/getting-started/implementation-workflows/).

>**Note:** 
* To  implement the Passwordless Login using API refer to this [document](/api/v2/customer-identity-api/passwordless-login/passwordless-login-overview/).
* To implement the Passwordless Login using technology-specific SDK refer to this [document](/api/v2/deployment/sdk-libraries/overview/).

### IDX Deployment

Make sure you have implemented the following redirects and callbacks from your web application.

**Step 1:** Locate the **Auth Page URL** as explained below:

Navigate to [**Deployment > Identity Experience Framework (Hosted)**](https://adminconsole.loginradius.com/deployment/idx) and the following screen will appear:

![Auth Page New ](https://apidocs.lrcontent.com/images/1_302836204086435b412.59992184.png "Auth Page New")

The **Auth Page URL** displays your unique IDX domain in the following format:

```
<https://<sitename>.hub.loginradius.com/auth.aspx> 
```
In the above URL, [sitename](/api/v2/admin-console/deployment/get-site-app-name/) is the name of your LoginRadius Site. 

**Step 2:** Embed Authentication Pages in your Website as explained below:

Add a link on your webpage for redirecting customers to the Identity Experience Framework(Hosted) Page. 

```
<a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=<Desired Action>&return_url=<Return URL>">Register</a>
```

In the above URL replace the following: 

1. **LoginRadius Site Name** : Your unique LoginRadius [sitename](/api/v2/admin-console/deployment/get-site-app-name/). 

2. **Desired Action** : Following are the action list you can use.
 
 Login

 Register

Logout

**Examples:**

**Login Page**

```
<a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>">Login</a>
 ```
 
**Registration Page**

```
 <a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>">Register</a>
 ```

 **3. Return URL** : The URL you would like to redirect customers after completing the selected action.

Try this link out on your page, you should be redirected over to the LoginRadius Hosted Page where you can register and login.

>**Note:** Use the following URL link to display the profile page of logged in customers.

```
 <a href="https://<LoginRadius site name>.hub.loginradius.com/profile.aspx">View Profile</a>
```
Use the below JavaScript snippet to capture the access token on your page:

```
function getParameterByName(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
getParameterByName(token);
```

>**Note:** We have additional language specific examples [here](/api/v2/deployment/identity-experience-framework/hosted/usage/#tokenhandling1) if you want to capture this token in other programming languages.

**Step 3:** Store the captured Access Token as explained below:

Once a customer has completed the login action the IDX page will redirect the customer back to the specified return URL and include an access token as a query parameter in the URL. 

```
<Redirect URL>?token=<Access Token>
```
To get the access token, add this JavaScript snippet in your web page

```
function getParameterByName(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
var access_token = getParameterByName(“token”);
```

If you have already added the **getParameterByName** function, call this function to get the access token in the access_token variable.

You can store the obtained access token in your cookie, local storage and more as per the use case. The following are the example codes for storing the access token in a cookie and local storage:

**Storing in cookie:**

```
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
```

Here **cname** is cookie name, **cvalue**  is access_token and **exdays** is the expiry date of cookie where you need to pass the number of days.

```
setCookie(“lr-session-token”, access_token, “No days”) 
```

**Storing in local storage:**

```
localStorage.setItem("lr-session-token", access_token);// First parameter will be the local storage name and 2nd parameter will be access_token
```
**Step 4:** You can use the Access Token as explained below: 

Call the [LoginRadius API](/api/v2/customer-identity-api/authentication/auth-read-profiles-by-token/) to retrieve the customer profile using the Access Token. Alternatively, you can leverage any of our SDKs to accomplish this. 

The following is the script example to retrieve the customer profile:

```
<script>
var xhr = new XMLHttpRequest();
url = "https://api.loginradius.com/identity/v2/auth/account?apiKey=xxxxxx&access_token="+access_token
xhr.open("GET", url);
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
 xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response);
    }
  }
</script>
```
On executing the above deployment steps, you will see obtained customer profile data in Console Log of your browser. You can then link the obtained data to your applications. 

After the above configuration, Passwordless Login will reflect on your `https://<sitename>.hub.loginradius.com/auth.aspx` where [Sitename](/api/v2/admin-console/deployment/get-site-app-name/) is the name of your LoginRadius Site.  

The following displays the Identity Experience Framework page with the **Email me a link to Sign 
In** and **Send an OTP to Sign In** button:

![enter image description here](https://apidocs.lrcontent.com/images/pasted-image-0-6_155435e762acdcdfdd5.08974711.png "IDX Deployment")

### JavaScript Deployment

The following are the sequential steps to deploy the passwordless feature using the LoginRadius JavaScript Libraries:

**Step 1:** Include the LoginRadius JavaScript Libraries as explained below:

Add the following JavaScript to head tag just before closing the body tag of Index.html file:

```
https://auth.lrcontent.com/v2/js/LoginRadiusV2.js
```

>**Note:** It is recommended to utilize the script from our CDN domain (https://auth.lrcontent.com/v2/js/LoginRadiusV2.js) rather than making a local copy.

**Step 2:** Initialize the LoginRadiusV2 Object as explained below:

Add this JavaScript code to initialize LoginRadiusV2 Object on your website.

```
var commonOptions = {};
commonOptions.apiKey = "<your loginradius API key>";
commonOptions.appName = "<LoginRadius site name>";
var LRObject= new LoginRadiusV2(commonOptions);
```

**Step 3:** Include the following code to load the Passwordless Login interface in your web application:

```
var passwordless_options= {};

passwordless_options.onSuccess = function(response) {
// On Success
console.log(response);
};
passwordless_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init('passwordlessLoginValidate', passwordless_options);
});
```

> **Note:** If both Passwordless Login and [Two Factor Authentication (2FA)](/api/v2/admin-console/platform-security/multi-factor-auth/) are implemented for your application, the Passwordless Login will not work for your consumers.

For details regarding **Passwordless Login API**, kindly refer this [**document**](/api/v2/customer-identity-api/passwordless-login/passwordless-login-overview)

## Part 3 - Next Steps 

[Global Email settings](/authentication/concepts/email-communications#partglobalemailsettings5)

[Email Template Management](/authentication/concepts/email-communications/#partemailtemplates6)

[Phone Login Template setting document](/authentication/tutorial/phone-login/)

[SMS Configuration](/authentication/concepts/sms-configuration/)

[JS Customizations](/api/v2/deployment/js-libraries/getting-started/#login7)










