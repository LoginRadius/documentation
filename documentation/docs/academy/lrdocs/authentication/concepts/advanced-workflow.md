# Advanced Workflow

LoginRadius offers advanced settings for registration security which can be configured on your site, which include Case Sensitive Username, Secure Cookie, and Server Side Validation. You can get any of them enabled for your site by contacting [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

## Case Sensitive Username

Navigate to [Platform Configuration > Identity Workflow > Authentication Workflow > Advanced Workflow](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/authentication-workflow/advanced-workflow). The following screen will appear.

![Advanced Workflow - Case-sensitive Username](https:/https://apidocs.lrcontent.com/images/Advanced-Workflow---Case-sensitive-Username_239616281ff38236492.30569322.png "Advanced Workflow - Case-sensitive Username")

If this feature is enabled, then the username will be sensitive to the capitalization of letters. Case sensitive username is an easy way to increase registration/login security. For example, Username, UserName, username, USERNAME will be considered as different consumers on the same site.

## Social login via ping API

Navigate to [Platform Configuration > Identity Workflow > Authentication Workflow > Advanced Workflow](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/authentication-workflow/advanced-workflow). The following screen will appear.

![Advanced Workflow - Social login via ping API](https:/https://apidocs.lrcontent.com/images/Advanced-Workflow---Social-login-via-ping-API_325496281ffaec7daf5.68545325.png "Advanced Workflow - Social login via ping API")

If this feature is enabled, then in the social login workflow, after successful authentication, the access token is captured via Ping API on the parent window. Kindly refer to [Social Login with Ping API](https://api/v2/customer-identity-api/social-login/getting-started/#socialloginwithpingapi3) document for more information.
