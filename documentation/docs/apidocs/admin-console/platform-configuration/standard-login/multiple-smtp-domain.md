# Multiple SMTP Domain

This document explains you about a new feature **Multiple SMTP Domain**. In this document, you will get to know about **what a Multiple SMTP Domain feature is** and **what its business usecases are**.
  
## What is Multiple SMTP Domain feature?

Once the email provider is set as the global configuration under [Platform Configuration > Communication Configuration > Email Configuration](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/email-configuration), the emails are sent with the default values for sender's **name** and **email** from the global configuration.

The **Multiple SMTP Domain** feature allows you to configure and customize the sender's **name** and **email** for **individual email templates** according to your business requirement instead of utilizing the global values from the configured SMTP in all the email templates.

Let’s have a look at one example email template under Admin Console, if this feature is **NOT enabled.**

![Template](https://apidocs.lrcontent.com/images/image1_217006333360aec0ff1.97269487.png "Template")
  
When this feature is **enabled** on your site, the same section will look like below with the capabliies to edit/change the sender’s name and email address.

![Template](https://apidocs.lrcontent.com/images/image2_14741633336533f55c7.82135162.png "Template")

When you click on the **Edit** button, below screen will appear to you with the mentioned fields.

![From Name](https://apidocs.lrcontent.com/images/image4_196486333379aa3c6a6.00207371.png "From Name")

You can configure the sender’s email with multiple domains for various email templates if your SMTP provider supports the sender’s email with different domains in a single account, e.g., SendGrid supports configuring Multiple Domains in a single account.

### Enable Multiple SMTP Domain feature in the Admin Console

To enable this feature for your application, you will need to raise a [Support ticket](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) to LoginRadius support team. Once this feature is enabled on your site, only then, the **FROM NAME** and **FROM EMAIL** fields will be displayed for all email templates available in your account.

![Email](https://apidocs.lrcontent.com/images/image3_77536333384b3ee535.12090377.png "Email")

### Configure Email Provider (Global Configuration)

There is no need to follow this step if the SMTP provider is already set up in Email Configuration. If the SMTP provider is not already set up, then you will need to configure the SMTP provider first. To configure the SMTP provider you can refer to this [document](https://www.loginradius.com/docs/authentication/concepts/email-communications/#partsmtpconfiguration1).

### Customize the Email Template

If the **Mutiple SMTP Domain** feature is enabled on your site and you have configured the SMTP provider, you can customize the **FROM NAME** and **FROM EMAIL** for any of the email templates available in your account (in addition to the existing email template level customizations). For customizing the content for the email templates, you can refer to this [document](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/standard-login/email-templates/).

## Usecases for Multiple SMTP Domain

The following are the various business rules applicable to the **Multiple SMTP Domain** feature to customize **FROM NAME (sender’s name)** and **FROM EMAIL (sender’s email)** fields:

1.  **No SMTP Provider is Configured:** If no SMTP provider is configured for your account, LoginRadius Default Values will be used in **FROM NAME** and **FROM EMAIL** irrespective of whether the **Multiple SMTP Domain** feature is enabled or not for your site.
    
2.  **SMTP Provider is Configured:** If the SMTP provider is configured and no local configuration is set at the email template level, the global values will be utilized in the respective email template irrespective of whether the **Multiple SMTP Domain** feature is enabled or not for your site.
    
3.  **SMTP Provider is Configured and Local Configuration is Set:** If the **Multiple SMTP Domain** feature is enabled and the local configuration is set for an email template, then there are certain use case that are as below:  
      
	-  **Case 1:** Locally configured **FROM NAME** and **FROM EMAIL** will be utilized if the **domain** of **FROM EMAIL** matches the **domain** set in the **Global SMTP** Provider.
	    
	-  **Case 2:** Globally configured **FROM NAME** and **FROM EMAIL** will be utilized if the **domain** of **FROM EMAIL** does not match the **domain** set in the **Global SMTP** Provider.
	    
	-  **Case 3:** LoginRadius can also support the use case where you need to use emails of multiple domains for various email templates in your accounts **(for example - @abc.com domain in FROM EMAIL for Email Template 1 and @xyz.com domain in FROM EMAIL for Email Template 2)**. For this you will need to use the **Multiple Domain** features provided by **SendGrid** or other **SMTP Providers** which support multiple domains.