# Account Linking

![Account Linking Graph](https://apidocs.lrcontent.com/images/Account-Linking-V01-04-02_162125d1be95c1fded0.97273921.png "Account Linking Graph")

## What is Account Linking?

Account Linking allows customers to connect all of the log in providers for a user into one centralized account.

 ## How Does it Work?

A user can register and log in with an email and password the first time, and subsequently, log in with a social provider the second time. Regardless of the method and profile this user chooses to log in with, the chosen profiles will be linked to create a single user view.

There are three types of account linking:

- Automatic Account Linking: User profiles are automatically linked to one account. If the user has logged in more than once using different social providers or a combination of social providers and a traditional username/email and password, verified email addresses will be matched and linked to automatically create a single account for the user.

  **For example:** If there is an existing account with the email address attached to the social provider, LoginRadius creates a social profile ( provider = facebook and unique Profile ID field) links to the existing email profile ( provider = email and unique Profile ID field) under the same account. Both profiles will have the same Account ID (UID) value.

- User-initiated Linking: Accounts are manually linked. When the user updates their email information in their social account and then logs in to a site with that social ID, even if they had logged in with that account before they updated their email information, LoginRadius will detect the change and link it to another account with a matching validated email.

- Manual Linking via API: Customers are also able to manually link user accounts through API.

 ## Why is it Useful?

This streamlines the log in process and eliminates the confusion of having separate accounts for the same user to ensures that they have the same personalized user experience no matter how they choose to log in to their account.

#### Example Use Case

For instance, a user creates an account with their email address and password. However, the next time they log in they decide to log in with a social provider, such as Facebook. If the email address in the user's Facebook profile matches the email address that they had initially created an account with, the system will automatically link the 2 profiles (email and Facebook) and create a centralized account. Therefore, no matter which method the user decides to log in with, they will always be able to access the same account, view the same account history, and have an uninterrupted user experience on your web or mobile properties.
