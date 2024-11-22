# Data Migration

## Overview

The LoginRadius Data Migration service allows you to migrate your existing customer data to LoginRadius. This process provides a seamless transition for your customers, requiring zero downtime. There are 3 methods for migrating data:

1. CSV (Recommended)
2. Middleware Export
3. Third-party SaaS Vendors

## Types of Migrations

There are multiple methods of delivery of data to the LoginRadius platform, The LoginRadius data migration team will provide consultation on the most suitable solution for your data during the initial scoping of the data migration. Below we go over the high-level details for each of the delivery options:

1. **CSV (Recommended)**: Your current customer database is exported to a CSV file. LoginRadius will provide a dedicated SFTP server where the CSV file or files will be uploaded. LoginRadius will then customize the migration service to verify, sanitize, and migrate the data into LoginRadius Cloud Storage. This is the preferred and recommended
2. **Middleware Export**: LoginRadius provides customized migration software for you to execute, which pulls customer data from your database and transfers it to LoginRadius via secure server-to-server communication. Once the data is received, LoginRadius will verify, sanitize, and migrate the data into LoginRadius Cloud Storage. See below for a list of _Supported Migration Software Database Platforms_.
3. **Third-party SaaS Vendors**: LoginRadius provides migration software to facilitate transferring customer data from third-party SaaS vendors to LoginRadius. This software can be executed either directly by LoginRadius or by your development team.

## Supported Migration Software Database Platforms

LoginRadius has preconfigured software available for the following database technologies:

- IBM DB2
- MariaDB
- Microsoft SQL Server
- Microsoft Access
- Mongo DB
- MySQL DB
- Oracle DB
- PostgreSQL DB
- SQLite
- SQLAnywhere

> Note: If your database technology is not included above, please reach out to [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) to discuss your specific migration requirements.

## Supported Hashing Algorithms

LoginRadius supports a broad range of [hashing algorithms](https://www.loginradius.com/docs/security/platform-security/cryptographic-hashing-algorithms/). Regardless of migration type, LoginRadius will work closely with your security team to ensure your desired hashing algorithm is applied. Our Data Migration service is built to support legacy data, multiple data sources, and further scenarios in which customers may have complex password hashing requirements. This support provides a seamless transition, allowing you to preserve all of your customers' credentials without requiring a password reset. Moreover, LoginRadius provides support for [upgrading your existing hashing algorithm](https://www.loginradius.com/docs/infrastructure-and-security/cryptographic-hashing-algorithms).

> Note: If your hashing algorithm is not currently listed in our documentation, Reach out to [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) to discuss your specific migration requirements.

## The Data Migration Process

The following is an overview of a typical Data Migration with LoginRadius:

![The LoginRadius Data Migration Process](https://apidocs.lrcontent.com/images/data_migration_process_final_graphic_202925cf008799536b1.57856822.jpg "enter image title here")

### Information Gathering Phase

This is the stage where LoginRadius gathers your migration requirements and plans the initial phases of the migration. We will work closely with your team to ensure that all migration requirements are understood, and that next steps and timelines are clearly established.

**Your dedicated LoginRadius Customer Success Manager (CSM) will:**

- Provide a Data Migration package containing a questionnaire to elicit your migration requirements

**Your Responsibilities:**

- Review the Data Migration package and return the completed questionnaire
- Provide a data set of 10-100 test customers. These customers can consist of either fake (recommended) or real customer data.

### Preparation Phase

This phase is where LoginRadius will customize the migration service as per your requirements. It consists of two phases: the Test Migration Phase and the Client Sign-Off on Migration Rules Phase.

#### Test Migration Phase

In this phase, LoginRadius will run through one or multiple test migrations to ensure that migration requirements agreed upon in the Information Gathering Phase are met. The test migration will be performed on your dev (QA/staging) site.

**Your CSM will**:

- Work with you to schedule a date for the test migration
- Deliver migration logs after the test migration is complete

**Your Responsibilities**:

- Provide a data set of test customers if different from the Information Gathering Phase
- Validate the migrated data and confirm with your CSM that the data is correct

#### Client Sign-Off on Migration Rules Phase

This phase marks the end of the Preparation Phase. It ensures that LoginRadius has met all of your migration requirements. After you have reviewed and confirmed that the test migration data is correct, no further changes will be made to the migration service in the lead up to the production migration.

**Your CSM will**:

- Your CSM will send you a Migration Rules Sign-Off form.

**Your Responsibility**:

- Sign off on the migration rules after validation is complete.

### Production Migration Phase

In this phase, LoginRadius will migrate your actual customers to your production environment.

**Your CSM will**:

- Schedule a date for the production migration and post-production migration (if applicable). 5 business days notice is required for each migration.
- Create a dedicated communications channel and update you throughout the migration process.
- Deliver migration logs after the production migration is complete.

**Your Responsibilities**:

- Upload your customer data
- Validate the migrated data and confirm with your CSM that the data is correct.

### Post-Production Migration Phase

In this phase, LoginRadius will migrate new customers captured after the production migration, or update/delete existing customers based on post-production customer activity. The post-production migration process is identical to the production migration. The post-production migration must occur within 48 hours of the production migration.

##Security Measures

The LoginRadius Data Migration Service and overall migration process have been built to ensure that your customer data is kept safe and secure. Here is how we accomplish this:

- **One-way Password Hashing**: LoginRadius only accepts one-way hashed passwords, meaning that it is impossible to decrypt and therefore impossible for anyone (even the LoginRadius team) to see your customers' passwords. We support the most up-to-date security algorithms and are able to assist in rolling your existing passwords over into the most secure algorithm if your currently used algorithm is outdated.
- **Secure HTTPS Tunnel via Server-to-Server Process**: Communications are handled via a server-to-server transaction over HTTPS, meaning that the transfer of data is entirely secure.
- **Secure File Transfer Protocol (SFTP) File Delivery**: To ensure the security of customer data when delivering CSV files to LoginRadius, we will provision a dedicated SFTP server for file delivery.
