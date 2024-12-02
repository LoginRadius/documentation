# AWS SMTP Configuration

##AWS Management Console Configuration

&nbsp;1. Within the [AWS Management Console](https://aws.amazon.com/), select **Simple Email Service** from the **Services** dropdown menu.

![enter image description here](https://apidocs.lrcontent.com/images/aws_ses_273615b98533d74d371.24250267.png "enter image title here")

&nbsp;2. In the **SMTP Settings** page, click **Create My SMTP Credentials**.

![enter image description here](https://apidocs.lrcontent.com/images/aws_config_1_166555b9853e1361fc7.75576108.png "enter image title here")

&nbsp;3. Create an IAM user for SMTP authentication. Enter a custom name or use the default IAM User Name.

![enter image description here](https://apidocs.lrcontent.com/images/aws_config_2_238565b985471b0b105.89624928.png "enter image title here")

&nbsp;4. Click **Show User SMTP Security Credentials** to display your SMTP Username and SMTP Password.

![enter image description here](https://apidocs.lrcontent.com/images/aws_config_3_36815b985600011cf5.01826225.png "enter image title here")

&nbsp;5. Verify the email address to be used for sending emails in the **Email Addresses** page. Click **Verify a New Email Address** to begin the verification process. To verify all email addresses from a domain for sending emails, follow the instructions [here](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domain-procedure.html).

![enter image description here](https://apidocs.lrcontent.com/images/aws_verify_email_261385b9bf4c3645034.55699641.png "enter image title here")

##LoginRadius Admin Console Configuration

Under **Admin Console ➔ Platform Configuration ➔ Identity Workflow  ➔ Communication Configuration  ➔ Email Configuration** select the AWS SES SMTP provider for your region. The SMTP Host and Port fields are automatically populated, and SSL is enabled by default. Fill in the remaining required fields. Use a verified email address from Step 5 as the **From Email**.

Click **Verify & Save** to send a test email using the new SMTP configuration. If successful, you will receive an email confirming your SMTP configuration is valid:

![enter image description here](https://apidocs.lrcontent.com/images/aws_test_email_293275b9bf8ce178f34.06060153.png "enter image title here")

> **Note:** By default, Amazon places all new SES accounts in a sandbox environment with restricted email sending permissions. In order to send emails while in the sandbox environment, recipient email addresses also need to be verified in the Email Addresses page of the SES console (see Step 5). In order to request to move out of the Amazon SES sandbox to send to unverified email addresses, follow the instructions [here](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html) for contacting Amazon Support.
