# SMS/Text/Voice OTP Provider Introduction

A **SMS/Text/Voice OTP Provider** enables a system to send and receive text messages or Voice OTP to and from an SMS/Voice OTP capable device over the global telecommunication network. The SMS Gateway translates the message and makes it compatible for delivery over the network so that it can reach the recipient.

LoginRadius Identity Platform establishes SMS communication by sending the SMS from your SMS provider to your customers. To send out SMS from your 
SMS provider, you will need to configure the SMS provider settings.

The following is a sequence diagram for sending an event-based SMS using the LoginRadius Identity Platform:


![enter image description here](https:/https://apidocs.lrcontent.com/images/SMS_Flow_3_204885b69f48bc781e1-51710453_229855e7ef289944da4.26486074.png "enter image title here")


TThe following steps explain the working of SMS communication in the LoginRadius Identity Platform:

**1.** The customer initiates a login request in the application via LoginRadius' API.

**2.** LoginRadius retrieves the message content and generates the [OTP code](/infrastructure-and-security/loginradius-tokens#phone-otp-one-time-password-). LoginRadius then makes a call to your desired SMS Service Provider with the message content and generates the OTP code to form the SMS message.

**3.** On success, the SMS provider returns a response to LoginRadius, which is then relayed to the initiating application. The SMS message containing the message content and OTP code is sent by the SMS Service Provider back to the customer.

**4.** The customer enters the OTP code via LoginRadius' API.

**5.** The OTP code is authorized by LoginRadius and subsequently returns a success response to the application.

> **Note:** 

> - By default, the LoginRadius only supports **Twilio**. However, if you would like to configure **SMS/Text/Voice OTP services** with other providers such as **InstaAlerts**, **MessageBird**, **Textlocal**, or even **Twilio with WhatsApp**, you can select the [**Custom Text/SMS Provider**](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/text-and-sms-and-voice-otp-configuration) and proceed to configure the same.

> - For more details on configuring these providers, kindly refer to this [**document**](https://api/v2/admin-console/platform-configuration/communication-configuration/sms/overview/).


Now let's go through the other aspects of SMS configuration, which are **Global SMS/Text/Voice OTP Settings** and **SMS Template Settings**, which are available in the **LoginRadius Admin Console**.

- [**Global SMS/Text/Voice OTP Settings:**](/authentication/concepts/sms-communication/#partglobalsmstextvoiceotpsettings0)  You can customize various global SMS settings like OTP length, OTP type, and more.
- [**SMS Templates:**](/authentication/concepts/sms-communication/#partsmstemplatesettings1) You can view the existing list of default SMS templates available for various events like phone number registration, forgot password, and more. In addition, you can manage existing SMS templates or create a new SMS template based on the requirements.

## Part 1 - Global SMS/Text/Voice OTP Settings

This section will take you through the Global SMS/Voice OTP Settings configuration in your LoginRadius Admin Console. These settings are applicable to all the SMS templates until defined for individual SMS Settings. The individual SMS settings are available in the respective feature section like Phone Login, Passwordless Login, and more.

The following explains the Global SMS/Voice OTP Settings and how you can configure them:


**Step 1:** Login to your  [**Admin Console**](https://adminconsole.loginradius.com/) 

The following screen will appear:
![enter image description here](https:/https://apidocs.lrcontent.com/images/Communication-Configuration-LoginRadius-User-Dashboard_89438943566216a0075f811.15596655.png "SMS otp config")

**Step 2:** You can update the default values for the following Global SMS/Voice OTP Settings
- **OTP Delivery Method:** This dropdown allows you to select the desired OTP delivery method, either "SMS" or "SMS & Voice."
- **OTP Length:** The length of the one-time passcode you want to set for the SMS.
- **OTP Type:** The type of OTP you want to send to the customer from available options like Numeric, AlphaNumeric, and more.
- **Request Limit:** The number of times an SMS/OTP can be requested within a set timeframe, determined by the Request Disable Period (in minutes).

- **Request Disable Period:** The duration (in minutes) a customer can request SMS/OTPs and the disabled duration after the request limit is reached. 

- **OTP Validity Limit (Seconds):** The amount of time (in seconds) for which an OTP is valid.

> **Note:** If you have selected “SMS & Voice” on **OTP Delivery Method,** then the below voice OTP-related settings appear.

- **Voice Type:** This dropdown allows you to choose the desired voice type for voice OTP, i.e., "Male" or "Female."

- **Language:** This dropdown enables you to select the language for the voice OTP. As of now, this includes English, Spanish, French, German, and Italian.

- **Repeat OTP on Call:** This dropdown allows you to specify the times the OTP should be repeated during a voice call, ranging from 1 to 10.

**Step 3:** Click the **Save** button to save the **Global SMS settings**.

> **Note:** Only the above settings can be configured globally for the SMS. The SMS templates need to be configured and managed at the individual feature level. For example, phone number verification SMS can only be managed from  [**Admin Console**](https://adminconsole.loginradius.com/) 

## Part 2 - SMS Template Settings

This section will take you through the available actions for managing and customizing the various SMS templates available in your account. 

For all SMS templates (except Welcome SMS), you can manage the following SMS template settings:

- **Request Limit:** The number of times a SMS/OTP can be requested within a set timeframe, determined by the Request Disable Period (in minutes).

- **Request Disable Period:** The duration (in minutes) a customer can request SMS/OTPs and the disabled duration after the request limit is reached. 

- **OTP Validity Limit (Seconds):** The amount of time (in seconds) for which an OTP is valid.
The following screen displays the above settings configured for the **Phone Number Verification** template:
![SMS Communication and Configuration](https:/https://apidocs.lrcontent.com/images/pasted-image-0_259295e7fa704253993.63317385.png "SMS Communication and Configuration")

### SMS Template Management

The SMS Templates are available with their respective feature in the LoginRadius Admin Console. Each SMS Template has the following customization options available:

- [Edit Template](/authentication/concepts/sms-communication/#edittemplate3)
- [Add Template](/authentication/concepts/sms-communication/#addtemplate4)
- [Delete Template](/authentication/concepts/sms-communication/#deletetemplate5)
- [Reset Template](/authentication/concepts/sms-communication/#resettemplate6)

While adding or editing the content of SMS templates, you can also use predefined [placeholder tags](/authentication/concepts/sms-communication/#placeholdertags7).

The following explains how you can manage the SMS templates available in the LoginRadius Admin Console: 

#### Edit Template

For all SMS templates, you can edit the content or add/update [placeholders](/authentication/concepts/sms-communication/#placeholdertags7) as explained below:

Select the desired template from the left navigation panel and click the **Edit Template** button. For example, to edit the **Phone Number Verification** template, select it from the left navigation panel and then click the **Edit** button. 

The following screen will appear in edit mode:

![SMS Communication and Configuration](https:/https://apidocs.lrcontent.com/images/smsedit_87025e81317aeb07a0.12905932.png "SMS Communication and Configuration")

 In the **SMS CONTENT** section, you can update the given text or use [Placeholder Tags](/authentication/concepts/sms-communication/#placeholdertags7) from the predefined list. Save the template once you are done with the updates.

Similarly, you can manage SMS templates available for other features like [Passwordless Login](/authentication/tutorial/passwordless-login), [One Touch Login](/authentication/tutorial/one-touch-login/), [Multi-Factor Authentication](https://www.loginradius.com/docshttps://api/v2/admin-console/platform-security/multi-factor-auth/#multi-factor-authentication-configuration) and more.

#### Add Template

Using this option, you can create a new SMS template option within the default SMS templates. For example, if you click the **Add **button from **Phone Number Verification Settings** SMS template screen, the following screen will appear:
![SMS Communication and Configuration](https:/https://apidocs.lrcontent.com/images/sms4_59795e7fb1ae5236f3.32360927.png "SMS Communication and Configuration")


Add the desired **TEMPLATE ID, SMS CONTENT** in the respective sections and click the Add button to create the template. 

The following screen will display the added TEMPLATE ID in the drop-down list:
![SMS Communication and Configuration](https:/https://apidocs.lrcontent.com/images/sms5_50415e7fb1f92e51d8.38800269.png "SMS Communication and Configuration")

This way, you can maintain multiple sub-templates for a default template and use the desired TEMPLATE ID in the implementation.


#### Delete Template

Use this option to delete a sub-template. To delete, select the respective TEMPLATE ID from the drop-down list, and the following template screen appears:
![SMS Communication and Configuration](https:/https://apidocs.lrcontent.com/images/sms6_114505e7fb21d5d28c3.04007066.png "SMS Communication and Configuration")


Click the **Delete** button and then confirm the action to delete the template.

Note: You can only delete the new template(s) that you created, i.e. you are not allowed to delete the default templates.

#### Reset Template

Use this option to reset the default templates in the original state, if you have updated the content or placeholder tags.

> **Note:** The reset template option is only available for the default templates that come with the LoginRadius Identity Platform. 

### Placeholder Tags

The following are the predefined placeholders that you can use in the SMS CONTENT:

- **#Name#**: Displays the customer's name as defined in the registration form.
- **#OTP#**: Displays the OTP received in SMS.
- **#FirstName#**: Displays the first name from the registered customer's profile.
- **#LastName#**: Displays the last name from the registered customer's profile.
- **#userName#**: If username login is enabled for your web application, you can use this tag to display the username in the forgot password message. 
- **#OTPExpiry#**: Display the expiration time of an OTP in seconds. It displays the value of the **'OTPExpire'** field of particular SMS type settings. The default value of OTP expiry is 300 seconds.
- **#Email#**: Displays the email address from the registered customer's profile.

