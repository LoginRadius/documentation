# Magento Customer Identity and Access Management Extension instructions for v1.x

## Getting Started  
Magento is an ecommerce platform built on open source technology that provides online merchants with a flexible shopping cart system, as well as control over the look, content, and functionality of their online store. Magento offers powerful marketing, search engine optimization, and catalog-management tools. 

This document provides an installation guide for the Magento v1.x Customer Identity Extension. If you require additional components that are not included in your plugin contact LoginRadius

> **Prerequisite**: 
- **CMS** : E-commerce [**Magento**]
- **CMS-version** : 1.9
- **Extension Name**: CIAM
- **Extension Sub-Module**: Authentication
- **Extension Version** : 1.0.0
- **Dependant**: LoginRadius v2 APIs
- **Features**: Login, Registration, Account-Linking
- **Admin Configuration**: SiteName, ApiKey, and Secret
 

>**Note**: LoginRadius has 2 different Magento Extensions, Enabling both versions together i.e. V1 and V2 of Magento v2.x Extensions may cause conflicts. ensure you only have 1 version enabled on your Magento site.

## Installation
    
**Step 1**: Log in to Magento Website **Admin Panel**.

**Step 2**: Navigate to **System>Magento Connect>Magento Connect Manager**. Log in again, if needed, the following screen will appear.
   

   ![enter image description here](https://apidocs.lrcontent.com/images/1_22803594a5a53de9fd2.36320911.png)
     

**Step 3**: Under the **Install New Extensions** section, paste the key in the field Paste extension key to install.  
 
   ![enter image description here](https://apidocs.lrcontent.com/images/2_11852594a5a7f888304.49330828.png)
     
   
   **Step 4**: If you are using .tgz file for installing the module then upload the file provided by LoginRadius Under Direct Package File Upload section.
    
   ![enter image description here](https://apidocs.lrcontent.com/images/3_32521594a5aa4bc3f52.45936906.png)
     

## Activation & Configuration

### Account Configuration

> **Note:** The full functionality of this extension requires a LoginRadius Site name, LoginRadius API Key, and a LoginRadius API Secret. If you do not have this data. Please find further documentation on how you can obtain this data [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#api-key-and-secret)
 

###Activation Steps
 

**Step 1**: Navigate to the **System>Configuration**
    
   ![enter image description here](https://apidocs.lrcontent.com/images/4_26631594a5aced36f07.25068307.png)
     

**Step 2**: Configure the settings in the **Authentication** page under the **CIAM** section in the left panel.
     
   ![enter image description here](https://apidocs.lrcontent.com/images/5_8127594b7127d3e625.11331904.png)
    

   > **Note**: If you have 404 error after navigating to the Authentication page, just log out from Magento admin and login again.
   >  

**Step 3**: Insert LoginRadius [**API Key, and API Secret**](https://www.loginradius.com/docs/account/get-api-key-and-secret) provided on your LoginRadius Admin Console.

**Step 4**. **Save** the Configuration.

**Step 5.** kindly note that the APIv2 CIAM extension (3.0.1) does not have any User Interface to customize or add the email template as compared to the LoginRadius APIv1 RAAS extension (2.0.8). So, you need to add the email template manually using JS.

To add the email template manually using JS, please follow the below steps.

- Navigate to `<magento-root-folder>\app\design\frontend\base\default\template\ciam\authentication\head.phtml`

- Under `head.phtml`, find the commonOptions code that looks something like below

```
/initialize raas options
        var commonOptions = {};
        var LocalDomain = '<?php echo $loginRadiusCallback; ?>';
        commonOptions.apiKey = '<?php echo $this->apiKey(); ?>';
        commonOptions.formValidationMessage = true;
        commonOptions.callbackUrl = '<?php echo $loginRadiusCallback; ?>';
        commonOptions.hashTemplate = true;
        commonOptions.sott = "<?php echo $this->getSOTT(); ?>";
        commonOptions.linkedAccountsTemplate = 'linkedAccountsTemplate';
        commonOptions.notLinkedAccountsTemplate = 'notLinkedAccountsTemplate';
        commonOptions.forgotPasswordUrl = '<?php echo Mage::helper('customer')->getLoginUrl(); ?>';
        commonOptions.verificationUrl = '<?php echo Mage::helper('customer')->getLoginUrl(); ?>';
        var LRObject = new LoginRadiusV2(commonOptions);
```

- You can add the various email template using **commonOptions**. For example, If you want to add an email verification template, then define that using commonOptions as below
`commonOptions.verificationEmailTemplate ="<email-template-name>"`

- Now, add the above configuration setting before `var LRObject = new LoginRadiusV2(commonOptions);` and it will look something like this
```
/initialize raas options
        var commonOptions = {};
        var LocalDomain = '<?php echo $loginRadiusCallback; ?>';
        commonOptions.apiKey = '<?php echo $this->apiKey(); ?>';
        commonOptions.formValidationMessage = true;
        commonOptions.callbackUrl = '<?php echo $loginRadiusCallback; ?>';
        commonOptions.hashTemplate = true;
        commonOptions.sott = "<?php echo $this->getSOTT(); ?>";
        commonOptions.linkedAccountsTemplate = 'linkedAccountsTemplate';
        commonOptions.notLinkedAccountsTemplate = 'notLinkedAccountsTemplate';
        commonOptions.forgotPasswordUrl = '<?php echo Mage::helper('customer')->getLoginUrl(); ?>';
        commonOptions.verificationUrl = '<?php echo Mage::helper('customer')->getLoginUrl(); ?>';

       //email verification template you can add various email template here as per your use case
         commonOptions.verificationEmailTemplate ="<email-template-name>"
        var LRObject = new LoginRadiusV2(commonOptions);
```

- Similarly for reset password you can use `commonOptions.resetPasswordEmailTemplate ="<reset-password-template-name>"`

Please refer to the [Email Template Customization](https://www.loginradius.com/docs/libraries/js-libraries/localization/#emailandsmstemplatecustomization1) document to know more about Common options for various email templates.


>**Note:** If you are migrating from the LoginRadius APIV1 Magento extension to the LoginRadius APIV2, you should make sure that you have completely removed the existing V1 module. Kindly follow the below steps to do that manually.

- Disable the module from `/app/etc/modules/LoginRadius_*.xml` by setting `<active>true</active>` to `<active>false</active>`

- If there is any dependency in the MySQL table, remove the tables (Remove **lr_logs_data** and **lr_sociallogin**).

- In database, remove resource config record for the **sociallogin_setup** and **socialprofiledata_setup** and **logs_setup** from **core_resource** table.

- Remove `activation/apisettings/sitename` , `activation/apisettings/apikey` and `activation/apisettings/apisecret` from core_config_data table.

- Remove files from the LoginRadius folder under `app/code/community`.

- Remove the XML files from `app/etc/modules/LoginRadius_*`.

- Remove the LoginRadius folder from `app/design/adminhtml/default/default/layout/`.

- Remove the LoginRadius folder from `app\design\frontend\base\default\layout`.

- Delete LoginRadius Folder from `skin\frontend\base\default\`.

- Remove the `<project_root>/var/cache` folder.

- Make sure that under Disable output module, `loginradius_*` should be removed.

Once this is done, this should remove the existing LoginRadius V1 extension and now you are ready to install the new LoginRadius APIV2 extension.