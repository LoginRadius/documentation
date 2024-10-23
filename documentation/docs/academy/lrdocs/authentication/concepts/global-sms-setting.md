# Global SMS Setting

This document goes over the steps that you will need to take to configure the SMS settings which are supported by LoginRadius in order to send SMS communications.


## SMS Settings

LoginRadius has provided multiple SMS Templates such as, Phone Number verification, Phone Number Change, Password Reset, Welcome SMS, No Registration that will be sent to users when they first register with your site. You can customize the following settings of any SMS Template:

- Request Limit (It means the no. of times you can request for the SMS)
- Request Disabled Period (Time, for which the request option is being disabled, in seconds)
- Phone Number Verification OTP Validity (Time, up to which the token/OTP inside the SMS will be valid, in seconds)

## Configuration through Admin Console

Navigate to your **LoginRadius Admin Console ➔ Platform Configuration ➔ Identity Workflow ➔ Communication Configuration**, click on the fourth tab called **"Global SMS Settings"**.

![Global SMS Settings](https:/https://apidocs.lrcontent.com/images/Communication-Configuration---LoginRadius-User-Dashboard_144715e4af524cb9a74.25485432.png "Global SMS Settings")

Please note that the settings configured on this page are global for all your SMS events. To customize settings and templates for individual SMS events, please refer to this [document](https://api/v2/admin-console/platform-configuration/phone-login-configuration).
