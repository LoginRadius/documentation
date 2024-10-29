# Custom OAuth Provider Introduction

**Custom OAuth Provider** is the most implemented protocol by the customers to set up a custom Identity Provider. LoginRadius provides a wide range of social providers for social login. Custom Identity providers are used, where customers requirement is not getting fulfilled by the provided range of social providers in LoginRadius. Thus, you can configure the desired OAuth supported third party/own application for the social login in your application.

You can explore the list of predefined social providers in the [Admin Console](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/social-login/social-providers).

The communications between LoginRadius and Custom Identity providers occur based on any industry-standard process, as Loginradius supports all common federated identity protocols, and OAuth is one of them.

## OAuth Provider Guide

This guide will take you through the process to set up and implement OAuth Provider and Custom Provider Icon. It covers everything you need to know on how to configure OAuth Provider in the LoginRadius account and deploy it onto your web application.

## Part 1 - Configuration

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to implement the OAuth Provider.

**Step 1:** Log in to your [**Admin Console**](https://adminconsole.loginradius.com/) account and navigate to [**Platform Configuration > Authentication Configuration > Custom IDPs > OAuth Provider**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/custom-idps/oauth-provider).

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/Custom_Idps_LoginRadius_User_Dashboard-1-1_180345eda17f5f3ade6.79330247.png "OAuth Provider")

**Step 2:** To configure the details in the Admin Console, click the **Add A New Provider** button displayed on the screen below.

![enter image description here](https://apidocs.lrcontent.com/images/Custom_Idps_LoginRadius_User_Dashboard-2-1_259015eda187ee95c88.08742143.png "ADD A New Provider")

The OAuth Provider configuration fields appear on the same screen as displayed below:

![Form](https://apidocs.lrcontent.com/images/Custom-Idps-LoginRadius-User-Dashboard-4_94499687653a480d509e90.95159855.png "Oauth_provider")

**Step 3:** In the **Provider Name** field, enter the unique name of the OAuth provider. This name will be displayed under the social login forms in the LoginRadius IDX page and on the social login form rendered by LoginRadius V2.js library on your application if the **Include In Social Schema** is selected while configuring the OAuth app.

> **Note:** Below are the validation rules that should be taken care of while creating the **Provider Name**.If any of the below validation rule is not followed the error message: `Provider Name is not valid` will be shown.

1. Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
2. App name should start with a **character**.
3. Alpha numeric values are allowed.
4. No space is allowed in between.
5. Minimum length of the app name should be **[1]** and maximum length upto **[60]** is allowed.
6. Now all the app names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

**Step 4:** In the **Extra Parameter In Redirect To Provider (Optional)** field, enter the extra options (if any) supported by the provider apart from the default options (it varies from provider to provider).

**Step 5:** In the **Customer Login Endpoint** field, enter the redirect provider login URL for making the first login request to the provider.

**Step 6:** In the **Access Token Endpoint** field, enter the OAuth end-point from where the Access token can be retrieved.

**Step 7:** In the **Application Key** field, enter the application API key for the oAuth provider.

**Step 8:** In the **Application Secret** field, enter the application API secret for the oAuth provider.

**Step 9:** In the **Application ID** field, enter the application ID for the OAuth provider.

**Step 10:** In the **Scope** field, enter the desired scopes, which are to be requested from the users.

**Step 11:** In the **Response Type** field, enter the type of response that the OAuth provider is sending, for example, code, token, etc.

**Step 12:** In the **Customer Profile Endpoint** field, enter the OAuth end-point where user profile data can be retrieved.

**Step 13:** In the **Request Token HTTP Method** field, enter the HTTP method of Request Token, for example, PUT, POST, GET, and Delete.

**Step 14:** In the **Access Token Parameter Name For Api Access** field, enter the provider’s Access Token Parameter name (it varies provider to provider like for Doximity its access_token)

**Step15:** **Auto Lookup Functionality.** 

**Enabling AutoLookup:** When you enable AutoLookup, you will notice a domain box where you need to enter/specify the domain name.

![AutoLookup](https://apidocs.lrcontent.com/images/Custom-Idps-LoginRadius-User-Dashboard-2_1238909362653a4214a834b1.82630786.png "AutoLookup")

Once the configuration is saved with the domain name, upon entering an email ID with the specified domain name during authentication, the user will be automatically directed to the designated Identity Provider (IdP). Without AutoLookup, the user follows the standard login process.

> **Note:** After enabling this feature, the specific IdP will not be displayed in the Social Schema on your IDX.

**Step16:** Among all the field types, **Data Mapping** is mandatory, and you can use any of the field types from **Header** and **Query Param** as per your provider requirements (optional).

- **Header:** It can be used for those providers, which pass the Access Token in the header. Enter the Provider’s header name in Key and add any of the LoginRadius value from the following in the Value field:
  - #accesstoken#
  - #idtoken#
  - #oauthsignature#

- **Query Param:** Pass the Query params from Provider in key and value pair (if the provider supports query params).

- **Data Mapping:** Enter field mappings (mandatory) between OAuth Provider and LoginRadius [user profile properties](https://www.loginradius.com/docs/api/v2/getting-started/data-points/detailed-data-points/).
  
  - **Select Field(Dropdown):** Select the LoginRadius field name, which you want to map with the field in OAuth Provider.
  
  - **The profile Key:** Enter the OAuth Provider field name corresponding to the LoginRadius field name.

> **Note:** The LoginRadius ‘ID’ field is the unique identifier for each profile attached to a LoginRadius customer account. Refer to the LoginRadius [Data structure](https://www.loginradius.com/docs/api/v2/getting-started/data-points/data-points/#datastructure0) document for more details. The mapping of the LoginRadius 'ID' field (Loginradius field) is required for the OAuth Provider. A user will not be able to register/login if the value is missing for this mapping in the OAuth Provider.

**Step 17:** Now, click the **Save** button to add and save settings.

## Part 2 - Custom Icon Configuration

Once you have set up the OAuth Provider from the LoginRadius Admin Console, you can start configuring the new Custom OAuth Provider Icon. The configured icon will be displayed with your existing Social Provider icons, if any.

> **Note:** We highly recommend you to familiarize yourself with customizing your social provider icons first. You can find more information on that [here](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#sociallogininterface9).

**Step 1:** To configure your custom Id provider icon, you need to choose a social provider, next to whom you want to place your custom provider.

**For example**, you are adding **Spotify** as a Custom OAuth Provider, and want it to list after **LinkedIn** Social provider.

**Step 2:** To customize your custom provider interface follow the guidelines given in the **Getting Started Guide** [document](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#socialinterfacecustomization11) and make sure you do to customizations inside the div id **"loginradiuscustom_tmpl"**.

**Step 3:** Once you have the code for the initial customizations in your div, go to [Admin Console](https://adminconsole.loginradius.com/deployment/idx) and navigate to **Deployment > Identity Experience Framework (Hosted) > Auth Page File**. Then search for **id=“loginradiuscustom_tmpl”** in auth.aspx file and add the following block of code to get Spotify to show after LinkedIn:

```
<# if(Name == 'LinkedIn'){ Name = 'Spotify';Endpoint = Endpoint.replace("LinkedIn", "Spotify"); #>
// Setting up Custom Social Provider Code/Icons/Buttons happens here.
<#}#>
```

**Step 4:** The next step is to configure your setting of the Custom Social Provider icon.

The final result should look like this:

```
<script type="text/html" id="loginradiuscustom_tmpl">

<!-- Code for customizing the Standard Social Login Buttons -->

<a href="javascript:void(0)"
onclick="return <#=ObjectName#>.util.openWindow('<#= Endpoint #>');"
title="<#= Name #>"
alt="Sign in with <#=Name#>">

    <#=Name#>

</a>
<!-- Code for Customizing and adding the custom Social Login -->

<# if(Name.toLowerCase() == 'linkedin'){ Name = 'Spotify';
                      Endpoint = Endpoint.replace("linkedin", "Spotify"); #>
                      <a href="javascript:void(0)"
              onclick="return <#=ObjectName#>.util.openWindow('<#= Endpoint #>');"
              title="<#= Name #>"
              alt="Sign in with <#= Name #>">

            <#=Name#>

                      </a>
                        <#}#>
</script>

```

> **Note:** If you are not using LoginRadius JavaScript Interface to load the social buttons, you can also use our [Programmatic Link Creation](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#_programmatic-link-creation_) feature.

## Part 3 - Next Steps

The following is the list of documents you might want to look into:

[Custom JWT Provider](https://www.loginradius.com/docs/single-sign-on/custom-identity-providers/custom-jwt-provider/)

[Doximity](https://www.loginradius.com/docs/single-sign-on/custom-identity-providers/providers/doximity/)

[WeChat](https://www.loginradius.com/docs/single-sign-on/custom-identity-providers/providers/alipay/)

[AliPay](https://www.loginradius.com/docs/single-sign-on/custom-identity-providers/providers/alipay/)
