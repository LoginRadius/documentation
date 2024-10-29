# Customer Data Overview

---

LoginRadius creates a unique and separate cloud database instance for each customer. The cloud database contains all of the customer profile data from various activities such as customer Registration, Login, Custom Objects, Social Login, Social Activity, Anonymous Login, Phone Login, Single Sign-on with various web apps, mobile app activities, etc. The LoginRadius Data Management Platform can also gather data from various sources and APIs to enrich the customer profile data.

The LoginRadius Data Management Platform has built-in, end-to-end Encryption in Transit and, for additional data security, Encryption at Rest, which can be added for an additional fee. The LoginRadius Platform always ensures that data is fully compliant with social networks and website privacy policy and compliances.

## LoginRadius Data Management Platform

The LoginRadius Data Management Platform encompasses a number of features and tools to ensure the accessibility and security of your customer data. The services detailed below provides a seamless transition to our system for both you and your customers and speedy retrieval of your customer data, all the while fulfilling the necessary security and compliance requirements.

### Customer Data Migration

LoginRadius provides a turn-key customer data migration software to migrate existing customer data from either a single source or multiple sources to the LoginRadius cloud data storage. The [LoginRadius Data Structure]https://www.loginradius.com/docs/governance/data-schema/) can support any existing data format and [Password Hashing Algorithm](https://www.loginradius.com/docs/security/platform-security/cryptographic-hashing-algorithms/) to import the data into the LoginRadius . The main goal of this process is to provide the least amount of impact to your existing customers, and we have various custom workflows of providing a low impact transition, such as sending welcome or password reset emails to your customers during the migration process. During the process of migrating existing customer data into the LoginRadius , we provide a seamless transition, with zero downtime, for both you and your customers.

For more information on data migration, see this [document](https://www.loginradius.com/docs/api/v2/getting-started/data-migration/).

### Dynamic Data Schema

The LoginRadius dataset has multiple methods of data storage which allows us to store and manage any format of data. Among the LoginRadius normalized user profile, custom fields, and custom objects, there is no data that cannot be stored in LoginRadius.

For more information on our dynamic data schema see this [document](https://www.loginradius.com/docs/governance/data-governance-overview/).

### Auto Indexing and Normalization

Accessing your customer data is important and, with large data sets, this should not slow down or prevent you from consuming your data. To this end, we have configured a normalized standard schema for customer profile storage with a set of built-in indexes that are automatically applied to improve the speed and efficiency of data retrieval. Storing custom data? We also dynamically index any custom data that you store so that you get the same response times that you see with our normalized data.

### Single Data Layout

LoginRadius supports over 30 different [identity providers](https://www.loginradius.com/docs/platform-features-overview/registration-services/social-login-feature) out-of-the-box, along with the ability to support an unlimited number of [additional providers](https://www.loginradius.com/docs/api/v2/custom-identity-provider/custom-oauth-provider). In order to simplify the consumption of this data, LoginRadius allows you to normalize all of your data from different sources into a single normalized format. Therefore, consuming the data will not require different code bases or mappings.

### JSON Data Format

All APIs and interfaces return LoginRadius normalized data profiles and API responses in an easy to use JSON format. This web standard format makes the data easy to consume and pass to other systems.

For a detailed outline of our JSON data format see this [document](https://www.loginradius.com/docs/api/v2/user-registration/detailed-data-point).

### Data Governance and Security

LoginRadius provides the best-in-class data security while giving you control over how and where your data will be maintained. The following features are some of the ways in which we accomplish this:

1. One-way hashing - The LoginRadius platform, by default, performs one-way hashing for critical data such as passwords, security questions, etc. with the industry standard hashing algorithm. This specific encryption protocol is customizable and can be upgraded to a more secure algorithm at any time; upgrading does not require resetting the password for all customers. By using one-way hashing, the stored information can only be matched, but cannot be decrypted.
2. Encryption in Transit - The LoginRadius platform has built-in support for end-to-end encryption in transit for data transfers. All data communication from the client browser to the LoginRadius application travels over secure HTTPS tunnels with industry standard ciphers.
3. Encryption at Rest - The LoginRadius data management platform also supports encryption at rest for data storage.
4. Data Compliance - LoginRadius supports all major compliances and policies and meets a wide range of regional specific data compliances that allow you to store your data in any global region. We provide you with an ease of mind as we handle the specific data compliances required for each of the locations.

## LoginRadius Customer Data Administration

In addition to storing the customer data in the LoginRadius secure , we provide a number of tools that allow you to better manage your customers and leverage the data. While the customer management tools are easily accessible via the LoginRadius dashboard, we also have a rich API library that enables you to customize your customer management process as you see fit.

### Customer Management

LoginRadius provides a full suite of customer management tools. These give your admins or customer service team the ability to fully manage any requests from your customers directly in the LoginRadius dashboard without needing to create your own management console via LoginRadius APIs

For an overview of the features supported in the customer management platform, see this [document](https://www.loginradius.com/docs/profile-management/customer-management).

### Customer Segmentation

To better understand your customer base and create customized lists of targeted customers that you can easily feed into your marketing or BI platforms, LoginRadius offers an Admin Console driven segmentation tool. This includes a full query building tool with which you can set up and save custom filters to retrieve custom segmented lists of your customers. These lists can be downloaded in CSV or JSON format and can easily be imported into your third-party platforms.

For an overview of the features supported in the customer segmentation platform, see this [document](https://www.loginradius.com/docs/user-management/segment-users).

### Customer Data Export

Similar to Customer Segmentation, LoginRadius provides the ability to export your customers directly in JSON or CSV formats. This can be set up to retrieve customers in a given timeframe or as a full export of your entire customer base. The export of these reports can be scheduled on a daily, weekly, or monthly bases in order to monitor your customer growth. You are also able to perform one-time exports as needed.

For details on how you can export your customer data see this [document](https://www.loginradius.com/docs/customer-management/user-data-export/data-export-overview/).

### Account REST APIs

If you would like to directly embed the customer management console into your own internal management platform, LoginRadius provides a full suite of APIs that handle all aspects of customer management such as providing new accounts, reset passwords, block/delete accounts, and more. Check out our [API documentation](https://www.loginradius.com/docs/api/v2/getting-started/introduction/) for an API playground that allows you to try out individual APIs as required.

For a complete listing of our APIs see or [API reference documentation](https://www.loginradius.com/docs/api/v2/getting-started/introduction/).

### Identity Storage API

Need to tie the reporting and exporting features directly to your systems? LoginRadius has an API for that. All of the data access features described above are also available via API, so you can programmatically access and pass this data to your systems.

For a listing of our Identity APIs and details on how to use them see this [document](https://www.loginradius.com/docs/api/v2/cloud-directory-api/overview).
