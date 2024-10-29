# ADFS as Identity Provider

As we’ve already discussed ADFS providers where “ADFS” can also act as an Identity Provider. This document will take you through the configuration steps required to set up “ADFS” as an Identity Provider over the social login page of your Identity Experience framework.

## Part 1 - Configuration Guide:

This guide describes step by step procedure for setting up your own applications as an Identity provider leveraging ADFS login flow.

> **Pre-requisites:** Basic knowledge of Azure Active Directory ACS

### Part 1 - Configuring Windows Azure Active Directory ACS

This section covers the required configurations that you need to perform in the Azure Active Directory ACS to set up ADFS as Identity provider.

**Step 1:** Create an Access Control Namespace in Windows Azure by opening the bottom drawer and select **App Services > Active Directory > Access Control**

The following screen appears:

![Access Control](https://apidocs.lrcontent.com/images/Image-1_71516144eae314ddf0.86707816.png "Access Control")

**Step 2:** Click on the created namespace as shown in the following screen.

![Created Namespace](https://apidocs.lrcontent.com/images/Image-2_215896144eb0d6b44d8.63792960.png "Created Namespace")

**Step 3:** Click on **Applications** on header as shown in the following screen.

![Applications](https://apidocs.lrcontent.com/images/Image-3_206296144eb2c7a0be2.69954385.png "Applications")

**Step 4:** Add an app by clicking the **ADD** button at bottom.

![Click Add](https://apidocs.lrcontent.com/images/Image-4_312186144eb51eb4ed7.98680807.png "Click Add")

**Step 5:** In the **Name** field, you can enter any name.

**Step 6:** In **SIGN-ON URL** enter

`https://<LR-Site-Name>.hub.loginradius.com/saml/serviceprovider/AdfsACS.aspx`

**Step 7:** In **APP ID URI** enter

`https://<LR-Site-Name>.hub.loginradius.com/`

**Step 8:** In **REPLY URL** enter

`https://<LR-Site-Name>.hub.loginradius.com/saml/serviceprovider/AdfsACS.aspx`

**Step 9:** Click the View **ENDPOINTS** button at the bottom. Use these details to configure
LoginRadius.

![App has been added](https://apidocs.lrcontent.com/images/Image-9_143876144eb8aa3ee65.57050340.jpg "App has been added")

![API Endpoints](https://apidocs.lrcontent.com/images/Image-9a_205686144ebb1a1e619.52011296.png "API Endpoints")

**Step 10:** You can get the Certificate by clicking on the quick start button previous to the Admin Console button.

The following screen appears:

![Get the Certificate](https://apidocs.lrcontent.com/images/Image-10_187826144ebe7537a82.83727796.jpg "Get the Certificate")

**Step 11:** Navigate to section **GET STARTED**.

**Step 12:** Click on **ENABLE USERS TO SIGN ON**.

**Step 13:** Open the URL from **FEDERATION METADATA DOCUMENT URL** in the new browser tab.

**Step 14:** Here you would see the **ID Provider CERTIFICATES**.

### Part 2 - Configuring LoginRadius

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/) account and navigate to [Deployment > Apps](https://adminconsole.loginradius.com/deployment/apps/web-apps).

**Step 2:** Navigate to **Platform Configuration > Authentication Configuration > Custom IDPS**.
Click on **ADFS Providers** Tab.

**Step 3:** In **Add a New ADFS Provider** enter any unique name that will be used by LoginRadius to identify the provider that is originating the request. This name will be displayed under the social login forms in the LoginRadius IDX page and on the social login form rendered by LoginRadius V2.js library on your application if the **Include In Social Schema** is selected while configuring the ADFS app.


> **Note:** Below are the validation rules that should be taken care of while creating the **Provider Name**.If any of the below validation rule is not followed the error message: `Provider Name is not valid` will be shown.

1. Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
2. App name should start with a **character**.
3. Alpha numeric values are allowed.
4. No space is allowed in between.
5. Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
6. Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

**Step 4:** Enter the details for **ID PROVIDER**.

**Step 5:** In **ID Provider Location** enter the **SIGN-ON ENDPOINT** which you get from ADFS account.

**Step 6:** In **ID Provider LogOut Url** enter the **SIGN-OUT ENDPOINT** which you get from ADFS account.

**Step 7:** In **ID PROVIDER CERTIFICATE** enter the certificate for IdP i.e ADFS.

**Step 8:** **Auto Lookup Functionality.**

**Enabling AutoLookup:** When you enable AutoLookup, you will notice a domain box where you need to enter/specify the domain name.

![AutoLookup](https://apidocs.lrcontent.com/images/Custom-Idps-LoginRadius-User-Dashboard-2_1238909362653a4214a834b1.82630786.png "AutoLookup")

Once the configuration is saved with the domain name, upon entering an email ID with the specified domain name during authentication, the user will be automatically directed to the designated Identity Provider (IdP). Without AutoLookup, the user follows the standard login process.

> **Note:** After enabling this feature, the specific IdP will not be displayed in the Social Schema on your IDX.

> **Note:** To renew the **Service Provider Certificate**, click the designated "**Renew Certificate**" button. Once the renewal is completed, the updated expiry date and time will be promptly shown.


**Step 9:** For **RELAY STATE PARAMETER** enter **RelayState**.

For **DATA MAPPING** select the LoginRadius' fields (SP fields) and enter the corresponding ADFS fields(IdP fields). Following are some of the field names of ADFS.

```
http://schemas.microsoft.com/identity/claims/objectidentifier
http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname
http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname
http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name
```

Save the settings.

![ADFS Provider](https://apidocs.lrcontent.com/images/pasted-image-0-2_1679507361653a4aafebae25.60467392.png "ADFS Provider")

> **Note:** For any query, please reach out to LoginRadius Support from [here](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

## Part 2 - Next Step:

The following is the list of documents you might want to look into:

- [Custom OAuth Provider](https://www.loginradius.com/docs/single-sign-on/tutorial/custom-identity-providers/custom-oauth-provider/)
- [Custom JWT Provider](https://www.loginradius.com/docs/single-sign-on/custom-identity-providers/custom-jwt-provider/)