# SMTP Overview
==============
This section covers the basics of SMTP, what it does and how LoginRadius utilizes your SMTP server.



1. [What is SMTP](#what-is-smtp)
2. [How LoginRadius utilizes your SMTP server](#how-loginradius-utilizes-your-smtp-server)
3. [How LoginRadius handles SMTP security](#how-loginradius-handles-smtp-security)





## What is SMTP?


SMTP stands for "Simple Mail Transfer Protocol" it is the internet standard for sending emails. to comply with this standard, businesses use what's called an "SMTP server" to send out emails.

The SMTP server is also often used to identify you and your company which is critical for email communication. For this reason, LoginRadius allows you to use your company's SMTP server to send out emails which will ensure that those who receive your emails know that it truly came from your company and not from LoginRadius.



## How LoginRadius utilizes your SMTP server


LoginRadius requires an SMTP server to send out emails to your users as part of the [Email Workflow](https://www.loginradius.com/docs/platform-features-overview/registration-services/email-workflow) when they need to verify their email, when they do a password reset or simply to send them out a Welcome email once they register. As part of the workflow, LoginRadius simply pushes the emails that need to be send to your users through the SMTP Server and your SMTP server handles the sending.




If you would like to learn more about setting up your SMTP server please see our documentation on [Customizing Email Templates and Configuring Your SMTP](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/standard-login/email-templates).


## How LoginRadius handles SMTP security

LoginRadius takes all of the best practices into consideration when connecting to your SMTP server to ensure that it is done securely. We have following security implementations and supported workflows:

1. Connection over TLS: You can utilize TLS for end-to-end encryption in transit.

2. Static IPs: LoginRadius provides [Static IPs](https://www.loginradius.com/docs/development/configuration/ip-addresses-list) that can be used for whitelisting on your SMTP server to ensure that it is only LoginRadius accessing your server.

3. Encrypted credentials for your SMTP connection: All of your SMTP credentials are securely Encrypted with AES 256 CBC.

