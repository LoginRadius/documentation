# Email Template Management

This section goes over the available actions for managing/customizing the various email templates available in your account.

Following are the actions to be covered in this document:

- Email Template Management
- Email Template Customization

Follow the below steps to **Manage Email Templates**:

1. Select the template that you would like to manage.
   ![](https://apidocs.lrcontent.com/images/new_92725e77b065009689.61942750.png "Email Template Management")

2. **Email Settings:** At first you will notice an email settings dropdown on which you can configure the below settings.
    ![Additional Email Settings](https://apidocs.lrcontent.com/images/Untitled_4335222264f086c86b60a6.54298961.png "Additional Email Settings")

    - **Request Limit:** Specifies the maximum number of times a customer can request an email.
    - **Request Disabled Period (Minutes):** This option allows you to define the timeframe, measured in minutes, during which the Request for triggering the **OTP** or **vtoken**  will expire after reaching the request limit specified in the above settings.
    - **Token Validity Limit (Minutes):** The option allows you to set a time limit, in minutes, for the validity of the **OTP** or **vtoken** generated.

> **Note:** For some of the email templates, you will notice some additional settings named **Token Type**. This setting allows you to choose the type of token that will be generated. There are two available options:
>
> - **A.** **Magic Link:** Selecting this option will generate a vtoken that can be used for related actions.
>**For Example:** `#Url#?vtype=emailverification&vtoken=#GUID#`
>
> - **B.** **OTP (One Time Password):** Selecting this option will generate a time-limited One-Time Password (OTP) that can be used for password-related actions.
>**For Example:** #OTP#

3. Once selected you can: Create Templates with "Add Template", Modify existing templates with "Edit Template", or test a given template with "Send Test Email".
   ![enter image description here](https://apidocs.lrcontent.com/images/6_45415e76c5d0177992.45987817.png)

4. When adding or editing a template you can configure the following:
   **TEMPLATE ID :** The Unique template ID that is used to identify the template in our javascript and APIs
   **SUBJECT :** The subject line of the template
   **FROM NAME :** The Sender's name applicable to the Template
   **FROM EMAIL :** The Sender's email applicable to the Template

   > **Note:** If you want to customize the sender's name and email instead of utilizing the global values from your [configured SMTP](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/email-configuration), you can raise a request to [LoginRadius support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) to enable the **Multiple SMTP Domain** feature for your account. This will enable the **FROM NAME** and **FROM EMAIL** field for every email template available in your account. For more details, refer to [Multiple SMTP Domain](https://www.loginradius.com/docs/api/v2/admin-console/platform-configuration/standard-login/multiple-smtp-domain/) document.

   **HTML BODY :** The HTML body of the Template can be added here. The content/template added here will appear in the email client which supports HTML content in the email. Additional details on customizing the body of the template can be found in the next section.
   **TEXT BODY :** A plain text version of the template can be added here. This template will appear in the email client which supports only plain text emails.
   
   ![Email Template](https://apidocs.lrcontent.com/images/6--Email-Template_206806302592717a508.75464539.png "Email Template")

5. You can add multiple email templates to the same email workflow using the above steps. If you have more than one template, you can also delete any existing templates during editing.

## Email Template Customization

The LoginRadius Email Templates allow you to set any custom CSS and HTML content to be sent with the email templates. You can use some our predefined tags and samples shown below:

Follow the below steps to **Customize Email Templates**:

1. Select the template that you would like to manage.
   ![](https://apidocs.lrcontent.com/images/new_92725e77b065009689.61942750.png "Email Template Management")

2. Update the EMAIL BODY with the HTML content and placeholder tags details below to customize your email template.

###Placeholder Tags

Below are the predefined placeholders that can be included in your email messages.

- **#Name#**: This gets replaced with the user's name as defined in the registration form.
- **#GUID#**: appended to the query parameter "vtoken" in order to identify the user after clicking on the link.
- **#OTP#**: If you have enabled the numeric code feature (where verification token is sent as a numeric code), you can replace #GUID# with the #OTP#.
- **#Url#**: This gets replaced with the URL passed in JavaScript options. For email verification, it is `commonOptions.verificationUrl,` and for reset password it is `commonOptions.resetPasswordUrl.` Check the [User Registration Getting Started](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started) document for more information.
- **#Providers#**: This gets replaced with the social provider name through which the user logged in.
- **#Email#**: Email address from the registered user's profile.
- **#FirstName#**: First name from the registered user's profile.
- **#LastName#**: Last name from the registered user's profile.
- **#Address1#**: Address line one from the registered user's profile.
- **#Address2#**: Address line two from the registered user's profile.
- **#City#**: City from the registered user's profile.
- **#Country#**: Country from the registered user's profile.
- **#CurrentYear#**: It is used to display the current year.
- **#PostalCode#**: Postal code from the registered user's profile.
- **#Region#**: Region from the registered user's profile.
- **#State#**: State from the registered user's profile.
- **#&lt;Name of custom field\>#**: The field value from the registered user's profile for this custom field will be displayed.
- **#IpAddress#**: IP address of the registered user.
- **#UserAgent#**: User agent string of the registered user.
- **#UserName#** : If you enabled username login on your site, you may want to show the name when a user forgets his password.

###Section Tags

For forgot password and forgot provider emails, either the password reset link, social ID provider list, or both can be appended to the email. In the case of only password reset link or only social ID provider list, you will be required to remove the other section. For making these section removable we have two section tags:

```
#FPass <password reset link section> FPass#: Password reset link should be inside of this section tag. This should be removed for sites that only offer Social Registration and Log in.
#FProv <Forgot provider section> FProv#: The #Providers# tag should be inside of this section tag. This should be removed for sites that only offer traditional email registration.
#FUName <email content for user name> FUName# The #UserName# tag should be inside of this section tag. This should be removed for sites that not offer username in registration.

```

###Examples

Below are examples for the Email Verification and Forgot Password emails.

1.Email Verification

```
Hello #Name#, <br/><br/>

To verify your email, please click on following link and if your browser does not open it, please copy and paste it in your browser’s address bar. <br/><br/>

<Site_URL>?vtype=emailverification&vtoken=#GUID# <br/><br/>

Regards<br/>

```

> **Note:**If you pass commonOptions.verificationUrl option through [User Registration Getting Started](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started) than you should use #Url# tag instead of static URL (&lt;Site_URL&gt;)

2.Reset Password

```
Hello #Name#, <br/><br/>

Please reset your password by clicking on the link. <br/>To Reset your password, please click on following link and if your browser does not open it, please copy and paste it in your browser’s address bar. <br/><br/>

#FPass
<Site_URL>?vtype=reset&vtoken=#GUID# <br/><br/>
FPass#

#FProv
You are logging in through the following social provider: #Providers#
FProv#

#FUName
Your username is  #UserName#
FUName#

Regards
```
