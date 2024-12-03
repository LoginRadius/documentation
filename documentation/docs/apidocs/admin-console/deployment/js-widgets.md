# JS WIDGETS

## Overview

JS Widgets allow you to generate numerous JavaScript interfaces to embed directly onto your web applications. JS Widgets are categorized into six categories: Settings, Registration Forms, Login, Registration, Forgot Password, and Other Widgets. You can configure this feature from the LoginRadius Admin Console in [Deployment > JS Widgets](https://adminconsole.loginradius.com/deployment/js-widgets/settings).

## Settings

To configure some advanced options for your authentication workflow, go to [Deployment > JS Widgets > Settings](https://adminconsole.loginradius.com/deployment/js-widgets/settings) and select the options you would like to enable. The following is the list of advanced options provided by LoginRadius:

- **Ask Required Fields On Traditional Login:** Used to ask for the missing values in the required fields when the user attempts to log in
- **Auto Logout on Email Verification:** Used when the user verifies their email successfully to log out of the session.
- **Google Recaptcha:** Used to enable reCAPTCHA on the traditional registration form.
- **Is UserName Login:** Used to enable login by username, if configured.
- **Ask Password On Social Signup:** Used to ask for password on Social Login.
- **Ask Email Id For Unverified User Login:** Used to ask for an email when the user is unverified and attempts to log in.
- **Enable Auto Login upon Email Verification:** Used for direct login after successful email verification.
- **Enable Auto Login upon Password Reset:** Used for direct login after successfully reseting the password.
- **Enable Server-side Password Rule on Login:** Used to validate the password rules on the server-side during login.
- **Ask Optional Fields On Social Signup:** Used to ask for the missing values from the optional fields after Social Login:

![Recaptcha1](https://apidocs.lrcontent.com/images/image-29_21434636eb47f9d8b07.35462212.png "Recaptcha1")

## Registration Forms

LoginRadius provides the ability to create multiple registration form schemas. Go to **Deployment > JS Widgets > Registration Forms**. In this section, you can generate different registration forms schemas by selecting the fields under **Enabled Fields** to convert them into **Active Fields**. It should be noted that these fields reflect what was enabled under **Data Schema**. You will see the generated schema under **Registration Form Schema**. Use the **Copy** button to copy the new schema.
![enter image description here](https://apidocs.lrcontent.com/images/ac16_266395e9323caa77eb4.01226336.png)

## JS Widgets

You can implement the LoginRadius solution using standard JavaScript interfaces. This feature allows you to quickly prototype the interface scripts and deploy the JavaScript code onto your client-side application. This section contains multiple JavaScript interfaces for configuration.

The process to configure each JS Widget is similar. Go to Deployment > JS Widgets > Login to configure the Login widget. As highlighted below, select the desired options from the list to configure the JS code. View and copy the respective JS code onto your web applications.
![enter image description here](https://apidocs.lrcontent.com/images/ac17_163675e9323e6b644e3.99768026.png "enter image title here")

LoginRadius offers a number of JS Widgets to customize your authentication and authorization workflow. Select the appropriate tab on the left panel to configure the desired JS Widget. The JS Widgets on the Admin Console are Login, Registration, Forgot Password and Other Widgets. Other Widgets include Reset Password, Verify Email, Change Password, Social Login, Link Account, Unlink Account, Profile Editor, Two Factor Authentication, Add Email, Remove Email, Resend Email Verification, Change Username, Update Phone Number, and Auto Login.
