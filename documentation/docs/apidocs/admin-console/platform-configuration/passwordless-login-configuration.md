# Passwordless Login Configuration

To Configure Passwordless Login, navigate to your LoginRadius [**Admin Console**](https://adminconsole.loginradius.com/) from the top header select **Platform Configuration** and under **Authentication Configuration** select **Passwordless Login**. Here, On the left-hand panel you will be provided with two different options **Passwordless Login with Email** and **Passwordless Login with OTP**.

## Passwordless Login with Email

When using Passwordless Login with Email, a verification email gets sent to the user's email address and on click of the link included in the verification email, the user is logged into the account. Follow below steps to configure Passwordless Login with Email settings:

1. Click on Passwordless Login with Email settings and fill up 'Request Limit', 'Request disabled period' and 'Passwordless login email token validity limit'.
   ![](https://apidocs.lrcontent.com/images/ac1_42235e931570cb4805.12612726.png)
2. Select the Email template that you would like to manage and can perform actions such as 'Add Template','Edit Template','Send Test Email' and 'Delete Template'.
   ![Passwordless-Email-Template](https://apidocs.lrcontent.com/images/8--Passwordless-Email-Template_1507763025b94206084.04962289.png "Passwordless-Email-Template")

## Passwordless Login with OTP

1. Click on Passwordless Login with OTP settings and fill up 'Request Limit', 'Request disabled period' and 'Passwordless login OTP validity limit'.
   ![](https://apidocs.lrcontent.com/images/ac3_192385e9315ce249905.98556117.png )
2. Select the SMS template that you would like to manage and can perform actions such as 'Add Template','Edit Template' and 'Delete Template'.
   ![](https://apidocs.lrcontent.com/images/ac4_262495e9315eee1f6f6.69094428.png)

Each of the available email/SMS templates has corresponding settings that can be configured to control the usage and mitigate malicious requests.

- Request Limit: The number of times an email/OTP can be requested within a set timeframe, determined by the Request Disable Period (in minutes).

- Request Disable Period: The duration (in minutes) a customer can request an email/OTP and the disabled duration after the request limit is reached. 

- VALIDITY LIMIT- The amount of time (in minutes) for which the link/OTP included in the given email/SMS is valid.
