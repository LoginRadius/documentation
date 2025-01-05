# AWS Cognito as Custom IDP With LoginRadius

This document provides a step-by-step guide to configure a AWS Cognito application as Custom IDP using the OAuth workflow with your LoginRadius application.

   ![AWS IDP](https://apidocs.lrcontent.com/images/image5_1037762541a97640c52.71668611.png "AWS IDP")
## Requirement:

-   AWS account with AWS Cognito Access to create the User pool.
    
-   LoginRadius Admin Console Access to Add a new custom IDP
    

## Configuration in AWS:

<b> **1.** </b>  Login into the AWS console and navigate to **Services>Securities Identities and complains>Cognito**
    

![AWS IDP ](https://apidocs.lrcontent.com/images/AWS-18_6463624b5ad5cc1a08.05306741.png "AWS IDP")

<b> **2.** </b> In Manage, user pool click on **Create user pool** button, enter the Pool name, and click on Step through settings.
    

![AWS IDP](https://apidocs.lrcontent.com/images/image4_2527262541b30800486.92510717.png "AWS IDP")

<b> **3.** </b>  On the attributes tab select the preferred flow to the user will login through the Username or email/PhoneNumber.Add the attributes that need to be gathered from the users.
    

![AWS IDP](https://apidocs.lrcontent.com/images/image8_2225162541b7b1af541.03467104.png "AWS IDP")
  

<b> **4.** </b>  On the App client tab. Click on the **Add an app client**
    

![AWS IDP](https://apidocs.lrcontent.com/images/image6_3182162541c530d8e55.10347925.png "AWS IDP")
<b> **5.** </b>  Now fill in all the required fields as highlighted in the below screenshot.
    

![AWS IDP](https://apidocs.lrcontent.com/images/image17_2067062541d6e547ea6.60039860.png "AWS IDP")

<b> **6.** </b>  On the review, tab click on **Create pool** button to create the user pool.
    

![AWS IDP](https://apidocs.lrcontent.com/images/image15_1829962541e2776e7b0.92840758.png "AWS IDP")

<b> **7.** </b>  After creating a pool navigate to the Domain name tab. Enter the domain prefix and check for availability. If the domain is available, then save the changes by clicking on the **Save changes** button.
    

![AWS IDP](https://apidocs.lrcontent.com/images/image1_2943362541e851d7f11.25275019.png "AWS IDP")
<b> **8.** </b>  After Setup the Domain name navigates to the **App client settings** tab and enables the Option as highlighted on the screenshot.  
    For Callback URLs `https://<LoginRadiusAppNname>.hub.loginradius.com:443/socialauth/validate.sauth`
      
    To know the app name check the Dashboard page- https://adminconsole.loginradius.com/platform-security/data-access-protection/api-credentials/account-api-keys.  
      
    e.g.:**https://< APP Name>.hub.loginradius.com:443/socialauth/validate.sauth and click on the** **save changes** button
    

![AWS IDP](https://apidocs.lrcontent.com/images/image12_1985462541f4a175943.84616565.png "AWS IDP")  

<b> **9.** </b>  After configuration of the App client Navigate to the Users and groups tab and click on create a user for testing the suit.
    

![AWS IDP](https://apidocs.lrcontent.com/images/image13_1691162541fc70b4698.66099846.png "AWS IDP")

<b> **10.** </b>  On clicking the Create user button. Enter the details as required for creating the user as below screenshot.
    

![AWS IDP](https://apidocs.lrcontent.com/images/image3_1778962541ff2b9fb19.93725564.png "AWS IDP")

<b> **11.** </b>  After creating, the user need to note the below details to be entered in the LoginRadius Custom IDP OAuth configuration page.
    
### Data to be used in LoginRadius:

#### Domain

To know the domain, kindly navigate to the **App integration** tab and copy the Domain

![AWS IDP](https://apidocs.lrcontent.com/images/image14_3921625420310e4a10.92083685.png "AWS IDP")

#### Application Key and Secrete

To know the Application Key of your client navigate to App client

![AWS IDP](https://apidocs.lrcontent.com/images/image2_426862542092e48c18.80359070.png "AWS IDP")

To know the secret click on the **Show Details** button

![AWS IDP](https://apidocs.lrcontent.com/images/image9_2969662542144bfb5d5.54280777.png "AWS IDP")

## LoginRadius IDP configuration:

<b> **1.** </b> Navigate to Platform Configuration>Authentication Configuration>Custom IDPs in admin console
    
![AWS IDP](https://apidocs.lrcontent.com/images/image19_62636254218608ae71.88677115.png "AWS IDP")
  
<b> **2.** </b>  Go to OAuth Provider and click on the **Add Provider** button
    
![AWS IDP](https://apidocs.lrcontent.com/images/image7_5744625421ba702498.59666247.png "AWS IDP")  

<b> **3.** </b>  Enter the details of your IDP as follows:
    

   <b> **1.** </b>  **Provider Name**- Enter any desired unique name for your app, e.g., awscognito. This name will be displayed under the social login forms in the LoginRadius Identity Framework page as well as on the social login form rendered by LoginRadius V2.js library on the customer’s web application.
    
   <b> **2.** </b>  **Customer Login Endpoint** -Enter the Endpoint of your Amazon user pool domain as follows  
    Format- `https://<Domain>/oauth2/authorize` 
    To know the domain follow the steps-  
    e.g.: https://testlr.auth.us-east-1.amazoncognito.com/oauth2/authorize
    
   <b> **3.** </b>  **Access Token Endpoint** - Enter the Endpoint of your Amazon user pool domain as follows  
    Format- `https://<Domain>/oauth2/token`  
    To know the domain follow the steps-  
    e.g.: https://testlr.auth.us-east-1.amazoncognito.com/oauth2/token
    
   <b> **4.** </b>  **Application Key** -  To know the Application key from Cognito follow the steps [here](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/aws-cognito-as-custom-idp/#applicationkeyandsecrete4)
    
   <b> **5.** </b>  **Application Secret**-  To know the Application secret from Cognito follow the steps [here](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/aws-cognito-as-custom-idp/#applicationkeyandsecrete4)
    
   <b> **6.** </b>  **Scope**- email openid
    
   <b> **7.** </b>  **Response Type**- code  
      
    
   <b> **8.** </b>  **Customer Profile Endpoint** -Enter the Endpoint of your Amazon user pool domain as follows
   
Format- `https://<Domain>/oauth2/userInfo`  
   
To know the domain follow the steps- [here](https://www.loginradius.com/docs/single-sign-on/concept/custom-idp-provider/aws-cognito-as-custom-idp/#datatobeusedinloginradius2)
    
e.g.: https://testlr.auth.us-east-1.amazoncognito.com/oauth2/userInfo
    
   <b> **9.** </b>  **Request Token Http Method**- Post
    
   <b> **10.** </b>  **Header**  
 
|Key| Value |
|---|--|
|Authorization   |Bearer #accesstoken#  |


   ![AWS IDP](https://apidocs.lrcontent.com/images/AWS-4_24953624b43b2c25aa4.06647398.png "AWS IDP")

   <b> **11.** </b>  Data Mapping  

   Below, two fields are mandatory to create an account in LoginRadius.

|Fields| Value |
|------|--|
|  ID    | sub |
|  Email    | email |


    
   ![AWS Idp](https://apidocs.lrcontent.com/images/AWS-3_24872624b431e8a5552.82501656.png "AWS IDP")  
  

  <b> **12.** </b> After Providing all data Click on the Save button to **save** the provider  
  

![AWS IDP](https://apidocs.lrcontent.com/images/image18_30346254222342a2a4.49539007.png "AWS IDP")

## To test the Custom IDP in LoginRadius:

-   Go to the App URL `https://<-APP Name->.hub.loginradius.com/`
    
-   Click on the icon with the Name of the social provider you are given on the login radius configuration page
    
-   After redirection to the Aws Cognito UI, enter the user credentials you have created in the Cognito User Pool.
    
-   After successful authentication, it will redirect to the profile page in the IDX.
    

![AWS IDP](https://apidocs.lrcontent.com/images/image20_23756254227eee6e09.02661655.png "AWS IDP")