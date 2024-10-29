# Overview

LoginRadius is introducing a new feature where you can configure the consumer Audit Log integration with third-party providers as per your choice. Previously, it was managed by LoginRadius, which could not be changed. However, we have enhanced our service now and provided some more options. This feature helps you collect and organize large volumes of data quickly and efficiently in your central logging.

These integrations make it simple to monitor performance and traffic while also providing analysis of structured data from any source throughout any timescale. With these capabilities, you can keep a comprehensive track of your LoginRadius platform and ensure its top-notch condition.

> **Note:** Before proceeding to set up audit log integration, first, you have to make sure the Consumer Audit log feature is enabled or not. For more details, kindly refer to this [document](https://www.loginradius.com/docs/security/data-management/consumer-audit-log/#overview0).

To enable this feature, please contact [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

## Supported Integrations

1. LOGSTASH
2. SUMOLOGIC
3. SPLUNK
4. DEVO

> **Note:** At one particular time, only one integration can be configured.

For configuring this feature, kindly navigate to the [Audit Log Integration](https://adminconsole.loginradius.com/integration/audit-log/audit-log-integration) section of the Admin Console.

### Logstash

For configuring this audit log service, kindly perform the following steps:

- First, provide the Logstash endpoint where the data will be sent. This endpoint can be of the following format: `http://119.7.7.1:74712`

> **Note:** As an additional security measure, you can check the SSL authentication, as this is a process where both the server and the client verify each other's identities during a secure communication handshake.

- Then add the Root CA Path, which is responsible for validating the authenticity of digital certificates.

- After entering the above details, enter the certificate path, which is in addition to validating the root CA's signature on the end-entity certificate. The certificate path includes the verification of signatures for any intermediate CA certificates that may exist between the root CA and the end entity.

- After providing the details about the certificates, provide the private key. Please note that the private key must be kept confidential and is used to decrypt data that has been encrypted with the corresponding public key.

- For Logstash, you will also be required to provide the login credentials.

![Logstash](https://apidocs.lrcontent.com/images/Audit-Log-LoginRadius-User-Dashboard_71569444365870c52a60860.94459584.png "Logstash")

### SumoLogic

SumoLogic has a very basic integration process where you only have to provide the endpoint, which will synchronize the log data to the SumoLogic.

![SumoLogic](https://apidocs.lrcontent.com/images/Audit-Log-LoginRadius-User-Dashboard-1_48004088665870deb2436d8.56460639.png "SumoLogic")

### Splunk

Splunk is also one of the 4 integrations that helps you send the log data to third-party service providers where you can monitor and manage the end-user data.

Here, you also have to provide the endpoint where the data will be synchronized along with the token, which will be obtained from Splunk to establish a secure connection.

![Splunk](https://apidocs.lrcontent.com/images/Audit-Log-LoginRadius-User-Dashboard-2_88579564765870e5bd8ea67.78404984.png "Splunk")

### Devo

Devo is also one of the reliable audit log monitors through which you can obtain granular insight into the API access for your site. To enable this integration, kindly provide the following details:

- First, provide the endpoint, domain, and also the token, which can be obtained from the Devo dashboard.

- In this service provider, you have to add one additional field, which is Storage Collection, which is also obtained from the Devo dashboard.

![Devo](https://apidocs.lrcontent.com/images/Audit-Log-LoginRadius-User-Dashboard-3_159960347665870edb95e724.61837063.png "Devo")

If you need assistance with this, [submit a ticket](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) with the LoginRadius support team and someone will be able to assist.