# Email Configuration

This document will explain to you the SMTP that is used to send email communications and how to configure them.

## What is SMTP?

SMTP stands for **"Simple Mail Transfer Protocol".** It is the internet standard for sending emails. To comply with this standard, businesses use what's called an "SMTP Server" to send out emails. The SMTP Server is also often used to identify you and your company which is often critical for email communication. LoginRadius allows you to use your company's SMTP Server to send out emails, ensuring that those who receive your emails know they came to your company and not LoginRadius.

For more information, please visit [**here**](https://www.loginradius.com/docs/authentication/concepts/email-communications/).


## Configuring your SMTP server

Setting up the SMTP server in LoginRadius allows the system to send out all of the email correspondence directly through your SMTP provider. This allows you to get deliverability stats and analytics and optimize your email messaging. In order to configure these emails to go through your SMTP, please refer to this [**document**](https://www.loginradius.com/docs/authentication/concepts/email-communications/#partsmtpconfiguration1).


## Global Email Settings

We provide some standard configuration settings that you can use to customize some of the behaviors for sending emails. These settings can be used to limit the number of email requests in a predefined time for certain events, and you can also manage the validity of email tokens (if to used in an email template). For more information regarding this Global Email Setting and the steps to configure it, please refer [**here**](https://www.loginradius.com/docs/authentication/concepts/email-communications/#partglobalemailsettings4).


For more detailed information about SMTP Providers supported by LoginRadius, please refer to this [**document**](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/communication-configuration/email/providers/sendgrid/).
