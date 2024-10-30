# JS Form Library

---

The **LoginRadiusV2.js** is commonly used to automatically generate HTML interfaces required for customer identity management e.g. Login form, Registration form, One-Time Passcode (OTP), Forgot Password, and Email Verification. The JS Form library is a library that is built in the **LoginRadiusV2.js** and is used for cases where you are required to build your own forms and functionality as opposed to using the automatically generated forms/interfaces.

This document describes the different function calls that can be made to the various LoginRadius APIs via the JS Form Library, allowing you to easily add support for LoginRadius to your custom built forms.

> **Note:** If you are currently using the automatically generated interfaces provided by **LoginRadiusV2.js** and are looking to add additional customizations/functionality, we recommend using the [JavaScript Hooks](https://www.loginradius.com/docs/api/v2/user-registration/javascript-hooks) or our [LoginRadius HTML5 SDK](https://www.loginradius.com/docs/api/v2/sdk-libraries/html5-js).

## Initialization

First you will need to make sure that LoginRadiusV2.js is loaded on your page:

`https://auth.lrcontent.com/v2/js/LoginRadiusV2.js`

Next, you will need to initialize the APIs with your LoginRadius API key.

```
var commonOptions = {};
commonOptions.apiKey = "<LoginRadius API Key>";
var LRObject = new LoginRadiusV2(commonOptions);
LRObject.api.init(commonOptions);
```

## Login

To implement a login, you will need to call the **LRObject.api.login** function which is used to handle a traditional email + password login.

Format:

`LRObject.api.login(data, onLoginSuccess, onLoginError);`

- **data**: Data is an object that represents the data required for login. For details on what information you can provide [click here](https://www.loginradius.com/docs/api/v2/user-registration/post-auth-login-by-email). Typically it should have the properties **emailid** for the provided email and **password** for the provided password.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful login.

- **onError**: Pass in a function you would like to use as a callback for a failed login attempt.

Example:

```
LRObject.api.login({
            emailid: "example@example.com",
            password: "123xxx789"
        },
        function(response) {
        // On Success this callback will call
        // response will be { access_token :"<token>", expires_in :"<date and time>" }
        // you can use token response.access_token and get user profile using your
        // LoginRadius SDK.
            alert(JSON.stringify(response));
        }, function(errors) {
        // on failure this function will call ‘errors’ which is an array of errors with message.
        // every kind of error will be returned in this method
        // you can run a loop on this array to identify the description and other aspect of error.
            alert(JSON.stringify(errors));
        });
```

**NOTE:** This function also supports phone login **commonOptions.phoneLogin** should be set to true to enable Phone Login.

## Registration

The registration Function is used to register new users.

Format:

`LRObject.api.registration(schema, data, onRegistrationSuccess, onRegistrationError);`

- **schema**: The schema for the fields being provided. You can leave schema as an empty array unless you're updating complex arrays.

- **data**: Data is an object that represents the user profile that you are creating, you can refer to our [detailed datapoints](https://www.loginradius.com/docs/api/v2/user-registration/detailed-data-point) doc for more information on which fields can be updated. Using this API you cannot specify complex array fields directly within this object without using the schema.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful registration.

- **onError**: Pass in a function you would like to use as a callback for a failed registration attempt.

Example:

```
var schema = [{
        type: "string",
        name: "email",
        display: "Email Id",
        rules: "required|valid_email",
        permission: "r"
    }, {
        type: "password",
        name: "password",
        display: "Password",
        rules: "required|min_length[6]|max_length[32]",
        permission: "w"
    }];

var data =  {
      email: [{type: "Primary", value: "example@example23423423.com"}],
      password: "Testing123"
  };

LRObject.api.registration(schema, data,
  function(response) {
        alert(JSON.stringify(response));
    },
  function(errors) {
        alert(JSON.stringify(errors));
    });
```

## Update

Account updates can be accomplished via the **LRObject.api.updateData** function.

Format:

`LRObject.api.updateData(schema, data, token, onUpdateSuccess, onUpdateError);`

- **schema**: The schema for the fields being provided. You can leave schema as an empty array unless you're updating complex arrays.

- **data**: Data is an object that represents the fields and their values of the profile that you are updating. You can refer to our [detailed datapoints](https://www.loginradius.com/docs/api/v2/user-registration/detailed-data-point) doc for more information on which fields can be updated. Please note that when using this library you cannot specify complex array fields.

- **token**: The access_token of the customer.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful update.

- **onError**: Pass in a function you would like to use as a callback for an unsuccessful update.

## Forgot Password

**LRObject.api.forgotPassword** is used to send a forgot password email to a customer, the email will contain the verification token to then be consumed the resetPassword function.

> **Note**: Since the **Forgot Password** flow requires a **resetpasswordurl** on which the user will be redirected to reset the password, it is required to whitelist that resetpasswordurl. To whitelist the same, navigate to LoginRadius [Admin console > Deployment > Apps > Web Apps](https://adminconsole.loginradius.com/deployment/apps/web-apps), and add the URL under the Production Website URL(s) section.

Format:

`LRObject.api.forgotPassword(data,onSuccess, onError);`

- **data**: Data is an object that contains the object details for the [Auth Forgot Password API](https://www.loginradius.com/docs/api/v2/user-registration/auth-forgot-password), this object requires the **email** of the customer.

- **onSuccess**: Pass in a function you would like to use as a callback when the email was successfully sent.

- **onError**: Pass in a function you would like to use as a callback for when attempting to send the email has failed.

Example:

```
LRObject.api.forgotPassword({
    email: "xxx@xxx.com"
}, function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Reset Password

To reset a password you can call **LRObject.api.resetPassword** along with the new password, the password should be passed inside the data object.

Format:

`LRObject.api.resetPassword(data, onSuccess, onError);`

- **data**: Data is an object that represents the body params for the [Auth Reset Password API](https://www.loginradius.com/docs/api/v2/user-registration/auth-reset-password-by-reset-token) it requires the following:

  - **resettoken**: The password reset token the customer should have received via email when requesting a password reset.
  - **password**: the new desired password.
  - **confirmpassword**: The new desired password (again).

- **onSuccess**: Pass in a function you would like to use as a callback for a successful password change.

- **onError**: Pass in a function you would like to use as a callback for a failed password change attempt.

Example:

```
LRObject.api.resetPassword({
     resettoken: "5f0fc908xxxxxxxxxx800d2468a93d73",
     confirmpassword: "123xxx789",
     password: "123xxx789"
 }, function(response) {
     alert(JSON.stringify(response));
 }, function(errors) {
     alert(JSON.stringify(errors));
 });
```

## Email Verification

To implement email verification, you will need to setup an email verification page on your website and call **LRObject.api.emailVerification** along with the verification token (also known as vtoken).

The verification page that has this emailVerification function should be the same that you have provided in your LoginRadiusV2.js options object "commonOptions.verificationUrl".

Alternatively, in the LoginRadius Admin Console in your verification email template, you can also hard code the link to your verification page that has the emailVerification function.

For more details on email verification, we recommend reading our documentation on [Email Workflow Settings](https://www.loginradius.com/docs/api/v2/admin-console/email-workflow/email-workflow-settings) and on [Email Template Management](https://www.loginradius.com/docs/api/v2/admin-console/email-workflow/email-template-management)

Note: This function leverages the [Auth Verify Email API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email). Review this API if you need details on parameters that can be provided in the **Data** object.

Format:

`LRObject.api.emailVerification(data,onSuccess, onError);`

- **data:** An object that has the **verificationtoken** (often passed via the url params as vtoken) which is required for email verification. It can optionally take **url** or _welcomeemailtemplate_.

- **onSuccess**: Pass in a function you would like to use as a callback for successful email verification.

- **onError**: Pass in a function you would like to use as a callback for a failed verification attempt.

Example:

```
LRObject.api.emailVerification({
        vtoken: "<VTOKEN>"
    },
    function(response) {
        alert(JSON.stringify(response));
    },
    function(errors) {
        alert(JSON.stringify(errors));
    });

```

## Social Login Function

To implement Social Login, call the **LRObject.api.socialLogin** function along with the token, in this case, the token comes from the callback response after the social login process. This will also prompt a 'missing required field' filling interface if some fields are not filled automatically from the data obtained via the social provider. By filling in the form, the customer's account will be generated.

`LRObject.api.socialLogin (data, onSuccess, onError, onMissingField, Schema)`

- **data**: Pass in an object that contains a **token** that has the access_token for the value.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful social login.

- **onError**: Pass in a function you would like to use as a callback for a failed social login attempt.

- **onMissingField**: Pass in a function you would like to use as a callback when the automated process of getting the social profile data was not able to fill out all of the required fields.

Example:

```
LRObject.api.socialLogin({
    token: "xxxxxxxx-xxx-4337-xxxx-d624703ffe55"
}, function(response) {
    //success
    alert(JSON.stringify(response));
}, function(errors) {
    // failure
    alert(JSON.stringify(errors));
});
```

## Resend Email Verification

To resend email verification, you can call **LRObject.api.resendEmailVerification** with the customer's email address.

Note: This function leverages the [Auth Resend Email Verification API](https://www.loginradius.com/docs/api/v2/user-registration/auth-resend-email-verification).

Format:

`LRObject.api.resendEmailVerification(data, onSuccess, onError);`

- **data:** Should be an object that contains the required **email** of the customer.

- **onSuccess**: Pass in a function you would like to use as a callback when the verification email is successfully resent.

- **onError**: Pass in a function you would like to use as a callback if resending the verification email fails.

Example:

```
LRObject.api.resendEmailVerification({
    email: "xxx@xxx.com"
}, function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## One Time Passcode (OTP)

This section deals with enabling login by sending a One Time Passcode to your customers and allowing them to login with it.

### Phone Send OTP

To get a One Time Password (OTP), call **LRObject.api.otpLogin** with the customer's **phone number**. Note: This API is based on the [Phone Send One time Passcode API](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-user-registration-by-sms).

Format:

`LRObject.api.otpLogin(data, onSuccess, onError);`

- **data:** Should be an object that contains the required phone number of the customer passed as **phone** and you can optionally pass in your preferred SMS template via **smstemplate**

- **onSuccess**: Pass in a function you would like to use as a callback when the One Time Passcode is successfully sent.

- **onError**: Pass in a function you would like to use as a callback if sending the passcode fails.

Example:

```
LRObject.api.otpLogin({
    phone: “xxxxxxxxxxxxxxx"
    },
    function(response) {
    //success
    alert(JSON.stringify(response));

}, function(errors) {
    //failure
    alert(JSON.stringify(errors));
});
```

### Verify OTP

The Verify OTP Login function leverages the [Phone Verification by OTP API](https://www.loginradius.com/docs/api/v2/user-registration/phone-verify-otp) to verify a customer's provided phone number via the One Time Passcode.

Format:

`LRObject.api.verifyOTP(otp, phoneToVerify, onSuccess, onError);`

Example:

```
LRObject.api.verifyOTP({
    otp: "xxxx"
},{phone:"xxxxxxxx"},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Resend OTP

The resendOTP function is used to resend the One Time Passcode to a customer's phone. It is based on the [Phone Resend Verification OTP API](https://www.loginradius.com/docs/api/v2/user-registration/phone-resend-otp)

**Format:**

`LRObject.api.resendOTP(data, onSuccess, onError);`

- **data:** Should be an object which contains the customers phone number as **phone**.

- **onSuccess:** Pass in a function you would like to use as a callback when the One Time Passcode was successfully resent.

- **onError:** Pass in a function you would like to use as a callback if the resending the OTP has failed.

Example:

```
LRObject.api.resendOTP({
    phone: "xxxxxxxxxx"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Update Phone

This function is used to update the configured phone.

Format:

`LRObject.api.updatePhone(data, onSuccess, onError);`

- **data:** Should be an object containing the new value for **phone**.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful reset.

- **onError:** Pass in a function you would like to use as a callback if the request has failed.

Example:

```
LRObject.api.updatePhone({
    phone: "xxxxxxxxxx"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Verify OTP Login

_Note:_ This function is intended for flows that interact with the Passwordless Login APIs.

The Verify OTP Login function leverages the [Phone Login Using One Time Passcode API](https://www.loginradius.com/docs/api/v2/user-registration/phone-login-using-one-time-passcode) which is part of the Passwordless Login APIs to login a customer instantly by returning an **access_token** along with the customer's profile if the token is valid.

**Format:**

`LRObject.api.verifyOTP(otpData, phoneData, onSuccess, onError);`

- **otpData:** Should be an object which contains the One Time Passcode as **otp**

- **phoneData:** Should be an object which contains the customer's phone number as \*_phone_

- **onSuccess**: Pass in a function you would like to use as a callback when the One Time Passcode is successful at returning the profile of the customer.

- **onError**: Pass in a function you would like to use as a callback if the login has failed.

Example:

```
LRObject.api.verifyOTP({
otp:"xxxx"
},
{
phone:"xxxxxxxxx"
},
function(res){
console.log(res);
},
function(res){console.log(res)
});
}}
}
```

## Multi-Factor Authentication

The Multi-Factor Authentication set of functions are specifically designed to help in implementing workflows
that make use of multiple factors for authentication.

### Multi-Factor Authentication Login

This function allows you to initiate a traditional login if you have MFA (Multi-Factor Authentication) enabled in your LoginRadius Admin Console, this function leverages the [MFA Email Login API](https://www.loginradius.com/docs/api/v2/user-registration/2fa-email-login).

The format for the MFA Login function is as follows:

`LRObject.api.twoFALogin = function(data, onSuccess, onError);`

- **data:** Should be an object which contains the **email** and **password** properties obtained from the customer's input.

- **onSuccess:** Pass in a function you would like to use as a callback when the customer has passed the first step to Multi-Factor Authentication.

- **onError:** Pass in a function you would like to use as a callback if providing the email and password failed.

### Multi-Factor Authentication Update Phone

The **twoFAUpdatePhone** function leverages the [MFA Update Phone Number API](https://www.loginradius.com/docs/api/v2/user-registration/2fa-update-phone-number) which is used to update the phone number used to Multi-Factor Authentication by customers.

Format:

`LRObject.api.twoFAUpdatePhone(data, onSuccess, onError);`

- **data:** Should be an object which contains all of the parameters required to update the phone number in the [MFA Update Phone Number API](https://www.loginradius.com/docs/api/v2/user-registration/2fa-update-phone-number).

- **onSuccess:** Pass in a function you would like to use as a callback when the customer has passed successfully updated the phone number.

- **onError:** Pass in a function you would like to use as a callback if updating the phone number has failed.

Example:

```
LRObject.api.twoFAUpdatePhone({
    phoneNo2FA: "xxxxxxxxxx"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Multi-Factor Authentication Verify OTP

This function leverages the [MFA Validate OTP API](https://www.loginradius.com/docs/api/v2/user-registration/2fa-verify-otp) and is used to login via Multi-factor Authentication.

Format:

`LRObject.api.twoFAVerifyOTP(data, onSuccess, onError);`

- **data:** Should be an object which contains all of the parameters required to verify the OTP, you can refer to the [MFA Validate OTP API](https://www.loginradius.com/docs/api/v2/user-registration/2fa-verify-otp) for details.

- **onSuccess:** Pass in a function you would like to use as a callback when the customer has been successfully logged in.

- **onError:** Pass in a function you would like to use as a callback if the customer has failed the login.

Example:

```
LRObject.api.twoFAVerifyOTP({
    otp: "xxxx"
}, function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});

```

### Multi-Factor Authentication Resend OTP

This API is used to resend the One Time Passcode (OTP) by phone if needed during a Multi-Factor Authentication process.

Format:

`LRObject.api.twoFAResendOTP(data, onSuccess, onError);`

- **data:** Should be an object which contains the customer's phone number under the **phoneNo2FA** parameter.

- **onSuccess:** Pass in a function you would like to use as a callback when the customer has been successfully resent the OTP.

- **onError:** Pass in a function you would like to use as a callback if resending the OTP has failed.

Example:

```
LRObject.api.twoFAResendOTP({
    phoneNo2FA: "xxxxxxxxxx"
}, function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Multi-Factor Authentication Reset

This function is used to reset the MFA configurations on the account.

To implement reset twoFA, call \*\*\*\* with otpauthenticator or googleauthenticator , success function and error function.

Format:

`LRObject.api.resetTwoFactor(otpauthenticator, onSuccess, onError);`

- **otpauthenticator:** Should be a string containing the otpauthenticator.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful reset.

- **onError:** Pass in a function you would like to use as a callback if the request has failed.

Example:

```
LRObject.api.resetTwoFactor(
    "otpauthenticator"
,
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Get Back up Code

To implement the get back up code functionality, call **LRObject.api.getBackupCode** with the access_token, along with a success function and error function.

Format:

`LRObject.api.getBackupCode("access_token", onSuccess, onError);`

- **access_token**: Should be a string containing the access_token.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful request.

- **onError**: Pass in a function you would like to use as a callback for a failed request.

Example:

```
LRObject.api.getBackupCode("<access_token>",
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Reset Back up Code

To implement the reset back up code functionality, call **LRObject.api.resetBackupCode** with token, success function and error function.

Format:

`LRObject.api.resetBackupCode("access_token", onSuccess, onError);`

- **access_token**: Should be a string containing the access_token.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful reset.

- **onError**: Pass in a function you would like to use as a callback for a failed reset.

Example:

```
LRObject.api.resetBackupCode("<access_token>",
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Add Email

The add email function is used to add additional emails to an existing account.

Format:

`LRObject.api.addEmail(data, onSuccess, onError);`

- **data:** Should be an object containing the new value for **email** and **type** email type should be used to identify the type of email being added, e.g.: 'Primary', 'Secondary'.

- **onSuccess:** Pass in a function you would like to use as a callback when successfully adding a new email.

- **onError:** Pass in a function you would like to use as a callback if the request has failed.

Example:

```
LRObject.api.addEmail({email:"lrtest333@gmail.com",type:"personal"},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Remove Email

This function is used to remove emails from a given account.

Format:

`LRObject.api.removeEmail(data, onSuccess, onError);`

- **data:** Should be an object containing the value for **email** which should be the email you want to remove.

- **onSuccess:** Pass in a function you would like to use as a callback for successful removal.

- **onError:** Pass in a function you would like to use as a callback if the request has failed.

Example:

```
LRObject.api.removeEmail({
    email: "xyz@gmail.com"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Change Username

This function is used to change the username on a given account.

Format:

`LRObject.api.changeUsername(data, onSuccess, onError);`

- **data:** Should be an object containing the value for the **username** which should be the new username to be applied.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful change.

- **onError:** Pass in a function you would like to use as a callback if the change failed.

Example:

```
LRObject.api.changeUsername({
    username: "xyz"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Change Password

This API is used to change the existing password on an account.

Format:

`LRObject.api.changePassword(data, onSuccess, onError);`

- **data:** Should be an object containing the value for **oldpassword** which should be the old password, the value for **password** which is the new password to be applied along with **confirmpassword** which should be the same as **password**.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful change.

- **onError:** Pass in a function you would like to use as a callback if the change failed.

Example:

```
LRObject.api.changePassword({
    oldpassword: "xxxxxx",
	newpassword: "xxxxxx",
    confirmpassword: "xxxxxx"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Check Phone Number Availability

This function allows you to check the availability of a given phone number.

Format:

`LRObject.api.checkPhoneNumberAvailability(data, onSuccess, onError);`

- **data:** Object containing the value of **phone** which is the phone number you wish to verify.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful response. You should receive the availability as so: `{ "IsExist": true }`

- **onError:** Pass in a function you would like to use as a callback if the request failed.

Example:

```
LRObject.api.checkPhoneNumberAvailability({
    phone: "xxxxxxxxxx"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Check Email Availability

This function allows you to check the availability of a given email.

Format:

`LRObject.api.checkEmailAvailability(data, onSuccess, onError);`

- **data:** Object containing the value of **email** which is the email you wish to verify.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful response. You should receive the availability as so: `{ "IsExist": true }`

- **onError:** Pass in a function you would like to use as a callback if the request failed.

Example:

```
LRObject.api.checkEmailAvailability({
    email: "xyz@gmail.com"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Check Username Availability

This function allows you to check the availability of a given username.

Format:

`LRObject.api.checkUserNameAvailability(data, onSuccess, onError);`

- **data:** Object containing the value of **username** which is the username you wish to verify.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful response. You should receive the availability as so: `{ "IsExist": true }`

- **onError:** Pass in a function you would like to use as a callback if the request failed.

Example:

```
LRObject.api.checkUserNameAvailability({
    username: "xyz"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Reset Password By Phone

This function allows you to reset the password of a given account by phone.

Format:

`LRObject.api.resetPasswordByPhone(data, onSuccess, onError);`

- **data:** Object containing the value of **otp** which is the One Time Passcode sent to the phone, **phone** for the phone number, and **password** for the desired password.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful response.

- **onError:** Pass in a function you would like to use as a callback if the request failed.

Example:

```
LRObject.api.resetPasswordByPhone({
    otp: "xxxx",
	phone: "917300470xxx",
    password: "xxxxxx"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Forgot Password By Phone

This function allows you to begin the process of changing the password by phone.

Format:

`LRObject.api.forgotPasswordbyPhone(data, onSuccess, onError);`

- **data:** Object containing the value of the **phone** which is being used.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful response.

- **onError:** Pass in a function you would like to use as a callback if the request failed.

Example:

```
LRObject.api.forgotPasswordbyPhone({
    phone: "xxxxxxxxxx"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Reset Password By Security Question

This function allows you to reset the password on an account by answering the configured Security Question(s).

Format:

`LRObject.api.resetPasswordBySecurityQuestion(data, onSuccess, onError);`

- **data:** Object containing the value of either **email/username/phone** for the account, along with the desired **password** and the question and answer.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful response.

- **onError:** Pass in a function you would like to use as a callback if the request failed.

Example:

```
LRObject.api.resetPasswordBySecurityQuestion({
    email/username/phone: "<your login email/username/phone>",
    password: "xxxxxx",
    "<questionid>": "<answer>",
    "<questionid>": "<answer>"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Update Security Question Answer

This function allows you to update the Answer(s) to the Security Question(s) on a given account.

Format:

`LRObject.api.updateSecurityQuestion(data, onSuccess, onError);`

- **data:** Object containing the questions as key and the correct answer as value.

- **onSuccess:** Pass in a function you would like to use as a callback for a successful response.

- **onError:** Pass in a function you would like to use as a callback if the request failed.

```
LRObject.api.updateSecurityQuestion({
    "<questionid>": "<answer>",
    "<questionid>": "<answer>"
},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Invalidate token

This function allows you to invalidate a token.

Format:

`LRObject.api.invalidateToken('access_token', onSuccess, onError);`

- **access_token**: Should be a string containing the access_token.

- **onSuccess**: Pass in a function you would like to use as a callback when the token is successfully invalidated

- **onError**: Pass in a function you would like to use as a callback if invalidating the given access_token fails.

Example:

```
LRObject.api.invalidateToken("<access_token>",
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## Validate token

This function allows you to validate an access_token.

Format:

`LRObject.api.validateToken('access_token', onSuccess, onError);`

- **access_token**: Should be a string containing the access_token.

- **onSuccess**: Pass in a function you would like to use as a callback when the token returns successful.
  ```
  {access_token: "62fc95b8-6dd2-49fb-a4e2-b7be99c25f03", expires_in: "2017-04-26T05:01:59.575Z"}
  ```
- **onError**: Pass in a function you would like to use as a callback if the token turns up invalid.

<!-- Commented as per https://loginradius.atlassian.net/browse/DOC-2580?focusedCommentId=225660

## Get Social Data

The Get Social Data function is used to call any API from the [Social APIs](https://www.loginradius.com/docs/api/v2/social-login/getting-started) that require the "GET" method.

To implement get social data, call **LRObject.api.getSocialData** with the access_token, the success function , error function, the endpoint, and paramQueryString.

Format:

`LRObject.api.getSocialData('access_token', onSuccess, onError, 'endpoint', paramQueryString);`

- **access_token**: Should be a string containing the access_token.

- **onSuccess**: Pass in a function you would like to use as a callback when the request is successful.

- **onError**: Pass in a function you would like to use as a callback for when the request failed.

- **endpoint**: The desired Endpoint e.g. `/api/v2/like` for the [Like API](https://www.loginradius.com/docs/api/v2/social-login/like).

- **paramQueryString**: The desired query string parameters (Using the [Like API](https://www.loginradius.com/docs/api/v2/social-login/like) for our example) e.g. `&access_token`

Example:

```
LRObject.api.getSocialData("<access_token>",
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
}, "<endpoint","<paramQueryString>");
```

## Post Social Data

The Post Social Data function is used to call any API from the [Social APIs](https://www.loginradius.com/docs/api/v2/social-login/getting-started) that require the "POST" method.

To implement post social data, call **LRObject.api.postSocialData** with the access_token, a success function, an error function, the desired endpoint, the desired paramQueryString and the postBodyJson.

Format:

`LRObject.api.LRObject.api.postSocialData('access_token', onSuccess, onError, 'endpoint', paramQueryString, postBodyJson);`

- **access_token**: Should be a string containing the access_token of the logged in customer.

- **onSuccess**: Pass in a function you would like to use as a callback when the request is successful.

- **onError**: Pass in a function you would like to use as a callback for when the request fails.

- **endpoint**: The desired Endpoint e.g. `/api/v2/message` for the [Post Message API](https://www.loginradius.com/docs/api/v2/social-login/post-message-api).

- **paramQueryString**: The desired query string parameters (Using the [Post Message API](https://www.loginradius.com/docs/api/v2/social-login/post-message-api) for our example) e.g. `&access_token?to=example%40example.com?subject=welcome?message=hello`

- **postBodyJson**: The desired JSON for the POST body if there are any, otherwise leave this blank.

```
LRObject.api.postSocialData("<access_token>",
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
}, "<endpoint","<paramQueryString>",postBodyJson);
```
-->

## Custom Object

The Custom Object set of functions are designed to assist you in managing your Custom Objects.

### Get Custom Objects

This function is used to get all of the custom objects associated to a customer by using the access_token.

Format:

`LRObject.api.getCustomObjects('access_token', onSuccess, onError);`

- **access_token**: Should be a string containing the access_token.

- **onSuccess**: Pass in a function you would like to use as a callback when the request is successful.

  The onSuccess callback will be passed the objects which should look like this:

  ```
  {
  "data": [
    {
      "Id": "58ef731ddbe4871078e527f6",
      "IsActive": true,
      "DateCreated": "2017-04-13T12:46:21.223Z",
      "DateModified": "2017-04-13T12:46:21.223Z",
      "IsDeleted": false,
      "Uid": "8347eab687f442f2b06f42a3390dc42d",
      "CustomObject": {
        "data": "Click Here",
        "size": 36,
        "style": "bold"
      }
    },
    {
      "Id": "58ef7360dbe4871078e527f7",
      "IsActive": true,
      "DateCreated": "2017-04-13T12:47:28.533Z",
      "DateModified": "2017-04-13T12:49:20.07Z",
      "IsDeleted": true,
      "Uid": "8347eab687f442f2b06f42a3390dc42d",
      "CustomObject": {
        "data": "Click Here",
        "size": 36,
        "style": "bold"
      }
    },
    {
      "Id": "58f7215bdbe4411470a16804",
      "IsActive": true,
      "DateCreated": "2017-04-19T08:35:39.802Z",
      "DateModified": "2017-04-19T08:35:39.802Z",
      "IsDeleted": false,
      "Uid": "8347eab687f442f2b06f42a3390dc42d",
      "CustomObject": {
        "data": "Click Here",
        "size": 36,
        "style": "bold"
      }
    }
  ],
  "Count": 3
  }
  ```

- **onError**: Pass in a function you would like to use as a callback for a failed request.

Example:

```
LRObject.api.getCustomObjects("<access_token>",
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Create Custom Object

This function is used to create a custom object.

Format:

`LRObject.api.createCustomObject('access_token', customObjectJSON, onSuccess, onError);`

- **access_token**: Should be a string containing the access_token.

- **customObjectJSON**: Should be a JSON that describes the object you would like to store.

- **onSuccess**: Pass in a function you would like to use as a callback when the object is successfully created.

  The onSuccess callback will be passed the following:

  ```
  {
   "Id": "58f7215bdbe4411470a16804",
   "IsActive": true,
    "DateCreated": "2017-04-19T08:35:39.802Z",
    "DateModified": "2017-04-19T08:35:39.802Z",
    "IsDeleted": false,
    "Uid": "8347eab687f442f2b06f42a3390dc42d",
    "CustomObject": {
     "data": "Click Here",
     "size": 36,
     "style": "bold"
    }
  }
  ```

- **onError**: Pass in a function you would like to use as a callback for object creation failure.

Example:

```
LRObject.api.createCustomObject("<access_token>",
customObjectJSON,
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Custom Object by ObjectRecordId and Token

This function is used to pull a customer's custom object.

Format:

`LRObject.api.getCustomObjectById('access_token', 'objectrecordid', onSuccess, onError);`

- **access_token**: Should be a string containing the access_token.

- **objectrecordid**: Should be a string containing the objectrecordid.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful request.

  The onSuccess callback will be passed the object which should look as per this example:

  ```
  {
   "Id": "58f7215bdbe4411470a16804",
   "IsActive": true,
    "DateCreated": "2017-04-19T08:35:39.802Z",
    "DateModified": "2017-04-19T08:35:39.802Z",
    "IsDeleted": false,
    "Uid": "8347eab687f442f2b06f42a3390dc42d",
    "CustomObject": {
     "data": "Click Here",
     "size": 36,
     "style": "bold"
    }
  }
  ```

- **onError**: Pass in a function you would like to use as a callback for a failed request.

Example:

```
LRObject.api.getCustomObjectById("<access_token>",
"<objectrecordid>",
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Delete Custom Object By Access Token and Object Record Id

This function allows you to delete your Custom Objects by providing the access_token and the Object Record ID.

Format:

`LRObject.api.deleteCustomObjectById('access_token', 'objectrecordid', onSuccess, onError);`

- **access_token**: Should be a string containing the access_token.

- **objectrecordid**: Should be a string containing the objectrecordid.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful request.

  The onSuccess callback will be passed the following:
  `{ "IsDeleted": true }`

- **onError**: Pass in a function you would like to use as a callback for a failed request.

Example:

```
LRObject.api.deleteCustomObjectById("<access_token>",
"<objectrecordid>",
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

### Update Custom Object By Access Token and Object Record Id

Allows you to update your custom objects by providing the access_token and the **Object Record ID**.

Format:

`LRObject.api.updateCustomObjectById('access_token', 'objectrecordid', customObjectJSON, onSuccess, onError, 'updateType');`

- **access_token**: Should be a string containing the access_token.

- **objectrecordid**: Should be a string containing the objectrecordid.

- **customObjectJSON**: Should be a JSON that describes the object you would like to update.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful request.

- **onError**: Pass in a function you would like to use as a callback for a failed request.

- **updatetype**: (Optional) You can pass either 'replace' (it will fully replace the custom object with new provided json) or 'partialreplace' (it will perform an upsert type operation).

Example:

```
LRObject.api.updateCustomObjectById("<access_token>",
"<objectrecordid>",
customObjectJSON,
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
}, "updateType");
```

## Smart Login

To implement Smart Login, call **LRObject.api.smartLogin** with emailid/username, success function and error function.

Format:

`LRObject.api.smartLogin(data, onSuccess, onError);`

- **data**: Data is an object that contains the 'email' parameter.

- **onSuccess**: Pass in a function you would like to use as a callback for a successful Smart Login.

  The onSuccess call back should receive the following callback:
  `["An Email has been sent to given address, please verify in order to log in."]`

- **onError**: Pass in a function you would like to use as a callback for a failed Smart Login attempt.

Example:

```
LRObject.api.smartLogin({email:"xyz@gmail.com"},
 function(response) {
    alert(JSON.stringify(response));
}, function(errors) {
    alert(JSON.stringify(errors));
});
```

## One Touch Login

The One Touch Login set of functions is designed to assist you in managing your one touch logins.

### One Touch Login API

To perform a One Touch Login Action that triggers email or SMS, call **LRObject.api.oneTouchLogin** with the customer's email or phone number.

> **Note:** This API is based on the [One Touch Login by Email API](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-by-email-captcha/) and [One Touch Login by Phone API](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-by-phone-captcha/)

Format:

`LRObject.api.oneTouchLogin(data, onSuccess, onError);`

- **data:** This should be an object that contains the required email address of the customer passed as **email** or phone number of the customer passed as **phone**.

- **onSuccess:** Pass in a function you would like to use as a callback when the One Touch Login API is successfully sent.

- **onError:** Pass in a function you would like to use as a callback if One Touch Login API  fails.

Example:

```
LRObject.api.oneTouchLogin({
    email: "xxxxxxxxxxxxxxx" // phone:"xxxxxxxxxxxxxxx"
    },
    function(response) {
    //success
    alert(JSON.stringify(response));

}, function(errors) {
    //failure
    alert(JSON.stringify(errors));
});
```

### One Touch Login Verify API

To verify the token or OTP, call **LRObject.api.oneTouchLoginVerify**.

> **Note:** This API is based on the [One Touch Email Verification API](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-email-verification/) and [One Touch OTP Verification](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-otp-verification/).

Format:

```
data = {'verificationtoken' = '************'  } // When Token is slected in token type
or
data = {'verificationtoken' = '************', email= '********' } // When OTP is selected in token type
or
data = {'phone' = '************' , otp='**********'}  // When OTP is receieved in your phone
```
`LRObject.api.oneTouchLoginVerify(data, onSuccess, onError);`

- **data:** Should be an object that contains the required verification token/ OTP in email or phone.

- **onSuccess:** Pass in a function you would like to use as a callback when the One Touch Login  Verify API is successfully sent.

- **onError:** Pass in a function you would like to use as a callback if the One Touch Login Verify API fails.

