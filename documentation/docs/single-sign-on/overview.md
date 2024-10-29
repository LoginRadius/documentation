## SSO Introduction

Single Sign-On (SSO) refers to the authentication process that allows your customers to access multiple applications with a single set of login credentials and an active login session. The following are the two examples of the Single Sign-On environments:

- Where **Customers** access multiple applications of the same provider. Customers dont need to create and remember separate credentials for each application; they log in once and access various applications of that provider. **Example:** Google, Youtube, Gmail, etc. 

- Where **Employees** access numerous applications daily. Employees dont need to create and remember separate credentials for each application; they can log in once and access various applications used in the organization. **Example:** HR Portal, Resource Portal, Organizational Account, etc.


> **Note:** SSO can facilitate the following for a developer:
> - Users to log in across multiple applications without re-promoting them to log in
> - Users to log in to all their SaaS applications by only typing the credentials once
> - Aligning SaaS applications with organizational IAM policies.

> With SSO implementation, the SLO (Single Logout) is also required, i.e. if a user has logged out from one application, they should be logged out from other linked applications too.

The following is a representation of the SSO scenario:
![enter image description here](https://apidocs.lrcontent.com/images/0_0_197095f4b96eed3fc00.10890318.png "SSO overviewchart")

1. User lands on a.com to log in, and clicking the login link redirects the user to the Identity Provider page. 

2. On the Identity Provider page, the user enters the login credentials and gets logged into the a.com application.

3. Later, the user lands on the b.com to log in, clicking the login link redirects the user to the Identity Provider page.

4. Since the user is already logged in on the Identity Profile, the user is automatically logged into the b.com application.

Where a.com and b.com applications are the service providers (SP). Since we have been using the Identity Provider and Service Provider terms, let’s have a quick look at their definitions:
- **Service Provider:** The user visits this application for service. For example, eCommerce application. In the SSO ecosystem, the SP is considered a Slave.

- **Identity Provider:** The service provider receives the user authentication status from the Identity Provider. In the SSO ecosystem, the IDP is considered a Master.

Taking the **LoginRadius Identity Platform** into consideration, if you have multiple websites and want to establish SSO and SLO across them, these websites will act as Service Providers, and LoginRadius will act as Identity Provider.

The **LoginRadius Identity Platform** allows you to implement SSO in the following ways:

## Web SSO

Web SSO is a method of browser-based session management that utilizes browser storage mechanisms like sessionStorage, localStorage, cookies to maintain the user’s session across your applications. When the Single Sign-on is required between two or more web applications and LoginRadius Identity Platform acts as an Identity Provider. 

A centralized domain managed by LoginRadius IDX is utilized to perform the authentication. When requested, this centralized domain shares the session with authorized applications. For more details on Web SSO refer to our documentation [here](https://www.loginradius.com/docs/single-sign-on/tutorial/web-sso/overview/).

## Mobile SSO

Mobile SSO works by storing the LoginRadius access token in a shared session, either shared preferences in Android or keychain in iOS. It allows you to identify a currently active session and access the current sessions’ user data to initialize your user account in each linked app.

When the Single Sign-on is required between two or more mobile apps and LoginRadius Identity Platform acts as an Identity Provider. For more details on Mobile SSO refer to our documentation [here](https://www.loginradius.com/docs/single-sign-on/tutorial/mobile-sso/overview/).


## Federated SSO
 When the Single Sign-on is required between two or more web applications and LoginRadius Identity Platform either acts as Identity Provider or Service Provider. This comes handy while implementing SSO with third-party applications. For interaction with third-party web applications, LoginRadius Identity Platform supports SAML, JWT, OAuth, and OpenID SSO protocols.

Accept tokens and identities issued by niche identity providers of your choice and allow your customers to authenticate on your website for seamless transactions. Identity providers can be your organizational partners who already issue and hold digital identities/tokens/tickets. With LoginRadius **[Federated SSO](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/overview/)**, your business can leverage that identity and make authentication seamless for your customers.

| Domo                                                                                                                | Ms SharePoint                                                                                                        | Atlassian Jira                                                                                                        | Salesforce                                                                                                             | OAuth2                                                                                                                 | JWT                                                                                                                   | OIDC                                                                                                                  | SAML                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| ![Domo](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-56-39-288_32938184465c291d76f0821.37660252.png)    | ![Ms SharePoint](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-55-29-694_209779525965c2934f4be3f5.50282141.png) | ![Atlassian Jira](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-57-00-434_19216383665c29815230c05.00195915.png) | ![Salesforce](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-56-16-320_200777099665c3a4c8433ec7.65924437.png) | ![OAuth2](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-54-44-045_89379538965c3a6592c7098.73391788.png) | ![JWT](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-53-44-600_165137682965c3a6872e2fe2.15133628.png)    | ![OIDC](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-55-02-730_26154718665c3a81c41a973.69079950.png)     | ![SAML](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-55-55-905_161111230465c3a8c594bd34.39075734.png)    |
| [Domo](https://www.loginradius.com/docs/single-sign-on/concept/saml-providers/domo/)                                 | [Ms SharePoint](https://www.loginradius.com/docs/single-sign-on/concept/saml-providers/SharePoint/)                | [Atlassian Jira](https://www.loginradius.com/docs/single-sign-on/concept/saml-providers/jira/)                      | [Salesforce](https://www.loginradius.com/docs/single-sign-on/concept/saml-providers/salesforce/)                       | [OAuth2](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/oauth-2-0/oauth-2-0-overview/)      | [JWT](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/jwt-login/jwt-login-overview/)           | [OIDC](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/openid-connect/openid-connect-overview/) | [SAML](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/saml/overview/)                          |


## Custom IDPs

This can be understood as Social Login. You can use it to configure a designed Social Login provider for your web application(s), which is not available in the default social login providers list by the LoginRadius Identity Platform.

Custom OAuth Provider is the most implemented protocol by the customers to set up a custom Identity Provider. LoginRadius provides a wide range of social providers for social login. **[Custom Identity providers](https://www.loginradius.com/docs/single-sign-on/tutorial/custom-identity-providers/overview/)** are used, where customers requirement is not getting fulfilled by the provided range of social providers in LoginRadius


| Doximity                                                                                                               | Alipay                                                                                                                 | WeChat                                                                                                                 | OAuth2                                                                                                                   | JWT                                                                                                                    | SAML                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| ![Doximity](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-57-17-420_15645657365c52276aa2692.23878868.png)   | ![Alipay](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-52-58-315_150129219565c5229e7e6a58.90587597.png)   | ![WeChat](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-52-14-666_89285097165c5232fc834e5.37839813.png)    | ![OAuth2](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-54-44-045_89379538965c3a6592c7098.73391788.png)    | ![JWT](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-53-44-600_165137682965c3a6872e2fe2.15133628.png)     | ![SAML](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-55-55-905_161111230465c3a8c594bd34.39075734.png)    |
| [Doximity](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/doximity/)                      | [Alipay](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/alipay/)                          | [WeChat](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/wechat/)                          | [OAuth2](https://www.loginradius.com/docs/single-sign-on/tutorial/custom-identity-providers/custom-oauth-provider/)    | [JWT](https://www.loginradius.com/docs/single-sign-on/tutorial/custom-identity-providers/custom-jwt-provider/)        | [SAML](https://www.loginradius.com/docs/single-sign-on/tutorial/custom-identity-providers/custom-saml-provider/)      |


## SSO Connectors

There are some third-party applications that do not support industry-standard federated SSO methods like SAML, Oauth/OIDC, JWT, etc. and provide their own mechanism to create a Single Sign-On workflow for identity provider applications. 

LoginRadius provides out of the box SSO Connector solutions to create a Single Sign-on user experience between LoginRadius and these applications by leveraging these mechanisms. For more details on Password Delegation refer to our documentation [here](https://www.loginradius.com/docs/api/v2/single-sign-on/sso-connector/overview/).




| Shopify                                                                                                                   | Big Commerce                                                                                                                 | Perfect Mind                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| ![Shopify](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-50-18-387_7737014465c5257665c001.57956613.png)        | ![Big Commerce](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-54-22-084_63846301965c525951630e4.90044952.png)    | ![Perfect Mind](https://apidocs.lrcontent.com/images/Picsart_24-02-05_02-53-19-422_95928217065c525bfe154d5.86587977.png)  |
| [Shopify](https://www.loginradius.com/docs/libraries/turn-key-plugins/shopify-multipass-integration/)                     | [Big Commerce](https://www.loginradius.com/docs/libraries/turn-key-plugins/bigcommerce-stencil-plugin/)                      | [Perfect Mind](https://www.loginradius.com/docs/libraries/turn-key-plugins/perfectmind/)                                  |


