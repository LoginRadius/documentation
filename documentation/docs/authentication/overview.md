# Overview


This document provides a comprehensive overview of the various authentication [types](#authenticationtype0)  and advanced [features](#authenticationfeatures5) supported by the LoginRadius Identity Platform.


For more details on the implementation and deployment of these authentication features, refer the following:

|Quick Starts |Tutorials | Concepts | 
|---|---|---|
|  [Standard Login](/authentication/quick-start/standard-login/)  [Social Login](/authentication/quick-start/social-login/) [Single Sign On](/authentication/quick-start/sso-implementation/)  | [Phone Login](/authentication/tutorial/phone-login/)  [One Touch Login](/authentication/tutorial/one-touch-login) [Passwordless Login](/authentication/tutorial/passwordless-login/)  [Smart Login](/authentication/tutorial/smart-login/)  [Username Login](/authentication/tutorial/username-login/)| [Password Policy](/authentication/concepts/password-policy/) [Email Communication & Configuration](/authentication/concepts/email-communications/)  [SMS Provider Configuration](/authentication/concepts/sms-configuration)  [Roles, Permissions, and Context](/authentication/concepts/roles-and-membership/) [UI and UX Customization of IDX](/authentication/concepts/ui-ux-customizations-idx/)  [Email Verification Workflow](/authentication/concepts/email-verification-workflow/)  [Session Management](/authentication/concepts/session-management/) [SMS Communication and Configuration](/authentication/concepts/sms-communication/) [Customer Security](/authentication/concepts/customer-security/) [Progressive Profiling](/authentication/concepts/progressive-profiling/) [Customer Data Management](/authentication/concepts/introduction/) | 


## Authentication Type 

The LoginRadius Identity Platform supports the following authentication types:
- Email Authentication
- Phone Authentication
- Username Authentication
- Social Authentication

> **Note:** To check the authentication type enabled for your LoginRadius account, refer to the [**Authentication Workflow**](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/authentication-workflow/account-workflow).

### Email Authentication


Email Authentication is the process of registering for and accessing an account using an email address. By default, this feature is enabled for your LoginRadius account. The [Standard Registration and Login](#standardlogin6) process exemplifies email authentication.

Email authentication is particularly beneficial for businesses that depend on email marketing for notifications, promotions, and updates. It is widely used in corporate sectors where email addresses are domain-specific.


### Phone Authentication

Phone Authentication is the process of registering and accessing an account via Phone number. The [Phone Registration](#phonelogin8) and Login feature is an example of phone authentication.

It is mostly used in public websites and apps like food delivery, cab services, and more. It is beneficial for those customers who do not actively use or maintain their email accounts.

### Username Authentication

Username Authentication is the process of registering for and accessing an account using a username. While you can request an email address during registration, customers log in using their unique username and password.

The [Username Registration](/authentication/tutorial/username-login/) and Login feature is a prime example of this authentication method. It is particularly useful in applications where identifying customers by their usernames, rather than their real names or other identities, is a requirement.


### Social Authentication

Social authentication is the process of registering and accessing the account via the existing social account. In this case, your customers are not required to fill out a registration form by skipping it. 

The [Social Login](#sociallogin7) feature is an example of social authentication.

## Authentication Features

### Standard Login

**Standard Login** workflow is a fundamental component of LoginRadius, which allows you to provide your customers with a seamless authentication flow leveraging a unique ID (Email or Username) and password. It consists of Registration, Login, Customer Profile, and Password Management features.

**For example**, an online floral arrangement and delivery service may ask to include the following details:
- Required fields such as First Name, Last Name, and Email
- An optional field with a dropdown menu of specific types of flowers for the users to choose their favorite
- A field for the user to input their favorite color

Refer to this [document](/authentication/quick-start/standard-login/) to configure the Standard Login feature.

### Social Login

**Social Login** is a quick and convenient approach to registration and login, as it allows your customers to skip filling out registration forms. It also increases customer conversion rates by enabling them to sign in to your website with their existing social media accounts, such as Facebook, Twitter, Google+, and more.


**For example**, Quora, an online Q&A platform, uses Social Login to make the user's experience smooth and fast. Social Login is commonly used in most online platforms to ease the user's experience, reduce login failures, and increase registration. 



> **Note:** When users log in with a social provider, the application they are accessing will never have access to the password of their social provider account.


Refer to this [document](/authentication/quick-start/social-login/) to configure the Social Login feature.



### Phone Login

**Phone Login** feature allows your customers to register and log in using their Phone Numbers. LoginRadius Identity Platform requires you to verify these customers after the registration via a One-Time Password (OTP). In the case of Phone Login, your customers can log in only after the phone number verification.

**For example,** it may be useful to tie the accounts to a phone number, such as when your main product is a mobile app and you want your users to go through a registration process. In this case, allowing them to register by providing a phone number and password for registration as opposed to an email and password might be a better experience.

In addition, you can allow them to register using their Phone Number and OTP, this way, they don’t have to remember another password to log into your application.

Refer to [this document](/authentication/tutorial/phone-login/) to configure the Phone Login feature.

### One Touch Login

**One Touch Login** allows your customers to log in without the obligation to **register** first and remember the password. A link or OTP is sent to their email address or phone number respectively, and once the link or OTP is verified, the customer will be logged into the account.

While there are a variety of use cases for this type of authentication workflow, it is most common among IoT devices, Smart TV apps, and Smartphone apps. 

**For example**, a user may be willing to participate in a TV show with online voting through the mobile app. After the splash screen, the mobile app prompts the user to enter their mobile number.

- The user enters his mobile number. He receives an OTP (One-Time Password) on his phone, which allows him to log in.
- The user enters the OTP and completes the authentication process. Then, the user can quickly vote for their favorite candidate.

Similarly, the verification link or OTP can be sent on the email instead of Phone Number. Thus, you can utilize this feature as per the business requirements.

Refer to [this document](/authentication/tutorial/one-touch-login) to configure the One Touch Login feature.

###  Passwordless Login

**The Passwordless Login** feature allows your registered customers to log in without providing a password. A link or OTP is sent to the registered email address or phone number respectively, and once the link or OTP is verified, the customer will be logged into the account.

> Note: In the case of Passwordless Login, the customer needs to **register** by providing a password. Later, the customer can log in using the password, link, or OTP.

**For example**, a traveler checks in for a flight at the airport, which departs at 5:30 am. During the check-in process, the screen asks for an email address. Once entered, LoginRadius checks if their email address exists in the airline database:

- If not, the traveler will be requested to create an account.
- If yes, LoginRadius triggers an email with a link that will log them into the in-flight entertainment portal. 

Similarly, instead of the link, an OTP can be sent on the traveler’s phone number. Thus, you can utilize this feature as per the business requirements.

Refer to [this document](/authentication/tutorial/passwordless-login) to configure the Passwordless Login feature.

### Smart Login

The **Smart Login** feature allows your customers to log in easily to a device that may not be accessible with standard web or mobile devices.

The Smart Login feature does not require a password and is designed to help you delegate the authentication process to a different device. It is commonly used in Smartphone Apps, Smart TV Apps, and Gaming Consoles (Xbox, PS, etc.).

**For example**, imagine a user who has upgraded their smart TV and is setting up a Video Channel Service they were already using. The user clicks the "Login Now" button and enters their username or email address. The application then sends a message to the provided email address.

The user opens the email on a mobile or web device and clicks the link within the message. A success message is displayed on the mobile or web device, and simultaneously, the user is authenticated on the Video Channel Service on the TV. This seamless process allows the user to continue enjoying the video channel without the hassle of remembering a password.


Refer to [this document](/authentication/tutorial/smart-login/) to configure the Smart Login feature.

### Standard and Phone Login Overview

**The Standard and Phone Login** workflow allows your customer to login using both Phone Number and Email ID. However, to achieve this, in the registration form, at least one of these two fields should be required. 

> **Note:** To enable this workflow, contact to [ the LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

**For example**, your customer can provide both OR one of the following during the registration:

- Email ID
- Phone Number

If you require customer verification, LoginRadius sends a verification email or message. If the user has added both an email ID and a phone number, LoginRadius sends the verification email and message to both mediums.



Your customer can verify one or both (Email ID and Phone Number). The verified methods can then be used to log in. The following are the possible login workflow based on the above registration and verification actions:

- If your customer has verified the email ID, the customer can log in by entering the Email ID and Password.
- If your customer has verified the phone number, the customer can log in by entering the Phone Number and Password.
- If your customer has verified both email ID and phone number, the customer can log in by entering Email ID OR Phone Number and Password.

Refer to [Advanced Customization](/api/v2/user-registration/advanced-customization#standardandphonelogin18) and [Phone Login Configuration](/authentication/tutorial/phone-login/) documents to configure this workflow.

### Custom Provider Registration

If enabled, this feature will allow customers to register via a custom provider. If you don’t wish your users to be able to register via a custom provider, you can disable this feature from this section.

For more details regarding the custom provider, please refer [here](/single-sign-on/tutorial/custom-identity-providers/overview/).
