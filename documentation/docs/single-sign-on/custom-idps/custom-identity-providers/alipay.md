# AliPay 

Alipay is a popular Chinese third-party mobile and online payment platform. Alipay users use Alipay identity to log in to the merchant application securely, and the merchant can obtain basic open information (user ID, user avatar, nickname, gender, province, city, etc.) of Alipay users, and provide corresponding open services.


## AliPay Provider Guide

This guide will take you through the process to set up and implement AliPay. It covers everything you need to know on how to configure AliPay as a Social Login Provider with LoginRadius and deploy it onto your web application.

## Part 1- AliPay App Configuration

This section provides the information regarding AliPay account creation and verification; it also includes ID and bank details verification that you need to perform on AliPay’s official site.

### AliPay account  creation

This section explains how you can create an account on AliPay:

**Step 1:** If you already have created an account then make sure you have a verified AliPay account.

**Step 2:** To create a new account, you will need to configure the [AliPay Login App](https://fw.alipay.com/alipaymarket/ability/SM010000000000001011/detail.htm) on your computer.
.

![enter image description here](https://apidocs.lrcontent.com/images/1_181575cd5fc982bc0d5-32278490_99465eda309d3b5391.07604742.jpg "AliPay")

**Step 3:** Click the **Registration** link as highlighted in the above screen.

**Step 4:** Select your desired country in the **Country/Region** field.

**Step 5:** Enter your mobile phone number in the **Phone Number** field.

**Step 6:** Click the **Get verification code** button to get a verification code in a text message on your phone.

**Step 7:** Enter the SMS code you received on your phone in the **SMS verification Code** field.

**Step 8:** Click the **Next** button to proceed.

![enter image description here](https://apidocs.lrcontent.com/images/unnamed-1_183745eda31a25cf952.57315068.jpg "Registration")

### Configuring ID details 

This section explains how you can configure ID details while creating an AliPay account:

**Step1:** Enter your password in the **Login password** field. Use numeric characters (0-9), special characters (e.g.!@#$%), upper case (A-Z) and lower case(a-z) letters.

**Step 2:** Enter the payment password in the **Payment password** field. Use only 6 numeric characters (0-9).

**Step 3:** Select the **Security question** and enter its answer in **Security Answer** field which will help to retrieve the password in case you forget it.

**Step 4:** In **Your Identity** enter your personal information: **First Name, Last Name, Gender**.

**Step 5:** In **Certificate, Type** select your **ID type** e.g. your driving license ID, your passport ID, etc.

**Step 6:** In the **ID Number** field, enter your ID number.

**Step 7:** In the **Validity** field, enter the expiration date of the document specified in the above field.

**Step 8:** In the **Occupation** field, enter the type of your occupation.

**Step 9:** In the **Address in China** field, enter your home address of China if you are from China, else select the **Overseas** option.

**Step 10:** Enter your home address in the field.

**Step 11:** Now click on the **Submit** button.

The following screen will display the complete ID detail form:

![enter image description here](https://apidocs.lrcontent.com/images/3_70265cd5fdef8e8b05-06091115_103415eda33edd63c99.90416683.jpg "Registration form part 2")


### AliPay Verification

This section explains how to verify your AliPay account:

**Step 1:** After registration, login into your account from https://auth.alipay.com/login/index.htm.

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/4_322525cd5fe71f1cad5-39567745_34865eda364d612cf9.67472897.jpg "")

**Step 2:** Once you are logged in, you need to verify your Alipay account from https://certify.alipay.com/choose.htm.

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/5_27395cd5fea8aa15c8.64896021.png "")


### Bank details configuration

This section explains how to add your Bank details:

**Step 1:** In the **Bank card number** field, enter your bank card number (16 digits number on the front-side of your card).

**Step 2:** In the **Cardholder's Name** field, enter the name specified on your card.

**Step 3:** In the **Credentials** select ID type and specify your ID number in this field.

**Step 4:** In the **Cellphone number** field, enter your mobile phone number.

**Step 5:** Press the **Next** button to proceed.

The following screen displays the form:

![enter image description here](https://apidocs.lrcontent.com/images/6_296285cd5ff2af3e543.09702499.png  "")


### AliPay Application

This section explains how you can create an AliPay login application. Go to this page: http://openhome.alipay.com/platform/manageApp.htm and follow the below steps:

**Step 1:** Select the **Create Application** button to create the AliPay Application. 

![enter image description here](https://apidocs.lrcontent.com/images/7_272065cd5ff5e739bc6.72453243.png  "")

**Step 2:** Select the **Web or Mobile Application development** option as per your requirement to create your AliPay application.

![enter image description here](https://apidocs.lrcontent.com/images/8_215745cd604e0b55db3.22546966.png  "")

**Step 3:** Fill in the name of the application. After submitting the form a new page will open where it will show the awaiting time of your application approval (it can take up to a few days).

**Step 4:** Once your application got approved, go to the **Function information** page, and find the Quick Login option here, click on the **Subscribe** button.

## Part 2- Configuration in LoginRadius Admin Console 

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to implement the AliPay as an OAuth Provider.

**Step 1:** Log in to your [**Admin Console**](https://adminconsole.loginradius.com/) account and navigate to [**Platform Configuration > Authentication Configuration > Custom IDPs > OAuth Provider**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/custom-idps/oauth-provider).

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/Custom_Idps_LoginRadius_User_Dashboard-1-2_283155eddee9d1c4964.36012596.png "OAuth Provider")

**Step 2:** To configure the details in the Admin Console, click on the **Add A New Provider** button shown in the below screen. 

![enter image description here](https://apidocs.lrcontent.com/images/Custom_Idps_LoginRadius_User_Dashboard-2-2_108525ede01c5c83294.93329746.png "Add A New Provider")

**Step 3:** In the **Provider Name** field, enter the unique name of the OAuth provider as shown in the below screen.

![enter image description here](https://apidocs.lrcontent.com/images/Custom_Idps_LoginRadius_User_Dashboard-4_8425ede028836ab14.98590455.png "")

**Step 4:** In the **Extra Parameter In Redirect To Provider (Optional)** field, enter the extra options (if any) supported by the AliPay apart from the default options. 

**Step 5:** In the **Customer Login Endpoint** field, enter https://globalprod.alipay.com/login/global.htm.

**Step 6:** In the **Access Token Endpoint** field, enter https://open-na.alipay.com/api/alipay/intl/oauth/auth/applyToken.htm.

**Step 7:** In the **Application Key** field, enter `<< Your AliPay API Key>>`.

**Step 8:** In the **Application Secret** field, enter : `<< Your AliPay Secret >>`.

>**Note:** You can get more details about **how to get  AliPay’s API Key and Secret** refer [here](https://intl.alipay.com/doc/gr/globalgs).

**Step 9:** In the **Response Type** field, enter “code”.

**Step 10:** In the **Request Token HTTP Method** field, enter the HTTP method of Request Token “GET”.

**Step 11:** In the **Access Token Parameter Name For Api Access** field, enter ”applyToken”.

**Step 12:** **Header (optional)** can be used for those providers, which pass the Access Token in the header. Enter the Provider’s header name in **Key** and add any of the LoginRadius value from the  following in the **Value** field:

- #accesstoken#
- #idtoken#
- #oauthsignature#

**Step 13:** Pass the **Query params (optional)** from AliPay Provider in key and value pairs (if the AliPay supports query params).

**Step 14:** **Data Mapping** - Enter field mappings between AliPay fields and LoginRadius [user profile properties](https://www.loginradius.com/docs/api/v2/getting-started/data-points/detailed-data-points/).

- **Select Field(Dropdown):** Select the LoginRadius field name which you want to map with respective Doximity field.
- **The profile Key:** Enter the Doximity field name corresponding to the LoginRadius field name.

You can also map more fields (as per your requirements) by clicking on the **Add Row** button. 
> **Notes:**
- The LoginRadius ‘ID’ field is the unique identifier for each profile attached to a LoginRadius customer account. Refer to the LoginRadius [Data structure](https://www.loginradius.com/docs/api/v2/getting-started/data-points/data-points/#datastructure0) document for more details. The mapping of the LoginRadius 'ID' field (Loginradius field) is required for the OAuth Provider. A user will not be able to register/login if the value is missing for this mapping in the OAuth Provider.
- To make this social login work, you need to map the only field that is the **LoginRadius ID** field to the **AliPay unionid** field (it’s mandatory). 

**Step 15:** Now, click on the **ADD** button to add and save settings.

## Part 3- Custom AliPay Social Login Icon Configuration

For this step, we highly recommend you to familiarize yourself with customizing your social provider icons [here](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#socialinterfacecustomization10). OOnce you're ready to have the AliPay Social Login icon displayed on your website, you will need to add it via code. 

Refer to our general all-purpose document on setting up a Custom OAuth Provider Icon for this step [here](https://www.loginradius.com/docs/api/v2/custom-identity-provider/custom-oauth-provider#settingupthecustomicon1). Once this is complete, you should have AliPay available as a social icon.