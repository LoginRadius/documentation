# Site Configuration Sync

LoginRadius provides an easy-to-use syncing tool to transfer or clone the configuration settings from one LoginRadius environment to the other. In this case, the different LoginRadius instances have been provisioned under separate site licenses. Please see [here](https://www.loginradius.com/docs/api/v2/getting-started/loginradius-site-license-overview/) for further understanding on what a LoginRadius site license entails. The syncing tool can be found in the **Admin Console > Deployment > Configuration Deploy > Configuration Deployment**.

![enter image description here](https://apidocs.lrcontent.com/images/ac13_33705e931f9a143a69.18408583.png "")

This configuration sync tool is used when there are multiple sites or LoginRadius instances. For example a customer with 2 instances - development and production - will be able to implement and test the features in the development environment, and use the sync tool to roll over those same settings to their production environment once they are ready to go live.

This tool also provides various options for you to select the specific configurations that you would like to sync. Below is a list in tabular form for the site configurations that can be transferred from one site to another:


| Column 1 |Column 2 |Column 3 |Column 4 | Column 5 |
|--- |--- |--- |--- |-- |--- |----|
|Advance workflow |Standard login>Registration data |SSO domain grouping |Remember Me |Age Verification |
| Email workflow | Phone login >Otp settings | Brute Force Lockout Settings |Security Questions | Web Apps |
| Email configuration | Password-less login> With email | Password Expiration | SMS Passcode Settings | Hosted |
| Global email settings | Password-less login> with OTP | Password History | Google Authenticator Settings | Self Hosted |
| SMS configuration | Anonymous Login | Password Complexity | API Version | JS Widget Settings |
| Global SMS settings | Smart Login Settings | Token Lifetime | Hashing Algorithm | Configuration Deployment |
|3rd part configurations| Account workflow |Privacy Version |Force Logout | One-touch login settings |
|Standard login>Data schema |Available Integrations |

## Here is what the page looks like:

![Configuration Sync settings selection](https://apidocs.lrcontent.com/images/ac14_195075e93202de5a953.43178419.png "Configuration Sync settings selection")

> **Note:** When cloning the current **integration** configuration, a pop will appear and ask for the confirmation. So you need to click on the **PROCEED** button to complete the integration transfer.

   ![Confirmation pop-up](https://apidocs.lrcontent.com/images/Configuration-De_23418613a85c56cddf4.80379240.png "Confirmation pop-up ")

Here is a granular breakdown of what each of these configuration options encompasses and where you can find it in the Admin Console:

## Basic Configuration

-   Platform Security > Account Protection > Session Management
    

-   Remember Me
    

-   Platform Security > Account Protection > Auth Security
    

-   Access Restrictions
    

-   Platform Security> Account Protection > Password Policy
    

-   Password History
    

-   Platform Security > Account Protection > Session Management
    

-   Token Lifetime
    

## Email Workflow

All of the configurations can be found in All of the configurations can be found in **Platform Configuration>Identity Workflow>Verification Workflow.**

The following settings can be transferred:

-   Email Flow
    
-   Email SMTP Configuration
    
-   Email Templates
    
-   Email Request control Settings
    

## SMS Workflow

All of the configurations can be found in **Platform Configuration > Authentication Configuration > Phone Login.**

The following settings can be transferred:

-   SMS Templates
    
-   SMS Provider Configuration
    
-   SMS Request control settings
    

## Callback URLs

This includes all of the websites that are included in **Deployment > Apps > Web Apps.**

## Features

This will transfer the settings that you have configured for the cloud connector if you have selected the **Integration** option. **Note:** We recommend not to select the **Integration** option during syncing if you are not sure. For more information you can contact LoginRadius.

## Password Hashing settings

Your password encryption hashing algorithm, which can be found in **Data Governance>Data Security > Hashing Algorithm.**

This also includes the password expiration settings which can be customized in **Platform Security > Account Protection > Password Policy > Password Expiration.**

## Registration Form Schema

All of the standard and custom field settings are configured in your registration form, which can be found in **Platform Configuration> Standard Login.**

## Custom Object(s)

The custom object settings (Name, ID, Size) as specified in **Data Governance > Data Storage >Data Fields > Custom Objects.** Please note that this WILL NOT transfer the data stored in the custom object.

## Security Question

All of the Security Questions that have been customized in **Platform Security > Multi-Layered Security > Security Questions.**

## Multi Factor Authentication

All of the Multi-factor Authentication settings that can be found in **Platform Security > Multi-layered Security > Multi-Factor Authentication** If you want to transfer the SMS template for Multi-Factor Authentication, found it in **Platform Security > Multi-layered Security > Multi-Factor Authentication > SMS Passcode.**

## IDX

**All the IDX settings will be migrated from your source site to the destination site.**

**Note:** While using the configuration deployment on IDX, the same file location is updated from the source (development environment) to destination site ( production environment). Later on, when you want to make changes in development, if the IDX files, e.g. before.js is updated directly or uploaded with the same file name in the Admin Console under the development environment, it will be updated to both the development and production environment due to same file link.

**For example,** you have made changes to before.js file and uploaded with name before-rev1.js in your development site, and if you have performed configuration deploy by choosing **Identity Experience Framework Customization**, the same file network location is updated from the source (development environment) to destination site ( production environment) i.e before-rev1.js. After the sync, you want to further make changes in your development site, it is recommended to upload a new before.js file with a different name (e.g. before-rev2.js) other than before-rev1.js. Uploading the file with a different name creates a new network location URL in the LoginRadius platform. This prevents the changes made on the development site to be updated on the production site. Also, uploading the file with a different name reflects immediately ( there is no caching ).

## List of features that does not get cloned

Above we have discussed the features which get transferred to the target site from the source site. In this section, we give you the names of features/sections that do not sync in the site configuration sync process.

Below is a list of the features (in tabular form) that can not be transferred from one site to another site due to dependencies :


|Column 1 | Column 2 | Column 3 |Column 4 |Column 5 | Column 6 |
|---|---|---|---|---|---|
|Social Providers | Social Data Settings| Profile Access Permission| Custom Scope| External Permissions| Federated SSO|
|OAuth provider |ADFS Provider |SAML provider and SAML Configurations| JWT Configuration| Oauth2 Configurations|Open ID connect Configurations|
| Shopify Configurations | Big Commerce Configurations |Perfect Mind Configurations |Account API Keys | Additional API Secret| Data Center |
| Encryption in transit |Encryption in rest| Data Compliance|GDPR Compliance |SOTT | Custom Domain |
| SDK Library |Mobile Library |Turnkey Plugins |Social Sharing |On-demand export and scheduled export |Export Logs |
| Customer Management | Customer Segmentation |Data Query |Customer Insights |My Account- Team Management|Apple ID configurations|
| Manage Roles and permissions| Common Password Protection|Dark Web Monitoring|Field Level Encryption| 
|Consent Center| Default Roles and Permissions|RBA settings|IDX Framework-multiple themes|connected SSO| SSO Connector|
|Captcha Settings| Pin Authentication|Rest Hooks| Identity API Settings| Theme Customization|Voice OTP|
| Access Restriction Settings | Admin Email| Bot Protection| IP Access Restriction| Progressive Profiling| WebHooks|