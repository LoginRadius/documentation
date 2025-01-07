# Account Verification 

LoginRadius Account Verification allows customers to validate a provided identity to ensure that there is a robust security layer to prevent or block any fraudulent activities. LoginRadius provides multiple ways for account verification which provides an extra layer of security for your account. Instead of relying on a password only, these verifications introduce a second check to help make sure that you, and only you, can access your account. 

There are three types of credentials that can be provided and validated, and they are Email, Phone, and Social Profile. You will see details around the related verification method as below


## Email Verification

When a customer provides an email address at registration, we have two ways to validate it:

1. **Email Link**: Our system sends a verification link to the provided email address. By clicking on the link, the customer successfully verifies his/her account and will be redirected to the login page.

2. **One Time Password (OTP)**: Our system sends a One Time Passcode (OTP) to the registered email address and the customer will be  prompted to enter the OTP for system validation.

> **Note**: LoginRadius supports various [email verification workflows](https://www.loginradius.com/docs/authentication/concepts/email-verification-workflow/). Based on workflows, there are different validation processes.

- For **No Email Verification**, no account verification is required.
- For **Optional Email Verification**, account verification is optional.
- For **Mandatory Email Verification**, account verification is mandatory.

## Phone Verification

If a customer provides Phone ID then there are two ways to verify:

- **SMS**: Our system sends an OTP to the registered Phone ID, and the customer needs to enter the OTP for the system verification.
- **Voice**: The customer will receive the OTP via voice call.

## Social Profile Verification

If an email or phone number is provided by a social provider and is indicated as verified, then our system will automatically mark it as verified. Otherwise, our system will ask the customer for the email or phone number and launch the verification process. 

**Note**: Account verification will also happen for functionalities such as Forgot Password, Reset Password. An email/SMS will be sent for verification.




# Additional Security Options

Please check the below additional security options that LoginRadius provides for your account security.

## Block Fraudulent Domains:

Our system can prevent fraudulent email domains thus ensuring that you are blocking out known fraudulent or undesired domains and preventing malicious users from accessing your site. For more detailed information refer to this [document](https://www.loginradius.com/docs/security/user-security/fraud-prevention/#blockfraudulentdomains2).

## IPs Access Control:

We provide the ability to control access to the LoginRadius APIs by configuring either to allow or deny certain IP addresses. For more detailed information refer to this [document](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-security/#ip-access-restriction).


## Validating SSN with 3rd Party APIs:

Our system provides validation for SSN, the nine-digit Social Security Number to U.S. citizens, permanent residents, and temporary residents under the Social Security Act, via 3rd party Validating SSN APIs.

## Validating SIN with 3rd Party APIs:

Our system provides validation for SIN, the nine-digit Social Insurance Number of the Canada Revenue Agency for tax reporting purposes, via 3rd party Validating SIN APIs.
