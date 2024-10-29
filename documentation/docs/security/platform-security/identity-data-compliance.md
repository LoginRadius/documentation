# Identity Data Compliance

---

LoginRadius is the leading cloud-based provider of Customer Identity and Access Management. We are committed to providing the highest level of security for user data delivery, storage, and management through our platform. Our system is built on a modern cloud infrastructure to provide the best uptime availability and overall performance in the market.

Our platform also provides the best-in-class data security both in transit and at rest. This document provides an overview of the security measures and compliance levels that we have developed over the past five years and currently have in place.

## End-User Security and Privacy Controls

An important aspect of our security features is the emphasis on the end-user security to prevent any harmful and malicious activity and to ensure that the user profiles and data are protected from fraudulent activity. We have security measure in place for both the website end-users, as well as for the safety of your LoginRadius account and access.

### Brute Force Prevention (and Dictionary Attack Prevention)

LoginRadius has multiple built-in features that can help to mitigate automated form submissions that attempt to brute force their way into an account:

1. **Built-in ReCaptcha Support**- Google ReCaptcha can be enabled on your forms to prevent automated submissions. This supports all of the standard Google ReCaptcha customizations, such as localization and the Invisible ReCaptcha. You can setup Recaptcha for your account with this [document](https://www.loginradius.com/docs/api/v2/getting-started/introduction/).
2. **Automated Lockout**- Your LoginRadius forms can be configured to lockout or prompt users to go through additional verification (login disable, security question, ReCaptcha, etc.) if the system identifies multiple duplicate requests on a given form.
3. **Security Question**: If a user enters an invalid answer to the security question a specific number of times, they will be blocked from the account. See details on our security questions in our [API documentation](https://www.loginradius.com/docs/api/v2/user-registration/get-security-question-by-accesstoken)
4. **Input validation**: LoginRadius supports, from both client-side as well as server-side, strong validation on all inputs to ensure the consistency of the data or information that is being entered. For example, LoginRadius makes sure that email addresses provided are RFC compliant and prevents insecure inputs, such as script injection. Check out this [document](https://www.loginradius.com/docs/api/v2/user-registration/advanced-customization) on some of the additional validations you can apply to your interfaces.

### Password Management

There are multiple ways in which LoginRadius can improve the security of your end users through the following supported password management settings:

1. **Password Expiration**- Your LoginRadius account can be configured to periodically request an updated password from your end users. The time period for this is fully customizable and it would trigger a password update request once the configured increment has elapsed.
2. **Password History**- You can restrict the usage of previously used passwords and can customize how many previous passwords would be remembered and disallowed.
3. **Password Complexity**- You can set both client-side and server-side complexity requirements that would force your users to comply with the configured complexity requirements.
4. **Security Question during Password Reset**- LoginRadius allow you to configure the security questions feature for resetting passwords in the case of forgot a password. These security questions are highly secure because the stored answers are hashed. As well, if a user fails to enter the correct answer after a specific number of attempts, the user is blocked and only the site admin can unblock the user. Please see the following [link](https://www.loginradius.com/docs/platform-features-overview/user-security/password-management) for more details on LoginRadius Password Management.

### Multi-Factor Authentication (MFA)

LoginRadius supports configuring a second layer of security for your end user accounts. This requires users to verify their access either through SMS messaging or through an authenticator app. We also support the backup code feature for providing access in case the user loses the device that is configured for MFA. The triggers for this feature can be controlled to provide end users with the option to enable this feature for themselves, or you can choose for this feature to be a mandatory requirement for your user base.

For more details on how MFA works see this [document](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/multi-factor-auth)

### Access Restrictions

LoginRadius provides the ability to configure domain or individual level access restrictions. The LoginRadius platform can be configured to either allow or prevent users to register with specified domains. This enables you to prevent authentication or registration for specific domains or for a given email address. Users who have the domain as part of their email address or whose emails are included in the restricted list will not be able to authenticate via LoginRadius.

### Session Management

The LoginRadius Platform maintains secure session management for both server and client-side. We utilize the OAuth 2.0 protocol standard for the server-side session management and handle it by using timed access tokens. For client-side sessions, we utilize the local browser storage and browser cookies. Our services do not store critical information in cookies as we only store the reference IDs that are non-identifiable. These IDs are also encrypted, so they are tamper-proof with the hashing of the encrypted values.

### API level authentication

1. **API Key and Secret**: To perform operations with admin-related APIs, LoginRadius supports the API key and secret combination authentication for securing the API so that only the site owner or authorized users of the LoginRadius site can access the APIs. We also provide the ability to generate additional secrets with specific permissions. Therefore, in the case where multiple people need access to the site, you will provide each team member with their own respective secrets. You will then be able to revoke this if required. See this [document](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/) on how to get access to your API key and Secret

2. **API Key and Access Token**: To perform operations for the end user's session related API, LoginRadius support API key and Access Token (limited lifetime) authentication combination to secure APIs. See this [document](https://www.loginradius.com/docs/development/configuration/loginradius-tokens) for more details on the tokens that are used in the platform.

### Privacy Policy Acceptance

Additional opt-ins can be displayed to your end-users and LoginRadius supports both out-of-the-box privacy policy and email subscription opt-ins. You can also configure your own custom opt-in requirements or fields to be displayed to your users if the default opt-in fields do not suit your requirements.

### Self Managed Account APIs

LoginRadius provides a full suite of [account management APIs](https://www.loginradius.com/docs/api) that allow your admins to facilitate any requests. These APIs can also be integrated into a self-service management flow and displayed directly on your user's profile page. LoginRadius also offers a [pre-built management suite](https://www.loginradius.com/docs/profile-management/customer-management) that can be accessed by your customer success or administrators via the LoginRadius Admin Console interface. This suite of tools allows you to handle everything from user creation, user updates, to user deletion.

## End-user Management by Administrator

LoginRadius provides more than a simple  for your data; we provide powerful tools with which you can use to manage and decide what you would like to do with the data. Essentially, now that we have captured the required data, we can help you with managing the existing users, retrieving and exporting their information, and more.

### Administration User Data
LoginRadius streamlines your Administrator/Customer Support interactions. We offer a complete out-of-the-box customer management console via our LoginRadius Admin Console, as well as a direct API console via our documentation. All of the user management features can also be directly integrated into your existing Admin Console via our APIs.

### Export User Data
You can export your data and LoginRadius provides you with multiple methods to access and export this data. You can request a CSV or JSON formatted dump of your user data on demand or scheduled basis from the LoginRadius Admin Console, or you can directly access the data via API to generate your own exports. All exports are password protected and with an expiration period.

### Real-time User Activity
Keeping your systems in sync when using multiple platforms can often be a tedious process. LoginRadius simplifies this by giving you multiple means of feeding the data to your platforms in real time. You can register a service with LoginRadius and get real-time feeds of your user data using the LoginRadius webhooks or you can directly capture and pass your user data around as it is utilized in your application by using our APIs.

### Block/Lock and Delete User
Managing your users is not just about the user data and often involves moderating your users. LoginRadius supports a flexible moderation platform that allows you to control and restrict access for users. You have full control of the criteria and actions taken against the users and can block or delete users as per your requirements.

## Internal Employee Administration

LoginRadius uses Single Sign-On (SSO) federation for employee login, so all of the security features we provide for your end-users are also available for employees who are managing the LoginRadius account.

### Single Sign-on with Internal IAM

LoginRadius supports all major industry standard federation providers, allowing you to make sure you have a seamless authentication flow regardless of the platform that is providing the Identity. Quickly get your admins or customer support team on track in using the LoginRadius management suite by tying it directly to an active directory or any platform that you are currently using to maintain internal users.

### Roles and Permissions

Control access to your LoginRadius account and Admin Console by setting up your admins with specific access permissions so your team has access to the sections that are relevant to them.

### Multi-Factor Authentication (MFA)

LoginRadius supports the same extended access permission that we allow you to assign to your end users with our LoginRadius Admin Console. This allows you to add additional security to your critical systems and forces the users to go through the second factor via SMS, authenticator app, or backup codes.

### Audit Logs

You can monitor your team’s usage of the LoginRadius account and any configurations changes or actions that are being made in real time. This allows you to track all changes and quickly revert any mistakes.

## User Registration Compliance

### COPPA Compliance
COPPA ([Children's Online Privacy Protection Act](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa)) is the US act that applies to websites and online services operated for commercial purposes that are either directed towards children under 13 or have actual knowledge that children under 13 are providing information online. LoginRadius supports full COPPA client workflows, which allows you to provide age requests/verification, block non-compliant users, and manage family-based user accounts where the parents/guardians can authorize access for minors.

Please see more information about COPPA [here](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa).

### WCAG Compliance

WCAG ([Web Content Accessibility Guidelines](https://www.w3.org/standards/techs/wcag)) are part of a series of web accessibility guidelines that specify how to make content accessible, primarily for people with disabilities - but this also for all user agents, including highly limited devices, such as mobile phones.

LoginRadius Platform supports WCAG 2.0 and allows customers to customize all aspects of the user interface and the user experience of their web applications. We provide simple solutions to both style and customization of both the UI and UX in all aspects of your LoginRadius interfaces. LoginRadius provides interface boilerplate templates that you can extend and modify to suit your brand and user experience requirements.

Please see more about WCAG [here](https://www.w3.org/TR/2008/REC-WCAG20-20081211/).
