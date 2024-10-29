# Auth0 as custom IDP in LoginRadius

# Introduction:

This document provides a step-by-step guide to configure an Auth0 application as Custom IDP using the OAuth workflow with your LoginRadius application.

  

**Requirement:**

-   Auth0 account with paid access (This option is not available in free plan).
    
-   Loginradius Admin Console Access to Add a new custom IDP .
    

# Configuration of Auth0

1.  Login to [Auth0](https://auth0.com/)
    
2.  Navigate to Applications>Applications>Select the App you want to set up. E.g.: Default App.  

 ![AuthO Custom IDP](https://apidocs.lrcontent.com/images/image11_2447662543ba657b581.05443673.png "AuthO Custom IDP")

3.  After selecting the app find the **Application URIs** section on a page and enter the callback URL in the Allowed Callback URLs field as follows:  
       Format: `https://<APP NAME>.hub.loginradius.com:443/socialauth/validate.sauth` 

    ![AuthO custom IDP](https://apidocs.lrcontent.com/images/image9_2964762543bea847257.22754195.png "AuthO custom IDP")
    
4.  After entering the callback URL Scroll to the bottom and save the changes by clicking the **Save Changes** button. 

    ![AuthO custom IDP](https://apidocs.lrcontent.com/images/image6_3170062543c3e5589e0.61583322.png "AuthO custom IDP")
    
5.  After saving the configuration. To add a new user to the application navigate to **User Management> Users** and click Create User button  
      
    ![AuthO custom IDP](https://apidocs.lrcontent.com/images/image8_1628262543c7faa82b1.99796395.png "AuthO custom IDP")     
6.  Enter all mandatory fields and click on Create user to add a new user to the Auth0 application.  

    ![AuthO custom IDP](https://apidocs.lrcontent.com/images/image10_914762543ccedc6d43.96751841.png "AuthO custom IDP")
    

## Data to be used in LoginRadius

### Login Endpoint, Token Endpoint, Profile Endpoint

-   On clicking the APP Scroll down to the bottom of a page and find Advanced Settings and click on it.  

    ![AuthO custom IDP](https://apidocs.lrcontent.com/images/image4_2462062543d1ff13714.03073039.png "AuthO custom IDP")
    

-   In Advanced Settings navigate to the Endpoints tab and copy the endpoints for future Loginradius configuration
    

-   **Customer Login Endpoint** - OAuth Authorization URL
    
-   **Access Token Endpoint**  - OAuth Token URL
    
-   **Customer Profile Endpoint**  - OAuth User Info URL
    

  
![AuthO custom IDP](https://apidocs.lrcontent.com/images/image5_1915062543d57d98003.15433352.png "AuthO custom IDP")

### Application Key and Application Secret:

-   In the Applications>Applications select the App that needs to be configured  
      
    
-   Navigate to the settings tab and find the Basic information section Copy the Client ID and Client Secret as in the below screenshot.  
     
-   **Application Key**  - Client ID
    
-   **Application Secret**  - Client Secret  
      
![AuthO custom IDP](https://apidocs.lrcontent.com/images/image7_2348262543d9de82f39.98756951.png "AuthO custom IDP")    

## LoginRadius IDP configuration:

1.  Navigate to **Platform Configuration>Authentication Configuration>Custom IDPs** in admin console

    ![AuthO custom IDP](https://apidocs.lrcontent.com/images/image3_2571062543dcbb8b836.58588493.png "AuthO custom IDP")

2.  Go to OAuth Provider and click on the **Add Provider** button.
    
3.  Enter the details of your IDP as follows:  
      
    1.  **Provider Name**- As per your wish e.g.: “auth0”
    
    2.  **Customer Login Endpoint** -To know the Login endpoint of the Auth0 application. Follow the steps mentioned [here  
    ](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/autho-as-custom-idp/#loginendpointtokenendpointprofileendpoint1)e.g.: https://optesttt.us.auth0.com/authorize
    
    3.  **Access Token Endpoint**-To know the Token endpoint of the Auth0 application. Follow the steps mentioned [here](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/autho-as-custom-idp/#loginendpointtokenendpointprofileendpoint1) e.g.: https://optesttt.us.auth0.com/oauth/token
    
    4.  **Application Key**-  To know the Application key from Aut0 application follow the steps [here](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/autho-as-custom-idp/#applicationkeyandapplicationsecret2)
    
    5.  **Application Secret**-  To know the Application secret from the Auth0 application follow the steps [here](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/autho-as-custom-idp/#applicationkeyandapplicationsecret2)
    
    6.  **Scope**- openid email
    
    7.  **Response Type**- code
    
    8.  **Customer Profile Endpoint** -To know the Profile endpoint of the Auth0 application. Follow the steps mentioned [here](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/autho-as-custom-idp/#loginendpointtokenendpointprofileendpoint1)
    e.g.: https://optesttt.us.auth0.com/userinfo
    
    9.  **Request Token Http Method**- POST
    
    10.   **Header**  

|Key| Value |
|---|--|
| Authorization  | Bearer #accesstoken# |

![AuthO custom IDP](https://apidocs.lrcontent.com/images/AuthO-11_17191624b8216809579.71160830.png "AuthO custom IDP") 


**4.   Data Mapping**  


 Below, two fields are mandatory to create an account in Loginradius.
    

 |Fields| Value |
 |------|--|
 |   ID   | sub |
 |   Email   | email |

  ![AuthO custom IDP](https://apidocs.lrcontent.com/images/AuthO-12_7279624b82cccc6330.78947034.png "AuthO custom IDP")  

- After Providing all data. Click on the **Save button** to save the provider.

   ![AuthO custom IDP](https://apidocs.lrcontent.com/images/image1_1999562543e50da4da4.71503986.png "AuthO custom IDP")

## To test the Custom IDP in Loginradius:

-   Go to the App IDX URL `https://<APP Name>.hub.loginradius.com/`
    
-   Click on the icon with the Name of a social provider you are given on the login radius configuration page
    
-   After redirecting to the Auth0 Application UI, enter the user credentials you have created in the Auth0 User via application.
    
-   After successful authentication, it will redirect to the profile page in the IDX of the LoginRadius.

![AuthO custom IDP](https://apidocs.lrcontent.com/images/image2_900162543ebb417ca4.02458418.png "AuthO custom IDP")