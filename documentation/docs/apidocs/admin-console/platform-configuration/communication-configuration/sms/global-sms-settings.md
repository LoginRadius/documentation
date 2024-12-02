
# Global SMS Settings

LoginRadius provides multiple SMS Templates such as, Phone Number verification, Phone Number Change, Password Reset, Welcome SMS that will be sent to customers based on the different events. You can customize the following settings of any SMS Template:


- **OTP Length**: The length of the one-time passcode you want to set for the SMS.

- **OTP Type**: The type of OTP you want to send to the customer. There are many options available for example, Numeric, AlphaNumeric.

- **Request Limit:** The number of times an OTP can be requested within a set timeframe, determined by the Request Disable Period (in minutes).

- **Request Disable Period:** The duration (in minutes) a customer can request OTP and the disabled duration after the request limit is reached. 

- **OTP Validity Limit (Seconds)**: The amount of time (in seconds) for which an OTP is valid.


Navigate to your LoginRadius Admin Console ➔ Platform Configuration ➔ Identity Workflow  ➔ [Communication Configuration](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration), click on the tab "Global SMS Settings" and the following screen will appear.


![enter image description here](https://apidocs.lrcontent.com/images/pasted-image-0_32465e7b5f234ccb25.14993495.png "enter image title here")

Please note that the settings configured on this page are global for all your SMS events. To customize settings and templates for individual SMS events, please refer to this [document](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/phone-login-configuration). 