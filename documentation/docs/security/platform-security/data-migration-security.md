## Data Migration Security and Sanitization

An important part of transitioning to a new Customer Identity Management platform is ensuring the handling and delivery of your user data is executed efficiently and securely to fully mitigate any risk that is inherently present when accessing or moving sensitive user details.

### Data Migration Security

To eliminate any exposure during this sensitive transition of user data, LoginRadius has developed specific protocols and tools to migrate your user data into the LoginRadius platform. This document goes into detail regarding the mechanisms and protocols that we have in place to ensure the safe, secure, successful migration of your user data.

- **In-Transit Data Security:** The data transfer process has the following security during the in-transit data request:
- ** Secure HTTPS Tunnel via server-to-server process:** The communications are handled via a server-to-server transaction over HTTPS, meaning that the transfer of data is entirely secure.
- **SFTP Delivery of Resources**: Any delivery of files or resource is handled over SSH via our secure SFTP. The SFTP service is a write-only, dedicated instance that allows you to securely pass details or files to the Data migration team.
- **IP/Domain Whitelisting**: Ability to submit data to LoginRadius, either via SFTP or Migration Software, is restricted to predefined IPs/domains.

- **Authorization Security:** The data migration process has built-in authorization and user credentials security:
- **Secure Credentials Storage:** Any access credentials provided for testing or migration purposes are securely stored in an encrypted key vault and only leveraged by the Migration Software when required.
- **One-way password hashing:** LoginRadius only accepts one-way hashed passwords, meaning that it is impossible to decrypt and therefore impossible for anyone (even the LoginRadius team) to see your users' passwords. We support the most up-to-date security algorithms and are able to assist in rolling your existing passwords over into the most secure algorithm if your currently used algorithm is dated.

- **Infrastructure Security:** The LoginRadius infrastructure security is built-into the data migration process:
- **System-wide Security protocols**: We use our standard security policies and practices to make sure that we are compliant with security standards. All of the SFTP servers, data files storage, etc are behind the firewall and protected in LoginRadius Infrastructure. Full details on the system infrastructure security can be found [here](https://www.loginradius.com/docs/infrastructure-and-security/threat-prevention)
- **Data Perseverance**: All data is maintained in the transit storage temporarily. Once the data migration process is complete, data is disposed of based on industry standard data governance procedures for deletion of records.

### Data Migration Sanitization

All data transferred into the LoginRadius system undergoes a complete data sanitization process. This process guarantees the data you are transferring is normalized into the LoginRadius format, contains only valid records, and any preprocessing of data is applied.

Data Sanitization covers the following cases by default:

- **Data Deduplication**: The data migration process checks for the duplicate data points during the migration and allows for customizable rectification of duplicate data.
- **Type Checking**: All fields are verified and converted to the correct format.
- **Required Field Verification**: Any fields deemed necessary for the migration are checked for inclusion.
- **Data Normalization**: Data is transformed into the LoginRadius Normalized User Profile Format.

The data migration sanitization process also includes customizable flows to handle additional data Sanitization based on your requirements, such as:

- **Field level preprocessing:** Modify or supplement field data based on your requirements.
- **Custom field or Custom object normalization**: Full Support for all LoginRadius data storage options.
- **Data merging from multiple origins**: The migration sanitizers handle merging and unifying discrepant data sources into a single unified user account record.
