
# LoginRadius App as Custom IDP With Another LoginRadius App


LoginRadius can act as Identity Provider as well as Service Provider and establishes the trust and authentication process between the multiple applications using the industry-standard protocols ( SAML, OIDC, Oauth and JWT).

  

If you have multiple LoginRadius applications and wants to create a smooth experience for the consumer by unifying their accounts and allowing them to login with one identity, you can leverage any industry-standard protocols ( SAML, OIDC, Oauth and JWT) to create single sign-on workflow where on one LoginRadius application acts as Identity Provider and other LoginRadius application act as service Provider.

  

This document provides a step-by-step guide to configure a LoginRadius application as Custom IDP using the OAuth workflow with your other LoginRadius application.


# Configuration in the Service Provider LoginRadius Application

<b> **1.** </b>  Navigate to **Platform Configuration>Authentication Configuration>Custom IDPs** in admin console
      
![IDP](https://apidocs.lrcontent.com/images/image1_1355462542351a0a6c3.96068926.png "IDP")  

<b> **2.** </b>  Go to the **OAuth Provider** and click on the **Add Provider** button.

![IDP](https://apidocs.lrcontent.com/images/image6_20302625423833f7f83.27175743.png "IDP")      
  

<b> **3.** </b>  Enter the following details of your Identity Provider LoginRadius application as follows:  
      
    

-   **Provider Name**- Enter any desired unique name for your app. This name will be displayed under the social login forms in the LoginRadius Identity Framework page as well as on the social login form rendered by LoginRadius V2.js library on the customer’s web application.
    
-   **Customer Login Endpoint** - https://cloud-api.loginradius.com/sso/oauth/redirect  
      
    
-   **Access Token Endpoint**- https://cloud-api.loginradius.com/sso/oauth/access_token
    
-   **Application Key**- Enter the API Key for your LoginRadius Identity Provider application. Please see [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#api-key-and-secret) for how to get the API key in the Admin Console.
    
-   **Application Secret**- Enter the API Secret for your LoginRadius Identity Provider application. Please see [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#api-key-and-secret) for how to get the API key in the Admin Console.
    
-   **Scope**- email
    
-   **Response Type**- code
    
-   **Customer Profile Endpoint** -`[https://api.loginradius.com/identity/v2/auth/account?apiKey=](https://api.loginradius.com/identity/v2/auth/account?apiKey=)<Identity Provider LoginRadius API key>`: Please see [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#api-key-and-secret) for how to get the API key in the Admin Console.
    
-   **Request Token Http Method**- POST
    
-   **Query Parameter**  
      
    

|     Key       |       Value         |
| ------------- | ------------------- |
| access_token  |    #accesstoken#    |



   ![IDP](https://apidocs.lrcontent.com/images/IDP-45_4713624b352cdf6d71.09942006.png "IDp")



-   **Data Mapping**  
    Below two fields are mandatory to create an account in LoginRadius.
    

| Fields |      Value       |
| ------ | ---------------- |
|   ID   |       Uid        |
| Email  | Email[0].Value   |

   ![IDP](https://apidocs.lrcontent.com/images/idp-3_16809624b34e213cdc5.67499630.png "IDP")
  
<b> **4.** </b> After Providing all data Click on the **Save** button to save the provider.
  
![IDP](https://apidocs.lrcontent.com/images/image4_19601625423b538e835.26843659.png "IDP")

## To test the Custom IDP With the Service Provider LoginRadius App:

-   Go to the Service Provider LoginRadius App **IDX URL https://< APP Name>.hub.loginradius.com/** where **APP Name** is the name of LoginRadius site for your Service Provider application.  
      
    
-   Click on the icon with the Name of a social provider you are given on the login radius configuration page
    
-   After redirection to the Auth0 Application UI, enter the user credentials for LoginRadius Identity Provider application.
    
-   After successful authentication, it will redirect to the profile page in the Service Provider IDX.
    
![IDP](https://apidocs.lrcontent.com/images/image2_17017625423d81d6743.62989932.png "IDP")