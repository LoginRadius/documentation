# Wordpress Customer Identity and Access Management Plugin

---

WordPress is an open-source and free content management system which is written in PHP and uses MySQL or MariaDB database. Wordpress features have a plugin architecture and different templates, which is commonly referred as Wordpress Themes.


## Overview

LoginRadius Customer Identity and Access Management Plugin simplifies and secures your customer registration process, increases customer conversion with Social Login that combines 40+ major social platforms and offers a full solution with Traditional customer Registration. Also, you can gather a wealth of customer profile data from Social Login and Traditional customer Registration, have a centralized view of entire end-customer data and manage it easily. Thus, it helps you to boost customer engagement, manage online identities, capture accurate customer data and get unique social insights into your customer base.

> **Note:** Based on your LoginRadius plan you have, you may have access to one or more of the following modules. This document provides an overview of each component listed below. If you require additional components that are not included in your plugin please contact your product specialist at LoginRadius

> - Enabling both the versions together i.e. V1 and V2 of Wordpress plugins may cause conflicts. Kindly disable one of them for smoother operations.
>- In case of updating the plugin first deactivate the previous plugin and replace the codebase and activate the new plugin. Alternatively, you can also update it by clicking on the “update” of LoginRadius CIAM at “/wp-admin/plugins.php” of your site.



## Installation

- Navigate to Wordpress Admin Panel->Plugins
- Click "Add New" button
- To install the LoginRadius plugin, type "loginradius" in the search field, or use the "Upload Plugin" button. You can use the plugin that was provided to you by the LoginRadius team or can download the default plugin here.
   

  ![enter image description here](https://apidocs.lrcontent.com/images/plugin-img_24638595a2a95413600.05194630.png)

## Activation

- To activate the plugin, navigate to Wordpress Admin Panel->CIAM
- On the Activation tab, enter your API Key, and API Secret as provided on your LoginRadius Admin Console.
- Click 'Save Settings'.
   ![enter image description here](https://apidocs.lrcontent.com/images/ActivationSettings_100355e01aae2a5ee52.14679580.png "enter image title here")

## Authentication

- To enable authentication settings navigate to Wordpress Admin Panel->CIAM->Authentication here, you will find 4 admin settings:
    
![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings_260935ddcb9a55d0e48.61076603.png "enter image title here")

1. User Registration
2. Authentication                                       
3. Advanced settings
4. Short Codes

### User Registration

- **Identity Experience Framework**  To enable Identity Experience Framework functionality on your web property enable "Enable Identity Experience Framework" option.  ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-identity_243655ddcc82d154121.10031858.png "enter image title here")  

- **Auto Generate Authentication Page**   To allow the plugin to auto-generate the pages for login, registration, forgot password and reset password enable 'Auto Generate Authentication Page'. Admin can also generate traditional/social login and registration interface on the desired page using the shortcodes provided in the ShortCodes tab, If he do not wish to enable 'Auto Generate Authentication Page'.
  ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹auto_326105ddcbabead1494.31298759.png "enter image title here")

- **Referral URL**  Let's say if a customer comes to the login page from the About Us page, then after login customer will get redirected to the About Us page.
    **Note:** This condition will apply only when the referral domain is the same and **Redirect to the same page where the customer logged in** is enabled from the plugin backend panel. There are 4 redirection settings available under 'Redirection settings after login' by which Admin can set the redirection of the customer after login:
    1. Redirect to the same page where the customer logged in
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-CIAM-—-same-page_7605ddcbbd181b229.37711169.png "enter image title here")
    2. Redirect to the home page of your WordPress site
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-CIAM-—-home_41615ddcbd363074a9.85112906.png "enter image title here")
    3. Redirect to the customer's dashboard
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-dash_257075ddcbd50c89a70.52686365.png "enter image title here")
    4. Redirect to a custom URL (enter the custom url below)
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-custom_224135ddcbd7c7979b5.11619472.png "enter image title here")
    If Redirect to a custom URL is enabled then it will have the top priority and customer will get redirected to that URL after login. Below is the example of passing the Redirect To URL with the login URL

```
http://www.example.com/login/?redirect_to=http:%2F%2Fwww.example1.com
```

**Note:** redirect_to parameter will have a URL in the encoded format.

### Email Authentication Settings
- Admin can configure Email Authentication setting by 4 methods :
    ![enter image description here](https://apidocs.lrcontent.com/images/2019-10-18_1452_261535da98e31a091d3.34694064.png "enter image title here")
    1. Enable prompt password on Social Login
    2. Enable login with username
    3. Ask for email from unverified user
    4. Ask for required field on Traditional Login

* Email templates can be added/Modified in "Admin Console" which will be displayed in WP-Admin authentication page.
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-emailtemp_234865de0be5f75bd28.66456210.png "enter image title here")

### Phone Authentication Settings

Phone Authentication will be displayed in the admin authentication tab only if Phone Workflow is enabled in your app.
  ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-phone_80855de0bc5aa1a379.51691156.png "enter image title here")  
* SMS templates can be added/Modified in "Admin Console" which will be displayed in WP-Admin authentication page.
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-phone-template_300395de0bdba80f1a0.31032168.png "enter image title here")

## Advanced Settings

For the advanced tab setting please refer to the below screenshot.
![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-adv_174615ddcbec4089e36.91701088.png "enter image title here")

- Admin can enable or disable the advanced options like:

  - **Enable Passwordless link login**

    LoginRadius customers can set up a login flow that allows users to login without a password. Please review our [Passwordless Link Login](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/passwordless-login-configuration/#passwordlessloginwithemail0) documentation for more details.

  - **Enable Passwordless OTP Login**

    Enabling this option on the LoginRadius site lets the end-user enter his phone number and click on the instant OTP login button. Now enter the OTP which you received in your phone number to login, for more details review our [Passwordless OTP Login](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/passwordless-login-configuration/#passwordlessloginwithotp1) documentation.

  - **Enable password strength**

    Password strength is a measure of the effectiveness of a password in resisting guessing and brute-force attacks. The strength of a password is a function of length, complexity, and unpredictability. For more details review our [Javascript Hooks](https://www.loginradius.com/docs/api/v2/user-registration/javascript-hooks#passwordstrengthfeature19) documentation.

  ![enter image description here](https://apidocs.lrcontent.com/images/2019-10-18_1457_242935da98fd5065401.87440997.png "enter image title here")

   
- Admin can set notification timeout (in seconds) by entering the desired time period in ‘Notification timeout settings’. Notification timeout is the time in which admin sets the time for how long success/error message will display.
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-message_167205ddcc33d06f072.58482806.png "enter image title here")

- Admin can set Terms and Conditions by entering the content that he wants to be displayed on the registration form. This text editor also compatible with the TinyMCE text editor.
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹termsnew_85745ddcc2e1bfd718.68347221.png "enter image title here")

- Admin can also enter the common options of loginradius JS in **Common options for loginradius interface** field, click [here](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#initializationofloginradiusobject3) for details on common options.
    For example :

```
commonOptions.loginOnEmailVerification = true;
```
  ![enter image description here](https://apidocs.lrcontent.com/images/2019-10-18_1600_132735da99457626cf5.30180488.png "enter image title here")

### Registration Form Schema

- From here, you can customize the default registration form according to your desired fields, validation rules, and field types. All of the standard and custom field configured in your registration form, can be found in Deployment > JS Widgets > Registration Forms.
    ![enter image description here](https://apidocs.lrcontent.com/images/Authentication-Settings-‹-schema_31265ddcc3c03041f7.35267983.png "enter image title here")


### Short Codes

- For short code tab settings please refer to the below screenshot. Admin can select shortcodes that can be used on page or post to display the respective interface.
    ![enter image description here](https://apidocs.lrcontent.com/images/2019-10-18_1502_168805da990c8117bd8.74888963.png "enter image title here")

### Single Sign-On

LoginRadius [Single Sign-On](https://www.loginradius.com/docs/api/v2/single-sign-on/overview)(SSO) is a feature for multiple site management. To enable the SSO, navigate to Wordpress Admin Panel->CIAM->SSO. In SSO tab enable the radio button under the 'Enable SSO' tab and then click Save Settings button.
![enter image description here](https://apidocs.lrcontent.com/images/2019-10-18_1503_264655da990f45b51f8.98151152.png "enter image title here")


### Debug Mode

- To generate Debug log for debugging purpose, enable **WordPress developer mode** option from **wp-config.php**

> **Note:** When the log is enabled, then it will start writing the log to the 'ciam_debug.log' file which is present at the plugin root.

### Multi-Factor Authentication

- In the case of traditional login, if [Multi-Factor Authentication](https://www.loginradius.com/docs/api/v2/user-registration/two-factor-authentication-overview) is enabled on your app then its section will be displayed on the profile page. Click on "2-Step Verification" button to enable Multi-Factor Authentication. By default, MFA is disabled on your LoginRadius site. To enable MFA for your site, in the Admin Console, go to Platform Security > Multi-Layered Security > Multi-Factor Auth. Select the “Enable” option under “Multi-Factor Authentication”and the relevant flow option under the “Select Flow” section.

    ![enter image description here](https://apidocs.lrcontent.com/images/Profile-‹-mfa_165005dde37b7890623.19585768.png "enter image title here")
    **Note:** For Multi-Factor Authentication, by default OTP authenticator is enabled on the app and, in order to enable Google Authenticator, you will need to enable it from the LoginRadius Admin Console.

- Scan the barcode from the authenticator app and enter Google Authenticator Code here.
    ![enter image description here](https://apidocs.lrcontent.com/images/wpf13_34805a5dd63f4fb662.08618098.png)
    On successful authentication, option to ‘Reset backup code’ will appear on profile. Customer can reset the generated backup codes from here.
    ![enter image description here](https://apidocs.lrcontent.com/images/Profile--backupcode_93185dde48ee166642.15785613.png "enter image title here")

## Update Profile
Customers can update their profile from the profile editor section.

![enter image description here](https://apidocs.lrcontent.com/images/Profile-‹-update_164895dde19c4bd15c4.00488114.png "enter image title here") 



## Update Phone Number

This option will appear on profile along with the **Phone Number** field displaying the respective phone number. It will work only when the ‘Phone and Email Simultaneous Login’ option is enabled on your app.

![enter image description here](https://apidocs.lrcontent.com/images/Profile-‹-updatephone_221115dde0f03659412.82626859.png "enter image title here")

## Interfaces

Following are the user Interfaces provided by LoginRadius:

### Login Interface

Login interfaces can be used from the login page created from the plugin authentication tab from the admin panel. It can also be used from the page on which admin has applied the shortcode for login i.e. [ciam_login_form].

To auto-generate the registration page, navigate to Wordpress Admin Panel->CIAM->Authentication and check ' Auto Generate User Registration' under User Registration section.

![enter image description here](https://apidocs.lrcontent.com/images/Login-page_109135de0a74b545ae2.46581284.png "enter image title here")

### Registration Interface

Registration interface can be used from the Registration page created from the plugin authentication tab from the admin panel. It can also be used from the page on which admin has applied the shortcode for registration i.e. [ciam_registration_form].

To auto-generate the registration page, navigate to Wordpress Admin Panel->CIAM->Authentication and check 'Auto Generate User Registration' under User Registration section.

![enter image description here](https://apidocs.lrcontent.com/images/Register_173775de0a7881bfd93.15846947.png "enter image title here")

### Forgot password Interface

Forgot password interfaces can be used from the forgot password page created from the plugin authentication tab from the admin panel. It can also be used from the page on which admin has applied the shortcode for forgot password i.e. [ciam_forgot_form].

To auto-generate the registration page, navigate to Wordpress Admin Panel->CIAM->Authentication and check ' Auto Generate User Registration' under User Registration section.

Below screenshot is for Forgot Password page.

![![enter image description here](https://apidocs.lrcontent.com/images/forgotpassword_167165959eb4f411c55.55847165.png "")](https://apidocs.lrcontent.com/images/forgotpassword_30179595f8b28b60426.68419791.png)

### Reset password Interface

Reset password interfaces can be used from the Reset password page created from the plugin authentication tab from the admin panel. It can also be used from the page on which admin has applied the shortcode for Reset password i.e. [ciam_password_form].

To auto-generate the registration page, navigate to Wordpress Admin Panel->CIAM->Authentication and check 'Enable Auto Generate User Registration' under User Registration Integration section.
The customer can reset their password from the link which they receive in their mail after doing the forgot password process.

![enter image description here](https://apidocs.lrcontent.com/images/reset_36685de0e6d3cd85d2.28232477.png "enter image title here")

### Default WP Login Form

Default WP Login Form is used for admin purpose. If the admin wants to bypass the LoginRadius authentication services or doesn't require to register a customer at LoginRadius then it can be done using the [ciam_wp_default_login] shortcode. For this Admin needs to create a separate page and apply the given shortcode on it.

**For example:** We have created a new page by the name “Default” and applied [ciam_wp_default_login] shortcode on it, (refer the below screenshot) this will display default wordpress login form.

![enter image description here](https://apidocs.lrcontent.com/images/Picture1_248575a86983d0e3239.12115112.png)

![enter image description here](https://apidocs.lrcontent.com/images/Picture2_180335a86988ac4da11.10623642.png)

### Add additional email

The customer can add additional email to their account. This email will get saved into the LoginRadius [Cloud Directory](https://www.loginradius.com/docs/api/v2/cloud-directory-api/overview/) and can be used to manage the account.

The customer can delete the other email if want to delete.

To add additional email navigate to Wordpress Admin Panel->Users->Your Profile.

![enter image description here](https://apidocs.lrcontent.com/images/Profile-‹-addemail_267505dde0de75124e1.54985535.png "enter image title here")

Click on Add Email button near to the email field. Popup will appear to enter the email and click send. A verification link will be sent to the entered email address.

The new email will be appeared in the profile after verifying it.

### Remove email

The customer can also remove the additional or existing email from their account. 

![enter image description here](https://apidocs.lrcontent.com/images/Profile-‹remove_326575def821105f989.24119651.png "enter image title here")

Click on remove button near to the email field. Popup will appear to enter the email after that click on the remove button. It will delete the added email from your account.
### Interface customization

In order to customize the LoginRadius Interface like Login, Register, forgot password, etc then we have the following options:

- **CSS Customization**
    To make the designing customization like interface layout, popup designing or interface elements, use the current theme's CSS file for overriding the design.

- **Language Customization**
    To customize the form’s field label or button label, please follow our [Javascript Hooks](https://www.loginradius.com/docs/api/v2/user-registration/javascript-hooks#languagecustomizations20) document.

### Where to look user details in database?

- You can see the user's email id and username in the "wp_users" table.
- And plugin options setting in the "wp_options" table. 

### How to troubleshoot plugin?

While Troubleshooting, make sure to check out the following points:

- Wordpress plugin uses “wp_remote_request” function to run APIs that indirectly call cURL or fsockopen, so please make sure that cURL remains open on the server.
- If you have enabled any caching plugin on your site, then please make sure to clear the cache from it after making any update/customization to the plugin.

### How to Uninstall plugin?

To uninstall the plugin go to the installed plugin section and click on deactivate button below the "LoginRadius CIAM" or you can select "LoginRadius CIAM" after that choose deactive from Bulk Action and click on Apply button.

> Note: 
>   On uninstallation of the plugin all the options setting will be deleted from the "wp_options" table.

**Note:** WordPress version tested up to 6.0.2
