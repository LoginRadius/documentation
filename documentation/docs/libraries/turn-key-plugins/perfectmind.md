# PerfectMind SSO Implementation

## Overview

PerfectMind is a membership management software that helps organizations irrespective of their size connect with their communities. PerfectMind allows you to group several family members under the same account. Here is more information:

**Contacts:** Contacts are the leads, members, customers, and even former members in the PerfectMind site. A Contact's profile contains several crucial pieces of information, such as their membership type, expiry, last contacted date, attendance, and more.

**Account:** The PerfectMind allows you to group several Contacts together under the same account e.g. a Family Account. As a family, you can create a family login, share financial resources and cash rewards, and view everyone’s info on one profile page.

Please see [PerfectMind Portal](https://community.perfectmind.com/s/article/Enable-Online-Member-Portal-Access) for more information.

LoginRadius PerfectMind SSO Solution allows you to create a single sign-on experience between LoginRadius and the PerfectMind platform. For example, you have a Website A that interacts with both LoginRadius and PerfectMind. Now, it is required that whenever the consumer is logged into Website A, using the LoginRadius SSO (Single Sign-On), he must be logged into the PerfectMind Site as well.

## How SSO Connector Works

After a consumer logs in to the LoginRadius site, LoginRadius creates a session in the LoginRadius site and provides a LoginRadius access token. You can call the [LoginRadius PerfectMind SSO API](https://www.loginradius.com/docs/api/v2/single-sign-on/sso-connector/perfectmind/) with the LoginRadius access token to create a session in the PerfectMind site and return a PerfectMind SSO Login URL. You can redirect the customer to the PerfectMind SSO Login URL to access the account in the PerfectMind application in your workflow.

The [LoginRadius PerfectMind SSO API](https://www.loginradius.com/docs/api/v2/single-sign-on/sso-connector/perfectmind/) calls the Perfectmind APIs from the server side and checks a corresponding contact with the LoginRadius's consumer email in the PerfectMind site. If no contact exists in the PerfectMind site with the email, LoginRaadius first creates a new account with the mapped data points in the Admin Console and then creates a contact with LoginRadius’s consumer email and links to the newly created account. The [LoginRadius Perfectmind SSO API](https://www.loginradius.com/docs/api/v2/single-sign-on/sso-connector/perfectmind/) creates a session in the PerfectMind application and returns the Perfectmind SSO Login URL. You can customize the code on your website by redirecting the customer to the PerfectMind Login URL after successful authentication on your website.
Hence, on successful authentication to LoginRadius, the customer will be authenticated to both LoginRadius and PerfectMind platforms and you can redirect the customer to the Perfectmind SSO Login URL.

For API documentation, refer to our [PerfectMind API](https://www.loginradius.com/docs/api/v2/single-sign-on/sso-connector/perfectmind/) document.

**Example flows:**

1.  Customer login through LoginRadius, on successful authentication, they will be redirected to their PerfectMind Profile Page.

2.  Customer clicks Register on a PerfectMind course, customers will be prompted to login through LoginRadius, on successful authentication, they will be redirected back to PerfectMind to complete the registration.

**Flow Chart**

  ![perfectmind](https://apidocs.lrcontent.com/images/Untitled-Diagram-drawio-1_3563840864e46b3786ba83.18893196.png "[perfectmind")

## PerfectMind SSO Implementation guide

This guide will take you through the steps you need to follow for integrating LoginRadius into the PerferMind site. This integration uses the LoginRadius JavaScript interfaces along with the LoginRadius PerfectMind SSO API. To achieve this use case, you must perform the following sequential steps:

1.  [SSO Connector Configuration in LoginRadius](#sso-connector-configuration-in-loginradius)
2.  [Add code to IDX (Basic/Advanced Theme)](#add-code-to-idx-with-the-basic-theme)

> **Pre-requisites:**
>
> - LoginRadius authentication (login and registration) solution implemented on your website.
> - PerfectMind Site created.

## SSO Connector Configuration in LoginRadius

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to configure the PerfectMind connector.

<strong>1.</strong> Login to [Admin Console](https://adminconsole.loginradius.com/) and navigate to [Platform Configuration > Access Configuration > SSO Connector>PerfectMind](https://adminconsole.loginradius.com/platform-configuration/access-configuration/sso-connector/perfectmind).

The following screen will appear:

![admin console ](https://apidocs.lrcontent.com/images/Perfect-mind_6145e91f77bb8ef85-37428832_35545ea0dac521a932-42561858_1541261a9ef19003ec5.83743347.png "perfectmind")

<strong>2.</strong> Click on **Add Store** button as shown in the above screen and the following screen appears:

![admin console configuration](https://apidocs.lrcontent.com/images/perfectmind_284776202d3126666e0.58745488.png "admin console configuration")

<strong>3.</strong> Fill all the required details given below:

- **Store Name:** Get from the Store URL

  > **Note:** Below are the validation rules that should be taken care of while creating the **Store Name**.If any of the below validation rule is not followed the error message: `Store Name is not valid` will be shown.

  - Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
  - App name should start with a **character**.
  - Alpha numeric values are allowed.
  - No space is allowed in between.
  - Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
  - Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

- **API Endpoint:** This value is usually your organization's PerfectMind hosted URL. This URL will be used to make the PerfectMind API call for Create/Update Record, Create a Login session, etc. e.g. `https://companyname.perfectmind.com`
- Access Key
- Client Number
- **Location Id:** A Perfectmind GUID that is used for the default location when calling the APIs.
- **Profile Id:** A Perfectmind GUID that determines the membership type.
- **Organization Id:** A static value that is used during the account creation process
- **Mapping:** Map the fields you would like to be passed into PerfectMind. Enter the key and select the value from the dropdown. You can map the Account and Contact data points for PerfectMind by adding prefix **Account\_** and **Contact\_** respectively in the LoginRadius PerfectMind SSO configuration in the LoginRadius Admin console.

> For the data mapping in the perfectmind connector, `Account_Name`, `Contact_Email` and `Contact_LastName` are the required fields for the LR-PM SSO workflow.

| Enter the Key     | Enter the Value |                |
| ----------------- | --------------- | -------------- |
| Account_Name      | FullName        |                |
| Contact_Email     | other           | Email[0].Value |
| Contact_LastName  | LastName        |                |
| Contact_FirstName | FirstName       | <p></p>        |

<strong>4.</strong> Once all the required fields are added, the **Save** button will turn blue. Click the **Save** button to save the filled details.

## Add code to IDX with the advanced theme only

By default, when a consumer logs in the auth page ( `https://sitename.hub.loginradius.com/auth.aspx`) , the consumer is redirected to the profile page (`https://sitename.hub.loginradius.com/profile.aspx`) . You can redirect to the PerfectMind application after login, by making the consumser to log in LoginRadius IDX auth page with some predefined query paramter,e.g,loginflow=PMCMS. You can customize the IDX code base to detect the query parameter and redirect the consumer to PerfectMind SSO Login URL.

Please see the following steps to achieve the above use case with the IDX with Advanced Theme. Please also [Identity Experience Framework Customizations](https://www.loginradius.com/docs/libraries/identity-experience-framework/customization/#advancedthemeeditor19) for more information.

1.  A consumer comes to PerfectMind site for login.
2.  Redirect the consumer from PerfectMind to the following LoginRadius IDX auth page with some predefined query paramter,e.g,loginflow=PMCMS( you can choose any name for query parameter): `https://sitename.hub.loginradius.com/auth.aspx?loginflow=PMCMS` ( You will need to work with the PerfectMind Team to perform #1 and #2).

3.  Add the following code to the **before.js** file in the auth.aspx in the Admin Console.

    ![Admin console basic theme](https://apidocs.lrcontent.com/images/pasted-image-0-16_2341961a9faab349174.50868090.png "Basic theme")

    **The code snippet performs the following actions:**

    - Detects the query parameter `loginflow=PMCMS`.
    - Grab the token and make an ajax call to the LoginRadius PerfectMind SSO API.
    - In the success function of the LoginRadius PerfectMind API, it redirects the consumer to the PerfectMind SSO Login URL with the authenticated session. The consumer will be automatically logged in to the PerfectMind site. You need to add this code in the **before.js** file.

    ```
    lr_raas_settings.login.success  =  function(response, flag){
      if(response.Profile && queryString.loginflow && queryString.loginflow ==  "PMCMS"){
        var method =  "GET";
        var url =  "https://cloud-api.loginradius.com/sso/perfectmind/session";
        $.ajax({
          type: method,
          url: url,
          data:  {
            "apikey": raasoption.apiKey,
            "access_token": LRObject.sessionData.getToken(),
            "perfectMindSiteName":  "<DoS PerfectMindapp name from Admin Console>"
          },
          contentType:  "application/x-www-form-urlencoded",
          dataType:  "json",
          success:  function(resultData){
            console.log(resultData);
            // Code to handle on success
            // Example: PerfectMind response contains URL of authenticated user
            // which can redirect users to PerfectMind store
            window.location.href = resultData.URL;
          },
          error: function(response){
            // Code to handle on error
            console.log(response);
          }
        });
      }
      else if(response.access_token){
        redirectToReturnUrl(response.access_token);
      }
      else{
        if(response.AccountSid || response.Sid || (response.Data &&  (response.Data.AccountSid || response.Data.Sid))){
          setMessage(successMessages.ResendOTP);
        }
        else if(_queryString.indexOf("return_url")!=-1){
          registrationSuccess("register");
        }
        else{
          if(flag ==  "register"){
            setMessage(successMessages.Register);
            resetForm("loginradius-registration");
          }
          else if(raasoption.passwordlessLogin && response.IsPosted){
            setMessage(successMessages.InstantLink);
            resetForm("loginradius-login");
          }
        }
      }
    };
    ```

4.  If a consumer already logged in to the LoginRadius application and opens the `https://sitename.hub.loginradius.com/auth.aspx?loginflow=PMCMS` in a new tab, the consumer will be redirected to `https://sitename.hub.loginradius.com/profile.aspx` page automatically from the LoginRadius server-side IDX code. You can add the following code under before.js in the profile page in the Admin Console to redirect the consumer to the Perfectmind URL after the customer is redirected to profile page.

    ![Theme](https://apidocs.lrcontent.com/images/unnamed-3_2914861a9f9b7b28b38.44503765.png "Basic theme")

**The code snippet performs the following actions:**

- Detect the queryString to the document referrer.
- Grab the token and call the LoginRadius PerfectMind SSO API to get the PerfectMind Login URL.
- Redirect to the consumer to the PerfectMind Login URL.

```
let referrerURL = new URL(document.referrer)

//query parameters
var queryString = LRObject.util.parseQueryString(
  referrerURL.search.replace('?', '')
)

//Fetch token from Cookies
var access_token = LRObject.documentCookies.getItem('lr-session-token')

if (access_token && queryString.loginflow && queryString.loginflow == 'PMCMS') {
  $.ajax({
    type: 'GET',
    url: 'https://cloud-api.loginradius.com/sso/perfectmind/session',
    data: {
      apikey: raasoption.apiKey,
      access_token: access_token,
      perfectMindSiteName: '<DoS PerfectMindapp name from Admin Console>',
    },
    contentType: 'application/x-www-form-urlencoded',
    dataType: 'json',
    success: function (resultData) {
      console.log(resultData)
      // Code to handle on success
      // Example: PerfectMind response contains URL of authenticated user
      // which can redirect users to PerfectMind store
      window.location.href = resultData.URL
    },
    error: function (response) {
      // Code to handle on error
        console.log(response)
    },
  })
}

```

> **Note:** The customer will be directed to the Profile page first and then to the PerfectMind site. It is not possible to eliminate the redirection to Profile page steps as the redirect is handled by the server-side JS file. We recommend the following options:   Add a loading spinner to hide the profile page HTML elements during the redirection. **OR**  Show a read-only profile page with a button redirecting to the PerfectMind site. Hence, the consumer will be redirected to the profile page by default. When the consumer clicks the button on the profile page, call the PerfectMind login API and redirect the consumer to the PerfectMind site.

## Add code to IDX with the Basic theme

IDX(basic) theme allows you to customize IDX interfaces leveraging UX in the IDX. Please see the following documents on the basic theme :

- [Identity Experience Framework](https://www.loginradius.com/authentication/concepts/ui-ux-customizations-idx/#basictheme0)
- [Identity Experience Framework Customizations](https://www.loginradius.com/docs/libraries/identity-experience-framework/customization/#basicthemeeditor18)

The basic theme calls the callback functions on successful events, e.g., login, registration, etc. You need to call LoginRadius Perfectmind SSO API in the callback function and assign this callback function in the initialized LRObject call. This will execute your code based on the events e.g. login.

```
LRObject.util.ready(function () {
  LRObject.idx("idx-container", options, cb);
});
```

**Here is the step by step guide to customize the IDX with the Basic theme**

1. A consumer comes to PerfectMind site for login.

2. Redirect the consumer from PerfectMind to the following LoginRadius IDX auth page with some predefined query paramter, e.g, loginflow=PMCMS ( you can choose any name for query parameter): `https://sitename.hub.loginradius.com/auth.aspx?loginflow=PMCMS `( You will need to work with the PerfectMind Team to perform #1 and #2).

3. The below code snippet makes an ajax call to the PerfectMind API and redirects the consumer to the PerfectMind Login URL with the authenticated session. The consumer will be automatically logged in to the PrefectMind site. You need to add this code in the **before.js** file before you initialize the frame.

   ```
   var queryString = LRObject.util.parseQueryString(window.location.search.replace("?", ""));
   var cb = function(response, Event) {
     switch (Event) {
       case "login": if (queryString.loginflow && queryString.loginflow = "PMCMS") {
     var method = "GET";
     var url = "https://cloud-api.loginradius.com/sso/perfectmind/session";
       $.ajax({
         type: method,
         "async": false,
         "crossDomain": true,
         url: url,
         data: {
           "apikey": raasoption.apiKey,
           "perfectMindSiteName": "perfectmindtest" //perfectmind app name in the admin console
         },
         headers: {
           "Authorization": "Bearer " + response.access_token,
           "content-Type": "application/x-www-form-urlencoded"
         },
         success: function(resultData) {
           console.log(resultData);
           // Code to handle on success
           // Example: PerfectMind response contains URL of authenticated user
           // which can redirect users to PerfectMind store
           window.location.href = resultData.URL;
         },
         error: function(response) {
           // Code to handle on error
           console.log(response);
         }
       });
     }
   }
   ```

4. If the user already logged in to the LoginRadius application and comes to the https://sitename.hub.loginradius.com/auth.aspx?loginflow=PMCMS, the user will be redirected to https://sitename.hub.loginradius.com/profile.aspx page automatically from the LoginRadius server-side IDX code. You can add the following code under before.js in the profile page to redirect the user to the Perfectmind URL.

   ```
   let referrerURL = new URL(document.referrer)

   //query parameters
   var queryString =  LRObject.util.parseQueryString(
     referrerURL.search.replace('?', '')
   )

   //Fetch token from Cookies
   var access_token =LRObject.documentCookies.getItem('lr-session-token')

   if (access_token && queryString.loginflow && queryString.loginflow == "PMCMS") {
     visibleLoadingSpinner(true);
     $.ajax({
         type: "GET",
         url: "https://cloud-api.loginradius.com/sso/shopify/api/token",
         data: {
             "apikey": raasoption.apiKey,
             "perfectMindSiteName": "perfectmindtest" //perfectmind app name in the admin console
         },
         headers: {
             "Authorization": "Bearer " + access_token[2],
             "content-Type": "application/x-www-form-urlencoded"
         },
         success: function(resultData) {
             console.log(resultData);
             window.location.href = resultData.url;
             // Code to handle on success
             // Example: PerfectMind response contains URL of authenticated user
             // which can redirect users to PerfectMind
         },
         error: function(response) {
             // Code to handle on error
             console.log(response);
         }
     });
   }
   ```

> **Note:** The above code can also be used at the place where you would like to initiate SSO with PerfectMind Site. For example, if you want to display the PerferMind Profile Page upon login into the LoginRadius, then use the above code on the click event of the Login button.
>
> Please make sure you have this query parameter (loginflow=PMCMS) in the email verification URL if the user is creating an account and log in with the email verification link.

## Single Logout

When the customer logs out from the PerfectMind site, the customer should be logged out from the LoginRadius IDX application. Please see the following steps to achieve single logout workflow:

1. When the user logs out from the PerfectMindsite, the PerfectMindsite can redirect the user to `https://sitename.hub.loginradius.com/auth.aspx?action=logout&return_url<returnURL>`. This will invalidate the user's session in LoginRadius and will redirect the user to `<returnURL>`.
2. You will need to add the **return_url** under the [Deployment > Apps](https://adminconsole.loginradius.com/deployment/apps/web-apps) in the Admin Console.

Please see [Usage](https://www.loginradius.com/docs/libraries/identity-experience-framework/usage/#logout5) document for available actions in the IDX use cases.

## Contact ID in the LoginRadius Profile

LoginRadius PerfectMind SSO API creates a corresponding contact in the PerfectMind site and stores the PerfectMind contactID under the **ExternalIds** field in the LoginRadius user profile. The **ExternalIds** field is an array of object type with Source and ScourceId properties. Please see the [LoginRadius Data Point](https://www.loginradius.com/docs/api/v2/getting-started/data-points/detailed-data-points/) document for more details. E.g.

```
"ExternalIds": [{
  'Source': 'PerfectMind',
  'SourceId': contactId // contactid from PerfectMind Store.
}]
```

## Syncing Customer’s addresses from LoginRadius to PerfectMind application

There are two parts of this workflow:

- [The gathering of address information on the registration form](#the-gathering-of-address-information-on-the-registration-form)
- [Updating Data from the LoginRadius to PerfectMind](#updating-data-from-the-loginradius-to-perfectmind)

### The gathering of address information on the registration form

LoginRadius provides **Addresses** (array of object type) field with subfields as **Type**, **Address1**, **Address2**, **City**, **State**, **PostalCode**, **Region**, and **Country**. You can gather the customer's address under **Addresses** field. You can leverage the **Type** field to store the residence status flag.

We suggest you can collect the address information after they log in to your LoginRadius application and before redirecting to the Perfectmind application. Please see the code snippet below with the comments:

1. Once they logged in successfully, check-in the profile if the address object is set or not. If the Address object is not set in the Profile, show a form to gather the Address information (you can add HTML code to the **Auth.aspx** page in the Admin console to show a form to gather the Address information).

2. Once the consumer submits the form, you can call the residence status API at your end to check if the address belongs to local or not. Based on the API response, you can update the **Type** field in the Address object.

3. Make an ajax request to LoginRadius [Profile Update by Access Token](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-update-profile-by-token/) API to update the address object in the profile.

4. After that, you can redirect the customer to the perfectmind site:

```
  lr_raas_settings.login.success = function(response, flag) {
    if (response.Profile && queryString.loginflow && queryString.loginflow == "PMCMS") {
      var method = "GET";
      var url = "https://cloud-api.loginradius.com/sso/perfectmind/session";
      $.ajax({
        type: method,
        url: url,
        data: {
          "apikey": raasoption.apiKey,
          "access_token": LRObject.sessionData.getToken(),
          "perfectMindSiteName": "test"
        },
      contentType: "application/x-www-form-urlencoded",
      dataType: "json",
      success: function(resultData) {
        // write code here
        // check if the response has address object set or not
        // Call residence API to set the Type
        //Call LoginRadius profile update API to update the Address object with the type
        //After that redirect the conusmer to the PrefectMind Site
        window.location.href = resultData.URL;
      },
      error: function(response) {
      let message = "Login Failed. Please try again.";
      if (response.responseJSON && response.responseJSON.ProviderErrorResponse) {
        message = response.responseJSON.ProviderErrorResponse;
      }
      setMessage(message, true);
      console.log(response);
    }
  });
```

### Updating Data from the LoginRadius to PerfectMind**

- **Option 1: Cloud Connector**

  We will work with your team and will configure the data mapping (Address, Residency flag, etc.) of the LoginRadius and perfectmind application. We will configure the data syncing whenever the profile update event is triggered at the LoginRadius end.

  LoginRadius Cloud Connector will automatically sync the mapped data (Address, Residency flag, etc.) from the LoginRadius DB to the PerfectMind application whenever the profile is updated in the LgoinRAdius application. Please see [Cloud Connectors](https://www.loginradius.com/docs/integrations/server-side-cloud-connectors/overview/#cloud-connectors-overview) for more details.

  > **Note:** The Cloud Connector syncs data from your LoginRadius Database to your application in real-time. This connector requires no programming on your part, as the heavy lifting is performed by the LoginRadius team during the connectors set up and maintained by the LoginRadius Implementation Team. These have built in Logging, Retry actions, Business logic and other components to ensure data gets where it needs to in the proper format.

- **Option 2: Webhook**

  Loginradius also provide Webhook feature to build integrations that subscribe to certain events, e.g., profile update on LoginRadius. When the subscribed events, e.g., profile update occur on the LoginRadius site, Webhook will be triggered each time and LoginRadius sends an HTTP POST payload to the WebHook's configured client's URL.

  You can leverage the Webhook feature to listen to the **UpdateProfile** webhook event and get the cosumer profile data, including Address information at your end, and call the PerfectMind APIs to update the Address information in the PerfectMind application.
  Please see [WebHook](https://www.loginradius.com/docs/integrations/webhooks/overview/#webhooks) for more details.

## FAQs

- **If our staff members creates an account for a consumer in the PerfectMind application, how can the consumer access the account?** 
  The consumer needs to register on the LoginRadius application with the same email and leverage the LoginRadius PerfectMind SSO workflow to log in to the existing account in PerfectMind.

- **If a customer’account is deleted in the LoginRadius, will PerfectMind SSO delete the account in the PefectMind or vice-versa delete the account?** 
  No. The accounts are maintained separately in the LoginRadius and Perfectmind applications. Deleting account in one application does not delete the account in the other application.

- **How can our staff member update password for a consumer’s account in the PerfectMind application?** 
  As the authentication is managed by LoginRadius, your staff can not update the password in the PerfectMind application. Either your staff can leverage the LoginRadius Admin Console or call our server-side API from the PerfectMind Application to reset the password of a consumer.

  - Please see https://www.loginradius.com/docs/customer-management/profile-view/#view-and-manage-customers for resetting a password for a customer's account in the Admin Console.

  - Please see https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-set-password/ for more information on reset password API.

- **We are collecting DOB when signing up for an account in the LoginRadius, however, when the user is redirected to PM, the age shows as 0 in the PerfectMind application.** 
  The **Age** field is calculated automatically based on the DOB in the PerfectMind application. So, please remove the mapping for the Age field and add mapping for the birthdate.
  Please enter **Contact_Birthdate** under the key column and select the **Birth Date** under the Value column. Please save the birthdate as "mm/dd/yyyy" in the LoginRadius user profile and give it a try.

  ![Data Mapping](https://apidocs.lrcontent.com/images/Sso-Connector---LoginRadius-User-Dashboard_14832622f9ade786d75.48303166.png "Data Mapping")
