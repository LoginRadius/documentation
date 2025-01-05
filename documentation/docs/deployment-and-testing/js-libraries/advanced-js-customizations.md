# Advanced JS Customizations

This document will tell you about the Advance JavaScript Customizations available in LoginRadius and the customization steps around them.
Here we will see how we can customize JavaScript to Add the functionality of a specific LoginRadius function. JS customization of features/functions that we can build in Javascript are achieved with initialization of method with the respective action

> **Prerequisites**:
>
> - All of the advanced customizations which we have explained here require that the LoginRadius User Registration Interface is configured on your site. For more information have a look at the [getting started document](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#installation1)

> - Before proceeding with further JS Customizations, please make sure that the `LRObject` is initiated correctly and for initialization, you can refer [here](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#initializationofloginradiusobject3).


> - Basic knowledge of HTML/JavaScript

## Email Verification

To verify a customer's email address, use the `LRObject.init` method with the verifyEmail action. The following code can be used for reference:

```
var verifyemail_options = {};
verifyemail_options.onSuccess = function(response) {
// On Success
console.log(response);
};
verifyemail_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("verifyEmail", verifyemail_options);
});
```

> **Note:**
>
> - The success callback will return a JSON object `{IsPosted: true}`.
> 
> - **verifyEmail** action can be used both to verify email and reset password, depending upon the `vtype` passed in the link.

> -  If you have enabled the **Token Type** as **OTP** for Delete Account Email Template to receive the OTP for deleting an account, you must specify the container below. 
> ```
> deleteuser_options.container = 'deleteaccount-container' 
> ```
> 
>     And add the below snipped to include the input field for OTP. 
> ```
> <div id='deleteaccount-container'></div>
> ```

## Risk Based Authentication

This section covers how to setup [Risk-Based Authentication](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/risk-based-auth) in your LoginRadius Implementation via our JavaScript Interface.

1. Make sure you have configured Risk-Based Authentication with the desired options in your LoginRadius Admin Console as per our documentation [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/risk-based-auth).

2. In your LoginRadius JavaScript initialization options, you will need to add the following parameters:
   ` Options.riskBasedAuthentication = true; // If you configured to prompt for Multi-Factor Authentication // via SMS you will need enable the Phone Login parameter Options.phoneLogin = true; `
   > **Note:** If you are using Multi-Factor Authentication with Risk Based Authentication, your LoginRadius Account needs to be configured for Passwordless Login. To enable Passwordless Login please contact [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket)

Following options can be used with `commonOptions` to configure Risk Based Authentication:

| Name                     | Type   | Description                                               |
| ------------------------ | ------ | --------------------------------------------------------- |
| rbaOneclickEmailTemplate | String | Risk based authentication email template name one click   |
| rbaCityEmailTemplate     | String | Risk based authentication email template name for City    |
| rbaCountryEmailTemplate  | String | Risk based authentication email template name for Country |
| rbaBrowserEmailTemplate  | String | Risk based authentication email template name for Browser |
| rbaIpEmailTemplate       | String | Risk based authentication email template name for IP      |
| rbaDeviceEmailTemplate   | String | Risk based authentication email template name for Device  |
| rbaOTPSmsTemplate        | String | Risk based authentication sms template name for otp       |
| rbaCitySmsTemplate       | String | Risk based authentication sms template name for City      |
| rbaCountrySmsTemplate    | String | Risk based authentication sms template name for Country   |
| rbaBrowserSmsTemplate    | String | Risk based authentication sms template name for Browser   |
| rbaIpSmsTemplate         | String | Risk based authentication sms template name for IP        |
| rbaDeviceSmsTemplate     | String | Risk based authentication sms template name for Device    |

## Delete User

To send a request to delete a customer's profile, use the `LRObject.init` with the **deleteUser** action. This action will work when a customer is logged in. The following code can be used for reference:

```
var deleteuser_options = {};
deleteuser_options.onSuccess = function(response) {
// On Success
console.log(response);
};
deleteuser_options.onError = function(errors) {
// On Errors
console.log(errors);
}


LRObject.util.ready(function() {
LRObject.init("deleteUser", deleteuser_options);
});


```

> **Note:**
> The success callback will return a JSON object `{IsDeleteRequestAccepted: true}`.

#### Handle Delete User Functionality

To confirm the deletion of a customer's profile, use the `LRObject.init` with the **deleteUserConfirm** action. The following code can be used for reference:

```
var deleteuser_confirm_options = {};
deleteuser_confirm_options.onSuccess = function(response) {
// On Success
console.log(response);
};
deleteuser_confirm_options.onError = function(errors) {
// On Errors
console.log(errors);
}


LRObject.util.ready(function() {
LRObject.init("deleteUserConfirm", deleteuser_confirm_options);
});
```

## Account Linking

Account Linking allows you to provide a flow for customers to link their social provider accounts into a single unified account. For more information on this have a look at [Account Linking documentation](https://www.loginradius.com/docs/libraries/identity-experience-framework/features-use-cases/#accountlinking2).

This section covers the technical aspects of implementing Account Linking. The following steps will only work when the customer is logged in.

##### Account Linking Scenarios

This section covers the different scenarios of account linking :

**Scenario 1:**

> 1. The customer is currently logged in Account 1 with UID of 123456.
>
> 2. The customer tries to link existing Account 2 with UID 456789.
>
> 3. Once linked, the UID 456789 is removed and is replaced by 123456. The UID 456789 will be lost in this case.

**Scenario 2:**

> 1. The customer is currently logged in Account 1 with UID of 123456, which has two social providers connected (FB, Google)
>
> 2.The customer tries to link existing Account 2 with UID of 456789, which has one social provider (Twitter)
>
> 3. Once linked, the UID 456789 is removed and is replaced by 123456. The UID 456789 will be lost in this case

##### Implementation Flow

The following are the two different ways to implement Account Linking:

**Method 1: Add Account Linking/Unlinking JS Interfaces**

1 . Load JavaScript Interface script

    `<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>`

2 . Add Account Linking JavaScript Interface code

To implement the account linking interface, use the `LRObject.init` method with the **linkAccount** action.
The following code can be used for reference:

```
var la_options = {};
la_options.container = "interfacecontainerdiv";
la_options.templateName = 'loginradiuscustom_tmpl_link';
la_options.onSuccess = function(response) {
// On Success
console.log(response);
};
la_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("linkAccount", la_options);
});
```

Also make sure to have an interfacecontainerdiv in your HTML:

```
<div id="interfacecontainerdiv" class="interfacecontainerdiv"></div>
```

> **Note:**
> The success callback will return
>
> 1. a JSON array `{ isPosted: true }` as the response when different social providers have the same email address
> 2. an access token otherwise

3 . Add Account Unlinking JavaScript Interface code

To implement the account unlinking interface, use the `LRObject.init` method with the **unLinkAccount** action. The following code can be used for reference:

```
var unlink_options = {};
unlink_options.onSuccess = function(response) {
// On Success
console.log(response);
};
unlink_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("unLinkAccount", unlink_options);
});
```

4 . Add Template Code

```
<script type="text/html" id="loginradiuscustom_tmpl_link">
<# if(isLinked) { #>
<div class="lr-linked">
<a class="lr-provider-label" href="javascript:void(0)" title="<#= Name #>" alt="Connected">
<#=Name#> is connected
</a>
<a  onclick='return  <#=ObjectName#>.util.unLinkAccount(\"<#= Name.toLowerCase() #>\",\"<#= providerId #>\")'>delete</a>
</div>
<# }  else {#>
<div class="lr-unlinked">
<a class="lr-provider-label" href="javascript:void(0)" onclick="return  <#=ObjectName#>.util.openWindow('<#= Endpoint #>');" title="<#= Name #>" alt="Sign in with <#=Name#>">
<#=Name#></a>    </div>
<# } #>
</script>
```

> **Note:**
> The template code uses the variable **isLinked** to conditionally display the linked or unlinked account.

**Method 2: REST APIs for Account Linking and Unlinking**
While it's easy to implement account linking using our JavaScript interfaces, we also provide API calls that you can make on the client-side to accomplish the same goal:

1 . You can use our [Link Social Identities API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities/) to link accounts.

2 . You can use our [Unlink Social Identities API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlink-social-identities/) to unlink accounts.

**Sample Code**

Refer to the following sample code to implement the Account linking using the programmatic link. The following code linked the account using the post method:

```
<!DOCTYPE html>
<html>

<head>
    <title>Social Login | LR Social Account Unlinking</title>
    <meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
</head>

<body>
    <h3>Soicallogin by programmatic links</h3>
    <div id="provider-container">
        <button class="provider" onclick="openWin()">login with google</button>
    </div>
    <script type="text/javascript">
        function openWin() {
            let accessToken = "<LR access token>";//LR access token received from authentication
            let callback = window.location.href;
            let appname = "<LR app name>";
            let apikey = "<LR api key>";
            let url =
                `https://${appname}.hub.loginradius.com/RequestHandler.aspx?apikey=${apikey}&provider=google&callback=${callback}&same_window=&is_access_token=true&callbacktype=&disablesignup=undefined&scope=&ac_linking=true`;
            window.open(url, "childWindow", 'menubar=1,resizable=1,width=450,height=450,scrollbars=1');
            window.addEventListener("message", LRReceiveMessage, false);


            function LRReceiveMessage(event) {
                console.log(event);
                if (event.origin.indexOf(('hub.loginradius.com')) > -1) {
                    console.log("LRTokenKey", event.data);
                    let candidatetoken = event.data;
                    linkAccountAPI(candidatetoken);

                }
            }

            function linkAccountAPI(candidatetoken) {
                $.ajax({
                    async: true,
                    type: "POST",
                    crossDomain: true,
                    url: `https://api.loginradius.com/identity/v2/auth/socialidentity?apikey=${apikey}`,
                    dataType: "json",
                    headers: {
                        "content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`
                    },
                    "data": JSON.stringify({
                        "candidatetoken": candidatetoken
                    })

                }).done(function (response) {
// write your code after linking successfully
                    console.log(response);
                });

            }
        }
    </script>
</body>

</html>

```

## Update Phone

```
var updatephone_options = {};
updatephone_options.container = "updatephone-container";
updatephone_options.onSuccess = function(response) {
// On Success
console.log(response);
};
updatephone_options.onError = function(response) {
// On Error
console.log(response);
};

LRObject.util.ready(function() {

LRObject.init("updatePhone",updatephone_options);


});
```

```
<div id="updatephone-container"></div>
```

> **Note:**
> The success callback will return JSON object `{IsPosted: true}`.

## Change Password

To implement the change password interface, use the `LRObject.init` method with the **changePassword** action. The following code can be used for reference:

```
var changepassword_options = {};
changepassword_options.container = "changepassword-container";
changepassword_options.onSuccess = function(response) {
// On Success
console.log(response);
};
changepassword_options.onError = function(response) {
// On Error
console.log(response);
};

LRObject.util.ready(function() {

LRObject.init("changePassword",changepassword_options);


});
```

```
<div id="changepassword-container"></div>
```

## Profile Editor

To implement the profile editor interface, use the `LRObject.init` method with the **profileEditor** action. The following code can be used for reference:

```
var profileeditor_options = {};
profileeditor_options.container = "profileeditor-container";
profileeditor_options.onSuccess = function(response) {
// On Success
console.log(response);
};
profileeditor_options.onError = function(response) {
// On Error
console.log(response);
};

LRObject.util.ready(function() {

LRObject.init("profileEditor",profileeditor_options);


});
```

```
<div id="profileeditor-container"></div>
```

When the Profile Editor is initialized, it loads all of the fields specified in your [Registration Form Schema](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#registrationformschema6) excluding the **password** fields. The schema is located within the LRObject: `LRObject.registrationFormSchema` and can be hard coded to any custom schema that you would like to present the customer for profile editing.

> **Note:** At the moment the Profile Editor does not provide support for complex fields / arrays of objects.

## Manage passkeys

In the profile beforescript.js, add the script below to list the added passkeys. The following code can be used for reference:

```
var passkey = {};
passkey.container = "passkey-container";
passkey.onSuccess = function (resposne) {
    console.log(resposne)
};
passkey.onError = function (error) {
    console.log(error)
};
LRObject.init("passkeylogin",passkey);
```

To display the manage passkey options, add the following container to the profile page:

```
<div id="passkey-container"/>
```

> **Note:** This container will only work after login.

## Changing Username

To implement the change username interface, use the `LRObject.init` method with the **changeUsername** action. The following code can be used for reference:

```
var changeusername_options= {};

changeusername_options.container = "changeusername-container";
changeusername_options.onSuccess = function(response) {
// On Success
console.log(response);
};
changeusername_options.onError = function(response) {
// On Error
console.log(response);
};

LRObject.util.ready(function() {
LRObject.init("changeUsername",changeusername_options);
});
```

```
<div id="changeusername-container"></div>
```

## Resend Email Verification

To implement the interface for resending verification email, use the `LRObject.init` method with the **resendVerificationEmail** action. The following code can be used for reference:

```
var resendemailverification_options= {};
resendemailverification_options.container = "resendemailverification-container";
resendemailverification_options.onSuccess = function(response) {
// On Success
console.log(response);
};
resendemailverification_options.onError = function(response) {
// On Error
console.log(response);
};


LRObject.util.ready(function() {
LRObject.init("resendVerificationEmail",resendemailverification_options);


});
```

```
<div id="resendemailverification-container"></div>
```

> Note:
> The success callback will return the JSON object `{IsPosted:true}` and send a verification email to the given email address.

## Add Email

To implement the interface for adding email, use the `LRObject.init` method with the **addEmail** action. The following code can be used for reference:

```
var addemail_options= {};
addemail_options.container = "addemail-container";
addemail_options.onSuccess = function(response) {
// On Success
console.log(response);
};
addemail_options.onError = function(response) {
// On Error
console.log(response);
};


LRObject.util.ready(function() {

LRObject.init("addEmail",addemail_options);

});
```

```
<div id="addemail-container"></div>
```

> **Note:**
> The success callback will return the JSON object `{IsPosted:true}`.

## Remove Email

To implement an interface for removing email, use the `LRObject.init` method with the removeEmail action. The following code can be used for reference:

```
var removeemail_options= {};
removeemail_options.container = "removeemail-container";
removeemail_options.onSuccess = function(response) {
// On Success
console.log(response);
};
removeemail_options.onError = function(response) {
// On Error
console.log(response);
};

LRObject.util.ready(function() {

LRObject.init("removeEmail",removeemail_options);

});
```

```
<div id="removeemail-container"></div>
```

> **Note:**
> The success callback will return the JSON object `{IsDeleted: true}`.

## Create Multi-Factor Authentication (MFA)

> **Note:** MFA will not work with Social Login.

To implement an interface for Multi-Factor Authentication, use the `LRObject.init` method with the **createTwoFactorAuthentication** action. The following code can be used for reference:

```
var authentication_options = {};
authentication_options.container = "authentication-container";
authentication_options.onSuccess = function(response) {
// On Success
console.log(response);
};
authentication_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("createTwoFactorAuthentication", authentication_options);
});
```

```
<div id="authentication-container"></div>
```

## Backup Code Button

This interface allows you to provide your customers with a button to get the backup code.

```
var backupcodebutton_options = {};
backupcodebutton_options.container = "backupcodebutton-container";
backupcodebutton_options.onSuccess = function(response) {
// On Success
console.log(response);
};
backupcodebutton_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("backupCodeButton", backupcodebutton_options);
});
```

```
<div id="backupcodebutton-container"></div>
```

## Reset Backup Code Button

This interface provides your customers with a button to reset their existing backup code.

```
var resetbackupcodebutton_options = {};
resetbackupcodebutton_options.container = "resetbackupcodebutton-container";
resetbackupcodebutton_options.onSuccess = function(response) {
// On Success
console.log(response);
};
resetbackupcodebutton_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("resetBackupCodeButton", resetbackupcodebutton_options);
});
```

```
<div id="resetbackupcodebutton-container"></div>
```

## One Touch Login

To implement an interface for One Touch Login, use the `LRObject.init` method with the **onetouchLogin** action. The following code can be used for reference:

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

```
<div id="onetouchLogin-container"></div>
```

## Passwordless Login Validate

To implement the interface for Passwordless Login, use the `LRObject.util` method with the **passwordlessLoginValidate** action. The following code can be used for reference:

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

## Security Question

The Security Question workflow allows you to verify the customer’s identities upon different events, such as reset password requests and login via an unfamiliar device by providing a secret answer to a predefined security question.

This workflow needs to be configured In LoginRadius Admin Console navigate to:
[Platform Security --> Multi-Layered Security-->Security Question-->Settings](https://adminconsole.loginradius.com/platform-security/multi-layered-security/security-question/settings)

For a step-by-step guide on configuring security questions through your LoginRadius Admin Console, as well as in-depth coverage on relevant API end points, see [this documentation](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/security-question/).

Customers will then be asked upon registration via the registration form to fill out the questions. see below for details on the other use cases:

##### Update Security Question

To provide customers with a form to update their existing Security Question see below:

```
var securityQ_options = {};
securityQ_options.container = "securityQ-container";
securityQ_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
securityQ_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("updateSecurityQuestion", securityQ_options );
});

```

```
<div id="securityQ-container"></div>
```

##### Reset Password By Security Question

The following interface will allow customers to select a Security Question and Provide an Answer. Upon providing valid credentials the customer will be prompted to complete a password reset:

```
var resetPasswordBySecQ_options = {};
resetPasswordBySecQ_options.container = "resetPasswordBySecQ-container";
resetPasswordBySecQ_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
resetPasswordBySecQ_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("resetPasswordBySecurityQuestion", resetPasswordBySecQ_options );
});

```

```
<div id="resetPasswordBySecQ-container"></div>
```

##### Reset Passkey

The following interface will allow customers to reset the passkey. You need to initialize the resetPassKey container in the **auth** Page, before-script.js, as explained below:

```
var commonOptions = {};
commonOptions.apiKey = <your api key>;
commonOptions.resetPassKeyUrl = window.location; //Change as per requirement
var LRObject = new LoginRadiusV2(commonOptions);

LRObject.util.ready(function () {
  LRObject.init("passkeylogin", passkey_manage);
});
```

```
<div id="resetPassKey-container"></div>
```

##### Manage Passkey

The following interface will allow customers to show a list of passkeys. You need to initialize the passkeylogin container in the **profile** Page, before-script.js, as explained below:

```
var commonOptions = {};
commonOptions.apiKey = <your api key>;
commonOptions.resetPassKeyUrl = window.location; //Change as per requirement
var LRObject = new LoginRadiusV2(commonOptions);

LRObject.util.ready(function() {
  LRObject.init("passkeylogin", {container:'passkeylogin-container'});
}); 
```
```
<div id="passkeyLogin-container"></div>
```

## JS Version

To get the current JS version use **LRObject.version**

## Smart Login Feature

If a customer is trying to login on a Smart TV, typing the password on a TV remote can be challenging. By enabling this option, customers can enter their email address or username and click on the **smartLogin** button. An email is then sent to the customer's email address, containing a link to login to the Smart TV.

Following options can be used with `commonOptions` to configure smart login:

| Name                    | Type   | Description                                                     |
| ----------------------- | ------ | --------------------------------------------------------------- |
| smartLoginPingCount     | Number | Total number of ping requests made by client before it expires. |
| smartLoginPingInterval  | Number | Time interval between each ping request in seconds              |
| smartLoginEmailTemplate | String | Email template which is sent on smartLogin                      |
| smartLoginRedirectUrl   | String | redirection url for smartLogin                                  |

> **Note:**
> Smart Login has to be enabled on your LoginRadius site in order to use this feature. It can be enabled by reaching out to [LoginRadius support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

1 . Add the smartLogin parameters in User Registration JS:

```
var commonOptions = {};
commonOptions.apiKey = "<your api key>";
commonOptions.smartLoginPingCount = <any number>; //default is 100 times
commonOptions.smartLoginPingInterval = <any number>; //default is 5 second
commonOptions.smartLoginEmailTemplate = <Email template>
commonOptions.smartLoginRedirectUrl = <Redirect Url>
...

```

2 . Use the following hook to change the button's name

```
LRObject.$hooks.call('setButtonsName',{
smartLogin : "Click Me"
});
```

You can customize all the button names with the following fields:

| Field Name                      | Original Text                |
| ------------------------------- | ---------------------------- |
| login                           | Login                        |
| registration                    | Register                     |
| socialregistration              | Login                        |
| loginrequiredfieldsupdate       | Login                        |
| verifyemail                     | Verify                       |
| resetpassword                   | Reset Password               |
| sociallogin                     | Login                        |
| otp                             | Verify                       |
| twofaotp                        | Verify                       |
| showqrcode                      | Verify                       |
| updatephone                     | Update                       |
| changephone                     | Update                       |
| forgotpassword                  | Send                         |
| securityquestions               | Get                          |
| changepassword                  | Submit                       |
| resendemailverification         | Send                         |
| addemail                        | Send                         |
| removeemail                     | Send                         |
| changeusername                  | Submit                       |
| profileeditor                   | Update Profile               |
| otplogin                        | OTP                          |
| passwordlessloginbuttonlabel    | Email me a link to Sign In   |
| passwordlessloginotpbuttonlabel | Send an OTP to Sign In       |
| createtwofactorauthentication   | 2-Step Verification          |
| sendotp                         | Send OTP                     |
| resendotp                       | Resend OTP                   |
| changenumber                    | Change Number                |
| backupcode                      | Login                        |
| backupcodebutton                | Try another way to Sign In   |
| disablegoogleauthenticator      | Disable Google Authenticator |
| disableotpauthenticator         | Disable OTP Authenticator    |
| updatesecurityquestion          | Update Security Question     |
| resetpwdbysecq                  | Reset Password By SecurityQ  |
| smartlogin                      | Smart Login                  |
| validatecode                    | Validate                     |
| onetouchlogin                   | Login                        |
| progressiveprofiling            | Progressive Profiling        |

3 . The following can be used to handle the smartLogin event:

```
var options = {};
options.onSuccess = function(response) {
//On Success
console.log(response);
if (response.access_token) {
// Handle the access token to Login a user
}
};
options.onError = function(errors) {
//On Error
console.log(errors);
};
options.container = "smartLogin-container";

LRObject.util.ready(function() {
LRObject.init("smartLogin",options);
})
```

```
<div id="smartLogin-container"></div>
```

> **Note:**
> After clicking on the login button, the client will continuously ping the server to confirm whether customer has clicked on the link in the email.

## Email Template Customizations

All of the automated emails used in our User Registration system are completely customizable. Refer to [email template configuration documentation](https://www.loginradius.com/docs/api/v2/admin-console/email-workflow/email-template-management) for more information.

## Multiple Social Login Interfaces on the Same Page

To generate multiple social login interfaces on the same page, instantiate 2 separate LRObjects:

```
var commonOptions = {};
commonOptions.apiKey = "<your api key>";
commonOptions.appName = "<your app name>";
commonOptions.hashTemplate = true;
commonOptions.accessTokenResponse = true;
commonOptions.callbackUrl = window.location;

var LRObject_one= new LoginRadiusV2(commonOptions);

var LRObject_two= new LoginRadiusV2(commonOptions);

var options = {};
options.templateName = "loginradiuscustom_tmpl";
LRObject_one.util.ready(function() {
LRObject_one.customInterface("container_one", options);
});
LRObject_two.util.ready(function() {
LRObject_two.customInterface("container_two", options);
});
```

Initialize the separate LRObjects:

```
var options_one = {};
options_one.onSuccess = function(response) {
//On Success
console.log(response);
};
options_one.onError = function(errors) {
//On Errors
console.log(errors);
};
options_one.container = "container_one";
LRObject_one.util.ready(function() {
LRObject_one.init('socialLogin', options_one);
});

var options_two = {};
options_two.onSuccess = function(response) {
//On Success
console.log(response);
};
options_two.onError = function(errors) {
//On Errors
console.log(errors);
};
options_two.container = "container_two";

LRObject_two.util.ready(function() {
LRObject_two.init('socialLogin', options_two);
});
```

HTML:

```
<div id = "container_one" > </div>

<div id = "container_two" > </div>
```

## Advanced User Registration Methods

The following methods return the **Account ID (UID)** and **Token** for the currently logged in customer. These functions can be used after the customer login.

**To get the Account ID (UID):**

```
LRObject.sessionData.getUid();
```

**To get the Access Token:**

```
LRObject.sessionData.getToken();
```

## Standard and Phone Login

LoginRadius provides you with the ability to have both Standard and Phone Login at the same time. You can learn more about this workflow [here]https://www.loginradius.com/docs/platform-features-overview/registration-services/standard-and-phone-authentication). This section covers setting up the workflow using the LoginRadius JavaScript interface.

> **Note:**
> To enable this feature contact  [LoginRadius Support team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket)

1 . In LoginRadius Admin Console, navigate to
[Platform Configuration ➔ API Configuration ➔ Standard Login](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema) and make sure you choose **Phone ID** from the **Standard Fields (Basic)** section and click **Save** to make it part of the Enabled Fields. In the Enabled Fields area, click on the **edit** button next to \*_Email_.

Click the **Advanced tab**, set Email as **optional**, and click **Save**. Repeat this step with Phone ID Finally, click on **Save** Configuration.

2 . Add the **phoneLogin** parameter to your LoginRadius JS [Initialization Object](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started).

`options.phoneLogin = true;`

## PIN Setup on Registration

For a customer to leverage the [PIN Authentication](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/overview/) features they must first set one on their given account. Pin setup can be implemented at two places: **Registration or during Login** (depending on your requirements).

With the help of the flag **"AskOnRegistration"** flag, we can prompt the customer to provide the PIN at the time of registration only.

**PIN configuration response from app configuration API**

```
{
    "PINAuthentication : "{
        "IsEnabled" : true,
        "Configuration" : {
            "PINLogin" : true,
            "IsRequired" : true,
            "AskOnRegistration" : true,
            "AskOnLogin" : true,
            "AskOnlyOnFirstLogin" : true
        }
    }
}
```

Some of the above options can be overwritten with common options in JS with the following scenarios:

```
commonOptions.PINConfiguration = {
    "PINLogin": true,
    "IsRequired": false,
    "AskOnRegistration": true,
    "AskOnLogin": true,
    "AskOnlyOnFirstLogin": true
}
```

The Pin validation rules can be setup through **Admin console**, as mentioned in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/Standard-Login---LoginRadius-User-Dashboard_66285e91f47dcef450.20948971.png "Pin validation")

## PIN Setup on Login

PIN configuration, at the time of login is needed when the PIN is not setup earlier and :

1. **AskOnLogin** is true
2. **AskOnlyOnFirstLogin** is true and customer is logging in first time.

> **Note:** The Point is to be noted that if PIN configuration is **mandatory** then at the time of login, if any of the above two condition meet the criteria the core API would send an Error code "1243" and accordingly we have to set pin using **pinauthtoken**. But in case if PIN configuration is **optional**, then core API would not handle any PIN handling, and at that time JS would be showing PIN configuration schema along with skip button. Now here we can use [profile update API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-update-profile-by-token/) to update PIN data. If skipped here (since it is optional) then PIN skipped value would be sent to true.

### AskOnLogin : true

This scenario comes into existence only when the customer has not setup his pin earlier either due to:

- The customer is already a registered customer and at the time of registration PIN configuration was not available on the platform.
- The customer is not the existing one , he is the new customer but since the **AskOnRegistration** into the pin configuration is set to be false. Hence the customer has not configured his PIN.

**Case 1. PIN is Required**

```
{
    "IsRequired": true,
    "AskOnRegistration": false,
    "AskOnLogin": true,
    "AskOnlyOnFirstLogin": false,
    "PINLogin": true,
    "SessionTokenExpiration": 10
}
```

**Case 2. PIN is Optional**

```
{
    "IsRequired": false,
    "AskOnRegistration": false,
    "AskOnLogin": true,
    "AskOnlyOnFirstLogin": false,
    "PINLogin": true,
    "SessionTokenExpiration": 10
}
```

In this case customer core API would not restrict customer profile response in login API, however customer would be prompted to setup the pin at JS end. In this case the [account update API](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update/) would be used to set the pin in the customer profile.

### AskOnlyOnFirstLogin : true

This scenario comes into existence only when the customer has not set up his pin earlier either due to:

- The customer is already a registered customer and at the time of registration, PIN configuration was not available on the platform.
- The customer is not the existing one, (new customer) but since the **AskOnRegistration** into the pin configuration is set to be false. Hence the customer has not configured his PIN.

**AskOnlyOnFirstLogin** will be handled in the same way as of **AskOnLogin** case with additional condition of the first login customer.

## Change PIN

To implement the change pin interface, use the `LRObject.init` method with the **changePIN** action. The following code can be used for reference:

```
var changepin_options = {};
changepin_options.container = "changepin-container";
changepinoptions.onSuccess = function(response) {
// On Success
console.log(response);
};
changepin_options.onError = function(response) {
// On Error
console.log(response);
};
LRObject.util.ready(function() {
LRObject.init("changePIN",changepin_options);
});
```

**HTML Container**

```
<div id="changepin-container"></div>
```

## Forgot/Reset PIN

This feature will provide an option for the customer to reset their PIN if they forgot the existing PIN. A customer can reset PIN by using the following methods:

- Forgot/reset pin by email/phone/username
- Reset pin by security questions

Sample code for **Forgot Pin**:

```
forgot_options = {
    onSuccess: function(response) {
        console.log(response);
    },
    onError: function(errors) {
        console.log(errors);
    },
    container: 'forgotpin-container'
};
LRObject.util.ready(function() {
    LRObject.init('forgotPIN', forgot_options );
});
```

**HTML element can be used as below**

```
<div id='forgotpin-container'></div>
```

Sample code for **Reset Pin**:

```
reset_pin_options = {
    onSuccess: function(response) {
        console.log(response);
    },
    onError: function(errors) {
        console.log(errors);
    },
    container: 'resetPIN-container'
};
LRObject.util.ready(function() {
    LRObject.init('resetPIN', reset_pin_options );
});
```

**HTML element can be used as below**

```
<div id='resetPIN-container'></div>

```

The following are the Common options properties for forgot and Reset PIN functions.:

- resetPINConfirmationEmailTemplate
- resetPINEmailTemplate
- forgotPINUrl
- resetPINUrl

## Reset PIN using security questions :

The Security Question workflow allows customers to reset their pin by providing a secret answer to a predefined security question.
This workflow needs to be configured and enabled from your LoginRadius [Admin Console](https://adminconsole.loginradius.com/platform-security/multi-layered-security/security-question/settings).
The customers will then be asked upon registration via the registration form to fill out the questions. Once configured the security questions flow, the same can be used for resetting the configured PIN.

Sample code for **Reset PIN By Security Questions**:

```
var resetPINBySecQ_options = {};
resetPINBySecQ_options.container = "resetPINBySecQ-container";
resetPINBySecQ_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
resetPINBySecQ_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("resetPINBySecurityQuestion", resetPINBySecQ_options );
});
```

**HTML element can be used as below**

```
<div id="resetPINBySecQ-container"></div>
```

## PIN Step-Up Authentication

If you wish to prompt your customers to provide their PIN as part of [PIN Step-Up Authentication](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/pin/overview/) you can use the `pinreauthentication` interface.

Below is the Sample code:

```
var pinreauthentication_options = {};
pinreauthentication_options.onSuccess = function(response) {
	//On Success
  console.log(response);
};
pinreauthentication_options.onError = function(errors) {
	//On Errors
	console.log(errors);
};
pinreauthentication_options.container = "pin-re-authentication-container";

LRObject.util.ready(function() {
	LRObject.init("pinreauthentication",pinreauthentication_options);
})
```

```
<div id="pin-re-authentication-container"></div>
```

## Duo Authentication

In the **MFA required flow**, if Duo Authentication is enabled, the JavaScript will display a "_Verify identity via Duo Security_" button during the MFA login process. The JavaScript will then call the [LoginRadius APIs](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/duo-security-authenticator/overview/) to authenticate the user using the `code` and `state` provided by Duo.

In the **MFA optional flow**, the "_Verify identity via Duo Security_" button will be available on the profile page. When clicked, the JavaScript will call the [LoginRadius APIs](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/duo-security-authenticator/overview/) to authenticate the user using the `code` and `state` returned by Duo.

### JavaScript API Integration for Duo

Two custom APIs have been created in JavaScript to facilitate integration with the Duo authentication process. Below is a demonstration of how these can be implemented:

**duoVerify**

The duoVerify API accepts `duoData`, which contains the `state` and `code` provided after Duo verification from the DuoAuth endpoint. The following JavaScript code demonstrates how to use this API.

```
LRObject.api.duoVerify(duoData, function(response) {
    console.log("Duo Verify Success:", response);
    alert(JSON.stringify(response));
}, function(errors) {
    console.log("Duo Verify Failure:", errors);
    alert(JSON.stringify(errors));
});
```

**duoVerifyByAccessToken**

Similar to duoVerify, the duoVerifyByAccessToken API also accepts `duoData`, including the `state` and `code` from the DuoAuth endpoint. The JavaScript implementation is as follows:

```
LRObject.api.duoVerifyByAccessToken(duoData, function(response) {
    console.log("Duo Verify Success:", response);
    alert(JSON.stringify(response));
}, function(errors) {
    console.log("Duo Verify Failure:", errors);
    alert(JSON.stringify(errors));
});
```


## Projection of Fields

> **Note:**
> This section covers the Projection of Fields when using the LoginRadius JS Interfaces. If you're looking to configure the Projection of Fields when directly using our APIs, see our [Advanced API Usage](https://www.loginradius.com/docs/api/v2/user-registration/extended-features#projectionoffields11) documentation.

Using the LoginRadius JS Interfaces you're able to limit which primary/root fields you would like to be returned in your API response, **For Example**, the profile, access_token. This allows you to streamline your process and only get the data that you need as part of your workflow.

The structure is as follows:

**Action Name**: This is the name of the JavaScript Interface action that is called in your init method that you will be expecting a response from,**For Example** "login, registration". You can find a list of all possible actions in the actions table of our [Getting Started](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#initmethod4) guide.

**Field Name:** The names of the primary / root fields you would like to be returned in your API response. These fields vary depending on the JavaScript Interface you're targeting. The fields that are not included here will be left out from the API response.

To apply this selection, you need add the **projectionFields** parameter as part of your options in your [Initialization Object](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started).

The **projectionFields** parameter takes an object with the action names as the key and the field names as values inside an array:

**Format**:

```
options.projectionFields =  {"action1":["field1, field2"], "action2":["field1"]}
```

**Example**:

```
options.projectionFields =  {"login":["access_token"], "registration":["Profile"]}
```

Instead of returning the full customer profile by default, the above example returns the following:

```
{
Profile: {
EmailVerified: true,
IsDeleted: false,
Uid: "********************************",
PhoneId: null,
PhoneIdVerified: false
},
access_token: "********-****-****-****-************"
}
```

## Get JWT Token

You can retrieve the JWT token with a LoginRadius access token after login.

To retrieve the JWT token using an access token:

1. Configure the JWT token configuration in your [LoginRadius Admin Console](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/jwt).
2. Include the following client-side options when initializing your LoginRadius Object.

```
commonOptions.tokenType = "jwt";
commonOptions.integrationName = "<your jwt configuration integration app name>";
```

> **Note:**
> Additional details on configuring, generating ,and consuming the JWT token can be found [here](https://www.loginradius.com/docs/api/v2/single-sign-on/jwt-login).

## Progressive Profiling

To implement the Progressive Profiling interface, use the **LRObject.progressiveProfiling.init** method (no action needs to be specified).

You will need to decide when you will want to prompt your customer for additional information/scopes.

Some useful examples as to when you could prompt the customer are:

    - Upon First Login
    - At a custom defined Number of Logins
    - Upon Navigating to a specific property
    - Clicking a specific link or CTA button

Use the following snippet in your code wherever you have a desired event during which you would like to prompt a progressive profiling step:

```
        var poptions = {};
        poptions.container = "progressive-container";
        // If this step will be for Social Data Progressive profiling you will need to specify a template.
        // By specifying a template, a Social Login Interface will automatically be loaded in the progressive profiling container div.
        poptions.templateName = "loginradiuscustom_tmpl_progressive";
        ///
        poptions.onSuccess = function(response) {
            console.log(response);
        }
        poptions.onError = function(response) {
            console.log(response);
        }
        LRObject.progressiveProfiling.execStep('Step Name', poptions);

        LRObject.util.ready(function() {
            LRObject.progressiveProfiling.init();
        });
```

```
<div id="progressive-container"></div>
```

> **Note:**
> The success callback will return a JSON object `{IsPosted: true}`.

> **Note:** "Step Name" is the name of progressive profiling steps created via [Admin Console](https://adminconsole.loginradius.com/deployment/profiling/progressive-profiling). If this step will be for Social Data Progressive Profiling, make sure that you have a template ready for the Social Login Interface that will load the buttons with the scopes you've configured in the Admin Console E.g. :

```
<script type="text/html" id="loginradiuscustom_tmpl_progressive">
<a class="lr-provider-label" href="javascript:void(0)" onclick="return <#=ObjectName #>.util.openWindow('<#=Endpoint #>');" title="<#=Name #>" alt="Sign in with <#=Name #>">
    <#=Name #>
</a>
</script>
```

For details on customizing the Social Login Interface Template you can refer to the Social Login section of our [Getting Started](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/getting-started#sociallogininterface9) doc.

Use the following snippet in your code if you would like to show progressive profile fields to customers on the profile page. This will allow the customer to edit the progressive profile fields.

```
var LRObject = new LoginRadiusV2(commonOptions);
LRObject.progressiveProfiling.showInEditor= true;
```

## Handling Idempotent requests

Idempotent requests are requests which are generated with the same set of inputs and return identical result when called over and over.

LoginRadius prevents such requests from being accidentally executed twice or thrice upon the submit operation of a form (like Registration, Login, Forgot Password, etc). Once a submit operation is performed, it will disable the **Submit** button until the response (success/error) is not received from the server. Once the response is received from the server, it can be set enabled back.

Following options can be used with **commonOptions** to enable/disable the Submit Button:

| Name                  | Type   | Description                                                                                                                                                                                                                            |
| --------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disableButtonOnsubmit | String | If it's true, "Submit Button" will be disabled after the first submit operation. By default, it will remain disabled even after successful API call. Set **enableSubmitOnSuccess** to true to enable it after the successful API call. |
| enableSubmitOnSuccess | String | If it's true, the "Submit Button" will be enabled after successful API call.                                                                                                                                                           |

**Configure the feature as follows:**

1. Set the option **disableButtonOnsubmit** to **true** to disable the submit button to make the Idempotent requests

```
commonOptions.disableButtonOnsubmit= true;
```

2. By default, the submit button will not be enabled after successful API call on submit button request. However we can configure the button to be enabled after successful API call by setting **enableSubmitOnSuccess** to true.

```
commonOptions.enableSubmitOnSuccess = true;
```
