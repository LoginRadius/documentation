# LoginRadius Data Security

## Overview
This document describes how LoginRadius’ infrastructure protects the data retrieved from your systems or from your end-users. Data encryption and protection prevents data exposure to unauthorized third parties and keeps end-user data and company information safe. Effective protection of this data is enforced by securing the data while in transit and at rest.

Data in Transit is data that is actively moving between two endpoints in a system. When an end-user submits their data to LoginRadius servers, data has to be transported from their device to LoginRadius servers. While this transportation is occurring, the data is considered to be Data in Transit. LoginRadius protects Data in Transit by using an HTTP over TLS connection to transport data.

Data at Rest is data that is stored on a database or device without active movement. This includes data stored in the cloud and on servers. LoginRadius implements measures to protect high risk Data at Rest, such as passwords and security questions, by hashing the high risk data kept within cloud servers and the database using an assortment of different hashing algorithms. All data is encrypted by LoginRadius using an AES solution. In addition, MongoDB and our cloud platform services with Azure and AWS implement their own solutions to protect Data at Rest. To protect customer credentials required for third-party provider authentication, data is encrypted before being used by LoginRadius to authenticate an end-user’s session.

### Data-In-Transit
LoginRadius provides end-to-end encryption in transit. Data is transported between LoginRadius, your systems, and the end-user using a secure [HTTPS connection](https://www.ssllabs.com/ssltest/analyze.html?d=api.loginradius.com&hideResults=on) utilizing TLS 1.2. The signatures are protected using a SHA-256 with RSA encryption signing hashing algorithm. A list of the ciphers supported are as follows:
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

![Data in Transit](https://apidocs.lrcontent.com/images/image2_250895c3d2397ba2661.77842407.png "Data in Transit")

### Data at Rest

When any data is stored by LoginRadius, the data is encrypted to prevent it from being read through unauthorized methods. The encryption is achieved via AES, an encryption method which uses a secret key to encrypt data. Whenever an entity attempts to access this encrypted data, the same secret key is used to decrypt and display the information in a readable format. As AES is one of the industry standard symmetric encryption algorithms, Data at Rest at LoginRadius is kept secure.

Customer third-party provider credentials are also encrypted via a secure key storage protocol with [Azure Key vault](https://azure.microsoft.com/en-in/services/key-vault/) during the authentication steps being processed by LoginRadius. This means when our integration platform is used as part of your workflow, provider credentials will be masked from LoginRadius but still provide the data needed to authenticate the login session.

In addition to the LoginRadius Data at Rest security measures and the usage of Azure Key Vault in handling third-party provider credentials, the cloud platforms and persistent storage utilized in the LoginRadius solution also have built-in Encryption at Rest protocols. Storage of persistent data is accomplished through [MongoDB](https://docs.mongodb.com/manual/core/security-encryption-at-rest/) which implements their own security measures to protect Data at Rest. Our cloud platforms include both [Microsoft Azure](https://docs.microsoft.com/en-us/azure/security/azure-security-encryption-atrest) and [Amazon Web Services](https://aws.amazon.com/blogs/security/how-to-protect-data-at-rest-with-amazon-ec2-instance-store-encryption/), which provide their own implementations for protecting data at rest.

![Data at Rest](https://apidocs.lrcontent.com/images/image1_296295c3d2500cd9578.24630227.png "Data at Rest")
