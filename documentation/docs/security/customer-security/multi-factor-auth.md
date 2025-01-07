# Multi-Factor Authentication Configuration

Multi-factor authentication, or MFA, is a multi-step verification process that provides an extra layer of security for user's accounts. With MFA, once the user enters their login credentials or selects a social login, they are sent a specific authentication code to enter to log in completely. The user can receive the code in several ways, including SMS, Authenticator applications, or an email.

By default, MFA is disabled on your LoginRadius site. Following are the steps to enable MFA for your site:

1. Navigate to [Platform Security > Multi-Layered Security > Multi-Factor Authentication](https://adminconsole.loginradius.com/platform-security/multi-layered-security/multi-factor-authentication/settings) in the Admin Console and click on the switch under **Multi-Factor Authentication** in **Settings**.

   ![mfa](https://apidocs.lrcontent.com/images/unnamed-5_1838938582666940acd82e83.72568957.png "mfa")

2. Select the relevant flow option under the **Select Flow** section and click **Save**.

   - **Optional:** End users will have the ability to enable or disable Two Factor Authentication on login.
   - **Required:** End users will be required to authenticate twice before logging in.

   ![mfa](https://apidocs.lrcontent.com/images/unnamed-6_1810620109666941047325c8.22324993.png "mfa")

## Configuring Email Passcode

The following are the steps to implement the Email Passcode as second-factor authentication via Admin Console:

- To configure the Email Passcode for your app, navigate to [Platform Security > Multi-Layered Security > Multi-Factor Authentication > Email Passcode](https://adminconsole.loginradius.com/platform-security/multi-layered-security/multi-factor-authentication/email-passcode), and you will need to check the box **Select to enable**, to enable this feature as given in the below screen.

  ![email passcode](https://apidocs.lrcontent.com/images/unnamed-7_899785586669415b31a753.56090992.png "email passcode")

- If you want to customize the **Email Passcode** template, you can click on the **Add** button to add a template with the desired message you want to send to your consumers.

  ![email passcode](https://apidocs.lrcontent.com/images/unnamed-8_1525977287666941bde96987.52802350.png "email passcode")

- Now, to configure the Email settings, you need to click on the **Email Passcode Settings** tab as given on the following screen. From here, you can set the **Request Limit**, **Request Disable Period**, and **Multi-Factor OTP (verification code) validity limit**.

  ![Email Setting](https://apidocs.lrcontent.com/images/unnamed-9_1238653658666944e1e46ce1.32425619.png "Email Setting")

- Once the **Email Passcode** is **enabled** for your consumers, they will get the following screen, which will ask for a verification code, which was sent to their email, and they can also resend the verification code.

  ![Verification Page](https://apidocs.lrcontent.com/images/Capture7_2451360a23fc142c053.50058753.png "Verification Page")

  ![Verification Page](https://apidocs.lrcontent.com/images/pasted-image-8_3103460a23ffa685296.15213981.png "Verification Page")

> **Note:** To set up an Email configuration provider, click [here](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/email-configuration)

## Configuring SMS Passcode

- To configure Twilio as your SMS provider, see SMS configuration [here](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/sms-configuration).

- To customize the SMS template for two-factor authentication, go to [Platform Security > Multi-Layered Security > Multi-Factor Authentication > SMS Passcode](https://adminconsole.loginradius.com/platform-security/multi-layered-security/multi-factor-authentication/sms-passcode) and check the box **Select to enable**, to enable this feature. You can now add a new template or edit the existing one.

  ![SMS Passcode](https://apidocs.lrcontent.com/images/unnamed-10_195911102766694556f32e11.94485586.png "SMS Passcode")

- To test MFA via SMS on your default hosted page, make a login attempt, after which you will receive an OTP for the phone number provided.

  ![enter image description here](https://apidocs.lrcontent.com/images/social1_39065b0bdad7d98412.93724428.png)

- Once you enter the correct OTP, you will be able to log in and view your profile by default.

## Configuring Authenticator App

> **Note:** LoginRadius supports configuring **Google Authenticator**, **Microsoft Authenticator**, **Twilio Authy Authenticator**, **LastPass**, **Dashlane**, **Duo** and various other authenticator applications that support both time-based one-time passwords (**TOTP**) and HMAC-based one-time passwords (**HOTP**) for authentication. You can conveniently manage these settings through the [Platform Security > Multi Factor Authentication > Authenticator Apps](https://adminconsole.loginradius.com/platform-security/multi-layered-security/multi-factor-authentication/authenticator-apps) section of the Admin Console. For further information, please reach out to [LoginRadius support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

To get the authentication codes from Authenticator, you can configure the settings under the **Authenticator Apps** section.

- Click on the toggle button to enable the Authenticator App.

- Provide the relevant values for **Issuer Id**, the value can be your product/company name.

- Provide valid values for **QR Code Width** and **Qr Code Height** (ideal values are 150 for both).

- Click the **Save** button to save the settings.

  ![Authenticator](https://apidocs.lrcontent.com/images/unnamed-11_1297080931666945a8cf7ec5.74372806.png "Authenticator")

- To test MFA via the Authenticator app on your default hosted page, try registering as a new user. When you attempt to log in, you will be presented with the screen as shown below. Scan the QR code with the configured Authenticator app to generate a time-based authentication code. Provide the code here and repeat every time a login attempt is made.

  ![Form](https://apidocs.lrcontent.com/images/AuthCodeScan_11383579376575d44fc55a87.39180498.png "form")

## Configuring Security Questions

The following are the steps to implement the multi-factor authentication by security questions via Admin Console:

- To configure MFA by security questions for your app, navigate to [Platform security > Multi-Layered Security > Multi-Factor authentication > Security Questions](https://adminconsole.loginradius.com/platform-security/multi-layered-security/multi-factor-authentication/security-questions) and **Enable** security question for MFA. Please see the image below for your reference.

![Enable Security Questions](https://apidocs.lrcontent.com/images/unnamed-12_3252330156669460fa069d5.08719555.png "Enable Security Questions")


- Select the number of security questions that you want to appear at the time of authentication and **Save** it.

  ![Select Security Questions](https://apidocs.lrcontent.com/images/unnamed-13_29735084666946616b0be2.30605388.png "Select Security Questions")

> **Note:** You can configure new security questions, modify/update previously added questions, and also set a failure attempt limit for them from [here](https://adminconsole.loginradius.com/platform-security/multi-layered-security/security-question/settings).

## Configuring Push Notification

Send push notifications for Multi-Factor Authentication to users, and they can respond via LoginRadius Authenticator or your own native mobile apps. Upon configuring push notifications, users will receive a notification on their mobile device for multi-factor authentication instead of typing in a one-time passcode (OTP). 

![push notification](https://apidocs.lrcontent.com/images/unnamed-14_1848253891666946ec77bba1.00076892.png "push notification")

Check the box labeled Enable Push Notifications to activate the feature.

Additionally, for detailed configuration steps, please refer to our [Push Notification Overview](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/push-notification/overview/) document.

**Login Screen:** Once push notifications are enabled and configured, users will see the following screen when they attempt to log in:

![verify](https://apidocs.lrcontent.com/images/unnamed-15_18662394086669478ca9b9d8.16147630.png "verify")

**Verification:** Upon selecting the **Verify Identity via Push Notification button**, users will receive a push notification on their device containing a QR code.

**Authentication:**

![qr](https://apidocs.lrcontent.com/images/unnamed-16_76494605666947c929d763.31048444.png "qr")

Users must scan the QR code with their authenticator app to complete the login process in **mandatory** MFA, and there will be a skip option in the **optional** MFA flow.

This process ensures that users can securely authenticate their logins using push notifications, providing an added layer of security.
