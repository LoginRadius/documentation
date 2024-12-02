# Phone Login Configuration

 To configure Phone Login, select the **Platform Configuration** section and under **Authentication Configuration**, click on **Phone Login**.

On the left-hand panel, you will find the following settings to configure phone login:


- OTP Settings
- SMS Templates


## OTP Settings

Customize your One Time Passcode (OTP) settings by selecting your OTP type (e.g. numeric, alpha numeric, etc.) and length.
![enter image description here](https://apidocs.lrcontent.com/images/4_239985e73299975f277.50241833.png "OTP setting")

## SMS Template settings

Customize the SMS templates according to certain events, such as phone number verification, phone number change, password reset, and welcome SMS.


![enter image description here](https://apidocs.lrcontent.com/images/5_209515e732a1d028f83.11048667.png)

You can create additional templates with "Add Template," and modify existing templates with "Edit Template."
![enter image description here](https://apidocs.lrcontent.com/images/ac5_1085e931735230307.52042768.png)

For each SMS event, you can configure the following settings: 

- Request Limit
- Request Disabled Period (Seconds)
- OTP Validity Limit (Seconds)
![enter image description here](https://apidocs.lrcontent.com/images/7_116295e736aa3e60ef8.45797649.png)

The individually configured SMS event settings override global sms settings. For more information on configuring your global sms settings, please refer to [this documentation](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/communication-configuration/sms/global-sms-settings/#session-management-configuration)

## Placeholder Tags

Below are the predefined placeholders that can be included in your SMS message:

- **#Name#:** This gets replaced with the user's name as defined in the registration form.
- **#OTP#:** OTP received in SMS for phone number verification.
- **#FirstName#:** First name from the registered user's profile.
- **#LastName#:** Last name from the registered user's profile.
- **#UserName#:** If you enabled username login on your site, you may want to show the name when a user forgets his password.
- **#OTPExpiry#:** Expiration time of an OTP in seconds. It will replace with the value of 'OTPExpire' field of particular SMS type settings. If there is no set value, then default value will be '300' seconds.
- **#Email#:** Email address from the registered user's profile.
