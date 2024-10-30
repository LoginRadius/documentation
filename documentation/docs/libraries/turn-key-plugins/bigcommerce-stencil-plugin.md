# BigCommerce Customer Identity and Access Management Plugin - Stencil

---

This document provides instructions for installing the LoginRadius Customer Identity and Access Management Plugin for Bigcommerce. This document also covers deploying the LoginRadius template code to your Stencil theme.

**Flow Chart**

![BigCommerce](https://apidocs.lrcontent.com/images/Untitled-Diagram-drawio-2_190488750664e46b7e670d37.39857336.png "BigCommerce")

## BigCommerce Configuration

1. Log into your BigCommerce admin panel
2. Click on "Apps"

   ![](https://apidocs.lrcontent.com/images/ST1_281765f1010ef99c037.29062063.png)

3. Click on Marketplace

   ![](https://apidocs.lrcontent.com/images/ST2_187115f101102dfb748.09302600.png)

4. Search for "LoginRadius"

   ![](https://apidocs.lrcontent.com/images/ST3_313295f101115241fb9.39375584.png)

5. Click on the LoginRadius app and click "Install"

   ![](https://apidocs.lrcontent.com/images/ST4_20045f101129ca5874.07114228.png)

6. Select the newly installed LoginRadius App on the left-hand column
7. Input your LoginRadius API Key and Secret and Click on "Validate and Install".

   ![](https://apidocs.lrcontent.com/images/ST5_5665f10113c547f88.29514261.png)

This will install the LoginRadius App into your BigCommerce environment. If you receive any errors or have not previously spoken with the LoginRadius Support team to configure your BigCommerce integration reach out via the LoginRadius support channels to get access to the BigCommerce integration.

## BigCommerce Setup

1. To create API credentials, click on the “Advanced Settings” left menu and from the “Advanced Settings” click on the “API Account” then create API Account.

   ![](https://apidocs.lrcontent.com/images/ST6_222245f10114dd01f93.45797074.png)

2. Provide any name for the API Account and do following configuration and save the changes

- Change Content, Checkout Content and Customers to modify
- Change Customer Login to login
- Change other all to read-only

  ![](https://apidocs.lrcontent.com/images/ST7_189275f101162ee69e4.77501390.png)

3. It will provide the API credentials and also generated credentials auto downloaded.

   ![](https://apidocs.lrcontent.com/images/ST8_105585f101176d1a3f5.46277406.png)

4. Highlighted test is your store name and these credentials are used to setup the SSO in the Loginradius Dashboard

   ![](https://apidocs.lrcontent.com/images/ST9_325115f10118cb8bb50.93308178.png)

## LoginRadius Account Configuration

In order to support the BigCommerce SSO flows you will need to handle the following:

1. Set First and Last Name to Required in your LoginRadius Admin Console -> Platform Configuration -> API Configuration -> Standard Login

   ![](https://apidocs.lrcontent.com/images/ST10_24695f10119fa437b1.60636285.png)

2. Add your BigCommerce site URL in the LoginRadius Admin Console-> Deployment -> Apps
3. Configure the BigCommerce hosted plugin on you LoginRadius Admin Console-> Platform Configuration -> Access Management -> Federated SSO -> Hosted Plugin and set the following values:

   ![BigCommerce](https://apidocs.lrcontent.com/images/Bigcommerce_31716202d1fe4ccc35.41176248.png "BigCommerce")

   1. PLATFORM: Select BigCommerce
   1. STORE NAME: Input your store name

      - This should be a string in the API PATH when your BigCommerce ACCESS TOKEN, CLIENT ID, and CLIENT SECRET was generated. E.g. - if your API PATH is `https://api.bigcommerce.com/stores/pqshk245fh/v3/`, then your storeName value should be `pqshk245fh`

      > **Note:** Below are the validation rules that should be taken care of while creating the **Store Name**.If any of the below validation rule is not followed the error message: `Store Name is not valid` will be shown.

      - Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
      - App name should start with a **character**.
      - Alpha numeric values are allowed.
      - No space is allowed in between.
      - Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
      - Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

   1. STORE URL: Set this to your BigCommerce Store URL. E.g.: `http://<BIGCOMMERCE Store NAME>.mybigcommerce.com`
   1. STORE LOGIN URL: Set this to your BigCommerce Store Login URL. E.g.: `https://<BIGCOMMERCE Store NAME>.mybigcommerce.com/login/token/`
   1. ACCESS TOKEN: Enter a valid BigCommerce Access Token for an API Account, see this doc on [creating API Accounts](https://support.bigcommerce.com/articles/Public/Store-API-Accounts)
   1. SCOPES: Enter a list of scopes you would like to have authorized for the users separated by spaces. E.g.: `store_v2_customers store_v2_customers_login store_v2_default store_v2_information_read_only users_basic_information`
   1. ClIENT ID: Enter the client ID that was generated along with the access token in step 5
   1. ClIENT SECRET: Enter the client ID that was generated along with the access token in step 5
   1. MAPPING: Map any fields you would like to be passed into BigCommerce. E.g.: `first_name: FirstName, last_name: LastName, email: Email[0].Value. `

## Stencil Theme Setup

It is recommended that you backup your theme before making any modifications in case you would like to revert the changes at some point.

1. Install the Stencil plugin and the other dependencies, for detailed information, refer this [document](https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/installing-stencil).
1. Obtain the Store API credentials and download a copy of your existing Stencil theme to your local drive. Please refer to this [documet](https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/live-previewing-a-theme)
1. Download and unzip the [LoginRadius BigCommerce-Stencil-Package](https://github.com/LoginRadius/bigcommerce-identity-plugin)

## Modifying your Stencil Theme

1.  Copy the contents of the "assets" folder from the LoginRadius theme into your theme's assets folder
1.  Copy the contents of the "components" folder from the LoginRadius theme into your themes templates->components folder.

1.  Open the config.js in your theme->assets->loginradius->assets->js and and update the LoginRadius options object with the following:

        1. storeName- Add your BigCommerce Site Name
          * This should be a string in the API PATH when your BigCommerce ACCESS TOKEN, CLIENT ID, and CLIENT SECRET was generated. E.g. - if your API PATH is `https://api.bigcommerce.com/stores/pqshk245fh/v3/`, then your storeName value should be `pqshk245fh`
        1. option.apiKey- Add your [LoginRadius API Key](https://adminconsole.loginradius.com/platform-security/data-access-protection/api-credentials/account-api-keys)
        1. option.appName- Add your [LoginRadius App Name](https://www.loginradius.com/docs/api/v2/admin-console/deployment/get-site-app-name/)
        1. option.sott- Add a valid [LoginRadius Sott](https://www.loginradius.com/docs/api/v2/user-registration/sott)
        1. option.verificationUrl- You can leave this default unless you want to direct users to a specific location to validate the emails. This is required if you are using the Email add/remove panel.

    You can add additional parameters to this options object if you want to include additional LoginRadius features or logic based on the parameters list [here](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#initmethod4).

1.  Include the reference files for LoginRadius in your header section by including the following code in your theme->templates->components->common->header.html just before the closing `</header>` tag

```
{{> components/loginradius/LRreferences }}
```

1. If you are using Single Sign-On also include the tag

```
{{> components/loginradius/LRsso }}
```

1. Go in the theme and Open the create-account.html file in your theme->templates->pages>auth->create-account.html and replace the existing complete create-account form code with:

   ```
   {{inject 'passwordRequirements' settings.password_requirements}}
   {{#partial "page"}}
       {{> components/common/breadcrumbs breadcrumbs=breadcrumbs}}
       <h1 class="page-heading">{{lang 'create_account.heading' }}</h1>

       <div class="account account--fixed">
           {{> components/loginradius/register }}
       </div>
   {{/partial}}
   {{> layout/base}}
   ```

1. Open the login.html file in your theme->templates->pages>auth->login.html and replace the existing Login Form interface 'div' code with

```
{{> components/loginradius/auth }}
```

![enter image description here](https://apidocs.lrcontent.com/images/Annotation-2019-12-13-172248_197135df37cca0df4f2.67518353.png "enter image title here")
This will display the pre-styled User authentication features which include handling of Login, Social Login, Registration, Forgot password, and Reset Password.

1. If you are using SSO you will need to handle the Logout functionality by opening the navigation.html file in your theme->templates->components->common and change the logout link to

```
<a class="navUser-action" onclick="lrLogout(); return false;" href="#">{{lang 'common.logout'}}</a>
```

1. If you are using the Optimized one-page checkout you will need to include the following Componenet on your checkout.html page file in your theme->templates->pages after the partial page handlebars:

```
{{#partial "page"}}

    {{> components/loginradius/LoginRadiusOptimizedCheckout }}
```

> **Note:** To see the live preview of the changes you have made to your stencil theme, refer to this [document](https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/live-previewing-a-theme#serving-a-live-preview).

## Bundling and Uploading the Theme

To upload the Modified contents to bigcommerce store, first bundle the updated theme and push it to bigcommerce store. Follow the given document for more insights on how to bundle the bigcommerce theme - https://developer.bigcommerce.com/stencil-docs/deploying-a-theme/bundling-and-pushing.

## Additional Theme options

The above steps will allow you to get quickly setup and all of the interfaces can be directly customized using the CSS, js, and HTML that comes in the Stencil Package. We have also included some more basic functions to display the interfaces that you can use to customize the look and feel or to embed specific interfaces directly on your preexisting forms.

The following options are available to render specific interfaces:

1. `{{> components/loginradius/auth }}` - Displays the full LoginRadius interface.
1. `{{> components/loginradius/login }}` - Displays the Traditional Login interface.
1. `{{> components/loginradius/social }}` - Displays the Social Login interface.
1. `{{> components/loginradius/register }}` - Displays the Traditional Registration interface.
1. `{{> components/loginradius/verify }}` - Includes the code to handle the email verification process.
1. `{{> components/loginradius/forgot }}` - Displays the interfaces for Forgot password and Reset Password.
1. `{{> components/loginradius/accountdetails }}` - Displays the full Loginradius Accoount management interface.
1. `{{> components/loginradius/changepassword }}` - Displays the change Password interface.
1. `{{> components/loginradius/emailmanage }}` - Displays the Add/Remove email address interfaces.
1. `{{> components/loginradius/profileeditor }}` - Displays the update profile data interface.
1. `{{> components/loginradius/LoginRadiusOptimizedCheckout }}` - Overrides the deault optimzed checkout page functionality.

## Storage of BigCommerce customer_id

BigCommerce uses the field "customer_id" to identify unique users for your store. In LoginRadius cloud, this is stored in the ExternalId s field of your customer profile:

```
"ExternalIds": [
                 {
                    "Source": "BigCommerce-mystore",
                    "SourceId": "6"
                 }
               ]
```

The LoginRadius mapping of BigCommerce customer_id to ExternalIds also supports the configuration of multiple BigCommerce stores:

```
"ExternalIds": [
                 {
                    "Source": "BigCommerce-myfirststore",
                    "SourceId": "6"
                 },
                 {
                    "Source": "BigCommerce-mysecondstore",
                    "SourceId": "21"
                 }
               ]
```

## Additional Considerations

1. If you are including the emailmanage component or accountdetails component on your account details page, You will need to provide a standard email verification page that all email verifications will be redirected to. This page should be accessible by logged in and logged out users and should include the verify component.

2. If you are using a customizable Checkout Page you can directly include the auth component and apply custom styling to bring this in line with your Checkout page branding.

3. If you want to display user profile details such as a user's first name or other data stored in LoginRadius directly from the LoginRadius session you can utilize the LoginRadius HTML SDK to retrieve this data clientside and display as required (See the documentation for [ HTML/js SDK](https://www.loginradius.com/docs/api/v1/sdk-libraries/html5-js)) but please take care, if you are using V2JS then no need to use HTML SDK (See the documentation for [LoginRadius V2JS](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started)).

4. If you are migrating users from an existing BigCommerce site and need to preserve the user's passwords. Please reach out to the LoginRadius Support team for details on how to configure this.

## Uninstall Process

If you have installed the LoginRadius BigCommerce App on your BigCommerce Site and have customized the Stencil Theme with the below steps please make sure you revert the following items:

1. Remove the Scripts, CSS, and Content included in "Stencil Theme Setup" Section
2. Remove the LoginRadius component files from the "components"
3. Revert any Customizations made to the theme->templates->pages>auth->login.html
4. Revert any Customizations made to theme->templates->components->common->header.html
5. Revert any Customizations made to embedded links and any other pages that you have added a LoginRadius Panel.
