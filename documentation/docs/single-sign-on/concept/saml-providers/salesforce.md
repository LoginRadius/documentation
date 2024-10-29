# LoginRadius as IDP with Salesforce as SP


LoginRadius Identity Platform can act as the SSO identity provider to service providers, allowing your customer to easily and securely access many web and mobile applications with one login. This document explains how you can establish SSO between LoginRadius Identity Provider and Salesforce, where Salesforce is a service provider. The implementation is based on the SAML protocol.

Let’s say you are using the LoginRadius Identity Platform for your company portal and require that your employees access the Salesforce account using the portal’s credentials. Reason being that you don't want the employees to remember the multiple login credentials (one for portal and one for salesforce account).


## Salesforce as SP Configuration Guide

This guide will take you through the setup and integration of Salesforce as a service provider. It covers everything you need to configure in your [Salesforce Application](#partconfigurationinsalesforce1) and [LoginRadius Admin Console](#partconfigurationinadminconsole2). 


## Part 1 - Configuration in Salesforce

This section covers the required configurations to perform in the salesforce application to implement this flow.

> **NOTE**: If you have enabled or added a **Custom Domain** for your existing application, please be aware that you should **replace** the URL `https://<LoginRadius Site Name>.hub.loginradius.com/` with `https://<Your Custom Domain>/`  in fields such as **Issuer, EntityID, Login and Logout URLs**, or any fields having the same format.

**Step 1**: Log in to your [Salesforce](https://login.salesforce.com/) account as a System Administrator.

> **Note**: If you do not have the Salesforce account, get in touch with the [Salesforce](https://www.salesforce.com/in/editions-pricing/overview/) team.

**Step 2**: Click the gravatar on the top-right corner and select Switch to **Salesforce Classic view**, as displayed in the screenshot below:

![enter image description here](https://apidocs.lrcontent.com/images/1_315415ed0c58d7a73b5.91737653.png "Salesforce Classic view")

**Step 3**: Click the **Setup** button in the top menu.

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/2_219815ed1efc7d4a0c4.97085527.png "Setup")

**Step 4:** Add a custom subdomain to Salesforce Account. For this follow the below steps:

A. Navigate to the **Domain Management** as displayed in the screen below and click the **My Domain**, enter the domain name, register and wait till the registration happens.

![enter image description here](https://apidocs.lrcontent.com/images/3_55ed1f03d5e7869.21222120.png "enter image title here")

> **Note**: Create your subdomain for your Salesforce organization and include your company name in your URL. For example: `https://yourcompanyname.my.salesforce.com`.


B. Click **Log In** button to test it out and then click **Deploy to Users** button to deploy the custom domain to the customers and wait till the deployment process is complete.


![enter image description here](https://apidocs.lrcontent.com/images/4_158635ed1f1356123f2.47015078.png "Deploy to Users")
The following screen displays the highlighted **Log In** and **Deploy to Users** buttons:


**Step 5**: Navigate to the **Security Controls > Single Sign-On** Settings page as displayed in the screen below to configure SAML SSO settings in your Salesforce account. 

![enter image description here](https://apidocs.lrcontent.com/images/5_270895ed1f1cb86cf89.87830803.png "settings")

Click the **Edit** button under **Federated Single Sign-On Using SAML** that uses SAML assertions to send a Salesforce endpoint. Select the **SAML Enabled** checkbox and  **Save** the settings.

**Step 6**: On Single Sign-On Settings page, click the **New** button under **SAML Single Sign-On Settings** as displayed in the screen below:

![enter image description here](https://apidocs.lrcontent.com/images/6_44695ed1f9af35ab95.92396794.png "SAML Single Sign-On Settings")

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/7_252215ed1fa35f01003.22176595.png "Settings")

**Step 7**: Enter the following values for SAML SSO settings:

- In the **Name** field, enter any App name. This name will be automatically filled in the **API Name**.
- In the **Issuer** and **EntityID** fields, enter your LoginRadius site URL: `https://<LoginRadius Site Name>.hub.loginradius.com/`.
- For **Identity Provider Certificate**, refer to this [document](https://www.loginradius.com/docs/single-sign-on/federated-sso/saml/usage/#generateloginradiuscertificateandkey6) for obtaining the LoginRadius Certificate. After getting the LoginRadius certificate value, save it and create a file keeping the file extension as `.cert`. Select the **ChooseFile** and browse to the filename.cert [i.e., the LoginRadius Certificate] and upload the file. 
- For **Request Signing Certificate**, select certificate from the previous step.
- For **Request Signature Method**, select **RSA-SHA1**.
- For **Assertion Decryption Certificate**, select **Assertion not encrypted**.
- For **SAML Identity Type**, select **Assertion contains the Federation ID from the user object**.
- For **SAML Identity Location** select **Identity is in the NameIdentifier element of the Subject statement.**
- For **Service Provider Initiated Request Binding**, select **HTTP POST**.
- In **Identity Provider Login URL**, enter this url: `https://<LoginRadius Site Name>/service/saml/idp/login?appname=<SAMLAppName>`.
- In **Identity Provider Logout URL** enter this url: `https://<LoginRadius Site Name>/service/saml/idp/logout?appname=<SAMLAppName>`.
- For **Just-in-time user Provisioning** select **User Provisioning Enabled and Standard**. 

> Note: Just-in-Time provisioning allows you to use a SAML assertion to create users when for the first time they try to log in using LoginRadius credentials. This eliminates the need to create user accounts in advance. For example, if you recently added an employee to your organization, you don't need to manually create the user account in Salesforce. When they log in with a single sign-on, their account is automatically created for them.


- Step 8: **Save** the settings.


**Step 9**: Click the **Download Metadata** button to download the Salesforce SAML configuration as an .xml file.

![enter image description here](https://apidocs.lrcontent.com/images/8_239445ed2253a156244.38547041.png "Metadata")   

This file contains values such as the Salesforce certificate, NameIDFormat, AssertionConsumerService location, etc. This metadata file information will be used in configuring SAML settings in LoginRadius Admin Console.


**Step 10**: Navigate to the **Domain Management > My Domain** page and under **Authentication Configuration,** click **Edit**.

The following screen displays the Authentication configuration:

![enter image description here](https://apidocs.lrcontent.com/images/9_196325ed225aa2d10f5.84711207.png "Edit")

**Step 11**: Ensure that the check box for your new IdP is checked as displayed in the screen below, and then **Save** the settings.

![enter image description here](https://apidocs.lrcontent.com/images/10_244245ed226b30c1ec0.67611830.png "settings")

**Step 12**: Open the custom domain name URL that you have configured and you should now see an alternative login option at the Login Screen. 

The following screen displays the added Login Option:

![enter image description here](https://apidocs.lrcontent.com/images/11_151035ed226275c94e2.48089192.png "Login")

## Part 2 - Configuration in Admin Console

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to implement the IDP initiated flow.

> **NOTE**: If you have enabled or added a **Custom Domain** for your existing application, please be aware that you should **replace** the URL `https://<LoginRadius Site Name>.hub.loginradius.com/` with `https://<Your Custom Domain>/`  in fields such as **Issuer, EntityID, Login and Logout URLs**, or any fields having the same format.

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/) account and navigate to [Platform Configuration > Access Configuration > Federated SSO](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/saml) and select the SAML option from the left navigation panel, as displayed in the screen below.

![enter image description here](https://apidocs.lrcontent.com/images/1_325545eda8dfe73bda3.94055171.png "SAML")

**Step 2:** To configure the details in the Admin Console, click the **Add App** button from the above screen. The app configuration options will appear on the same screen.



![enter image description here](https://apidocs.lrcontent.com/images/2_306345eda8f29a85634.17814878.png "SAML Version")

**Step 3:** Select the desired Version of **SAML** from **SAML Version** option from the above screen:

**Step 4:** Select **Idp initiated Login** from Login Flow.

**Step 5:** In the **SAML APP NAME** field, enter the same app name that you have added in the salesforce application. This app name will be used by LoginRadius to identify the originating request source.


**Step 6:** In the **Certificates** section, under **Id Provider Certificate Key**, enter the LoginRadius Certificate Key. This key will be used to establish trust between Identity and Service Provider.


> **Note:** Refer to the [generate key](https://www.loginradius.com/docs/single-sign-on/federated-sso/saml/usage/#generateloginradiuscertificateandkey6) section for how to generate private and public keys.

**Step 7:** In the **Id Provider Certificate field**, enter the same certificate value with the headers that you have added in the salesforce application. This certificate will be used to establish trust between Identity and Service Provider.


**Step 8:** For **Attributes**, map the LoginRadius' fields with the Service Provider fields. These are the key-value mappings defining the attributes that will be included in the SAML response sent to the Service Provider.

 A. In the **Name** field, enter the Salesforce profile fields. Refer to this [document](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_user.htm) for the supported fields by Salesforce.
 
 B. In **Format**, enter `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`.
 
 C. In **Value**, enter the LoginRadius mapping field name. LoginRadius supports the following fields:

 | Field Names                     |  Field Names  | Field Names  |
| ------------------------------- |-------|--------- |
| ID   | Favicon             | Addresses successfully.                                                                                                                                                        |
| FirstName    | HomeTown        | Created
| MiddleName   | State     | LocalCity
|LastName    | City        | ProfileCity
| FullName    | Industry       |LocalCountry
| NickName    | About        | ProfileCountry
| ProfileName   | TimeZone         | RelationshipStatus
| BirthDate    | LocalLanguage        | Quote
| Gender    | CoverPhoto       | Religion
| Website  | TagLine        | Age
| Email  | Language         | Company
|Country   | Verified         | Uid
| ThumbnailImageUrl | UpdatedTime      | IsEmailSubscribe
| ImageUrl  | PhoneNumbers        | NoOfLogins

If you are using a LoginRadius custom field, it should be prefixed with "cf_". **For example**, if the custom field name is profileID, then the mapping for the loginRadius field name in SAML application will be cf_profileID. 


> **Note:** Just-in-Time provisioning in a Salesforce account allows you to use a SAML assertion to create users when for the first time they try to log in using LoginRadius credentials. For enabling **Just-in-Time provisioning**, the SAML response should contain the following Salesforce fields: **federationId, user.Email, user.LastName, user.ProfileId and user.userName**. You should map these fields with the user's LoginRadius profile fields.

ProfileId determines the permission level of customers in your Salesforce application. These permissions grant Salesforce users access to particular objects, fields, tabs, and records. Each user can have only one ProfileId. 

A Salesforce ProfileId can be obtained from the Salesforce URL address associated with an individual profile. To locate this number, go to **Setup** followed by **Manage users** and **Profiles.** From here, click the desired profile to load it. If you look in the URL address e.g. `https://<your company domain>.my.salesforce.com/<ProfileId>`, `<ProfileId>` in the URL will be ProfileId of the selected Salesforce profile. Update the ProfileId mapping field (e.g. sfprofileid to the desired ProfileID `<ProfileId>`) for a LoginRadius user.

You can create a custom profile field in LoginRadius and map it with user.ProfileId. The following screen displays the sample field mapping settings for **Just-in-Time provisioning**:

![enter image description here](https://apidocs.lrcontent.com/images/6_263925eda9a0f0be515.36931970.png "Just-in-Time provisioning")

**Step 9:** For **Name Id Format**, select name Id format that is supported by the Service Provider. 
The default is `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`.

**Step 10:** In the URL’s section:

A. For  **LoginURL**, enter  `https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx`.  (In case of custom domain Login url will be `<customdomain>/auth.aspx`).

B. For **After Logout URL**, enter `https://<LoginRadius Site Name>/service/saml/idp/logout?appname=<SAMLAppName>`. 

**Step 11:** **Service Provider Details** section contains the endpoints and settings that LoginRadius will communicate with to establish a SAML session. In this section enter the following details:

A. For Service Provider Logout URL, you can get this from the **Single Sign-On Settings** page of the salesforce.

B. Leave the **Default Request Binding** field blank.

C. Under **Assertion Consumer Service**, enter the information for **Binding** and **Location** which you can obtain from the downloaded Salesforce metadata.

D. For **RELAY STATE PARAMETER**, enter **RelayState**.

**Step 12:** For **App Audiences**, enter  `https://<LoginRadius Site Name>.hub.loginradius.com/`. These are the intended recipients of the assertions issued.

**Step 13:** Select **SSO Method** as **HTTP POST**

**Step 14:** Click on the **ADD A SAML APP** button to add and save settings.

## SAML Login Flow

**Step 1:** Go to `https://yourcompanyname.my.salesforce.com` and you will see a login option within your Salesforce application name as displayed in the screenshot below:

![enter image description here](https://apidocs.lrcontent.com/images/7_192035eda9c9dcf40f7.82790581.png "Signin")

**Step 2:** Click on the app name and it will take you to LoginRadius hosted page for authentication.

**Step 3:** After successful authentication, you will be logged into your Salesforce account.
> **Note**: Customers account should exist under both salesforce and LoginRadius database.

> **Custom Domain:** To configure the SAML workflow for a custom domain, refer to this [document](https://www.loginradius.com/docs/single-sign-on/concept/saml-miscellaneous/Usage/#partcustomdomain6).

















