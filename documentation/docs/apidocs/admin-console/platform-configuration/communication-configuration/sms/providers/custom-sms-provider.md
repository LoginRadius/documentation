# Custom SMS/Text Providers

LoginRadius provides you the ability to implement any custom SMS/Text providers as per your requirements. Using this feature, you can implement various SMS/Text providers such as Twillio on WhatsApp, TextLocal, Line, MessageBird, etc. LoginRadius uses this SMS service for phone authentication, sending OTP, and others. This section describes configuring different types of SMS/Text providers with LoginRadius.

- Navigate to the [**Text And SMS And Voice OTP Configuration**](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/text-and-sms-and-voice-otp-configuration) section of the Admin Console and select **Custom Text/ SMS Provider** from the dropdown.

![Overview](https://apidocs.lrcontent.com/images/Communication-Configuration-LoginRadius-User-Dashboard_962626584658620cddb0081.21099861.png "Overview")

- Enter the **Delivery Provider URL**. Please note this URL is different for each provider. To obtain them, you can either refer to the provider’s documents, or you can also obtain this from the CURL request you get after configuring the SMS/Text/ Voice providers. 

Select the **Authentication type**, which consists of the following options:

1. Basic Authentication
2. Bearer
3. No Authentication

### Basic Authentication

Upon selecting this option, the system will prompt you to input both a **username** and a **password** as prerequisites to proceed further. Typically, these credentials are SID and Auth Token, but for certain providers, the username and apiKey may differ for certain providers. Alongside the username and password, it is necessary to specify the HTTP method, such as **GET, POST, and PUT**. 

![Basic Authentication](https://apidocs.lrcontent.com/images/Untitled_166850324465d70a78cb11a3.74423734.png "Basic Authentication")

 Refer to the provided sample CURL requests for a basic authentication method of Twilio on WhatsApp for further clarity:

```
curl 'https://api.twilio.com/2010-04-01/Accounts/[username]/Messages.json' -X POST \
--data-urlencode 'To=whatsapp:[Receiver Phone number]' \
--data-urlencode 'From=whatsapp:[Sender’s Phone number]' \
--data-urlencode 'Body=[BODY]' \
-u ACe6dd976c6cb42473c757e7fba6761446:[AuthToken(Password)]
```

### Bearer

Choosing this option necessitates passing the **bearer** token along with the HTTP method. 

![![Bearer](https://apidocs.lrcontent.com/images/Untitled_166850324465d70a78cb11a3.74423734.png "Basic Authentication")](https://apidocs.lrcontent.com/images/Untitled-1_155123419365d70b0668e216.68747435.png "Bearer")

For a better understanding, please review the subsequent sample CURL requests illustrating the bearer method:

```
curl --location 'https://api.line.me/v2/bot/profile/[APP ID]' \
--header 'Authorization: Bearer UcjDR3Kmfm5M/gPKlezOd9hnYeN3ub/L+Vt97x73z1Tr…….[Bearer Token]/1O/w1cDnyilFU='
```

### No Authentication

- When opting for this alternative, there is no need to provide a username, password, or bearer token. Nevertheless, you are required to specify the HTTP method, but no username, password, or bearer token is necessary.

Please refer to the provided sample CURL requests for the No Authentication method:

![No Authentication](https://apidocs.lrcontent.com/images/Untitled-2_145627562565d70b86d914e5.01120836.png "No Authentication")

```
curl --location --request PUT 'https://api.textlocal.in/send/?apikey=[API KEY]&sender=600010&numbers=[Phone number]&message=Hi%20there%2C%20thank%20you%20for%20sending%20your%20first%20test%20message%20from%20Textlocal.%20See%20how%20you%20can%20send%20effective%20SMS%20campaigns%20here%3A%20https%3A%2F%2Ftx.gl%2Fr%2F2nGVj%2F'
```


- After completing all the above-mentioned fields, proceed to provide the body details. Typically, this involves choosing between **JSON format** or **X-WWW-form-urlencoded** according to the provider you have configured and entering the values accordingly. This step includes details about the **sender's phone number** and the **body of the SMS**, where you can incorporate placeholder tags. For example: "body": "#template#", "to": "#receiver#".


- Enter the **header** and **query parameters**' values if necessary.LoginRadius enables you to define preferred values in your headers, offering a valuable solution to address analytics discrepancies when analytics rely on header data. For more details on headers, kindly refer to this [**document**](https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/#refererheader9). You have the ability to input header details, encompassing keys and values, and the flexibility to add extra header values using the **"Add Row"** button (optional).

- Similarly, you can input **query parameter** details, including keys and values, and have the flexibility to add supplementary query parameter values via the **"Add Row"** button (optional).

> Note: The inclusion of these values depends on the specific requirements of the SMS provider.


These attributes, fields, and parameters are standard requirements dictated by the provider.


 Following these steps allows you to effortlessly set up custom SMS/Text providers within LoginRadius, thereby improving your authentication and communication capabilities.


If you need assistance with this, [**submit a ticket**](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) with the LoginRadius support team and someone will be able to assist.