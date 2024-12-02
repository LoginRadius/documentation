#Configuring Twilio account with LoginRadius

##Overview

Twilio is a cloud-based platform for providing communication-based services. It includes APIs for programmatically making and receiving phone calls, sending and receiving SMS messages. Its services are accessed over HTTP and billed as per usage. Internally, LoginRadius uses Twilio for its SMS services in phone authentication, sending OTP, and others. This section describes configuring a Twilio account with LoginRadius.



1. First, You need to Sign up for a trial account on [Twilio](https://www.twilio.com/try-twilio).

 ![Twilio account seyup](https://apidocs.lrcontent.com/images/register_655160d18f0655b0f3.41984546.png "Registration ")

2. Verify your email through the email verification link triggered to the registered email id.

 ![Twilio account setup](https://apidocs.lrcontent.com/images/email-verification_1778660d18f3fe3dd86.07388511.png "Verify Email")

 - Go to mail and click on **confirm your email**.

 ![Twilio account setup](https://apidocs.lrcontent.com/images/indox_1505960d19534144b51.75329373.png "Email verification")

 - And after clicking on confirm your email, log in with the registered email and password.
 ![Twilio account setup](https://apidocs.lrcontent.com/images/login_708860d1a3abb047f0.85229135.png "Enter Email")
 ![Twilio account setup](https://apidocs.lrcontent.com/images/password_959460d190604f67a0.84572791.png "Login")

3. In the next step, verify the phone number with otp sent to the provided number.

 ![Twilio account setup](https://apidocs.lrcontent.com/images/verification-of-trial-no-_1566060d190a1768118.84144174.png "Enter the Number")

 ![Twilio account setup](https://apidocs.lrcontent.com/images/verify-otp_1934960d190d5c44187.37346606.png "Enter the top received")

 > **Note**: The Number you verify here will receive the verification SMS and phone calls.

4. After verifying both email and phone numbers, answer the questions asked in the next step

 ![Twilio account setup](https://apidocs.lrcontent.com/images/form_2215960d1912059ef89.01912659.png "Answer the question")

5. On the next screen, you will have a dashboard. Here, you need to click on the **Get Trial Number** button.

 ![Twilio account setup](https://apidocs.lrcontent.com/images/dshboards_1201360d1916c5e1243.28374351.png "Account details")

6. In the next step, a number will be shown to you as your trial number. So, click on the **Choose this Number** button.

 ![Twilio account setup](https://apidocs.lrcontent.com/images/number_975660d191afe08b12.71472644.png "Your Twilio Number")

 > **Note**: In order to choose a different number other than this, you have to upgrade your account by adding a card.

7. Once you receive a trial number from Twilio, you should also keep a note of Account SID and Auth Token to be configured in the LoginRadius dashboard. To see the credentials, go to the dashboard, and inside the dashboard, see the project info section. From there, copy the account SID and click on the show button to see the auth token and copy that. 

 ![Twilio account setup](https://apidocs.lrcontent.com/images/id-and-secretr_1514460d191e555d993.94732838.png "Account id and Token")

8. Open [LoginRadius dashboard](https://adminconsole.loginradius.com) with valid credentials. Go to [Platform Configuration > Identity workflow > Communication configuration > SMS configuration](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/sms-configuration). Paste the Twilio credentials like Account SID, Auth Token, and Twilio Number in the respective fields as shown below. Tap the “Save” button to save the configuration.


 ![Twilio account setup](https://apidocs.lrcontent.com/images/Communication-Configuration-LoginRadius-User-Dashboard_15073908176631d1d2294d29.03571818.png "Admin console Setup")




> **Note**: In the trial account, the verification SMS and the calls will only be received on the verified number (which we have verified in the starting).


