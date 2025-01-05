# LoginRadius as IDP in Azure AD B2C using OIDC CONNECT

This document will cover the steps to configure LoginRadius as Identity Provider using OpenID Connect.

## Steps To configure in LoginRadius Admin console:

- Login into the Admin console and navigate to [Platform Configuration > Access Configuration > Federated SSO > Openid Connect](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/openid-connect) and click on **Add App**.

  ![OIDC](https://apidocs.lrcontent.com/images/12_207962041005dd5c34.39780599.png "OIDC")

- After that, you need to fill the required field as follows: 

    **App Name** - App name as per your wish.

    **Secret Key** - The secret key should be the same as that you have to enter in Azure.

- For field mapping, Enter the same key value as shown below.

    ![key value](https://apidocs.lrcontent.com/images/OID2_2654061a70e78994385.69634236.png "key value")

- After filling all the fields, click on **Save**.

## Steps To configure LoginRadius as IDP in Azure:


>**Prerequisites:**
>- Check whether the user flows and custom policies in Azure Active Directory B2C are created in the application. If not, follow [this document](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-user-flow) to create the User Flow.
>-  Verify whether a web application in Azure Active Directory B2C is created, and if not, follow [this document](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-applications?tabs=app-reg-ga) to create the web application.


### To add the identity provider

 - Sign in to the Azure portal as the Global Administrator of your **Azure AD B2C tenant**.

 - Make sure that you have switched to the Azure AD B2C directory as in the picture below.
If you have not switched, find your Azure AD B2C directory in the Directory namelist and select Switch.

    ![AD](https://apidocs.lrcontent.com/images/OID3_2101461a71224580b24.33643492.png "AD")

-   In the Home page, search and select Azure AD B2C.  

    ![Azure AD B2C](https://apidocs.lrcontent.com/images/OID4_511661a7127a3e2240.86073761.png "Azure AD B2C")

-   Select Identity providers, and then select New OpenID Connect provider.  

    ![Identity providers](https://apidocs.lrcontent.com/images/OID5_1793461a712d01619b5.50755197.png "Identity providers")

-   Fill in the required detail in the configure custom IPD form as seen in the above image as follows: 

|FIELD NAME   | VALUE | DESCRIPTION |
| ----------- | ----------- | ----------- |
| Name      | `<Name of the IDP>`     |   Name as you wish to see in the Login screen.    |
| Metadata url   | `https://cloud-api.loginradius.com/sso/oidc/v2/<sitename>/<oidcappname>/.well-known/openid-configuration`        | Use this URL format by replacing the `<site name>` as app name of LoginRadius app and `<OIDC appname>` as in the OIDC configuration in the federated SSO > OIDC Connect section of Admin console | 
| Client ID | `\<Api Key>`       |   Api key of the LoginRadius    |
| Client secret | `<Secrete Key >`(If Needed)       |   Secret key of the LoginRadius Account   |
| Scope | openid      |   Keep it default one no need to change |  
| Response type  | id_token      |   To get the token as query parameter  |  
| Response mode  | query      |  To get the response in the Query parameter   | 
| Domain hint  | `<your domain.com>`     |  It is used on the /authorize endpoint to automatically select the provider instead of showing the sign-in page.   |  
| User ID  | UserID      |  User ID as per your wish to configure same in the admin console.   |  
| Display name  | DisplayName      |  Display name as per your wish to configure same in the admin console.   |  
| Given name  | given_name      |  Given name as per your wish to configure same in the admin console.   |  
| Surname  | family_name      |  Surname as per your wish to configure same in the admin console.   | 
| Email  | email      |  Email as per your wish to configure same in the admin console.   |   

- After Filling all mandatory fields, click on the save button on the top.

    ![Save](https://apidocs.lrcontent.com/images/OID6_679861a71734844864.53689548.png "Save now")

### Add the identity provider to a user flow

 - In your Azure AD B2C tenant, select **User flows** which you have created.
    
-   Click the user flow that you want to add the identity provider.

    ![User flows](https://apidocs.lrcontent.com/images/OID7_799461a7184e679a12.52764168.png "User flows")

-   Under Social identity providers, select the identity provider which you have added.

    ![identity provider](https://apidocs.lrcontent.com/images/OID8_239961a71909136974.10329217.png "identity provider")

- Select Save.

## Test your user flow
Before Testing the user flow, make sure the **replay URL** and **Run user flow endpoint URL** are whitelisted in the LoginRadius admin console.

- To test your policy, select **Run user flow**.

    ![user](https://apidocs.lrcontent.com/images/OID9_2745761a719982f3538.60602057.png "user")

- For Application, select the web application name that you have created from the drop-down menu. 

- The Reply URL should show https://jwt.ms.
Select the Run user flow button.

- From the **sign-up** or **sign-in** page, select the identity provider you want to sign in as the name you have provided in the IDP configuration.

    ![sign-up](https://apidocs.lrcontent.com/images/OID10_2274861a71a2f479026.03011772.png "sign-up")

- Once you have logged in successfully, you will be redirected to https://jwt.ms with the token. The information passed from the LoginRadius will be shown below or it will register with the OTP with a confirmation page.

    ![confirmation](https://apidocs.lrcontent.com/images/OID11_1477261a71a81d4ef59.83306350.png "confirmation")