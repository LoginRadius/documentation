# Email Configuration

This document goes over the steps that you will need to take to configure SMTP provider that is used to send email communications.

##What is SMTP?

SMTP stands for "Simple Mail Transfer Protocol" it is the internet standard for sending emails. to comply with this standard, businesses use what's called an "SMTP Server" to send out emails. The SMTP Server is also often used to identify you and your company which is often critical for email communication. LoginRadius allows you to use your company's SMTP Server to send out emails which will ensure that those who receive your emails know that it truly came to your company and not LoginRadius.

## Configuring your SMTP server
Setting up the SMTP server in LoginRadius allows the system to send out all of the email correspondences directly through your SMTP provider. This allows you to get deliverability stats and analytics and optimize your email messaging. In order to configure these emails to go through your SMTP you can follow the below steps:
1. Navigate to your LoginRadius [Admin Console ➔ Platform Configuration ➔ Identity Workflow  ➔ Communication Configuration](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/email-configuration)

2. On the first tab of this page, you can configure the SMTP settings. Configure the following fields:
    - SMTP PROVIDER- Select a pre-configured provider or other for a custom provider.
    - FROM NAME- Input the name of the Sender
    - FROM EMAIL- Input the email of the Sender
    - SMTP USERNAME- Input the SMTP Username
    - SMTP PASSWORD- Input the password for the SMTP Username
    - SMTP HOST- Input the SMTP HOST
    - SMTP PORT- Input the port of the SMTP Host
    - ENABLE SSL- Toggle SSL on or off

3. Click on the Save button to save your SMTP configurations.
