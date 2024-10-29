## SAML Miscellaneous

This guide will help you with the following aspects related to SAML:

- **Troubleshooting SAML** configurations and the most commonly encountered issues that may arise during the SAML configuration process.
- **Best practices**, regardless of how you implement SAML, it is important to consider the best practices.
- **Custom Domain**, how to set the custom domain for better user experience

## Part 1 - Troubleshooting SAML

To troubleshoot a SAML workflow with LoginRadius, we suggest running a trace that will capture the SAML request, and response exchanged between your application, during the SAML login process. 

Here are the steps to use a SAML add-on to troubleshoot the SAML login flow:

1. Verify the certificate is valid, refer to [Information About the SSL Checker](https://www.sslshopper.com/ssl-checker.html).
2. Add SAML **DevTools extension** add-on to the Chrome browser. It is a chrome developer tools extension for viewing SAML messages in Chrome.
3. Open a new tab and click the three dots in the upper right corner of the screen and go to **More Tools > Developer Tools**.
4. When the developer panel opens, select the SAML tab.
5. Select the **Show Only SAML** checkbox. It adds a tab to the Chrome DevTools. The new SAML tab lists all requests and marks the SAML requests with green. Clicking the event displays the SAML XML.
6. Go to your site and start **SAML** flow.
7. You can see the **decoded SAML** request and response in the SAML tab in chrome dev tools.
8. Verify the details of the SAML request and response. A typical SAML request should match the issuer with the app audience.

## Part 2 - Best Practices

Let’s learn about the best practices you can follow while implementing SAML with LoginRaidus. You have to:

- Ensure, how you validate a customer identity transmits [AuthnRequest](#authnrequest3) to the Identity Provider
- Make sure to encrypt [SAML Assertion](#samlassertion4) and handle [Force Sign-in](#forcesignin5) when a user requests sign-on, but the user’s browser already has an active session.

Refer the sections below for the detailed information about best practices:

### AuthnRequest
A Service Provider (SP) wanting to validate a customer identity transmits an **AuthnRequest** to the Identity Provider (in this case, LoginRadius). The AuthnRequest should be signed to ensure a trusted SP is sending the request. If an AuthnRequest is not signed, an intruder might spoof a request.

### SAML Assertion
The **SAML Assertion** should be encrypted if the SP supports this feature. In a scenario in which an intruder can obtain a completed assertion, this practice of encrypting the SAML Assertion protects the information contained within.

### Force Sign-in
If the application receives a **sign-on request**, but the user’s browser already has an active session, replace it with a new user session. It reduces the risk of a user inadvertently seeing someone else’s data. It is also helpful to people who use SSO portals to sign in to different accounts in the same application.

## Part 3 - Custom Domain

LoginRadius allows you to use a custom domain for LoginRadius Identity Experience Framework (Hosted-IDX) to maintain a consistent experience for your customers.

>**Note:** This feature should be enabled by LoginRadius before you can leverage the custom domain for SAML workflow.

Your customers can access the LoginRadius Identity Experience Framework (Hosted-IDX) on ``https//<your domain> rather than on https://<your LR website.hub.loginradius.com``.
To configure the SAML workflow for a custom domain, you will have to replace ``https://<your LR website.hub.loginradius.com`` by ``https//<your domain>`` in all the SAML configuration in LoginRadius Admin Console as well SP application.