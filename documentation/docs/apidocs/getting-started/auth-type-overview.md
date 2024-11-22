#Auth Type Overview

This document covers the various authentication process supported by LoginRadius. Customer register accounts via the respective authentication process and able to login with the same Authentication process. Following is the Authentication process that customer can leverage:

1. Email Authentication
2. Phone Authentication
3. Username Authentication
4. Social Authentication

##Email Authentication

Email Authentication is the process of registering an account via Email address. While registering the account via the Email Authentication process it is mandatory to provide an Email address and later on it will be required during Login as well. By default the Email Authentication process is enabled in your environment. You can check your configurations from the [Admin Console](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema) if you would like more details regarding this you can refer to the [Standard Login](https://www.loginradius.com/docs/api/v2/dashboard/platform-configuration/standard-login#standardfieldsbasic1)
document.

##Phone Authentication

Phone Authentication is the process of registering an account using the customer’s Phone number. LoginRadius provides mandatory and optional flows for the Phone Authentication process. If you decide to make the flow mandatory, the phone number will be required at the time of Login. You can configure Phone Login from the [Admin Console](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/phone-login/otp-settings), for more details regarding this refer to the [Phone Login Configuration](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/phone-login-configuration/#phone-login-configuration)
document.

##Username Authentication

Username Authentication is the process in which customers are allowed to register an account by using a Username, it is similar to the Phone Authentication process in that, there is also both mandatory and optional flows. When using Username Authentication customers are not required to remember their email address to Login as they will be using their Username. If the flow is configured as mandatory then its required for the customers to provide a username during Registration.

> **Note:** You can add the username field on the registration form via the [Admin Console's](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema) [Advanced Options](https://www.loginradius.com/docs/api/v2/dashboard/platform-configuration/standard-login#advancedconfiguration7)
> . For more details refer to the [UserName Overview](https://www.loginradius.com/docs/api/v2/customer-identity-api/overview#usernamelogin3)
> document.

##Social Authentication

Social authentication is the process in which your customers can Login from their existing social accounts by skipping the registration form. Social Authentication is the smoothest and most offhand process for registration, this process allows you to bypass the long process of filling out the registration form and your customers can directly Login with their existing social provider accounts like Facebook, Twitter, LinkedIn, etc. We provide the steps to easily configure 23 Social Providers from the [Admin Console](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/social-login/social-providers), follow our [Configure Social ID Provider](https://www.loginradius.com/docs/api/v2/dashboard/social-provider/configure-social-apps)
document for more details.You can also create [custom social providers](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/custom-idps/oauth-provider) if they aren't on the list via the Admin Console's OAuth Provider.

##Use Cases

###Email Authentication

- Email Authentication is mostly used for business purposes, as many businesses rely on email marketing to send their clients notifications, promotions, and updates. In the mandatory verification flow, Email Authentication helps you verify that the associated emails actually belong to the customer.
- Widely used in corporate sectors where the email addresses are domain specific.

###Phone Authentication

- Phone authentication is useful in mobile apps, for example if the customer wants to register in a mobile app then it will be evident to register via Phone number and customers don't have to provide the email address at the time of registration.
- It’s beneficial for those customers who do not actively use/maintain their email accounts.
- If you are concerned about forged accounts, phone authentication flow can be leveraged to minimize forgery.
- Feasible for public websites i.e. any food delivery app, cab services, etc.

###Social Authentication

Social Login is the most frequently used Authentication process on e-commerce websites. The customer can directly Login via their existing Social providers account by skipping the lengthy registration form process and make their orders. The social Authentication process is fairly easy to use as the customer does not need to remember their Email credentials for multiple apps/websites.

###UserName Authentication

- UserName Authentication is mostly used where a customer is identified by their UserNames instead of their real name or any other Identities.
- You can allow 1 customer to register multiple accounts with the same email.
- The Customer will not have to remember which email they provided during registration.
