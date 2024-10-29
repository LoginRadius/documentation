Password Management
====

As an identity platform, LoginRadius has multiple security features to ensure the security of each identity. The password protocols and procedures such as Password Expiration, Password History, Password Complexity, Password Strength and  Password Hashing Algorithm should be enforced to secure user identity.

LoginRadius can improve the security of your end-users with these Password Security Features:

## Periodic Password Updates
Your LoginRadius account can be configured to periodically request an updated password from your customers. This feature allows you to customize how often you want your customers to reset their passwords by triggering a password update request upon login after the configured time period has elapsed.

See [this document](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/password-policy) on how to configure Password Expiration.

## Password History
This feature allows you to configure the number of previous hashed passwords stored by LoginRadius. This mitigates the risk of password recycling by forcing customers to use a unique password not already contained in their Password History.

See [this document](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/password-policy) on how to configure Password History.

## Password Complexity

You can configure the complexity requirements of your customers' passwords by defining a Validation String in the Admin Console, which supports both regular expressions and [pre-defined keywords](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/javascript-hooks#customvalidationhook150).

See this document on how to configure [Password Complexity](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/password-policy#passwordcomplexity2).

## Password Compliance Check
To identify users who comply with newly configured password complexity requirements, this feature will set a flag on the customer's profile, which can then be used to segment users via either the Admin Console or Cloud API. Contact our Support team to enable Password Compliance Check.

See this document for further information on [Password Compliance Check](https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage#passwordcompliancecheck3).

## One-Way Hashing
This encryption protocol is customizable and can be upgraded to a more secure algorithm at any time. Upgrading the algorithm does not require users to reset their passwords. With one-way hashing, the stored information can only be matched and cannot be decrypted.

See [this document](https://www.loginradius.com/docs/security/platform-security/cryptographic-hashing-algorithms/) for further information on supported hashing algorithms.

## Unique Hashing Salt for Each Password
LoginRadius provides various password hashing options. In doing so, we allow customers to set a random salt for each password to further increase security.

See [this document](https://www.loginradius.com/docs/security/platform-security/cryptographic-hashing-algorithms/) for further information on hashing algorithms and salting.

## Multi-Factor Authentication (MFA)
LoginRadius supports setting up multiple layers of security for your end-user accounts. This will require end-users to verify their access either through SMS or through an authenticator application. LoginRadius also supports backup codes, which users can use to access their account if the device that is configured for MFA is lost. You can provide your end-users with the ability to optionally enable this feature in their accounts, or this can be a mandatory requirement for your end-users.

See this document for more details: [Multi-Factor Authentication](https://www.loginradius.com/docs/api/v2/dashboard/platform-security/multi-factor-auth)

## Password Policy default settings in LoginRadius:
* Password length and complexity: Minimum 10 character with at least one number and symbol
* Password History: Customer can't use last 5 same passwords
* Maximum password age: The maximum password age is 90 days and password expires after 90 days
* Multi-Factor Authentication: Provides the option to enable Google Authenticator or Phone SMS as a 2nd Factor Authentication for their account

Please see the [Password Policy](https://www.loginradius.com/docs/api/v2/dashboard/password-policy) documentation to configure your Password Policies.
