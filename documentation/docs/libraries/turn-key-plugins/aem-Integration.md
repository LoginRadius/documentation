
# LoginRadius Integration with AEM

## Overview

LoginRadius Identity Platform is the foundation for your digital customer identity and has the capacity to integrate with many different third-party platforms. Integration with LoginRadius Identity platform makes it easy to manage your marketing content and assets using Adobe Experience Manager (AEM), which is a comprehensive content management solution for building websites, mobile apps and forms.

The LoginRadius Plugin for Adobe Experience Manager enables you to perform a social login and traditional login to your AEM sites quickly and easily, as well as leverage customer profile data for content personalization and optimization.


## Features

The LoginRadius module enables the integration of social login and standard login/Registration with websites and apps to be built and maintained using AEM. It means connecting your AEM sites to LoginRadius database, for registration, login and profile management, and providing customer management tools for the administrator tasks.

The LoginRadius plugin synchronizes the entire offering of profile and social data about a site visitor into AEM, by automatically syncing identity data from LoginRadius to AEM. The information includes complex data fields, such as a customer's list of Likes or Favorites.



### LoginRadius Identity Flows

The following diagram shows a quick overview of the 
LoginRadius User Registration System.

**Registration flow**
The following is a sequence diagram for Registration flow in LoginRadius Identity Platform:

![enter image description here](https://apidocs.lrcontent.com/images/registration_90465d30eac3c77f21.35760726.png "enter image title here")

- **Login and Social Login**
The following is the  sequence diagram for Login and Social Login flow in LoginRadius Identity Platform:

![Login Screen](https://apidocs.lrcontent.com/images/Login_179075d30eb9dc39829.00779866.png)                                    

- **Forgot password**

The following is a sequence diagram for Forgot Password flow in LoginRadius Identity Platform:

![Forgot Password Screen](https://apidocs.lrcontent.com/images/password_66865d30ec4fc4d680.06199639.png)

### Integration with AEM
The fields in the user registration form and the social providers to be used while signing-in can be configured in LoginRadius customer account.


**User Registration**:LoginRadius will replace the registration page provided by AEM and integrate with a fully customizable user registration including the Registration form, Social Login, Forgot Password and Traditional Login. The registration page can also be a pop-up. The user registration frame can be customized by LoginRadius to include lots of other fields that the customer may want to include. The javascript used to create the registration interface includes options to customize the UX and user registration flow.

**Sign-in**: The Login page can be modified and customized based on the requirement to include custom theme and layout.  The following screen will include an additional frame for social login. The sign-in page can also be configured as a pop-up.
 This can be achieved by using JavaScript (JS) code in the sign-in page

**Forgot password and change password**: Forgot password and change password features are also be provided by LoginRadius and the interfaces can be customized by using JavaScript.

## Unified profile with Single Sign-on (SSO)    
The capabilities explained above along with features such as single sign-on across multiple web properties will help you to create a unified profile of customers. This can be used to provide personalized content to the customers, thus enhancing the customer experience and improving engagement. The unified profile can be used by marketers to trigger personalized marketing content.

SSO (Single Sign-on) API will be implemented using JavaScript (JS). LoginRadius SSO JS API will be added to the default template of the Websphere JSP files. The JS API will automatically handle the auto-login based on LoginRadius Access Token and a unique configuration is done via the LoginRadius system.

Here is the flow for the Single Sign-on (SSO) process:

![Image Description](https://apidocs.lrcontent.com/images/4_264965d304d77646723.29675722.png)
                            
##Installation and Implementation 

>**Pre-requisites:** Before installing the LoginRadius platform for AEM, make sure that:
> - You have a [LoginRadius API Key and API Secret](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#gettingyourapikeyandsecret0).

> **Note:** LoginRadius API Key and API Secret will be used to access the customer data stored in the LoginRadius database



##Authentication Flow 

Using LoginRadius CIAM, you can achieve different Auth workflows like Email Registration, Phone Registration, Social Registration, Passwordless login, Username Registration, Username with duplicate Emails for  SAP Commerce storefront. This will give freedom to you to choose the Auth workflow as per your requirement.  In LoginRadius Admin Console, navigate to [Platform Configuration> Identity Workflow > Authentication Workflow > Account Workflow](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/authentication-workflow/account-workflow) and the following screen appears to show the available authentication workflow:

![enter image description here](https://apidocs.lrcontent.com/images/Workflows_96425e91f6ecac5f89.51528349.png "Account Workflow")


## Login methods

LoginRadius CIAM provides various methods of login :

⦁ [Standard Login](https://www.loginradius.com/authentication/quick-start/standard-login/)

⦁ [Phone Login](https://www.loginradius.com/authentication/tutorial/phone-login/)

⦁ [Social Login](https://www.loginradius.com/authentication/quick-start/social-login/)

⦁ [Smart Login](https://www.loginradius.com/authentication/tutorial/smart-login/)

⦁ [One Touch Login](https://www.loginradius.com/authentication/tutorial/one-touch-login/)

## Customer insights 

LoginRadius provides useful charts and analytic tools to view and measure the overall performance of your site, in terms of customer registration and login. The information is aggregated and categorized into identity analytics, provider analytics, login analytics and comparative analysis. For more information refer to [Customer Insight](https://www.loginradius.com/docs/customer-insights/identity-analytics/) section of our document.
In LoginRadius Admin Console, navigate to [Insights > Identity Analytics >  Customer Stats](https://adminconsole.loginradius.com/insights/identity-analytics/customer-stats) and the following screen appears to show the available insight options:


## Set Up Social Login

To use the extension in Social Login mode, you need to create a Social Login Component to use in your website. The LoginRadius Social Login component can be inserted in any secure (HTTPS) page in your website, where it will display as social network buttons (To configure the social provider, you can refer to our social provider [document](https://www.loginradius.com/authentication/quick-start/social-login/)).


![enter image description here](https://apidocs.lrcontent.com/images/6_77445d304dbf7bf257.08806666.png "enter image title here")

