# SMS/Text/Voice OTP Overview

The **LoginRadius SMS/Text/Voice OTP Workflow** is the process in which the LoginRadius API retrieves the message and, based on that, it generates the OTP. Then makes calls to the configured SMS/Text/Voice OTP provider to send the message and SMS/Text/Voice OTP to the end user. For more details about the SMS/Text/Voice OTP workflow, please refer [**here**](https://www.loginradius.com/docs/authentication/concepts/sms-communication/).

## SMS/Text/Voice OTP Provider Configuration

In order to send out SMS, Text and voice OTP (One-Time Password) messages from your SMS provider, you will need to configure your SMS provider setting in the Admin Console.

To configure them, you can Navigate to your LoginRadius [**Admin Console ➔ Platform Configuration ➔ Identity Workflow ➔ Communication Configuration**](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/email-configuration),  and click on the third tab called **"SMS/Text/Voice OTP Configuration"**.

On this page, you can update the configuration details for your **SMS/Text/Voice OTP provider** in the Admin Console. For information on the supported providers and how to configure them, refer to the documentation [**here**](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/communication-configuration/sms/providers/twilio-configuration/).


## Global SMS/Text/Voice OTP Settings

LoginRadius provides multiple SMS Templates such as Phone Number verification, Phone Number Change, Password Reset, and Welcome SMS that will be sent to customers based on the different events, and you can customize the settings of any SMS Template like the type of OTP, OTP limit, etc. For more details about the Global SMS setting, kindly refer [**here.**](https://www.loginradius.com/docs/authentication/concepts/sms-communication/#partglobalsmssettings0)

## SMS Template Settings

As we know that LoginRadius supports different-different types of **SMS templates**. So, LoginRadius also provides a way through which you can customize each SMS template as per your requirement, and also you customize the setting for each SMS template individually. To know how to do this please see this [**document**](https://www.loginradius.com/docs/authentication/concepts/sms-communication/#partsmstemplatesettings1).