## General CMS Integrations


This document will help you understand the general flow used for Social Login, Social Registration, Traditional Login, Traditional Registration and Forgot Password features when using a LoginRadius CMS Turn-key Plugin.

The detail around the LoginRadius flows included in CMS integration is explained below.


## CMS Social Login/Registration

[Social Login](https://www.loginradius.com/authentication/quick-start/social-login/) is a quick and convenient approach for registration and login, as it allows your customers to skip filling traditional registration forms. It also increases customer conversion rates, by enabling them to sign-in to your website with their existing social media accounts like Facebook, Twitter, Google+ and more. Below is the flow diagram which explains the process of Social Login.

![enter image description here](https://apidocs.lrcontent.com/images/CMS-Social-Login-Flowchart-V2---Page-1-1_248159518d87d9ba44.59810710.png "")


**Note:** Implementation on some content management systems may vary.

The following steps explain the above flowchart:
- The customer starts a Social Login by clicking on a social provider and authenticate by valid social provider username and password.

- The customer’s data is retrieved from the social provider and then we check if the profile contained email or not. If not, then we can prompt the user for their email address (if set in [**LoginRadius Admin Console**](https://adminconsole.loginradius.com/)) and after successful submission, the customer will receive a verification email.

- If the customer profile already exists, It updates the data of the customer and if it does not exist, a new customer profile will be created and the customer will be logged in.



## CMS Traditional Login


Traditional Login is also known as [Standard Login](https://www.loginradius.com/authentication/quick-start/standard-login/), which is a fundamental component of LoginRadius. This flow allows you to provide your customers with a seamless authentication flow leveraging a unique ID (Email, Username, and PhoneID) and password. Below is the flow diagram which explains the process of Traditional Login.

![enter image description here](https://apidocs.lrcontent.com/images/-CMS-Traditional-Login-Flowchart-V2---Page-1_998159518d18043ba7.09911532.png "")

The following steps explain the above flowchart:
- The customer initiates Login by their valid username/email and password combination.
- The customer gets logged in If it exists under CMS and LoginRadius database.
- If the customer does not exist it shows a valid error message.



## CMS Traditional Registration

Traditional Registration allows you to provide your customers with a registration form so that they can fill the details about them and get registered on your web/mobile application. Once this is done, they can use the Tradition Login feature. Below is the flow diagram which explains the process of Traditional registration.


![enter image description here](https://apidocs.lrcontent.com/images/CMS-Traditional-Registration-Login-Flowchart-V2---Page-1_230565951bb53988b63.68914597.png "")

The following steps explain the above flowchart:
- The customers register themselves by entering all the required fields set in the LoginRadius Admin Console. They will be prompted with a registration form which they should fill to get registered.
- If the customer details are valid, LoginRadius registers that customer under the CMS and LoginRadius database. 



## CMS Forgot Password

The forgot password functionality allows a customer to retrieve their lost password. Below is the flow diagram which explains the process of the forgot password.


![enter image description here](https://apidocs.lrcontent.com/images/CMS-Forgot-Password-Login-Flowchart-V2---Page-1_280385951bbce34b102.30700955.png "")


The following steps explain the above flowchart:
- After clicking on the forgot password, a popup with the Email address field will appear.
- After submitting the valid email address, the customer will receive a password reset link in the email with a reset token.
- The password reset link prompts the customer for the **new password** and **confirm password** fields and the customer can reset their password by submitting the valid password combination.

## Account Syncing process between CMS and LoginRadius

Below is the flow diagram which explains the process of Syncing the accounts between the CMS and LoginRadius.


![CMS FLOW](https://apidocs.lrcontent.com/images/CMS-flow-drawio_3065561ae6d9580c124.29150000.png "CMS flow")

The following steps explain the above flowchart:
- A user creates the LoginRadius account and then initiates Login by their valid username/email and password combination.
- In the next step the Module looks for the user based on his UID in the CMS database.
- If the UID exists then update the user information in the CMS account and the user gets logged in to the CMS account.
- But if UID does not exist then Module will search the user based on the email in the CMS account.
- If Email exists the customer gets logged in but if email does not exist then it will create the user in the CMS database.
- And the customer gets logged in the CMS account.
