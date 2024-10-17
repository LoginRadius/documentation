# SMS Provider Introduction

An **SMS Provider** enables a system to send and receive text messages to and from an SMS capable device over the global telecommunication network. The SMS Gateway translates the message and makes it compatible for delivery over the network so that it can reach to the recipient.

LoginRadius Identity Platform establishes SMS communication by sending the SMS from your SMS provider to your customers. To send out SMS from your SMS provider, you will need to configure the SMS provider settings.

The following is a sequence diagram for sending an event-based SMS using the LoginRadius Identity Platform:

![enter image description here](https://apidocs.lrcontent.com/images/SMS_Flow_3_204885b69f48bc781e1-51710453_229855e7ef289944da4.26486074.png "enter image title here")


The following steps explain the working of SMS communication in the LoginRadius Identity Platform: 



1. The customer initiates a login request in the application via LoginRadius' API.
3. LoginRadius retrieves the message content and generates the [OTP code](https://www.loginradius.com/docs/infrastructure-and-security/loginradius-tokens#phone-otp-one-time-password-). LoginRadius then makes a call to your desired SMS Service Provider with the message content and generates the OTP code to form the SMS message.

5. On success, the SMS provider returns a response to LoginRadius, which is then relayed to the initiating application. The SMS message containing the message content and OTP code is sent by the SMS Service Provider back to the customer.
 
7. The customer enters the OTP code via LoginRadius' API.

9. The OTP code is authorized by LoginRadius and subsequently returns a success response to the application.


## SMS Provider Configuration

This section will take you through the configuration of the SMS provider in your LoginRadius Admin Console. Here you will get detailed information about the SMS provider used for sending the SMS to the customer.

Following are the SMS Providers supported by LoginRadius:

- [Twilio](#parttwilio1)
- [InstaAlerts](#partinstaalerts3)
- [MessageBird](#partmessagebird5)
- [TextLocal](#parttextlocal7)

To configure them Login to your  [**Admin Console**](https://adminconsole.loginradius.com/)  and choose the desired SMS provider which you want to configure.

The following screen will appear: 

![SMS Config](https://apidocs.lrcontent.com/images/sms2_241225ee4be12da3782.62455641.png "SMS Configuration")

> **Note:** If the SMS provider you are looking for is not available in the above list, contact [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket)

## Part 1 - Twilio 

Twilio is a cloud-based platform for providing communication services. It includes APIs for programmatically making and receiving phone calls, sending and receiving SMS messages. Its services are accessed over HTTP and billed as per usage. Internally, LoginRadius uses Twilio for its SMS services for sending OTP for various flows.

### Twilio Account Configuration

The following are the steps to configure a Twilio account:

**Step 1:** Login to your  [**Admin Console**](https://adminconsole.loginradius.com/) 

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/SMS1_176625ee4402c2857d2.34755732.png  "enter image title here")


**Step 2:** To obtain the **Twilio Account SID, Auth Token** and **Number**,  sign up for a trial account on [Twilio](https://www.twilio.com/try-twilio). The following screen will appear with the sign-up form:

![enter image description here](https://apidocs.lrcontent.com/images/pasted-image-0-1_124525e7ef556c71e29.79388668.png "enter image title here")

**Step 3:** Once you logged into the Twilio console, click **Create New Project** as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/3_88165e7ef6168a50f2.97225437.png "enter image title here")

**Step 4:** Enter the suitable **Project Name** and click **Verify** button as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/4_146465e7ef658d96729.34899349.png "enter image title here")

**Step 5:** Verify your phone number as highlighted in the following screen and enable the checkbox if you want to use the same number for Twilio authentication.

![enter image description here](https://apidocs.lrcontent.com/images/5_246575e7ef6c8c0fc30.42135714.png "enter image title here")

**Step 6:** Enter the verification code received on the provided number and click **Submit** as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/6_227585e7ef71e7e0cd0.23959120.png "enter image title here")

**Step 7:** Once the phone number is verified, it will ask you **Do you write code?** 
Select **No** as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/7_217355e7ef772c90e67.24296526.png "enter image title here")

**Step 8:** On the next screen, Twilio will ask you **What are you here to do?**
You can simply ignore and **Skip to Dashboard** as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/8_249145e7ef816812f61.27621228.png "enter image title here")

The following Dashboard screen will be displayed:

![enter image description here](https://apidocs.lrcontent.com/images/9_260395e7ef85125d5f6.06023040.png "enter image title here")

**Step 9:** Click **Get a Trial number** button as highlighted in the following screen to get a Twilio Phone Number.

 ![enter image description here](https://apidocs.lrcontent.com/images/0_68565e7ef8ca3e3442.19640630.png "enter image title here")

**Step11:** The following pop-up will be displayed with your first Twilio Phone Number.

Click **Choose this Number** button, if you wish to select this number. Also, take a note of this number since it is required to configure Twilio in the LoginRadius Admin Console.

![enter image description here](https://apidocs.lrcontent.com/images/00_141565e7ef946076627.90090418.png "enter image title here")

To choose another number, click the **Search for a different number** link and choose the new number.

> **Note:** Account upgrade is required for availing the different numbers.

**Step 12:** Navigate to **Settings > General** from the left navigation panel and take a note of the **Account SID** and **Auth Token** to configure Twilio in the LoginRadius Admin Console:

![enter image description here](https://apidocs.lrcontent.com/images/10_264445e7efaf69f4ba3.12939093.png "enter image title here")

**Step 13:** It is recommended to verify and add the mobile numbers before sending the SMS **(if it is not done already).** To do so, click the **Home** icon from the left navigation panel and select **#Phone Numbers** as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/11_237015e7efb568f36e5.78337393.png "enter image title here")

**Step 14:** Select **Verified Caller IDs** from left navigation panel as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/12_274055e7efbc14e69e2.56369229.png "enter image title here")

**Step 15:** If you want to verify a new number, click the **+ icon** and **enter a valid number** for verification as highlighted in the following screen and click on **Call Me** or **text you instead.**

![enter image description here](https://apidocs.lrcontent.com/images/13_148775e7efc194dc261.90070399.png "enter image title here")


> **Note:** You can choose the option to either get a call or receive a verification code on SMS.

**Step 16:** Enter the verification code received on your phone and click the **Submit** button as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/14_197645e7efc77b34947.76852805.png "enter image title here")

**Step 17:** Upon adding and verifying your phone number, the following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/15_10325e7efcb43365c5.40141771.png "enter image title here")

Once the phone number(s) are available under Verified Caller IDs, Twilio account setup is complete. 

**Step 18:** Enter the **Twilio Account SID, Twilio Auth Token** and **Twilio Number** in the  [**Admin Console**](https://adminconsole.loginradius.com/) 
screen, as explained in **Step 1.** 

Click on the **Save** button to save the configuration.

## Part 2 - InstaAlerts

InstaAlerts is a platform which enables clients to send and receive SMS messages. It includes APIs to allow enterprise software to access the system to send and receive SMS messages. Services are billed as per usage and can be accessed through a credit system defined under the selected SMS provider. 

> **Prerequisite:** InstaAlerts account must be set up for you to login into the account.

### InstaAlerts Account Configuration

The following are the steps to configure an InstaAlerts account. The credentials obtained after this setup will be configured in the LoginRadius Identity Platform. Raise a request to the [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) to get it configured.  

**Step 1:** Log in to your [InstaAlerts account.](https://www.instaalerts.zone/lounge/sign_in.php) The following displays the InstaAlerts login screen:

![enter image description here](https://apidocs.lrcontent.com/images/1_140015e7f1af66e0c08.91427629.png "enter image title here")

**Step 2:** Click the **My Account** drop-down and select the **Edit My Info** option as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/2_243635e7f1b4ce50eb2.75800571.png "enter image title here")

**Step 3**: Click the **Request** link available next to the **Sender ID’s** to request a new sender id as highlighted in the following screen:

> **Note:** If you want to use an existing Sender ID, skip **Step 3** and **Step 4** and proceed with **Step 5.**


![enter image description here](https://apidocs.lrcontent.com/images/3_31305e7f1c3702c706.72492352.png "enter image title here")

**Step 4:** Enter the desired Sender ID and click the **Send Request** button as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/4_271465e7f1c94f15031.07817446.png "enter image title here")


**Step 5:** Click the **View** link available next to **Sender IDs** as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/5_226095e7f1ce2333891.98344229.png "enter image title here")

It displays the following pop-up, where you can view the Sender ID as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/6_46805e7f1d38e07ea9.31654522.png "enter image title here")

Once you get the Sender ID,  InstaAlert setup is complete. To configure the obtained credentials for the LoginRadius Identity Platform, raise a request to the [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket)

## Part 3 - MessageBird 

[MessageBird](https://www.messagebird.com/en/) is a cloud communication platform for providing communication services. It also provides APIs for SMS, voice, and chats. Services are billed as per usage and can be accessed through a credit system defined under the selected SMS provider. 

### MessageBird Account Configuration

The following are the steps to configure an MessageBird account. The credentials obtained after this setup will be configured in the [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket). Raise a request to the LoginRadius Support Team to get it configured.

**Step 1:** Log in to your [MessageBird Account](https://www.messagebird.com/). If you do not have an account, Register [here](https://www.messagebird.com/).

The following displays the screen with **Log In** and **Sign Up** options:

![enter image description here](https://apidocs.lrcontent.com/images/7_169395e7f1f85efaf87.81235764.png "enter image title here")

**Step 2:** Click the **Developer** section available in the left navigation panel at the end as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/8_52755e7f1ff4d2ab06.15669725.png "enter image title here")

**Step 3:** Navigate to the **Developers > API Access** to generate an API Key.

Click the **+ Add access key** button to add an access key as highlighted in the following screen:


![enter image description here](https://apidocs.lrcontent.com/images/9_175875e7f20c75ee246.57126575.png "enter image title here")

The following pop-up will appear:

![enter image description here](https://apidocs.lrcontent.com/images/0_54095e7f20f8a24175.85641521.png "pop-up")

**Step 4:** Enter the description, select the access key mode as **Live** in the dropdown and click the **Add** button as highlighted in the above screen.

**Step 5:** The API key added above will be displayed in the **Developers** screen as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/10_155925e7f2172235481.70001525.png "Developers")

**Step 6:** Click on the **Show key** link and copy the displayed Access Key as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/showkey_55275e8452cc7b3ee0.17784850.png  "Show")

Once you get the Access key and ID, the MessageBird account setup is complete. 

To configure the obtained credentials in the LoginRadius Identity Platform, raise a request to the [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket)

> **Note:** The maximum Phone Number length supported by MessageBird is 11 characters.

## Part 4 - Textlocal

The UK-based [Textlocal](https://www.textlocal.com/) provides Services and APIs for sending SMS. These services are billed as per the usage.

The following are the two authentication methods supported by Textlocal:

- [Authenticate via API Key](#authenticateviaapikey9)
- [Authenticate via Username and Hash](#authenticateviausernameandhash10)

### Textlocal Account Configuration

This section covers the required steps that you need to perform in Textlocal to obtain the credentials by API Key, Username and Hash methods.


### Authenticate via API Key

To set up the API Key authentication, execute the following steps:

**Step 1:** Log in to your [Textlocal account](https://www.textlocal.com/).  If you do not have an account, register [here](https://www.textlocal.com/).

The following displays the login screen:

![enter image description here](https://apidocs.lrcontent.com/images/11_22565e7f2361c5b8d2.20716285.png "enter image title here")

**Step 2:** Upon login, you will land on the Dashboard screen. From the header, navigate to  **Settings > API Keys** as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/12_286875e7f239dcad4f4.24739974.png "enter image title here")

**Step 3**: To create an API Key, click the **Create New Key** button as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/13_233895e7f23db9a23c5.22695799.png "enter image title here")

**Step 4:** Enter the IP addresses used by LoginRadius in the box highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/14_288085e7f240f571d22.76547345.png "enter image title here")

Click the **Save New Key** button. It will whitelist the entered IP addresses. You can find the complete list of IPs used by LoginRadius [here.](https://www.loginradius.com/docs/infrastructure-and-security/ip-addresses-list)

**Step 5:** Upon API Key creation, you will be redirected to the following API Key List screen:

![enter image description here](https://apidocs.lrcontent.com/images/15_156705e7f2488a907f4.68029081.png "enter image title here")

To configure the obtained credentials (Textlocal API key) in the LoginRadius Identity Platform, raise a request to the[LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

### Authenticate via Username and Hash

To set up the Username and Hash authentication, execute the following steps:

**Step 1:** Log in to your [Textlocal](https://www.textlocal.com/) account.  If you do not have an account, register [here](https://www.textlocal.com/).

The following displays the login screen:

![enter image description here](https://apidocs.lrcontent.com/images/16_159505e7f25333c78d0.82600227.png "enter image title here")

**Step 2**: Upon login, you will land on the **Dashboard** screen. From the header, navigate to  **Help > All Documentation** as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/17_88465e7f25af77bf40.70594602.png "enter image title here")

**Step 3:** Scroll down the page and note the API Hash as highlighted in the following screen:

![enter image description here](https://apidocs.lrcontent.com/images/18_103415e7f25dc71e522.62249327.png "enter image title here")

To configure the obtained credentials(API Hash) in the LoginRadius Identity Platform, raise a request to the [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

## Part 5 - Next Steps 

The following is the list of features you might want to add-on to the above implementation:

- [SMS Communication and Configuration](/authentication/concepts/sms-communication/)

- [Email Communication and Configuration](/authentication/concepts/email-communications/)





















