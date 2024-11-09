# Drupal v7.x Customer Identity and Access Management Module Instructions

---

## Overview

LoginRadius Customer Identity and Access Management Plugin simplifies and secures your user registration process, increases user conversion with Social Login that combines 40+ major social platforms and offers a full solution with Traditional Customer Registration. Also, you can gather a wealth of customer profile data from Social Login and Traditional Customer Registration, have a centralized view of entire customer data and manage it easily. Thus, it helps you to boost customer engagement, manage online identities, capture accurate customer data and get unique social insights into your customer base.

LoginRadius CIAM Drupal module replaces default authentication inside the Drupal with the LoginRadius JS interfaces. It 
consists of three submodules as following:

 - **CIAM:** This is the base module that enables LoginRadius functionality into the Drupal application.
 - **Idx:** By Enabling this module, you can leverage the LoginRadius IDX page for Registration, Forgot Password, and Login functions. 
 - **SSO**: Enable and configure this module for setting up WEB SSO between your Drupal and LoginRadius applications.


## Instructions

Some of the functionalities in this doc require additional add-ons, If you need assistance contact [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

> **Note:** If you are already using any previous version of Social Login, follow the Uninstallation section to uninstall the module first.    Enabling both the versions together i.e. V1 and V2 of Drupal v7.x plugins may cause conflicts. Kindly disable one of them for smoother operations.

## Installation

### Installing manually

1. [Download](https://github.com/LoginRadius/drupal-identity-module/blob/master/drupal-7/package/ciam_loginradius.zip) the Customer Identity module.

2. Unarchive the module and upload the module folder to your Drupal installation's sites/all/modules directory.

3. Login to the Drupal admin panel.

4. Click on the **Modules** tab and you'll see the **LoginRadius** module in modules list in your site's admin account.

5. Enable the Customer Identity Modules and click on **Save Configuration**.

### Installing via the web interface

1. Log in to your Drupal admin panel.
2. Click on the **Modules** tab and then, click Install new module.
     ![enter image description here](https://apidocs.lrcontent.com/images/Picture1_17295aba018c74fa97.51870266.png "install module")
3. Browse for the ciam_loginradius zip file and install the module.
4. After a successful installation, you'll see the CIAM modules on the list. Enable the modules that you want.
     ![enter image description here](https://apidocs.lrcontent.com/images/modules_60305e706bf434b268.55010546.png "enter image title here")

## Upgrading Existing Module

1. Login to In Drupal Admin Panel and go to Reports> Available updates.
2. Check the **LoginRadius Customer Identity and Access Management** under the Modules list.
3. Now, click on the **Download these Updates** button at the bottom.

## Configuration and Activation

> **Note:** The complete functionality of this module requires your LoginRadius API Key and Secret. Find further documentation on how you can obtain this data here:

- [Activation](#activation)
- [Authentication](#authentication)
- [Advanced Settings](#advanced-settings)
- [Single Sign-On](#single-sign-on)
- [Identity Experience Framework](#identity-experience-framework)

## Configuration

To configure the module, click on the **Configuration** tab in the top menu, click on **Loginradius** under **People** section.
  ![enter image description here](https://apidocs.lrcontent.com/images/cofiguedp7_212165e705c6a4ac333.93654268.png "enter image title here")

##  Activation

1. Insert LoginRadius API Key and API Secret under **LoginRadius API Configurations** section that you get from your LoginRadius [Admin Console](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret)

2. Click **Save configuration**.
     ![enter image description here](https://apidocs.lrcontent.com/images/activ_308105e71f37e84f961.04459513.png "enter image title here")

## Authentication

### Redirection Settings After Login
   **1. Redirect to the same page:**
 The customer will be redirected to the same page after login where the customer was before login.
    ![enter image description here](https://apidocs.lrcontent.com/images/redirectsame_140935e7060354d2b47.63363990.png "enter image title here")
    **2. Redirect to the profile page:**
 The customer will be redirected to the profile page after login.
    ![enter image description here](https://apidocs.lrcontent.com/images/redirectpro_252625e706090b50b08.38338690.png "enter image title here")
    **3. Redirect to a custom page**
 The customer will be redirected to the custom page  after login as per the URL.
    ![enter image description here](https://apidocs.lrcontent.com/images/redirectcustom_13775e7060dbdde734.81862542.png "enter image title here")


### Email Authentication Settings
   - Admin can configure Email Authentication setting by 4 methods :
    ![enter image description here](https://apidocs.lrcontent.com/images/emailauth_325695e70613d155c10.26513266.png "enter image title here")
    1. Enable prompt password on Social Login.
    2. Enable login with username.
    3. Ask for an email from an unverified customer.
    4. Ask for the required field on Traditional Login.

   > **Note:** Email templates can be added/Modified in "Admin Console" which will be displayed in the drupal admin authentication page.

    ![enter image description here](https://apidocs.lrcontent.com/images/emailtemp_132605e7061888d0566.18213318.png "enter image title here")

### Phone Authentication Settings
  Phone Authentication will be displayed in the admin authentication tab only if Phone Workflow is enabled in your app.
> **Note:** If only the Phone Id Login option is enabled for the App, a random Email Id will be generated if a customer registered using the PhoneID. Format of random email id is: "randomid+timestamp@yourdomain.com"

>  If only the Phone Id Login option is enabled for the App,  and customer registers only with Phone ID (without Email, Username, first name, Last name) then Phone ID will be displayed as a username.

 ![enter image description here](https://apidocs.lrcontent.com/images/phoneauth_61265e7061eacb23c9.58224366.png "enter image title here")

* SMS templates can be added/Modified in "Admin Console" which will be displayed in the drupal admin authentication page.
    ![enter image description here](https://apidocs.lrcontent.com/images/phonetemp_280075e7062a75c4c18.61129934.png "enter image title here")

### Field Mapping
  To enable User Fields mapping to Profile Data follow below steps:
   1. Login to the Drupal admin panel.
   2. Click on **MANAGE FIELDS** section under **Configuration > Account settings**.
    ![enter image description here](https://apidocs.lrcontent.com/images/fieldmapping-dp7_37815e40fb81915f67.48635267.png "enter image title here")
   3. Create User fields as per your requirements.
   4. Go to **LoginRadius** module to map user fields with the LR fields that are enabled from standard login of the admin console. All the User Fields created in drupal will be listed down under **Field Mapping**.
    ![enter image description here](https://apidocs.lrcontent.com/images/fieldmap_43675e7063043ba329.62340819.png "enter image title here")
    5. Hit the **Save configuration** button.


> **Note:**  The mapping will depend on the type of the fields selected from standard login, an only similar type of fields can be mapped with each other. And after login, the customer can see the mapped value in the 'View' section.  Customer can also edit the field values in the Edit section which will be reflected in View page after changes.

## Advanced Settings
  For the advanced tab settings refer to the below screenshot.
    ![enter image description here](https://apidocs.lrcontent.com/images/advanceop_319495e70637f664d15.90513010.png "enter image title here")


  - **Enable Passwordless link login**
 LoginRadius customers can set up a login flow that allows customers to login without a password by enabling this option. At the same time, Customers have to enable passwordless login from the Admin console as well. For more details, refer our [Passwordless Link Login](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/passwordless-login-configuration/#passwordlessloginwithemail0) documentation.
  Passwordless SMS templates can be added/Modified in "Admin Console" which will be displayed in the drupal admin authentication page.


  - **Enable Passwordless OTP Login**
  LoginRadius customers can set up a Passwordless OTP flow that lets the customer enter his phone number and click on the Passwordless OTP login button. Enter the OTP which is received in the phone number to login. Customers have to enable Passwordless OTP login from Admin console as well. For more details, refer our  [Passwordless OTP Login](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/passwordless-login-configuration/#passwordlessloginwithotp1) documentation.
  Passwordless SMS templates can be added/Modified in "Admin Console" which will be displayed in the drupal admin authentication page.

  - **Enable password strength**

    Password strength is a measure of the effectiveness of a password in resisting guessing and brute-force attacks. The strength of a password is a function of length, complexity, and unpredictability. For more details review our [Javascript Hooks](https://www.loginradius.com/docs/api/v2/user-registration/javascript-hooks#passwordstrengthfeature19) documentation.

   ![enter image description here](https://apidocs.lrcontent.com/images/pssstr_114295e70640944d9a9.54264362.png "enter image title here")

  - **Message timeout setting**

   Admin can set notification timeout (in seconds) by entering the desired time period in ‘Notification timeout settings’. Notification timeout is the time in which admin sets the time for how long the success/error message will display.
    ![enter image description here](https://apidocs.lrcontent.com/images/messagetimeout_77625e7064742e7702.96251888.png "enter image title here")

  - **Store customer's email address in the database**
 Admin can store customer's registered email address in the drupal database if this option is enabled otherwise a random email id will be generated and stored in the database.
    ![enter image description here](https://apidocs.lrcontent.com/images/storeemail_257025e40ffa27a06b8.41223715.png "enter image title here")

  - **Store user's first and last name as their username in the database**
    Admin can store user's first and last name as the username in the drupal database if this option is enabled otherwise provider id will be stored in the database.
    ![enter image description here](https://apidocs.lrcontent.com/images/storeusername-dp7_268185e40ffedeeb4e6.92585886.png "enter image title here")

  - **Terms and Conditions**

   Admin can set Terms and Conditions by entering the content that he wants to be displayed on the registration form.
    ![enter image description here](https://apidocs.lrcontent.com/images/terms-and-condition-dp7_160905e41128c9d8290.08901508.png "enter image title here")


 - **Common Options**

   Admin can also enter the common options of loginradius JS in **Common options for loginradius interface** field, click [here](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#initializationofloginradiusobject3) for details on common options.
    For example :

```
commonOptions.loginOnEmailVerification = true;
```
  ![enter image description here](https://apidocs.lrcontent.com/images/commonoptions-dp7_238605e4113191ea482.91035561.png "enter image title here")

 - **Registration Form Schema**

  From here, you can customize the default registration form according to your desired fields, validation rules, and field types. All of the standard and custom fields configured in your registration form can be found in Deployment > JS Widgets > Registration Forms.
    ![enter image description here](https://apidocs.lrcontent.com/images/registrationschema-dp7_221835e411367566d11.83014674.png "enter image title here")

## Single Sign-On

### Overview

LoginRadius [Single Sign-On](https://www.loginradius.com/docs/api/v2/single-sign-on/overview) (SSO) is a feature for multiple site management. It allows your customers to log into one site, then when they navigate themselves to other sites belonging to you and enabled with LoginRadius Single Sign-On(SSO), they are already identified as registered customers and logged in to the site.

### Configuration

> ###### Important Note: Make sure the same LoginRadius Site should be used in all websites in which you want to enable Single Sign-On.

- Navigate to Single Sign-On.
- Select Yes to option under "Do you want to enable Single Sign-On (SSO)?".
    ![enter image description here](https://apidocs.lrcontent.com/images/sso_303035e7064e9763d02.25276175.png "enter image title here")

## Identity Experience Framework

### OVERVIEW

It is a feature for login and registration through the LoginRadius Identity Experience Framework. It allows your customers to log into your site via the LoginRadiusIdentity Experience Framework.

### CONFIGURATION

- Navigate to the Identity Experience Framework tab.
- Select **Yes** option under **Do you want to enable Identity Experience Framework ?** and hit **save the configuration**.
    ![enter image description here](https://apidocs.lrcontent.com/images/ief_53585e70655ce8cb60.45586896.png "enter image title here")

## Update Profile
Customers can update their profile after login from the profile editor section.
![enter image description here](https://apidocs.lrcontent.com/images/update-profile_225655e1311c05ca7e4.28893901.png "enter image title here")

## Multi-Factor Authentication

- In the case of traditional login, if [Multi-Factor Authentication](https://www.loginradius.com/docs/api/v2/user-registration/two-factor-authentication-overview) is enabled on your app then the MFA section will be displayed on the profile page. Click on the "2-Step Verification" button to enable Multi-Factor Authentication.  By default, MFA is disabled on your LoginRadius site. To enable MFA for your site, in the Admin Console, go to Platform Security > Multi-Layered Security > Multi-Factor Auth. Select the “Enable” option under “Multi-Factor Authentication” and the relevant flow option under the “Select Flow” section.

    ![enter image description here](https://apidocs.lrcontent.com/images/twofa_255705e05da17d06ba8-47973491_276695e1313a63b8000.94628344.png "enter image title here")
    **Note:** For Multi-Factor Authentication, by default OTP authenticator is enabled on the app and, in order to enable Google Authenticator, you will need to enable it from the LoginRadius Admin Console.

- Scan the barcode from the authenticator app and enter Google Authenticator Code here.
    ![enter image description here](https://apidocs.lrcontent.com/images/barcode_199995e1313fe079b19.63916401.png "enter image title here")
    On successful authentication, option to ‘Reset backup code’ will appear on the profile. Customers can reset the generated backup codes from here.
    ![enter image description here](https://apidocs.lrcontent.com/images/backupcode-3_299875e13144d1b15a8.28563411.png "enter image title here")

## Update Phone Number

This option will appear on profile along with the **Phone Number** field displaying the respective phone number. It will work only when the ‘Phone and Email Simultaneous Login’ option is enabled on your app.
![enter image description here](https://apidocs.lrcontent.com/images/updatephone-3_18425e130e975689e4.34463467.png "enter image title here")

## Advanced Customization

1. [My website is getting spam, how can I prevent it?](#1-my-website-is-getting-spam-how-can-i-prevent-it)
2. [Where to look for customer details in the database?](#2-where-to-look-for-customer-details-in-the-database)
3. [How to verify your server is compatible with LoginRadius API?](#3-how-to-verify-your-server-is-compatible-with-loginradius-api)
4. [How to clear cache from the Admin panel?](#4-how-to-clear-cache-from-the-admin-panel))
5. [How to uninstall the Module?](#5-how-to-uninstall-the-module)

##### 1. MY WEBSITE IS GETTING SPAM, HOW CAN I PREVENT IT?

1. Login to Drupal admin panel.
2. Navigate to the **Configuration** tab, click on **Account Settings**.
3. Now check the **Require e-mail verification when a visitor creates an account** option under the **REGISTRATION AND CANCELLATION** section.
     ![enter image description here](https://apidocs.lrcontent.com/images/Picture11_75495aba2f17393dc3.94172069.png)

##### 2. WHERE TO LOOK FOR CUSTOMER DETAILS IN THE DATABASE

Customer details are stored in the user's table and loginradius_mapusers table:-
users table :

| Column | Info                 |
| ------ | -------------------- |
| name   | Username             |
| mail   | user's email address |

| Column      | Info                       |
| ----------- | -------------------------- |
| provider    | Social network provider    |
| provider_id | Social network provider ID |

##### 3. How to verify your server is compatible with LoginRadius API?
To check the server compatibility, make sure to check curl.dll or allow_url_fopen files are enabled in “php.ini” file.

##### 4. How to clear cache from the Admin panel
Clear the cache from the drupal Admin panel. To find the settings Go to configuration> performance and click on “clear all caches” button.

##### 5. HOW TO UNINSTALL THE MODULE?

1. Login to the Drupal admin panel.
2. Go to the **Modules** tab and disable **CIAM module**
3. Now, click on the **Uninstal**l tab under the **Modules** tab and check the **CIAM module** and hit the **uninstall** button.
   Note: Make sure to disable and Uninstall Identity Experience Framework
    and SSO (Single Sign-On) modules first, in order to uninstall CIAM module.
     ![enter image description here](https://apidocs.lrcontent.com/images/Picture12_224505aba3221ebc375.44826267.png "enter image title here")

## Interface customization

### CSS Customization

To make the designing customization like interface layout, popup designing or interface elements, use the current theme's CSS file for overriding the design.

### The Interface on Custom Page

We have the following interfaces to display on any custom/existing pages:

- Displaying Admin Login Form on a page
- Displaying Forget password form on a page
- Displaying Registration form on a page
- Displaying Login form on a page

In order to display the above interfaces follow the below steps:

1. Go to drupal Admin Panel > Structure > Blocks here, you will find multiple regions. Select the Region from the dropdown where you want to display the particular block.
     ![enter image description here](https://apidocs.lrcontent.com/images/Blocks-drupal7_286065e411a7a5d0912.88109298.png "enter image title here")
2. Click on Configure to configure the particular form, refer to below screenshot
     ![enter image description here](https://apidocs.lrcontent.com/images/Picture14_64215aba3492d360a2.58793573.png)

3. To show the link of custom login interface and registration interface on any page, add the URL of respective pages refer to the below screenshot.
     ![enter image description here](https://apidocs.lrcontent.com/images/Picture15_285565aba3573d2eb22.19672562.png "enter image title here")

4. Click on Pages, select Only the listed pages option under Show block on specific pages and add the Page ID where you want to show the block (interface) and hit on the “Save block” button.
     ![enter image description here](https://apidocs.lrcontent.com/images/Picture16_163675aba35e19f33a4.68854269.png "enter image title here")

5. The respective interface will be displayed on the page on the frontend.
     ![enter image description here](https://apidocs.lrcontent.com/images/Picture17_305785aba3647cab868.14159805.png "enter image title here")

**Note:** Drupal version tested up to 7.67