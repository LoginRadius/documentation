# Confidentiality, Integrity, and Availability with LoginRadius

---

Security on our data platform adheres to the CIA model:

1. Confidentiality
2. Integrity
3. Availability

This document addresses how LoginRadius applies these 3 points for your data and also provides an overview of the best practices.

## Data Confidentiality

LoginRadius takes data confidentiality seriously. To ensure the protection of private or personal information such as corporate data, profile data, financial data, etc. Data confidentiality is achieved by placing proper access controls and restrictions over stored data and using encryption on stored data at rest and data in transit.

How is Data Confidentiality implemented on the LoginRadius Platform:

- **API key and Secret**: Any API call made to one of the LoginRadius Endpoints that handle administrative data management should contain an API Key and Secret. The API Key and Secret belong to the LoginRadius Account Owner. The API Key and Secret combination are to be kept confidential ensuring there is no way that customer data will be shared with the wrong person. The Account Owner has the ability to change the API secret at any time.

- **Additional sets of API credentials**: Create additional sets of API credentials for any 3rd party development or implementation teams, granting them limited access to the LoginRadius platform. Once the specific job of these 3rd party development and implementation teams is complete, these additional API credentials can be revoked. This ensures that only the required users/applications will be able to access the LoginRadius platform.

- **IP Access Control**: LoginRadius offers an additional layer of security you can leverage by configuring lists of allowed IPs that connect to the LoginRadius platform and databases. This ensures that all the requests received by LoginRadius are coming from a valid source.
    
    Bot Protection: LoginRadius provides Bot Protection functionality for your implementation. To achieve this, LoginRadius offers the ability to use popular CAPTCHA providers, such as Google reCAPTCHA.

- **Spam Protection**: LoginRadius uses industry standard DDoS protection security at the network level. Additionally, we also provide rate limiting on API calls.

- **Encryption-at-Rest**: To ensure that your customer data is stored securely in the cloud, we provide an additional layer of security by applying industry standard encryption to our data storage, logs, cache and persistence storages.
  Data Integrity
  The platform ensures non-repudiation and the originality of the data before processing the data, meaning the data stored has not been illegitimately updated, changed, removed, tampered, deleted, etc.

- **Encryption-in-Transit**: All communication in transit is encrypted. Any communication coming in or going out of the LoginRadius platform is secured over HTTPS (Signature algorithm - SHA256 + RSA). LoginRadius only allows communication with the TLS1.2 protocol; all lower versions of the SSL protocols are disabled.

SSL Ciphers Supported:

- TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
- TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
- TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
- TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
- TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
- TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
- TLS_RSA_WITH_AES_256_GCM_SHA384
- TLS_RSA_WITH_AES_128_GCM_SHA256
- TLS_RSA_WITH_AES_256_CBC_SHA256
- TLS_RSA_WITH_AES_128_CBC_SHA256
- TLS_RSA_WITH_AES_256_CBC_SHA
- TLS_RSA_WITH_AES_128_CBC_SHA

How LoginRadius achieves Data Integrity:

**Field Validation Rules**: Before storing any data field, validation rules are executed to check the integrity of the data. We also provide you with the flexibility to add more validation rules in each and every field based on your needs.

**Profile Verification Email/SMS**: LoginRadius provides functionality for Multi-Factor Authentication to ensure that any requests are processed by the authorized customer. This can be achieved by using an Authenticator or SMS One-time Passcode (OTP) for the second-factor.

**Audit Logs**: LoginRadius maintains logs on all of the events occurring on the platform. It provides you with the ability to perform audits for any potential unauthorized event.

**Internal Access Control**: Customer data can only be modified or deleted by authorized LoginRadius personnel and by your team members that you have defined to have the required access in the LoginRadius Dashboard.

**Timed Access Tokens**: The Access Token is generated after every successful login. This access token is unique and has an expiry time. Access Tokens can't be shared between customers and provide data integrity. Once expired the token can't be used to perform any activity. The lifetime of the Access Token is defined as per your requirements.

**API Key Roles**: The API Key is unique to your account along with the provided API Secret.

**Team Management**: LoginRadius provides a team management solution within the LoginRadius Dashboard, where you can give different permission(s) to your team members. This allows greater flexibility to restrict the level of access your personnel has to the customer data.

## Data Availability

LoginRadius ensures that the stored data is always available and can be accessed anytime via various methods i.e. REST APIs or the LoginRadius Dashboard.

How LoginRadius achieves High Data Availability:

**REST APIs**: LoginRadius provides its REST APIs to allow fast access to your data stored in the LoginRadius platform. The LoginRadius platform is a high availability system with 99.99% uptime. Using the APIs you can access your data any time as there is no downtime for any system maintenance activities.

**Data Backups**: The LoginRadius Platform automatically creates data backups at a high frequency. All of the data is incrementally backed up every minute and every 6 hours a full backup is performed. These backups are stored for a year before they get purged. In any case, that disaster recovery is needed, this data backup will be used to restore the data.

**Customer Dashboard**: LoginRadius provides a customer dashboard, where you can view or take action on your customer data based on access privileges.

**Integration Platform**: LoginRadius has support for integrations with multiple 3rd party platforms. Currently, the LoginRadius platform has over 150 integrations across different business processes. Based on your needs the data can be sent to different systems through the integration platform.

**Web Hooks**: The LoginRadius Platform provides a Web Hooks that facilitate moving your data to your external systems, these provided webhooks can be leveraged to build or set up integrations which subscribe to certain events occurring on the LoginRadius Platform.

**Failover and Disaster Recovery**: The LoginRadius Platform is hosted in the cloud. Each data center has Azure as an active instance and AWS as a failover instance. In case of any failure occurring on the primary Azure instance, all calls will be redirected to our AWS failover instances. The Application and Database in each instance are load balanced and auto-scalable based on the load and data. The LoginRadius application is deployed across 27 data center in different regions. In case of any data center failure for both Azure and AWS instance, all of the incoming calls will go to a different data center region. Should you need to perform database disaster recovery, LoginRadius has incremental backups (every minute) and a full backup(every 6 hours).
