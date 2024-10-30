## LoginRadius Integration with Sitecore 


## Overview
LoginRadius and Sitecore: LoginRadius Identity Platform is the foundation for your digital customer identity, and has the capacity to integrate with many different third-party platforms, including Sitecore marketing platform. The LoginRadius integration provides full cloud-based user management, allowing the customers to register to your site using social network identities such as Facebook, Twitter, LinkedIn, Google, and more. We also offer plugins for integrating your site to social networks through registration, login, sharing, comments, ratings, reviews, and reactions. LoginRadius integration with Sitecore supports the Sitecore Experience Database (xDB).

## LoginRadius 
LoginRadius Identity Platform helps companies securely manage customer identities and data to deliver a unified customer experience.


Elevate the digital marketing and content management experience of the Sitecore platform by using the LoginRadius Identity Platform to facilitate customer login through standard login, social login, phone login, anonymous login, smart login, and one-touch login process. The sign-up, sign-in, and password management throughout the website will be managed using the LoginRadius Identity Platform. All features and user interfaces are fully configurable, require little time to install, and can be controlled from the [Admin Console](https://adminconsole.loginradius.com/). LoginRadius flows are explained as following:


## LoginRadius Identity Flow

The following diagram shows a quick overview of the LoginRadius User Registration System.


**Registration**

![enter image description here](https://apidocs.lrcontent.com/images/registration_90465d30eac3c77f21.35760726.png "enter image title here")

## Integration with Sitecore

The fields in the user registration form and the social providers to be used while signing-in can be configured in the LoginRadius user account.

**a. User Registration:** LoginRadius will replace the registration page provided by Sitecore and integrate with a fully customizable user registration including the Registration form, Social Login, Forgot Password, and Traditional Login. The registration page can also be a pop-up. The user registration frame shown below can be customized by LoginRadius to include lots of other fields that the customer may want to include. The javascript used to create the registration interface includes options to customize the UX and user registration flow.


**b. Sign In:** The following login page can be modified and customized based on the requirement to include custom theme and layout.  The following screen will include an additional frame for social login. The sign-in page can also be configured as a pop-up. This will be done by including the JavaScript (JS) code in the sign-in page.

![sitecore signin](https://apidocs.lrcontent.com/images/sitecore-login_54605d32cc69e16cf1.31996923.png "sitecore signin")


**c. Forgot password and change password:** Forgot password and change password features can also be provided by LoginRadius and the interfaces can be customized.


## Unified profile with Single Sign-on (SSO)
The capabilities explained above along with features such as single sign-on across multiple web properties will help the customer to create a unified profile of its users.

SSO (Single Sign-on) API will be implemented using JavaScript (JS). LoginRadius SSO JS API will be added to the default template of the Websphere JSP files. The JS API will automatically handle the auto-login based on LoginRadius Access Token and related configuration is done via the LoginRadius system. 

The following flow chart helps in explaining the SSO functionality provided by LoginRadius.

![flow](https://apidocs.lrcontent.com/images/4_264965d304d77646723.29675722.png)

## Installation and Implementation

> **Prerequisites:**
Before installing the LoginRadius platform for Sitecore package module, make sure that:
> - The Sitecore package is installed. 
>- You have a LoginRadius API Key.
>- You have a  LoginRadius API Secret.

> **Note:** LoginRadius API Key and Secret will be used to access the user data stored in the LoginRadius database

In this section, we will be providing some details about the various capabilities of the LoginRadius platform that can help you achieve your business goals.

### 1. Authentication Flow

Using LoginRadius CIAM, you can achieve different Auth workflows like Email Registration, Phone Registration, Social Registration, Passwordless login, Username Registration, Username with duplicate Emails for  SAP Commerce storefront. This will give freedom to you to choose the Auth workflow as per your requirement.  In LoginRadius Admin Console, navigate to [**Platform Configuration> Identity Workflow > Authentication Workflow > Account Workflow**](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/authentication-workflow/account-workflow) and the following screen appears to show the available authentication workflow:


![Account Workflow](https://apidocs.lrcontent.com/images/Workflows_96425e91f6ecac5f89.51528349.png "Account Workflow")



### 2. Login methods

LoginRadius CIAM provides various methods of login

- [Standard Login](https://www.loginradius.com/authentication/quick-start/standard-login/)
- [Phone Login](https://www.loginradius.com/authentication/tutorial/phone-login/)
- [Social Login](https://www.loginradius.com/authentication/quick-start/social-login/)
- [Smart Login](https://www.loginradius.com/authentication/tutorial/smart-login/)
- [One Touch Login](https://www.loginradius.com/authentication/tutorial/one-touch-login/)

### 3. Data Sync

Loginradius CIAM provides the feature of syncing the data to 3rd party applications using webhook. WebHooks allow you to build or set up integrations which subscribe to certain events on LoginRadius. When one of these events is triggered, LoginRadius will automatically send a POST payload over HTTPs to the WebHook's configured URL in real time. WebHooks can be used to update an external tracker or update a backup mirror. For more information about webhook you can refer to this [**document** ](https://www.loginradius.com/docs/api/v2/integrations/webhooks/overview/).

### 4. Customer insights
Loginradius provides useful charts and analytic tools to view and measure the overall performance of your site in terms of customer registration and login. The information is aggregated and categorized into identity analytics, provider analytics, login analytics, and comparative analysis.  In LoginRadius Admin Console, navigate to [**Insights > Identity Analytics >  Customer Stats**](https://adminconsole.loginradius.com/insights/identity-analytics/customer-stats) and the following screen appears to show the available insight options:

![enter image description here](https://apidocs.lrcontent.com/images/a_142475f09cc8b179c12.49070581.png "enter image title here")


### 5. Set Up Social Login
To use the extension in Social Login mode, you need to create a Social Login Component to use on your website. The LoginRadius Social Login component can be inserted in any secure (HTTPS) page on your website, where it will display as social network buttons (To configure the social provider, you can refer to our social provider) [document](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/configure-social-apps/).
 
![enter image description here](https://apidocs.lrcontent.com/images/6_77445d304dbf7bf257.08806666.png "enter image title here")

### 6. Consent Management
LoginRadius Consent Management feature allows you to build custom consent forms. In addition, this feature makes it easy to modify existing consents prompted to your customers or apply new ones retroactively. Each consent you prompt can be enforced as either Optional or Strict depending on the workflow requirements. Consent Management helps your business adhere to strict regulations such as GDPR. GDPR outlines that the information taken from the customer must be explicit, unambiguous, well documented, freely given, and easily withdrawn. To have more information around consent management, you can refer to [this document](https://www.loginradius.com/docs/governance/customer-profiling/consent-management).

### 7. Field mapping
The following Sitecore fields are mapped by default from LoginRadius to Sitecore on registration, login, and profile update.
- UID 
- First Name


Apart from these 2 fields, we can map additional necessary fields but for that, we need to use LoginRadius field mapping feature


### 8. Purchase Synchronization

After activating LoginRadius Commerce Cloud Extension, LoginRadius custom object should be enabled. Custom Object is a schema-less object that can be attached to a specific account. It can have a dynamic storage container that is updated with additional fields or data formats on the fly. A Custom Object should be used if you are looking to store large amounts of customer data and the data can’t be formatted in a structured format because the data format could be different for each customer. You can find more details regarding the custom object in [this document](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/overview/).


**An example of a Custom Object’s schema:**
```
[
  {
    "Id": "5xxxxxxxxxxxxxxxxxf",
    "IsActive": true,
    "DateCreated": "2015-03-03T21:10:04.83Z",
    "DateModified": "2015-03-03T21:10:04.83Z",
    "IsDeleted": false,
    "Uid": "5xxxxxxxxxxxxxxxxxa",
    "CustomObject": {
      "Test":[
        {
          "field1": "Data3",
          "field2": "Data4",
          "field3": "Data5"
        },
        {
          "field11": "Data31",
          "field21": "Data41",
          "field31": "Data51"
        }
      ]
    }
  }
]
```
## Settings

**General:** The server clock must be set to GMT+0, otherwise, errors and unexpected behaviors may occur. We recommend using the NTP daemon to ensure that the server time is accurate.