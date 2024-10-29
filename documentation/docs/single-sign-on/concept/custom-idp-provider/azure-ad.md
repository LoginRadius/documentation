# Setup Azure AD as an Id Provider

This document will take you through the configuration steps required to set up **Azure AD** as an **Identity Provider** over the social login page of your hosted/self hosted Identity Experience framework.

## Prerequisites

To configure Azure AD as an Id Provider with LoginRadius, you need the following items:

-   Custom SAML IDP feature
    
-   Azure AD account
    

# Implementation Guide

## Step 1: Configuring App on Azure Active Directory

 **1.** Log in to your [Azure Portal](https://portal.azure.com/).
    
 **2.** Click on the Azure Active Directory tab in the Left panel.                

![Azure](https://apidocs.lrcontent.com/images/1_415362faee31a61411.69032074.png)
  
**3.** From the sub menu appearing at the left, select **Enterprise Applications**.  
      
         

![azure 2](https://apidocs.lrcontent.com/images/2_2541962faee6e720f79.97114490.png)

  

**4.** Add an application by clicking the **New application** button at the top.  
      
      
    

![Azure 3](https://apidocs.lrcontent.com/images/3_3041962faee92cdf321.63136927.png)

  

**5.** Click **+ New application**.  
      
      
![Azure 4](https://apidocs.lrcontent.com/images/4_1893262faeebd433f47.20214940.png)  
      
    
**6.** In the **Add an application** section, click **Non-gallery application**.  
      
      
![Azure 5](https://apidocs.lrcontent.com/images/5_1934362faef012a5d35.65641583.png)  
      
    
**7.** In the Name box, specify any APP name and click Add.
    
**8.** Wait for the application to load, as it might take a while and then click **2. Setup single sign-on** item on the screen.

![Azure 6](https://apidocs.lrcontent.com/images/6_1054862faef30e9cec0.72116056.png)
    
**9.** Choose SAML to generate some basic information which needs to be configured in respective sections as shown below.

![Azure 7](https://apidocs.lrcontent.com/images/7_1192462faef81ca1fd3.01440567.png)  
      
    
**10.** In the **Basic SAML Configuration** section, enter the following values
    

- **Identifier (Entity ID)** : `https://<LR appname>.hub.loginradius.com/`
    
- **Reply URL (Assertion Consumer Service URL)** :  **Add the following URLs**
    - `https://<LR appname>.hub.loginradius.com/saml/serviceprovider/AdfsACS.aspx`
    - `https://<LR appname>.hub.loginradius.com/saml/serviceprovider/SpInitiatedACS.aspx`
    
- **Sign on UR**L: `https://<LR appname>.hub.loginradius.com`
    

**11.** On the **Set up Single Sign-On with SAML page**, download the **Certificate (Base64)** mentioned under the **SAML Signing Certificate** section, and save it on your computer.  
      
    

![Azure 8](https://apidocs.lrcontent.com/images/8_1291962faf018c95a53.46837072.png)
  
    

**12.** Similarly, copy the **Login URL** and **Logout URL** from the Set up LoginRadius section.

![Azure 9](https://apidocs.lrcontent.com/images/9_2405462faf057003338.94170955.png)
    

## Step 2 - Configuring LoginRadius Admin Console

  

Follow the steps given below:

1.  Login to your LoginRadius [Admin Console](https://adminconsole.loginradius.com/Admin-console).
    
2.  Navigate to [Admin Console->Platform Configuration->Authentication Configuration -> Custom IDPs](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/custom-idps/saml-provider).
    
3.  Click on the **SAML Provider** tab in the side menu.
    
4.  In **Provider Name** enter a unique name of SAML app.
    
5.  In the **Display Provider Name** enter any customized provider name.
    
6.  Select **Service Provider Initiated Login** from the dropdown.
    
7.  For **ID Provider Binding**, enter **urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST**.
    
8.  For **ID Provider Location**, enter the **Login URL**  which you’ve obtained from the Azure AD dashboard .
    
9.  For **ID Provider Logout Url**, enter the **Logout URL** from the Azure AD dashboard.
    
10.  For **ID Provider Certificate**, enter the **Azure AD certificate** which you’ve obatiained from the Azure AD dashboard
    
11.  For **Service Provider Certificate** and **Service Provider Certificate key**, enter LoginRadius certificate and key. Please see [here](https://www.loginradius.com/docs/single-sign-on/federated-sso/saml/usage/#generateloginradiuscertificateandkey6) for how to generate LoginRadius certificate and key.
    
> NOTE: Make sure to enter the certificate value with header and footer. 

Example 

```
-----BEGIN CERTIFICATE-----

<certifciate value>

-----END CERTIFICATE-----
```

And the certificate value with header and footer

**12.**  For **RelayState Parameter**, enter **RelayState**.
    
**13.**  For **DATA MAPPING** select the LoginRadius' fields (SP fields) and enter the corresponding Azure AD's fields(IdP fields).Following are some listed field name mapping for your reference:
    
| Fields    | Profile Key                                                     |
|-----------|-----------------------------------------------------------------|
| Email     | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name      |
| FirstName | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname |
| LastName  | http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname   |

>Note: The Email field mapping is required.

**14.** Enable **Include in Social Schema** to include icon on the social schema generated by LoginRadius V2 js.
    
**15.** After obtaining all the above details, enter it in the form open as below:
    
![LR as SP and Salesforce as IDP](https://apidocs.lrcontent.com/images/10_728462faf18bda9b77.79638690.png "SF as SAML IDP")

**16.** Click **Add** to create the SAML app.
    

## Step 3: Create an Azure AD test user

The objective of this section is to create a test user in the Azure portal called Britta Simon.

**1.** In the Azure portal home page, in the left panel, select Azure Active Directory, and then select Users.
    
 

![Azure 11](https://apidocs.lrcontent.com/images/11_1093762faf1c4dd2240.39532314.png)
 
**2.** This will bring the list of available users, you can also create a new one using the + New user button at the top of the screen.
    

![Azure 12](https://apidocs.lrcontent.com/images/12_1552062faf1ed58af54.09058467.png )

  

**3.** In the User properties (while adding a new user), perform the following steps.
    

![Azure 13](https://apidocs.lrcontent.com/images/13_1714362faf212225566.55303644.png)

  
**A.** In the **Name** field enter **BrittaSimon**.  
**B.** In the **User nam**e field type **brittasimon**, the domain will come from the dropdown itself. The provided username+domain will be the email address of the user.  
**C.** Select **Show password** checkbox, and then note down the value that's displayed in the Password box.  
**D.** Click **Create** to save the user.

## Step 4: Assign the user in Azure AD LoginRadius application

In this section, you enable Britta Simon to use Azure single sign-on by granting access to LoginRadius application.

**1.** In the Azure portal, select **Enterprise Applications > select All applications**. This will bring the list of all applications configured, select the SAML application you have created from here. This will open the Dashboard for the application.
    
**2.** In the menu on the left, select Users and groups.
    

![Azure 14](https://apidocs.lrcontent.com/images/14_2592062faf2826e2085.60875842.png)

  

**3.** Click the **Add user/group** button, this will open a new window to **add User and assign the access**.
    
**4.** In the **Users and groups** dialog select the user from the Users list, then click the **Select** button at the bottom of the screen.
    

![Azure 15](https://apidocs.lrcontent.com/images/15_2513362faf2a86de2f1.80667111.png)

**5.** In the **Add Assignment** dialog, click the **Assign** button.  
      
    
![Azure 16](https://apidocs.lrcontent.com/images/16_2994762faf2da635377.30519361.png)

## Step 5: Test single sign-on

In this section, you will test your Azure AD single sign-on

1.  Open your IDX page (`https://<LR appname>.hub.loginradius.com/auth.apsx`) in your browser. **Login with Azure Ad** App option will be shown under the social login.
    
2.  Click **Azure Ad** App and it should open a pop-up for asking you to sign into your Azure Ad account
    
3.  After the authentication, your pop-up will closed and you will be logged into the LoginRadius IDX profile page `(https://<LR appname>.hub.loginradius.com/auth.apsx)`.
    
