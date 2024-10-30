
# LoginRadius Integration with SAP Hybris

SAP Commerce Cloud is a multi-tenant, cloud-based commerce platform that empowers brands to create intelligent and buying experience.

LoginRadius Identity Platform helps companies securely manage customer identities and data to deliver a unified customer experience. LoginRadius Identity Platform is the foundation for your digital customer identity and has the capacity to integrate with many different third-party platforms, including SAP Commerce Cloud.

Based on Product Content Management, you can distribute product data consistently across all channels. By integrating your SAP ERP system, customers can place orders themselves, configure products, view prices, request services, and much more.

Elevate the e-commerce store experience of the Hybris platform by using the LoginRadius Identity Platform to facilitate user login through standard login, social login, phone login, anonymous login, smart login, and one-touch login process. The sign-up, sign-in, and password management throughout the website will be managed using the LoginRadius Identity Platform. All features and user interfaces are fully configurable, require little time to install, and can be controlled from the Admin Console.

## LoginRadius Identity Flows

This following diagram shows a quick overview of the LoginRadius User Registration System.

- **Registration**

![enter image description here](https://apidocs.lrcontent.com/images/registration_90465d30eac3c77f21.35760726.png "enter image title here")


- **Login and Social Login**

![Login Screen](https://apidocs.lrcontent.com/images/Login_179075d30eb9dc39829.00779866.png)

- **Forgot password**

![Forgot Password Screen](https://apidocs.lrcontent.com/images/password_66865d30ec4fc4d680.06199639.png)


## Integration with Hybris

This section explains how you can modify the hybris fields and forms using LoginRadius. 
The fields in the user registration form and the social providers to be used while signing-in can be configured in the LoginRadius Admin Console. In this section, we have explained the capabilities of LoginRadius.


- **User Registration**
  The LoginRadius will replace the registration page provided by Hybris and integrate with a fully customizable Registration form, Social Login, Forgot Password and Traditional Login. The registration page can also appear in a pop-up. The user registration frame shown below can be customized by LoginRadius to include lots of other fields as per your requirements. The javascript used to create the registration interface including options to customize the UX and user registration flow.

- **Sign-in**
  The following login page can be modified and customized based on your requirement to include custom theme and layout. The following screen will include an additional frame for social login. The sign-in page can also be configured as a pop-up. This will be done by including the JavaScript (JS) code on the sign-in page.

![Signin Screen](https://apidocs.lrcontent.com/images/Signin_200115d30bb87d04b12.78138420.png)



1. **New User login through Social provider**

 Upon the first time successful login via social Provider, the customer will be registered in the Websphere commerce database. In case if the mandatory fields are not captured, the following pop up will be shown to the user to capture additional mandatory information that is not provided by the social provider. The fields appearing in the pop up are configured in the Admin Console and the design is customizable. The user will be redirected to the home page after adding the information in the mandatory fields.

   ![enter image description here](https://apidocs.lrcontent.com/images/open-step_795d3447df2d2bd2.89645171.png "")

2. **Returning User**
  The returning user will be redirected to the home page after successful login.
 

- **Checkout**
  If the user is not already logged in, clicking the checkout option (as shown below) takes you back to the login page as shown above. LoginRadius provides the capability to customize the login page as described earlier. The user will be redirected to the destination page after authentication.

![Checkout Screen](https://apidocs.lrcontent.com/images/Checkout_67785d30bce183d2b9.31841168.png)

- **Forgot password and change password** 
  Forgot password and change password features are also provided by LoginRadius and their interfaces are customizable.

## Unified profile with Single Sign-on (SSO)     

The capabilities explained above along with features such as single sign-on across multiple web properties will help you to create a unified profile of your users.

SSO (Single Sign-on) API will be implemented using JavaScript (JS). LoginRadius SSO JS API will be added to the default template of the Websphere JSP files. The JS API will automatically handle the auto-login based on LoginRadius Access Token and the other configuration is done via LoginRadius AdminConsole.

The following diagram displays the flow for the Single Sign-on (SSO) process:

![Image Description](https://apidocs.lrcontent.com/images/4_264965d304d77646723.29675722.png)
         
## Installation and Implementation 

> **Prerequisites:** Before installing the LoginRadius platform for AEM, make sure that You have LoginRadius [API Key and API Secret](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/) as it will be used to access the user data stored in the LoginRadius database.

## Authentication Flow 

Using the LoginRadius Identity Platform you can achieve different Auth workflows (as shown in the below screenshot) like Email Registration, Phone Registration, Social Registration, Passwordless login, Username Registration, Username with duplicate Emails for SAP Commerce storefront. You can choose the Auth workflow as per your requirement.

![enter image description here](https://apidocs.lrcontent.com/images/Workflows_96425e91f6ecac5f89.51528349.png "Account Workflow")


##Login methods

LoginRadius Identity Platform provides you the following various methods of login :

⦁ Standard Login

⦁ Phone Login

⦁ Social Login

⦁ Anonymous Login

⦁ Smart Login

⦁ One Touch Login

## Data Sync

Loginradius Identity Platform provides you the feature of syncing the data to 3rd party applications using webhook. WebHooks allow you to build or set up integrations that subscribe to certain events on LoginRadius. When one of these events is triggered, LoginRadius will automatically send a POST payload over HTTPs to the WebHook's configured URL in real-time. WebHooks can be used to update an external tracker or update a backup mirror. For more information about webhook refer to the document [here](https://www.loginradius.com/docs/api/v2/integrations/webhooks/overview/).

## Customer insights 

LoginRadius provides useful charts and analytic tools (as shown below) to view and measure the overall performance of your site, in terms of customer registration and login. The information is aggregated and categorized into identity analytics, provider analytics, login analytics, and comparative analysis. For more information refer to our [Customer Insight](https://www.loginradius.com/docs/customer-insights/identity-analytics/) document.

![enter image description here](https://apidocs.lrcontent.com/images/insights_272595d30e438dd4638.98956599.png "enter image title here")

## Set Up Social Login

To use the extension in Social Login mode, you need to create a Social Login Component to use on your website. The LoginRadius Social Login component can be inserted in any secure (HTTPS) page on your website, where it will display as social network buttons (As shown below). To configure the social provider, you can refer to our social provider [document](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/configure-social-apps/).


![enter image description here](https://apidocs.lrcontent.com/images/6_77445d304dbf7bf257.08806666.png "enter image title here")

## Consent Management

LoginRadius Consent Management feature allows you to build custom consent forms. In addition, this feature makes it easy to modify existing consents prompted to your customers or apply new ones retroactively. Each consent you prompt can be enforced as either Optional or Strict depending on the workflow requirements. Consent Management helps your business adhere to strict regulations such as GDPR. GDPR outlines that the information taken from the customer must be explicit, unambiguous, well documented, freely given, and easily withdrawn.

## Field mapping

Below Hybris fields are mapped by default from LoginRadius to Hybris on registration, login, and profile update

* UID
* First Name

Apart from these 2 fields, you can map additional necessary fields for that you need to use the LoginRadius field mapping feature.

## Purchase Synchronization

After activating LoginRadius Commerce Cloud Extension, LoginRadius custom object should be enabled. Custom Object is a schema-less object that can be attached to a specific account. It can have a dynamic storage container that is updated with additional fields or data formats on the fly. A Custom Object should be used if you are looking to store large amounts of user data and the data can’t be formatted in a structured format because the data format could be different for each user.

An example of a Custom Object’s schema:

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

**General**

The server clock must be set to GMT+0, otherwise, errors and unexpected behaviors may occur. We recommend using NTP daemon to ensure that the server time is accurate.

**SAP Commerce Cloud**

 Open the SAP Commerce Cloud Administration Console (www.mydomain.com/). Under the Platform tab, open Support. Select the logs you wish to generate, and click Create. You can check if the LoginRadius module is installed correctly, after logging in with LoginRadius, open the browser's developer tools. In the console, type window.loginradiusHybris.authenticated. If the module is installed correctly, and you are logged in, it should return "true".



