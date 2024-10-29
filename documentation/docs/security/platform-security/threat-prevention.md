Threat Prevention On The LoginRadius Platform
=================
-----------------------------

A major part of our Customer Identity and Access Management (cIAM) solution is not just the ability to improve the user’s experience registering and logging into a website, but also to ensure that there's a robust security layer to prevent or block any threatful activities.

LoginRadius offers a number of fully configurable and customizable options, built directly into the platform, that are designed to prevent threats and block irregular activities at any point in the user registration and login-related flows. This document goes into detail about all of the threat prevention mechanism exist within LoginRadius Platform, so that you have peace of mind when you use LoginRadius services for your online application, whether it be a website, mobile application, gaming console, smart TV, etc.


## Threat Prevention Matrix
![Threat Prevention Matrix](https://apidocs.lrcontent.com/images/threat-prevention-matrix_129745ac7a56d60b242.81664811.png "Threat Prevention Matrix")


### **Secure Client Session Management**

LoginRadius uses secure technology and best practices for client session management. The primary method for maintaining a user’s client session in web browsers is via cookies, it is critical to ensure that they are secure and hack-proof.

- **Secured Cookies**: Our system by default creates secured cookies which are only accessible via the HTTPS protocol.

- **HTTP only**: We set some of the critical cookies to HTTP only to ensure that they cannot be accessed through client-side JavaScript.

- **Encrypted with AES and signed HMAC_SHA 256**: Although our cookies are secure, we encrypt them using the AES algorithm, and we make them temper proof using HMAC_SHA 256 hashing.

- **Cookie Expiration**: We have the option for our customers to customize the expiration times on cookies, including session cookies.


### **Secure Server Session Management**

LoginRadius uses secure technology and best practices for server session management. We use OpenID Connect protocol standards with timed access tokens to ensure server sessions are secured and private for each user.

- **Access Token Expiration**: Our customers can set a custom expiration period for the access token, making the session no longer valid after the token expires.

- **Invalidate Access Token**: This feature allows for the explicit expiration of access tokens from the server.

- **Invalidate Current Sessions**: The user can fully manage their existing sessions and invalidate any currently active sessions manually.

- **Invalidate Sessions on Event**: Based on predefined events, the system can invalidate any currently active sessions for a user.

- **Remember Me**: This option allows the user’s session to be preserved within the browser, even after the browser has been closed and is reopened.

- **Refresh Access Token**: This option gives you control to refresh the user’s access token and extend the user’s session for a given period of time.

- **Enforce all users to logout**: Account administrators have the ability to invalidate all currently active sessions for their users. This forces all users to re-authenticate and gives an opportunity to request extended data or display updated terms and conditions.

- **Control session for each user**:  Account administrators have granular control of their user’s sessions and can invalidate a specific user’s individual session.

### **Web Application Firewall (WAF)**

The LoginRadius platform has a built-in web application firewall in order to prevent web application programming attacks.

- **Script injection**: Our APIs are fully secured against script injection attack.

- **SQL injection**: Our APIs are fully secured against SQL injection attack.

### **Infrastructure Level Security**

The LoginRadius infrastructure is based on a secure multi-tenant architecture design, with full end-to-end in-transit encryption from the end user’s browser to the LoginRadius cloud application, as well as internal data server encryption. The LoginRadius data storage also offers the highest level of security by using data encryption at rest.

- **Multi-Tenant System**: All customer data is separated by a physical file boundary. We also create a private database for each customer.

- **Isolated Application Server**: We have isolated servers for each infrastructure level, database, application servers, cache servers, load balancers, etc.

- **Static IPs**: We have static IPs for all public facing applications.

- **Firewall Protected**: All servers are firewall protected, so only the required ports are open.

- **Encryption in transit (end-to-end)**: All LoginRadius APIs calls as well as the associated data are encrypted in transit from the end user to the LoginRadius cloud application and also in transit within our data center.

- **Encryption at REST**: Our data storage, logs, cache and persistence storages are fully encrypted.

- **Database Level Access Control**: Our databases are fully protected via access control, and a restricted firewall within our private network, ensuring that only our data application layer can access the databases. The data cannot be accessed by any other system.


### **Intelligent Security Features**

The LoginRadius platform has built-in intelligent security features as part of our application design and framework.

- **Detect suspicious devices to protect against threats**: Our system detects fraudulent devices and blocks any action from them.

- **Detect suspicious IPs/Proxies**: Our system detects suspicious IPs (client IP or proxy server’s IP) and blocks any action from them.

- **Detect breached emails to protect against threats**: Our system is integrated with data breach detection services and can detect if your user’s data has been breached anywhere and enforce various mitigation actions.


###**API Communication Security**

As REST APIs are a critical part of the LoginRadius platform, we have built them using industry standard best practices for maximum security.

- **API Keys Security:** All access management APIs, i.e. APIs that provide access to authentication, registration, data management, etc., are protected by API Keys.

    - **Primary API Secret:** There is only one Primary API Secret and is needed to call the access management APIs. It has full API access and can be used in any capacity with the LoginRadius platform. Customers can request it to reset as per their requirement.

    - **Additional API Secrets:** These API Secrets can be generated to take the place of the Primary Secret for specific actions based on their permissions.

        - **Role:** These Secrets can be set for a specific role.

        - **Revoke:** These Secrets can be revoked at any time.

        - **Expiration:** These Secrets can have a predefined expiration and will be automatically revoked after the specified time period.

- **CAPTCHA:** For registration APIs, we provide captcha options that force users to verify that they are not a bot or a malicious user.

- **SOTT:** For mobile devices, we provide an alternative to captcha in the form of a secure one-time token (SOTT), which can be long-term and also revocable.

- **Message Hashing:** If a customer does not want to directly use the API Secret, they can provide a hashed signature or body hash using the API Secret, which our system will validate and allow the API call to pass through if matched.

- **Access Control:** Our API calls are secured using API secrets, but for systems which may require higher security, we can enable Access Control over the APIs.

    - **IP Access Control:** We provide the ability to whitelist IP addresses for access management APIs which restricts API calls to only the whitelisted IPs.

    - **Read-only API Access:** Through our additional API Secrets feature, additional API Secrets can be set to read-only.
