# WebHooks

WebHooks allow you to build or set up integrations that subscribe to certain events on LoginRadius. When one of these events is triggered, LoginRadius will automatically send a POST payload over HTTPs to the WebHook's configured URL in real time. WebHooks can be used to update an external tracker or update a backup mirror.

> **Note:** Once the request is submitted to the WebHook's configured URL, LoginRadius does not track payload deliverability.

## Events

When configuring a WebHook, you can select the events for which you would like to receive payloads. Only subscribing to the specific events you plan on handling is useful for limiting the number of HTTP requests to your server. You can change the list of subscribed events through the API at any time. By default, WebHooks are only subscribed to the push event.
The following are the allowed events:
Login, Register, UpdateProfile, ResetPassword, ChangePassword, EmailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, UpdateCustomobject, DeleteCustomObject, CreateCustomObject, InvalidateEmailVerification, InvalidatePhoneVerification, RemovePhoneId, RemoveRoleContext, ConsentProfileUpdate, SetPIN, ResetPIN and ChangePIN.


The APIs associated with these events can be found [here](https://www.loginradius.com/docs/api/v2/integrations/webhooks/overview/#apisassociatedwithwebhookevents0).

## WebHook sample header

All webhook POST request headers will contain the following fields: host, accept, accept-encoding, content-type, request-context, request-id, signature, user-agent, content-length, connection. 

Here is the sample for WebHook payload header:


![WebHook Payload header](https://apidocs.lrcontent.com/images/WebhookPayloadHeader_250215d09686fd563c7.31213874.jpg "WebHook Payload header")

## WebHook Security

All the WebHook's configured URL must use https as it is more secure. If you use https, your SSL/TLS certificate must be validated. 

A signature field is passed in every WebHook payload header to subscribed URL in Admin Console. The signature field value contains API secret and payload body in the hashed form. The signature data field can be used to verify the source of data for each incoming POST request is LoginRadius. 

The following .net script can be used to generate a signature field from the LoginRadius API secret and WebHook payload Body. You can compare this generated signature with the signature field value in the WebHook payload header to validate the WebHook source of data.

- Replace `<LoginRadius API Secret>` with the API Secret for your LoginRadius site in the below code.

    > **Note:** LoginRadius facilitates selecting either the primary API secret or any of the secondary API secret (having the access to Webhook API) for generating the hashed webhook signature. You need to use the same LoginRadius API secret that has been used while configuring the corresponding webhook in the [Webhooks](https://adminconsole.loginradius.com/integration/data-sync/web-hooks) section of the Admin Console.

- Replace `<WebHook Payload Body>` with WebHook Payload Body in string format.
- The code will write derived signature in the console.

```
using System;
using System.Text;
using System.Security.Cryptography;

public class Program
{
    private const string key = "<LoginRadius API secret>";
    private const string message = "<WebHook payload body>";
    private static readonly Encoding encoding = Encoding.UTF8;

    static void Main(string[] args)
    {
        var keyByte = encoding.GetBytes(key);
        using (var hmacsha256 = new HMACSHA256(keyByte))
        {
            hmacsha256.ComputeHash(encoding.GetBytes(message));

            Console.WriteLine("Result: {0}", ByteToString(hmacsha256.Hash));
        }
    }
    static string ByteToString(byte[] buff)
    {
        string sbinary = "";
        for (int i = 0; i < buff.Length; i++)
            sbinary += buff[i].ToString("X2"); /* hex format */
        return sbinary;
    }
}
```

## WebHook Sample Payload Body

| Event                       | Sample Payload                                                        |
| --------------------------- | --------------------------------------------------------------------- |
| Login                       | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#login0)
                        |
| Register                    | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#register1)
                     |
| UpdateProfile               | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#updateprofile2)
                |
| ResetPassword               | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#resetpassword3)
                |
| ChangePassword              | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#changepassword4)
               |
| emailVerification           | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#emailverification5)
            |
| AddEmail                    | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#addemail6)
                     |
| RemoveEmail                 | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#removeemail7)
                  |
| BlockAccount                | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#blockaccount8)
                 |
| DeleteAccount               | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#deleteaccount9)
                |
| SetUsername                 | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#setusername10)
                 |
| AssignRoles                 | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#assignroles11)
                 |
| UnassignRoles               | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#unassignroles12)
               |
| SetPassword                 | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#setpassword13)
                 |
| LinkAccount                 | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#linkaccount14)
                 |
| UnlinkAccount               | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#unlinkaccount15)
               |
| UpdatePhoneId               | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#updatephoneId16)
               |
| VerifyPhoneNumber           | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#verifyphonenumber17)
           |
| UpdateCustomobject          | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#updatecustomobject18)
          |
| DeleteCustomObject          | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#deletevustomobject19)
          |
| CreateCustomObject          | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#createcustomobject20)
          |
| InvalidateEmailVerification | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#invalidateemailverification21)
 |
| InvalidatePhoneVerification | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#invalidatephoneverification22)
 |
| RemovePhoneId               | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#removephoneid23)
               |
| RemoveRoleContext           | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#removerolecontext24)
           |
| SetPin                      | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#setpin25)
           |
| ResetPin                    | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#resetpin26)
           |
| ChangePin                   | [Link](https://www.loginradius.com/docs/integrations/webhooks/samples/#changepin27)
           |

## Configure WebHook

WebHook can be configured on LoginRadius in Admin Console or by leveraging LoginRadius [WebHook](https://www.loginradius.com/docs/api/v2/integrations/webhooks/overview/#webhookapis3) APIs.

Below are the steps to add a WebHook event to LoginRadius via the **Admin Console**.

**Step 1:** Navigate to [Integrations > Data Sync > Webhooks](https://adminconsole.loginradius.com/integration/data-sync/web-hooks) in the Admin Console. The following screen will appear.

![Webhooks Section](https://apidocs.lrcontent.com/images/Webhook---Step-1_1046118676474de365cb6e4.80431293.png "Webhooks Section")

**Step 2:**  Click **Add** button and assign a **Webhook Name** of your choice, select an event from those available under the **Webhook Event** dropdown, enter a **Subscribe URL** where payload data will be sent when the webhook event is triggered, select an API **Secret Name** and click **Add**.

> **Note:** LoginRadius facilitates selecting either the primary API secret (select **None**) or any of the secondary API secret (having the access to Webhook API) for generating the hashed webhook signature. You can use this LoginRadius API secret to validate the webhook source of data for the corresponding webhook.

![Fill the form](https://apidocs.lrcontent.com/images/Webhook---Step-2_16226477126474de98d138b7.20991839.png "Fill the form")

**Step 3:** Now, the successfully configured webhook will be displayed under the **Configured Requests** table.

![Configured Requests Table](https://apidocs.lrcontent.com/images/Webhook---Step-3_4032265916474dec94175b2.10438273.png "Configured Requests Table")

To **add** or **edit** the **Custom Objects** or select any different **API secret** within the Webhook, click the **dropdown button** from the **Action** column for the corresponding **Event** in the **Configured Requests** table, and select **Edit**.

> **Note:** Custom Objects can be updated through webhooks that are configured with an SQS URL. This URL is generated automatically by the backend system once you configured the integration and can be found in the webhook section. 

![Edit Webhook](https://apidocs.lrcontent.com/images/Webhook---Step-4_8318363126474dfc14e35f0.47274237.png "Edit Webhook")

Here, you can add the **Custom Objects** directly in the Webhook form or select any other API secret and click **Update** to save the changes.

![Edit Webhook Form](https://apidocs.lrcontent.com/images/Webhook---Step-5_8833417816474e017af7866.22051478.png "Edit Webhook Form")

To **remove** any Webhook event from LoginRadius, click the corresponding **dropdown button** from the **Action** column in the **Configured Requests** table and select **Unsubscribe**.

![Unsubscribe Webhook](https://apidocs.lrcontent.com/images/Webhook---Step-6_6105856666474e06506ae19.01889045.png "Unsubscribe Webhook")

> **Note:** For more details on the APIs associated with WebHooks, its handling, payload information, and the WebHook APIs, refer to the [Webhook API Overview](https://www.loginradius.com/docs/api/v2/integrations/webhooks/overview/) document.