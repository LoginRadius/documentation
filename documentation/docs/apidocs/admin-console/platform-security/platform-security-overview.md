# Platform Security Overview

Platform security includes the different solutions provided by LoginRadius to secure your platform. This includes enabling CAPTCHA services, managing token lifetime, configuring Multi-Factor Authentication, and more. These authentication features are designed to protect your web properties during registration and login, ensuring the security of your customers' accounts and identities.

## Auth Security

You can set up authentication security settings directly from the Auth Security section of the Admin Console to secure your site. CAPTCHA settings enable you to add an extra layer of security to your registration forms using [Google reCAPTCHA](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/captcha-providers/google-recaptcha-configuration) or [QQ Tencent CAPTCHA](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/captcha-providers/tencent-captcha-configuration). You can also implement multiple APIs for bot protection by triggering CAPTCHA at various stages of authentication after registration. In addition to safeguarding your customers' data from bots, you can protect their accounts by activating Brute Force Lockout, which limits account access after a certain number of unsuccessful login attempts. LoginRadius also gives you the ability to whitelist or blacklist registrations or restrict access to your site from specific domains and email addresses.

By implementing IP Access Control, you can secure your platform by permitting or denying access to the LoginRadius APIs from specific IP addresses, in addition to safeguarding your customer data.

See how to enable these authentication settings [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/auth-security-configuration).

## Password Policy

The Password Policy feature enables you to adhere to security best practices by automating password changes, specifying the number of previous passwords that cannot be reused, adding security questions, and configuring password complexity.

See how to enable and configure these settings [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/password-policy).

## Multi-Factor Authentication

Multi-factor authentication enhances account security by requiring an additional authentication step during login. LoginRadius offers the choice of using either an SMS passcode or Google Authenticator for MFA.

See how to enable and configure these settings [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/multi-factor-auth).

## Session Management

Managing your site's access tokens is crucial for protecting your customer accounts after they log in. An access token lifetime refers to the duration for which a customer stays logged in to your site before the token expires, requiring the customer to log in again. You can check the access token lifetime directly from the Admin Console. Moreover, you have the option to enable Force Logout, which causes all active customer sessions to expire after a password change or reset. Additionally, you can enable the Remember Me feature, allowing customers to stay logged in even after they close their browser until the access token expires.

See how to view and enable these settings [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/session-management).

## Regulations

LoginRadius ensures your platform's security and compliance with various standards and regulations, such as GDPR and COPPA, to meet the needs of highly security-sensitive organizations.

See the regulations LoginRadius is compliant with [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/regulations).
