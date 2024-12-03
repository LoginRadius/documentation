# Google reCAPTCHA with LoginRadius

[Google reCAPTCHA](https://www.google.com/recaptcha/about/) is a popular CAPTCHA-like system that provides bot protection for websites introduced on May 27, 2007. Currently, LoginRadius supports both v2 and v3 Google reCAPTCHAs and this section covers configuring the different Google reCAPTCHAs with your LoginRadius implementation.

For more conceptual information on the Google reCAPTCHA, refer to the documentation [here](https://www.loginradius.com/docs/authentication/concepts/customer-security/#partcaptcha0).

## Configuration

Refer to the below-mentioned steps to configure the Google reCAPTCHA  with your LoginRadius implementation.

1. Log in to your Google account. Once you are logged in, head over to https://www.google.com/recaptcha/about/ and click on v3 Admin Console.

   ![Step 1 - v3 Admin Console](https://apidocs.lrcontent.com/images/Step-1_109076547563ae8feb0b0449.74825455.png "Step 1 - v3 Admin Console")

2. If you are already a consumer of Google reCAPTCHA, you will land on your Dashboard.

   - In case you want to configure your previous site, then select the site from the dropdown and click on settings (cog icon).

   - Or if you're going to register a new site, then click on add (+ icon), and you will be taken to register a new site as shown in the next step.

   ![Step 2 - Setting or register a new site](https://apidocs.lrcontent.com/images/Step-2_103959808863ae90271a2332.47052030.png "Step 2 - Setting or register a new site")

3. If you are a new consumer of Google reCAPTCHA, click on Register a new site and the following screen will appear.

   ![Step 3 - Register a new site](https://apidocs.lrcontent.com/images/Step-3_194946435063ae90820127e0.16390200.png "Step 3 - Register a new site")

4. Look for the Label and provide a name for this new reCAPTCHA configuration. You can use your site's name, and then select reCAPTCHA you want configure.

   **1.** **reCAPTCHA v3**

   **2.** **reCAPTCHA v2**


   ![label](https://apidocs.lrcontent.com/images/label_18346291066465ecca854bf3.54584710.png "label")

   - **If you select the reCAPTCHA v2 then there will be 3 option on the screen as below:**

   ![V2 recaptcha](https://apidocs.lrcontent.com/images/v2_2168302476465ed6c835df3.03233141.png "V2 recaptcha")
   > **Note:** Please be informed that as per the [**release**](https://www.loginradius.com/docs/api/changelog/admin-console-release-25102/), LoginRadius does not support “I’m not a robot” checkbox challenge. There is only an invisible reCaptcha option is available to configure captcha.

   - **If you select the reCAPTCHA v3 then only invisible reCaptcha is deployed for security**
   ![reCAPTCHA v3](https://apidocs.lrcontent.com/images/pasted-image-0_588922025648df3d92618f9.63651586.png "reCAPTCHA v3")

**5.** Scroll down to provide domains using the reCAPTCHA. This is for whitelisting purpose. If this is for your development environment, you can provide **localhost**, otherwise, provide your website's domain followed by accepting the reCAPTCHA Terms of Service. And once you are done, click on the **SUBMIT** button.

   ![Step 5 - Submit](https://apidocs.lrcontent.com/images/Step-5_134504161163ae90d57de504.64026376.png "Step 5 - Submit")

**6.** On successful submission, you will be shown your newly created reCAPTCHA credentials. You will need to copy it to the LoginRadius Admin Console.

   ![Step 6 - Google reCAPTCHA Keys](https://apidocs.lrcontent.com/images/Step-6_157458502063ae91075d68c1.35153480.png "Step 6 - Google reCAPTCHA Keys")

**7.** Navigate to [Platform Security > Auth Security > CAPTCHA Setting](https://adminconsole.loginradius.com/platform-security/account-protection/auth-security/captcha-settings) and provide your Google reCAPTCHA **SITE KEY** and **SECRET KEY** under the **Google ReCAPTCHA2 Setting** tab and click on the **SAVE** button.

> **Note:** When you are configuring **reCaptcha v3** for your site, you also need to add a **Risk threshold**, which will help you in analyzing the end-user behavior. And on the bases of their behavior, a rating will be provided to them, and if the rating matches your provided input, they will be prompted with the challenge.

   ![Admin Console](https://apidocs.lrcontent.com/images/Auth-Security-LoginRadius-User-Dashboard_746523639648dfa749cc813.23955078.jpg "Admin Console")

   After performing all the above steps, the reCaptcha will be successfully applied to your site, which will be visible as below in case of invisible reCaptcha.

   ![IDX](https://apidocs.lrcontent.com/images/pasted-image-0-2_1637182070648df5bcd7b354.38090451.png "IDX")


## Google reCAPTCHA with LoginRadiusV2.js

Once you have configured your Google reCAPTCHA account in the LoginRadius Admin Console, follow the steps below to include Google reCAPTCHA on the registration form in your LoginRadius interfaces.

```
option = {};
option.apikey = "<Your LoginRadius API key>";
option.appName = "<LoginRadius Site Name>";
```

**2**. The reCAPTCHA language can be changed using the `v2RecaptchaLanguage` parameter and giving it the desired [**language code**](https://developers.google.com/recaptcha/docs/language).

<!--

## **Display Different CAPTCHAs**

By default, when you set up a CAPTCHA with the LoginRadiusV2.js, it is applied to the registration form site-wide. However, if you need to use a different CAPTCHA based on the form displayed, this can be handled via our[ eventCalls](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/javascript-hooks#eventcallshook17) and[ beforeInit](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/javascript-hooks#beforeactioninithook0) JavaScript hooks.

In this example below, we display the Google Invisible reCAPTCHA if the user is facing the registration form. If the user is facing any other form, we show Google reCAPTCHA V2 as the CAPTCHA.

**Example:**

```
LRObject.$hooks.register('eventCalls', function(name){
    console.log(name)
    if(name == 'registration'){
      LRObject.options.invisibleRecaptcha = true;
    LRObject.options.v2Recaptcha = false;
    }
    else {
        LRObject.options.invisibleRecaptcha = false;
    LRObject.options.v2Recaptcha = true;
    }
});

LRObject.$hooks.register('beforeInit', function(name){
    console.log(name)
    if(name == 'registration'){
      LRObject.options.invisibleRecaptcha = true;
    LRObject.options.v2Recaptcha = false;
    }
    else {
        LRObject.options.invisibleRecaptcha = false;
        LRObject.options.v2Recaptcha = true;
    }
});

```
-->

## **Display Invisible reCAPTCHA at Login Form**

When the Google reCAPTCHA is enabled from the LoginRadius Admin Console, it will be enabled for the registration form. However, if someone is making large amount of login API calls using some scripts (DDoS attack) on your application, it can disrupt the normal traffic at the LoginRadius server, we recommend implementing the Google reCAPTCHA feature on your login form to prevent the DDoS attack.

The Google reCAPTCHA feature only triggers the challenge if the form submission is detected by some bots instead of a human being. Hence, it will provide a smooth experience to users and will trigger the CAPTCHA only when the form is submitted by Bots.

Following is a step-by-step guide to implement Google reCAPTCHA feature on Login Form:


**1**. Activate Google reCAPTCHA (V2 or V3) through the LoginRadius Admin Console using the previously provided configuration steps.


**2**. Add the following code to render the Google reCAPTCHA only at the login page.

```

LRObject.$hooks.register('beforeFormRender', function(name, schema) {
if (name == 'login' ) {
 LRObject.util.addRecaptchaJS(); LRObject.util.captchaSchema("loginradius-recaptcha_widget_login", schema);
}
});
```

**3**. Add the following code to stop resetting the Google reCAPTCHA.

```

LRObject.$hooks.register('eventCalls', function(name){

LRObject.options.optionalRecaptchaConfiguration.IsEnabled = true;

if (name == 'login') {

LRObject.options.optionalRecaptchaConfiguration.IsEnabled = false;

}

});
```

- You will now notice that the Google reCAPTCHA(which you have configured in the Admin Console)  is enabled only at the Login form.


> **Note**: The Google reCAPTCHA is a front end element and LoginRadius supports Google reCAPTCHA with single form submission under the same web page,e.g., it can be included only under Login or Registration form under the same page.


## **How to test invisible reCAPTCHA feature on your webpage**

In order to test the invisible reCAPTCHA on the the webpage, you can replicate the bot behavior in the follow these steps:

**1**. Open the developer tools in your browser (chrome).

**2**. Click on the **Customize and Control DevTools** icon, navigate to **More Tools** and click on **Network Conditions**.

![Devtools](https://apidocs.lrcontent.com/images/BotTesting-1-_6281624d666b918286.95419685.png "Devtools")

**3**. In the Network Conditions section, uncheck the **User browser default** checkbox and select **Googlebot** from the dropdown below.

![googlebot](https://apidocs.lrcontent.com/images/BotTesting2_20040624d66b549f170.77262382.png "googlebot")

**4**. Now, to test the invisible reCAPTCHA feature on the webpage, login with an account in the Login form. You'll notice that when you click the login button, the reCAPTCHA is triggered with the image verifying challenge.

> **Note:** The Google V3 reCAPTCHA's adaptive risk-analysis engine processes various signals and parameters related to the user interaction, ultimately forecasting the probability of whether the request originated from a bot or a human. These parameters are challenging to dispute or invalidate manually when it comes to testing the system.

![reCAPTCHA](https://apidocs.lrcontent.com/images/Screenshot-43-_2943624d65c6a975e3.36495044.png "reCAPTCHA")
