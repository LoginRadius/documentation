# Salesforce Marketing Cloud

As part of the customer's journey, transactional emails need to be sent based on their activity. The LoginRadius Salesforce Marketing Cloud integration allows you to send these transactional emails via your Email Studio configurations.

Note: To enable this integration within LoginRadius please contact [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

## LoginRadius Transactional Email List

As part of our identity workflows, transactional emails need to be sent based on the customer's activity. Please see below for a list of transactional emails that may be sent by LoginRadius.

1. Verification Email
2. Forgot Password Email
3. Welcome Email
4. Delete Account Email
5. Smart Login Email
6. Add Email
7. Password Reset Confirmation Email
8. One Touch Login
9. Passwordless Login
10. Suspicious Country Email
11. Suspicious Browser Email
12. Suspicious City Email
13. Suspicious Ip Email
14. Risk Identified Admin Email


## Configuration in Salesforce Marketing Cloud (SFMC) Email Studio

To configure the transactional emails, there are 4 things to set up in SFMC:

1. Triggered Send Data Extension
2. Email Template
3. Email
4. Triggered Send Definition

### Triggered Send Data Extension
The Triggered Send Data Extension is used to store the email content variables, which are sent by the REST API (through LoginRadius), and this data can be used to make the email content dynamic. For ex. If the email content has the FirstName and LastName placeholders, when the email is triggered, the FirstName and LastName placeholders will be replaced with the user’s actual first name and last name.

Triggered Send Data Extension stores the variables sent by the REST API, and those variables are used to change the content placeholders.

1. In Marketing Cloud, navigate to Email Studio.
2. Under Subscribers, click Data Extensions | Create.
3. Select Standard Data Extension (Default) | OK.
4. Select Create from Template.
5. Select TriggeredSendDataExtension | OK.
6. Rename the new data extension (optional) | Next.
7. Select Data Retention Policies or accept the default as Off | Next.
8. Add the following fields (SubscriberKey and EmailAddress is already there, add following fields to) and save these fields:

| Name | Data Type | Length | Primary Key (unchecked) | Nullable (checked) | Default Value |
| ---------| :---------:| :---------:| :---------:| :---------:| :---------:|
| GUID | Text | 100	| 𐄂 | ☑ | |
| Url | Text | 254 | 𐄂 | ☑ | |  
| uid | Text | 100 | 𐄂 | ☑|  | 
| Link | Text | 254 | 𐄂 | ☑ | |
| Otp | Text | 50 | 𐄂 | ☑ | |  
| Email | Text | 100 | 𐄂 | ☑ | | 
| FirstName | Text | 50 | 𐄂 | ☑ ||  
| LastName | Text | 50 | 𐄂 | ☑ ||  
| UserName | Text | 50 | 𐄂 | ☑|  | 
| Name | Text | 50 | 𐄂 | ☑ ||  
| Uid | Text | 100 | 𐄂 | ☑ | | 
| Address1 | Text | 254 | 𐄂 | ☑|  | 
| Address2 | Text | 254 | 𐄂 | ☑| | 
| City | Text | 50 | 𐄂 | ☑ ||  
| Country | Text | 50 | 𐄂 | ☑| | 
| PostalCode | Text | 50 | 𐄂 | ☑ ||  
| Region | Text | 50 | 𐄂 | ☑| | 
| State | Text | 50 | 𐄂 | ☑ | | 
| IpAddress | Text | 50 | 𐄂 | ☑| | 
| UserAgent | Text | 254 | 𐄂 | ☑| | 
| redirecturl | Text | 254 | 𐄂 | ☑ ||  
| FPass | Text | 50 | 𐄂 | ☑ | | 
| FProv | Text | 50 | 𐄂 | ☑ | | 
| FUName | Text | 50 | 𐄂 | ☑ ||  
| AppName | Text | 50 | 𐄂 | ☑ | | 
| CoreDomain | Text | 254 | 𐄂 | ☑ ||  
| Providers | Text | 100 | 𐄂 | ☑ ||  
| welcomeemailtemplate | Text | 100 | 𐄂 | ☑ ||  
| SuspiciousFactor | Text | 254 | 𐄂 | ☑ | | 
| SuspiciousValue | Text | 254 | 𐄂 | ☑ ||  
| SuspiciousLoginTime | Text | 100 | 𐄂 | ☑ || |


###Create Email Templates
1. In Marketing Cloud, navigate to Email Studio.
2. Click Content  | Create (in the right top bar).
3. Select Template form the dropdown.| Paste your custom HTML or from the Existing Template.
4. Switch to code view.
5. To get the data extension variable , AMP Script will be used. Using AMP script, fetch the variable from the triggered send data extension. For ex. forgotpassword Email template.
  	
 ~~~~
%%[
var @FirstName, @Url, @Vtoken;
SET @FirstName = AttributeValue('FirstName')
SET @Url = AttributeValue('url')
SET @Vtoken = AttributeValue('GUID')
]%%
<p>Hello %%FirstName%%</p>,
<p>#FPassPlease reset your password by clicking on the link.
To Reset your password, please click on the following link and if your browser does not open it, please copy and paste it into your browser address bar.</p>
<p>%%Url%%?vtype=reset&vtoken=%%Vtoken%%</p>
<p>Regards<br />Your Organization name</p>
~~~~

 In the above “forgot password” template example, FirstName, url, and GUID are the Data send extension variables, which are used in the template.
 
6. Click on save.
7. Provide name and description for the template.
8. Save the template.
9. Repeat the steps to create all email templates for the LoginRadius emails listed at [LoginRadius Transactional Email List](#loginradius-transactional-email-list).

### Create Email

1. In Marketing Cloud, navigate to Email Studio.
2. Click Content  | Create (in the right top bar).
3. Select Email form the dropdown.
4. In the Define Property tab, select Template form the Create Email dropdown.
5. From the save tab, select the template which is built in the previous step of the particular email.
6. Click on Select.
7. Now provide Name and Description of that email | Next.
8. In the add content section, Provide the Subject and Preheader | click Next.
9. Save the Email.
10. Repeat the steps to create an Email for every email template.

### Create Triggered Send Definition
1. In Marketing Cloud, navigate to Email Studio.
2. Click Interaction | Triggered Emails.
3. Click on Create.
4. Provide the Name and Description.
5. Leave blank External key or give a custom key.
6. In the Send Classification select “Transactional”.
7. In the Content Section, select the email from the content builder block which is created in the previous step.
8. In the Subscriber management section, click on the Data Extension and select the Data Extension created in the first step from the Triggered Send Data Extension block.
9. Uncheck the “Add subscribers to this list” checkbox.
10. Leave other fields as they are and save the Triggered Email.
11. Form the Triggered Email listing: select the newly created Triggered Email and click on the Start/Restart.
12. This will publish the Triggered Email.
13. Find the External Key from Triggered Email Listing (which is used to send email by the LoginRadius.)
14. Create seperate Triggered Email for every email type. 
15. Provide all the External Keys to the LoginRadius.

### Custom Template Emails
1. For custom template Emails, create Email Template and Email in the content section.
2. Create new Triggered Email for this.
3. Provide LoginRadius with the External Key and TemplateName which is passing in the LoginRadius APIs.

**Note**: For every email, there is a separate Email Template, Email and Triggered Email, and Triggered Send Data Extension which will be shared in the all Triggered Emails.
 
