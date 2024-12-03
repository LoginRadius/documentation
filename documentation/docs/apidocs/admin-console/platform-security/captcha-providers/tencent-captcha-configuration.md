# Tencent CAPTCHA with LoginRadius

[Tencent Captcha](https://open.captcha.qq.com/) is a popular China-based CAPTCHA service. It is part of Tencent QQ owned by the Chinese technology giant Tencent Holdings Limited. QQ also offers services that provide online social games, music, shopping, microblogging, movies, and group and voice chat software. This section describes configuring a Tencent Captcha with LoginRadius.

For more conceptual information on the Tencent CAPTCHA, refer to the documentation [here](https://www.loginradius.com/docs/authentication/concepts/customer-security/#partcaptcha0).

## Configuration

Refer to the below-mentioned steps to configure the Tencent CAPCTHA with your LoginRadius implementation.

1. You need to have a QQ account in order to configure Tencent Captcha. If you don’t have one, you can create one [here](https://ssl.zc.qq.com/v3/index-en.html).

2. After creating a QQ account, log in with the valid credentials at [https://007.qq.com/captcha/](https://007.qq.com/captcha/)

   ![](https://apidocs.lrcontent.com/images/1_193425aeaf80d3d5f01.97634629.png)

3. After logging in, you’ll be presented with the page as shown below. To begin, tap on the highlighted button to create an application.

   ![](https://apidocs.lrcontent.com/images/1_300035ced6f58709963.30682153.png)

4. On the next screen, fill out the necessary details, and complete the registration by tapping the highlighted button.

   ![](https://apidocs.lrcontent.com/images/2_150295ced6f6616de95.93701457.png)

5. Once the details have been verified successfully, your App ID and App Secret Key will be generated. You can get them in the Admin Console as highlighted in the screenshot below.

   ![](https://apidocs.lrcontent.com/images/3_230125ced6fa79b3320.81075366.png)

6. To enable Tencent Captcha, you will need to provide the App ID and App Secret Key in the Admin Console under: Platform Security → Account Protection → Auth Security → (left sidebar) CAPTCHA Setting

   ![Tencent Captcha Location](https://apidocs.lrcontent.com/images/ac38_97975e93497ccbdb81.26824524.png "Tencent Captcha Location")

7. Once you have entered the App ID and App Secret Key in the corresponding fields, be sure to hit "Save."

## Deployment

After configuring the credentials in the LoginRadius Identity Platform, you can implement the Tencent CAPTCHA using one of the following options:

- IDX
- JavaScript Libraries

### IDX Deployment

The following explains how you can deploy the **Tencent CAPTCHA** using **IDX**:

**Step 1:** Log in to your [**Admin Console**](https://adminconsole.loginradius.com/) account and navigate to [**Deployment >Identity Experience Framework Hosted**](https://adminconsole.loginradius.com/deployment/idx).

The following screen will appear:

![idx page](https://apidocs.lrcontent.com/images/U6_58335ee215753ab444.33650508.png "idx page")

**Step 2:** Make sure that the **Authentication Pages** option is selected from the left hand side panel. Click the **script (End or Before)** folder from the left navigation panel. For example, click the **Before Script** folder and default **Auth - Before Script** file will be displayed as shown in the screen below:

![before script](https://apidocs.lrcontent.com/images/U7_215665ee2158772d656.46675228.png "before script")

**Step 3:** Include the following code in **Auth - Before Script** file to load the Tencent Captcha interface in your web application:

```
options = {};
options.apikey = "<Your LoginRadius API key>";
options.appName = "<LoginRadius Site Name>";
options.tencentCaptchaAppid = "<TENCENT_CAPTCHA_APP_ID>"
//If you want only Tencent Captcha to be enabled
options.tencentCaptcha = true;
//If you want Tencent Captcha to work when Google reCAPTCHA doesn’t
//options.tencentCaptchaAsFallback = true;
var LRObject= new LoginRadiusV2(option);

```

> **Note:**
>
> - At any point in time, only **one** of the two options i.e. **tencentCaptcha** and **tencentCaptchaAsFallback** can be enabled.
> - If **tencentCaptchaAsFallback** is enabled, **within China**, the application will display the **TencentCAPTCHA option**, and **outside of China**, the application will display the **Google reCAPTCHA** option.

### JavaScript Deployment

The following explains how you can deploy **Tencent CAPTCHA** using **LoginRadius JS Libraries**:

**Step 1:** Include the **LoginRadius JavaScript Libraries**, as explained below:

Add the following JavaScript to head tag just before closing the body tag of Index.html file:

```
https://auth.lrcontent.com/v2/js/LoginRadiusV2.js

```

> **Note:** It is recommended to utilize the script from our CDN domain (https://auth.lrcontent.com/v2/js/LoginRadiusV2.js) rather than making a local copy.

**Step 2:** Initialize the LoginRadiusV2 Object as explained below:

Add this JavaScript code to initialize LoginRadiusV2 Object on your website.

```
var commonOptions = {};
commonOptions.apiKey = "<your loginradius API key>";
commonOptions.appName = "<LoginRadius site name>";
commonOptions.phoneLogin = True;
var LRObject= new LoginRadiusV2(commonOptions);

```

**Step 3:** Include the following code to load the **Tencent CAPTCHA** interface in your web application:

```
options = {};
options.apikey = "<Your LoginRadius API key>";
options.appName = "<LoginRadius Site Name>";
options.tencentCaptchaAppid = "<TENCENT_CAPTCHA_APP_ID>"
//If you want only Tencent Captcha to be enabled
options.tencentCaptcha = true;
//If you want Tencent Captcha to work when Google reCAPTCHA doesn’t
//options.tencentCaptchaAsFallback = true;
var LRObject= new LoginRadiusV2(option);

```

> **Note:** At any point in time, only **one** of the two options i.e. **tencentCaptcha** and **tencentCaptchaAsFallback** can be enabled.
