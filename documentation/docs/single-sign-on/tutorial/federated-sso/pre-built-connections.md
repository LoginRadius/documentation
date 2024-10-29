# Pre-Built Connections

LoginRadius facilitates Pre-Built Connections to effortlessly handle your Federated Single Sign-On (SSO) integrations using ready-made configuration templates. In LoginRadius, you can swiftly establish SSO connections, allowing users to authenticate through LoginRadius and seamlessly access various applications. 

Presently, LoginRadius supports the pre-built integration template for the below-mentioned connections.

1. Salesforce
2. Fresh Desk
3. Zendesk

Now, let's delve deeper into the configuration steps for each of them by first navigating to [Platform Configuration > Federated SSO > Integrations](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/integrations) in the Admin Console, clicking on **Add SSO Integration**, followed by clicking on the respective cards, i.e., Salesforce, Fresh Desk or Zendesk.

![Add SSO Integration](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-1_9159857016588881ec886e6.43518430.png "Add SSO Integration")

![Choose a connection](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-2_20178493896588955e72f9c4.98289465.png "Choose a connection")

## Configuring Salesforce

1. Once you click on the **Salesforce** card, the configuration fields would appear on the screen as displayed below.

    ![Salesforce Screen](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-3_1369195489658896d1558f37.03863573.png "Salesforce Screen")

2. In the **Name** field, enter a unique name for your Salesforce integration.
        
    > **Note:** Below are the validation rules that should be taken care of while creating the Provider Name. If any of the below validation rule is not followed the error message: `App Name is not valid` will be shown.

    - Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
    - App name should start with a **character**.
    - Alpha numeric values are allowed.
    - No space is allowed in between.
    - Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
    - Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

3. In the **Callback URL** field, enter the location to which an IdP (Identity Provider) sends assertions using whichever protocol and binding it shares with the SP (Service Provider).

4. In the **Audience** field, enter the Entity ID which is an arbitrary logical URL that identifies the Salesforce resource and click on the **SAVE** button.

5. Upon saving the configuration, the screen below will emerge, presenting additional steps outlined within the **Tutorial** tab. These steps guide you through the necessary configurations to be implemented in the Salesforce developer console.

    ![Tutorial](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-4_98717710658898fb9d97c3.25656005.png "Tutorial")

6. Additionally, you have the option to navigate to the **Configuration** tab for updating any of the configuration fields. You can also choose to **delete** the configuration by clicking on the delete button (represented by the _Bin Icon_) for the corresponding configuration.

    ![Update or delete](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-5_18648652886588e105e1f568.24252141.png "Update or delete")

7. Access to advanced configurations for this setup will also be available through the dedicated protocol tab (SAML). For the same, navigate to [Platform Configuration > Federated SSO > SAML](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/saml)

    ![Advanced Configuration](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-6_207064057565889b24e6d848.02877630.png "Advanced Configuration")

For comprehensive details and step-by-step configuration instructions for setting up the Salesforce, refer to the [LoginRadius as IDP with Salesforce as SP](https://www.loginradius.com/docs/single-sign-on/concept/saml-providers/salesforce) document.
   
## Configuring Fresh Desk

1. Once you click on the **Fresh Desk** card, the configuration fields would appear on the screen as displayed below.

    ![Integration](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-7_193348430265889d0045b500.37334418.png "Integration")

2. In the **Name** field, enter a unique name for your Fresh Desk integration.
        
    > **Note:** Below are the validation rules that should be taken care of while creating the Provider Name. If any of the below validation rule is not followed the error message: `App Name is not valid` will be shown.

    - Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
    - App name should start with a **character**.
    - Alpha numeric values are allowed.
    - No space is allowed in between.
    - Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
    - Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

3. In the **Callback URL** field, enter the location to which an IdP (Identity Provider) sends assertions using whichever protocol and binding it shares with the SP (Service Provider).

4. In the **Audience** field, enter the intended receipients of the assertions issued and click on the **SAVE** button.

5. Upon saving the configuration, the screen below will emerge, presenting additional steps outlined within the **Tutorial** tab. These steps guide you through the necessary configurations to be implemented in the Fresh Desk developer console.

    ![Tutorial](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-8_127506219265889e7ac5e4f6.01195582.png "Tutorial")

6. Additionally, you have the option to navigate to the **Configuration** tab for updating any of the configuration fields. You can also choose to **delete** the configuration by clicking on the delete button (represented by the _Bin Icon_) for the corresponding configuration.

    ![Freshdesk Config](https://apidocs.lrcontent.com/images/Freshdesk_5830547756588d92b9a0027.80938103.png "Freshdesk Config")

7. Access to advanced configurations for this setup will also be available through the dedicated protocol tab (SAML). For the same, navigate to [Platform Configuration > Federated SSO > SAML](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/saml)

    ![Advanced](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-9_137406274165889ff0029734.77373638.png "Advanced")

## Configuring Zendesk

1. Once you click on the **Zendesk** card, the configuration fields would appear on the screen as displayed below.

    ![Configuration Fields](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-10_5902365696588a2d68b4a21.47708015.png "Configuration Fields")

2. In the **Name** field, enter a unique name for your Zendesk integration.
        
    > **Note:** Below are the validation rules that should be taken care of while creating the Provider Name. If any of the below validation rule is not followed the error message: `App Name is not valid` will be shown.

    - Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
    - App name should start with a **character**.
    - Alpha numeric values are allowed.
    - No space is allowed in between.
    - Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
    - Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

3. In the **Zendesk Account Name** field, enter the name of your Zendesk account and click on the **SAVE** button.

4. Upon saving the configuration, the screen below will emerge, presenting additional steps outlined within the **Tutorial** tab. These steps guide you through the necessary configurations to be implemented in the Zendesk developer console.

    ![Tutorial](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-11_17994103216588a459272f23.97074824.png "Tutorial")

5. Additionally, you have the option to navigate to the **Configuration** tab for updating any of the configuration fields. You can also choose to **delete** the configuration by clicking on the delete button (represented by the _Bin Icon_) for the corresponding configuration.

    ![Update or Delete](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-12_3918944826588a4db7a27d5.20340179.png "Update or Delete")

6. Access to advanced configurations for this setup will also be available through the dedicated protocol tab (SAML). For the same, navigate to [Platform Configuration > Federated SSO > SAML](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/saml)

    ![Advanced Configuration](https://apidocs.lrcontent.com/images/Federated-SSO---Pre-Built-Connections---Step-13_1692480496588a55ece8f30.80539568.png "Advanced Configuration")

For comprehensive details and step-by-step configuration instructions for setting up the SSO with SAML, refer to the [Identity Provider Initiated SSO](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/saml/idp-initiated/#partconfigurationinadminconsole2) and [Service Provider Initiated SSO](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/saml/sp-initiated) document.