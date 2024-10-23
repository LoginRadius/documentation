# Customer Management

**Customer Management** is the process of adding new customers and managing customer profiles. Within the customer profile management, you can perform various actions like trigger emails, reset account password, update profile fields, and more.

This guide will take you through the following aspects of Customer Management available in the LoginRadius Identity Platform:

[**Search and Manage Customer:**](#partsearchandmanagecustomers0) You can search and manage your customers based on the provided search parameters.

[**Blocked Customer:**](#partblockedcustomers1) You can search and manage your blocked customers based on the provided search parameters.

[**Add A New Customer:**](#partaddanewcustomer2) You can register or add a new customer to your account by entering the required customer details.

## Part 1 - Search and Manage Customers

Search Customers screen displays the list of the customers registered in your account. You can filter or search the customers based on the search parameters available in the dropdown. The fields mainly used as search parameters are Name, Email Address, UID, ID, PhoneID.

> **Note:** You can update these search parameters or fields by adding the custom fields in the Standard Login [Data Schema](/authentication/quick-start/standard-login/) section.

The following explains how you can search and manage the customers registered in your application:

**Step 1:** Log in to your  [**Admin Console**](https://adminconsole.loginradius.com/)  account and navigate to [**Admin Console**](https://adminconsole.loginradius.com/) .

The following screen will appear with the list of the customers registered in your account:

![search and manage](https:/https://apidocs.lrcontent.com/images/cm1_65805e84dafcd8bea0.54078017.png "Search and manage")

**Step 2:** Select the domain and field name from the dropdowns and click the search button, as highlighted in the following screen:

![select](https:/https://apidocs.lrcontent.com/images/cm2_74445e84db406f70c0.32989604.png "Select")

Search results are filtered based on the following:

- **Domain:** This dropdown lists all the domains from where the customers are registered to your application.

- **Fields:** This dropdown lists the following fields along with the **custom fields** available in your Standard Login Data Schema section.
- Name
- Email
- UID
- ID
- PhoneID

You need to enter the customer details in the textbox based on the fields selected from above.

> **Note:** You can update the search parameters(fields) by adding the custom fields in the Standard Login [Data Schema](/authentication/quick-start/standard-login/) section.

Step 3: Click the **Manage** button to manage the customer profile as highlighted in the following screen:

![Manage](https:/https://apidocs.lrcontent.com/images/cm3_25355e84dc42e551a8.31582813.png "Manage")

**Manage** action provides a comprehensive range of functions and information for each customer. Clicking the Manage button displays the following pop-up:

![Manage Button](https:/https://apidocs.lrcontent.com/images/4--Manage-Button_4806630253d8ad2082.72767805.png "Manage Button")

You can perform the following functions as highlighted in the **right** section of the above screen:

- Update Verification Status
- Reset Password
- Send Reset Password Mail
- Add Secondary Email
- Logout Customer
- Block Customer
- Delete Customer

You can view the following customer information, as highlighted in the **left** section of the above screen:

- Account Info
- Security
- Roles
- Activity
- Profile Info
- Social Info
- Custom Fields
- Custom Objects
- Consent Info

> **Note:** In addition to the Search and Manage customers features available in the LoginRadius Admin Console, you can use the following Account APIs to get the customer details:
>
> - [Account Identities by Email](https://api/v2/customer-identity-api/account/account-identities-by-email/)
> - [Account Impersonation API](https://api/v2/customer-identity-api/account/account-impersonation-api/)
> - [Account Password](https://api/v2/customer-identity-api/account/account-password/)
> - [Account Profiles by Email](https://api/v2/customer-identity-api/account/account-profiles-by-email/)
> - [Account Profiles by User Name](https://api/v2/customer-identity-api/account/account-profiles-by-user-name)
> - [Account Profiles by Phone ID](https://api/v2/customer-identity-api/account/account-profiles-by-phone-id/)
> - [Account Profiles by UID](https://api/v2/customer-identity-api/account/account-profiles-by-uid/)

## Part 2 - Blocked Customers

Blocked Customers screen displays the list of blocked customers from logging into your application.

The following explains how you can search and manage the blocked customers in your account:

**Step 1:** Navigate to  [**Admin Console**](https://adminconsole.loginradius.com/) , and the following screen will appear with the list of your blocked customers:

![Block](https:/https://apidocs.lrcontent.com/images/cm5_204645e84df5265dcd5.61333011.png "Block")

**Step 2:** Search for the blocked customer, the following are the available search parameters:

- **Domain:** This dropdown lists the domains from where the customers are registered to your application.
- **Fields:** You can also search the customers using the Email address or UID fields in the provided textbox.

The following screen displays the search result displayed based on the applied search parameters:

![Search result](https:/https://apidocs.lrcontent.com/images/cm6_311965e84dfeb038bd2.53807747.png "Search result")

**Step 3:** To manage the blocked customer, click the **Manage** button from the above screen and click the **Unblock Customer** button from the right section of the screen, as highlighted in the following screen:

![Unblock Customer](https:/https://apidocs.lrcontent.com/images/5--Unblock-Customer_2254963025415efc658.49875367.png "Unblock Customer")

> **Notes:**

> - You block the customers from LoginRadius Admin Console, or they get blocked on reaching the maximum wrong login attempts if configured in the [Brute Force Lockout](/authentication/concepts/customer-security/) feature.

> - You can also unblock customers by using [Auth Unlock Account by Access Token](https://api/v2/customer-identity-api/authentication/auth-unlock-account-by-access-token/) API.

## Part 3 - Add a New Customer

You can **manually** add customers through the LoginRadius Identity Platform. This is a quick and useful way to help your customers requiring assistance with the registration process.

The following explains how you can add a new customer to your application:

**Step 1:** Navigate to  [**Admin Console**](https://adminconsole.loginradius.com/) , and the following screen will appear:

![Add customer](https:/https://apidocs.lrcontent.com/images/cm9_325725e84e3065f1276.10421768.png "Add customer")

> **Note:** The registration fields displayed in the above screen are based on registration form  [**Admin Console**](https://adminconsole.loginradius.com/) . For more details on registration field configuration, refer to [this document](/authentication/quick-start/standard-login/).

**Step 2:** Enter the required details and click the **Add Customer** button, as highlighted in the following screen:

![Button](https:/https://apidocs.lrcontent.com/images/cm10_177665e84e4b9624fd1.69431474.png "Button")

> **Note:** You can also add a new customer by using [Auth User Registration by Email API](https://api/v2/customer-identity-api/authentication/auth-user-registration-by-email/), which creates a customer in the database and also sends a verification email to the customer.

## Part 4 - Next Steps

The following is the list of features you might want to add-on to the above implementation:

[Customer Data Export](/authentication/concepts/customer-data-export/)

[Customer Segmentation](/authentication/concepts/customer-segmentation/)

[Customer Data Query](/authentication/concepts/customer-data-query/)

[Progressive Profiling](/authentication/concepts/progressive-profiling/)
