#  SMTP Configuration

## Admin Console Configuration

&nbsp;1. Within the [ Admin-console](https://app.mailgun.com/app/Admin-console), select a domain. To verify a new domain in , click **Add New Domain** and follows [instructions](https://help.mailgun.com/hc/en-us/articles/360011565514) for verifying a new domain.

![](https://apidocs.lrcontent.com/images/MG1_7365f7ae6854e2db1.88326710.png)

&nbsp;2. On the Domain page, click **Manage SMTP credentials**.

![](https://apidocs.lrcontent.com/images/MG2_296865f7ae69da2a1c8.70044354.png)

&nbsp;3. Each Login listed on the Manage SMTP Credentials page can be used as an SMTP UserName in the LoginRadius Admin Console.

![](https://apidocs.lrcontent.com/images/MG3_154935f7ae6ae8caf52.21972205.png)

&nbsp;4. Click the Options icon next to a listed Login and select **Edit Password** to set a corresponding password. This password is used as the SMTP Password field in the LoginRadius Admin Console.

![](https://apidocs.lrcontent.com/images/MG4_156405f7ae6bf8dd8d1.01300574.png)

## LoginRadius Admin Console Configuration

Under **Admin Console ➔ Platform Configuration ➔ Identity Workflow  ➔ Communication Configuration  ➔ Email Configuration** select **** from the list of SMTP providers. The SMTP Host and Port fields are automatically populated, and SSL is enabled by default. Fill in the remaining required fields.

Click **Verify & Save** to send a test email using the new SMTP configuration. If successful, you will receive an email confirming your SMTP configuration is valid:

![](https://apidocs.lrcontent.com/images/MG5_254845f7ae6d380dc30.41126869.png)

> **Note:** [Sandbox Domains](https://documentation.com/en/latest/faqs.html#how-do-i-pick-a-domain-name-for-my--account) can be used for testing purposes. Only email addresses authorized in the  admin-console are able to receive emails sent using 's Sandbox Domains. Click **Authorized Recipients** on 's admin-console home page to authorize email addresses for testing purposes.

Please contact the [LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) if further assistance is required.
