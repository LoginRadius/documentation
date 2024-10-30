# Features/Use Cases

Features are basically a description of the product complete functionality. In general terms a feature is something you would like to share with your customers and prospective customers. While a use case is a way by which a customer achieves their  goal using our products feature. Use cases are a way to document a specific type of requirements.

## Overview

This document will take you through configuring all available LoginRadius features on the IDX page including Admin Console configurations and customization. You can simply follow this document in order to configure any of the features on the IDX page like Social Login, Phone Authentication, Risk-Based Authentication, etc.

- Phone Authentication
- Account Linking
- Multi-Factor Authentication
- Passwordless Authentication
- One Touch Login
- Update Phone ID
- Privacy Policy
- Custom Object
- Social Login

## Phone Authentication

It may be useful to tie the accounts to a phone number, such as when your main product is a mobile app and you want your users to go through a registration process. In this case, allowing them to register by providing a phone number and password for registration as opposed to an email and password might be a better experience. You can find the settings on the Admin Console, follow the Phone Login Configuration document [here](https://www.loginradius.com/authentication/tutorial/phone-login/).

Phone Authentication is disabled by default in the LoginRadius Admin Console. To enable this feature please contact [LoginRadius Support team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

Most of the settings for Phone Authentication are already configured by default. If any updates are needed, they can be manually configured under respective sections. As a better approach, you should enable Phone ID field in [**Platform Configuration > Authentication Configuration > Standard Login > Data Schema**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema).

![enter image description here](https://apidocs.lrcontent.com/images/4_37375e9c8d57afe266.33761637.png "Data Schema")

##### Username Login

You may want to use a UserName as the unique identifier for your customers, for various reasons, for example, you may want customers to have a publicly visible identifier that doesn't associate to their personal information or you may want to allow a customer to have multiple accounts with the same email.

To check if Username Registration is enabled for your account you need to login to your [**Admin Console**](https://adminconsole.loginradius.com/) account and navigate to **Platform Configuration > Identity Workflow > Auth Workflow**. Check if  the Username Registration box is in green with the **enabled** text. 

As show in the following screen:

![username](https://apidocs.lrcontent.com/images/username_166155e7c821252b488.01393345.png "username")

If the feature is not enabled then navigate to [**Platform Configuration > Authentication Configuration > Standard Login > Data Schema**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema) and look for **UserName** (field) and enable it and save the configuration. **UserName** field will start showing on the IDX Page.

##### Identity Experience Framework Page Customization Steps

This is a default flow and no customization is required, refer to the [Javascript Hooks](https://www.loginradius.com/docs/api/v2/user-registration/javascript-hooks) document for details on how to make stylistic or functional changes such as renaming labels as per your requirements.

## Account Linking

LoginRadius provides an Account Linking feature that will link customer's profiles from different providers. You can learn more about account linking with the help of this [document](https://www.loginradius.com/docs/libraries/identity-experience-framework/features-use-cases/#accountlinking2).

This feature is already enabled by default on your Identity Experience Framework page so no further action needs to be taken to utilize this feature. You can link any configured social account by the following steps:

1. Login to your Identity Experience Framework page `https://<your-site-name>.loginradius.com/auth.aspx`
2. You will see your configured social providers on your account profile (left side).
3. Click and log in by any social provider which you want to link with this account.
4. You will see your linked accounts under **Linked Social Accounts**.

This will link your social accounts with the logged in account and upon login with any linked account you will get to log in with that account.

![enter image description here](https://apidocs.lrcontent.com/images/linked1_61035c8f6c84ca68e6.43164710.png)

## Multi-Factor Authentication

Providing your customers with two factors of authentication is one of the most powerful security tools you can provide your customers with, for usage details please see our [Multi-Factor Authentication Overview](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/overview).

To check if this feature is enabled or not for your app go to **Platform Security > Multi-Layered Security > Multi-Factor Authentication**. his feature is disabled by default in the LoginRadius Admin Console. An explicit request has to be made by contacting  [LoginRadius Support team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) to enable it.

##### WHERE YOU CAN CONFIGURE MFA

Follow the [Multi Factor Authentication Configuration](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/overview#smsdashboardconfiguration1) document to configure **Multi-Factor Authentication settings** from the Admin Console.

##### Identity Experience Framework Page Customization Steps

The IDX Page will need some additional customization to support MFA, see the following required steps:

Navigate to **Deployment -> Identity Experience Framework -> Profile Page Files** Files and follow the following instructions

- **Display the MFA interface for logged in customers:**

You will need to add HTML code for displaying Multi-Factor Authentication Interface in profile.aspx page after closing **profile-viewer** div. The following is the sample code:

- **Sample HTML Code:**

```
<div class='lr-content-section cf' id='authentication-container'>
</div>
<div id="edit-reset" class="form-item form-type-item">
   <div class="resetCode" id="resetCode" onclick="resetBackupCodes()">Reset Code</div>
</div>
<div id="resettable" class="" style="display: none;">
   <p>The two factor authentication backup code is already generated, please reset your two factor authentication backup code. </p>
</div>
<div id="lr_ciam_reset_table" style="display: none;">
   <h5>If you lose your phone or can't receive codes via SMS, voice call or Google Authenticator, you can use backup codes to sign in. So please save these backup codes somewhere.</h5>
   <div class="form-item form-type-item">
       <div class="copyMessage" style="display:none;">Copied!</div>
       <div title="Copy" class="mybackupcopy" onclick="changeIconColor()"></div>
   </div>
   <div id="backupcode-table-body"></div>
</div>
```

- **Add New Custom JS**

Add the following JS Code to display the Multi-Factor Authentication interface for your customers under:

Before Script -> Before-Script.js file just after the code where LRObject is defined and save the file. The following is the Sample JS code:

- **Sample JS Code:**

```
  $(document).ready(function(){
   initializeTwoFactorAuthenticator();
   getBackupCodes();
});

function getBackupCodes() {
   var accessToken = readCookie("lr-session-token");
   LRObject.api.getBackupCode(accessToken,
           function (response) {
               jQuery('#backupcode-table-body').empty();
               for (var i = 0; i < response.BackUpCodes.length; i++) {
                   var html = '';
                   jQuery('#resettable').hide();
                   jQuery('#lr_ciam_reset_table').show();

                   html += '<divs class="form-item code-list" id="backup-codes-' + i + '-field">';
                   html += '<span class="backupCode">' + response.BackUpCodes[i] + '</span>';
                   html += '</div>';

                   jQuery('#backupcode-table-body').append(html);
               }
               jQuery('.mybackupcopy').click(function () {
                   setClipboard(jQuery(this).parent('.form-item').find('span').text());
               });
           }, function (errors) {
       jQuery('#resettable').show();
   });
}

function resetBackupCodes() {
   var accessToken = readCookie("lr-session-token");
   LRObject.api.resetBackupCode(accessToken,
           function (response) {
               jQuery('#backupcode-table-body').empty();
               for (var i = 0; i < response.BackUpCodes.length; i++) {
                   var html = '';
                   jQuery('#resettable').hide();
                   jQuery('#lr_ciam_reset_table').show();

                   html += '<div class="form-item code-list" id="backup-codes-' + i + '-field">';
                   html += '<span class="backupCode">' + response.BackUpCodes[i] + '</span>';
                   html += '</div>';

                   jQuery('#backupcode-table-body').append(html);
               }
               jQuery('.mybackupcopy').click(function () {
                   setClipboard(jQuery(this).parent('.form-item').find('span').text());
               });
           }, function (errors) {
               jQuery("#lr-raas-message").show().removeClass("loginradius-raas-success-message").addClass("loginradius-raas-error-message").text(errors[0].Message).delay(10000).fadeOut(300);
   });
}

function initializeTwoFactorAuthenticator() {
   //initialize two factor authenticator button
   var authentication_options = {};
   authentication_options.container = "authentication-container";
   authentication_options.onSuccess = function (response) {
       if(response.AccountSid){
           jQuery("#lr-raas-message").show().removeClass("loginradius-raas-error-message").addClass("loginradius-raas-success-message").text("An OTP has been sent.").delay(10000).fadeOut(300);
       } else if (response.IsDeleted) {
           jQuery("#lr-raas-message").show().removeClass("loginradius-raas-error-message").addClass("loginradius-raas-success-message").text("Disabled successfully.").delay(10000).fadeOut(300);
            window.setTimeout(function () {
               window.location.reload();
           }, 3000);
       } else if (response.Uid) {
           jQuery("#lr-raas-message").show().removeClass("loginradius-raas-error-message").addClass("loginradius-raas-success-message").text("Verified successfully.").delay(10000).fadeOut(300);
           window.setTimeout(function () {
               window.location.reload();
           }, 3000);
       }
   };
   authentication_options.onError = function (errors) {
       jQuery("#lr-raas-message").show().removeClass("loginradius-raas-success-message").addClass("loginradius-raas-error-message").text(errors[0].Description).delay(10000).fadeOut(300);
   }
   LRObject.init("createTwoFactorAuthentication", authentication_options);
}

function readCookie(name) {
           var nameEQ = name + "=";
           var ca = document.cookie.split(';');
           for (var i = 0; i < ca.length; i++) {
               var c = ca[i];
               while (c.charAt(0) == ' ') c = c.substring(1, c.length);
               if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
           }
           return null;
       }


function setClipboard() {
   var value = '';
   jQuery('.code-list').find('span').each(function () {
       value += jQuery(this).html() + "\n";
   });
   var tempInput = document.createElement("textarea");
   tempInput.style = "position: absolute; left: -1000px; top: -1000px";
   tempInput.value = value;
   document.body.appendChild(tempInput);
   tempInput.select();
   document.execCommand("copy");
   document.body.removeChild(tempInput);
   jQuery('.copyMessage').show();
   setTimeout(removeCodeCss, 5000);
}

function removeCodeCss() {
   jQuery('.code-list').find('span').removeAttr('style');
   jQuery('.copyMessage').hide();
}

function changeIconColor() {
   jQuery('.code-list').find('span').css({'background-color': '#008ecf', 'color': '#fff'});
}
```
![enter image description here](https://apidocs.lrcontent.com/images/bjs1_12905f0f5df95c8197.46252768.png "Custom JS")

- **Add New Custom CSS**

You can add the following CSS code to Custom CSS to display the Multi-Factor Authentication Interface. The following is the sample code:

**Sample CSS Code:**

```
#edit-reset .resetCode:hover {
    background: #fff;
    color: #008ecf;
    border:1px solid #008ecf;
    cursor: pointer;
}
#edit-reset .resetCode {
    background: #008ecf;
    float: right;
    color: #fff;
    padding: 6px 8px;
    margin-right: -9px;
}

#lr_ciam_reset_table {
    clear: both;
    margin-top: 45px;
}
div#backupcode-table-body {
    display: inline-block;
}
#backupcode-table-body .form-item {
    float: left;
    margin-top: -8px !important;
    width: 46%;
    background: #eee;
    border: 2px solid #fff;
    padding: 5px;
}
#resettable p {
    border: 1px solid red;
    padding: 5px;
    margin-top: 0px;
    border-radius: 5px;
    background: hsla(0, 100%, 50%, 0.18);
}
#resettable {
    margin-right: 100px;
}
.mybackupcopy {
    width: 32px;
    float: right;
    background-image: url(../images/copy.png);
    height: 40px;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    margin: 5px;
    cursor: pointer;
}
.copyMessage{
    background-color: #eeeeee;
    display: inline-block;
    padding: 6px 12px 5px 10px;
    color:#59b32c;
    margin-left:86%;
    margin-bottom: -21px;
}
```
![enter image description here](https://apidocs.lrcontent.com/images/13_153665e9ca382897618.42145577.png "Custom CSS")


## Passwordless Authentication

Passwordless Authentication is a great way to remove all of the difficulties that come with password management, for more details please see our [Passwordless Login Overview](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-overview).

To check if this feature is enabled or not for your app go to **Platform Configuration -> Authentication Configuration -> PasswordLess Login** section. If this section is disabled for your site contact  [LoginRadius Support team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

Follow the [Passwordless Login Configuration](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/passwordless-login-configuration) document to configure passwordless Login settings from the Admin Console.

##### IDX Page Customization

This is a default flow and no customization is required after enabling the PasswordLess Login feature from LoginRadius operation team. You will see an **Email a link to sign in** and **Send OTP to sign in** buttons on the login screen of the Identity Experience Framework page. The following screen shows how Password less login will look like on your IDX.

![PasswordLess login](https://apidocs.lrcontent.com/images/12_260855c75cefc7edeb7.00620031.png "PasswordLess login")

## One Touch Login

One Touch Login is another method of authentication that does not require a password to login, what makes it unique is that it has a ping API that can be leveraged to see if a customer has logged in, this is useful if you're delegating the authentication to another safer device which is common practice with IoT Devices. You can learn more about One Touch Login in our [documentation]https://www.loginradius.com/docs/platform-features-overview/registration-services/overview#one-touch-login).

To check if this feature is enabled or not for your app, navigate to **Platform configuration > Authentication Configuration > Advance Login Methods > One Touch Login Settings**. If this section is disabled for your site, contact  [LoginRadius Support team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

##### IDX Page Customization Steps

Navigate to **Deployment -> Identity Experience Framework** and select Auth Page from left hand side menu and follow the following steps:

- **Display the One Touch Login Interface**

  You will need to add HTML code for displaying One Touch Login Interface in auth.aspx page after closing **login-container** div. The following is the sample HTML code:

- **Sample HTML Code:**

```
<div id="onetouchLogin-container"></div>
```

- **Add New Custom JS**

Add the following JS Code to display the One Touch Login interface under Auth.aspx -> Before Script file at the bottom of the code and save the file. The following is the Sample JS Code:

- **Sample JS Code:**

```

$(document).ready(function(){
onetouchlogin();
});
function onetouchlogin(){
var one_touch_options = {};
one_touch_options.container = "onetouchLogin-container";
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
LRObject.init("onetouchLogin", one_touch_options);
});
}
```

## Update Phone ID

This section will show you how to have an interface to allow customers to update their phone numbers should they be using Phone Authentication.

To check if this feature is enabled or not for your app go to "Platform configuration" -> Authentication Configuration -> Phone Login. If this section is disabled for your site contact  [LoginRadius Support team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

##### IDX Page Customization steps

Navigate to **Deployment -> Identity Experience Framework -> Profile Page** Page and follow the following steps

- **Display Update Phone ID Interface**

You will need to add HTML code for displaying the Update Phone ID interface in profile.aspx page after closing **profile-viewer** div. The following is the sample code:

- **Sample HTML Code:**

```
<div id="phone-update-container"></div>
```

- **Add New Custom JS**

  Add the following JS Code to display the Update Phone ID interface under Profile.aspx -> Before Script -> Before-Script.js file on the bottom of the code and save the file. The following is the Sample JS Code:

- **Sample JS Code:**

```
function updatephoneonprofile() {
    var updatephone_options = {};
    updatephone_options.container = "phone-update-container";
    updatephone_options.onSuccess = function (response) {
    // On Success
        if(typeof response.Data !== 'undefined')
        {
            setMessage("An OTP has been sent");
        }
        else if(response.access_token)
        {
            setMessage("Phone number updated successfully");
        setTimeout(function () {
            location.reload();
        }, 500);
        }

    };
    updatephone_options.onError = function (response) {
        // On Error
        setMessage(response[0].Description, true);
         };

          LRObject.init("updatePhone", updatephone_options);
}

$(document).ready(function(){
updatephoneonprofile();
});
```

![enter image description here](https://apidocs.lrcontent.com/images/bjs1_12905f0f5df95c8197.46252768.png "Custom JS")


## Privacy Policy

LoginRadius provides you with the tools to assist you with your Privacy Policy Management, this is particularly useful if your business has regulatory/legal requirements for collecting consent from your end-customers, you can find additional details in our [Privacy Policy Versioning](https://www.loginradius.com/docs/api/v2/admin-console/data-governance/privacy-policy#overview0) document.

##### Identity Experience Framework Page Customization Steps

Navigate to **Deployment -> Identity Experience Framework** and select Auth.aspx Page from left hand menu and follow the following steps:


**Display Privacy Policy link on Registration page**

There are 2 ways to update the privacy policy link in the IDX page

1. **Using termsAndConditionHtml option**

   Go to **Deployment -> Identity Experience Framework -> Authentication Page** Page and download the Before-script.js From Auth.aspx > Before Script > Before-Script.js and add the following code after “**raasoption.hashTemplate=true;**”

  ```
  raasoption.termsAndConditionHtml = 'check <a href=”http://example.com/privacy” target=”_blank”>Privacy Policy</a>';
  ```

2. **Using customizeFormLabel hooks**

- Download the Before-script.js From Auth.aspx > Before Script > Before-Script.js and add the following code

```
LRObject.$hooks.call('customizeFormLabel',{
         "acceptprivacypolicy" : "I agree to the LoginRadius ® <a href='http://www.example.com/termsofuse' target='_blank'>Terms of Use</a> and <a href='http://www.example.com/privacypolicy'' target='_blank'>Privacy Statement</a>."
});
```

- Now, upload the updated before.js file under Auth.aspx -> Before Script -> Replace -> upload File

## Custom Object

Should you need to use custom data with your implementation, the LoginRadius Custom Objects can easily be leveraged with the Identity Experience Framework Page. This section assumes that you already have **Custom Data Object Storage** configured in your LoginRadius Admin Console. You can view your existing Custom Object Storages in the LoginRadius Admin Console by navigating to **Data Governance -> Data Storage -> Data Fields -> Custom Object**.

The following screen willl appear

![enter image description here](https://apidocs.lrcontent.com/images/8_76865e9c96d161f071.44665726.png "Custom Object")

If you're looking to get set up with Custom Data Object storage, please reach out to the [**LoginRadius Support team**](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

The following are APIs related to Custom object:

- [Create Custom Object by Token API](https://www.loginradius.com/docs/api/v2/user-registration/create-custom-object-by-token)

- Fetch a custom object from the [Custom Object by ObjectRecordId and Token API](https://www.loginradius.com/docs/api/v2/user-registration/custom-object-by-objectrecordid-and-token)

For customization refer this [IDX Customizations document](https://www.loginradius.com/docs/api/v2/deployment/identity-experience-framework/hosted/customization#hosted-page-customizations)

## Social Login

Social Login can help your business in the following ways:

- Reduce Login Failures: Handling login failures can be time-consuming for both you and the customer. When using Social Login, the customer does not have to provide you with a password that might need to be reset if forgotten.

- Easily Build Profiles: The data provided by social providers allows you to easily build a profile on your customers without prompting them to fill out a form. To configure Social Login, follow Configure Social App document. The configured provider will be shown like below:

![Social Providers](https://apidocs.lrcontent.com/images/1_168335c75d2d5867169.71318260.png "Social Providers")

- Increase Registrations: Having to fill out a registration form can be intimidating for a customer. According to Business Insider, Facebook has claimed that it's social authentication increases registration by 30-200%

##### Ask for required fields after social login

Should you want to minimize friction during registration, if there are additional details you would like to obtain from the customer that isn't provided by the social provider, Social Login can be configured to ask for required fields by default. If the provider doesn't return value for required fields then the Identity Experience Framework page will prompt the user to fill in the missing values of required fields.

##### Ask for optional fields after social login

To minimize friction during registration, if there are additional details you would like to obtain from the customer that isn't provided by the social provider, you can also prompt users with "optional" fields to fill out.

By default, Social Login isn’t configured to ask for optional fields. It can be configured in the user Admin Console. Go to **Deployment > JS Widgets >Settings**. Enable the option for “Ask Optional Fields On Social Signup”.

![Recaptcha1](https://apidocs.lrcontent.com/images/image-31_18472636eb5bf7049d1.65393005.png "Recaptcha1")

If it is enabled then Identity Experience Framework page will prompt the user for missing optional fields as well.

![prompt for details](https://apidocs.lrcontent.com/images/3_132885c75d270f40524.44414590.png "prompt for details")

##### Pre Filled Form Fields

If as part of your registration, you require your customer to fill out a form, you can still use the power of Social Login by pre-filling your form with data obtained from Social Login. It can be configured by following the steps below -

1. Go to **Deployment -> Identity Experience Framework -> Authentication Page** files
2. Under “Before Script > Before-Script.js” add

“raasoption.autoFilledFieldForSocial= true;” Along with other rassoptions as following:

```
raasoption.forgotPasswordUrl = raasoption.forgotPasswordUrl || encodeURIComponent(forgotpasswordurl);
raasoption.verificationUrl = raasoption.verificationUrl || encodeURIComponent(emailverifyurl);
    //raasoption.callbackUrl= window.location;
    //raasoption.templateName = window.lr_raas_settings.sociallogin.templateid;
raasoption.hashTemplate = true;
raasoption.callbackUrl = window.location.href.split('?')[0];
```

3. Now, click on the “save” button.

![enter image description here](https://apidocs.lrcontent.com/images/Deployment---LoginRadius-User-Dashboard-3_11500620c2ecde77e76.59996532.png "Before JS")


