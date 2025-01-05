# JavaScript Hooks

In computer language, the term hooking refers to a range of techniques that are used to alter or augment the behavior of an operating system, of applications, or of other software components by intercepting function calls or messages or events passed between software components. 

Here we will see how hooks can be implemented in JavaScript to change/alter the functionality of a specific LoginRadius function. The hooks that we can build in JavaScript are achieved with events and/or callbacks.

> **Prerequisites:**
   > -  All of the advanced customizations which we have explained here require that the LoginRadius User Registration Interface is configured on your site. Have a look at the getting started document here for more details.
> - Basic knowledge of HTML/JavaScript
> - Knowledge of implementation of LoginRadius features using JavaScript, referencing [this document](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/).

## JavaScript Hooks Customization Guide
This guide will tell you all about the JavaScript hooks available in LoginRadius and the customization steps around them. 


> **Note:** >Call the following hooks before calling the init function in JS Code:
> Example:
>
>```
>LRObject.$hooks.call('customizeFormPlaceholder',{
>
>"emailid" : "Enter your email address",
>
>"password" : "Enter Your password"
>
>});
>LRObject.init('login', options);
>```

Many of the hooks in this document require that you pass in a field name, please see the reference below of the complete list of possible field names.

|        |   |      |
| ------------- | ---------- | ----------- |
|  login | twofaotp   | addemail   |
| socialregistration  | showqrcode | removeemail  |
| loginrequiredfieldsupdate  | updatephone | changeusername  |
| registration  | changephone | profileeditor  |
| verifyemail  | forgotpassword | otplogin  |
| resetpassword  | securityquestions | passwordlessloginbuttonlabel  |
| sociallogin  | changepassword | passwordlessloginotpbuttonlabel  |
| otp  | resendemailverification | createtwofactorauthentication  |
| sendotp  | disablegoogleauthenticator | progressiveprofiling  |
| resendotp  | disableotpauthenticator | acceptprivacypolicy  |
| changenumber  | updatesecurityquestion | validatecode  |
| backupcode  | resetpwdbysecq | onetouchlogin  |
| backupcodebutton  | smartlogin |

## Before Action Init Hook
This hook is used to perform an action before any action initialization.

```
LRObject.$hooks.register('beforeInit', function (action) {
//Code that you would like to run before a action initializes.
});
```

## Label Customization Hook
This hook provides you with ​a quick and easy way to access and customise the label for your user registration form.



```
// "field-name": "New Label"
LRObject.$hooks.call('customizeFormLabel',{
"emailid" : "Email Address",
"password" : "Password"
});
```

> **Note:**
> In order to customize custom fields, Please add prefix "cf\_" with field-name.

## Modify XHR Request Hook
This hook provides the functionality to modify the XHR request.

```
LRObject.$hooks.register('modifyXhrRequest', function (action, xhr, url) {
 xhr.setRequestHeader('X-ORIGIN-IP', '1.1.1.4');
});
```

## Placeholder Customization Hook
This hook helps you set up customized placeholders for form elements.

```
LRObject.$hooks.call('customizeFormPlaceholder',{
"emailid" : "Enter your email address",
"password" : "Enter Your password"
});
```

## Default Option Choice Hook
This hook helps you to set the default value in drop down fields for registration service.

```
LRObject.$hooks.call('defaultChoiceOption',{
form-field-id: "<Key of Default value that you want to select>"
}
);
```

**Example:**

```
LRObject.$hooks.call('defaultChoiceOption',{
gender: "M"
}
);
```

Note: For country field, Please add the key and value with the pipe separator.

**Example:**

```
// Here "in" is key and "India" is value.
LRObject.$hooks.call('defaultChoiceOption',{
country:"in|India"
}
);
```

## Before Form Render Hook
This hook is used to perform an action before form renders, e.g. show loading, hide some section, etc. 

This hook also supports two parameters, name and schema, when used, the 'name' parameter passes the form's name while the 'schema' parameter will pass the LoginRadius generated form's schema.

The 'schema' parameter can be useful as it allows you to make changes or completely replace the schema before the form renders.

Schema output sample:

```
[{Checked : true, DataSource : null, Parent : "", ParentDataSource : null, display : "Email", name : "emailid", options : null, permission : "w", rules : "required", type : "string"},
{Checked : true, DataSource : null, Parent : "", ParentDataSource : null, display : "Password", name : "Password", options : null, permission : "w", rules : "required", type : "string"},
{Checked : true, DataSource : null, Parent : "", ParentDataSource : null, display : "Confirm Password", name : "confirmpassword", options : null, permission : "w", rules : "required|min_length[6]|max_length[32]|matches[password]", type : "password"},
3 : {type: "html", name: "termsandcondition", html: ""}]
```

Calling the beforeFormRender hook:

```
LRObject.$hooks.register('beforeFormRender', function (name, schema) {
//Add code you would like to execute before form renders here.
});
```

## After Form Render Hook
This hook is used to perform an action after a form renders. For example, login, registration, etc.

```
LRObject.$hooks.register('afterFormRender', function (name, schema) {
//Add code you would like to execute after the form has finished rendering.
});
```

## After Form Validation Hook
This hook is used to perform an action after a validation error is triggered. For example validation error on forms like login, registration, etc.

```
LRObject.$hooks.register('afterValidation', function (name) {
//Code to run after a user tries to submit an invalid form.
});
```

## Process Start Hook
The hook adds behaviors when the form is being rendered. Use cases can be like **show loading animation image**, **customize the form element**, etc.

```
LRObject.$hooks.register('startProcess',function (name) {
console.log("Start " + name +  " Process");
}
);
```

## Process End Hook
The hook adds behaviors when the form is being submitted. Use cases can be like **show loading animation image**, **customize the form element**, etc.

```
LRObject.$hooks.register('endProcess',function (name) {
console.log("End " + name + " Process");
}
);
```

## Customize Button Name
This hook provides you with ​a quick and easy way to customize the button name of your form.

```
// "action-name": "New button name"
LRObject.$hooks.call('setButtonsName',{
login : "Login",
registration:'Register'
});
```

The following code can be used to Customize the button for 2FA using email authenticator: 

```
LRObject.$hooks.register('beforeFormRender', function (name, _schema) {
if(name === 'twofaemailotp'){
LRObject.$hooks.call('setButtonsName',{
'twofaemailotp' : "Verify Email OTP ",
'resendotp':'Resend VErification code to Email',
});
}
});

LRObject.$hooks.call('setButtonsName',{
emailotp : "Send Email to ",
"sendotp":"Send SMS to Phone",
registration:'Register'
});
```
The following code can be used to customize the button for MFA via security questions:

```
To change button name:
LRObject.$hooks.call('setButtonsName',{"emailotp" : "Send Email to ","otpauthenticator":"Send SMS to Phone", "securityquestionsauthenticator":"Enter Security Questions", "googleauthenticator":"Set Google Authenticator app"});

For Label Change:
LRObject.$hooks.call('customizeFormLabel',{
"otp":"Get verification code at %value"

//%value is used to replace the phone and email when clicking on Verify Identity via SMS/Email.
});
```
## Raw Registration Schema
In some cases, it is needed that you want to compare the customer's profile with the schema you defined in the LoginRadius Admin Console. 

You can call this function to retrieve the raw schema you have defined in your LoginRadius Admin Console as the first parameter, and when customer login from Social Id provider, then you will get userprofile as the second parameter in following code:

```
LRObject.$hooks.register('registrationSchemaFilter',registrationSchema);
function registrationSchema(regSchema, userProfile) {
// console.log( regSchema );
// console.log( userprofile );
}
```
Below is the detailed table of the keys and their use in form created by LR 
Field Key in the LR form

| Field Key in the LR form  |  Field Name  |
|----------------------------------|-------------------|
|firstname|First Name|
|lastname|Last Name|
|confirmpassword|Confirm Password|
|prefix|Prefix|
|suffix|Suffix|
|birthdate|Date of Birth|
|country|Country|
|state|State|
|city|City|
|isemailsubscribed|Email Subscription|
|company|Company|
|nickname|Nick Name|
|MiddleName|Middle Name|
|thumbnailimageurl|Thumbnail Image Url|
|imageurl|Image Url|
|hometown|Home Town|
|industry|Industry|
|about|About|
|timezone|Time Zone|
|mainAddress|Main Address|
|localCity|Local City|
|localCountry|Local Country|
|profileCountry|Profile Country|
|relationshipStatus|Relationship Status|
|religion|Religion|
|political|Political|
|phoneid|Phone ID
|username|User Name|
|pin|PIN|
|confirmpin|Confirm PIN|
|password|Password|
|emailid|Email Id|

In addition to this, any custom field added into form would be named with **cf_** prefix in LR form.

**For example:** If you have created a custom field with the name **Language**, then the corresponding key name in LR form would be **cf_Language**.


## Captcha Configuration Hooks
If you need to insert your captcha in a specific div and pass it in a call back function, you can use the following hook. Here **container** is the id of the div.

Example:

```
//the key parameter is used to return the captcha's response.
var captchaHandleCallback=function captchaHandle(key){
console.log(key)
}

LRObject.$hooks.call('addFormCaptcha', container, captchaHandleCallback);
```

>**Note:** If you're using Google's Invisible reCAPTCHA or Tencent Captcha then add following code as well:
>
>```
>window.captchaHandle = captchaHandle;
>```
> 
>When using Google's Invisible reCAPTCHA or Tencent Captcha you also have to excute the captcha, this can be achieved with the following hook:
>
>```
>LRObject.$hooks.call('addFormCaptchaExecute', container);
>```
>


## Social Login Render Hook
If a customer is using social login, then there are chances that the social provider doesn’t give the required field that is needed while implementing registration. So you can implement this function to trigger on events like after the registration form renders. We can hide the social login interface when the missing required fields form renders.

Use cases can be like **hide the social login interface when the missing required fields form renders.**

```
LRObject.$hooks.register('socialLoginFormRender',function(){
//on social login form render
});
```

## Custom Error Message Hook
This hook allows you to write custom error messages and descriptions based on the error code generated by LoginRadius.

Single:

```
LRObject.$hooks.call('mapErrorMessages',{
code: 967,
message: "email id is not valid formatted",
description: "email id is not valid formatted"
});
```

Multiple:

```
LRObject.$hooks.call('mapErrorMessages',[{
code: 967,
message: "email id is not valid formatted",
description: "email id is not valid formatted"
}, {
code: 966,
message: "Username password are wrong",
description: "Username password are wrong, please enter correct combination of username password"
}]
);
```

## Custom Validation Message Hook
This hook allows writing custom validation message by rules generated from LoginRadius.
%s will be replaced by field name

Single:

```
LRObject.$hooks.call('mapValidationMessages',{
rule: "required",
message: "The %s field is required."
});
LRObject.$hooks.call('mapValidationMessages',{
rule: "valid_email",
message: "The %s field must contain a valid email address."
});
```

Multiple:

```
LRObject.$hooks.call('mapValidationMessages',[{
rule: "required",
message: "The %s field is required."
}, {
rule: "valid_email",
message: "The %s field must contain a valid email address."
}]);
```

You can also target specific fields and map custom validation messages for each field. Do this by overriding the rule with `#<fieldname>` as shown below:

```
LRObject.$hooks.call('mapValidationMessages',[{
rule: "required#emailid",
message: "The %s field is required field."
}, {
rule: "required#password",
message: "The %s field is required property."
},{
rule: "required",
message: "The %s field is required."
}]
);
```

## Custom Validation Hook

This hook allows you to add validations to your form fields. Example of single and multiple validation hooks are given as below:

Single:

```
LRObject.$hooks.call('formValidationRules',{
"emailid" : "required|alpha"
});
```

Multiple:

```
LRObject.$hooks.call('formValidationRules',{
"emailid" : "required|alpha",
"name" : "required"
});
```

You can define **rules** for each field, and the supported rules are as following:


**valid_email**:
```
/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

**valid_phoneno:**
```
/^(\\+)|(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
```

**alpha:**

```
regex
/^[a-z]+$/i
```
**alpha_dash:**
```
regex
/^[a-z0-9_\-]+$/i
```


**alpha_numeric_dash_combo:**

```
/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-])[A-Za-z\d][A-Za-z\d-]+$/i
```

**alpha_numeric:**
```
regex
/^[a-z0-9]+$/i
```
**alphanumeric_combo:**

```
/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
```
**exact_length:**

No regex usage: `exact_length[integer]`

**greater_than:**	

No regex usage: `greater_than[integer]`

**less_than:**		

No regex usage: `less_than[integer]`

**matches:**

No regex usage: `matches[parameter-name]`


**max_length:**		

No regex usage: `max_length[integer]`


**min_length:**		

No regex usage: `min_length[integer]`



**decimal:**

```regex
/^\-?[0-9]*\.?[0-9]+$/
```


**integer:**

```regex
/^\-?[0-9]+$/
```

**is_natural:**

```regex
/^[0-9]+$/i
```


**is_natural_no_zero:**

```regex
/^[1-9][0-9]*$/i
```

**numeric:**
```
regex
/^[0-9]+$/
```

**required: No regex**

**valid_base64:**
```

/[^a-zA-Z0-9\/\+=]/i
```
**valid_credit_card:**

```
/^[\d\-\s]+$/
```

**valid_ip:**

```
/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i
```
**valid_ca_zip:**

```regex
/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/
```

**valid_url:**	

```
/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
```

**custom_validation:**

```
Can be used to implement your custom regex for any field. ### is the separator for the regex and custom message. Usage: custom_validation[regEx###Custom-Message]
```

**callback_valid_date:**
```

/^(0?[1-9]|1[012])[\/\-] (0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
```



Some **example validation hooks** are given as following:


```
LRObject.$hooks.call('formValidationRules',{
"emailid" : "required|valid_email",
"name" : "required|max_length[32]|min_length[3]"
});

/* ----------------------------------------------------- */

LRObject.$hooks.call('formValidationRules',{
"emailid" : "required|valid_email",
"name" : "required|alpha_dash",
"phone" : "required|exact_length[10]"
});


/* ----------------------------------------------------- */

LRObject.$hooks.call('formValidationRules',{
"emailid" : "required|valid_email",
"password" : "required",
"confirmpassword" : "matches[password]",
"phone" : "required|exact_length[10]"
});


/* ----------------------------------------------------- */

LRObject.$hooks.call('formValidationRules',{
"emailid" : "required|valid_email",
"zipcode" : "custom_validation[^\\d{5}(-\\d{4})?$###Invalid zipCode format. US format zip code formats (e.g., '94105-0011' or '94105')]"
});
```



NOTE :

- If you are implementing the regex via JS, you need to ensure that any backslash `\` in your regex should be escaped with another backslash like `\\`. But in the case you are implementing the regex having a backslash `\` in Admin Console, then it should be used with a single backslash `\`.

    For example: `custom_validation[^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{6,20}$###Custom Error]`
    
    Becomes: `custom_validation[^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{6,20}$###Custom Error]`

    (When used in Admin Console)

    Becomes: `custom_validation[^(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[a-z\\d@$!%*?&]{6,20}$###Custom Error]`

    (When used in JS)

- Pipe Character: The Pipe "|" Character can be represented with the use of "or"

    For Example: `custom_validation[^[1-3]+$|^[5-9]+$###pass digit only 1-3 or 5-9]`

    Becomes: `custom_validation[^[1-3]+$or^[5-9]+$###pass digit only 1-3 or 5-9]`

> **Note:** While using `" or \` in the password field on IDX, our JavaScript will automatically escape them in the payload. So, while trying this from API, the password should be as `password: "Reset\"1"` otherwise it will give you an error as `“Fill body parameter correctly“`.

- If you are leverage custom_validation rule, please remove a forward slash 

    For example 
    
    - `custom_validation[/^(?=.[a-zA-Z])(?=.[0-9])(?=.*[-])[A-Za-z0-9][A-Za-z0-9-]+$/i### Add comment here]`

    Becomes:  
    -    `custom_validation[^(?=.[a-zA-Z])(?=.[0-9])(?=.*[-])[A-Za-z0-9][A-Za-z0-9-]+$### Add comment here]`

- If you have Server Side validation enabled in your app. The custom_validation rule requires a comment at the end of your regex.

    For example `custom_validation[^(?=.[a-zA-Z])(?=.[0-9])(?=.*[-])[A-Za-z0-9][A-Za-z0-9-]+$### Add comment here]`


- LoginRadius V2.js leverages the below regex at the client-side by default to make sure the email field type is a valid email.

    `/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`

**Example:** Find below the Password Validation regex for **Admin Console** which includes a **Minimum of 6 and a Maximum of 20 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.**     

`custom_validation[^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\or,.<>/~?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\or,.<>/~?]{6,20}$###Password must contain minimum 6 and maximum 20 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character]|required`

## Custom Attribute Hook
This hook allows us to append custom attributes to LoginRadius form fields. These attributes are HTML attributes that modify an HTML element type.

Single:

```
LRObject.$hooks.call('formAttributes', {
"emailid" : "autocomplete=off"
});
```

Multiple:

Multiple Attributes can be added to the field by separating each attribute by Ampersand (&).

```
LRObject.$hooks.call('formAttributes', {
"Name" : "autocomplete=on&maxlength=10"
});
```

## Event Calls Hook
This hook allows you to perform an action after any form validation has triggered e.g. **login**, **registration** etc. This hook is useful for following cases:

1. Change options once the registration form validation triggered and you want to change the captcha type.

2. Execute code for integrations such as pushing analytics based on action(event) calls.

Hook Format:

```
LRObject.$hooks.register('eventCalls', function(name){
    console.log(name)
    if(name == 'registration'){
    console.log("registration event was triggered");
    }
    else {
    console.log(name);
    }
});
```

## Event On Element Hook
This hook allows you to specify any of the form elements generated by LoginRadiusV2.js and attach them to an event so that you can handle them further.

Hook Format:

```
LRObject.$hooks.call('addEventOnElement',  {
ID-of-Element:{
event:EventName ('change', 'click'),
eventCallback:function(){
console.log('event called');
}
}
});
```

Hook Example for single ID have Single Event:

```
LRObject.$hooks.call('addEventOnElement',  {
'loginradius-login-emailid':{
event:'click',
eventCallback:function(){
console.log('Email click event called');
}
},
'loginradius-login-password':{
event: 'change',
eventCallback:function(){
console.log('Password Onchange event Called');
}
}
});
```

Hook Example for single ID have Multiple Events:

```
LRObject.$hooks.call('addEventOnElement',  {
'loginradius-login-emailid':[{
event:'click',
eventCallback:function(){
console.log('Email click event called');
}
},

{
event:'change',
eventCallback:function(){
console.log('Email change event called');
}
}]
});
```







## Passwordless Login Feature

Enabling Passwordless Login option on your LoginRadius site lets your customers enter their email address and click on the passwordlessLogin button. A verification email gets sent to the customer’s email address and on click of the link included in the verification email, the customer is logged into the account. The customer can also log into​ the account if they forgot their password without using the password reset interface.

Passwordless Login has to be enabled on your LoginRadius site in order to use this feature. You can reach out to the [LoginRadius support team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) if you need more details about it. Both passwordlessLogin and passwordlessLoginOTP options will work with the login events.


**Step 1:** Add the passwordlessLogin parameter in User Registration JS:

```
var commonOptions = {};
commonOptions.apiKey = "<your api key>";
commonOptions.appName = "<your app name>";
commonOptions.passwordlessLogin=true;
```

**Step 2:** Use following hook to change button name

```
LRObject.$hooks.call('setButtonsName',{
passwordlessloginbuttonlabel : "Click Me"
});
```

**Step 3:** Handle passwordlessLoginValidate Event - The following logic can be added to the page where you want to handle the passwordlessLoginValidate event.

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

LRObject.util.ready(function() {
LRObject.init("passwordlessLoginValidate",options);
})
```

## Passwordless OTP Login Feature
Enabling this option on the LoginRadius site lets the customer enter their phone number and click on the instant OTP login button. Now they can enter the OTP which they received on their phone number.


**Step 1:** Add the passwordlessLogin OTP parameter in User Registration JS:

```
var commonOptions = {};
commonOptions.apiKey = "<your api key>";
commonOptions.appName = "<your app name>";
commonOptions.passwordlessLoginOTP =true;
```

**Step 2:** Use the following hook to change button name:

```
LRObject.$hooks.call('setButtonsName',{
passwordlessLoginOTPButtonLabel : "Send OTP"
});
```

**Step 3:** After submitting OTP, you'll get response in login event. No need to handle in other JS code.

```
var options = {};
options.onSuccess = function(response) {
//On Success
console.log(response);

};
options.onError = function(errors) {
//On Errors
console.log(errors);
};
options.container = "login-container";

LRObject.util.ready(function() {
LRObject.init("login",options);
})
```

##Password Strength Feature

Password strength is a measure of the effectiveness of a password in resisting guessing and brute-force attacks. In its usual form, it estimates how many trials an attacker who does not have direct access to the password would need, on average, to guess it correctly. The strength of a password is a function of length, complexity, and unpredictability.
It Includes regular expressions to check if it has:

- At least one uppercase and one lowercase letter
- At least one number
- At least one special character
- And maximum and minimum length derived from your password length.

#### How does it work?

If the password has the right length, it is evaluated as follows:

a) "**Bad**" condition/case met: Weak password, password length equals to the minimum password length.

b) "**Weak**" condition/case met: Weak password, password equals to the minimum password length with the mix of upper and lower characters or Only numbers are included in the password.

c) "**Good**" condition/case met: Medium strength password, password length greater than the minimum password length with the mix of upper and lower characters and a special symbol or if 12 or more numbers are included in the password

d) "**Strong**" condition/case met: Strong password, Password length greater than 6 and includes upper case letter, lower case letter, number and a special character.

e) "**Secure**" condition/case met: Secure password, characteristics of "strong" with password length greater than 12.

#### Steps to Implement:

**Step 1:** Configure the Password strength parameter to User Registration JS:

```
var commonOptions={};
commonOptions.displayPasswordStrength = true;
```

**Step 2:** Hook to customise​ the password strength:

> The hook is not necessary to use Password strength feature, In cases where the hook is not configured the default color​ and message scheme will be used. and In a case of any missed case, the default configuration of password strength feature will be used for the missing case.

**#min_length** can be used to show your minimum length of the password in messages.

```
LRObject.$hooks.call(
'passwordMeterConfiguration', [{
case: "worst", // Case Can not be changed
message: "#min_length length is required",//Your minimum password length message.
color: "Red" // Above message color
}, {
case: "bad", // Case Can not be changed
message: "Bad",
color: "Red"
}, {
case: "weak", // Case Can not be changed
message: "weak",
color: "yellow"
}, {
case: "good", // Case Can not be change
message: "Good",
color: "Green"
}, {
case: "strong", // Case Can not be changed
message: "Strong",
color: "Green"
}, {
case: "secure", // Case Can not be changed
message: "Secure",
color: "Blue"
}]);
```

> **Note:**
> In the above password strength configuration hook, **case** is not the subject to change, only the **message**, and **color scheme** can be changed.

## Common Password Validations

Some common password validations that you can use in your Admin Console and as JavaScript hooks:

**Use case 1**: Password must contain minimum 8 and maximum 32 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.

**Validation String:**

`custom_validation[^(?=.\*[a-z])(?=.\*[A-Z])(?=.\*\d)(?=.\*[@$!%\*?&])[A-Za-z\d@$!%*?&]{8,32}$###Password must contain minimum 8 and maximum 32 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character]`

**Validation Hook:**

```
LRObject.$hooks.call('formValidationRules',{
"Password" : "custom_validation[^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$###Password must contain minimum 8 and maximum 10 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character]”
});
```
> **NOTE**: Here we have included a few symbols [@$!%*?&], however, you must include all possible symbols from which you want to accept at least 1 symbol in the password.


**Use case 2**: Passwords must contain minimum 6 characters, maximum 15 characters, at least 1 numeric and 1 alphabetic character.

**Validation String:**

`custom_validation[^(?=.\*\d)(?=.\*[a-zA-Z]).{6,15}$###Password must contain minimum 6 character, maximum 15 character, at least 1 numeric and 1 alphabetic character]`

**Validation Hook:**

```
LRObject.$hooks.call('formValidationRules',{
"Password" : "custom_validation[^(?=.*\d)(?=.*[a-zA-Z]).{6,15}$###Password must contain minimum 6 character, maximum 15 character, at least 1 numeric and 1 alphabetic character]”
});
```

**Use case 3**: Passwords must contain a minimum of 8 characters, 1 letter, 1 number and 1 special character.

**Validation String:**

`custom_validation[^(?=.\*[A-Za-z])(?=.\*\d)(?=.\*[@$!%\*#?&])[A-Za-z\d@$!%*#?&]{8,}$###Password must contain minimum 8 characters, 1 letter, 1 number and 1 special character]`

**Validation Hook:**

```
LRObject.$hooks.call('formValidationRules',{
"Password" : "custom_validation[^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$###Password must contain minimum 8 characters, 1 letter, 1 number and 1 special character]”
});
```

**Use case 4**: Passwords must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and no whitespace.

**Validation String:**

`custom_validation[^(?=.\*[a-z])(?=.\*[A-Z])(?=.\*[0-9])(?=.\*[`~!@#$%^&+=])[^\s]*$###Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and no whitespace]`


**Validation Hook:**

```
LRObject.$hooks.call('formValidationRules',{
"Password":"custom_validation[^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[`~!@#$%^&+=])[^\s]*$###Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and no whitespace]”
});
```
> **NOTE**: If you don’t want any whitespaces in your password, you can use [^\s] as in above validation.

## Language Customizations

This hook provides you a way to display the labels, placeholders, validation messages and error messages for forms in your local language.

Below is a sample implementation based on French language. This is meant to be a template that you can modify to use with your desired language and is not restricted to any language.


Include your language file in a script tag on your web page.

```
<script src= "js/french.js"></script>
```

#### Sample French
Below is a sample locale file called "french.js".

It contains key-value pairs for labels, placeholders, validationMessages etc. keys are properties and values are objects/array of objects in your local language.

```
var french = {
"labels": { "emailid":  "Addresse e-mail",   "password":  "Mot de passe"  },
"placeholders": { "emailid":  "Entrez votre e-mail",   "password":  "Entrez votre mot de passe" },
"validationMessages": [
{   "rule":  "required",   "message":  "Le champ %s est requis."  },
{   "rule":  "valid_email",   "message":  "Le champ %s doit contenir une adresse e-mail valide."  }
],
"errorMessages": [
{   "code": 966,   "message":  "La combinaison de votre nom d'utilisateur et mot de passe est invalide",   "description":  "La combinaison pour votre nom d'utilisateur et mot de passe est invalide"  },
{   "code": 967,   "message":  "Le format du e-mail est invalide",   "description":  "Le format du courriel est invalide"  },
{   "code": 901,   "message":  "La clé de l'API n'est pas valide",   "description":  "La clé pour l'API LoginRadius fournis est invalide ou n'est pas autoriser, veuillez utiliser une clé d'API LoginRadius valide ou verifiez la clé d'API pour votre compte LoginRadius."  }
],
"passwordMeterConfiguration": [
{ case: "worst", message: "#min_length Longueur requise", color: "Red"},
{case: "bad",message: "Mal",color: "Red"},
{case: "weak", message: "faible",color: "yellow"},
{case: "good",message: "Bien",color: "Green"},
{case: "strong",message: "Strong",color: "Green"},
{case: "secure",message: "Secure",color: "Blue"}
],
"buttonsName":{
"login": "connexion",
"registration":"d'enregistrement"
}
}

```


#### Hook

Then call this hook with the name of your locale object as a parameter before LRObject.init.

```
LRObject.$hooks.call('setLocaleBasedInfo',french);
```

Now include code for your form(for eg: login form) in the script tag of your web page as per the documentation [here](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/).


