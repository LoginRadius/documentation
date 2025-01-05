# Blocked Customers

The Blocked Customers screen displays the list of blocked customers from logging into your application.

The following explains how you can search and manage the blocked customers in your account:

**Step 1:** Navigate to [**Profile Management > Customer Management > Blocked Customers**](https://adminconsole.loginradius.com/profile-management/customer-management/blocked-customers), and the following screen will appear with the list of your blocked customers:

![Blocked Customer](https://apidocs.lrcontent.com/images/blc-1_21099883976661b64e31be32.16089046.png "Blocked Customer")

**Step 2:** To search for the blocked customer, the following are the available search parameters:

- **Domain:** This dropdown lists the domains from where the customers are registered to your application.
- **Fields:** You can also search for customers using the email address or UID fields in the provided textbox.

The following screen displays the search result displayed based on the applied search parameters:

![Customer Management - Blocked - Search](https://apidocs.lrcontent.com/images/blc-2_19495722536661b7faee0575.47755827.png "Customer Management - Blocked - Search")

**Step 3:** To manage the blocked customer, click the **Manage** button from the above screen. The customer profile pop-up will appear:

![Block](https://apidocs.lrcontent.com/images/Customer-Management-LoginRadius-User-Dashboardunblock_42026222745e6e08c2.30688142.png "Block")

**Step 4:** To Unblock the customer, click the **Unblock Customer** button from the right section of the screen, as highlighted in the following screen:

![Block](https://apidocs.lrcontent.com/images/Customer-Management-LoginRadius-User-Dashboardunblock_42026222745e6e08c2.30688142.png "Block")

> **Notes:**

> - You block the customers from LoginRadius Admin Console, or they get blocked on reaching the maximum wrong login attempts if configured in the [Brute Force Lockout](https://www.loginradius.com/docs/authentication/concepts/customer-security/) feature.

> - You can also unblock customers by using [Auth Unlock Account by Access Token](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlock-account-by-access-token/) API.
