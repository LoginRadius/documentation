# Consumer Audit Logs 

## Overview

The LoginRadius identity platform offers a Consumer Audit Logs feature that automatically syncs the actionable API logs to your Audit Management/SIEM tools, e.g., Sumologs, Splunk, etc., in real-time. This provides granular insights into an API Level - who, when, and how the API calls are made to the LoginRadius system. For example, this information can help detect threats in real time, manage incident response, and even perform a forensic investigation on past security incidents. It also helps to prepare audits for compliance purposes, provides the functionality to track user engagement, and gains in-depth behavioral understanding with the built-in alert mechanism.

In addition, these logs can be used to improve the application’s performance and maintainability and automate actions that otherwise require manual intervention. It is critical that incident response time is fast enough. Additionally, customizable security alerts can really make businesses’ day-to-day activities easier, considering alerting a priority. 

## Cyber Security Incident Detection 

You can gather logs from all data sources across the network and trigger an alert for abnormal traffic patterns to detect malicious attempts on your application and respond to critical issues before they impact your business. Some of the examples are as follows: 

- **DDOS attack:** You can create an alert for any unexpected spike in API rate to your application to prevent any potential DDoS attack. Your DevOps team can block the malicious IP addresses and prevent any unwanted API calls. 
 
- **Brute force attack:**If there is a sudden increase in failed Login API calls for certain IP addresses, your team can block the originating IP addresses to prevent any potential Brute forcing attempts. 

- **Unauthorized access:** If there is a sudden increase in account delete APIs, your team can analyze the traffic in real-time and take preventive action to block unauthorized access to your application. 

## Regulatory Compliance 
Many international standards like ISO, HIPAA, etc., require you to keep an audit trail to establish when what events occurred and who (or what) caused them. The consumer audit logs stores timestamp, user id, IP address, etc., for each API call and allow you to comply with the audit log requirements from this regional compliance. 

Also, In the case of conflict with the consumer, you can prove to authorities the exact sequence of events relating to the particular data subject.

## Data Versioning 
Consumer Audit Logs work per user where UID is stored. Every change made to the user profile is stored/versioned and used for auditing purposes. You can resolve consumer queries for their profile data and build trust between the consumers and your business.

## Business Intelligence
Your team can develop consumer analytics and insight charts by device, location, time, etc., leveraging the historical audit log data. These charts can be presented to your organization to make informed business decisions. For example, If you see a large volume of Forgot Password API calls, then you may want to implement passwordless login/Social Login/ OTP login to provide a better user experience.

## Troubleshooting 

You can troubleshoot any issues occurring on your application due to recent releases or incorrect API calls. For example, if some of your end users report they are not able to log in to their accounts on your site, you can quickly investigate the issue by checking the consumer logs by user call and their API call response/error at your end.
