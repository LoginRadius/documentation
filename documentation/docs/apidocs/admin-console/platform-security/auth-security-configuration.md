# Auth Security

Configure your Auth Security settings within the **Platform Security → Account Protection → Auth Security** page.

## CAPTCHA Setting

CAPTCHA Setting makes use of either Google reCAPTCHA, Tencent's Captcha or hCaptcha service.

![recaptcha](https://apidocs.lrcontent.com/images/recaptcha_1801426989647f37dbbe5937.86151874.png "recaptcha")

Please see our [Google reCAPTCHA Configuration](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/captcha-providers/google-recaptcha-configuration) or [Tencent Captcha Configuration](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/captcha-providers/tencent-captcha-configuration) documentation for details.

## Access Restrictions

Access Restrictions can be used to block registration from spam or disposable emails and allows you to control which users can access your app based on their email addresses.

![](https://apidocs.lrcontent.com/images/ac25_40135e9340b1329352.64865231.png "Access Restrictions")

1. Within the **Access Restriction** section, select the **Restriction Type** to either Whitelist or Blacklist a set of email addresses or domains. Whitelisting allows only those users matching your configuration criteria to access your app. Blacklisting prevents users matching your configuration criteria from accessing your app.

2. Add the email addresses, e.g. `jon@otherdomain.com`, or domains, e.g. `somedomain.com`, under **Configuration** to define the criteria for your whitelist or blacklist. Click Save to save your settings.

## Brute Force Lockout

Brute Force Lockout allows you to restrict account access based on the number of failed login  OR reset password by token/OTP attempts. It means if a consumer enters incorrect credentials ( username and password) in the Login API OR enteres the incorrect token/ OTP multiple times in Reset password by token/OTP API,  and reaches the threshold limit set in the Admin Console, Brute Force Lockout action will be triggered for further API calls. 


![](https://apidocs.lrcontent.com/images/ac26_144965e9340c63e5436.74935901.png "Brute Force Lockout")


1. Set the desired maximum number of failed login attempts for login  and reset password by token/OTP in the **Brute Force Lockout Threshold** field.

2. Once the threshold is reached, define the **Lockout Type** to be triggered as a result.

3. On the user's profile a field named `IsLoginLocked` will be set to `true`, an additional field named `LoginLockedType` will be used to store the type of lockout that has occured. The Lockout Types are summarized in the table below.

| **Lockout Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                       | **Requirements**                                                                                                                                                                                                                   | **API Response**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Suspend          | Prevent the user from logging in for a specified amount of time. Set the suspension time in the **Suspend Effective Period** field.                                                                                                                                                                                                                                           | Lockout Type "Suspend" must be configured in the Admin Console. Note: Upon suspension, user profile field `IsLoginLocked` will be updated to `true`, however the `LoginLockedType` will remain unchanged.                           | ``` { "Description":"Your account has been locked, please try again after sometime.", "ErrorCode":1198, "Message":"Your account has been locked", "IsProviderError":false, "ProviderErrorResponse":null, "Data":{"LoginLockedTimeout":"2018-10-11T21:40:44.875Z"} } ```                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Captcha          | Prompt the user to complete a [Captcha](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/auth-security-configuration#captchasetting0) in order to login. If attempting to login via API, you can pass the reCAPTCHA response via the 'g-recaptcha-response' body parameter (if using reCAPTCHA V2) or if you're using QQ you must provide the `qq_captcha_ticket` and the `qq_captcha_ticket`. | You must have [Google reCAPTCHA V2](https://www.loginradius.com/docs/platform-features-overview/user-security/registration-security#recaptcha-settings) or [Tencent Captcha](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/captcha-providers/tencent-captcha-configuration) configured in your LoginRadius Admin Console. | ``` { "Description": "Your account has been locked, please enter reCAPTCHA in order to login.", "ErrorCode": 1132, "Message": "Your account has been locked, please enter reCAPTCHA in order to login", "IsProviderError": false, "ProviderErrorResponse": null } ```                                                                                                                                                                                                                                                                                                                                                                                |
| SecurityQuestion | Prompt the user to answer a [Security Question](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/password-policy#securityquestion3) in order to login. If attempting to login via API, you can pass the user's answer via the 'securityanswer' body parameter.                                                                                          | You must have at least one Security Question configured in your Admin Console, and the user being prompted to answer the question must have already provided a valid answer.                                                        | ``` { "Description": "Your account has been locked, please enter the answer to the security question in order to login.", "ErrorCode": 1148, "Message": "Your account has been locked", "IsProviderError": false, "ProviderErrorResponse": null } ```                                                                                                                                                                                                                                                                                                                                                                                              |
| Block            | Prevent the user from logging in until unblocked by your admin team. Blocked users can be managed within the [Profile Management](https://www.loginradius.com/docs/customer-management/profile-view/) tab. Users may also be unblocked via the [Account Update API](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update/) by setting `"isActive":true"` in the request body.          | Lockout Type "Block" must be selected in the Admin Console.                                                                                                                                                                       | ``` { "Description": "Your account has been blocked by the system admin, please contact the admin for more information.", "ErrorCode": 991, "Message": "Your account is blocked", "IsProviderError": false, "ProviderErrorResponse": null } ```                                                                                                                                                                                                                                                                                                                                                                                                    |


> **Note:** If a user did not reach the Brute Force Lockout Threshold, and logs in successfully the API's counter for the failed login attempts will be reset to zero automatically.

Additionally, if you wish to unlock an account regardless of if they've passed the given challenges, you can use the [Account Update API](https://www.loginradius.com/docs/api/v2/user-registration/account-update) to unlock the locked account.

This is done by updating the `"IsLoginLocked"` field on the user's profile to unblock the account.

`"IsLoginLocked": false`

You can also leverage the [Auth Unlock Account by Access Token API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlock-account-by-access-token), this API allows a user to unlock the locked account with a valid access_token.

## Disable Login

This feature works with the [Account Update API](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update). By using this feature you can disable traditional login for a particular user.

> **Note:** This will only disable traditional login and will not block or delete the user's profile.


To use disable login, you need to include one extra field in your JSON: `{ "DisableLogin" : true }`.

> **NOTE:** Please contact [ LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket)
 to enable this feature on your app.
