# BigCommerce Customer Identity and Access Management Plugin - BluePrint

---

This document provides instructions for installing the LoginRadius Customer Identity and Access Management Plugin for Bigcommerce. This document also covers deploying the LoginRadius template code to your BluePrint theme.

**Flow Chart**

![BigCommerce](https://apidocs.lrcontent.com/images/Untitled-Diagram-drawio-2_190488750664e46b7e670d37.39857336.png "BigCommerce")

## BigCommerce Configuration

1. Log in to your BigCommerce admin panel
1. Click on "Apps"
1. Click on Marketplace
1. Search for "LoginRadius"
1. Click on the LoginRadius app and click "Install"
1. Select the newly installed LoginRadius App on the left-hand column
1. Input your LoginRadius API Key and Secret and click on "Validate and Install".

This will install the LoginRadius App into your BigCommerce environment. If you receive any errors or have not previously spoken with the LoginRadius Support team to configure your BigCommerce integration reach out via the LoginRadius support channels to get access to the BigCommerce integration.

## LoginRadius Account Configuration

In order to support the BigCommerce SSO flows you will need to handle the following:

1. Set First and Last Name to Required in your LoginRadius Admin Console-> Platform Configuration -> API Configuration-> Standard Login
2. Add your BigCommerce site URL in the LoginRadius Admin Console-> Deployment -> Apps
3. Configure the BigCommerce hosted plugin on your LoginRadius Admin Console-> Platform Configuration-> Federated SSO-> Hosted Plugin and set the following values:

   1. PLATFORM: Select BigCommerce
   2. STORE NAME: The name of your store

      - This should be a string in the API PATH when your BigCommerce ACCESS TOKEN, CLIENT ID, and CLIENT SECRET was generated. E.g. - If your API PATH is `https://api.bigcommerce.com/stores/pqshk245fh/v3/`, then your storeName value should be `pqshk245fh`

      > **Note:** Below are the validation rules that should be taken care of while creating the **Store Name**.If any of the below validation rule is not followed the error message: `Store Name is not valid` will be shown.

      - Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
      - App name should start with a **character**.
      - Alpha numeric values are allowed.
      - No space is allowed in between.
      - Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
      - Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

   3. STORE URL: Set this to your BigCommerce Store URL IE. `http://<BIGCOMMERCE Store NAME>.mybigcommerce.com`
      - This is the "pretty" name you have given to your store, not the store hash that looks like "dd2gy5ecji"
   4. STORE LOGIN URL: Set this to your BigCommerce Store Login URL IE. `https://<BIGCOMMERCE Store NAME>.mybigcommerce.com/login/token/`
      - User the pretty name here as well.
   5. ACCESS TOKEN: Enter a valid BigCommerce Access Token for an API Account, see this doc on [creating API Accounts](https://support.bigcommerce.com/articles/Public/Store-API-Accounts)
   6. SCOPES: Enter a list of scopes you would like to have authorized for the customers separated by spaces. IE. `store_v2_customers store_v2_users_login store_v2_default store_v2_information_read_only customers_basic_information`
   7. CLIENT ID: Enter a valid BigCommerce Client ID for an API Account, see this doc on [creating API Accounts](https://support.bigcommerce.com/articles/Public/Store-API-Accounts)
   8. CLIENT SECRET: Enter a valid BigCommerce Client Secret for an API Account, see this doc on [creating API Accounts](https://support.bigcommerce.com/articles/Public/Store-API-Accounts)
   9. MAPPING: Map any fields you would like to be passed into BigCommerce

![BigCommerce](https://apidocs.lrcontent.com/images/Bigcommerce_31716202d1fe4ccc35.41176248.png "BigCommerce")

## Uninstall Process

If you have installed the LoginRadius BigCommerce App on your BigCommerce Site and have customized the BluePrint Theme with the below steps make sure you revert the following items:

1. Remove the Scripts, CSS, and Content included in "BluePrint Theme Setup" Section
1. Remove the LoginRadius panels files from the webdav/Panels
1. Revert any Customizations made to the webdav/Panels/LoginForm.html
1. Revert any Customizations made to webdav/Panels/header.html or webdav/Panels/HTMLHead.html
1. Revert any Customizations made to embedded links and any other pages that you have added a LoginRadius Panel.

## Blueprint Theme Setup

The following sections presume you have a standard BigCommerce Blueprint custom template \(Classic Next) configured on your WebDav, If you need assistance in setting this up contact the LoginRadius support team.

It is recommended that you backup your theme before making any modifications in case you would like to revert the changes at some point.

1. Open WebDav Access to your BigCommerce Site.
1. Unzip the LoginRadius BigCommerce-blueprint-Package
1. Copy the following folders to the specified locations in your webdav/template folder
   1. assets/js- Copy the loginradius folder to your webdav/template/js folder
   2. assets/images- Copy the loginradius folder to your webdav/template/images folder
   3. assets/css- Copy the loginradius folder to your webdav/template/Styles folder
1. Copy the contents of the "panels" folder to the webdav/Panels Folder

## Modifying your BluePrint Theme

1.  Open the config.js in the provided BlueprintThemeFile\assets\js\loginradius and update the LoginRadius options object with the following:

        1. storeName- Add your BigCommerce Site Name
          * This should be a string in the API PATH when your BigCommerce ACCESS TOKEN, CLIENT ID, and CLIENT SECRET was generated. E.g. - if your API PATH is `https://api.bigcommerce.com/stores/pqshk245fh/v3/`, then your storeName value should be `pqshk245fh`
        1. option.apiKey- Add your [LoginRadius API Key](https://adminconsole.loginradius.com/platform-security/data-access-protection/api-credentials/account-api-keys)
        1. option.appName- Add your [LoginRadius App Name](https://www.loginradius.com/docs/libraries/overview/)
        1. option.sott- Add a valid [LoginRadius Sott](https://www.loginradius.com/docs/api/v2/customer-identity-api/sott-usage/)
        1. option.verificationUrl- You can leave this default unless you want to direct customers to a specific location to validate the emails. This is required if you are using the Email add/remove panel.

    You can add additional parameters to this options object if you want to include additional LoginRadius features or logic based on the parameters list [here](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#initmethod4).

2.  Include the reference files for LoginRadius in your header section by including the following code in your webdav/Panels/header.html or webdav/Panels/HTMLHead.html just before the closing `</header>` tag

```
%%Panel.lrreferences%%
```

3. If you are using Single Sign-On also include the tag after the lrreferences tag

```
%%Panel.lrsso%%
```

4. Open the LoginForm.html file in your webdav/Panels/LoginForm.html and replace the existing Login page code with

```
%%Panel.lrauth%%
```

This will display the pre-styled customer authentication features which include handling of Login, Social Login, Registration, Forgot Password, and Reset Password.

5. Logout is handled automatically in the lrsso.html panel. If you have custom logout links on any of your pages you can add the following on click action to them to tie into the normal LoginRadius Logout procedures.

```
lrLogout(); return false;
```

6. You will need to update any of the dynamically created checkout page links if you are using the streamlined cart flow.
   1. Search your template files for %%GLOBAL_CheckoutLink%%
   1. Add the following onclick handler to these links: onclick="assignCheckout(this)"

Note: Guest checkout is not supported by BigCommerce for Customized Login Providers

## Additional Theme options

The above steps will allow you to get quickly setup and all of the interfaces can be directly customized using the CSS, js, and HTML that comes in the BluePrint Package. We have also included some more basic functions to display the interfaces that you can use to customize the look and feel or to embed specific interfaces directly on your preexisting forms.

The following options are available to render specific interfaces:

1. `%%Panel.lrauth%%` - Displays the full LoginRadius interface.
1. `%%Panel.lrlogin%%` - Displays the Traditional Login interface.
1. `%%Panel.lrsocial%%` - Displays the Social Login interface.
1. `%%Panel.lrregister%%` - Displays the Traditional Registration interface.
1. `%%Panel.lrverify%%` - Includes the code to handle the email verification process.
1. `%%Panel.lrforgot%%` - Displays the interfaces for Forgot password and Reset Password
1. `%%Panel.lraccountdetails%%` - Displays all of the Profile editing forms
1. `%%Panel.lrchangepassword%%` - Displays the Change Password Form
1. `%%Panel.lremailmanage%%` - Displays the add and remove Email Forms
1. `%%Panel.lrprofileeditor%%` - Displays the Profile Editor Form

## Additional Considerations

1. If you are including the lremailmanage Panel or lraccountdetails panel on your account details page, You will need to provide a standard email verification page that all email verification will be redirected to. This page should be accessible by logged in and logged out customers and should include the lrverify panel.

2. If you are using a customizable Checkout Page you can directly include the lrauth panel and apply custom styling to bring this in line with your Checkout page branding.

3. If you want to display customer profile details such as a customer's first name or other data stored in LoginRadius directly from the LoginRadius session you can utilize the LoginRadius HTML SDK to retrieve this data clientside and display as required (See the documentation for [ HTML/js SDK](https://www.loginradius.com/docs/api/v1/sdk-libraries/html5-js)) but take care, if you are using V2JS then no need to use HTML SDK (See the documentation for [LoginRadius V2JS](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/).

4. If you are migrating customers from an existing BigCommerce site and need to preserve the customer's passwords. Reach out to the LoginRadius Support team for details on how to configure this.
