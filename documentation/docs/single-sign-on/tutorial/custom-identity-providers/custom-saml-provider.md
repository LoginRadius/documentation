# Custom SAML Provider

LoginRadius Identity Platform supports both SAML 1.1 and SAML 2.0 flows to manage an **Identity Provider (IDP)** or as a **Service Provider** in case of Custom IDP and It supports both IDP initiated, and SP-initiated SAML flows.

The LoginRadius Admin Console allows you to configure the SAML app by customizing the assertions, keys, and endpoints to match any SAML provider requirements.

In this document you will learn how to connect your SAML custom IDP provider and how to configure this via LoginRadius Admin Console.

## Part 1 - Configuration

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to implement the SAML Provider.

**Step 1:** Log in to your LoginRadius **[Admin Console](https://adminconsole.loginradius.com/)** by navigating to **Platform Configuration > Authentication Configuration > Custom IDPs**. Click on **SAML Provider** Tab.

The following screen will appear:

![SAML Custom IDP](https://apidocs.lrcontent.com/images/Custom-Idps-LoginRadius-User-Dashboard-1_282597468658712a8b79908.69909012.png "SAML Custom IDP")

**Step 2:** To configure the details in the Admin Console, click the **Add A New Provider** button displayed on the screen below or you can also proceed by uploading details using the **Metadata file**.

![SAML Custom IDP](https://apidocs.lrcontent.com/images/Custom-Idps-LoginRadius-User-Dashboard_182121745665871244206e81.25732961.png "SAML Custom IDP")

The SAML Provider configuration fields appear on the same screen as displayed below:

![Custom IDP full view](https://apidocs.lrcontent.com/images/pasted-image-0-3_436373142653a4c171cccd9.46774695.png "Custom IDP full view")

**Step 3:** In the **Login Flow choose** the desired SAML flow from the dropdown and in the **Provider Name** field, enter the unique name of the SAML provider. This name will be displayed under the social login forms in the LoginRadius IDX page and on the social login form rendered by LoginRadius V2.js library on your application if the **Include In Social Schema** is selected while configuring the SAML app.


> **Note:** Below are the validation rules that should be taken care of while creating the **Provider Name**.If any of the below validation rule is not followed the error message: `Provider Name is not valid` will be shown.

1. Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
2. App name should start with a **character**.
3. Alpha numeric values are allowed.
4. No space is allowed in between.
5. Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
6. Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

**Step 4:** In the **Display Provider Name (Optional)** field, enter the Display name options (if any) supported by the provider apart from the default options (it varies from provider to provider).

**Step 5:** in **ID Provider Binding** selected the appropriate provider from the dropdown list.

**Step 6:** In **ID Provider Location** enter the **SIGN-ON ENDPOINT** which you get from the SAML account.

**Step 7:** In **ID Provider Logout Url** enter the **SIGN-OUT ENDPOINT** which you get from the SAML account.

**Step 8:** In **ID PROVIDER CERTIFICATE** enter the certificate for IdP i.e SAML.

> **Note:** To renew the **Service Provider Certificate**, click on designated "**Renew Certificate**" button. Once the renewal is completed, the updated expiry date and time will be promptly shown.

**Step9:** **Auto Lookup Functionality.**

**Enabling AutoLookup:** When you enable AutoLookup, you will notice a domain box where you need to enter/specify the domain name.

![AutoLookup](https://apidocs.lrcontent.com/images/Custom-Idps-LoginRadius-User-Dashboard-2_1238909362653a4214a834b1.82630786.png "AutoLookup")

Once the configuration is saved with the domain name, upon entering an email ID with the specified domain name during authentication, the user will be automatically directed to the designated Identity Provider (IdP). Without AutoLookup, the user follows the standard login process.

> **Note:** After enabling this feature, the specific IdP will not be displayed in the Social Schema on your IDX.

**Step 10:** For **RELAY STATE PARAMETER** enter **RelayState**

**Step 11:** For **DATA MAPPING** select the LoginRadius' fields (SP fields) and enter the corresponding SAML supported app fields (IdP fields) e.g.

| Fields | Profile Key |
|--|--|
| Email | email |
| FullName | username |

**Step 12**: Once all the required fields are completed, scroll down and hit **Save**.

> **Note:** You should have an account with the same email address in your SAML application as well as in LoginRadius before using your SAML application to login to the LoginRadius Admin Console.

## Configuring Service Provider Application

Once you have successfully configured the SAML app in LoginRadius Admin Console,now you need to configure the third-party Service provider.

Each third-party authentication system is unique and will require different configuration settings. 

> **NOTE**: If you have enabled or added a **Custom Domain** for your existing application, please be aware that you should **replace** the URL `https://<LoginRadius Site Name>.hub.loginradius.com/` with `https://<Your Custom Domain>/`  in fields such as **Issuer, EntityID, Login and Logout URLs**, or any fields having the same format.

Use the following values to configure your application for IDP  initiated login flow:


**Step 1:**  Identity provider Login URL (SSO Endpoint): `https://<LoginRadius Site Name>/service/saml/idp/login?appname=<SAMLAppName>`.

**Step 2:** Use the LoginRadius certificate in your Service Provider application. To obtain the LoginRadius certificate, which is automatically generated from the backend, you can download the metadata file from the Admin Console after completing the configuration process. Please refer to the screenshot below for further clarification.

  ![Metadata](https://apidocs.lrcontent.com/images/metadata_379381277643fc8455ca438.21222777.png "Metadata")

After opening the downloaded metadata file, the certificate will be visible as below:

  ![certificate](https://apidocs.lrcontent.com/images/certificate_617284963643fc8a9068e55.30320893.png "certificate")

**Step 3:**  In the Issuer or EntityID fields, enter your LoginRadius site URL (we can enter any other Entity ID URL, and the same value should be added for the **APP AUDIENCES** field in the LoginRadius Admin Console.): 

`https://<LoginRadius Site Name>.hub.loginradius.com/`


**Step 4:** For **SSO binding** or **Service Provider Initiated Request Binding** select HTTP-POST. 

**Step 5:** Into the SAML Relay State enter this value: **redirect** (Service Provider Specific).

**Step 6:** Enter the Logout URL: `https://<LoginRadius Site Name>/service/saml/idp/logout?appname=<SAMLAppName>`.

> **Note:** 
- If SP supports Single Logout (SLO) feature, enter `https://<LoginRadius Site Name>/service/saml/idp/logout?appname=<SAMLAppName>` for Logout URL in SP application.
- After updating the certificate from the LoginRadius Admin Console, as per standard procedure, you are also required to update the relevant certificates in the **downstream applications** and **Service Providers**.

## Part 2 - Next Step:

The following is the list of documents you might want to look into:

- [Custom OAuth Provider](https://www.loginradius.com/docs/single-sign-on/tutorial/custom-identity-providers/custom-oauth-provider/)
- [Custom JWT Provider](https://www.loginradius.com/docs/single-sign-on/custom-identity-providers/custom-jwt-provider/)