# SendGrid SMTP Configuration

LoginRadius offers fully-managed SendGrid services to handle your SendGrid account setup and administration. If you want to learn more about this option contact the [LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

> **Note:** SendGrid announced that all accounts must have two-factor authorization(2FA) before 2021. For more information refer to the [article](https://sendgrid.com/docs/for-developers/sending-email/upgrade-your-authentication-method-to-api-keys/).

- If an account has 2FA, sending emails must be authenticated using API keys.
- Using a SendGrid account's username and password for authentication no longer works with 2FA.

## SendGrid Dashboard Configuration

1. Within the [SendGrid Admin-console](https://app.sendgrid.com/), click on your account's dropdown menu in the top-left corner and select the **Setup Guide**. Now expand the **Send your first email** section and click **Start** under **Integrate using our Web API or SMTP relay**. Kindly refer to the following screenshot.

    ![Integrate](https://apidocs.lrcontent.com/images/Image-1-min_163754353565794906cb2dc0.28257170.png "Integrate")


2. Choose **SMTP Relay**.

    ![Choose Setup Method](https://apidocs.lrcontent.com/images/Image-2-min_41785142465794941cda8f5.85133625.png "Choose Setup Method")

3. Under **Create an API key**, enter an API Key Name and and click **Create Key**. It will create an API Key as following

    ![SMTP Relay](https://apidocs.lrcontent.com/images/Image-3-min_92917678665794972e5e128.46912607.png "SMTP Relay")

## LoginRadius Admin Console Configuration

- Navigate to [Admin Console > Platform Configuration > Identity Workflow > Communication Configuration > Email Configuration](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/email-configuration)

- Select **SendGrid** from the list of SMTP providers. The SMTP Host and Port fields will be automatically populated, and SSL is enabled by default.
- Enter credentials as following
    - From Name: "Sender's from name"

    - From Email Address: "Sender's email ID"

    - SMTP User Name: apikey

    - SMTP Password: Password(generated API Key in previous Step)

- Click **Verify** to send a test email using the new SMTP configuration, It will open the following dialog box.

    ![Enter Email Details](https://apidocs.lrcontent.com/images/Image-4-min_94415133465794a56c4db02.89949352.png "Enter Email Details")

-  Enter the **Email** where you want to receive the test email and click **Send**. If successful, you will receive an email confirming your SMTP configuration is valid as follows. 

    ![Test Email](https://apidocs.lrcontent.com/images/Image-5-min_31424020665794aa0e607f1.92278478.png "Test Email")

- Click on **Save** to save the configurations.
