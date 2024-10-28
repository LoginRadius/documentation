# Overview

This document provides a comprehensive overview of the various authentication [types](#authentication-type) and advanced [features](#authentication-features) supported by the LoginRadius Identity Platform.

For more details on the implementation and deployment of these authentication features, refer to the following sections:

| **Quick Starts**                                                                                                   | **Tutorials**                                                                                                        | **Concepts**                                                                                                                                   |
|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Learn and implement the basics:                                                                                    | Learn and implement authentication features:                                                                        | Learn the supportive concepts of authentication features:                                                                                      |
| [Standard Login](https://www.loginradius.com/docs/authentication/quick-start/standard-login/)                      | [Phone Login](https://www.loginradius.com/docs/authentication/tutorial/phone-login/)                                | [Password Policy](https://www.loginradius.com/docs/authentication/concepts/password-policy/)                                                  |
| [Social Login](https://www.loginradius.com/docs/authentication/quick-start/social-login/)                          | [One Touch Login](https://www.loginradius.com/docs/authentication/tutorial/one-touch-login)                         | [Email Communication & Configuration](https://www.loginradius.com/docs/authentication/concepts/email-communications/)                          |
| [Single Sign On](https://www.loginradius.com/docs/authentication/quick-start/sso-implementation/)                  | [Passwordless Login](https://www.loginradius.com/docs/authentication/tutorial/passwordless-login/)                  | [SMS Provider Configuration](https://www.loginradius.com/docs/authentication/concepts/sms-configuration)                                       |
|                                                                                                                    | [Smart Login](https://www.loginradius.com/docs/authentication/tutorial/smart-login/)                                | [Roles, Permissions, and Context](https://www.loginradius.com/docs/authentication/concepts/roles-and-membership/)                             |
|                                                                                                                    | [Username Login](https://www.loginradius.com/docs/authentication/tutorial/username-login/)                          | [UI and UX Customization of IDX](https://www.loginradius.com/docs/authentication/concepts/ui-ux-customizations-idx/)                          |
|                                                                                                                    |                                                                                                                     | [Email Verification Workflow](https://www.loginradius.com/docs/authentication/concepts/email-verification-workflow/)                          |
|                                                                                                                    |                                                                                                                     | [Session Management](https://www.loginradius.com/docs/authentication/concepts/session-management/)                                            |
|                                                                                                                    |                                                                                                                     | [SMS Communication and Configuration](https://www.loginradius.com/docs/authentication/concepts/sms-communication/)                            |
|                                                                                                                    |                                                                                                                     | [Customer Security](https://www.loginradius.com/docs/authentication/concepts/customer-security/)                                              |
|                                                                                                                    |                                                                                                                     | [Progressive Profiling](https://www.loginradius.com/docs/authentication/concepts/progressive-profiling/)                                      |
|                                                                                                                    |                                                                                                                     | [Customer Data Management](https://www.loginradius.com/docs/authentication/concepts/introduction/)                                            |

## Authentication Type

The LoginRadius Identity Platform supports the following authentication types:
- Email Authentication
- Phone Authentication
- Username Authentication
- Social Authentication

> **Note:** To check the authentication type enabled for your LoginRadius account, refer to the [**Authentication Workflow**](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/authentication-workflow/account-workflow).

### Email Authentication

Email Authentication is the process of registering for and accessing an account using an email address. By default, this feature is enabled for your LoginRadius account. The [Standard Registration and Login](#standard-login) process exemplifies email authentication.

Email authentication is beneficial for businesses that rely on email for marketing, notifications, and updates, and is widely used in corporate sectors with domain-specific emails.

### Phone Authentication

Phone Authentication allows users to register and access accounts via their phone numbers. The [Phone Registration](#phone-login) feature is an example. This method is beneficial for customers who do not regularly use email.

### Username Authentication

In Username Authentication, users register and log in using a unique username. This method is ideal for applications that prioritize username identification. See the [Username Registration](https://www.loginradius.com/docs/authentication/tutorial/username-login/) feature for more details.

### Social Authentication

Social Authentication enables users to register and log in using their social accounts, eliminating the need for registration forms. See the [Social Login](#social-login) feature for details.

## Authentication Features

### Standard Login

The **Standard Login** workflow provides customers with seamless authentication using an email or username and password, covering registration, login, profile, and password management.

Refer to the [Standard Login configuration guide](https://www.loginradius.com/docs/authentication/quick-start/standard-login/) for setup instructions.

### Social Login

**Social Login** allows customers to register and log in using social accounts like Facebook or Google, increasing conversion rates by simplifying access.

Refer to the [Social Login configuration guide](https://www.loginradius.com/docs/authentication/quick-start/social-login/) for setup instructions.

### Phone Login

The **Phone Login** feature lets users register and log in using their phone number, with verification by OTP. It is particularly suited for mobile-first experiences.

Refer to the [Phone Login configuration guide](https://www.loginradius.com/docs/authentication/tutorial/phone-login/) for setup instructions.

### One Touch Login

**One Touch Login** allows customers to log in via an email or phone OTP without needing a password. It's ideal for devices like IoT and Smart TV apps.

Refer to the [One Touch Login configuration guide](https://www.loginradius.com/docs/authentication/tutorial/one-touch-login/) for setup instructions.

### Passwordless Login

The **Passwordless Login** feature enables registered users to log in via a link or OTP sent to their email or phone, reducing password management hassles.

Refer to the [Passwordless Login configuration guide](https://www.loginradius.com/docs/authentication/tutorial/passwordless-login/) for setup instructions.

### Smart Login

**Smart Login** supports password-free logins on devices like smart TVs, allowing users to authenticate on one device via another.

Refer to the [Smart Login configuration guide](https://www.loginradius.com/docs/authentication/tutorial/smart-login/) for setup instructions.

### Standard and Phone Login Overview

The **Standard and Phone Login** workflow lets users log in with either phone or email. Contact the [LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) to enable this workflow.
