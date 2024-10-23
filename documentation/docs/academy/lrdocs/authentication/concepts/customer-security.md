# Customer Security Introduction

Customer Security is an essential part of Customer Experience. LoginRadius emphasis on customer security to prevent harmful and malicious activities and ensures that the customer profiles and data are protected from fraudulent activity.

The following aspects of customer security are available in the LoginRadius Identity Platform:

- [CAPTCHA](#partcaptcha0): It is a technique, which distinguishes between humans and bots. CAPTCHA is mainly used as a security check to ensure only humans can pass through. Generally, bots are not capable of solving a captcha.

- [Access Restriction](#partaccessrestriction1): This feature allows you to restrict or permit only specific users for registration. You can apply it by either blacklisting or whitelisting users with the specific domain(s) and email(s) to create accounts on your application.

- [Brute Force Lockout](#ppartbruteforcelockout3): This feature allows you to set the number of maximum failed login attempts allowed for the customers until the application triggers a security action. The following predefined list security actions from which you can choose one:

  - Suspend customer’s account for a defined period

  - Populate security questions

  - Populate CAPTCHA

  - Block consumer’s account

- [Force Logout](#partforcelogout6): If enabled, upon Password Reset or Password Change, it will expire all active sessions of a customer except the session in which the password has been reset/changed.

> **Note:** The **Account APIs** utilize the API secret and have **management capabilities**. These are usually leveraged for backend processes; hence, they do not comply with the security settings in the Admin Console. For example, Even if you have set restrictions on certain domains under the [Platform Security > Account Protection > Auth Security > Access Restriction](https://adminconsole.loginradius.com/platform-security/account-protection/auth-security/access-restriction) section, you can still create an account with those blacklisted domains using the Account Create API.

For more security aspects supported by LoginRadius Identity Platform, you can refer to the [Session Management](/authentication/concepts/session-management/) and [Password Policy](/authentication/concepts/password-policy) documents.

> **Pre-requisites**: Basic knowledge of HTML and JavaScript.

## Part 1 - CAPTCHA

LoginRadius Identity Platform provides you the feature to add another layer of security to your registration form by configuring CAPTCHA, which ensures that the person registering is not a bot.

As a part of your Login and Registration flows, LoginRadius CAPTCHA settings allow you to enable the following:

- **Google reCAPTCHA**: reCAPTCHA is a service from Google that protects web applications from spam and abuse. It is easy for humans to solve, but hard for “bots” and other malicious software to figure out.

  Currently, LoginRadius supports Invisible reCAPTCHA that provides a better experience to the customers by tracking mouse movements to identify if a human is interacting with the application or is it a bot. If identified as a bot, it displays the CAPTCHA option on the screen.

  For more information regarding the configuring of Invisible reCAPTCHA, refer to the documentation [here](https://api/v2/admin-console/platform-security/captcha-providers/google-recaptcha-configuration/).

- **QQ Tencent CAPTCHA**: Tencent CAPTCHA is a popular China-based CAPTCHA service. It prevents bot registration and protects web applications from spam and abuse.

  For more information regarding the configuring of QQ Tencent CAPTCHA, refer to the documentation [here](https://api/v2/admin-console/platform-security/captcha-providers/tencent-captcha-configuration/).

## Part 2 - Access Restriction

The **Access Restriction** feature can be used to block registration from spam or disposable emails and allows you to control access or registration to your LoginRadius Identity Platform by configuring the whitelist or blacklist settings.

- **Whitelist Settings** can be used to allow access to specific email addresses and domains that are added to the whitelist.

- **Blacklist Settings** can be used to prevent access to specific email addresses and domains that are added to the blacklist.

### Access Restriction Configuration

This section covers the required configurations that you need to perform to implement the Access Restriction functionality.

**Step 1:** Log in to your  [**Admin Console**](https://adminconsole.loginradius.com/)  account, navigate to  [**Admin Console**](https://adminconsole.loginradius.com/)  and select the **Access Registration** option from the left navigation panel.

The following screen will appear:

![access restriction](https:/https://apidocs.lrcontent.com/images/step1_256895e84ee5b529180.65271140.png "access restriction")

**Step 2:** Select the **Restriction Type** to Whitelist or Blacklist the email address(s) or domain(s) as per your business requirements:

To **Whitelist** the email address or domains, select the **Whitelist** option, and add the email address(s) or domain(s) under the **Configuration** section as highlighted in the following screen:

![whitelist](https:/https://apidocs.lrcontent.com/images/step2_112035e84ee811d4302.59086305.png "whitelist")

Click the **Save** button to save your settings.

For example, To allow only your company users to register on your application, you can whitelist your company’s domain in this section.

OR

To **Blacklist** the email address(s) or domain(s), select the **Blacklist** option, and add the email address(s) or domain(s) under the **Configuration** section, as highlighted in the following screen:

![blacklist](https:/https://apidocs.lrcontent.com/images/step3_293795e84eea77a4dc1.77684608.png "blacklist")

Click the **Save** button to save your settings.

For example, To only allow the professional users to register on your application, you can blacklist domains of generic email services like Google, Yahoo, and more.

> **Note:** Once configured, the **Access Restriction** will reflect on your IDX or JavaScript implementation i.e., no separate deployment is required for this feature.

## Part 3 - Brute Force Lockout

The **Brute Force Lockout** feature allows you to restrict account access based on failed login attempts. Once the limit of failed login attempts is reached, the customer will either get blocked or prompted to complete an additional security step to log in.

### Brute Force Lockout Configuration

This section covers the required configurations that you need to perform in the LoginRadius Identity Platform to implement the Brute Force Lockout functionality.

**Step 1:** Log in to your  [**Admin Console**](https://adminconsole.loginradius.com/)  account, navigate to  [**Admin Console**](https://adminconsole.loginradius.com/)  and select the **Brute Force Lockout** option from the left navigation panel.

The following screen will appear:

![brute force](https:/https://apidocs.lrcontent.com/images/step1_250415e84f09bcdb7c1.70809096.png "brute force")

**Step 2:** Set the maximum number of allowed failed login attempts in the **Brute Force Lockout Threshold** field. If the customer reaches this threshold value, their account will be locked out.

After configuring these settings, the customer will receive an error message upon a failed login attempt, indicating the remaining attempts.

![threshold](https:/https://apidocs.lrcontent.com/images/step2_280565e84f0e024a4e9.26833710.png "threshold")

**Step 3:** Select the **Lockout Type** you wish to trigger when the threshold limit is reached. The following screen displays the available lockout type options:

![lockout type](https:/https://apidocs.lrcontent.com/images/step3_115845e84f1018f08c6.66335986.png "lockout type")

The LoginRadius Identity Platform supports the following four lockout types:

- **Suspend:** Select this option to prevent the customer from logging in for a specified amount of time mentioned in **Suspend Effective Period**, once the account is locked.

> **Suspend Effective Period** is the Effective period for which the account is suspended. Default Suspend Effective Period is 900 seconds.

- **Captcha:** Select this option to prompt the customer to complete a [Captcha](#partcaptcha0) to log in, if the account is locked.

> **Pre-requisites:** You must have [Google reCAPTCHA V2](#googlerecaptchaconfiguration2) or [Tencent Captcha](#tencentcaptchaconfiguration3) configured in your LoginRadius Identity Platform.

- **Security Question:** Select this option to prompt the customer to answer a [Security Question](https://api/v2/admin-console/platform-security/security-question/) to log in, if the account is locked.

> **Pre-requisites:** At least one Security Question must be configured in your account, and the customer who is being prompted to answer the question must have already provided a valid answer.

To handle this further, you can implement the logic in your application, for the scenario, where the security question is answered wrong by the customer.

- **Block:** Select this option to block the customer, on reaching the failed login attempt threshold. It will prevent the customer from logging in until unblocked by your admin team. Blocked customers can be managed from the [Profile Management](/authentication/concepts/customer-management/#partblockedcustomers1) tab.

> **Note:** If a customer did not reach the **Brute Force Lockout Threshold** and logged in successfully, the API's counter for the failed login attempts will be reset to zero automatically.

You can get the locked customer profile by calling [Account Profiles by Email API](https://api/v2/customer-identity-api/account/account-profiles-by-email/).
In the response, you will get a field named **IsLoginLocked** with the value set as **true** and **LoginLockedType** with the LockoutType value.

### Unlocking Account

Please refer the following ways to unlock your locked account regardless of if you've passed the given challenges:

1. **Admin Console:** You can unblock the account directly via the Admin Console. Please refer to our Customer management [document](/docs/customer-management/overview/)for more details regarding the same.

2. **Account update API:** You can leverage our [Account Update API](https://api/v2/customer-identity-api/account/account-update/) to unlock the locked account.
     **Case 1:** For Lockout type: Suspend, Recaptcha, and Security Question
     Update the **"IsLoginLocked"** field on the user's profile by [Account Update API](https://api/v2/customer-identity-api/account/account-update/) to unblock the account. For example,

```
{
"IsLoginLocked": false
}
```

    **Case 2:** For Lockout Type: Block
  Update the **“IsActive”** and **"IsLoginLocked"** field together on the user's profile by [Account Update API](https://api/v2/customer-identity-api/account/account-update/) to unblock the account. For example,

```
{
"IsLoginLocked" : false,
"IsActive" : true
}
```

- **Auth Unlock Account By Access Token API:** You can also leverage our [Auth Unlock Account by Access Token API](https://api/v2/customer-identity-api/authentication/auth-unlock-account-by-access-token) with a valid access_token, please note that this API is applicable for the Recaptcha, and Security Question Lockout Types.

> **Note:**

- You can leverage our [Account impersonation API](https://api/v2/customer-identity-api/account/account-impersonation-api/) in order to get a valid Access Token.
- Once configured, no separate deployment is required to access this feature in the IDX or JS implementation of the LoginRadius Identity Platform

## Part 4 - Force Logout

Enabling **Force Logout** allows you to expire all active sessions of a customer on Password Reset or Change, except the session in which the password has been reset/changed.

### Force Logout Configuration

This section covers the required configurations that you need to perform to implement the Force Logout functionality.

**Step 1:** Log in to your  [**Admin Console**](https://adminconsole.loginradius.com/)  account, navigate to  [**Admin Console**](https://adminconsole.loginradius.com/) > and select **Force Logout** option from the left navigation panel.

The following screen will appear:

![force logout](https:/https://apidocs.lrcontent.com/images/step1_284125e84f3fd301b29.34232201.png "force logout")

**Step 2:** Select the **Force Logout** checkbox to enable this feature, as highlighted in the following screen:

![enable force logout](https:/https://apidocs.lrcontent.com/images/step2_272945e84f42261e025.43886242.png "enable force logout")

> **Note:** Once configured, no separate deployment is required to access this feature in the IDX or JS implementation of the LoginRadius Identity Platform

## Part 5 - Next Steps

The following is the list of features you might want to add-on to the above implementation:

[Session Management](/authentication/concepts/session-management/)

[Password Policy](/authentication/concepts/password-policy/)
