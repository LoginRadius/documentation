# On-Demand Export

The **On-Demand Export** option allows you to request a one-time export of your user data. The following explains how you can create a request for on-demand data export:

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/) account and navigate to [Integration>Data Export](https://adminconsole.loginradius.com/integration/data-export/on-demand-export).

The following screen will appear:
![On-Demand Export](https://apidocs.lrcontent.com/images/DE_206235e83d8a1cdc1e2.60263275.png "On-Demand Export")

**Step 2:** Click the **Add A New Request** button, and the following pop-up will appear:

![On-Demand Export](https://apidocs.lrcontent.com/images/de2_278435e83d8d566b595.39992476.png "On-Demand Export")'

**Step 3:** Select the export data value from the drop-down list as per your requirement, i.e. Profile, Custom Object, and Profile and Custom Object.

> **Note:** **Custom Object** export and **Profile and Custom Object** export will have the custom object field only when the custom object schema has been configured by LoginRadius in the analytical database.

**Step 4:** Select an export type, i.e. JSON or CSV.

**Step 5:** By default, all the fields are applicable for the selected export data. However, you can choose fields as per your requirements.

**Step 6:** Select a start and end date from the respective calendar options, i.e. duration for which you would like to export the customer data.

**Step 7:** Add the email address of the recipient(s) who should receive the exported data link. You can add multiple email recipients.

**Step 8:** You can either enter the password or generate a random password. The password is required to view the export data. Thus, you must remember the entered/generated password.

**Step 9:** Click the **Request Export** button to create the request. The following displays the created on-demand export request:

![On-Demand Export](https://apidocs.lrcontent.com/images/cde1_272565e84eed0d7a739.86436602.png "On-Demand Export")

> **Note:** The **Progress** column displays the status of the on-demand export request. You can keep tracking the export request status here. However, upon export completion, the added recipients will automatically receive an email with the respective password-protected data file attached.
