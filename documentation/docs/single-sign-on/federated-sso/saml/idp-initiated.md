# Identity Provider Initiated SSO

Within this document, you'll delve into the **LoginRadius Identity Provider (IDP) initiated SAML flow**. 

The IDP-initiated SSO begins with the user clicking on a Login button within the Service Provider (SP) interface. Subsequently, they are redirected to the IDP Login Page. After successful authentication, the IDP dispatches a SAML response containing an [assertion](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/saml/overview/#identity-provider-initiated-sso) to the **Service Provider's Assertion Consumer Service** endpoint.



Flow diagram for  **IDP-initiated** SAML workflow:

![SAML Workflow](https://apidocs.lrcontent.com/images/sp-drawio-3-drawio_17326619cdd02042b01.35254922.png "Workflow")

Here’s how the **IDP Initiated** SAML flow works with LoginRadius.

1. The user requests to **access a protected resource** by clicking a Login Link on the  **third-party service provider**.

2. The user will be redirected to the  LoginRadius **IDX  login page**.

3. The user enters their LoginRadius user credentials.

4. After successful authentication, the **Identity Provider (LoginRadius)**  signs the **SAML** Response with the **LoginRadius (IDP)** private key.

5. The IDP will then send a signed SAML response to the  SP’s Assertion Consumer Service (ACS) URL.  The response contains an assertion that tells the service provider who the user is.

6. The service provider **validates the SAML response** with the stored certificate value provided by IdP and identifies the user.

7. The user is **now logged** in to the service provider and can access the protected resource.

## SAML App Configuration Guide (Idp Initiated)
This guide will lead you through the setup and implementation process of IDP-initiated SSO, covering all the necessary configurations needed within your LoginRadius account.

You are required to configure a **SAML app**  in the  LoginRadius Admin Console and **third-party Service Provider**.

1. [Configure the SAML App in LoginRadius Admin Console](#configuring-saml-app)
2. [Configure Service Provider Application](#configuring-service-provider-application)


## Configuring SAML App

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to implement the IDP-initiated flow.

> **NOTE**: If you have enabled or added a **Custom Domain** for your existing application, please be aware that you should **replace** the URL `https://<LoginRadius Site Name>.hub.loginradius.com/` with `https://<Your Custom Domain>/`  in fields such as **Issuer, EntityID, Login and Logout URLs**, or any fields having the same format.

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/) account and navigate to [Platform Configuration > Access Configuration > Federated SSO](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/saml).


The following screen will appear:

![Federated SSO - SAML](https://apidocs.lrcontent.com/images/sso-5_1132363918ab8aaad49.09134097.png "Federated SSO - SAML")

**Step 2:** To configure the SAML app in the Admin Console, click the **Add App** button displayed in the above screenshot. The following details will appear on the same screen:

![SAML Full View](https://apidocs.lrcontent.com/images/pasted-image-0-8_1188549645658571344abf06.94725987.png "SAML Full View")

**Step 3:** Select the **Idp Initiated Login** from the **Login Flow** options.

**Step 4:** In the **SAML App Name** field, enter an App name. If you have multiple SAML apps, each app name should be unique.


**Step 5:** For **Attributes**, map the LoginRadius fields with the Service Provider fields.

   - In Name, enter the field name of the Service Provider.
   - In Format, enter `urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified`.
   - In **Value**, enter the LoginRadius mapping field name.
   - Select the **Static** checkbox if you want to include static data instead of fetching it from the LoginRadius user profile. 
   
Similarly, by clicking the **Add Row** button, you can map multiple attributes.

Some Examples of Field Mappings:


| Name | Format | Value | Description |
|---|---|---|
| name  | urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified  | FullName  | Selecting full name from the Dropdown Send the full name in the SAML  response. |
| Email  | urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified  | Email  | Selecting Email from the Dropdown Send the Email in the SAML response. |
|  Customfield | urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified  |  Custom_field_name(From dropdown) | In a dropdown you can select the custom field name configured as in the Data schema.**Note:**Custom field will be listed in the drop down when it is only turned on for the Registration form under [Data Schema](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema). |
|  User Roles | urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified  |  Other -> Roles[0] | Roles[0] will fetch the first Role from the profile |

> **Note:**
> - If you don't find the **Custom Field** in the drop-down list, select the **Other** from the **Value** dropdown of the **Attributes** section and use dot notation to map the custom field on the basis of name.

       >  For e.g if the custom field name is **customfield1**, then we can use it like **CutomFields.customfield1**. 


> - The Roles field is of type **array** and will have multiple value(s) **"Roles": ["Admin", "Manager" ]**.

       >   You can access the Roles array value using the index. For **e.g**, if the role is on **“0”** index, then it can be access like **Roles[0]**. 

![Mapping](https://apidocs.lrcontent.com/images/IDP_2387619e0d1aa22059.67754409.png "Mapping")

**Step 6:** For **Name Id Format**, select the format supported by the Service Provider. The default is `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`.

**Step 7:** In the **Login URL**, enter `https://<LoginRadiusSite Name>.hub.loginradius.com/auth.aspx`.

**Step 8:** For **After Logout URL**, enter `https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=logout`.

**Step 9:** In the **Service Provider Logout URL**, enter the service provider logout URL (you will get the SLO URL from the third-party service provider ). It will be called in the Single Logout(SLO) SAML workflow.

**Step 10:** In the **Default Request Binding**, select any of the binding values from the drop-down as per the service provider configuration. We support both types of binding values, and by default, it will be `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

**Step 11:** In **Assertion Consumer Service Location**, enter the location (you will get this from your service provider).

**Step 12:** In **Assertion Consumer Service Binding**, select the binding value as `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` from the drop-down.

> **Note:** LoginRadius supports **POST** binding for assertion consumer service

**Step 13:** For the **Relay State Parameter**, enter RelayState.

**Step 14:** Configure the **SAML Assertion NotOnOrAfter** field in your LoginRadius settings. The options range from a minimum of **1 minute** to a maximum of **70 minutes**, allowing for flexible expiration times.

> **Note:** The default value is set to **5 minutes**.

**Step 15:** For **App Audiences**, enter  `EntityId` of your Service provider. 

**Step 16:** Select **HTTPPost** from the **SSO Method**. 

**Step 17:** Click the **ADD A SAML APP** button to save the app settings. 

> **Note:** To renew the **Identity Provider Certificate**, click the designated "**Renew Certificate**" button. Once the renewal is completed, the updated expiry date and time will be promptly shown.

Once you are have configured the SAML app in the Admin Console, you can view the recent success or error logs data for your SSO connection in the [Troubleshoot section](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/trouble-shoot). To view the latest logs, click the Refresh button.

![SAML Logs](https://apidocs.lrcontent.com/images/sso-7_2189663918b726e9a42.92739165.png "SAML Logs")

> **Note:** Currently, the Logs only support the SAML flow.

## Configuring Service Provider Application

Once you have successfully configured the SAML app in LoginRadius Admin Console, you need to configure the third-party service provider.

Each third-party authentication system is unique and will require different configuration settings. 

> **NOTE**: If you have enabled or added a **Custom Domain** for your existing application, please be aware that you should **replace** the URL `https://<LoginRadius Site Name>.hub.loginradius.com/` with `https://<Your Custom Domain>/`  in fields such as **Issuer, EntityID, Login and Logout URLs**, or any fields having the same format.

Use the following values to configure your application for IDP-initiated login flow:


**Step 1:**  Identity provider Login URL (SSO Endpoint): `https://<LoginRadius Site Name>/service/saml/idp/login?appname=<SAMLAppName>`.

**Step 2:** Use the LoginRadius certificate in your Service Provider application. To obtain the LoginRadius certificate, which is automatically generated from the backend, you can download the metadata file from the Admin Console after completing the configuration process. Please refer to the screenshot below for further clarification.

  ![Metadata](https://apidocs.lrcontent.com/images/metadata_379381277643fc8455ca438.21222777.png "Metadata")

After opening the downloaded metadata file, the certificate will be visible as below:

  ![certificate](https://apidocs.lrcontent.com/images/certificate_617284963643fc8a9068e55.30320893.png "certificate")

**Step 3:**  In the Issuer or EntityID fields, enter your LoginRadius site URL (we can enter any other Entity ID URL, and the same value should be added for the **APP AUDIENCES** field in the LoginRadius Admin Console.): 

`https://<LoginRadius Site Name>.hub.loginradius.com/`


**Step 4:** For **SSO binding** or **Service Provider Initiated Request Binding**, select HTTP-POST. 

**Step 5:** Into the SAML Relay State, enter this value: **redirect** (Service Provider Specific).

**Step 6:** Enter the Logout URL: `https://<LoginRadius Site Name>/service/saml/idp/logout?appname=<SAMLAppName>`.

> **Note:** If SP supports the Single Logout (SLO) feature, enter `https://<LoginRadius Site Name>/service/saml/idp/logout?appname=<SAMLAppName>` for Logout URL in the SP application.

## Next Steps

The following is the list of documents you might want to look into:

[Multipass](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/multipass/)

[OAuth 2.0](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/oauth-2-0/oauth-2-0-overview/)

[Open ID Connect](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/openid-connect/openid-connect-overview/)

[SAML](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/saml/overview/)

[Service Provider Initiated Login workflow](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/saml/sp-initiated/)

[SAML Miscellaneous](https://www.loginradius.com/docs/single-sign-on/concept/saml-miscellaneous/Usage/)

[SAML FAQ](https://www.loginradius.com/docs/single-sign-on/concept/saml-miscellaneous/samlfaq/)