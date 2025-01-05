# LoginRadius as IdP with Office 365 as SP

This document describes the step by step process to integrate office365 as an SP and LoginRadius as an IDP in service provider-initiated SAML workflow.

  

![Flow Chart](https://apidocs.lrcontent.com/images/1_157006320459e91b955.66754538.png "Flow Chart")
  
## Prerequisites:

Before you get started you should ensure that you have the following prerequisites:

1.  An administrator account for Office 365.
    
2.  SAML feature is enabled for your account in LoginRadius Admin Console.
    
3.  A domain name that you own for Office 365.
    
4.  Windows PowerShell with the Azure AD PowerShell module installed.
    
5.  A public certificate and private key pair are required to successfully connect applications with LoginRadius. Click [here](https://www.ssls.com/knowledgebase/how-can-i-find-the-private-key-for-my-ssl-certificate/) to Learn how to manage certificates and private keys.
    
6.  You must generate a public certificate and private key pair to connect an application to LoginRadius.
    

## Limitation

-   To enable single sign-on using SAML workflow between LoginRadius and Office 365 users can only login with the email address of the federated domain in Office365.
    
-   The ImmutableId and email address for the user in Office365 should match Uid and email address in LoginRadius respectively.
    

## Configuring LoginRadius Admin Console

This section covers everything you need to configure in your **LoginRadius Admin Console**.

> **NOTE**: If you have enabled or added a **Custom Domain** for your existing application, please be aware that you should **replace** the URL `https://<LoginRadius Site Name>.hub.loginradius.com/` with `https://<Your Custom Domain>/`  in fields such as **Issuer, EntityID, Login and Logout URLs**, or any fields having the same format.

**1.**  Login to your **LoginRadius Admin Console**.
    
**2.**  Go to [Platform Configuration > Access Configuration > Federated SSO](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso).
    
**3.**  Select the **SAML** Tab and click on the **‘Add A New APP’** button.
    

![Admin Console](https://apidocs.lrcontent.com/images/4_37556320468dbe98d2.68263800.png "Admin Console")

**4.**  Select **SAML 2.0** in the **SAML Version** checkbox.
    
**5.**  Select **Service Provider Initiated Login flow** in the **Login Flow** checkbox.
    
**6.**  Enter your desired SAML app name in the **SAML App Name** field.
    
**7.**  Enter the LoginRadius Certificate key under [ID Provider Certificate Key](https://www.loginradius.com/docs/single-sign-on/concept/saml-miscellaneous/certificate/).

**8.**  Enter the LoginRadius Certificate in **ID Provider Certificate field.**
    
**9.**  Enter the **Office365** Certificate under **Service Provider Certificate**. Reference https://nexus.microsoftonline-p.com/federationmetadata/saml20/federationmetadata.xml.

> **Note:** Make sure to enclose the certificate in the following format:

        
        -----BEGIN CERTIFICATE-----
        < Service Provider certificate >
        -----END CERTIFICATE-----
        

**10.**  For **ATTRIBUTES** map the LR fields with **Office365** fields.

| Name (Office 365 Field) | Format | Value (LoginRadius Field) |
|--|--|--|
| NameIdentifier | urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified | Uid |
| IDPEmail| urn:oasis:names:tc:SAML:2.0 :attrname-format:unspecified | Email |


> **Note:** In **Value**, enter the LoginRadius mapping field name. Get the allowed fields of LoginRadius from [here](https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/saml/saml-security-assertion-markup-language-#saml-security-assertion-markup-language-)

**11.**  Select **`urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`** for **Name Id Format.**
    
**12.**  Enter **`https://<LoginRadius Site Name >.hub.loginradius.com/auth.aspx`** In Login URL.
    
**13.**  For AFTER LOGOUT URL enter **`https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=logout`**
    
**14.**  Enter `https://login.windows.net/common/oauth2/logout` in the **Service Provider Logout URL** field.
    
**15.**  Please enter **`urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`** under **DEFAULT REQUEST BINDING**
    
**16.**  Please enter `https://login.microsoftonline.com/login.srf` under **Assertion Consumer Service Location.**
    
**17.**  Please enter **`urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`** under **Assertion Consumer Service Binding.**
    
**18.**  For **RELAY STATE PARAMETER** enter **RelayState.**
    
**19.**  Enter **`https://login.microsoftonline.com/<tenant ID>/`** under **APP AUDIENCES**

> **Note:** For existing Federated SAML, the configuration with the APP Audiences value **`urn:federation:MicrosoftOnline`**, will remain unaffected.

    
**20.**  Select **HTTPPost** from **SSO METHOD.**
    
**21.**  Click **Add a SAML App** button to add the SAML app.
    

  

## Configure Office 365 SAML settings

Download and install the Windows Azure Active Directory Module for Windows PowerShell. Once installed, you will use the cmdlets to configure your Windows Azure AD domains as federated domains. For instructions about how to download and install the cmdlets, see http://technet.microsoft.com/library/jj151815.aspx

### Create a Federated Domain on Office 365

Before configuring federation on an Azure AD domain, it must have a custom domain configured. You cannot federate the default domain that is provided by Microsoft. The default domain from Microsoft ends with "onmicrosoft.com".

**1.**  Create a managed domain under [Settings-> Domains -> Add domain](https://admin.microsoft.com/AdminPortal/Home#/Domains)
    
![Office 365](https://apidocs.lrcontent.com/images/5_24181632046f8dd6229.60200054.png "Office 365")

**2.**  Follow steps to verify ownership of the domain.
    
**3.**  Ensure that the created domain is NOT the default domain.
    

### Configuring a Federated Domain on Office 365

This section covers everything you need to configure **federated domain** on your **Office365**.

> **NOTE**: If you have enabled or added a **Custom Domain** for your existing application, please be aware that you should **replace** the URL `https://<LoginRadius Site Name>.hub.loginradius.com/` with `https://<Your Custom Domain>/`  in fields such as **Issuer, EntityID, Login and Logout URLs**, or any fields having the same format.

**1.**  Open PowerShell and run the command `Connect-MsolService` and log in using Office 365 Login credentials.
    
**2.**  Run command `Get-MsolDomain` in the PowerShell and ensure the newly created managed domain is listed there.
    
**3.**  Use the following values for setting up the federated domain:
    
```
	$domainname = "<your domain name>"
    $logoffuri = "https://<LoginRadius Site Name>.hub.loginradius.com/service/saml/idp/logout?appname=<SAMLAppName>"
    $passivelogonuri = "https://<LoginRadius Site Name>.hub.loginradius.com/service/saml/idp/login?appname=<SAMLAppName>"
    $cert = "<Your loginradius certficate>"
    $issueruri = "https://<LoginRadius Site Name>.hub.loginradius.com/"
    $protocol = "SAMLP"
```
> **Note:** You should remove the following from < Your loginradius certficate> content: 

> - new-line character
> - -----BEGIN CERTIFICATE----
> - -----END CERTIFICATE-----

**4.**  Run the following command to assign the listed values from the previous step to the federated domain : 

`Set-MsolDomainAuthentication -DomainName $domainname -FederationBrandName    $domainname -Authentication Federated -IssuerUri $issueruri -LogOffUri $logoffuri -PassiveLogOnUri $passivelogonuri -SigningCertificate $cert -PreferredAuthenticationProtocol $protocol`

**5.**  Verify that the domain is now set to federated using `Get-MsolDomain`
 
**6.**  To modify any of the parameters already set for the domain, switch the domain back to `Managed` by using the command: `Set-MsolDomainAuthentication -DomainName "< your domain name>" -Authentication Managed`.

After which assuming the constants $domainname, $issueruri etc. have already been set, update whichever constant you need to by reassigning a value to it, and call the command: 

`Set-MsolDomainAuthentication -DomainName $domainname -FederationBrandName $domainname -Authentication Federated -IssuerUri $issueruri -LogOffUri $logoffuri -PassiveLogOnUri $passivelogonuri -SigningCertificate $cert -PreferredAuthenticationProtocol $protocol` again.

**7.**  Verify your changes with `Get-MsolDomainFederationSettings -DomainName "<your domain name>" | Format-List *`
    

## Create a user in office 365 corresponding to LoginRadius user account

Before you can authenticate your users to Office 365 you must provision Azure AD with user principals that correspond to the assertion in the SAML 2.0 claim. If these user principals are not known to Azure AD in advance then they cannot be used for federated sign-in.

**1.**  Create a new MsolUser with an immutableid corresponding to a LoginRadius UID and with an email using the newly created domain name:
```
	New-MsolUser
        -UserPrincipalName john.doe@companydomain.com
		-ImmutableId 2e28f6ce-4e3b-4538-b284-1461f9379b48
		-DisplayName "John Doe"
		-FirstName "John"
		-LastName "Doe"
		-AlternateEmailAddresses "john.doe@company.com"
		-UsageLocation "CA"
```
> **Note:** ImmutableId and -UserPrincipalName in Office365 should match Uid and email in LoginRadius.

  

**2.**  Assign a license to the newly created user, using 

`Set-MsolUserLicense -UserPrincipalName "john.doe@company.com" -AddLicenses "licensename"`.

> **Note:** You can view the currently available license using `Get-MsolAccountSku`

**3.**  Verify the User details using   

`Get-MsolUser -UserPrincipalName john.doe@companydomain.com | select UserprincipalName,ImmutableID,WhenCreated,isLicensed`

Once the configuration is completed user can Navigate to the https://portal.office.com/ and enter the federated email address,the user will be then redirected to the LoginRadius IDX page for authentication and after successful authentication User get logged in on Office 365.
