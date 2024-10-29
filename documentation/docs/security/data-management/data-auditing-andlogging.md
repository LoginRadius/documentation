# Data Auditing and Logging
 
The LoginRadius platform produces extensive logging for every interaction between end-users and LoginRadius applications, as well as internal team activity.This document will guide you through all the audits and loggings that LoginRadius do in order to capture different types of activity logs.

## Types of Logs

### Team Management Audit Trails

The team audit trail keeps track of records for all recent account activities. In order to take a detailed look, you can navigate through LoginRadius [**Admin Console > Account > Team > Audit Logs**](https://adminconsole.loginradius.com/account/team/audit-logs). The [Audit Log](https://www.loginradius.com/docs/api/v2/admin-console/team-management/audit-logs/#audit-logs) shows the description of actions taken by the Team Members, the time of occurrence and name of the  Team Members.


### Consumer Audit Logs

The LoginRadius identity platform offers consumer audit logs that automatically sync the actionable API logs, which include end-user activities such as profile edit, account delete, password reset, and more, which can further be used in order to track your consumer engagement and gain an in-depth understanding of your user base  to your **Audit Management/SIEM** tools, e.g., Sumologs, Splunk, etc., in real-time. This provides granular insights into an API level - who, when, and how the API calls are made to the LoginRadius system. You can use this information to prevent any malicious attempt on your application and track your consumers’ activities to personalize their experience. Please see the [**Consumer Audit Logs**](https://www.loginradius.com/docs/security/data-management/consumer-audit-log/) document for more information and its use cases. Also, the Audit log data is encrypted in transit when sent to your SEIM tool.

**List of User Audit Logs:**

- All LoginRadius API CRUD
- Social Provider APIs logs: Storing logs on failures from the social provider API’s
- Email Providers logs
  - Storing Errors relating to failed email delivery.
  - We have integrations available for SMTP providers such as Sendgrid, Mandrill, etc.
- SMS Providers logs
- Third-Party Integrations API logs
  - Storing third-party integrations API errors.
- Webhook API logs
  - Storing webhook endpoint failures errors.


