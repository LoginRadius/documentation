# hCaptcha with LoginRadius

hCaptcha is a popular CAPTCHA-like system that provides bot protection for websites and helps protect user privacy. It provides simple and reliable bot detection while being trivial for humans to solve. LoginRadius supports both hCaptcha type (invisible and check box) and configuring hCaptcha with your LoginRadius implementation is covered in this section.


## Configuration

Refer to the below-mentioned steps to configure the hCaptcha with your LoginRadius implementation.

1. Log in to your [**hCaptcha account**](https://dashboard.hcaptcha.com/).

   ![hcaptcha](https://apidocs.lrcontent.com/images/hCaptcha-Dashboard_8662726826465f309c79ff7.17555499.png "hcaptcha")

2. If you are already a consumer of  hCaptcha, you will land on your Dashboard.

   - In case you want to configure your previous site, then select the site from the dropdown and click on settings (cog icon).

   - Or if you’re going to register a new site, then click on **New Site** option, and you will be taken to register a new site as shown in step 3.

   ![new site](https://apidocs.lrcontent.com/images/newsite_6055570226465f35fc0d530.61772548.png "new site")

3. If you are a new consumer of hCaptcha, click on New Site option and the following screen will appear.

   ![Configuration](https://apidocs.lrcontent.com/images/config_12095328726465f38c8b0f56.81712963.png "Configuraion")

4. Add the name for this new hCaptcha configuration.

    ![key](https://apidocs.lrcontent.com/images/key_18723739296465f3d5042666.53788212.png "key")

**5.** Scroll down to provide domains using the hCaptcha. This is for whitelisting purpose. If this is for your development environment, you can provide **localhost**, otherwise, provide your website's domain followed by choosing the hCaptcha Behavior and Passing  **Threshold** you want. And once you are done, click on the **SUBMIT** button.

   ![Details](https://apidocs.lrcontent.com/images/details_6746455506465f485141ee0.93494683.png "Details")

**6.** On successful submission, you will be shown below screen from where you can get your site key. You will need this key  the LoginRadius Admin Console.

   ![sitekey](https://apidocs.lrcontent.com/images/save_9961831236465f4bb82a815.26873696.png "sitekey")

   - To get the **Secret Key** click on the profile icon and then on the settings. Inside the setting you will see the Secret key. You need to put this secret in LoginRadius Admin Console.
   
   ![secret](https://apidocs.lrcontent.com/images/pro_13632309556465f4fc478743.65763766.png "secret")

   ![site secret](https://apidocs.lrcontent.com/images/secret_957231926465f51d623132.18101757.png "site secret")


**7.** Navigate to [**Platform Security > Auth Security > CAPTCHA Setting**](https://adminconsole.loginradius.com/platform-security/account-protection/auth-security/captcha-settings)  provide your **hCaptcha SITE KEY** and **Site SECRET KEY** under the **hCaptcha Setting tab** and click on the **Save button**

**8.** You also need to add a **Risk threshold**, which will help you in analyzing the end-user behavior. And on the bases of their behavior, a rating will be provided to them, and if the rating matches your provided input, they will be prompted with the challenge.

![Admin Console](https://apidocs.lrcontent.com/images/pasted-image-0-3_609275241648dfb864afbd6.28056945.png "Admin Console")

## hCaptcha with LoginRadiusV2.js

Once you have configured your hCaptcha account in the LoginRadius Admin Console, follow the steps below to include hCaptcha on the registration form in your LoginRadius interfaces.

```
option = {};
option.apikey = "<Your LoginRadius API key>";
option.appName = "<LoginRadius Site Name>";
```

The hCaptcha language can be changed using the `hl` parameter and giving it the desired [**language code**](https://docs.hcaptcha.com/languages/).

## Display hCaptcha at Login Form

When the **hCaptcha** is enabled from the LoginRadius Admin Console, it will be enabled for the registration form. However, if someone is making large amount of login API calls using some scripts (DDoS attack) on your application, it can disrupt the normal traffic at the LoginRadius server, then you can implement the hCaptcha on the login form.

The hCaptcha feature has 2 option in the Admin Console:

**1.** **Captcha checkbox and Challenge**

**2.** **Captcha Challenge**

![Admin Console](https://apidocs.lrcontent.com/images/pasted-image-0-4_534226621648dfc3b5c8f11.87656351.png "Admin Console")

According to your configuration it triggers the challenge if the form submission is detected by some bots instead of a human being. Code to implement the hCaptcha in the login form will be same as Google reCAPTCHA which can be found [**here**](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/captcha-providers/google-recaptcha-configuration/#displayinvisiblerecaptchaatloginform2).

- In the case of the **CAPTCHA Checkbox and Challenge**, your registration page will look something like below.

![hcaptcha](https://apidocs.lrcontent.com/images/pasted-image-0-5_86746840648dfcad40e8e9.89916747.png "hcaptcha")

- In the case of the **CAPTCHA Challenge** only option, the end user will encounter the below screen.

![hcaptcha challenge](https://apidocs.lrcontent.com/images/pasted-image-0-6_975621889648dfd32aac0f7.95420281.png "hcaptcha challenge")

